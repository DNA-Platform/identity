import sys
import os
import svgtrace
import cv2
import numpy as np
from lxml import etree
import uuid
import tempfile
import argparse

def load_image(image_path):
    """
    Loads an image using OpenCV, ensuring compatibility for PNG and JPG.
    Handles missing files gracefully.

    Parameters:
    - image_path (str): Path to the image file.

    Returns:
    - img (numpy.ndarray): Loaded image.
    """
    if not os.path.exists(image_path):
        raise FileNotFoundError(f"Error: File not found - {image_path}")

    img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        raise ValueError(f"Error: Unable to load image - {image_path}")

    return img

def convert_to_grayscale(img):
    """
    Converts an image to grayscale.
    - If the image has an alpha channel, extracts the RGB channels before conversion.
    - Ensures transparency is preserved in final processing.

    Parameters:
    - img (numpy.ndarray): Input image.

    Returns:
    - gray_img (numpy.ndarray): Grayscale image.
    """
    if len(img.shape) == 3 and img.shape[-1] == 4:  # Extract RGB channels if transparency exists
        return cv2.cvtColor(img[:, :, :3], cv2.COLOR_BGR2GRAY)
    return cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

def apply_denoising(img, enabled=True):
    """
    Applies denoising to an image to reduce artifacts, particularly for JPG images.
    - Uses Non-Local Means Denoising for JPG compression artifacts.
    - Leaves PNG images unaltered since they are lossless.

    Parameters:
    - img (numpy.ndarray): Input grayscale image.
    - enabled (bool): Flag to apply denoising.

    Returns:
    - denoised_img (numpy.ndarray): Denoised image.
    """
    if enabled:
        return cv2.fastNlMeansDenoising(img, None, 30, 7, 21)
    return img

def apply_thresholding(img, method="adaptive"):
    """
    Applies thresholding to an image to enhance edge detection.
    - `adaptive`: Best for AI-generated images with soft gradients.
    - `otsu`: Best for high-contrast images like sketches.
    - `canny`: Best for maps and technical drawings with clear structures.

    Parameters:
    - img (numpy.ndarray): Input grayscale (or denoised) image.
    - method (str): Thresholding method ('adaptive', 'otsu', 'canny', or 'binary').

    Returns:
    - thresholded_img (numpy.ndarray): Thresholded image.
    """
    if method == "adaptive":
        return cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                     cv2.THRESH_BINARY, 11, 2)
    elif method == "otsu":
        _, otsu_thresh = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        return otsu_thresh
    elif method == "canny":
        return cv2.Canny(img, 50, 150)  # Edge detection for maps
    else:
        _, binary = cv2.threshold(img, 128, 255, cv2.THRESH_BINARY)
        return binary

def extract_contours(img, min_contour_area=100):
    """
    Extracts contours from an image while filtering out small unwanted details.
    - Used for structured tracing of maps and technical drawings.
    - Min contour area prevents excessive detail from overwhelming SVG output.

    Parameters:
    - img (numpy.ndarray): Binary image after thresholding.
    - min_contour_area (int): Minimum area of contours to retain.

    Returns:
    - filtered_contours (list): List of contours meeting the area criteria.
    """
    contours, _ = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    filtered_contours = [cnt for cnt in contours if cv2.contourArea(cnt) > min_contour_area]
    return filtered_contours

def process_image(image_path, thresholding="adaptive", denoise=True, extract_shapes=False, edge_mode=None):
    """
    Full image preprocessing pipeline with configurable parameters.
    - `thresholding`: "adaptive", "otsu", "binary", or "canny"
    - `denoise`: Apply JPG denoising (default: True)
    - `extract_shapes`: Extract contours for structured tracing (default: False)
    - `edge_mode`: "canny" for maps, "none" for general tracing

    Parameters:
    - image_path (str): Path to the input image.
    - thresholding (str): Method for thresholding.
    - denoise (bool): Flag to apply denoising.
    - extract_shapes (bool): Flag to extract and draw contours.
    - edge_mode (str or None): Edge detection mode.

    Returns:
    - preprocessed_path (str): Path to the saved preprocessed image.
    """
    print(f"Processing image: {image_path}")
    img = load_image(image_path)

    # Convert to grayscale
    grayscale = convert_to_grayscale(img)

    # Apply denoising (optional)
    denoised = apply_denoising(grayscale, denoise)

    # Apply thresholding or edge detection
    if edge_mode == "canny":
        binary = cv2.Canny(denoised, 50, 150)
    else:
        binary = apply_thresholding(denoised, method=thresholding)

    # If extracting structured shapes (e.g., maps), extract contours
    if extract_shapes:
        contours = extract_contours(binary)
        cv2.drawContours(binary, contours, -1, (0, 255, 0), 1)

    # Save the processed image
    file_extension = os.path.splitext(image_path)[1]
    preprocessed_path = image_path.replace(file_extension, ".png")
    cv2.imwrite(preprocessed_path, binary)

    print(f"Preprocessed image saved to: {preprocessed_path}")
    return preprocessed_path

def beautify_svg(svg_content):
    """
    Beautifies an SVG file by formatting its XML structure for better readability.
    This does not alter the actual vector data but makes the output more human-readable.

    Parameters:
    - svg_content (str): Raw SVG content.

    Returns:
    - beautified_svg (str): Formatted SVG content.
    """
    try:
        tree = etree.XML(svg_content)
        return etree.tostring(tree, pretty_print=True, xml_declaration=True, encoding="UTF-8").decode("UTF-8")
    except etree.XMLSyntaxError as e:
        raise ValueError(f"Error beautifying SVG: {e}")

def trace_image(image_path, output_path=None, thresholding="adaptive", denoise=True, extract_shapes=False, edge_mode=None):
    """
    Converts a preprocessed image to an SVG using an external tracing tool.

    Parameters:
    - image_path (str): Path to the input image.
    - output_path (str or None): Path to save the resulting SVG (default: same as image with .svg extension).
    - thresholding (str): Method for thresholding ('adaptive', 'otsu', 'binary', 'canny').
    - denoise (bool): Whether to apply noise reduction.
    - extract_shapes (bool): Whether to extract and draw contours.
    - edge_mode (str or None): Edge detection mode.

    Returns:
    - svg_content (str): The generated SVG content.
    """
    # Generate a default output path if not provided
    if not output_path:
        output_path = os.path.splitext(image_path)[0] + ".svg"

    # Preprocess the image
    preprocessed_path = process_image(image_path, thresholding, denoise, extract_shapes, edge_mode)

    # Trace the image into an SVG using svgtrace (or another vectorization tool)
    svg_content = svgtrace.trace(preprocessed_path)  # Ensure svgtrace is correctly installed

    # Beautify the SVG for readability
    beautified_svg = beautify_svg(svg_content)

    # Save the SVG file
    with open(output_path, "w") as svg_file:
        svg_file.write(beautified_svg)

    print(f"SVG successfully saved to {output_path}")
    
    return beautified_svg

# ================== NEW COLOR PROCESSING FUNCTIONS ==================

def quantize_colors(img, num_colors=8):
    """
    Quantizes an image to a specified number of colors using K-means clustering.
    
    Parameters:
    - img (numpy.ndarray): Input color image.
    - num_colors (int): Number of colors to quantize to.
    
    Returns:
    - quantized_img (numpy.ndarray): Image with reduced color palette.
    - colors (numpy.ndarray): Array of dominant colors (BGR format).
    - labels (numpy.ndarray): Pixel labels mapping to colors.
    """
    # Ensure image is in BGR format even if grayscale
    # FIXED: Added handling for grayscale images
    if len(img.shape) == 2:  # Grayscale image
        img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
    
    # Reshape the image for K-means
    pixels = img.reshape(-1, 3).astype(np.float32)
    
    # Define criteria and apply K-means
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 100, 0.2)
    
    # FIXED: Use K-means++ initialization for more stable results
    _, labels, centers = cv2.kmeans(pixels, num_colors, None, criteria, 10, cv2.KMEANS_PP_CENTERS)
    
    # FIXED: Check for empty clusters
    cluster_counts = np.bincount(labels.flatten())
    valid_clusters = np.where(cluster_counts > 0)[0]
    
    if len(valid_clusters) < num_colors:
        print(f"Warning: Only {len(valid_clusters)} non-empty clusters found instead of {num_colors} requested")
        
        # Keep only non-empty clusters
        centers = centers[valid_clusters]
        
        # Remap labels to the valid clusters
        new_labels = np.zeros_like(labels)
        for i, cluster_idx in enumerate(valid_clusters):
            new_labels[labels == cluster_idx] = i
        labels = new_labels
    
    # Convert back to 8-bit values
    centers = np.uint8(centers)
    
    # Reconstruct the quantized image
    quantized_pixels = centers[labels.flatten()]
    quantized_img = quantized_pixels.reshape(img.shape)
    
    return quantized_img, centers, labels.reshape(img.shape[:2])

def create_color_mask(labels, color_index, img_shape, clean_iterations=1):
    """
    Creates a binary mask for a specific color in the quantized image.
    
    Parameters:
    - labels (numpy.ndarray): Pixel labels from color quantization.
    - color_index (int): Index of the color to create a mask for.
    - img_shape (tuple): Shape of the original image.
    - clean_iterations (int): Number of morphological iterations to clean the mask.
    
    Returns:
    - mask (numpy.ndarray): Binary mask where the color is present.
    """
    mask = np.zeros(img_shape[:2], dtype=np.uint8)
    mask[labels == color_index] = 255
    
    # FIXED: Smaller kernel and configurable iterations to preserve thin features
    kernel = np.ones((2, 2), np.uint8)  # Smaller kernel for detail preservation
    if clean_iterations > 0:
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=clean_iterations)
    
    return mask

def bgr_to_hex(bgr_color):
    """
    Converts a BGR color to hex format for SVG.
    
    Parameters:
    - bgr_color (numpy.ndarray): BGR color values.
    
    Returns:
    - hex_color (str): Hex color string (e.g., #RRGGBB).
    """
    # Convert BGR to RGB and then to hex
    rgb = (int(bgr_color[2]), int(bgr_color[1]), int(bgr_color[0]))
    return '#{:02x}{:02x}{:02x}'.format(*rgb)

def extract_svg_paths(svg_content):
    """
    Extracts path elements from SVG content.
    
    Parameters:
    - svg_content (str): SVG XML content.
    
    Returns:
    - paths (list): List of path elements.
    - root (lxml.etree.Element): Root element of the SVG.
    """
    root = etree.fromstring(svg_content.encode('utf-8'))
    
    # FIXED: Use namespace-aware path selection
    nsmap = {'svg': 'http://www.w3.org/2000/svg'}
    try:
        # First try with explicit namespace
        paths = root.xpath('//svg:path', namespaces=nsmap)
        if not paths:
            # Fall back to default namespace
            paths = root.xpath('//path')
    except Exception as e:
        print(f"Warning: Error in namespace handling, falling back to default: {e}")
        paths = root.xpath('//path')
    
    return paths, root

def create_colored_svg(paths, root, color):
    """
    Creates a new SVG with colored paths.
    
    Parameters:
    - paths (list): List of path elements.
    - root (lxml.etree.Element): Root element of the SVG.
    - color (str): Hex color string.
    
    Returns:
    - colored_svg (str): SVG content with colored paths.
    """
    # Create a new SVG with the same dimensions
    new_root = etree.Element(root.tag, root.attrib)
    
    # FIXED: Properly preserve and handle namespace information
    for key, value in root.nsmap.items():
        if key is None:
            etree.register_namespace('', value)
        else:
            etree.register_namespace(key, value)
    
    # Copy all non-path elements
    # FIXED: More robust handling of different element types
    ns_path = '{http://www.w3.org/2000/svg}path'
    for child in root:
        if child.tag != ns_path and child.tag != 'path':
            try:
                new_root.append(etree.fromstring(etree.tostring(child)))
            except Exception as e:
                print(f"Warning: Could not copy non-path element: {e}")
    
    # Add paths with color
    for path in paths:
        new_path = etree.Element(path.tag, path.attrib)
        new_path.set('fill', color)
        new_path.set('stroke', 'none')  # No stroke for filled paths
        new_root.append(new_path)
        
    return etree.tostring(new_root, pretty_print=True, xml_declaration=True, encoding="UTF-8").decode("UTF-8")

def merge_colored_svgs(svg_list):
    """
    Merges multiple colored SVGs into a single SVG.
    
    Parameters:
    - svg_list (list): List of (svg_content, color) tuples.
    
    Returns:
    - merged_svg (str): Combined SVG with all colored paths.
    """
    if not svg_list:
        return ""
    
    # Parse the first SVG to get dimensions and base structure
    first_svg = svg_list[0][0]
    root = etree.fromstring(first_svg.encode('utf-8'))
    
    # FIXED: Properly preserve and handle namespace information
    namespaces = root.nsmap
    for key, value in namespaces.items():
        if key is None:
            etree.register_namespace('', value)
        else:
            etree.register_namespace(key, value)
    
    # Create a new SVG element with the same attributes
    merged_root = etree.Element(root.tag, root.attrib)
    
    # Process each SVG and extract paths with their colors
    for svg_content, color in svg_list:
        paths, _ = extract_svg_paths(svg_content)
        for path in paths:
            new_path = etree.Element(path.tag, path.attrib)
            new_path.set('fill', color)
            new_path.set('stroke', 'none')
            
            # Add a unique id to prevent conflicts
            path_id = f"path-{uuid.uuid4()}"
            new_path.set('id', path_id)
            
            merged_root.append(new_path)
    
    # FIXED: Add SVG optimization hint
    merged_root.append(etree.Comment(" SVG optimizations can be applied with tools like SVGO for smaller file size "))
    
    return etree.tostring(merged_root, pretty_print=True, xml_declaration=True, encoding="UTF-8").decode("UTF-8")

def trace_colored_image(image_path, output_path=None, num_colors=8, thresholding="adaptive", denoise=True,
                       extract_shapes=False, edge_mode=None, min_area_percentage=0.5, clean_iterations=1):
    """
    Traces an image with color preservation.
    
    Parameters:
    - image_path (str): Path to the input image.
    - output_path (str or None): Path to save the resulting SVG.
    - num_colors (int): Number of colors to quantize to.
    - thresholding (str): Method for thresholding.
    - denoise (bool): Whether to apply noise reduction.
    - extract_shapes (bool): Whether to extract and draw contours.
    - edge_mode (str or None): Edge detection mode.
    - min_area_percentage (float): Minimum area percentage for a color to be included (0.5 = 0.5%).
    - clean_iterations (int): Number of iterations for morphological cleaning.
    
    Returns:
    - output_path (str): Path to the saved colored SVG.
    """
    # Generate a default output path if not provided
    if not output_path:
        output_path = os.path.splitext(image_path)[0] + "-colored.svg"
    
    # Load the image
    img = load_image(image_path)
    
    # Convert RGBA to RGB if necessary
    if len(img.shape) == 3 and img.shape[2] == 4:
        img = cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)
    
    # Get image dimensions for area calculations
    height, width = img.shape[:2]
    total_area = height * width
    
    # FIXED: Correct calculation of min_area
    min_area = total_area * min_area_percentage / 100
    print(f"Min area threshold: {min_area} pixels ({min_area_percentage}% of total {total_area} pixels)")
    
    # Quantize colors
    quantized_img, colors, labels = quantize_colors(img, num_colors)
    
    # Save quantized image for reference (optional)
    quantized_path = os.path.splitext(image_path)[0] + "-quantized.png"
    cv2.imwrite(quantized_path, quantized_img)
    print(f"Quantized image saved to: {quantized_path}")
    
    # Process each color
    svg_list = []
    temp_files = []  # FIXED: Track temporary files for cleanup
    
    try:
        for i, color in enumerate(colors):
            # Create a binary mask for this color
            mask = create_color_mask(labels, i, img.shape, clean_iterations)
            
            # Skip colors that cover very small areas
            color_area = np.sum(mask) / 255
            if color_area < min_area:
                print(f"Skipping color {i} (area: {color_area} pixels, below threshold of {min_area})")
                continue
            
            # FIXED: Use tempfile for safer temporary file handling
            with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as temp:
                temp_mask_path = temp.name
                temp_files.append(temp_mask_path)
            
            cv2.imwrite(temp_mask_path, mask)
            
            # Process the mask through the existing pipeline
            try:
                # Trace the binary mask
                temp_output_path = f"temp_svg_{i}.svg"
                temp_files.append(temp_output_path)
                
                svg_content = trace_image(temp_mask_path, temp_output_path,
                                        thresholding=thresholding, denoise=denoise,
                                        extract_shapes=extract_shapes, edge_mode=edge_mode)
                
                # Convert BGR color to hex for SVG
                hex_color = bgr_to_hex(color)
                
                # Add to our list
                svg_list.append((svg_content, hex_color))
                
            except Exception as e:
                print(f"Error processing color {i}: {e}")
        
        # Merge all the colored SVGs
        merged_svg = merge_colored_svgs(svg_list)
        
        # Save the final colored SVG
        with open(output_path, "w") as svg_file:
            svg_file.write(merged_svg)
        
        print(f"Colored SVG successfully saved to {output_path}")
        return output_path
        
    finally:
        # FIXED: Ensure cleanup of all temporary files
        for temp_file in temp_files:
            try:
                if os.path.exists(temp_file):
                    os.remove(temp_file)
            except Exception as e:
                print(f"Warning: Could not remove temporary file {temp_file}: {e}")

def parse_arguments():
    """
    Parses command line arguments for the script.
    
    Returns:
    - args (argparse.Namespace): Parsed arguments.
    """
    # FIXED: Added comprehensive argument parser
    parser = argparse.ArgumentParser(description='Convert images to color-preserving SVGs')
    
    # Required argument
    parser.add_argument('input_path', help='Path to the input image')
    
    # Optional arguments
    parser.add_argument('--output', help='Path to save the resulting SVG')
    parser.add_argument('--colors', type=int, default=8, help='Number of colors to quantize to (default: 8)')
    parser.add_argument('--thresholding', default='adaptive', 
                        choices=['adaptive', 'otsu', 'binary', 'canny'],
                        help='Thresholding method (default: adaptive)')
    parser.add_argument('--denoise', action='store_true', help='Apply denoising (default: enabled)')
    parser.add_argument('--no-denoise', action='store_false', dest='denoise', help='Disable denoising')
    parser.add_argument('--extract-shapes', action='store_true', help='Extract and draw contours')
    parser.add_argument('--edge-mode', choices=['canny', 'none'], help='Edge detection mode')
    parser.add_argument('--min-area-percentage', type=float, default=0.5,
                        help='Minimum area percentage for a color to be included (default: 0.5)')
    parser.add_argument('--clean-iterations', type=int, default=1,
                        help='Number of morphological cleaning iterations (default: 1)')
    
    # Set default for denoise
    parser.set_defaults(denoise=True)
    
    return parser.parse_args()

if __name__ == "__main__":
    """
    Main script execution:
    - Ensures proper usage with command-line arguments.
    - Runs the tracing process on the specified input file.
    """
    # FIXED: Comprehensive argument handling
    args = parse_arguments()

    # Call the colored tracing function with all parameters
    trace_colored_image(
        args.input_path, 
        args.output, 
        num_colors=args.colors,
        thresholding=args.thresholding,
        denoise=args.denoise,
        extract_shapes=args.extract_shapes,
        edge_mode=args.edge_mode,
        min_area_percentage=args.min_area_percentage,
        clean_iterations=args.clean_iterations
    )
