import os
import sys
import svgtrace
import argparse
from color_svg_tracer import ColorSvgTracer

def trace_function(image_path, **kwargs):
    """
    Wrapper for svgtrace.trace that adds options.
    
    Parameters:
    - image_path: Path to the image to trace.
    - kwargs: Additional options to pass to svgtrace.
    
    Returns:
    - SVG content as string.
    """
    # Call svgtrace to perform the actual tracing
    svg_content = svgtrace.trace(image_path)
    return svg_content

def parse_arguments():
    """
    Parse command line arguments.
    
    Returns:
    - Parsed arguments.
    """
    parser = argparse.ArgumentParser(description='Convert images to color-preserving SVGs')
    
    # Required argument
    parser.add_argument('input_path', help='Path to the input image')
    
    # Optional arguments
    parser.add_argument('--output', help='Path to save the resulting SVG')
    parser.add_argument('--colors', type=int, default=8, 
                        help='Number of colors to quantize to (default: 8)')
    parser.add_argument('--min-area', type=float, default=0.5,
                        help='Minimum area percentage for a color to be included (default: 0.5)')
    parser.add_argument('--clean', type=int, default=1,
                        help='Number of morphological cleaning iterations (default: 1)')
    parser.add_argument('--save-quantized', action='store_true',
                        help='Save the quantized image for reference')
    
    return parser.parse_args()

def main():
    """
    Main function to run the tracer from command line.
    """
    # Parse arguments
    args = parse_arguments()
    
    # Create the tracer with our trace function
    tracer = ColorSvgTracer(trace_function)
    
    # Process the image
    try:
        output_path = tracer.trace_with_color(
            args.input_path,
            args.output,
            num_colors=args.colors,
            min_area_percentage=args.min_area,
            clean_iterations=args.clean
        )
        
        print(f"Success! SVG saved to: {output_path}")
        return 0
        
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1

if __name__ == "__main__":
    sys.exit(main())
