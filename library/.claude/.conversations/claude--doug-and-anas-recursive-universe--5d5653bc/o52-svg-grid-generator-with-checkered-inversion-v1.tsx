import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SVG Grid Generator with Checkered Inversion v1 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}"""
SVG Grid Generator with Checkered Inversion

This script takes the original SVG and creates a grid with a checkered pattern
where every other cell has inverted colors (dark to light and vice versa).
Output is named with -v1 suffix to prepare for future recursive versions.
"""

import os
import re
import colorsys

def create_grid_svg(input_path, output_path, grid_size=8):
    """
    Create a grid of SVG elements with checkered inverted colors.
    
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
    viewbox_match = re.search(r'viewBox=["\\'](\\d+) (\\d+) (\\d+) (\\d+)["\\']', original_svg)
    if viewbox_match:
        vb_x, vb_y, vb_width, vb_height = map(int, viewbox_match.groups())
    else:
        # Default values if viewBox not found
        vb_width, vb_height = 800, 800
    
    # Calculate cell dimensions
    cell_width = vb_width / grid_size
    cell_height = vb_height / grid_size
    
    # Remove XML declaration and doctype to avoid duplication
    svg_content = re.sub(r'<\\?xml[^>]+\\?>\\s*', '', original_svg)
    svg_content = re.sub(r'<!DOCTYPE[^>]+>\\s*', '', svg_content)
    
    # Extract the SVG tag to get its attributes
    svg_tag_match = re.search(r'<svg\\s+([^>]+)>', svg_content)
    if svg_tag_match:
        svg_attributes = svg_tag_match.group(1)
    else:
        svg_attributes = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'
    
    # Remove any width, height, and viewBox attributes from the extracted attributes
    svg_attributes = re.sub(r'(width|height|viewBox)=["\\'][^"\\']*["\\']', '', svg_attributes).strip()
    
    # Create new SVG with grid
    new_svg = f"""<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 {vb_width} {vb_height}" width="{vb_width}" height="{vb_height}">
  
  <!-- Definitions -->
  <defs>
    <!-- Original SVG as a symbol -->
    <symbol id="original_svg" viewBox="0 0 {vb_width} {vb_height}">
      {svg_content}
    </symbol>
    
    <!-- Color filters -->
    <filter id="color_shift_normal" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="0" />
    </filter>
    
    <filter id="color_shift_30" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="30" />
    </filter>
    
    <filter id="color_shift_60" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="60" />
    </filter>
    
    <filter id="color_shift_90" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="90" />
    </filter>
    
    <!-- Inversion filter for checkered pattern -->
    <filter id="invert" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="matrix" values="-1 0 0 0 1
                                            0 -1 0 0 1
                                            0 0 -1 0 1
                                            0 0 0 1 0" />
    </filter>
    
    <!-- Combined filters for inverted + hue shifts -->
    <filter id="invert_shift_normal" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="matrix" values="-1 0 0 0 1
                                            0 -1 0 0 1
                                            0 0 -1 0 1
                                            0 0 0 1 0" />
    </filter>
    
    <filter id="invert_shift_30" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="matrix" values="-1 0 0 0 1
                                            0 -1 0 0 1
                                            0 0 -1 0 1
                                            0 0 0 1 0" />
      <feColorMatrix type="hueRotate" values="30" />
    </filter>
    
    <filter id="invert_shift_60" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="matrix" values="-1 0 0 0 1
                                            0 -1 0 0 1
                                            0 0 -1 0 1
                                            0 0 0 1 0" />
      <feColorMatrix type="hueRotate" values="60" />
    </filter>
    
    <filter id="invert_shift_90" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="matrix" values="-1 0 0 0 1
                                            0 -1 0 0 1
                                            0 0 -1 0 1
                                            0 0 0 1 0" />
      <feColorMatrix type="hueRotate" values="90" />
    </filter>
    
    <!-- Enhanced glow filters -->
    <filter id="enhanced_glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="{vb_width}" height="{vb_height}" fill="#1a1a1a" />
  
  <!-- Grid of SVG elements -->
  <g id="svg_grid">
"""
    
    # Add each cell to the grid
    for row in range(grid_size):
        for col in range(grid_size):
            # Calculate position (exact fit with no gaps)
            x = col * cell_width
            y = row * cell_height
            
            # Determine if this is a "checkered" cell that should be inverted
            is_inverted = (row + col) % 2 == 1
            
            # Hue shift variation (independent of inversion)
            hue_shift = (row * grid_size + col) % 4
            
            # Determine filter based on inversion and hue shift
            if is_inverted:
                if hue_shift == 0:
                    filter_id = "invert_shift_normal"
                elif hue_shift == 1:
                    filter_id = "invert_shift_30"
                elif hue_shift == 2:
                    filter_id = "invert_shift_60"
                else:
                    filter_id = "invert_shift_90"
            else:
                if hue_shift == 0:
                    filter_id = "color_shift_normal"
                elif hue_shift == 1:
                    filter_id = "color_shift_30"
                elif hue_shift == 2:
                    filter_id = "color_shift_60"
                else:
                    filter_id = "color_shift_90"
            
            # Calculate scale to completely fill each cell with no overlap
            scale = min(cell_width / vb_width, cell_height / vb_height) * 0.95
            
            # Transform: position at cell center, scale to fit
            transform = f"translate({x + cell_width/2}, {y + cell_height/2}) "
            transform += f"scale({scale}) "
            
            # Add cell with appropriate filter
            new_svg += f"""    <g transform="{transform}">
      <use xlink:href="#original_svg" x="{-vb_width/2}" y="{-vb_height/2}" filter="url(#{filter_id})" />
    </g>
"""
    
    # Close the grid and SVG
    new_svg += """  </g>
</svg>
"""
    
    # Write the new SVG
    with open(output_path, 'w') as f:
        f.write(new_svg)
    
    print(f"Checkered grid SVG created at: {output_path}")
    return output_path

def main():
    # Generate the SVG grid with v1 suffix
    input_svg = "unexpected-geometry.svg"
    output_svg = "unexpected-geometry-v1.svg"
    
    result = create_grid_svg(input_svg, output_svg)
    print(f"Process complete! Output saved to: {result}")

if __name__ == "__main__":
    main()
`}
        </CodeBox>
    </Chapter>
);
