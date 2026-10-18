import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ EvolvedSVG: Cross-Generational Geometric Art System v1 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}"""
EvolvedSVG: A Cross-Generational Geometric Art System

This system creates evolving geometric artwork that develops across multiple generations.
Each time the program runs, it creates the next version in an evolutionary sequence,
building upon and transforming elements from previous generations.

Contributors:
- Nova: System architecture and integration
- Forma: Geometric transformations and symmetry
- Lumina: Color systems and visual harmony
- Cadence: Recursion patterns and rhythmic balance
- Claude: Code structure and evolutionary framework
"""

import svgwrite
import math
import os
import re
import datetime
from xml.dom import minidom
from shapely.geometry import Polygon, MultiPolygon

class EvolvedSVG:
    """
    Creates generative geometric art that evolves across multiple generations.
    
    Each run produces a new versioned SVG file (e.g., 'unexpected-geometry-v1.svg')
    that inherits and transforms elements from previous generations.
    """
    
    def __init__(self, width, height, iterations, base_path):
        """
        Initialize the EvolvedSVG system with configuration parameters.
        
        Args:
            width: Canvas width in pixels
            height: Canvas height in pixels
            iterations: Number of recursive iterations
            base_path: Base path for SVG file (will be versioned automatically)
        """
        # Nova: "Core system parameters establish the framework for evolution."
        self.width = width
        self.height = height
        self.iterations = iterations
        
        # Determine version and create properly versioned output path
        self.version = self.determine_version(base_path)
        self.output_path = self.create_versioned_path(base_path, self.version)
        
        # Load previous version data if available (for v2+)
        self.previous_version_path = self.get_previous_version_path() if self.version > 1 else None
        
        # Initialize core design elements
        # Forma: "Each element evolves from the previous generation while maintaining coherence."
        self.base_shapes = self.initialize_shapes()
        self.color_palette = self.initialize_color_palette()
        self.symmetry_vector = self.initialize_symmetry_vector()
        self.scale_factors = self.calculate_scale_factors()
        
        # Initialize SVG drawing
        self.dwg = svgwrite.Drawing(self.output_path, size=(width, height))
        self.defs = self.dwg.defs
        
        # Initialize cache for evolved shapes
        # Cadence: "Caching prevents redundant computation during deep recursion."
        self.evolved_cache = {}
    
    def determine_version(self, base_path):
        """
        Determine the next version number by checking for existing files.
        
        Args:
            base_path: Base file path to check for versioned variations
            
        Returns:
            The next version number in the sequence
        """
        # Nova: "This ensures each generation builds upon the previous."
        
        # Extract base name without extension
        base_dir = os.path.dirname(base_path)
        base_name = os.path.basename(base_path)
        name_part, ext = os.path.splitext(base_name)
        
        # Remove any existing version suffix like "-v1"
        name_without_version = re.sub(r'-v\\d+$', '', name_part)
        
        # Check for existing versions
        version = 1
        while True:
            test_path = os.path.join(base_dir, f"{name_without_version}-v{version}{ext}")
            if not os.path.exists(test_path):
                break
            version += 1
            
        # Cadence: "This creates the chronological evolution sequence."
        return version
    
    def create_versioned_path(self, base_path, version):
        """
        Create a versioned file path.
        
        Args:
            base_path: Original file path
            version: Version number to append
            
        Returns:
            File path with version number (e.g., 'unexpected-geometry-v1.svg')
        """
        # Nova: "Versioned filenames trace the evolutionary lineage."
        
        base_dir = os.path.dirname(base_path)
        base_name = os.path.basename(base_path)
        name_part, ext = os.path.splitext(base_name)
        
        # Remove any existing version suffix
        name_without_version = re.sub(r'-v\\d+$', '', name_part)
        
        # Create the new versioned path
        return os.path.join(base_dir, f"{name_without_version}-v{version}{ext}")
    
    def get_previous_version_path(self):
        """
        Get the file path for the previous version.
        
        Returns:
            Path to the previous version SVG, or None if not available
        """
        # Forma: "Each generation needs to know its ancestor."
        
        if self.version <= 1:
            return None
            
        prev_version = self.version - 1
        return re.sub(r'-v\\d+', f'-v{prev_version}', self.output_path)
    
    def initialize_shapes(self):
        """
        Initialize base geometric shapes, optionally evolving from previous version.
        
        Returns:
            Dictionary of base shapes to use for this generation
        """
        # Forma: "Shape initialization preserves geometric integrity across versions."
        
        # Try to extract shapes from previous version if it exists
        if self.previous_version_path and os.path.exists(self.previous_version_path):
            try:
                # Extract shapes from previous SVG
                extracted_shapes = self.extract_shapes_from_svg(self.previous_version_path)
                if extracted_shapes:
                    # Transform the shapes for the new generation
                    return self.transform_extracted_shapes(extracted_shapes)
            except Exception as e:
                print(f"Failed to extract shapes from previous version: {e}")
        
        # Base shapes for version 1 or fallback if extraction fails
        # Forma: "The primordial geometric vocabulary forms our foundation."
        base_shapes = {
            "tetrahedron": self.define_polygon(3),
            "cube": self.define_polygon(4),
            "octahedron": self.define_polygon(8),
            "dodecahedron": self.define_polygon(12),
            "icosahedron": self.define_polygon(20),
        }
        return base_shapes
    
    def extract_shapes_from_svg(self, svg_path):
        """
        Extract shapes and paths from a previous SVG version.
        
        Args:
            svg_path: Path to the SVG file to extract from
            
        Returns:
            Dictionary of extracted shapes
        """
        # Nova: "This extracts the geometric DNA from previous generations."
        
        try:
            # Parse the SVG file
            doc = minidom.parse(svg_path)
            
            # Extract paths, polygons, and other shape elements
            paths = doc.getElementsByTagName('path')
            polygons = doc.getElementsByTagName('polygon')
            
            extracted_shapes = {}
            
            # Process paths
            for i, path in enumerate(paths):
                if path.hasAttribute('d'):
                    path_data = path.getAttribute('d')
                    extracted_shapes[f"evolved_path_{i}"] = self.svg_path_to_coordinates(path_data)
            
            # Process polygons
            for i, polygon in enumerate(polygons):
                if polygon.hasAttribute('points'):
                    points = polygon.getAttribute('points')
                    extracted_shapes[f"evolved_polygon_{i}"] = self.svg_points_to_coordinates(points)
            
            # Forma: "We've captured the essence of the previous generation's forms."
            return extracted_shapes
            
        except Exception as e:
            print(f"SVG parsing error: {e}")
            return None
    
    def svg_path_to_coordinates(self, path_data):
        """
        Convert SVG path data to coordinate pairs (simplified).
        
        Args:
            path_data: SVG path data string
            
        Returns:
            List of coordinate tuples
        """
        # Forma: "Path parsing requires careful interpretation of SVG commands."
        
        # Simple parser that extracts coordinates from M and L commands
        import re
        coord_pairs = re.findall(r'[ML]\\s*(-?\\d+\\.?\\d*)[,\\s](-?\\d+\\.?\\d*)', path_data)
        return [(float(x), float(y)) for x, y in coord_pairs]
    
    def svg_points_to_coordinates(self, points_str):
        """
        Convert SVG polygon points string to coordinate pairs.
        
        Args:
            points_str: SVG polygon points string
            
        Returns:
            List of coordinate tuples
        """
        # Cadence: "Polygon points form the rhythmic structure of our geometry."
        
        # Split by spaces or commas and group into pairs
        points = points_str.strip().replace(',', ' ').split()
        coords = []
        
        for i in range(0, len(points) - 1, 2):
            try:
                x, y = float(points[i]), float(points[i+1])
                coords.append((x, y))
            except (ValueError, IndexError):
                pass
        
        return coords
    
    def transform_extracted_shapes(self, shapes):
        """
        Apply evolutionary transformations to extracted shapes.
        
        Args:
            shapes: Dictionary of shapes to transform
            
        Returns:
            Dictionary of transformed shapes
        """
        # Nova: "This is where the magic happens - we evolve previous forms."
        
        evolved_shapes = {}
        
        for shape_id, coordinates in shapes.items():
            # Skip shapes with too few points
            if not coordinates or len(coordinates) < 3:
                continue
                
            # Apply various transformations based on version number
            if self.version % 3 == 0:
                # Every 3rd version, rotate shapes
                angle = (self.version * 15) % 360
                transformed = self.rotate_coordinates(coordinates, angle)
            elif self.version % 2 == 0:
                # Every 2nd version, scale shapes
                scale = 1.0 + (self.version * 0.1) % 0.5
                transformed = self.scale_coordinates(coordinates, scale)
            else:
                # Other versions, add perturbations
                transformed = self.perturb_coordinates(coordinates, self.version)
                
            evolved_shapes[shape_id] = transformed
        
        # Add some new shapes to the mix for diversity
        evolved_shapes.update(self.generate_new_shapes(len(evolved_shapes)))
        
        # Forma: "Each generation introduces novel variations while preserving patterns."
        return evolved_shapes
    
    def rotate_coordinates(self, coordinates, angle_degrees):
        """
        Rotate coordinates around their centroid by specified angle.
        
        Args:
            coordinates: List of coordinate tuples
            angle_degrees: Angle in degrees
            
        Returns:
            List of rotated coordinate tuples
        """
        # Forma: "Rotation around the centroid preserves geometric integrity."
        
        # Convert angle to radians
        angle_rad = math.radians(angle_degrees)
        cos_theta = math.cos(angle_rad)
        sin_theta = math.sin(angle_rad)
        
        # Calculate centroid
        cx = sum(x for x, y in coordinates) / len(coordinates)
        cy = sum(y for x, y in coordinates) / len(coordinates)
        
        # Rotate each point around centroid
        rotated = []
        for x, y in coordinates:
            # Translate to origin, rotate, translate back
            x_rot = cx + (x - cx) * cos_theta - (y - cy) * sin_theta
            y_rot = cy + (x - cx) * sin_theta + (y - cy) * cos_theta
            rotated.append((x_rot, y_rot))
            
        return rotated
    
    def scale_coordinates(self, coordinates, scale_factor):
        """
        Scale coordinates relative to their centroid.
        
        Args:
            coordinates: List of coordinate tuples
            scale_factor: Factor to scale by
            
        Returns:
            List of scaled coordinate tuples
        """
        # Forma: "Scaling preserves proportions while changing magnitude."
        
        # Calculate centroid
        cx = sum(x for x, y in coordinates) / len(coordinates)
        cy = sum(y for x, y in coordinates) / len(coordinates)
        
        # Scale each point relative to centroid
        scaled = []
        for x, y in coordinates:
            # Vector from centroid to point
            dx, dy = x - cx, y - cy
            # Scale vector and add back to centroid
            scaled.append((cx + dx * scale_factor, cy + dy * scale_factor))
            
        return scaled
    
    def perturb_coordinates(self, coordinates, seed):
        """
        Add controlled random perturbations to coordinates.
        
        Args:
            coordinates: List of coordinate tuples
            seed: Random seed for reproducible perturbations
            
        Returns:
            List of perturbed coordinate tuples
        """
        # Cadence: "Controlled perturbations create organic asymmetry."
        
        import random
        
        # Set random seed for reproducible perturbations
        random.seed(seed * 42)
        
        # Determine perturbation scale based on version
        scale = min(0.1 * self.version, 0.5)
        
        # Apply perturbations with prime number influences
        perturbed = []
        for i, (x, y) in enumerate(coordinates):
            # Prime-based perturbation
            prime_factor = (i % 7) + 1
            angle = random.uniform(0, 2 * math.pi)
            distance = random.uniform(0, scale) * prime_factor
            
            # Apply perturbation
            x_new = x + distance * math.cos(angle)
            y_new = y + distance * math.sin(angle)
            perturbed.append((x_new, y_new))
            
        return perturbed
    
    def generate_new_shapes(self, count):
        """
        Generate new shapes to add diversity.
        
        Args:
            count: Number of existing shapes (for reference)
            
        Returns:
            Dictionary of new shapes
        """
        # Forma: "Novel forms emerge to maintain evolutionary momentum."
        
        new_shapes = {}
        
        # Number of new shapes depends on version
        num_new = min(3, max(1, self.version // 2))
        
        for i in range(num_new):
            # Vary number of sides based on version and Fibonacci sequence
            fib_seq = [3, 5, 8, 13, 21]
            sides = fib_seq[i % len(fib_seq)]
            
            # Create new polygon with version-dependent scaling
            shape_id = f"new_polygon_{self.version}_{i}"
            scale = 1.0 + (self.version * 0.05)
            new_shapes[shape_id] = self.scale_coordinates(self.define_polygon(sides), scale)
            
        return new_shapes
    
    def define_polygon(self, sides):
        """
        Generate base polygon with defined sides.
        
        Args:
            sides: Number of sides for the polygon
            
        Returns:
            List of coordinate tuples forming the polygon
        """
        # Forma: "Regular polygons provide our fundamental geometric language."
        
        angle_step = 2 * math.pi / sides
        return [
            (math.cos(i * angle_step), math.sin(i * angle_step))
            for i in range(sides)
        ]
    
    def initialize_color_palette(self):
        """
        Define evolving color harmonies.
        
        Returns:
            List of color hex values
        """
        # Lumina: "Color harmonies evolve while maintaining perceptual balance."
        
        # Base colors from the example SVG
        base_colors = [
            "#00ffd9", "#00b3a1",  # Cyan family
            "#ff00ff", "#b300b3",  # Magenta family
            "#ffbf00", "#cc7a00",  # Amber family
        ]
        
        # Evolve colors based on version number
        if self.version > 1:
            evolved_colors = []
            
            for color in base_colors:
                # Convert to HSL space for easier manipulation
                h, s, l = self.hex_to_hsl(color)
                
                # Shift hue based on version (30 degrees per version)
                h = (h + 30 * (self.version - 1)) % 360
                
                # Alternate between increasing and decreasing saturation
                if self.version % 2 == 0:
                    s = min(1.0, s * 1.1)
                else:
                    s = max(0.3, s * 0.9)
                    
                # Subtly adjust lightness
                l = max(0.3, min(0.7, l + (self.version % 3 - 1) * 0.05))
                
                # Convert back to hex
                evolved_colors.append(self.hsl_to_hex(h, s, l))
                
            # Lumina: "The color palette evolves with each generation."
            return evolved_colors
        
        return base_colors
    
    def initialize_symmetry_vector(self):
        """
        Define perturbations and symmetry breaking vectors.
        
        Returns:
            List of angular values
        """
        # Forma: "Symmetry control adapts across versions with prime-based variability."
        
        golden_angle = 137.5
        
        # Base symmetry vector
        symmetry_vector = [i * golden_angle % 360 for i in range(1, self.iterations + 1)]
        
        # Apply version-specific transformations
        if self.version > 1:
            # Increase perturbation with each version
            perturbation_scale = self.version * 3.0
            
            # Prime-based perturbations
            prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
            
            # Apply perturbations based on version
            for i in range(len(symmetry_vector)):
                prime_index = (i + self.version) % len(prime_numbers)
                prime = prime_numbers[prime_index]
                
                # Complex perturbation formula with prime factors
                perturbation = (perturbation_scale * prime) / (i + 1)
                
                # Apply with periodic oscillation
                if i % 2 == 0:
                    symmetry_vector[i] = (symmetry_vector[i] + perturbation) % 360
                else:
                    symmetry_vector[i] = (symmetry_vector[i] - perturbation) % 360
            
            # Forma: "Each generation has its own symmetry fingerprint."
        
        return symmetry_vector
    
    def calculate_scale_factors(self):
        """
        Precompute evolving scale factors based on recursion depth and prime perturbations.
        
        Returns:
            List of scale factors for each iteration
        """
        # Nova: "Scale factors control the micro-evolution within each artwork."
        
        scale_factors = []
        base_scale = 1.0
        golden_ratio = 1.618
        
        for i in range(self.iterations):
            # Cadence: "Prime perturbations prevent pattern collapse."
            prime_perturbation = 1 + ((i % 3) / 10) + ((i % 5) / 50)
            dynamic_scale = base_scale / (golden_ratio ** (i / 10)) * prime_perturbation
            
            # Forma: "Bounding prevents distortion across recursion depths."
            bounded_scale = max(0.1, min(1.5, dynamic_scale))
            scale_factors.append(bounded_scale)
            
        return scale_factors
    
    def get_scale_factor(self, iteration):
        """
        Get the scale factor for a specific iteration.
        
        Args:
            iteration: Iteration index
            
        Returns:
            Scale factor value
        """
        if iteration < len(self.scale_factors):
            return self.scale_factors[iteration]
        else:
            # Fallback for iterations beyond precomputed
            return self.scale_factors[-1]
    
    def evolve_geometry(self, iteration):
        """
        Evolve base shapes and perform union to simplify.
        
        Args:
            iteration: Current iteration
            
        Returns:
            MultiPolygon of evolved shapes
        """
        # Forma: "Shape evolution introduces controlled symmetry-breaking."
        
        evolved_shapes = []
        for shape_id, base_shape in self.base_shapes.items():
            perturbed_shape = self.apply_transforms(base_shape, iteration)
            scaled_shape = self.scale_shape(perturbed_shape, self.get_scale_factor(iteration))
            evolved_shape = self.union_shapes([scaled_shape])
            evolved_shapes.append(evolved_shape)
            
        return MultiPolygon(evolved_shapes)
    
    def apply_transforms(self, shape, iteration):
        """
        Apply translation, rotation, and perturbations.
        
        Args:
            shape: Shape to transform
            iteration: Current iteration
            
        Returns:
            Transformed shape
        """
        # Forma: "Prime-based perturbations prevent symmetry collapse."
        
        dx, dy = self.calculate_translation(iteration)
        angle = self.calculate_rotation(iteration)
        return self.rotate_and_translate(shape, dx, dy, angle)
    
    def scale_shape(self, shape, scale_factor):
        """
        Scale shape by evolving scale factor.
        
        Args:
            shape: Shape to scale
            scale_factor: Scale factor to apply
            
        Returns:
            Scaled shape
        """
        # Forma: "Scaling accounts for progression and visual balance."
        
        scaled_shape = [(x * scale_factor, y * scale_factor) for x, y in shape]
        return scaled_shape
    
    def union_shapes(self, shapes):
        """
        Take union of multiple shapes for simplicity.
        
        Args:
            shapes: List of shapes to union
            
        Returns:
            Union of shapes as MultiPolygon
        """
        # Nova: "Union logic handles overlaps while maintaining integrity."
        
        polygons = [Polygon(shape) for shape in shapes]
        return MultiPolygon(polygons).buffer(0)
    
    def calculate_translation(self, iteration):
        """
        Calculate translation offsets based on prime perturbations.
        
        Args:
            iteration: Current iteration
            
        Returns:
            (dx, dy) translation offsets
        """
        # Nova: "Translation logic introduces asymmetry using prime perturbations."
        
        perturbation = (iteration % 7) * 5  # Prime-based offset
        dx = perturbation * math.cos(math.radians(self.symmetry_vector[iteration % len(self.symmetry_vector)]))
        dy = perturbation * math.sin(math.radians(self.symmetry_vector[iteration % len(self.symmetry_vector)]))
        return dx, dy
    
    def calculate_rotation(self, iteration):
        """
        Calculate rotation based on prime-driven perturbations.
        
        Args:
            iteration: Current iteration
            
        Returns:
            Rotation angle in degrees
        """
        # Cadence: "Prime-based angle modulation prevents pattern stagnation."
        
        rotation_offset = (iteration % 5) * 13  # Prime-based rotation perturbation
        base_angle = self.symmetry_vector[iteration % len(self.symmetry_vector)]
        return (base_angle + rotation_offset) % 360
    
    def rotate_and_translate(self, shape, dx, dy, angle):
        """
        Rotate shape around its centroid and apply translation.
        
        Args:
            shape: Shape to transform
            dx, dy: Translation offsets
            angle: Rotation angle in degrees
            
        Returns:
            Transformed shape
        """
        # Forma: "Rotation around the centroid preserves symmetry during transformation."
        
        # Calculate centroid
        centroid_x = sum(x for x, y in shape) / len(shape)
        centroid_y = sum(y for x, y in shape) / len(shape)
        
        # Convert angle to radians
        angle_rad = math.radians(angle)
        cos_theta = math.cos(angle_rad)
        sin_theta = math.sin(angle_rad)
        
        # Rotate each point around centroid
        rotated_shape = [
            (
                cos_theta * (x - centroid_x) - sin_theta * (y - centroid_y) + centroid_x,
                sin_theta * (x - centroid_x) + cos_theta * (y - centroid_y) + centroid_y,
            )
            for x, y in shape
        ]
        
        # Apply translation
        translated_shape = [(x + dx, y + dy) for x, y in rotated_shape]
        
        return translated_shape
    
    def evolve_color(self, iteration):
        """
        Shift colors along perceptual dimensions.
        
        Args:
            iteration: Current iteration
            
        Returns:
            Evolved color as hex value
        """
        # Lumina: "Hue modulation evolves predictably across iterations."
        
        base_color = self.color_palette[iteration % len(self.color_palette)]
        
        if iteration % 2 == 0:
            return self.shift_toward_pastel(base_color, iteration)
        else:
            return self.shift_toward_complementary(base_color, iteration)
    
    def shift_toward_pastel(self, hex_color, iteration):
        """
        Shift color to pastel by adjusting lightness and saturation.
        
        Args:
            hex_color: Original color as hex
            iteration: Current iteration
            
        Returns:
            Shifted color as hex
        """
        # Lumina: "Pastel shifts create subtle harmonies in lighter ranges."
        
        h, s, l = self.hex_to_hsl(hex_color)
        l = min(1, l + 0.1 * iteration / self.iterations)
        s *= 0.9
        return self.hsl_to_hex(h, s, l)
    
    def shift_toward_complementary(self, hex_color, iteration):
        """
        Shift toward complementary or triadic hues.
        
        Args:
            hex_color: Original color as hex
            iteration: Current iteration
            
        Returns:
            Shifted color as hex
        """
        # Lumina: "Complementary shifts create dynamic tension in the color space."
        
        h, s, l = self.hex_to_hsl(hex_color)
        h = (h + 180 + (5 * iteration)) % 360  # Introduce fractional hue shift
        return self.hsl_to_hex(h, s, l)
    
    def hex_to_hsl(self, hex_color):
        """
        Convert hex to HSL for color manipulation.
        
        Args:
            hex_color: Color in hex format (e.g., "#ff0000")
            
        Returns:
            (h, s, l) tuple with values in ranges h:[0-360], s:[0-1], l:[0-1]
        """
        # Lumina: "HSL space enables natural perceptual color transformations."
        
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
            elif max_c == b:
                h = (r - g) / d + 4
            h /= 6
        
        return h * 360, s, l
    
    def hsl_to_hex(self, h, s, l):
        """
        Convert HSL back to hex for SVG rendering.
        
        Args:
            h: Hue [0-360]
            s: Saturation [0-1]
            l: Lightness [0-1]
            
        Returns:
            Color in hex format
        """
        # Lumina: "Converting back to hex maintains compatibility with SVG."
        
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
    
    def get_cached_shape(self, iteration):
        """
        Retrieve cached shape if available or compute it.
        
        Args:
            iteration: Iteration to retrieve shape for
            
        Returns:
            Evolved shape for the iteration
        """
        # Cadence: "Caching prevents redundant computation."
        
        if iteration in self.evolved_cache:
            return self.evolved_cache[iteration]
        
        evolved_shape = self.evolve_geometry(iteration)
        self.evolved_cache[iteration] = evolved_shape
        return evolved_shape
    
    def generate_grid_of_evolutions(self, iteration, grid_size, cell_size, stroke_width=0.8):
        """
        Generate recursive grid with cells as evolved motifs.
        
        Args:
            iteration: Current iteration
            grid_size: Size of the grid
            cell_size: Size of each cell
            stroke_width: Width of strokes
        """
        # Cadence: "Grid coherence maintains harmony as recursion depth increases."
        
        for row in range(grid_size):
            for col in range(grid_size):
                dx, dy = col * cell_size, row * cell_size
                
                # Quasi-periodic disruption patterns
                fib_offset = ((row + 1) * (col + 1)) % 5 == 0  # Fibonacci-driven
                prime_disruption = ((row * col) % 7 == 0 an`}
        </CodeBox>
    </Chapter>
);
