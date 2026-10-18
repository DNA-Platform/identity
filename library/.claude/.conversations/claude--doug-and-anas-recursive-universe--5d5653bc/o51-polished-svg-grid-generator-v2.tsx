import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Polished SVG Grid Generator v2 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}"""
Polished SVG Grid Generator

This script takes the original SVG and creates a perfectly-fitted grid
with smoothly evolved colors that maintain the original neon aesthetic.
"""

import os
import re
import colorsys

def create_grid_svg(input_path, output_path, grid_size=8):
    """
    Create a grid of SVG elements with evolved colors that fit perfectly in the viewbox.
    
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
    
    <!-- Color evolution filters (maintaining neon aesthetic) -->
    <filter id="color_shift_1" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="0" />
    </filter>
    
    <filter id="color_shift_2" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="30" />
    </filter>
    
    <filter id="color_shift_3" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="60" />
    </filter>
    
    <filter id="color_shift_4" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="90" />
    </filter>
    
    <filter id="color_shift_5" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="120" />
    </filter>
    
    <filter id="color_shift_6" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="150" />
    </filter>
    
    <filter id="color_shift_7" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="180" />
    </filter>
    
    <filter id="color_shift_8" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="210" />
    </filter>
    
    <filter id="color_shift_9" x="0%" y="0%" width="100%" height="100%">
      <feColorMatrix type="hueRotate" values="240" />
    </filter>
    
    <!-- Enhanced glow filters for different color variants -->
    <filter id="enhanced_glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <!-- Background (maintaining dark aesthetic) -->
  <rect width="{vb_width}" height="{vb_height}" fill="#0a0a0f" />
  
  <!-- Grid of SVG elements -->
  <g id="svg_grid">
"""
    
    # Add each cell to the grid
    for row in range(grid_size):
        for col in range(grid_size):
            # Calculate position (exact fit with no gaps)
            x = col * cell_width
            y = row * cell_height
            
            # Deterministic variation based on position
            cell_index = row * grid_size + col
            color_shift = f"color_shift_{(cell_index % 9) + 1}"
            
            # Calculate scale to completely fill each cell with no overlap
            scale = min(cell_width / vb_width, cell_height / vb_height) * 0.95
            
            # Slight rotation for visual interest, but subtle
            rotation = ((row + col) % 4) * 5  # Subtle 5 degree rotations
            
            # Transform: position at cell center, scale to fit, optional subtle rotation
            transform = f"translate({x + cell_width/2}, {y + cell_height/2}) "
            transform += f"scale({scale}) "
            if rotation != 0:
                transform += f"rotate({rotation}) "
            
            # Add cell with appropriate color shift
            new_svg += f"""    <g transform="{transform}">
      <use xlink:href="#original_svg" x="{-vb_width/2}" y="{-vb_height/2}" filter="url(#{color_shift})" />
    </g>
"""
    
    # Close the grid and SVG
    new_svg += """  </g>
</svg>
"""
    
    # Write the new SVG
    with open(output_path, 'w') as f:
        f.write(new_svg)
    
    print(f"Polished grid SVG created at: {output_path}")
    return output_path

def main():
    # Generate the SVG grid
    input_svg = "unexpected-geometry.svg"
    output_svg = "unexpected-geometry-grid.svg"
    
    result = create_grid_svg(input_svg, output_svg)
    print(f"Process complete! Output saved to: {result}")

if __name__ == "__main__":
    main()
`}
        </CodeBox>
    </Chapter>
);
