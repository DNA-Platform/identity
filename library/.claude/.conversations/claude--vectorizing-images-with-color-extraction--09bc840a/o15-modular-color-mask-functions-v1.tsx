import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Modular Color Mask Functions v1 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}import cv2
import numpy as np
import logging
import tempfile
import os

# Set up logging
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger('color_masking')

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
    logger.debug(f"Creating mask for color index {color_index}")
    
    try:
        # Validate inputs
        if labels is None:
            logger.error("Labels array is None")
            raise ValueError("Labels array is None")
            
        if color_index < 0 or color_index >= np.max(labels) + 1:
            logger.error(f"Invalid color index {color_index} for labels with max value {np.max(labels)}")
            raise ValueError(f"Invalid color index {color_index}")
            
        # Create empty single-channel mask
        mask = np.zeros(img_shape[:2], dtype=np.uint8)
        
        # Set pixels of this color to white (255)
        mask[labels == color_index] = 255
        
        # Check if mask is empty
        if np.sum(mask) == 0:
            logger.warning(f"Mask for color index {color_index} is empty")
            return mask
            
        # Apply minimal morphological operations to clean noise while preserving details
        kernel = np.ones((2, 2), np.uint8)
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)
        
        # Ensure mask is properly formed as a binary image
        # This handles any potential issues with data type or unexpected values
        _, mask = cv2.threshold(mask, 127, 255, cv2.THRESH_BINARY)
        
        area = np.sum(mask) / 255
        logger.debug(f"Mask for color index {color_index} has area {area:.0f} pixels")
        
        return mask
        
    except Exception as e:
        logger.error(f"Error creating color mask: {str(e)}")
        # Return empty mask as fallback
        return np.zeros(img_shape[:2], dtype=np.uint8)

def get_mask_area_percentage(mask, total_pixels):
    """
    Calculates what percentage of the image a mask covers.
    
    Parameters:
    - mask: Binary mask
    - total_pixels: Total number of pixels in the image
    
    Returns:
    - percentage: Area percentage (0-100)
    """
    if mask is None or total_pixels == 0:
        return 0
        
    white_pixels = np.sum(mask) / 255
    percentage = (white_pixels / total_pixels) * 100
    return percentage

def bgr_to_hex(bgr_color):
    """
    Converts a BGR color to hex format for SVG.
    
    Parameters:
    - bgr_color: BGR color values.
    
    Returns:
    - hex_color: Hex color string (e.g., #RRGGBB).
    """
    try:
        rgb = (int(bgr_color[2]), int(bgr_color[1]), int(bgr_color[0]))
        return '#{:02x}{:02x}{:02x}'.format(*rgb)
    except Exception as e:
        logger.error(f"Error converting color to hex: {str(e)}")
        return "#000000"  # Default to black

def save_mask_to_file(mask, prefix="mask"):
    """
    Saves a mask to a temporary file.
    
    Parameters:
    - mask: Binary mask to save
    - prefix: Filename prefix
    
    Returns:
    - temp_path: Path to the saved file
    """
    try:
        with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as temp:
            temp_path = temp.name
            
        cv2.imwrite(temp_path, mask)
        logger.debug(f"Saved mask to {temp_path}")
        return temp_path
        
    except Exception as e:
        logger.error(f"Error saving mask: {str(e)}")
        raise ValueError(f"Failed to save mask: {str(e)}")

def process_color_masks(labels, colors, img_shape, min_area_percentage=0.5):
    """
    Processes all color masks from a quantized image.
    
    Parameters:
    - labels: 2D array of pixel labels
    - colors: Array of colors (cluster centers)
    - img_shape: Shape of the original image
    - min_area_percentage: Minimum area percentage for a color to be included
    
    Returns:
    - masks_info: List of dictionaries with mask information
      Each dict contains: 'mask', 'color', 'hex_color', 'area', 'percentage', 'path'
    """
    logger.info(f"Processing {len(colors)} color masks")
    
    # Calculate total pixels for percentage calculations
    total_pixels = img_shape[0] * img_shape[1]
    min_pixels = total_pixels * min_area_percentage / 100
    logger.info(f"Total pixels: {total_pixels}, minimum required: {min_pixels:.0f} ({min_area_percentage}%)")
    
    masks_info = []
    temp_files = []
    
    for i, color in enumerate(colors):
        try:
            # Create mask for this color
            mask = create_color_mask(labels, i, img_shape)
            
            # Calculate area and percentage
            area = np.sum(mask) / 255
            percentage = (area / total_pixels) * 100
            
            # Skip small areas
            if area < min_pixels:
                logger.info(f"Color {i+1}/{len(colors)}: Skipping (area: {area:.0f} pixels, {percentage:.2f}%)")
                continue
                
            # Convert color to hex
            hex_color = bgr_to_hex(color)
            logger.info(f"Color {i+1}/{len(colors)}: {hex_color} (area: {area:.0f} pixels, {percentage:.2f}%)")
            
            # Save mask to file
            mask_path = save_mask_to_file(mask, f"color_{i}")
            temp_files.append(mask_path)
            
            # Add to results
            masks_info.append({
                'mask': mask,
                'color': color,
                'hex_color': hex_color,
                'area': area,
                'percentage': percentage,
                'path': mask_path
            })
            
        except Exception as e:
            logger.error(f"Error processing color {i}: {str(e)}")
    
    logger.info(f"Generated {len(masks_info)} valid color masks")
    return masks_info, temp_files

def clean_up_temp_files(temp_files):
    """
    Cleans up temporary files.
    
    Parameters:
    - temp_files: List of temporary file paths
    """
    for temp_file in temp_files:
        try:
            if os.path.exists(temp_file):
                os.remove(temp_file)
                logger.debug(f"Removed temporary file: {temp_file}")
        except Exception as e:
            logger.warning(f"Could not remove temporary file {temp_file}: {e}")
`}
        </CodeBox>
    </Chapter>
);
