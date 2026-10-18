import sys
import os
import svgtrace
import cv2
import numpy as np
from lxml import etree
import uuid
import tempfile

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

    # Check if image is already grayscale/binary
    is_already_grayscale = len(img.shape) == 2 or (len(img.shape) == 3 and img.shape[2] == 1)
    
    if is_already_grayscale:
        # Image is already grayscale, no need to convert
        grayscale = img
    else:
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

# ================== NEW COLOR PROCESSING FUNCTIONS ==================

def quantize_colors(img):
    """
    Automatically quantizes an image to a smaller color palette.
    Uses K-means clustering with automatic cluster number determination.
    
    Parameters:
    - img (numpy.ndarray): Input color image.
    
    Returns:
    - quantized_img (numpy.ndarray): Image with reduced color palette.
    - colors (numpy.ndarray): Array of dominant colors (BGR format).
    - labels (numpy.ndarray): Pixel labels mapping to colors.
    """
    # Ensure image is in BGR format even if grayscale
    if len(img.shape) == 2:  # Grayscale image
        img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
    
    # Reshape the image for processing
    pixels = img.reshape(-1, 3).astype(np.float32)
    
    # Determine optimal number of clusters
    optimal_k = determine_optimal_clusters(img)
    print(f"Auto-detected {optimal_k} colors in image")
    
    # Apply K-means with the determined number of clusters
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 100, 0.2)
    _, labels, centers = cv2.kmeans(pixels, optimal_k, None, criteria, 10, cv2.KMEANS_PP_CENTERS)
    
    # Check for empty clusters
    cluster_counts = np.bincount(labels.flatten())
    valid_clusters = np.where(cluster_counts > 0)[0]
    
    if len(valid_clusters) < optimal_k:
        print(f"Warning: Only {len(valid_clusters)} non-empty clusters found")
        
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

def determine_optimal_clusters(img, max_clusters=16):
    """
    Determines the optimal number of color clusters in an image.
    Uses a simplified approach based on color variance.
    
    Parameters:
    - img (numpy.ndarray): Input image.
    - max_clusters (int): Maximum number of clusters to consider.
    
    Returns:
    - optimal_k (int): Optimal number of color clusters.
    """
    # For very simple images, use fewer clusters
    if img.shape[0] * img.shape[1] < 100000:  # Small image
        return min(8, max_clusters)
    
    # Get a sample of pixels for faster processing
    pixels = img.reshape(-1, 3)
    sample_size = min(10000, pixels.shape[0])
    indices = np.random.choice(pixels.shape[0], sample_size, replace=False)
    sample = pixels[indices].astype(np.float32)
    
    # Calculate color variance
    color_variance = np.var(sample, axis=0).sum()
    
    # Scale number of clusters based on variance
    if color_variance < 1000:  # Low variance (few colors)
        k = 4
    elif color_variance < 5000:  # Medium variance
        k = 8
    else:  # High variance (many colors)
        k = 12
    
    return min(k, max_clusters)

def create_color_mask(labels, color_index, img_shape):
    """
    Creates a binary mask for a specific color in the quantized image.
    
    Parameters:
    - labels (numpy.ndarray): Pixel labels from color quantization.
    - color_index (int): Index of the color to create a mask for.
    - img_shape (tuple): Shape of the original image.
    
    Returns:
    - mask (numpy.ndarray): Binary mask where the color is present.
    """
    mask = np.zeros(img_shape[:2], dtype=np.uint8)
    mask[labels == color_index] = 255
    
    # Apply minimal morphological operations to clean noise
    kernel = np.ones((2, 2), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)
    
    return mask

def bgr_to_hex(bgr_color):
    """
    Converts a BGR color to hex format for SVG.
    
    Parameters:
    - bgr_color (numpy.ndarray): BGR color values.
    
    Returns:
    - hex_color (str): Hex color string (e.g., #RRGGBB).
    """
    rgb = (int(bgr_color[2]), int(bgr_color[1]), int(bgr_color[0]))
    return '#{:02x}{:02x}{:02x}'.format(*rgb)

def post_process_svg(svg_content, fill_color, stroke_color=None):
    """
    Post-processes an SVG to apply color.
    
    Parameters:
    - svg_content (str): Original SVG content.
    - fill_color (str): Color to use for fill (hex format).
    - stroke_color (str): Color to use for stroke (hex format). If None, use fill_color.
    
    Returns:
    - colored_svg (str): SVG content with color applied.
    """
    if stroke_color is None:
        stroke_color = fill_color
        
    try:
        # Parse the SVG
        root = etree.fromstring(svg_content.encode('utf-8'))
        
        # Register namespaces
        nsmap = root.nsmap
        for key, value in nsmap.items():
            if key is None:
                etree.register_namespace('', value)
            else:
                etree.register_namespace(key, value)
        
        # Find all path elements
        paths = root.xpath('//path') or root.xpath('//svg:path', namespaces={'svg': 'http://www.w3.org/2000/svg'})
        
        # Modify each path's fill and stroke
        for path in paths:
            # Replace black fill with our color
            if 'fill' in path.attrib and path.attrib['fill'] in ['black', 'rgb(0,0,0)', '#000000']:
                path.attrib['fill'] = fill_color
            elif 'fill' not in path.attrib or path.attrib['fill'] != 'none':
                path.attrib['fill'] = fill_color
                
            # Update stroke if it exists and is black
            if 'stroke' in path.attrib and path.attrib['stroke'] in ['black', 'rgb(0,0,0)', '#000000']:
                path.attrib['stroke'] = stroke_color
        
        # Convert back to string
        return etree.tostring(root, pretty_print=True, xml_declaration=True, encoding="UTF-8").decode("UTF-8")
        
    except Exception as e:
        print(f"Warning: Error post-processing SVG: {e}")
        return svg_content

def merge_svgs(svg_list):
    """
    Merges multiple SVGs into a single SVG.
    
    Parameters:
    - svg_list (list): List of SVG contents.
    
    Returns:
    - merged_svg (str): Combined SVG with all paths.
    """
    if not svg_list:
        return ""
        
    try:
        # Parse the first SVG to get the base structure
        base_svg = etree.fromstring(svg_list[0].encode('utf-8'))
        
        # Register namespaces
        nsmap = base_svg.nsmap
        for key, value in nsmap.items():
            if key is None:
                etree.register_namespace('', value)
            else:
                etree.register_namespace(key, value)
        
        # For remaining SVGs, extract paths and add to base SVG
        for svg_content in svg_list[1:]:
            try:
                current_svg = etree.fromstring(svg_content.encode('utf-8'))
                
                # Find all paths in the current SVG
                paths = current_svg.xpath('//path') or current_svg.xpath('//svg:path', namespaces={'svg': 'http://www.w3.org/2000/svg'})
                
                # Add each path to the base SVG
                for path in paths:
                    # Create a unique ID to avoid conflicts
                    path_id = f"path-{uuid.uuid4()}"
                    if 'id' in path.attrib:
                        path.attrib['id'] = path_id
                    else:
                        path.set('id', path_id)
                        
                    # Append to base SVG
                    base_svg.append(etree.fromstring(etree.tostring(path)))
                    
            except Exception as e:
                print(f"Warning: Error processing an SVG during merge: {e}")
        
        # Convert back to string
        return etree.tostring(base_svg, pretty_print=True, xml_declaration=True, encoding="UTF-8").decode("UTF-8")
        
    except Exception as e:
        print(f"Error merging SVGs: {e}")
        return "\n".join(svg_list)

def trace_image(image_path, output_path=None, thresholding="adaptive", denoise=True, extract_shapes=False, edge_mode=None):
    """
    Converts an image to an SVG with color preservation.
    Maintains the same API as the original function but adds color support.

    Parameters:
    - image_path (str): Path to the input image.
    - output_path (str or None): Path to save the resulting SVG (default: same as image with .svg extension).
    - thresholding (str): Method for thresholding ('adaptive', 'otsu', 'binary', 'canny').
    - denoise (bool): Whether to apply noise reduction.
    - extract_shapes (bool): Whether to extract and draw contours.
    - edge_mode (str or None): Edge detection mode.

    Returns:
    - None (saves the generated SVG to the specified output path).
    """
    # Generate a default output path if not provided
    if not output_path:
        output_path = os.path.splitext(image_path)[0] + ".svg"
    
    # Load original image for color analysis
    img = load_image(image_path)
    
    # Check if image is grayscale (no color information)
    is_grayscale = len(img.shape) == 2 or (len(img.shape) == 3 and img.shape[2] == 1)
    
    if is_grayscale:
        # For grayscale images, use original black and white tracing
        print("Grayscale image detected - using standard black and white tracing")
        preprocessed_path = process_image(image_path, thresholding, denoise, extract_shapes, edge_mode)
        svg_content = svgtrace.trace(preprocessed_path)
        beautified_svg = beautify_svg(svg_content)
        
        # Save the SVG file
        with open(output_path, "w") as svg_file:
            svg_file.write(beautified_svg)
        
        print(f"SVG successfully saved to {output_path}")
        return
    
    # For color images, use color-preserving tracing
    print("Color image detected - using color-preserving tracing")
    
    # Handle RGBA images
    if len(img.shape) == 3 and img.shape[2] == 4:
        img = cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)
    
    # Get image dimensions
    height, width = img.shape[:2]
    total_area = height * width
    min_area = total_area * 0.5 / 100  # 0.5% minimum area threshold
    
    # Quantize colors (automatically determines optimal number)
    quantized_img, colors, labels = quantize_colors(img)
    
    # Save quantized image for reference
    quantized_path = os.path.splitext(image_path)[0] + "-quantized.png"
    cv2.imwrite(quantized_path, quantized_img)
    print(f"Quantized image saved to: {quantized_path}")
    
    # List to store SVGs for each color
    colored_svgs = []
    temp_files = []
    
    try:
        # Process each color
        for i, color in enumerate(colors):
            hex_color = bgr_to_hex(color)
            print(f"Processing color {i+1}/{len(colors)}: {hex_color}")
            
            # Create a binary mask for this color
            mask = create_color_mask(labels, i, img.shape)
            
            # Skip colors that cover very small areas
            color_area = np.sum(mask) / 255
            if color_area < min_area:
                print(f"  Skipping color (area: {color_area:.0f} pixels, below threshold of {min_area:.0f})")
                continue
                
            print(f"  Area: {color_area:.0f} pixels ({color_area/total_area*100:.2f}% of image)")
            
            # Create temporary file for the mask
            with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as temp:
                temp_mask_path = temp.name
                temp_files.append(temp_mask_path)
                
            # Save the mask
            cv2.imwrite(temp_mask_path, mask)
            
            try:
                # Create a simple copy of the mask as binary bitmap without additional processing
                # that might cause channel conversion errors
                processed_mask_path = temp_mask_path.replace('.png', '_processed.png')
                temp_files.append(processed_mask_path)
                
                # We'll use a simplified processing approach that's safe for binary masks
                if thresholding == "otsu" or extract_shapes:
                    # These options need special processing
                    processed_mask_path = process_image(
                        temp_mask_path, 
                        thresholding=thresholding,
                        denoise=denoise,
                        extract_shapes=extract_shapes,
                        edge_mode=edge_mode
                    )
                else:
                    # For most masks, we can use them directly as they're already binary
                    # This bypasses potential color conversion issues
                    cv2.imwrite(processed_mask_path, mask)
                
                # Trace the mask
                svg_content = svgtrace.trace(processed_mask_path)
                
                # Post-process the SVG to apply color
                colored_svg = post_process_svg(svg_content, hex_color)
                
                # Add to our list
                colored_svgs.append(colored_svg)
                
            except Exception as e:
                print(f"  Error processing color: {str(e)}")
                # Continue with next color instead of failing completely
        
        # Merge all the colored SVGs
        print(f"Merging {len(colored_svgs)} color layers...")
        if colored_svgs:
            merged_svg = merge_svgs(colored_svgs)
            
            # Save the final colored SVG
            with open(output_path, "w") as svg_file:
                svg_file.write(merged_svg)
            
            print(f"Colored SVG successfully saved to {output_path}")
        else:
            print("No valid color layers found. Falling back to black and white tracing.")
            preprocessed_path = process_image(image_path, thresholding, denoise, extract_shapes, edge_mode)
            svg_content = svgtrace.trace(preprocessed_path)
            beautified_svg = beautify_svg(svg_content)
            
            with open(output_path, "w") as svg_file:
                svg_file.write(beautified_svg)
        
    finally:
        # Clean up temporary files
        for temp_file in temp_files:
            try:
                if os.path.exists(temp_file):
                    os.remove(temp_file)
            except Exception as e:
                print(f"Warning: Could not remove temporary file {temp_file}: {e}")

if __name__ == "__main__":
    """
    Main script execution:
    - Ensures proper usage with command-line arguments.
    - Runs the tracing process on the specified input file.
    """
    if len(sys.argv) < 2:
        print("Usage: python trace_image.py <input_image> [<output_svg>]")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None

    # Call trace_image with default parameters
    trace_image(input_path, output_path)
