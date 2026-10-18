"""
Enhanced SVG Evolution with Dynamic Grids and Filled Shapes

This script evolves SVGs across versions with:
1. Dynamic grid sizes that change with each version
2. Filled shapes with varied colors for potential union effects
3. Scale transformations that maximize space utilization
4. Progressive pastel color evolution
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

def determine_grid_size(version):
    """
    Determine grid size based on version number.
    Grid size evolves with version number to create more complexity.
    
    Args:
        version: Current version number
    
    Returns:
        Grid size (number of rows and columns)
    """
    # Start with a smaller grid and grow with version
    # Use Fibonacci-like progression
    if version == 1:
        return 2  # 2x2 grid for first version
    elif version == 2:
        return 3  # 3x3 grid for second version
    elif version == 3:
        return 5  # 5x5 grid for third version
    else:
        # For higher versions, use a formula that grows but not too quickly
        return min(version + 3, 12)  # Cap at 12x12 to avoid becoming too small

def create_union_overlays(grid_size, cell_width, cell_height, colors, version):
    """
    Create shape overlays that span multiple cells to create union effects.
    
    Args:
        grid_size: Size of the grid
        cell_width: Width of each cell
        cell_height: Height of each cell
        colors: List of colors to use
        version: Current version
        
    Returns:
        SVG elements for union shapes
    """
    union_svg = ""
    
    # Number of shapes to create (increases with version)
    num_shapes = max(3, min(version * 2, 20))
    
    # Create different types of shapes
    for i in range(num_shapes):
        # Pick a random shape type
        shape_type = random.choice(['circle', 'rect', 'polygon', 'path'])
        
        # Random color with some transparency
        color = random.choice(colors)
        r, g, b = hex_to_rgb(color)
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

def modify_svg_fill_property(svg_content):
    """
    Modify SVG to add fill to some elements that originally had no fill.
    This helps create more filled areas for potential union effects.
    
    Args:
        svg_content: Original SVG content
        
    Returns:
        Modified SVG content
    """
    # Find elements with stroke but no fill and add fill property
    # Common elements: path, polygon, polyline, rect, circle, ellipse
    for element in ['path', 'polygon', 'rect', 'circle']:
        # Find instances with stroke="url(#..." but no fill or fill="none"
        pattern = f'<{element}([^>]*stroke="url\\(#[^"]+\\)"[^>]*)(fill="none"|fill="transparent"|)([^>]*)>'
        
        # Function to add fill based on the matched string
        def add_fill(match):
            attributes = match.group(1)
            fill = match.group(2)
            rest = match.group(3)
            
            # Extract the gradient ID from stroke
            gradient_match = re.search(r'stroke="url\(#([^"]+)\)"', attributes)
            if gradient_match:
                gradient_id = gradient_match.group(1)
                
                # Only modify some elements for variety (30% chance)
                if random.random() < 0.3:
                    # Add fill with the same gradient but lower opacity
                    fill = f'fill="url(#{gradient_id})" fill-opacity="0.2"'
                    
            return f'<{element}{attributes}{fill}{rest}>'
        
        svg_content = re.sub(pattern, add_fill, svg_content)
    
    return svg_content

def create_grid_svg(input_path, output_path, version=1):
    """
    Create an evolved SVG with dynamic grid size and filled shapes.
    
    Args:
        input_path: Path to original SVG
        output_path: Path to save the new SVG
        version: Current version number
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
    
    # Determine grid size based on version
    grid_size = determine_grid_size(version)
    print(f"Using grid size: {grid_size}x{grid_size} for version {version}")
    
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
  
  <!-- EvolvedSVG Version {version} - Dynamic Grid {grid_size}x{grid_size} -->
  
  <!-- Definitions -->
  <defs>
"""
    
    # Extract background color
    bg_color_match = re.search(r'<rect width="800" height="800" fill="([^"]+)" />', original_svg)
    if bg_color_match:
        bg_color = bg_color_match.group(1)
    else:
        bg_color = "#0e1015"  # Default if not found
    
    # Evolve the background color
    evolved_bg = evolve_to_pastel(bg_color, version, 0.4)
    
    # Create evolved gradients for all cells
    evolved_colors = []  # Track colors for union shapes
    
    for row in range(grid_size):
        for col in range(grid_size):
            cell_index = row * grid_size + col
            
            # Create cell-specific variation factor
            # Use prime numbers to create quasi-periodic variations
            variation_factor = 0.1 + (0.05 * ((row * 3 + col * 5) % 7))
            
            # Create evolved gradients for this cell
            for gradient_id, colors in original_colors.items():
                cell_gradient_id = f"{gradient_id}_cell_{row}_{col}"
                
                # Get original colors
                start_color = colors['start']
                end_color = colors['end']
                
                # Evolve colors with cell-specific variation
                evolved_start = evolve_to_pastel(start_color, version, 0.3 + variation_factor)
                evolved_end = evolve_to_pastel(end_color, version, 0.3 + variation_factor)
                
                # Track colors for union shapes
                evolved_colors.extend([evolved_start, evolved_end])
                
                # Add gradient definition
                new_svg += f"""    <linearGradient id="{cell_gradient_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{evolved_start}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="{evolved_end}" stop-opacity="0.9" />
    </linearGradient>
"""
    
    # Create filters
    new_svg += f"""    
    <!-- Glow filter -->
    <filter id="evolved_glow_{version}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="{3 + version}" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
"""
    
    # Create modified versions of the original SVG for each cell
    for row in range(grid_size):
        for col in range(grid_size):
            cell_index = row * grid_size + col
            
            # Modify the SVG to add fills for potential union effects
            modified_svg = modify_svg_fill_property(original_svg)
            
            # Replace background color
            cell_bg_color = evolved_bg
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
            
            # Extract content from within the svg tags
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
    new_svg += "  </defs>\n\n"
    
    # Add background
    new_svg += f"""  <!-- Background -->
  <rect width="{vb_width}" height="{vb_height}" fill="{evolved_bg}" />
  
  <!-- Grid of SVG elements -->
  <g id="svg_grid">
"""
    
    # Add each cell to the grid with transformations
    for row in range(grid_size):
        for col in range(grid_size):
            # Calculate position
            x = col * cell_width
            y = row * cell_height
            
            # Cell symbol ID
            cell_symbol_id = f"svg_cell_{row}_{col}"
            
            # Apply scaling transformation to fill the cell better
            # Use different scale factors for different cells for variety
            scale_x = 1.0
            scale_y = 1.0
            
            # For some cells, scale differently in x and y for variety
            if (row + col) % 3 == 0:
                scale_x *= random.uniform(0.85, 1.05)
                scale_y *= random.uniform(0.85, 1.05)
            
            # Apply slight rotation for some cells
            rotation = 0
            if (row * col) % 4 == 1:
                rotation = random.choice([0, 5, -5, 10, -10])
            
            # Create transform
            transform = f"translate({x}, {y}) "
            if rotation != 0:
                # Rotate around cell center
                transform += f"translate({cell_width/2}, {cell_height/2}) "
                transform += f"rotate({rotation}) "
                transform += f"translate({-cell_width/2}, {-cell_height/2}) "
            
            # Add cell to grid
            new_svg += f"""    <!-- Cell {row},{col} -->
    <g transform="{transform}">
      <use xlink:href="#{cell_symbol_id}" width="{cell_width}" height="{cell_height}" />
    </g>
"""
    
    # Close the grid group
    new_svg += "  </g>\n\n"
    
    # Add union shape overlays
    union_shapes = create_union_overlays(grid_size, cell_width, cell_height, evolved_colors, version)
    new_svg += f"""  <!-- Union Shapes -->
  <g id="union_overlays">
{union_shapes}  </g>
"""
    
    # Close the SVG
    new_svg += "</svg>\n"
    
    # Write the new SVG
    with open(output_path, 'w') as f:
        f.write(new_svg)
    
    print(f"Dynamic grid SVG created at: {output_path}")
    return output_path

def extract_version_number(filename):
    """Extract version number from filename."""
    match = re.search(r'-v(\d+)\.svg$', filename)
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
