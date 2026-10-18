import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SVG Grid Generator with Pastel Evolution v1 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}"""
SVG Grid Generator with Pastel Color Evolution

This script takes the original SVG and creates a grid where colors evolve toward
beautiful pastels, with an algorithm designed to continue evolution in future iterations.
"""

import os
import re
import math
import random
import colorsys

def hex_to_rgb(hex_color):
    """Convert hex color to RGB."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb):
    """Convert RGB to hex color."""
    return f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}"

def evolve_to_pastel(hex_color, version=1, evolution_factor=0.3):
    """
    Evolve a color toward pastel shades.
    
    Args:
        hex_color: Original hex color
        version: Current version number (increases intensity of evolution)
        evolution_factor: How strongly to evolve (0-1)
    
    Returns:
        Evolved hex color
    """
    # Convert hex to RGB
    r, g, b = hex_to_rgb(hex_color)
    
    # Convert RGB to HSL
    r, g, b = r/255.0, g/255.0, b/255.0
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    
    # Evolution parameters depend on version
    # As version increases, colors become more pastel
    version_factor = min(version * 0.2, 0.8)  # Cap at 0.8 to avoid pure white
    
    # Evolve toward pastel:
    # 1. Reduce saturation slightly
    # 2. Increase lightness
    # 3. Shift hue subtly
    
    # Pastel formula:
    # - Moderate-high lightness (0.7-0.9)
    # - Low-moderate saturation (0.1-0.4)
    new_s = s * (1 - (evolution_factor * version_factor))  # Reduce saturation
    new_s = max(0.15, min(0.4, new_s))  # Keep in pastel range
    
    new_l = l + (evolution_factor * version_factor * (0.9 - l))  # Increase lightness
    new_l = max(0.7, min(0.9, new_l))  # Keep in pastel range
    
    # Subtly shift hue toward pastel-friendly ranges
    pastel_hue_targets = [0.05, 0.12, 0.2, 0.35, 0.55, 0.7, 0.85]  # Good pastel hues
    closest_target = min(pastel_hue_targets, key=lambda x: min(abs(x - h), abs(x - h + 1), abs(x - h - 1)))
    hue_shift = (closest_target - h) * evolution_factor * 0.2 * version
    new_h = (h + hue_shift) % 1.0
    
    # Convert back to RGB
    r, g, b = colorsys.hls_to_rgb(new_h, new_l, new_s)
    r, g, b = int(r*255), int(g*255), int(b*255)
    
    # Convert to hex
    return rgb_to_hex((r, g, b))

def create_grid_svg(input_path, output_path, version=1, grid_size=8):
    """
    Create a grid of SVG elements with pastel color evolution.
    
    Args:
        input_path: Path to original SVG
        output_path: Path to save the new SVG
        version: Current version number (influences evolution intensity)
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
  
  <!-- EvolvedSVG Version {version} - Pastel Evolution -->
  
  <!-- Definitions -->
  <defs>
"""
    
    # Background color (from original SVG)
    bg_color_match = re.search(r'<rect width="800" height="800" fill="([^"]+)" />', original_svg)
    if bg_color_match:
        bg_color = bg_color_match.group(1)
    else:
        bg_color = "#0e1015"  # Default if not found
    
    # Evolve the background color toward pastel
    evolved_bg = evolve_to_pastel(bg_color, version, 0.4)
    
    # Create color-shifted versions of each gradient for each cell
    for row in range(grid_size):
        for col in range(grid_size):
            cell_index = row * grid_size + col
            is_checkered = (row + col) % 2 == 1  # Checkered pattern
            
            # Create a unique evolution for each cell
            # Combine row, column, and cell index for variation
            cell_variation = 0.1 + (0.05 * ((row * 3 + col * 5) % 7)) 
            
            # Create evolved gradients for this cell
            for gradient_id, colors in original_colors.items():
                cell_gradient_id = f"{gradient_id}_cell_{row}_{col}"
                
                # Get original colors
                start_color = colors['start']
                end_color = colors['end']
                
                # Evolve colors toward pastel with cell-specific variation
                evolved_start = evolve_to_pastel(start_color, version, 0.3 + cell_variation)
                evolved_end = evolve_to_pastel(end_color, version, 0.3 + cell_variation)
                
                # For checkered cells, shift hue slightly
                if is_checkered:
                    # Convert to HSL for hue shift
                    r, g, b = hex_to_rgb(evolved_start)
                    r, g, b = r/255.0, g/255.0, b/255.0
                    h, l, s = colorsys.rgb_to_hls(r, g, b)
                    
                    # Shift hue by 30 degrees
                    h = (h + 0.08) % 1.0
                    
                    # Convert back to RGB and hex
                    r, g, b = colorsys.hls_to_rgb(h, l, s)
                    evolved_start = rgb_to_hex((int(r*255), int(g*255), int(b*255)))
                    
                    # Repeat for end color
                    r, g, b = hex_to_rgb(evolved_end)
                    r, g, b = r/255.0, g/255.0, b/255.0
                    h, l, s = colorsys.rgb_to_hls(r, g, b)
                    h = (h + 0.08) % 1.0
                    r, g, b = colorsys.hls_to_rgb(h, l, s)
                    evolved_end = rgb_to_hex((int(r*255), int(g*255), int(b*255)))
                
                # Add to SVG
                new_svg += f"""    <linearGradient id="{cell_gradient_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{evolved_start}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="{evolved_end}" stop-opacity="0.9" />
    </linearGradient>
"""
    
    # Create filters for subtle effects
    new_svg += f"""    
    <!-- Glow filter evolved for version {version} -->
    <filter id="evolved_glow_{version}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="{3 + version}" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
"""
    
    # Create modified versions of the original SVG for each cell
    for row in range(grid_size):
        for col in range(grid_size):
            is_checkered = (row + col) % 2 == 1
            
            # Create a symbol for this cell with modified colors
            modified_svg = original_svg
            
            # Replace background color - checkered cells get slightly different background
            cell_bg_color = evolved_bg
            if is_checkered:
                # Lighten the background slightly for checkered cells
                r, g, b = hex_to_rgb(evolved_bg)
                r, g, b = r/255.0, g/255.0, b/255.0
                h, l, s = colorsys.rgb_to_hls(r, g, b)
                l = min(0.95, l * 1.1)  # Lighten 
                r, g, b = colorsys.hls_to_rgb(h, l, s)
                cell_bg_color = rgb_to_hex((int(r*255), int(g*255), int(b*255)))
            
            modified_svg = re.sub(
                r'<rect width="800" height="800" fill="[^"]+" />',
                f'<rect width="800" height="800" fill="{cell_bg_color}" />',
                modified_svg
            )
            
            # Replace gradient references
            for gradient_id in original_colors.keys():
                cell_gradient_id = f"{gradient_id}_cell_{row}_{col}"
                modified_svg = re.sub(
                    f'url\\\\(#{gradient_id}\\\\)',
                    f'url(#{cell_gradient_id})',
                    modified_svg
                )
            
            # Create symbol with the modified SVG
            cell_symbol_id = f"svg_cell_{row}_{col}"
            # Use only the content within the svg tags
            svg_content = re.search(r'<svg[^>]*>(.*)</svg>', modified_svg, re.DOTALL)
            if svg_content:
                content = svg_content.group(1)
            else:
                content = modified_svg
                
            new_svg += f"""    
    <!-- Modified SVG for cell {row},{col} -->
    <symbol id="{cell_symbol_id}" viewBox="0 0 {vb_width} {vb_height}">
      {content}
    </symbol>
"""
    
    # Close defs section
    new_svg += "  </defs>\\n\\n"
    
    # Add evolved background
    new_svg += f"""  <!-- Evolved Background -->
  <rect width="{vb_width}" height="{vb_height}" fill="{evolved_bg}" />
  
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
    
    print(f"Pastel evolved SVG created at: {output_path}")
    return output_path

def extract_version_number(filename):
    """Extract version number from filename."""
    match = re.search(r'-v(\\d+)\\.svg$', filename)
    if match:
        return int(match.group(1))
    return 1  # Default to 1 if no version found

def main():
    # Determine input and output paths
    input_svg = "unexpected-geometry.svg"
    output_svg = "unexpected-geometry-v1.svg"
    
    # Extract version from output filename
    version = extract_version_number(output_svg)
    
    # If this is v2+, use the previous version as input
    if version > 1:
        prev_version = version - 1
        prev_svg = output_svg.replace(f"-v{version}", f"-v{prev_version}")
        if os.path.exists(prev_svg):
            input_svg = prev_svg
            print(f"Using version {prev_version} as input: {input_svg}")
    
    result = create_grid_svg(input_svg, output_svg, version)
    print(f"Process complete! Output saved to: {result}")
    print(f"Run again with '-v{version+1}.svg' to continue the evolution.")

if __name__ == "__main__":
    main()
`}
        </CodeBox>
    </Chapter>
);
