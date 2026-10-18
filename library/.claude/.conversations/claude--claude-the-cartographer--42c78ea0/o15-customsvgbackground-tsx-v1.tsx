import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ CustomSVGBackground..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/map-backgrounds/CustomSVGBackground.tsx
import React, { useMemo } from 'react';
import { useMapContext } from 'react-simple-maps';

interface CustomSVGBackgroundProps {
  svgContent: string;       // The raw SVG content as a string
  backgroundColor?: string; // Optional background color
  preserveAspectRatio?: string; // Control how SVG is scaled/positioned
  // Maintaining backward compatibility with other background components
  lineColor?: string;       // Not used but needed for compatibility
  lineWidth?: number;       // Not used but needed for compatibility
  lineSpacing?: number;     // Not used but needed for compatibility
  direction?: string;       // Not used but needed for compatibility
  solid?: boolean;          // Not used but needed for compatibility
}

const CustomSVGBackground: React.FC<CustomSVGBackgroundProps> = ({
  svgContent,
  backgroundColor = 'transparent',
  preserveAspectRatio = 'xMidYMid slice',
  // Unused props included for backward compatibility
  lineColor,
  lineWidth,
  lineSpacing,
  direction,
  solid
}) => {
  const { width = 800, height = 600 } = useMapContext();

  // Parse the SVG content to extract what we need
  const parsedSVG = useMemo(() => {
    try {
      // Create a DOM parser
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
      
      // Get the root SVG element
      const svgElement = svgDoc.querySelector('svg');
      
      if (!svgElement) {
        console.error('No SVG element found in the provided content');
        return null;
      }
      
      // Extract the viewBox if it exists
      const viewBox = svgElement.getAttribute('viewBox') || '';
      
      // Get all child elements of the SVG (excluding the <svg> tag itself)
      const innerContent = Array.from(svgElement.childNodes)
        .filter(node => node.nodeType === Node.ELEMENT_NODE)
        .map(node => node.outerHTML)
        .join('');
      
      return {
        viewBox,
        innerContent
      };
    } catch (error) {
      console.error('Error parsing SVG:', error);
      return null;
    }
  }, [svgContent]);

  // If parsing failed, show an error indicator
  if (!parsedSVG) {
    return (
      <>
        <rect x="0" y="0" width={width} height={height} fill={backgroundColor} />
        <text x={width/2} y={height/2} textAnchor="middle" fill="red">
          Error parsing SVG content
        </text>
      </>
    );
  }

  // Create a container with the background color
  return (
    <>
      {/* Background color */}
      <rect x="0" y="0" width={width} height={height} fill={backgroundColor} />
      
      {/* SVG content */}
      <g 
        dangerouslySetInnerHTML={{ __html: parsedSVG.innerContent }}
        style={{ 
          transformOrigin: 'center',
          transform: 'scale(1)'
        }}
      />
    </>
  );
};

// Alternative implementation that takes a viewBox and content directly
// This can be used when you have already extracted these parts
export const CustomSVGBackgroundDirect: React.FC<{
  svgContent: string;
  viewBox?: string;
  backgroundColor?: string;
  preserveAspectRatio?: string;
}> = ({
  svgContent,
  viewBox,
  backgroundColor = 'transparent',
  preserveAspectRatio = 'xMidYMid slice',
}) => {
  const { width = 800, height = 600 } = useMapContext();

  return (
    <>
      <rect x="0" y="0" width={width} height={height} fill={backgroundColor} />
      
      <svg
        x="0"
        y="0" 
        width={width}
        height={height}
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}
      >
        <g dangerouslySetInnerHTML={{ __html: svgContent }} />
      </svg>
    </>
  );
};

export default CustomSVGBackground;
`}
        </CodeBox>
    </Chapter>
);
