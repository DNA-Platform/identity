"""
EvolvedSVG Prototype: Cross-Scale Evolutionary Art

This simplified prototype creates evolutionary art that builds upon previous versions.
Each new version uses the entire previous SVG as cells in a grid, with transformations
that maintain coherence across scales.

Core concepts:
1. Each version becomes cells in a grid for the next version
2. Colors evolve across versions following color theory principles 
3. Geometric coherence is maintained both within and across versions
4. Quasi-periodic patterns create organic variation across the grid
"""

import os
import re
import math
import random
import colorsys
from xml.dom import minidom
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
    
    def transform_gradient(self, gradient_element):
        """Transform a gradient definition with evolved colors."""
        for stop in gradient_element.findall(".//{http://www.w3.org/2000/svg}stop"):
            if stop.get("stop-color") and not stop.get("stop-color").startswith("url("):
                new_color = self.evolve_colors(stop.get("stop-color"))
                stop.set("stop-color", new_color)
        return gradient_element
    
    def evolve_background(self, root):
        """Evolve the background color."""
        # Find background rect element
        for rect in root.findall(".//{http://www.w3.org/2000/svg}rect"):
            if rect.get("width") == "800" and rect.get("height") == "800" and rect.get("fill"):
                bg_color = rect.get("fill")
                if bg_color.startswith("#"):
                    # Evolve background color, but more subtly to maintain visual coherence
                    new_bg = self.evolve_colors(bg_color)
                    # Keep it dark for contrast, but allow some evolution
                    r, g, b = int(new_bg[1:3], 16), int(new_bg[3:5], 16), int(new_bg[5:7], 16)
                    avg = (r + g + b) / 3
                    if avg > 60:  # If it's getting too bright
                        darkening = 0.6  # Darken it
                        r, g, b = int(r * darkening), int(g * darkening), int(b * darkening)
                        new_bg = f"#{r:02x}{g:02x}{b:02x}"
                    rect.set("fill", new_bg)
    
    def create_grid_cell(self, cell_index, cell_x, cell_y, cell_width, cell_height):
        """Create a transformed cell containing the previous SVG."""
        if not self.previous_path or not os.path.exists(self.previous_path):
            return None
            
        # Calculate row and column
        row = cell_index // self.grid_size
        col = cell_index % self.grid_size
        
        # Create a group element for this cell
        cell_group = ET.Element("{http://www.w3.org/2000/svg}g")
        
        # Apply cell-specific transformations based on position in grid
        # Use prime numbers and golden ratio for quasi-periodic variations
        
        # Scale factor with slight variations per cell
        scale_factor = 1.0 / self.grid_size
        prime_perturbation = 1 + (((row * col) % 7) / 50)
        scale_factor *= prime_perturbation
        
        # Rotation with quasi-periodic variation
        rotation = ((row + col) * 13) % 360 if (row * col) % 3 == 0 else 0
        
        # Translation to position in grid
        translate_x = cell_x + (cell_width / 2)
        translate_y = cell_y + (cell_height / 2)
        
        # Set transformation attributes
        transform = f"translate({translate_x},{translate_y}) "
        transform += f"scale({scale_factor}) "
        if rotation != 0:
            transform += f"rotate({rotation}) "
        
        cell_group.set("transform", transform)
        
        # Add a reference to the previous SVG version as content for this cell
        use_element = ET.Element("{http://www.w3.org/2000/svg}use")
        use_element.set("{http://www.w3.org/1999/xlink}href", f"#previous_version")
        cell_group.append(use_element)
        
        return cell_group
    
    def add_connecting_elements(self, root, cells):
        """Add connecting elements between cells for visual coherence."""
        xmlns = "{http://www.w3.org/2000/svg}"
        
        # Create a group for connections
        connections_group = ET.Element(f"{xmlns}g")
        connections_group.set("id", "connections")
        
        # Determine connection colors based on the evolved palette
        colors = []
        for gradient in root.findall(f".//{xmlns}linearGradient"):
            for stop in gradient.findall(f"{xmlns}stop"):
                if stop.get("offset") == "0%" and stop.get("stop-color"):
                    colors.append(stop.get("stop-color"))
        
        if not colors:
            colors = ["#00ffd9", "#ff00ff", "#ffbf00"]  # Default if no colors found
        
        # Connect cells based on prime and Fibonacci relationships
        cell_centers = []
        cell_width = self.width / self.grid_size
        cell_height = self.height / self.grid_size
        
        for i in range(self.grid_size * self.grid_size):
            row = i // self.grid_size
            col = i % self.grid_size
            cx = col * cell_width + cell_width / 2
            cy = row * cell_height + cell_height / 2
            cell_centers.append((cx, cy))
        
        # Create connecting paths
        for i in range(len(cell_centers)):
            for j in range(i+1, len(cell_centers)):
                # Only connect some cells based on mathematical relationships
                if (i*j) % 5 == 0 or (i+j) % 7 == 3:  # Quasi-periodic patterns
                    x1, y1 = cell_centers[i]
                    x2, y2 = cell_centers[j]
                    
                    # Use curved paths for interesting connections
                    control_x = (x1 + x2) / 2 + random.uniform(-30, 30) * self.version
                    control_y = (y1 + y2) / 2 + random.uniform(-30, 30) * self.version
                    
                    path = ET.Element(f"{xmlns}path")
                    path.set("d", f"M {x1},{y1} Q {control_x},{control_y} {x2},{y2}")
                    path.set("fill", "none")
                    path.set("stroke", random.choice(colors))
                    path.set("stroke-width", "0.5")
                    path.set("stroke-opacity", "0.6")
                    path.set("stroke-dasharray", "1,3")
                    
                    connections_group.append(path)
        
        root.append(connections_group)
    
    def evolve_svg(self):
        """Create a new SVG version that evolves from the previous one."""
        # If this is the first version, just copy the original
        if self.version == 1 and self.previous_path is None:
            print(f"Creating first version at {self.output_path}")
            # Just copy the original file
            with open("unexpected-geometry.svg", "r") as src, open(self.output_path, "w") as dst:
                dst.write(src.read())
            return self.output_path
        
        # For subsequent versions, we'll evolve from the previous version
        print(f"Evolving from {self.previous_path} to create {self.output_path}")
        
        try:
            # Parse the previous SVG
            tree = ET.parse(self.previous_path)
            root = tree.getroot()
            
            # Create a new SVG document
            xmlns = "{http://www.w3.org/2000/svg}"
            xlink = "{http://www.w3.org/1999/xlink}"
            
            ET.register_namespace('', "http://www.w3.org/2000/svg")
            ET.register_namespace('xlink', "http://www.w3.org/1999/xlink")
            
            new_svg = ET.Element(f"{xmlns}svg")
            new_svg.set("xmlns", "http://www.w3.org/2000/svg")
            new_svg.set("xmlns:xlink", "http://www.w3.org/1999/xlink")
            new_svg.set("viewBox", "0 0 800 800")
            new_svg.set("width", "800")
            new_svg.set("height", "800")
            
            # Add comment about version evolution
            comment = ET.Comment(f" EvolvedSVG Version {self.version} - Evolved from version {self.version-1} ")
            new_svg.append(comment)
            
            # Extract and evolve the defs section (gradients, patterns, filters)
            defs = ET.Element(f"{xmlns}defs")
            
            # Copy and transform all definitions from previous version
            for def_element in root.findall(f".//{xmlns}defs/*"):
                # Deep copy the element
                new_def = ET.fromstring(ET.tostring(def_element))
                
                # Evolve gradients to new color palette
                if new_def.tag == f"{xmlns}linearGradient" or new_def.tag == f"{xmlns}radialGradient":
                    new_def = self.transform_gradient(new_def)
                
                # Add the transformed definition
                defs.append(new_def)
            
            # Also include the entire previous SVG as a reusable component
            symbol = ET.Element(f"{xmlns}symbol")
            symbol.set("id", "previous_version")
            symbol.set("viewBox", "0 0 800 800")
            
            # Copy all top-level elements from previous SVG into the symbol
            for child in root:
                if child.tag != f"{xmlns}defs":  # Skip defs as we've already processed them
                    symbol.append(ET.fromstring(ET.tostring(child)))
            
            defs.append(symbol)
            new_svg.append(defs)
            
            # Create a background for the new SVG
            bg_rect = ET.Element(f"{xmlns}rect")
            bg_rect.set("width", "800")
            bg_rect.set("height", "800")
            
            # Evolve background color
            if self.version > 1:
                # Find original background color
                for rect in root.findall(f".//{xmlns}rect"):
                    if rect.get("width") == "800" and rect.get("height") == "800" and rect.get("fill"):
                        bg_color = rect.get("fill")
                        if bg_color.startswith("#"):
                            # Evolve it for new version
                            new_bg = self.evolve_colors(bg_color)
                            # Keep it dark for contrast
                            r, g, b = int(new_bg[1:3], 16), int(new_bg[3:5], 16), int(new_bg[5:7], 16)
                            avg = (r + g + b) / 3
                            if avg > 60:  # If it's getting too bright
                                darkening = 0.6  # Darken it
                                r, g, b = int(r * darkening), int(g * darkening), int(b * darkening)
                                new_bg = f"#{r:02x}{g:02x}{b:02x}"
                            bg_rect.set("fill", new_bg)
                            break
            
            # Default if no background color found
            if "fill" not in bg_rect.attrib:
                bg_rect.set("fill", "#0e1015")
                
            new_svg.append(bg_rect)
            
            # Create grid cells containing previous version
            cell_width = self.width / self.grid_size
            cell_height = self.height / self.grid_size
            
            # Group for the grid
            grid_group = ET.Element(f"{xmlns}g")
            grid_group.set("id", "evolution_grid")
            
            # Create each cell with transformations
            for i in range(self.grid_size * self.grid_size):
                row = i // self.grid_size
                col = i % self.grid_size
                cell_x = col * cell_width
                cell_y = row * cell_height
                
                # Create cell with quasi-periodic variations
                # Only include cells based on prime and Fibonacci patterns for interesting visual rhythm
                if (row + col) % 2 == 0 or (row * col) % 3 == 1 or (row + col) % 5 == 2:
                    cell = self.create_grid_cell(i, cell_x, cell_y, cell_width, cell_height)
                    if cell is not None:
                        grid_group.append(cell)
            
            new_svg.append(grid_group)
            
            # Add connecting elements to create visual coherence across the grid
            self.add_connecting_elements(new_svg, self.grid_size * self.grid_size)
            
            # Write the new SVG file
            tree = ET.ElementTree(new_svg)
            ET.indent(tree, space="  ")  # Pretty print
            tree.write(self.output_path, encoding="utf-8", xml_declaration=True)
            
            return self.output_path
            
        except Exception as e:
            print(f"Error evolving SVG: {e}")
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
