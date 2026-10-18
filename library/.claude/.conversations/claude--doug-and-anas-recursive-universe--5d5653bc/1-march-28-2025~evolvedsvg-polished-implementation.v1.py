"""
EvolvedSVG: Cross-Scale Evolutionary Art (Polished Implementation)

This implementation creates evolving geometric artwork across versions:
1. Each version creates a grid with cells containing transformed versions of the previous artwork
2. Grid cells are connected with paths that follow mathematical patterns
3. Colors evolve across versions following color theory principles
4. Patterns merge across cells to create union effects
5. Each version maintains coherence while adding new complexity
"""

import os
import re
import math
import random
import colorsys
from xml.dom import minidom

class EvolvedSVG:
    def __init__(self, base_path="unexpected-geometry.svg"):
        """Initialize the evolutionary SVG generator."""
        # Determine version and paths
        self.version = self.determine_version(base_path)
        self.output_path = self.create_versioned_path(base_path, self.version)
        self.previous_path = self.get_previous_version_path(base_path) if self.version > 1 else None
        
        # Configuration
        self.grid_size = 3  # Number of cells in each dimension
        self.width = 800
        self.height = 800
        
        # Color evolution params
        self.hue_shift = 30  # Degrees to shift hue with each version
        self.saturation_mod = 0.1  # Saturation variation
        self.lightness_mod = 0.05  # Lightness variation
        
        # Mathematical constants
        self.golden_ratio = 1.618
        self.prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19]
        
    def determine_version(self, base_path):
        """Determine the next version number in sequence."""
        # Extract path components
        base_dir = os.path.dirname(base_path)
        base_name = os.path.basename(base_path)
        name_part, ext = os.path.splitext(base_name)
        name_without_version = re.sub(r'-v\d+$', '', name_part)
        
        # Find next available version number
        version = 1
        while True:
            test_path = os.path.join(base_dir, f"{name_without_version}-v{version}{ext}")
            if not os.path.exists(test_path):
                break
            version += 1
            
        return version
    
    def create_versioned_path(self, base_path, version):
        """Create a path with version number."""
        base_dir = os.path.dirname(base_path)
        base_name = os.path.basename(base_path)
        name_part, ext = os.path.splitext(base_name)
        name_without_version = re.sub(r'-v\d+$', '', name_part)
        
        return os.path.join(base_dir, f"{name_without_version}-v{version}{ext}")
    
    def get_previous_version_path(self, base_path):
        """Get the path to the previous version."""
        if self.version <= 1:
            return None
            
        base_dir = os.path.dirname(base_path)
        base_name = os.path.basename(base_path)
        name_part, ext = os.path.splitext(base_name)
        name_without_version = re.sub(r'-v\d+$', '', name_part)
        
        return os.path.join(base_dir, f"{name_without_version}-v{self.version-1}{ext}")
    
    def evolve_colors(self, hex_color):
        """Evolve a color using HSL transformations based on version number."""
        # Convert hex to HSL
        r, g, b = int(hex_color[1:3], 16) / 255, int(hex_color[3:5], 16) / 255, int(hex_color[5:7], 16) / 255
        h, l, s = colorsys.rgb_to_hls(r, g, b)
        
        # Apply version-specific transformations
        h = (h + (self.hue_shift / 360) * self.version) % 1.0
        
        # Alternate between increasing and decreasing saturation
        if self.version % 2 == 0:
            s = min(1.0, s * (1 + self.saturation_mod))
        else:
            s = max(0.2, s * (1 - self.saturation_mod))
            
        # Apply prime-influenced lightness adjustment
        prime_factor = self.prime_numbers[self.version % len(self.prime_numbers)] / 10
        l = max(0.2, min(0.8, l + (self.lightness_mod * prime_factor * (1 if self.version % 2 == 0 else -1))))
        
        # Convert back to RGB and then hex
        r, g, b = colorsys.hls_to_rgb(h, l, s)
        hex_result = f"#{int(r*255):02x}{int(g*255):02x}{int(b*255):02x}"
        return hex_result
    
    def evolve_background(self, bg_color="#0e1015"):
        """Evolve the background color while keeping it dark for contrast."""
        if not bg_color.startswith("#"):
            bg_color = "#0e1015"  # Default background
            
        new_bg = self.evolve_colors(bg_color)
        
        # Keep it dark for contrast
        r, g, b = int(new_bg[1:3], 16), int(new_bg[3:5], 16), int(new_bg[5:7], 16)
        avg = (r + g + b) / 3
        if avg > 60:  # If it's getting too bright
            darkening = 0.6  # Darken it
            r, g, b = int(r * darkening), int(g * darkening), int(b * darkening)
            new_bg = f"#{r:02x}{g:02x}{b:02x}"
        
        return new_bg
    
    def create_evolved_gradients(self):
        """Create evolved gradient definitions based on the original colors."""
        # Original neon colors from the SVG
        base_colors = [
            {"id": "neonCyan", "start": "#00ffd9", "end": "#00b3a1"},
            {"id": "neonMagenta", "start": "#ff00ff", "end": "#b300b3"},
            {"id": "neonAmber", "start": "#ffbf00", "end": "#cc7a00"}
        ]
        
        gradients = []
        for color in base_colors:
            # Create evolved versions of the gradients
            grad_id = f"{color['id']}_{self.version}"
            start_color = self.evolve_colors(color['start'])
            end_color = self.evolve_colors(color['end'])
            
            gradient = f'''
    <linearGradient id="{grad_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{start_color}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="{end_color}" stop-opacity="0.9" />
    </linearGradient>'''
            gradients.append(gradient)
            
        return gradients
    
    def create_filters(self):
        """Create filter effects that evolve with version."""
        # Glow filter that intensifies with each version
        glow_strength = 3 + (self.version * 0.5)
        
        filters = f'''
    <filter id="glow_{self.version}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="{glow_strength}" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    
    <filter id="softGlow_{self.version}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="{glow_strength/2}" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>'''
        
        return filters
    
    def create_svg_header(self):
        """Create the SVG header with all definitions."""
        # Create evolved gradients
        gradients = self.create_evolved_gradients()
        
        # Create evolved filters
        filters = self.create_filters()
        
        # Create grid pattern
        grid_pattern = f'''
    <pattern id="grid_pattern_{self.version}" patternUnits="userSpaceOnUse" 
             width="{self.width/self.grid_size}" height="{self.height/self.grid_size}">
      <rect width="{self.width/self.grid_size}" height="{self.height/self.grid_size}" 
            fill="none" stroke="#333333" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.3"/>
    </pattern>'''
        
        # Create SVG header
        header = f'''<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 {self.width} {self.height}" width="{self.width}" height="{self.height}">
  
  <!-- EvolvedSVG Version {self.version} -->
  
  <!-- Definitions -->
  <defs>
    <!-- Evolved Gradients -->
    {"".join(gradients)}
    
    <!-- Filters -->
    {filters}
    
    <!-- Grid Pattern -->
    {grid_pattern}
'''
        
        # For version > 1, include previous version as a symbol
        if self.version > 1 and self.previous_path:
            header += f'''
    <!-- Previous version as reusable component -->
    <symbol id="previous_version" viewBox="0 0 800 800">
      <image href="{self.previous_path}" width="800" height="800" />
    </symbol>
'''
        
        header += '''
  </defs>
'''
        return header
    
    def create_cell_transformations(self, row, col, cell_width, cell_height):
        """Create transformation attributes for a grid cell."""
        # Calculate cell center
        cx = col * cell_width + (cell_width / 2)
        cy = row * cell_height + (cell_height / 2)
        
        # Base scale - smaller for higher versions to avoid overflow
        scale_base = 1.0 / (self.grid_size + (0.2 * (self.version - 1)))
        
        # Prime perturbation for subtle variation
        prime_factor = 1 + (((row * col) % 7) / 50)
        scale = scale_base * prime_factor
        
        # Rotation based on position and version
        rotation = 0
        if (row + col) % 2 == 0:
            rotation_factor = (row * 7 + col * 11) % 4
            rotation = rotation_factor * 90  # 90-degree rotations
        
        # Create transform string
        transform = f"translate({cx}, {cy}) "
        transform += f"scale({scale}) "
        if rotation != 0:
            transform += f"rotate({rotation}) "
        
        return transform, (cx, cy)
    
    def should_include_cell(self, row, col):
        """Determine whether to include a cell based on mathematical patterns."""
        # Create quasi-periodic pattern for cell inclusion
        include_patterns = [
            (row + col) % 2 == 0,                    # Checkerboard pattern
            (row * col) % 3 == 1,                    # Prime product pattern
            (row + col) % 5 == 2,                    # Sum pattern
            row == col or row + col == self.grid_size - 1  # Diagonals
        ]
        
        # Version-specific patterns
        if self.version % 2 == 0:
            include_patterns.append(row == self.grid_size // 2 or col == self.grid_size // 2)  # Cross pattern
        
        if self.version % 3 == 0:
            include_patterns.append((row * col) % 7 == 4)  # Another pattern for v3, v6, etc.
        
        # Include if any pattern matches
        return any(include_patterns)
    
    def create_connections(self, cell_centers):
        """Create connection paths between cells."""
        if len(cell_centers) <= 1:
            return ""
            
        connections = []
        gradient_ids = [f"neonCyan_{self.version}", f"neonMagenta_{self.version}", f"neonAmber_{self.version}"]
        
        # For each cell, connect to some others
        for i in range(len(cell_centers)):
            # Limit connections per cell for cleaner appearance
            connection_count = 0
            max_connections = min(3, len(cell_centers) - 1)
            
            for j in range(len(cell_centers)):
                if i == j:
                    continue
                    
                # Only connect some cells based on mathematical relationships
                should_connect = (
                    (i + j) % 3 == 0 or       # Connect based on sum
                    (i * j) % 5 == 1 or       # Connect based on product
                    abs(i - j) in [2, 3, 5, 7]  # Connect based on prime distances
                )
                
                if should_connect and connection_count < max_connections:
                    x1, y1 = cell_centers[i]
                    x2, y2 = cell_centers[j]
                    
                    # Determine stroke color using evolved gradients
                    stroke = f"url(#{gradient_ids[connection_count % 3]})"
                    
                    # Create path with curve
                    # Control point creates organic curve
                    control_factor = ((i * j) % 7 - 3) / 10  # Small factor for subtle curves
                    mid_x = (x1 + x2) / 2
                    mid_y = (y1 + y2) / 2
                    
                    # Perpendicular offset for control point
                    dx = x2 - x1
                    dy = y2 - y1
                    length = math.sqrt(dx*dx + dy*dy)
                    if length > 0:
                        norm_x = -dy / length
                        norm_y = dx / length
                        
                        cx = mid_x + norm_x * length * control_factor
                        cy = mid_y + norm_y * length * control_factor
                        
                        # Create curved path
                        path = f'''    <path d="M {x1},{y1} Q {cx},{cy} {x2},{y2}" 
          fill="none" 
          stroke="{stroke}" 
          stroke-width="{0.5 + (self.version * 0.2)}" 
          stroke-dasharray="{1 + self.version},{2 + self.version}" />
'''
                        connections.append(path)
                        connection_count += 1
        
        return "".join(connections)
    
    def create_union_overlays(self, cell_centers):
        """Create overlapping shapes that connect cells to create union effects."""
        if len(cell_centers) <= 2:
            return ""
            
        union_elements = []
        gradient_ids = [f"neonCyan_{self.version}", f"neonMagenta_{self.version}", f"neonAmber_{self.version}"]
        
        # Group cells into small clusters for union effects
        cell_clusters = []
        
        # Simple clustering algorithm - pair adjacent cells
        used_cells = set()
        
        # Version-specific clustering patterns
        if self.version % 2 == 0:
            # For even versions, create triangular clusters
            for i in range(len(cell_centers)):
                if i in used_cells:
                    continue
                    
                cluster = [i]
                used_cells.add(i)
                
                # Find two close cells to form a triangle
                distances = []
                for j in range(len(cell_centers)):
                    if j != i and j not in used_cells:
                        x1, y1 = cell_centers[i]
                        x2, y2 = cell_centers[j]
                        dist = math.sqrt((x2-x1)**2 + (y2-y1)**2)
                        distances.append((j, dist))
                
                # Sort by distance and take closest two
                distances.sort(key=lambda x: x[1])
                for j, _ in distances[:min(2, len(distances))]:
                    cluster.append(j)
                    used_cells.add(j)
                
                if len(cluster) > 1:  # Need at least 2 points
                    cell_clusters.append(cluster)
        else:
            # For odd versions, create line segments
            for i in range(len(cell_centers)):
                if i in used_cells:
                    continue
                    
                # Find closest unused cell
                closest = None
                min_dist = float('inf')
                
                for j in range(len(cell_centers)):
                    if j != i and j not in used_cells:
                        x1, y1 = cell_centers[i]
                        x2, y2 = cell_centers[j]
                        dist = math.sqrt((x2-x1)**2 + (y2-y1)**2)
                        if dist < min_dist:
                            min_dist = dist
                            closest = j
                
                if closest is not None:
                    cell_clusters.append([i, closest])
                    used_cells.add(i)
                    used_cells.add(closest)
        
        # Create union elements for each cluster
        for i, cluster in enumerate(cell_clusters):
            if len(cluster) < 2:
                continue
                
            # Determine appearance
            stroke = f"url(#{gradient_ids[i % 3]})"
            
            # For lines (2 cells)
            if len(cluster) == 2:
                x1, y1 = cell_centers[cluster[0]]
                x2, y2 = cell_centers[cluster[1]]
                
                # Create wide path for union effect
                path = f'''    <path d="M {x1},{y1} L {x2},{y2}" 
          fill="none" 
          stroke="{stroke}" 
          stroke-width="{5 + (self.version * 2)}" 
          stroke-opacity="0.2"
          filter="url(#softGlow_{self.version})" />
'''
                union_elements.append(path)
            
            # For triangles (3 cells)
            elif len(cluster) >= 3:
                points = " ".join([f"{cell_centers[cell_idx][0]},{cell_centers[cell_idx][1]}" for cell_idx in cluster[:3]])
                polygon = f'''    <polygon points="{points}" 
          fill="{stroke}" 
          fill-opacity="0.15" 
          stroke="{stroke}" 
          stroke-width="{1 + (self.version * 0.5)}" 
          stroke-opacity="0.3"
          filter="url(#softGlow_{self.version})" />
'''
                union_elements.append(polygon)
        
        return "".join(union_elements)
    
    def create_decorative_elements(self):
        """Create decorative elements that evolve with each version."""
        gradient_ids = [f"neonCyan_{self.version}", f"neonMagenta_{self.version}", f"neonAmber_{self.version}"]
        
        # Corner elements that grow with each version
        corner_radius = 15 + (self.version * 5)
        corners = [(corner_radius, corner_radius), 
                  (self.width - corner_radius, corner_radius),
                  (self.width - corner_radius, self.height - corner_radius),
                  (corner_radius, self.height - corner_radius)]
        
        elements = []
        
        # Add corner circles
        for i, (cx, cy) in enumerate(corners):
            grad_id = gradient_ids[i % 3]
            
            elements.append(f'''    <circle cx="{cx}" cy="{cy}" r="{corner_radius}" 
          fill="none" 
          stroke="url(#{grad_id})" 
          stroke-width="{1 + (self.version * 0.3)}" 
          filter="url(#glow_{self.version})" />
''')
        
        # Add version indicator
        elements.append(f'''    <!-- Version indicator -->
    <text x="{self.width / 2}" y="{self.height - 20}" 
          font-family="sans-serif" 
          font-size="{10 + self.version}" 
          fill="url(#{gradient_ids[0]})"
          text-anchor="middle"
          filter="url(#glow_{self.version})">
      Version {self.version}
    </text>
''')
        
        return "".join(elements)
    
    def evolve_svg(self):
        """Create a new SVG version that evolves from the previous one."""
        print(f"Creating version {self.version} at {self.output_path}")
        
        try:
            # If this is the first version, copy the original
            if self.version == 1:
                with open("unexpected-geometry.svg", "r") as src, open(self.output_path, "w") as dst:
                    dst.write(src.read())
                return self.output_path
            
            # Create SVG header with definitions
            svg = self.create_svg_header()
            
            # Add background
            svg += f'''  <!-- Background -->
  <rect width="{self.width}" height="{self.height}" fill="{self.evolve_background('#0e1015')}" />
  
  <!-- Grid reference (subtle) -->
  <rect width="{self.width}" height="{self.height}" fill="url(#grid_pattern_{self.version})" opacity="0.2" />
  
'''
            
            # Create grid structure
            svg += f'''  <!-- Grid of Previous Version -->
  <g id="evolution_grid_{self.version}">
'''
            
            cell_width = self.width / self.grid_size
            cell_height = self.height / self.grid_size
            
            # Track cell centers for connections
            cell_centers = []
            included_cells = []
            
            # Create cells
            for i in range(self.grid_size * self.grid_size):
                row = i // self.grid_size
                col = i % self.grid_size
                
                # Determine whether to include this cell
                if self.should_include_cell(row, col):
                    # Create transformation for this cell
                    transform, center = self.create_cell_transformations(row, col, cell_width, cell_height)
                    
                    # Track cell information
                    cell_centers.append(center)
                    included_cells.append(i)
                    
                    # Add cell with previous version
                    svg += f'''    <!-- Cell at row {row}, col {col} -->
    <g transform="{transform}">
      <use xlink:href="#previous_version" x="-400" y="-400" />
    </g>
'''
            
            # Close grid group
            svg += "  </g>\n\n"
            
            # Add union overlay elements
            svg += f'''  <!-- Union Elements -->
  <g id="union_elements_{self.version}">
{self.create_union_overlays(cell_centers)}  </g>

'''
            
            # Add connecting elements
            svg += f'''  <!-- Connecting Elements -->
  <g id="connections_{self.version}" filter="url(#glow_{self.version})" opacity="0.7">
{self.create_connections(cell_centers)}  </g>

'''
            
            # Add decorative elements
            svg += f'''  <!-- Decorative Elements -->
  <g id="decorative_elements_{self.version}">
{self.create_decorative_elements()}  </g>
'''
            
            # Close SVG
            svg += "</svg>"
            
            # Write the file
            with open(self.output_path, "w") as f:
                f.write(svg)
            
            return self.output_path
            
        except Exception as e:
            print(f"Error evolving SVG: {e}")
            import traceback
            traceback.print_exc()
            return None

def main():
    """Generate the next version in the evolutionary SVG sequence."""
    print("Starting EvolvedSVG generation...")
    evolved_svg = EvolvedSVG()
    
    # Print information about the generation
    print(f"Creating artwork version v{evolved_svg.version}")
    
    # Generate the new version
    output_path = evolved_svg.evolve_svg()
    
    if output_path:
        print(f"SVG generation complete! Artwork saved to '{output_path}'")
        print(f"Run the script again to continue the evolutionary sequence with v{evolved_svg.version + 1}")
    else:
        print("SVG generation failed!")

if __name__ == "__main__":
    main()
