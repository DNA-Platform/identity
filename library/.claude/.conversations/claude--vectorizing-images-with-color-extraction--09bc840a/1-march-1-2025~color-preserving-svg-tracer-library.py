import os
import cv2
import numpy as np
from lxml import etree
import tempfile
import uuid

class ColorSvgTracer:
    """
    A library for converting images to SVGs with color preservation.
    Uses an external SVG tracer (like svgtrace) and adds color information.
    
    This class provides methods to:
    1. Quantize an image to a smaller color palette
    2. Create separate masks for each color
    3. Trace each mask and apply the corresponding color
    4. Combine the results into a single colored SVG
    """
    
    def __init__(self, tracer_func=None):
        """
        Initialize the ColorSvgTracer.
        
        Parameters:
        - tracer_func: Function that converts a binary image to SVG.
                      Should take path to binary image and return SVG content as string.
        """
        self.tracer_func = tracer_func
        
    def set_tracer(self, tracer_func):
        """
        Set the tracing function to use.
        
        Parameters:
        - tracer_func: Function that converts a binary image to SVG.
        """
        self.tracer_func = tracer_func
    
    def load_image(self, image_path):
        """
        Load an image with OpenCV.
        
        Parameters:
        - image_path: Path to the image file.
        
        Returns:
        - Loaded image as NumPy array.
        """
        if not os.path.exists(image_path):
            raise FileNotFoundError(f"Error: File not found - {image_path}")

        img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
        if img is None:
            raise ValueError(f"Error: Unable to load image - {image_path}")
            
        # Handle grayscale images
        if len(img.shape) == 2:
            img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
            
        # Handle RGBA images
        if len(img.shape) == 3 and img.shape[2] == 4:
            img = cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)
            
        return img

    def quantize_colors(self, img, num_colors=8):
        """
        Quantize image colors using K-means clustering.
        
        Parameters:
        - img: Input image (BGR format).
        - num_colors: Number of colors to quantize to.
        
        Returns:
        - quantized_img: Image with reduced color palette.
        - colors: Array of dominant colors (BGR format).
        - labels: Pixel labels mapping to colors.
        """
        # Reshape the image for K-means
        pixels = img.reshape(-1, 3).astype(np.float32)
        
        # Define criteria and apply K-means with k-means++ initialization
        criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 100, 0.2)
        _, labels, centers = cv2.kmeans(pixels, num_colors, None, criteria, 10, cv2.KMEANS_PP_CENTERS)
        
        # Check for empty clusters
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

    def create_color_mask(self, labels, color_index, img_shape, clean_iterations=1):
        """
        Create a binary mask for a specific color.
        
        Parameters:
        - labels: Pixel labels from color quantization.
        - color_index: Index of the color to create a mask for.
        - img_shape: Shape of the original image.
        - clean_iterations: Number of iterations for morphological operations.
        
        Returns:
        - Binary mask where the color is present.
        """
        mask = np.zeros(img_shape[:2], dtype=np.uint8)
        mask[labels == color_index] = 255
        
        # Apply light morphological operations to clean noise
        if clean_iterations > 0:
            kernel = np.ones((2, 2), np.uint8)
            mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=clean_iterations)
            
        return mask

    def bgr_to_hex(self, bgr_color):
        """
        Convert BGR color to hex format for SVG.
        
        Parameters:
        - bgr_color: BGR color values.
        
        Returns:
        - Hex color string (e.g., #RRGGBB).
        """
        rgb = (int(bgr_color[2]), int(bgr_color[1]), int(bgr_color[0]))
        return '#{:02x}{:02x}{:02x}'.format(*rgb)

    def post_process_svg(self, svg_content, fill_color, stroke_color=None):
        """
        Post-process SVG content to add color.
        
        Parameters:
        - svg_content: Original SVG content.
        - fill_color: Color to use for fill (hex format).
        - stroke_color: Color to use for stroke (hex format). If None, use fill_color.
        
        Returns:
        - Processed SVG content with colors applied.
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

    def merge_svgs(self, svg_list):
        """
        Merge multiple SVGs into a single SVG.
        
        Parameters:
        - svg_list: List of SVG contents.
        
        Returns:
        - Merged SVG content.
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
            
            # Add optimization comment
            base_svg.append(etree.Comment(" SVG created with ColorSvgTracer. For smaller file size, consider optimization with tools like SVGO. "))
            
            # Convert back to string
            return etree.tostring(base_svg, pretty_print=True, xml_declaration=True, encoding="UTF-8").decode("UTF-8")
            
        except Exception as e:
            print(f"Error merging SVGs: {e}")
            # Fallback to simple concatenation (won't be valid SVG)
            return "\n".join(svg_list)

    def trace_with_color(self, image_path, output_path=None, num_colors=8, min_area_percentage=0.5, 
                          clean_iterations=1, trace_options=None):
        """
        Trace an image with color preservation.
        
        Parameters:
        - image_path: Path to the input image.
        - output_path: Path to save the resulting SVG.
        - num_colors: Number of colors to quantize to.
        - min_area_percentage: Minimum area percentage for a color to be included.
        - clean_iterations: Number of iterations for morphological cleaning.
        - trace_options: Dictionary of options to pass to the tracer function.
        
        Returns:
        - Path to the saved colored SVG.
        """
        if self.tracer_func is None:
            raise ValueError("No tracer function set. Use set_tracer() to specify a tracer function.")
            
        if trace_options is None:
            trace_options = {}
            
        # Generate default output path if not provided
        if not output_path:
            output_path = os.path.splitext(image_path)[0] + "-colored.svg"
        
        # Load and prepare the image
        img = self.load_image(image_path)
        
        # Get image dimensions for area calculations
        height, width = img.shape[:2]
        total_area = height * width
        min_area = total_area * min_area_percentage / 100
        
        print(f"Image dimensions: {width}x{height}")
        print(f"Min area threshold: {min_area} pixels ({min_area_percentage}% of total {total_area} pixels)")
        
        # Quantize colors
        quantized_img, colors, labels = self.quantize_colors(img, num_colors)
        
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
                hex_color = self.bgr_to_hex(color)
                print(f"Processing color {i+1}/{len(colors)}: {hex_color}")
                
                # Create a binary mask for this color
                mask = self.create_color_mask(labels, i, img.shape, clean_iterations)
                
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
                    # Trace the mask using the provided tracer function
                    svg_content = self.tracer_func(temp_mask_path, **trace_options)
                    
                    # Post-process the SVG to apply the correct color
                    colored_svg = self.post_process_svg(svg_content, hex_color)
                    
                    # Add to our list
                    colored_svgs.append(colored_svg)
                    
                except Exception as e:
                    print(f"  Error processing color: {e}")
            
            # Merge all the colored SVGs
            print(f"Merging {len(colored_svgs)} color layers...")
            merged_svg = self.merge_svgs(colored_svgs)
            
            # Save the final colored SVG
            with open(output_path, "w") as svg_file:
                svg_file.write(merged_svg)
            
            print(f"Colored SVG successfully saved to {output_path}")
            return output_path
            
        finally:
            # Clean up temporary files
            for temp_file in temp_files:
                try:
                    if os.path.exists(temp_file):
                        os.remove(temp_file)
                except Exception as e:
                    print(f"Warning: Could not remove temporary file {temp_file}: {e}")

# Example usage with svgtrace
"""
import svgtrace

def trace_func(image_path, **kwargs):
    return svgtrace.trace(image_path)

tracer = ColorSvgTracer(trace_func)
tracer.trace_with_color("image.jpg", "output.svg", num_colors=12)
"""
