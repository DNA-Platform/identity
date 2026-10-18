import os
import sys
import cv2
import svgtrace
import numpy as np
import logging
import tempfile

# Import our modular components
from color_quantization import quantize_colors, ensure_bgr_image
from color_mask import process_color_masks, clean_up_temp_files
from svg_processing import post_process_svg, merge_svgs, beautify_svg, save_svg_to_file

# Set up logging
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger('image_tracer')

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
    # Check if image is already grayscale
    if len(img.shape) == 2 or (len(img.shape) == 3 and img.shape[2] == 1):
        return img

    if len(img.shape) == 3 and img.shape[2] == 4:  # Extract RGB channels if transparency exists
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
    logger.info(f"Processing image: {image_path}")
    
    try:
        img = load_image(image_path)
        
        # Check if image is already grayscale/binary
        is_already_grayscale = len(img.shape) == 2 or (len(img.shape) == 3 and img.shape[2] == 1)
        
        if is_already_grayscale:
            # Image is already grayscale, no need to convert
            logger.debug("Image is already grayscale, skipping conversion")
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
            contour_img = np.zeros_like(binary)
            cv2.drawContours(contour_img, contours, -1, 255, 1)
            binary = contour_img

        # Save the processed image
        file_extension = os.path.splitext(image_path)[1]
        preprocessed_path = image_path.replace(file_extension, ".png")
        cv2.imwrite(preprocessed_path, binary)

        logger.info(f"Preprocessed image saved to: {preprocessed_path}")
        return preprocessed_path
        
    except Exception as e:
        logger.error(f"Error processing image: {str(e)}")
        raise ValueError(f"Image processing failed: {str(e)}")

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
    
    # List to track temporary files for cleanup
    temp_files = []
    
    try:
        # Load original image for color analysis
        img = load_image(image_path)
        
        # Check if image is grayscale (no color information)
        is_grayscale = len(img.shape) == 2 or (len(img.shape) == 3 and img.shape[2] == 1)
        
        if is_grayscale:
            # For grayscale images, use original black and white tracing
            logger.info("Grayscale image detected - using standard black and white tracing")
            preprocessed_path = process_image(image_path, thresholding, denoise, extract_shapes, edge_mode)
            temp_files.append(preprocessed_path)
            
            svg_content = svgtrace.trace(preprocessed_path)
            beautified_svg = beautify_svg(svg_content)
            
            # Save the SVG file
            if save_svg_to_file(beautified_svg, output_path):
                logger.info(f"SVG successfully saved to {output_path}")
            else:
                logger.error("Failed to save SVG file")
                
            return
        
        # For color images, use color-preserving tracing
        logger.info("Color image detected - using color-preserving tracing")
        
        # Ensure proper BGR format
        img = ensure_bgr_image(img)
        
        # Get image dimensions
        height, width = img.shape[:2]
        
        # Quantize colors
        try:
            quantized_img, colors, labels = quantize_colors(img)
            logger.info(f"Quantized image to {len(colors)} colors")
            
            # Save quantized image for reference
            quantized_path = os.path.splitext(image_path)[0] + "-quantized.png"
            cv2.imwrite(quantized_path, quantized_img)
            logger.info(f"Quantized image saved to: {quantized_path}")
            
            # Process each color to create masks
            masks_info, mask_temp_files = process_color_masks(
                labels, colors, img.shape, min_area_percentage=0.5
            )
            temp_files.extend(mask_temp_files)
            
            # No valid masks found
            if not masks_info:
                logger.warning("No valid color masks found. Falling back to black and white tracing.")
                preprocessed_path = process_image(image_path, thresholding, denoise, extract_shapes, edge_mode)
                temp_files.append(preprocessed_path)
                
                svg_content = svgtrace.trace(preprocessed_path)
                beautified_svg = beautify_svg(svg_content)
                
                save_svg_to_file(beautified_svg, output_path)
                return
                
            # Process each mask to create colored SVGs
            colored_svgs = []
            
            for mask_info in masks_info:
                try:
                    # Create a processed version of the mask
                    mask_path = mask_info['path']
                    processed_path = mask_path.replace('.png', '_processed.png')
                    temp_files.append(processed_path)
                    
                    # For binary masks, we can often skip complex processing
                    if extract_shapes:
                        # If shapes extraction is needed, do it directly
                        contours = extract_contours(mask_info['mask'])
                        contour_mask = np.zeros_like(mask_info['mask'])
                        cv2.drawContours(contour_mask, contours, -1, 255, 1)
                        cv2.imwrite(processed_path, contour_mask)
                    else:
                        # Just save the binary mask directly - it's already thresholded
                        cv2.imwrite(processed_path, mask_info['mask'])
                    
                    # Trace the mask
                    svg_content = svgtrace.trace(processed_path)
                    
                    # Post-process the SVG to apply color
                    colored_svg = post_process_svg(svg_content, mask_info['hex_color'])
                    
                    # Add to our list
                    if colored_svg:
                        colored_svgs.append(colored_svg)
                        
                except Exception as e:
                    logger.error(f"Error processing color mask: {str(e)}")
            
            # Merge all the colored SVGs
            logger.info(f"Merging {len(colored_svgs)} color layers...")
            if colored_svgs:
                merged_svg = merge_svgs(colored_svgs)
                
                # Save the final colored SVG
                save_svg_to_file(merged_svg, output_path)
            else:
                logger.warning("No valid SVG layers. Falling back to black and white tracing.")
                preprocessed_path = process_image(image_path, thresholding, denoise, extract_shapes, edge_mode)
                temp_files.append(preprocessed_path)
                
                svg_content = svgtrace.trace(preprocessed_path)
                beautified_svg = beautify_svg(svg_content)
                
                save_svg_to_file(beautified_svg, output_path)
                
        except Exception as e:
            logger.error(f"Error in color processing: {str(e)}")
            logger.warning("Falling back to black and white tracing due to error")
            
            preprocessed_path = process_image(image_path, thresholding, denoise, extract_shapes, edge_mode)
            temp_files.append(preprocessed_path)
            
            svg_content = svgtrace.trace(preprocessed_path)
            beautified_svg = beautify_svg(svg_content)
            
            save_svg_to_file(beautified_svg, output_path)
            
    finally:
        # Clean up temporary files
        clean_up_temp_files(temp_files)

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
