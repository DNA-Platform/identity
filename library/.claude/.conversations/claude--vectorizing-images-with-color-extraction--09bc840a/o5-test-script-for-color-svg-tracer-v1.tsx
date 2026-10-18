import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Test Script for Color SVG Tracer v1 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}import os
import cv2
import numpy as np
import tempfile
import unittest
from lxml import etree
from color_svg_tracer import ColorSvgTracer

class MockTracer:
    """Mock tracer for testing that returns a simple SVG."""
    
    def __call__(self, image_path, **kwargs):
        """
        Create a simple SVG based on the provided image.
        For testing purposes only.
        
        Parameters:
        - image_path: Path to the image to trace.
        - kwargs: Additional options (ignored).
        
        Returns:
        - Simple SVG content.
        """
        # Load the binary image
        img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
        height, width = img.shape
        
        # Create a simple SVG with a rectangle for each connected component
        contours, _ = cv2.findContours(img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        # Start SVG
        svg = f'<?xml version="1.0" encoding="UTF-8"?>\\n'
        svg += f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">\\n'
        
        # Add paths for each contour
        for contour in contours:
            path_data = "M "
            first_point = True
            
            for point in contour:
                x, y = point[0]
                if first_point:
                    path_data += f"{x} {y}"
                    first_point = False
                else:
                    path_data += f" L {x} {y}"
            
            path_data += " Z"  # Close the path
            svg += f'  <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="1" d="{path_data}" />\\n'
        
        # End SVG
        svg += '</svg>'
        return svg


class TestColorSvgTracer(unittest.TestCase):
    """Test suite for ColorSvgTracer."""
    
    def setUp(self):
        """Set up test environment."""
        self.mock_tracer = MockTracer()
        self.tracer = ColorSvgTracer(self.mock_tracer)
        
        # Create a test image
        self.test_image = self.create_test_image()
    
    def create_test_image(self):
        """Create a simple test image with different colored regions."""
        # Create a temp file
        with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as temp:
            temp_path = temp.name
            
        # Create a 300x200 image with 4 colored regions
        img = np.zeros((200, 300, 3), dtype=np.uint8)
        
        # Red square in top-left
        img[10:90, 10:90] = [0, 0, 255]  # BGR format
        
        # Green square in top-right
        img[10:90, 210:290] = [0, 255, 0]  # BGR format
        
        # Blue square in bottom-left
        img[110:190, 10:90] = [255, 0, 0]  # BGR format
        
        # Yellow square in bottom-right
        img[110:190, 210:290] = [0, 255, 255]  # BGR format
        
        # Save the image
        cv2.imwrite(temp_path, img)
        return temp_path
    
    def tearDown(self):
        """Clean up test environment."""
        # Remove the test image
        if hasattr(self, 'test_image') and os.path.exists(self.test_image):
            os.remove(self.test_image)
    
    def test_initialization(self):
        """Test that the tracer initializes properly."""
        tracer = ColorSvgTracer()
        self.assertIsNone(tracer.tracer_func)
        
        tracer = ColorSvgTracer(self.mock_tracer)
        self.assertEqual(tracer.tracer_func, self.mock_tracer)
    
    def test_load_image(self):
        """Test image loading functionality."""
        img = self.tracer.load_image(self.test_image)
        self.assertEqual(len(img.shape), 3)  # Should be a color image
        self.assertEqual(img.shape[2], 3)    # 3 channels
        
        # Test handling of nonexistent file
        with self.assertRaises(FileNotFoundError):
            self.tracer.load_image("nonexistent_file.jpg")
    
    def test_quantize_colors(self):
        """Test color quantization."""
        img = self.tracer.load_image(self.test_image)
        quantized, colors, labels = self.tracer.quantize_colors(img, num_colors=4)
        
        # Should get approximately 4 colors
        self.assertLessEqual(len(colors), 4)
        
        # Quantized image should have same shape as input
        self.assertEqual(quantized.shape, img.shape)
        
        # Labels should have 2D shape
        self.assertEqual(len(labels.shape), 2)
        self.assertEqual(labels.shape, img.shape[:2])
    
    def test_bgr_to_hex(self):
        """Test BGR to hex color conversion."""
        # Test red
        self.assertEqual(self.tracer.bgr_to_hex([0, 0, 255]), "#ff0000")
        
        # Test green
        self.assertEqual(self.tracer.bgr_to_hex([0, 255, 0]), "#00ff00")
        
        # Test blue
        self.assertEqual(self.tracer.bgr_to_hex([255, 0, 0]), "#0000ff")
        
        # Test white
        self.assertEqual(self.tracer.bgr_to_hex([255, 255, 255]), "#ffffff")
        
        # Test black
        self.assertEqual(self.tracer.bgr_to_hex([0, 0, 0]), "#000000")
    
    def test_post_process_svg(self):
        """Test SVG post-processing to apply colors."""
        test_svg = """
        <?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="1" d="M 10 10 L 90 10 L 90 90 L 10 90 Z" />
        </svg>
        """
        
        # Process with red
        red_svg = self.tracer.post_process_svg(test_svg, "#ff0000")
        self.assertIn('fill="#ff0000"', red_svg)
        self.assertIn('stroke="#ff0000"', red_svg)
        
        # Process with different stroke color
        duo_svg = self.tracer.post_process_svg(test_svg, "#ff0000", "#0000ff")
        self.assertIn('fill="#ff0000"', duo_svg)
        self.assertIn('stroke="#0000ff"', duo_svg)
    
    def test_merge_svgs(self):
        """Test merging multiple SVGs."""
        svg1 = """
        <?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <path fill="#ff0000" stroke="#ff0000" stroke-width="1" opacity="1" d="M 10 10 L 90 10 L 90 90 L 10 90 Z" />
        </svg>
        """
        
        svg2 = """
        <?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <path fill="#00ff00" stroke="#00ff00" stroke-width="1" opacity="1" d="M 20 20 L 80 20 L 80 80 L 20 80 Z" />
        </svg>
        """
        
        merged = self.tracer.merge_svgs([svg1, svg2])
        
        # Check that result contains both paths
        self.assertIn('fill="#ff0000"', merged)
        self.assertIn('fill="#00ff00"', merged)
        
        # Should have one XML header
        self.assertEqual(merged.count('<?xml'), 1)
        
        # Should have one SVG element
        self.assertEqual(merged.count('<svg'), 1)
    
    def test_trace_with_color(self):
        """Test the main color tracing pipeline."""
        # Temporary output file
        with tempfile.NamedTemporaryFile(suffix='.svg', delete=False) as temp:
            output_path = temp.name
        
        try:
            # Trace the test image
            self.tracer.trace_with_color(
                self`}
        </CodeBox>
    </Chapter>
);
