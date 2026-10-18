"""
Simple SVG Grid Generator

This script takes the original SVG, makes it reusable, and creates an 8x8 grid
with color adjustments for a calming aesthetic.
"""

import os
import re
import colorsys

def create_grid_svg(input_path, output_path, grid_size=8):
    """
    Create a grid of SVG elements with adjusted colors.
    
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
    
    # Remove XML declaration and doctype
    svg_content = re.sub(r'<\?xml[^>]+\?>\s*', '', original_svg)
    svg_content = re.sub(r'<!DOCTYPE[^>]+>\s*', '', svg_content)
    
    # Calm color palette (soft blues, greens, purples)
    calm_colors = [
        "#e0f2f1", "#b2dfdb", "#80cbc4", 
        "#e1bee7", "#ce93d8", "#ba68c8",
        "#c5cae9", "#9fa8da", "#7986cb",
        "#c8e6c9", "#a5d6a7", "#81c784"
    ]
    
    # Create new SVG with grid
    new_svg = f"""<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 {vb_width} {vb_height}" width="{vb_width}" height="{vb_height}">
  
  <!-- Definitions including the original SVG as a symbol -->
  <defs>
    <symbol id="original_svg" viewBox="0 0 {vb_width} {vb_height}">
      {svg_content}
    </symbol>
    
    <!-- Color-adjusted versions -->
    <symbol id="blue_version" viewBox="0 0 {vb_width} {vb_height}">
      <use xlink:href="#original_svg" filter="url(#blue_filter)" />
    </symbol>
    
    <symbol id="green_version" viewBox="0 0 {vb_width} {vb_height}">
      <use xlink:href="#original_svg" filter="url(#green_filter)" />
    </symbol>
    
    <symbol id="purple_version" viewBox="0 0 {vb_width} {vb_height}">
      <use xlink:href="#original_svg" filter="url(#purple_filter)" />
    </symbol>
    
    <!-- Color filters -->
    <filter id="blue_filter">
      <feColorMatrix type="matrix" values="
        0.2 0 0 0 0
        0 0.2 0 0 0
        0 0 1 0 0
        0 0 0 0.9 0" />
    </filter>
    
    <filter id="green_filter">
      <feColorMatrix type="matrix" values="
        0.2 0 0 0 0
        0 0.8 0 0 0
        0 0 0.2 0 0
        0 0 0 0.9 0" />
    </filter>
    
    <filter id="purple_filter">
      <feColorMatrix type="matrix" values="
        0.6 0 0 0 0
        0 0.1 0 0 0
        0 0 0.6 0 0
        0 0 0 0.9 0" />
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="{vb_width}" height="{vb_height}" fill="#f5f5f5" />
  
  <!-- Grid of SVG elements -->
  <g id="svg_grid">
"""
    
    # Add each cell to the grid
    for row in range(grid_size):
        for col in range(grid_size):
            # Calculate position
            x = col * cell_width
            y = row * cell_height
            
            # Determine which version to use (alternate colors)
            cell_index = row * grid_size + col
            version = ["blue_version", "green_version", "purple_version"][cell_index % 3]
            
            # Determine scale and rotation
            scale = 0.1 + (((row + col) % 3) * 0.04)  # Slight variation in size
            rotation = ((row + col) % 4) * 90  # 0, 90, 180, or 270 degrees
            
            # Create transform
            transform = f"translate({x + cell_width/2}, {y + cell_height/2}) "
            transform += f"scale({scale}) "
            if rotation != 0:
                transform += f"rotate({rotation}) "
            
            # Add cell
            new_svg += f"""    <g transform="{transform}">
      <use xlink:href="#{version}" x="{-vb_width/2}" y="{-vb_height/2}" />
    </g>
"""
    
    # Close the grid and SVG
    new_svg += """  </g>
</svg>
"""
    
    # Write the new SVG
    with open(output_path, 'w') as f:
        f.write(new_svg)
    
    print(f"Grid SVG created at: {output_path}")
    return output_path

if __name__ == "__main__":
    # Generate the SVG grid
    input_svg = "unexpected-geometry.svg"
    output_svg = "unexpected-geometry-grid.svg"
    
    result = create_grid_svg(input_svg, output_svg)
    print(f"Process complete! Output saved to: {result}")
