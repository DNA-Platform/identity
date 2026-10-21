"""
EvolvedSVG: Fractal Evolution Across Scales

This implementation creates true fractal evolution where:
1. The entire previous SVG becomes a reusable component
2. The new version places this component in cells of a grid
3. Each cell contains a transformed version of the entire previous artwork
4. The overall composition maintains coherence while evolving
"""

import os
import re
import math
import random
import colorsys
import xml.etree.ElementTree as ET

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
    
    def evolve_background(self, bg_color):
        """Evolve the background color while keeping it dark enough for contrast."""
        if not bg_color.startswith("#"):
            return "#0e1015"  # Default dark background
            
        new_bg = self.evolve_colors(bg_color)
        
        # Keep it dark for contrast
        r, g, b = int(new_bg[1:3], 16), int(new_bg[3:5], 16), int(new_bg[5:7], 16)
        avg = (r + g + b) / 3
        if avg > 60:  # If it's getting too bright
            darkening = 0.6  # Darken it
            r, g, b = int(r * darkening), int(g * darkening), int(b * darkening)
            new_bg = f"#{r:02x}{g:02x}{b:02x}"
        
        return new_bg
    
    def evolve_svg(self):
        """Create a new SVG version that evolves from the previous one."""
        # If this is the first version, just copy the original
        if self.version == 1:
            print(f"Creating first version at {self.output_path}")
            # Just copy the original file
            with open("unexpected-geometry.svg", "r") as src, open(self.output_path, "w") as dst:
                dst.write(src.read())
            return self.output_path
        
        # For subsequent versions, we'll evolve from the previous version
        print(f"Evolving from {self.previous_path} to create version {self.version}")
        
        try:
            # Parse the previous SVG as string to preserve all content exactly
            with open(self.previous_path, 'r') as f:
                prev_svg = f.read()
            
            # Create new SVG document
            svg_template = f'''<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {self.width} {self.height}" width="{self.width}" height="{self.height}">
  
  <!-- EvolvedSVG Version {self.version} - Evolved from version {self.version-1} -->
  
  <!-- Definitions including previous version -->
  <defs>
    <!-- Previous version as reusable component -->
    <symbol id="previous_version" viewBox="0 0 800 800">
      {prev_svg}
    </symbol>
    
    <!-- Grid Pattern -->
    <pattern id="grid_pattern_{self.version}" patternUnits="userSpaceOnUse" width="{self.width / self.grid_size}" height="{self.height / self.grid_size}">
      <rect width="{self.width / self.grid_size}" height="{self.height / self.grid_size}" fill="none" stroke="#333333" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.3"/>
    </pattern>
    
    <!-- Evolved Gradients -->
    <linearGradient id="evolvedCyan_{self.version}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{self.evolve_colors('#00ffd9')}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="{self.evolve_colors('#00b3a1')}" stop-opacity="0.9" />
    </linearGradient>
    
    <linearGradient id="evolvedMagenta_{self.version}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{self.evolve_colors('#ff00ff')}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="{self.evolve_colors('#b300b3')}" stop-opacity="0.9" />
    </linearGradient>
    
    <linearGradient id="evolvedAmber_{self.version}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{self.evolve_colors('#ffbf00')}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="{self.evolve_colors('#cc7a00')}" stop-opacity="0.9" />
    </linearGradient>
    
    <!-- Evolved Filter -->
    <filter id="glow_{self.version}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="{3 + self.version}" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="{self.width}" height="{self.height}" fill="{self.evolve_background('#0e1015')}" />
  
  <!-- Grid reference (subtle) -->
  <rect width="{self.width}" height="{self.height}" fill="url(#grid_pattern_{self.version})" opacity="0.2" />
  
  <!-- Core Grid Structure -->
  <g id="evolution_grid_{self.version}">
'''
            
            # Add grid cells with transformed previous versions
            cell_width = self.width / self.grid_size
            cell_height = self.height / self.grid_size
            
            # Track cell centers for connecting elements
            cell_centers = []
            
            # Generate each cell 
            for i in range(self.grid_size * self.grid_size):
                row = i // self.grid_size
                col = i % self.grid_size
                
                # Calculate cell position
                cell_x = col * cell_width
                cell_y = row * cell_height
                
                # Determine quasi-periodic pattern for cell inclusion
                # Use mathematical relationships to create interesting patterns
                include_cell = (
                    (row + col) % 2 == 0 or  # Checkboard pattern
                    ((row * col) % 3 == 1) or  # Prime pattern
                    ((row + col) % 5 == 2) or  # Another pattern
                    (self.version % 2 == 0 and (row == col or row + col == self.grid_size - 1))  # Diagonal pattern in even versions
                )
                
                if include_cell:
                    # Calculate cell center for connections later
                    cx = cell_x + cell_width / 2
                    cy = cell_y + cell_height / 2
                    cell_centers.append((cx, cy))
                    
                    # Create scale variations using prime factors
                    scale_base = 1.0 / self.grid_size
                    prime_factor = 1 + (((row * col) % 7) / 30)  # Subtle variation
                    scale = scale_base * prime_factor
                    
                    # Create rotation based on position
                    rotation = 0
                    if (row + col) % 2 == 0 and self.version > 2:  # Add rotation in later versions
                        rotation = (((row * 13) + (col * 17)) % 4) * 90  # 90-degree rotations
                    
                    # Create quasi-symmetric reflection
                    flip_x = 1
                    flip_y = 1
                    if self.version > 3 and (row * col) % 5 == 2:  # Add flipping in later versions
                        if row % 2 == 0:
                            flip_x = -1
                        if col % 2 == 0:
                            flip_y = -1
                    
                    # Create final transform for the cell
                    transform = f"translate({cx}, {cy}) "
                    transform += f"scale({scale * flip_x}, {scale * flip_y}) "
                    if rotation != 0:
                        transform += f"rotate({rotation}) "
                    
                    # Add the cell with the previous version
                    svg_template += f'''
    <!-- Cell at row {row}, col {col} -->
    <g transform="{transform}">
      <use xlink:href="#previous_version" x="-400" y="-400" />
    </g>
'''
            
            # Close the grid group
            svg_template += "  </g>\n\n"
            
            # Add connecting elements between cells
            svg_template += "  <!-- Inter-cell connections -->\n"
            svg_template += '  <g id="connections" filter="url(#glow_' + str(self.version) + ')" opacity="0.7">\n'
            
            # Create connections between cells
            if len(cell_centers) > 1:
                for i in range(len(cell_centers)):
                    # Only connect some cells for interesting patterns
                    connection_count = 0
                    for j in range(len(cell_centers)):
                        if i != j:
                            # Use mathematical relationships to determine connections
                            should_connect = (
                                (i + j) % 3 == 0 or  # Connect based on sum
                                (i * j) % 5 == 1 or   # Connect based on product
                                (abs(i - j) in self.prime_numbers[:4])  # Connect based on prime distance
                            )
                            
                            if should_connect and connection_count < 2:  # Limit connections per cell
                                # Get cell centers
                                x1, y1 = cell_centers[i]
                                x2, y2 = cell_centers[j]
                                
                                # Determine connection color using evolved gradients
                                gradient_ids = [f"evolvedCyan_{self.version}", 
                                              f"evolvedMagenta_{self.version}", 
                                              f"evolvedAmber_{self.version}"]
                                stroke = f"url(#{gradient_ids[connection_count % 3]})"
                                
                                # Create interesting curved paths
                                # Control points create organic curves
                                cx = (x1 + x2) / 2 + ((i * j) % 7 - 3) * 20
                                cy = (y1 + y2) / 2 + ((i + j) % 5 - 2) * 20
                                
                                # Add the connecting path
                                svg_template += f'''    <path d="M {x1},{y1} Q {cx},{cy} {x2},{y2}" 
          fill="none" 
          stroke="{stroke}" 
          stroke-width="{0.5 + (self.version * 0.2)}" 
          stroke-dasharray="{1 + self.version},{2 + self.version}" />
'''
                                connection_count += 1
            
            # Close connections group
            svg_template += "  </g>\n\n"
            
            # Add decorative elements that evolve with version 
            svg_template += "  <!-- Version-specific decorative elements -->\n"
            svg_template += f'  <g id="decorative_elements_{self.version}">\n'
            
            # Add circles at the corners that grow with each version
            corner_radius = 15 + (self.version * 5)
            corners = [(corner_radius, corner_radius), 
                      (self.width - corner_radius, corner_radius),
                      (self.width - corner_radius, self.height - corner_radius),
                      (corner_radius, self.height - corner_radius)]
            
            for i, (cx, cy) in enumerate(corners):
                gradient_id = [f"evolvedCyan_{self.version}", 
                              f"evolvedMagenta_{self.version}", 
                              f"evolvedAmber_{self.version}"][i % 3]
                
                svg_template += f'''    <circle cx="{cx}" cy="{cy}" r="{corner_radius}" 
          fill="none" 
          stroke="url(#{gradient_id})" 
          stroke-width="{1 + (self.version * 0.3)}" 
          filter="url(#glow_{self.version})" />
'''
            
            # Add version number indicator
            svg_template += f'''    <!-- Version indicator -->
    <text x="{self.width / 2}" y="{self.height - 20}" 
          font-family="sans-serif" 
          font-size="{10 + self.version}" 
          fill="url(#evolvedCyan_{self.version})"
          text-anchor="middle"
          filter="url(#glow_{self.version})">
      Version {self.version}
    </text>
'''
            
            # Close decorative group
            svg_template += "  </g>\n"
            
            # Finish SVG
            svg_template += "</svg>"
            
            # Write the file
            with open(self.output_path, 'w') as f:
                f.write(svg_template)
            
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
