import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Illustrator-Compatible SVG Evolution with Union Overlays v1 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}"""
Illustrator-Compatible SVG Evolution with Union Overlays

This script creates evolving SVG grids with union overlays, specifically designed
to be compatible with Adobe Illustrator.
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
    """Evolve a color toward pastel shades."""
    try:
        # Convert hex to RGB
        r, g, b = hex_to_rgb(hex_color)
        
        # Convert RGB to HSL
        r, g, b = r/255.0, g/255.0, b/255.0
        h, l, s = colorsys.rgb_to_hls(r, g, b)
        
        # Evolution parameters depend on version
        version_factor = min(version * 0.2, 0.8)
        
        # Evolve toward pastel
        new_s = s * (1 - (evolution_factor * version_factor))
        new_s = max(0.15, min(0.4, new_s))
        
        new_l = l + (evolution_factor * version_factor * (0.9 - l))
        new_l = max(0.7, min(0.9, new_l))
        
        # Subtly shift hue toward pastel-friendly ranges
        pastel_hue_targets = [0.05, 0.12, 0.2, 0.35, 0.55, 0.7, 0.85]
        closest_target = min(pastel_hue_targets, key=lambda x: min(abs(x - h), abs(x - h + 1), abs(x - h - 1)))
        hue_shift = (closest_target - h) * evolution_factor * 0.2 * version
        new_h = (h + hue_shift) % 1.0
        
        # Convert back to RGB
        r, g, b = colorsys.hls_to_rgb(new_h, new_l, new_s)
        r, g, b = int(r*255), int(g*255), int(b*255)
        
        # Convert to hex
        return rgb_to_hex((r, g, b))
    except Exception as e:
        print(f"Error evolving color {hex_color}: {e}")
        return hex_color

def determine_grid_size(version):
    """Determine grid size based on version number."""
    if version == 1:
        return 2  # 2x2 grid for first version
    elif version == 2:
        return 3  # 3x3 grid for second version
    elif version == 3:
        return 5  # 5x5 grid for third version
    else:
        # For higher versions, use a formula that grows but not too quickly
        return min(version + 3, 12)  # Cap at 12x12

def create_union_overlays(grid_size, cell_width, cell_height, colors, version):
    """Create shape overlays that span multiple cells to create union effects."""
    union_svg = ""
    
    # Number of shapes to create (increases with version)
    num_shapes = max(3, min(version * 2, 20))
    
    # Create different types of shapes
    for i in range(num_shapes):
        # Pick a random shape type
        shape_type = random.choice(['circle', 'rect', 'polygon', 'path'])
        
        # Random color with some transparency
        color = random.choice(colors)
        opacity = random.uniform(0.15, 0.3)
        
        # Random position that could span multiple cells
        span_size = random.randint(1, min(3, grid_size-1))
        start_row = random.randint(0, grid_size - span_size)
        start_col = random.randint(0, grid_size - span_size)
        
        # Calculate coordinates
        x1 = start_col * cell_width
        y1 = start_row * cell_height
        x2 = (start_col + span_size) * cell_width
        y2 = (start_row + span_size) * cell_height
        
        # Create the shape
        if shape_type == 'circle':
            cx = (x1 + x2) / 2
            cy = (y1 + y2) / 2
            radius = min(x2 - x1, y2 - y1) / 2 * random.uniform(0.5, 0.9)
            union_svg += f"""    <circle cx="{cx}" cy="{cy}" r="{radius}" 
          fill="{color}" fill-opacity="{opacity}"
          stroke="{color}" stroke-width="2" stroke-opacity="{opacity+0.1}" />
"""
        elif shape_type == 'rect':
            width = (x2 - x1) * random.uniform(0.6, 0.9)
            height = (y2 - y1) * random.uniform(0.6, 0.9)
            x = x1 + (x2 - x1 - width) / 2
            y = y1 + (y2 - y1 - height) / 2
            
            # Add rounded corners sometimes
            rx = 0
            if random.random() > 0.5:
                rx = min(width, height) * random.uniform(0.1, 0.3)
                
            union_svg += f"""    <rect x="{x}" y="{y}" width="{width}" height="{height}" rx="{rx}"
          fill="{color}" fill-opacity="{opacity}"
          stroke="{color}" stroke-width="2" stroke-opacity="{opacity+0.1}" />
"""
        elif shape_type == 'polygon':
            # Create a polygon that spans multiple cells
            num_points = random.randint(3, 6)
            points = []
            
            # Generate points within the span area
            for j in range(num_points):
                px = random.uniform(x1, x2)
                py = random.uniform(y1, y2)
                points.append(f"{px},{py}")
                
            points_str = " ".join(points)
            union_svg += f"""    <polygon points="{points_str}"
          fill="{color}" fill-opacity="{opacity}"
          stroke="{color}" stroke-width="2" stroke-opacity="{opacity+0.1}" />
"""
        elif shape_type == 'path':
            # Create a bezier curve that spans multiple cells
            # Start and end points
            start_x = random.uniform(x1, x2)
            start_y = random.uniform(y1, y2)
            end_x = random.uniform(x1, x2)
            end_y = random.uniform(y1, y2)
            
            # Control points
            cp1_x = random.uniform(x1, x2)
            cp1_y = random.uniform(y1, y2)
            cp2_x = random.uniform(x1, x2)
            cp2_y = random.uniform(y1, y2)
            
            union_svg += f"""    <path d="M {start_x},{start_y} C {cp1_x},{cp1_y} {cp2_x},{cp2_y} {end_x},{end_y}"
          fill="none" stroke="{color}" stroke-width="{random.uniform(3, 8)}" stroke-opacity="{opacity+0.1}" />
"""
    
    return union_svg

def create_grid_svg(input_path, output_path, version=1):
    """Create an evolved SVG with dynamic grid size and filled shapes."""
    print(f"Reading input SVG: {input_path}")
    
    try:
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
        
        # Determine grid size based on version
        grid_size = determine_grid_size(version)
        print(f"Using grid size: {grid_size}x{grid_size} for version {version}")
        
        # Calculate cell dimensions
        cell_width = vb_width / grid_size
        cell_height = vb_height / grid_size
        
        # Extract background color
        bg_color_match = re.search(r'<rect width="800" height="800" fill="([^"]+)"', original_svg)
        if bg_color_match:
            bg_color = bg_color_match.group(1)
        else:
            bg_color = "#0e1015"  # Default if not found
        
        # Evolve the background color
        evolved_bg = evolve_to_pastel(bg_color, version, 0.4)
        
        # Extract gradient colors for transformation
        gradient_colors = []
        gradient_matches = re.finditer(r'stop-color="(#[0-9a-fA-F]{6})"', original_svg)
        for match in gradient_matches:
            color = match.group(1)
            gradient_colors.append(color)
        
        # If we found no gradient colors, add some defaults
        if not gradient_colors:
            gradient_colors = ["#00ffd9", "#ff00ff", "#ffbf00", "#00b3a1", "#b300b3", "#cc7a00"]
        
        # Evolve all gradient colors
        evolved_colors = []
        for color in gradient_colors:
            evolved_color = evolve_to_pastel(color, version, 0.3)
            evolved_colors.append(evolved_color)
        
        # Start building a new SVG
        new_svg = f'''<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     version="1.1" width="{vb_width}" height="{vb_height}" viewBox="0 0 {vb_width} {vb_height}">
  
  <!-- EvolvedSVG Version {version} - Dynamic Grid {grid_size}x{grid_size} -->
  
  <!-- Background -->
  <rect width="{vb_width}" height="{vb_height}" fill="{evolved_bg}" />
  
  <!-- Grid of evolved cells -->
  <g id="svg_grid">
'''
        
        # Create a group for each cell
        for row in range(grid_size):
            for col in range(grid_size):
                # Calculate position
                x = col * cell_width
                y = row * cell_height
                
                # Calculate scale to fit cell
                scale = 0.95 * min(cell_width / vb_width, cell_height / vb_height)
                
                # Add slight rotation for visual interest
                # Vary rotation based on cell position
                rotation = (row * 7 + col * 11) % 20 - 10  # Range: -10 to 9 degrees
                
                # Calculate transform
                transform = f"translate({x + cell_width/2}, {y + cell_height/2}) "
                if rotation != 0:
                    transform += f"rotate({rotation}) "
                transform += f"scale({scale}) "
                transform += f"translate({-vb_width/2}, {-vb_height/2})"
                
                # Add this cell to the SVG
                new_svg += f'''    <!-- Cell {row},{col} -->
    <g transform="{transform}">
      <rect width="{vb_width}" height="{vb_height}" fill="{evolved_bg}" />
'''
                
                # Copy all elements from original SVG but replace colors
                # Get everything between the svg tags
                content_match = re.search(r'<svg[^>]*>(.*)</svg>', original_svg, re.DOTALL)
                if content_match:
                    content = content_match.group(1)
                    
                    # Replace colors with evolved versions
                    for i, original_color in enumerate(gradient_colors):
                        # Replace each gradient color with its evolved version
                        evolved_color = evolved_colors[i % len(evolved_colors)]
                        content = content.replace(f'"{original_color}"', f'"{evolved_color}"')
                    
                    # Add slightly different hue shift for each cell to increase variety
                    hue_shift = (row * 3 + col * 5) % 12 * 30  # 0-330 degrees in 30-degree increments
                    
                    # Apply additional hue shift to all evolved colors in this cell
                    for i, evolved_color in enumerate(evolved_colors):
                        r, g, b = hex_to_rgb(evolved_color)
                        r, g, b = r/255.0, g/255.0, b/255.0
                        h, l, s = colorsys.rgb_to_hls(r, g, b)
                        
                        # Apply cell-specific hue shift
                        h = (h + hue_shift/360) % 1.0
                        
                        r, g, b = colorsys.hls_to_rgb(h, l, s)
                        r, g, b = int(r*255), int(g*255), int(b*255)
                        cell_color = rgb_to_hex((r, g, b))
                        
                        # Replace evolved color with cell-specific color
                        content = content.replace(f'"{evolved_color}"', f'"{cell_color}"')
                    
                    # Add the transformed content
                    new_svg += content
                
                # Close the cell group
                new_svg += "    </g>\\n"
        
        # Close the grid group
        new_svg += "  </g>\\n\\n"
        
        # Add union overlay shapes
        new_svg += '  <!-- Union Overlays -->\\n'
        new_svg += '  <g id="union_overlays">\\n'
        new_svg += create_union_overlays(grid_size, cell_width, cell_height, evolved_colors, version)
        new_svg += '  </g>\\n'
        
        # Close the SVG
        new_svg += '</svg>\\n'
        
        # Write the file
        with open(output_path, 'w') as f:
            f.write(new_svg)
        
        print(f"Illustrator-compatible SVG created at: {output_path}")
        return output_path
        
    except Exception as e:
        print(f"Error creating SVG: {e}")
        import traceback
        traceback.print_exc()
        return None

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
    if result:
        print(f"Process complete! Output saved to: {result}")
        print(f"Run again with '-v{version+1}.svg' to continue the evolution.")
    else:
        print("Failed to create SVG.")

if __name__ == "__main__":
    main()
`}
        </CodeBox>
    </Chapter>
);
