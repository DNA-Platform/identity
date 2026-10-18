"""
Vectorization module for image to SVG conversion with color support.

This module is designed to be a drop-in replacement for the original trace_image function,
maintaining the same API while adding robust color support.

To use with existing code, simply replace the imports in your main module.
"""

import os
import logging
import cv2

# Set up logging
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger('image_tracer')

# Import the main tracing function and keep its API unchanged
from main_tracer import trace_image

# Import utility functions for convenience
from color_quantization import quantize_colors, ensure_bgr_image
from color_mask import create_color_mask, bgr_to_hex, process_color_masks
from svg_processing import post_process_svg, merge_svgs, beautify_svg

# Re-export everything with the same API
__all__ = ['trace_image']

# Add a simplified function with reasonable defaults
def vectorize(image_path, output_path=None, colorized=True):
    """
    Simple function to vectorize an image with sensible defaults.
    
    Parameters:
    - image_path: Path to the input image
    - output_path: Path to save the SVG (default: same name as input with .svg extension)
    - colorized: Whether to preserve colors (default: True)
    
    Returns:
    - Path to the saved SVG
    """
    if not output_path:
        output_path = os.path.splitext(image_path)[0] + ".svg"
    
    if not colorized:
        # Use basic black and white tracing
        options = {
            "thresholding": "otsu",  # Better for general images
            "denoise": True,
            "extract_shapes": False,
            "edge_mode": None
        }
    else:
        # Use color-preserving tracing
        options = {
            "thresholding": "adaptive",  # Better for color separation
            "denoise": True,
            "extract_shapes": False,
            "edge_mode": None
        }
    
    # Call the main tracing function
    trace_image(image_path, output_path, **options)
    return output_path

# Provide a function to check if an image has color
def is_color_image(image_path):
    """
    Checks if an image has color information.
    
    Parameters:
    - image_path: Path to the image
    
    Returns:
    - True if the image has color, False if grayscale
    """
    try:
        img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
        
        if img is None:
            logger.error(f"Unable to load image: {image_path}")
            return False
            
        # Check if image is grayscale
        is_grayscale = len(img.shape) == 2 or (len(img.shape) == 3 and img.shape[2] == 1)
        return not is_grayscale
        
    except Exception as e:
        logger.error(f"Error checking image: {str(e)}")
        return False

# Custom exception for tracing errors
class TracingError(Exception):
    """Exception raised when image tracing fails."""
    pass
