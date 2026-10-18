"""
SVG Grid Generator with Color Modification

This script takes the original SVG, modifies its color definitions for each cell,
and arranges them in a checkered grid pattern with true color variations.
"""

import os
import re
import random
import colorsys

def hex_to_rgb(hex_color):
    """Convert hex color to RGB."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb):
    """Convert RGB to hex color."""
    return f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}"

def shift_color(hex_color, hue_shift=30, sat_shift=0, light_shift=0):
    """Shift a color's hue, saturation, and lightness."""
    # Convert hex to RGB
    r, g, b = hex_to_rgb(hex_color)
    
    # Convert RGB to HSL
    r, g, b = r/255.0, g/255.0, b/255.0
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    
    # Apply shifts
    h = (h + hue_shift/360) % 1.0
    s = max(0, min(1, s + sat_shift))
    l = max(0, min(1, l + light_shift))
    
    # Convert back to RGB
    r, g, b = colorsys.hls_to_rgb(h, l, s)
    r, g, b = int(r*255), int(g*255), int(b*255)
    
    # Convert to hex
    return rgb_to_hex((r, g, b))

def invert_color(hex_color):
    """Invert a color."""
    r, g, b = hex_to_rgb(hex_color)
    r, g, b = 255 - r, 255 - g, 255 - b
    return rgb_to_hex((r, g, b))

def create_grid_svg(input_path, output_path, grid_size=8):
    """
    Create a grid of SVG elements with modified colors.
    
    Args:
        input_path: Path to original SVG
        output_path: Path to save the new SVG
        grid_size: Number of cells in grid (both width and height)
    """
    print(f"Reading input SVG: {input_path}")
    
    # Read the original SVG
    with open(input_path, 'r') as f:
        original_svg = f.read()
    
    # Extract SVG dimensions from viewBox attribute
    viewbox_match = re.search(r'viewBox=["\'](\d+) (\d+) (\d+) (\d+)["\']', original_svg)
    if viewbox_match:
        vb_x, vb_y, vb_width, vb_height = map(int, viewbox_match.groups())
    else:
        # Default values if viewBox not found
        vb_width, vb_height = 800, 800
    
    # Calculate cell dimensions
    cell_width = vb_width / grid_size
    cell_height = vb_height / grid_size
    
    # Extract gradient definitions and color values
    original_colors = {}
    
    # Extract linearGradient definitions
    gradient_pattern = r'<linearGradient id="([^"]+)"[^>]*>.*?<stop offset="0%" stop-color="([^"]+)".*?<stop offset="100%" stop-color="([^"]+)"'
    for match in re.finditer(gradient_pattern, original_svg, re.DOTALL):
        gradient_id, start_color, end_color = match.groups()
        original_colors[gradient_id] = {
            'start': start_color,
            'end': end_color
        }
    
    # Start building the new SVG
    new_svg = f"""<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 {vb_width} {vb_height}" width="{vb_width}" height="{vb_height}">
  
  <!-- Definitions -->
  <defs>
"""
    
    # Background color (from original SVG)
    bg_color_match = re.search(r'<rect width="800" height="800" fill="([^"]+)" />', original_svg)
    if bg_color_match:
        bg_color = bg_color_match.group(1)
    else:
        bg_color = "#0e1015"  # Default if not found
    
    # Create color-shifted versions of each gradient for each cell
    for row in range(grid_size):
        for col in range(grid_size):
            cell_index = row * grid_size + col
            is_inverted = (row + col) % 2 == 1
            
            # Determine hue shift for this cell
            hue_shift = (cell_index % 12) * 30  # 0, 30, 60, ..., 330 degrees
            
            # Create shifted gradients for this cell
            for gradient_id, colors in original_colors.items():
                cell_gradient_id = f"{gradient_id}_cell_{row}_{col}"
                
                # Shift and possibly invert colors
                start_color = colors['start']
                end_color = colors['end']
                
                # Apply hue shift
                start_color = shift_color(start_color, hue_shift)
                end_color = shift_color(end_color, hue_shift)
                
                # Apply inversion if needed
                if is_inverted:
                    start_color = invert_color(start_color)
                    end_color = invert_color(end_color)
                
                # Add to SVG
                new_svg += f"""    <linearGradient id="{cell_gradient_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{start_color}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="{end_color}" stop-opacity="0.9" />
    </linearGradient>
"""
    
    # Create filters
    new_svg += """    
    <!-- Enhanced glow filters -->
    <filter id="enhanced_glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
"""
    
    # Create modified versions of the original SVG for each cell
    for row in range(grid_size):
        for col in range(grid_size):
            cell_index = row * grid_size + col
            is_inverted = (row + col) % 2 == 1
            
            # Create a symbol for this cell with modified colors
            modified_svg = original_svg
            
            # Replace background color
            cell_bg_color = invert_color(bg_color) if is_inverted else bg_color
            modified_svg = re.sub(
                r'<rect width="800" height="800" fill="[^"]+" />',
                f'<rect width="800" height="800" fill="{cell_bg_color}" />',
                modified_svg
            )
            
            # Replace gradient references
            for gradient_id in original_colors.keys():
                cell_gradient_id = f"{gradient_id}_cell_{row}_{col}"
                modified_svg = re.sub(
                    f'url\\(#{gradient_id}\\)',
                    f'url(#{cell_gradient_id})',
                    modified_svg
                )
            
            # Create symbol with the modified SVG
            cell_symbol_id = f"svg_cell_{row}_{col}"
            new_svg += f"""    
    <!-- Modified SVG for cell {row},{col} -->
    <symbol id="{cell_symbol_id}" viewBox="0 0 {vb_width} {vb_height}">
      {modified_svg}
    </symbol>
"""
    
    # Close defs section
    new_svg += "  </defs>\n\n"
    
    # Add background
    cell_bg_color = shift_color(bg_color, 180, 0, 0.1)  # Slightly lighter background
    new_svg += f"""  <!-- Background -->
  <rect width="{vb_width}" height="{vb_height}" fill="{cell_bg_color}" />
  
  <!-- Grid of SVG elements -->
  <g id="svg_grid">
"""
    
    # Add each cell to the grid
    for row in range(grid_size):
        for col in range(grid_size):
            # Calculate position
            x = col * cell_width
            y = row * cell_height
            
            # Cell symbol ID
            cell_symbol_id = f"svg_cell_{row}_{col}"
            
            # Calculate scale to fit
            scale = min(cell_width / vb_width, cell_height / vb_height) * 0.95
            
            # Add cell to grid
            new_svg += f"""    <!-- Cell {row},{col} -->
    <use xlink:href="#{cell_symbol_id}" x="{x}" y="{y}" width="{cell_width}" height="{cell_height}" />
"""
    
    # Close the grid and SVG
    new_svg += """  </g>
</svg>
"""
    
    # Write the new SVG
    with open(output_path, 'w') as f:
        f.write(new_svg)
    
    print(f"Grid SVG with modified colors created at: {output_path}")
    return output_path

def main():
    # Generate the SVG grid
    input_svg = "unexpected-geometry.svg"
    output_svg = "unexpected-geometry-v1.svg"
    
    result = create_grid_svg(input_svg, output_svg)
    print(f"Process complete! Output saved to: {result}")

if __name__ == "__main__":
    main()
