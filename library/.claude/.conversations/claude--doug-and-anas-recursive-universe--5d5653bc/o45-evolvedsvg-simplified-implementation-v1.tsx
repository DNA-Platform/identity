import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ EvolvedSVG: Simplified Implementation v1 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}"""
EvolvedSVG: A Cross-Generational Geometric Art System

This system creates evolving geometric artwork that develops across multiple generations.
Each time the program runs, it creates the next version in an evolutionary sequence,
building upon and transforming elements from previous versions.

Contributors:
- Nova: System architecture and integration
- Forma: Geometric transformations and symmetry
- Lumina: Color systems and visual harmony
- Cadence: Recursion patterns and rhythmic balance
"""

import svgwrite
import math
import os
import re
import datetime
import random
from xml.dom import minidom

class EvolvedSVG:
    """Creates generative geometric art that evolves across multiple generations."""
    
    def __init__(self, width, height, iterations, base_path):
        """Initialize the EvolvedSVG system."""
        # Core parameters
        self.width = width
        self.height = height
        self.iterations = iterations
        
        # Determine version and set output path
        self.version = self.determine_version(base_path)
        self.output_path = self.create_versioned_path(base_path, self.version)
        self.previous_version_path = self.get_previous_version_path() if self.version > 1 else None
        
        # Initialize SVG drawing
        self.dwg = svgwrite.Drawing(self.output_path, size=(width, height))
        
        # Initialize core design elements with version-aware evolution
        self.golden_ratio = 1.618
        self.base_shapes = self.initialize_shapes()
        self.color_palette = self.initialize_color_palette()
        self.symmetry_vector = self.initialize_symmetry_vector()
        
        # Cache for computed elements
        self.shape_cache = {}
        
    def determine_version(self, base_path):
        """Find the next version number in sequence."""
        # Extract path components
        base_dir = os.path.dirname(base_path)
        base_name = os.path.basename(base_path)
        name_part, ext = os.path.splitext(base_name)
        name_without_version = re.sub(r'-v\\d+$', '', name_part)
        
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
        name_without_version = re.sub(r'-v\\d+$', '', name_part)
        
        return os.path.join(base_dir, f"{name_without_version}-v{version}{ext}")
    
    def get_previous_version_path(self):
        """Get the path to the previous version."""
        if self.version <= 1:
            return None
            
        prev_version = self.version - 1
        return re.sub(r'-v\\d+', f'-v{prev_version}', self.output_path)
    
    def initialize_shapes(self):
        """Initialize base geometric shapes, evolving if from previous version."""
        # Try to extract shapes from previous version if available
        if self.previous_version_path and os.path.exists(self.previous_version_path):
            try:
                # This would extract shapes from previous SVG in a full implementation
                # For simplicity, we'll use basic shapes but modify them based on version
                pass
            except Exception as e:
                print(f"Note: Could not extract shapes from previous version: {e}")
        
        # Base shapes with version-influenced modifications
        base_shapes = {
            "triangle": self.define_polygon(3, scale=1.0 + (self.version * 0.05)),
            "square": self.define_polygon(4, scale=0.9 + (self.version * 0.03)),
            "octagon": self.define_polygon(8, scale=0.8 + (self.version * 0.02)),
            "dodecagon": self.define_polygon(12, scale=0.7 + (self.version * 0.01))
        }
        
        # Apply version-specific transformations
        if self.version > 1:
            for shape_name, coords in base_shapes.items():
                # Rotate shapes progressively with each version
                angle = 15 * (self.version - 1)
                base_shapes[shape_name] = self.rotate_coordinates(coords, angle)
        
        return base_shapes
    
    def define_polygon(self, sides, scale=1.0):
        """Generate regular polygon with specified sides."""
        angle_step = 2 * math.pi / sides
        return [
            (scale * 100 * math.cos(i * angle_step), 
             scale * 100 * math.sin(i * angle_step))
            for i in range(sides)
        ]
    
    def initialize_color_palette(self):
        """Define color palette with version-aware evolution."""
        # Base colors inspired by the example SVG
        base_colors = [
            "#00ffd9", "#00b3a1",  # Cyan family
            "#ff00ff", "#b300b3",  # Magenta family
            "#ffbf00", "#cc7a00",  # Amber family
        ]
        
        # Evolve colors for versions beyond 1
        if self.version > 1:
            evolved_colors = []
            for color in base_colors:
                # Convert to HSL for easier manipulation
                h, s, l = self.hex_to_hsl(color)
                
                # Shift hue based on version (30 degrees per version)
                h = (h + 30 * (self.version - 1)) % 360
                
                # Alternate between increasing and decreasing saturation
                if self.version % 2 == 0:
                    s = min(1.0, s * 1.1)
                else:
                    s = max(0.3, s * 0.9)
                    
                # Convert back to hex
                evolved_colors.append(self.hsl_to_hex(h, s, l))
                
            return evolved_colors
        
        return base_colors
    
    def initialize_symmetry_vector(self):
        """Define symmetry vectors with version-specific perturbations."""
        golden_angle = 137.5
        
        # Base symmetry vector
        symmetry_vector = [i * golden_angle % 360 for i in range(1, self.iterations + 1)]
        
        # Apply version-specific transformations
        if self.version > 1:
            perturbation_scale = self.version * 3.0
            prime_numbers = [2, 3, 5, 7, 11, 13]
            
            for i in range(len(symmetry_vector)):
                prime_index = (i + self.version) % len(prime_numbers)
                prime = prime_numbers[prime_index]
                perturbation = perturbation_scale * prime / (i + 10)
                
                # Apply with periodic oscillation
                if i % 2 == 0:
                    symmetry_vector[i] = (symmetry_vector[i] + perturbation) % 360
                else:
                    symmetry_vector[i] = (symmetry_vector[i] - perturbation) % 360
        
        return symmetry_vector
    
    def hex_to_hsl(self, hex_color):
        """Convert hex color to HSL."""
        hex_color = hex_color.lstrip('#')
        r, g, b = [int(hex_color[i:i+2], 16) / 255.0 for i in (0, 2, 4)]
        max_c, min_c = max(r, g, b), min(r, g, b)
        l = (max_c + min_c) / 2
        
        if max_c == min_c:
            h = s = 0.0
        else:
            d = max_c - min_c
            s = d / (2 - max_c - min_c) if l > 0.5 else d / (max_c + min_c)
            if max_c == r:
                h = (g - b) / d + (6 if g < b else 0)
            elif max_c == g:
                h = (b - r) / d + 2
            else:
                h = (r - g) / d + 4
            h /= 6
        
        return h * 360, s, l
    
    def hsl_to_hex(self, h, s, l):
        """Convert HSL to hex color."""
        def hue_to_rgb(p, q, t):
            if t < 0: t += 1
            if t > 1: t -= 1
            if t < 1/6: return p + (q - p) * 6 * t
            if t < 1/2: return q
            if t < 2/3: return p + (q - p) * (2/3 - t) * 6
            return p
        
        h /= 360
        if s == 0:
            r = g = b = l
        else:
            q = l * (1 + s) if l < 0.5 else l + s - l * s
            p = 2 * l - q
            r = hue_to_rgb(p, q, h + 1/3)
            g = hue_to_rgb(p, q, h)
            b = hue_to_rgb(p, q, h - 1/3)
        
        return f"#{int(r * 255):02x}{int(g * 255):02x}{int(b * 255):02x}"
    
    def rotate_coordinates(self, coordinates, angle_degrees):
        """Rotate coordinates around their centroid."""
        angle_rad = math.radians(angle_degrees)
        cos_theta = math.cos(angle_rad)
        sin_theta = math.sin(angle_rad)
        
        # Calculate centroid
        cx = sum(x for x, y in coordinates) / len(coordinates)
        cy = sum(y for x, y in coordinates) / len(coordinates)
        
        # Rotate each point around centroid
        rotated = []
        for x, y in coordinates:
            x_rot = cx + (x - cx) * cos_theta - (y - cy) * sin_theta
            y_rot = cy + (x - cx) * sin_theta + (y - cy) * cos_theta
            rotated.append((x_rot, y_rot))
            
        return rotated
    
    def apply_transforms(self, shape, iteration, scale=1.0):
        """Apply transformations to a shape."""
        # Apply rotation based on symmetry vector
        angle = self.symmetry_vector[iteration % len(self.symmetry_vector)]
        rotated = self.rotate_coordinates(shape, angle)
        
        # Apply scale
        scaled = [(x * scale, y * scale) for x, y in rotated]
        
        # Apply translation based on iteration and version
        dx = 20 * math.cos(angle * math.pi / 180) * (iteration + 1) * (self.version % 3 + 1)
        dy = 20 * math.sin(angle * math.pi / 180) * (iteration + 1) * (self.version % 3 + 1)
        translated = [(x + dx, y + dy) for x, y in scaled]
        
        return translated
    
    def create_motif(self, iteration, position, scale=1.0):
        """Create a motif with shapes from the base set."""
        motif_group = self.dwg.g()
        
        # Use colors based on iteration and version
        color_index = (iteration + self.version) % len(self.color_palette)
        color = self.color_palette[color_index]
        
        # Apply prime-based stroke width variation
        stroke_width = 0.8 + (iteration % 3) * 0.2
        
        # Choose a shape based on iteration
        shape_names = list(self.base_shapes.keys())
        shape_index = (iteration + self.version) % len(shape_names)
        shape_name = shape_names[shape_index]
        base_shape = self.base_shapes[shape_name]
        
        # Apply transformations
        transformed_shape = self.apply_transforms(base_shape, iteration, scale)
        
        # Create SVG path
        path_data = "M " + " L ".join(f"{x},{y}" for x, y in transformed_shape) + " Z"
        
        motif_group.add(self.dwg.path(
            d=path_data,
            fill="none",
            stroke=color,
            stroke_width=stroke_width,
            transform=f"translate({position[0]}, {position[1]})"
        ))
        
        return motif_group
    
    def generate_recursive_grid(self, iteration, base_pos, cell_size):
        """Generate a recursive grid of motifs."""
        # Quasi-periodic disruption patterns based on Fibonacci and primes
        grid_size = 3
        
        for row in range(grid_size):
            for col in range(grid_size):
                # Calculate position
                x = base_pos[0] + col * cell_size
                y = base_pos[1] + row * cell_size
                
                # Apply quasi-periodic pattern selection
                if ((row + 1) * (col + 1)) % 5 == 0 or ((row * col) % 7 == 0 and (row + col) % 3 == 0):
                    # Create motif with size scaled down for deeper recursion
                    scale = 0.8 / (iteration + 1)
                    motif = self.create_motif(iteration, (x, y), scale)
                    self.dwg.add(motif)
                    
                    # Recursively generate smaller grids with limited depth
                    if iteration < min(2, self.iterations - 1):
                        sub_cell_size = cell_size / grid_size
                        self.generate_recursive_grid(iteration + 1, (x, y), sub_cell_size)
    
    def add_orbital_elements(self):
        """Add orbital elements around the center."""
        center_x = self.width / 2
        center_y = self.height / 2
        
        # Create orbital circles with version-influenced radii
        for i in range(3):
            # Calculate radius with golden ratio influence
            radius = 80 * (i + 1) * (1 + 0.1 * self.version)
            
            # Add orbital path
            self.dwg.add(self.dwg.circle(
                center=(center_x, center_y),
                r=radius,
                fill="none",
                stroke="#2a2d36",
                stroke_width=0.5,
                stroke_dasharray="1,3"
            ))
            
            # Add elements along the orbital path
            num_elements = (i + 1) * 2
            for j in range(num_elements):
                angle = j * (360 / num_elements)
                angle_rad = math.radians(angle)
                
                # Calculate position on orbit
                x = center_x + radius * math.cos(angle_rad)
                y = center_y + radius * math.sin(angle_rad)
                
                # Add motif
                motif = self.create_motif((i + j) % self.iterations, (x, y), 0.5)
                self.dwg.add(motif)
    
    def add_central_element(self):
        """Add central geometric element."""
        center_x = self.width / 2
        center_y = self.height / 2
        
        # Create a complex central element with nested shapes
        for i in range(3):
            # Use alternating colors
            color_index = (i + self.version) % len(self.color_palette)
            color = self.color_palette[color_index]
            
            # Create shape with version-influenced complexity
            sides = 3 + (i + self.version) % 5
            radius = 30 - i * 8
            
            # Generate polygon points
            points = []
            for j in range(sides):
                angle = j * (360 / sides)
                angle_rad = math.radians(angle)
                x = center_x + radius * math.cos(angle_rad)
                y = center_y + radius * math.sin(angle_rad)
                points.append((x, y))
            
            # Create SVG path
            path_data = "M " + " L ".join(f"{x},{y}" for x, y in points) + " Z"
            
            # Add to drawing
            self.dwg.add(self.dwg.path(
                d=path_data,
                fill="none",
                stroke=color,
                stroke_width=1.2 - i * 0.3,
                filter="url(#glow)"
            ))
    
    def add_version_metadata(self):
        """Add metadata about the version to the SVG."""
        metadata = f"""
        <!-- EvolvedSVG Metadata
            Version: {self.version}
            Date: {datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
            Iterations: {self.iterations}
            Width: {self.width}
            Height: {self.height}
            GoldenRatio: {self.golden_ratio}
        -->
        """
        
        # Add as a comment
        self.dwg.add(self.dwg.text(metadata, insert=(0, 0), fill="none"))
    
    def add_filters_and_gradients(self):
        """Add SVG filters and gradients for visual effects."""
        # Add glow filter
        glow_filter = self.dwg.filter(id="glow")
        glow_filter.feGaussianBlur(stdDeviation=2, result="blur")
        glow_filter.feComposite(in_="SourceGraphic", in2="blur", operator="over")
        self.dwg.defs.add(glow_filter)
        
        # Add gradient definitions
        for i, color_pair in enumerate([
            ("#00ffd9", "#00b3a1"),  # Cyan
            ("#ff00ff", "#b300b3"),  # Magenta
            ("#ffbf00", "#cc7a00")   # Amber
        ]):
            # Apply version-specific color shifts
            if self.version > 1:
                color_pair = (
                    self.shift_color(color_pair[0], 30 * (self.version - 1)),
                    self.shift_color(color_pair[1], 30 * (self.version - 1))
                )
            
            # Create gradient
            gradient = self.dwg.linearGradient(
                id=f"gradient_{i+1}",
                x1="0%", y1="0%",
                x2="100%", y2="100%"
            )
            
            gradient.add_stop_color(offset="0%", color=color_pair[0], opacity=0.9)
            gradient.add_stop_color(offset="100%", color=color_pair[1], opacity=0.9)
            
            self.dwg.defs.add(gradient)
    
    def shift_color(self, hex_color, hue_shift):
        """Shift a color's hue in HSL space."""
        h, s, l = self.hex_to_hsl(hex_color)
        h = (h + hue_shift) % 360
        return self.hsl_to_hex(h, s, l)
    
    def create_composition(self):
        """Create the complete SVG composition."""
        # Add background
        self.dwg.add(self.dwg.rect(insert=(0, 0), size=(self.width, self.height), fill="#0e1015"))
        
        # Set up filters and gradients
        self.add_filters_and_gradients()
        
        # Add central element
        self.add_central_element()
        
        # Add orbital elements
        self.add_orbital_elements()
        
        # Generate the recursive grid structure
        center_x = self.width / 2
        center_y = self.height / 2
        self.generate_recursive_grid(0, (center_x - 150, center_y - 150), 100)
        
        # Add metadata for future evolution
        self.add_version_metadata()
        
        # Save the SVG
        self.dwg.save()
        
        return self.output_path


def main():
    """Create the next version in the evolutionary SVG sequence."""
    width = 800
    height = 800
    iterations = 5  # Keeping iterations low for better performance
    output_path = "unexpected-geometry.svg"
    
    print(f"Generating next version of EvolvedSVG artwork...")
    evolved_svg = EvolvedSVG(width, height, iterations, output_path)
    
    # Print information about the generation
    print(f"Creating artwork version v{evolved_svg.version}")
    print(f"Output will be saved to: {evolved_svg.output_path}")
    
    # If we're beyond version 1, acknowledge the source version
    if evolved_svg.version > 1:
        prev_version = evolved_svg.version - 1
        print(f"Evolving from version v{prev_version}")
    
    # Generate the artwork
    final_path = evolved_svg.create_composition()
    
    print(f"SVG generation complete! Artwork saved to '{final_path}'")
    print(f"Run the script again to continue the evolutionary sequence with v{evolved_svg.version + 1}")


if __name__ == "__main__":
    main()
`}
        </CodeBox>
    </Chapter>
);
