"""
Mondrian-Inspired SVG Evolution

This script creates a grid-based evolution of the original SVG with:
1. Bold, cohesive color blocks
2. Structured composition inspired by Mondrian
3. Clear geometric forms with defined boundaries
4. Harmonious color palette
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

def create_harmonious_palette(base_colors, version=1):
    """
    Create a harmonious color palette with bold, cohesive colors.
    
    Args:
        base_colors: List of original colors to evolve from
        version: Current version number
        
    Returns:
        Dictionary with color categories and their hex values
    """
    # Define a structured palette with specific roles
    palette = {
        "background": "#f5f5f5",  # Light background
        "primary": [],            # Primary colors (3-4)
        "secondary": [],          # Secondary accent colors (2-3)
        "neutral": [],            # Neutral/gray tones (1-2)
        "borders": "#1a1a1a"      # Border color
    }
    
    # Extract and organize original colors
    if base_colors and len(base_colors) >= 3:
        # Convert to HSL for better color manipulation
        hsl_colors = []
        for color in base_colors:
            r, g, b = hex_to_rgb(color)
            r, g, b = r/255.0, g/255.0, b/255.0
            h, l, s = colorsys.rgb_to_hls(r, g, b)
            hsl_colors.append((h, s, l))
        
        # Sort by hue for better organization
        hsl_colors.sort()
        
        # For version 1, create a bold, high-contrast palette
        if version == 1:
            # Primary colors - bold and saturated
            for i in range(min(4, len(hsl_colors))):
                h, s, l = hsl_colors[i]
                # Increase saturation, adjust lightness for boldness
                s = min(0.9, s * 1.5)
                l = 0.55  # Mid-range lightness for vibrance
                r, g, b = colorsys.hls_to_rgb(h, l, s)
                palette["primary"].append(rgb_to_hex((int(r*255), int(g*255), int(b*255))))
            
            # Create secondary colors by shifting hues of primary
            for i in range(min(3, len(palette["primary"]))):
                h, s, l = colorsys.rgb_to_hls(*(x/255 for x in hex_to_rgb(palette["primary"][i])))
                h = (h + 0.25) % 1.0  # Shift by 90 degrees
                s = min(0.7, s * 0.9)  # Slightly less saturated
                l = 0.65  # Lighter than primary
                r, g, b = colorsys.hls_to_rgb(h, l, s)
                palette["secondary"].append(rgb_to_hex((int(r*255), int(g*255), int(b*255))))
            
            # Create neutral colors
            palette["neutral"].append("#e0e0e0")  # Light gray
            palette["neutral"].append("#a0a0a0")  # Medium gray
        
        # For later versions, evolve the palette
        else:
            # Create a more subdued, sophisticated palette for later versions
            base_hues = [0.05, 0.55, 0.7]  # Foundational hues for harmony
            
            # Primary colors based on evolved base hues
            for i, base_h in enumerate(base_hues):
                # Evolve hue slightly with each version
                h = (base_h + (version - 1) * 0.05) % 1.0
                s = 0.6 - (version * 0.05)  # Gradually reduce saturation
                s = max(0.3, min(0.7, s))   # Keep in reasonable range
                l = 0.55 + (version * 0.02)  # Gradually increase lightness
                l = max(0.4, min(0.7, l))   # Keep in reasonable range
                
                r, g, b = colorsys.hls_to_rgb(h, l, s)
                palette["primary"].append(rgb_to_hex((int(r*255), int(g*255), int(b*255))))
            
            # Create secondary colors
            for i, base_h in enumerate(base_hues):
                h = (base_h + 0.25 + (version - 1) * 0.05) % 1.0
                s = 0.4 - (version * 0.03)
                s = max(0.2, min(0.6, s))
                l = 0.65 + (version * 0.02)
                l = max(0.5, min(0.8, l))
                
                r, g, b = colorsys.hls_to_rgb(h, l, s)
                palette["secondary"].append(rgb_to_hex((int(r*255), int(g*255), int(b*255))))
            
            # Evolve neutral colors
            light_neutral = 0.85 + (version * 0.01)
            light_neutral = min(0.95, light_neutral)
            palette["neutral"].append(rgb_to_hex((
                int(light_neutral*255),
                int(light_neutral*255),
                int(light_neutral*255))))
            
            med_neutral = 0.6 + (version * 0.02)
            med_neutral = min(0.8, med_neutral)
            palette["neutral"].append(rgb_to_hex((
                int(med_neutral*255),
                int(med_neutral*255),
                int(med_neutral*255))))
        
        # Evolve background with version
        bg_lightness = 0.95 - (version * 0.02)
        bg_lightness = max(0.85, bg_lightness)
        palette["background"] = rgb_to_hex((
            int(bg_lightness*255),
            int(bg_lightness*255),
            int(bg_lightness*255)))
    
    # If no base colors provided, use a default Mondrian-inspired palette
    else:
        palette["primary"] = ["#d42029", "#fac901", "#225a9c"]  # Red, Yellow, Blue
        palette["secondary"] = ["#ffe119", "#93c2df", "#e57b7d"]
        palette["neutral"] = ["#f0f0f0", "#d0d0d0"]
    
    return palette

def create_mondrian_grid(width, height, grid_size, min_cell_size=50):
    """
    Create a Mondrian-style grid with varied cell sizes.
    
    Args:
        width: Canvas width
        height: Canvas height
        grid_size: Base grid size (number of divisions)
        min_cell_size: Minimum cell size in pixels
        
    Returns:
        List of cell rectangles [x, y, width, height]
    """
    # Start with an initial grid
    base_grid = []
    cell_width = width / grid_size
    cell_height = height / grid_size
    
    for row in range(grid_size):
        for col in range(grid_size):
            x = col * cell_width
            y = row * cell_height
            base_grid.append([x, y, cell_width, cell_height])
    
    # Merge some cells to create Mondrian-style varied rectangles
    merged_grid = []
    used_cells = set()
    
    # First pass - merge horizontally
    for i, cell in enumerate(base_grid):
        if i in used_cells:
            continue
        
        # Get row and column
        x, y, w, h = cell
        col = int(x / cell_width)
        row = int(y / cell_height)
        
        # Decide if we should merge horizontally
        merge_count = 0
        if random.random() < 0.5:  # 50% chance to merge
            max_merge = min(3, grid_size - col)  # Maximum 3 cells, limited by grid boundary
            merge_count = random.randint(1, max_merge)
            
            # Check if all cells are available
            can_merge = True
            for m in range(1, merge_count):
                next_cell_idx = i + m
                if next_cell_idx >= len(base_grid) or next_cell_idx in used_cells:
                    can_merge = False
                    break
                next_cell = base_grid[next_cell_idx]
                if next_cell[1] != y:  # Not in same row
                    can_merge = False
                    break
            
            if can_merge:
                # Merge cells
                merged_cell = [x, y, w * merge_count, h]
                merged_grid.append(merged_cell)
                
                # Mark cells as used
                for m in range(merge_count):
                    used_cells.add(i + m)
            else:
                # Can't merge, use as is
                merged_grid.append(cell)
                used_cells.add(i)
        else:
            # Don't merge, use as is
            merged_grid.append(cell)
            used_cells.add(i)
    
    # Second pass - merge some cells vertically
    final_grid = []
    used_merged = set()
    
    for i, cell in enumerate(merged_grid):
        if i in used_merged:
            continue
        
        x, y, w, h = cell
        
        # Find cells below this one with same width and x position
        if random.random() < 0.3:  # 30% chance to merge vertically
            matching_cells = []
            for j, other_cell in enumerate(merged_grid):
                if j != i and j not in used_merged:
                    ox, oy, ow, oh = other_cell
                    # Must have same x and width, and be directly below
                    if ox == x and ow == w and abs(oy - (y + h)) < 1:
                        matching_cells.append((j, other_cell))
                        break  # Only merge with one cell below
            
            if matching_cells:
                j, other_cell = matching_cells[0]
                ox, oy, ow, oh = other_cell
                # Merge vertically
                final_grid.append([x, y, w, h + oh])
                used_merged.add(i)
                used_merged.add(j)
            else:
                final_grid.append(cell)
                used_merged.add(i)
        else:
            final_grid.append(cell)
            used_merged.add(i)
    
    # Add any remaining cells
    for i, cell in enumerate(merged_grid):
        if i not in used_merged:
            final_grid.append(cell)
    
    return final_grid

def assign_colors_to_grid(grid, palette, version=1):
    """
    Assign colors to grid cells in a harmonious, Mondrian-inspired way.
    
    Args:
        grid: List of cell rectangles [x, y, width, height]
        palette: Color palette dictionary
        version: Current version number
        
    Returns:
        List of (cell, color) tuples
    """
    colored_grid = []
    
    # Sort grid by area (descending) to color larger areas first
    grid_with_area = [(cell, cell[2] * cell[3]) for cell in grid]
    grid_with_area.sort(key=lambda x: x[1], reverse=True)
    
    # Get colors from palette
    primary = palette["primary"]
    secondary = palette["secondary"]
    neutral = palette["neutral"]
    
    # Calculate color distribution
    total_cells = len(grid)
    primary_count = int(total_cells * 0.2)  # 20% primary colors
    secondary_count = int(total_cells * 0.3)  # 30% secondary colors
    neutral_count = total_cells - primary_count - secondary_count  # Rest neutral
    
    # Function to get adjacent cells
    def get_adjacent(cell, colored):
        x, y, w, h = cell
        adjacent_colors = []
        for other_cell, color in colored:
            ox, oy, ow, oh = other_cell
            # Check if cells are adjacent
            horizontally_adjacent = (abs(x - (ox + ow)) < 1 or abs(ox - (x + w)) < 1) and (
                (y >= oy and y < oy + oh) or
                (y + h > oy and y + h <= oy + oh) or
                (oy >= y and oy < y + h) or
                (oy + oh > y and oy + oh <= y + h)
            )
            vertically_adjacent = (abs(y - (oy + oh)) < 1 or abs(oy - (y + h)) < 1) and (
                (x >= ox and x < ox + ow) or
                (x + w > ox and x + w <= ox + ow) or
                (ox >= x and ox < x + w) or
                (ox + ow > x and ox + ow <= x + w)
            )
            if horizontally_adjacent or vertically_adjacent:
                adjacent_colors.append(color)
        return adjacent_colors
    
    # Assign colors to cells
    colored_cells = []
    
    # First, assign primary colors to largest cells
    for i in range(min(primary_count, len(grid_with_area))):
        cell, area = grid_with_area[i]
        color_idx = i % len(primary)
        colored_cells.append((cell, primary[color_idx]))
    
    # Then assign secondary colors, avoiding adjacency with same color
    for i in range(primary_count, primary_count + secondary_count):
        if i >= len(grid_with_area):
            break
        cell, area = grid_with_area[i]
        adjacent_colors = get_adjacent(cell, colored_cells)
        
        available_colors = [c for c in secondary if c not in adjacent_colors]
        if available_colors:
            color = random.choice(available_colors)
        else:
            color = secondary[i % len(secondary)]
        
        colored_cells.append((cell, color))
    
    # Finally assign neutral colors
    for i in range(primary_count + secondary_count, len(grid_with_area)):
        cell, area = grid_with_area[i]
        adjacent_colors = get_adjacent(cell, colored_cells)
        
        available_colors = [c for c in neutral if c not in adjacent_colors]
        if available_colors:
            color = random.choice(available_colors)
        else:
            color = neutral[i % len(neutral)]
        
        colored_cells.append((cell, color))
    
    return colored_cells

def extract_original_svg_elements(svg_content):
    """
    Extract key elements from the original SVG.
    
    Args:
        svg_content: Original SVG content
        
    Returns:
        Dictionary of extracted elements
    """
    elements = {
        "paths": [],
        "circles": [],
        "rects": [],
        "polygons": [],
        "colors": []
    }
    
    # Extract colors
    color_matches = re.finditer(r'stop-color="(#[0-9a-fA-F]{6})"', svg_content)
    for match in color_matches:
        color = match.group(1)
        if color not in elements["colors"]:
            elements["colors"].append(color)
    
    # Extract paths
    path_matches = re.finditer(r'<path[^>]*d="([^"]+)"[^>]*>', svg_content)
    for match in re.finditer(r'<path[^>]*>', svg_content):
        path_element = match.group(0)
        d_match = re.search(r'd="([^"]+)"', path_element)
        if d_match:
            elements["paths"].append({
                "d": d_match.group(1),
                "element": path_element
            })
    
    # Extract circles
    circle_matches = re.finditer(r'<circle[^>]*>', svg_content)
    for match in circle_matches:
        elements["circles"].append(match.group(0))
    
    # Extract rectangles
    rect_matches = re.finditer(r'<rect[^>]*>', svg_content)
    for match in rect_matches:
        elements["rects"].append(match.group(0))
    
    # Extract polygons
    polygon_matches = re.finditer(r'<polygon[^>]*>', svg_content)
    for match in polygon_matches:
        elements["polygons"].append(match.group(0))
    
    return elements

def create_mondrian_svg(input_path, output_path, version=1):
    """
    Create a Mondrian-inspired SVG evolution.
    
    Args:
        input_path: Path to original SVG
        output_path: Path to save the new SVG
        version: Current version number
    """
    print(f"Creating Mondrian-inspired SVG version {version}")
    
    try:
        # Read the original SVG
        with open(input_path, 'r') as f:
            original_svg = f.read()
        
        # Extract SVG dimensions
        viewbox_match = re.search(r'viewBox=["\'](\d+) (\d+) (\d+) (\d+)["\']', original_svg)
        if viewbox_match:
            vb_x, vb_y, vb_width, vb_height = map(int, viewbox_match.groups())
        else:
            vb_width, vb_height = 800, 800
        
        # Extract elements from the original SVG
        elements = extract_original_svg_elements(original_svg)
        
        # Create a harmonious color palette
        palette = create_harmonious_palette(elements["colors"], version)
        
        # Determine grid size based on version
        base_grid_size = 2 + version  # Increases with version
        
        # Create Mondrian-style grid
        grid = create_mondrian_grid(vb_width, vb_height, base_grid_size)
        
        # Assign colors to grid
        colored_grid = assign_colors_to_grid(grid, palette, version)
        
        # Start building the SVG
        new_svg = f'''<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     version="1.1" width="{vb_width}" height="{vb_height}" viewBox="0 0 {vb_width} {vb_height}">
  
  <!-- Mondrian-Inspired SVG Version {version} -->
  
  <!-- Background -->
  <rect width="{vb_width}" height="{vb_height}" fill="{palette['background']}" />
  
  <!-- Mondrian-style grid -->
  <g id="mondrian_grid">
'''
        
        # Add the colored grid cells
        for cell, color in colored_grid:
            x, y, w, h = cell
            new_svg += f'''    <rect x="{x}" y="{y}" width="{w}" height="{h}" 
          fill="{color}" stroke="{palette['borders']}" stroke-width="4" />
'''
        
        # Close the grid group
        new_svg += "  </g>\n\n"
        
        # Create a group for the original SVG elements
        new_svg += '  <!-- Original SVG elements placed in grid cells -->\n'
        new_svg += '  <g id="original_elements">\n'
        
        # Place original SVG elements in grid cells
        paths = elements["paths"]
        circles = elements["circles"]
        all_elements = paths + [{"element": c} for c in circles]
        
        if all_elements:
            for i, (cell, color) in enumerate(colored_grid):
                x, y, w, h = cell
                
                # Skip some cells for visual balance
                if random.random() < 0.4:
                    continue
                
                # Select an element
                element_idx = i % len(all_elements)
                element = all_elements[element_idx]
                
                # Calculate scale and position
                scale = min(w / vb_width, h / vb_height) * 0.8
                
                # Center in cell
                cx = x + w/2
                cy = y + h/2
                
                # Add transformation
                transform = f"translate({cx}, {cy}) scale({scale}) translate({-vb_width/2}, {-vb_height/2})"
                
                # Adjust colors to match or contrast with cell color
                element_color = palette["primary"][i % len(palette["primary"])]
                
                # Check if element and color would clash
                r1, g1, b1 = hex_to_rgb(color)
                r2, g2, b2 = hex_to_rgb(element_color)
                brightness1 = (r1 * 299 + g1 * 587 + b1 * 114) / 1000
                brightness2 = (r2 * 299 + g2 * 587 + b2 * 114) / 1000
                
                # If brightness difference is too small, pick a different color
                if abs(brightness1 - brightness2) < 50:
                    for alt_color in palette["primary"] + palette["secondary"]:
                        r2, g2, b2 = hex_to_rgb(alt_color)
                        brightness2 = (r2 * 299 + g2 * 587 + b2 * 114) / 1000
                        if abs(brightness1 - brightness2) >= 50:
                            element_color = alt_color
                            break
                
                # Clone and modify the element
                if "d" in element:  # It's a path
                    path_d = element["d"]
                    new_svg += f'''    <path d="{path_d}" transform="{transform}" 
          fill="none" stroke="{element_color}" stroke-width="1.5" />
'''
                else:  # It's another type of element
                    elem = element["element"]
                    # Simplify by creating a group with transform
                    new_svg += f'''    <g transform="{transform}">
      {elem.replace('stroke="url(#', 'stroke="').replace('fill="url(#', 'fill="')
               .replace('stroke-width="1.5"', f'stroke-width="1.5" stroke="{element_color}"')}
    </g>
'''
        
        # Close the elements group
        new_svg += "  </g>\n"
        
        # Add borders last so they're on top
        new_svg += '  <!-- Borders -->\n'
        new_svg += '  <g id="borders">\n'
        
        for cell, color in colored_grid:
            x, y, w, h = cell
            new_svg += f'''    <rect x="{x}" y="{y}" width="{w}" height="{h}" 
          fill="none" stroke="{palette['borders']}" stroke-width="4" />
'''
        
        # Close the borders group
        new_svg += "  </g>\n"
        
        # Close the SVG
        new_svg += '</svg>\n'
        
        # Write the file
        with open(output_path, 'w') as f:
            f.write(new_svg)
        
        print(f"Mondrian-inspired SVG created at: {output_path}")
        return output_path
        
    except Exception as e:
        print(f"Error creating SVG: {e}")
        import traceback
        traceback.print_exc()
        return None

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
    
    result = create_mondrian_svg(input_svg, output_svg, version)
    if result:
        print(f"Process complete! Output saved to: {result}")
        print(f"Run again with '-v{version+1}.svg' to continue the evolution.")
    else:
        print("Failed to create SVG.")

if __name__ == "__main__":
    main()
