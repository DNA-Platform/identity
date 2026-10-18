// src/components/map-elements/SVGIcon.tsx
import React, { useMemo } from 'react';

interface SVGIconProps {
  svgContent: string;         // Full SVG content as a string
  x: number;                  // X position in map coordinates
  y: number;                  // Y position in map coordinates
  width?: number;             // Desired width in pixels
  height?: number;            // Desired height in pixels
  preserveAspectRatio?: string; // How to scale/position the SVG
  fill?: string;              // Optional fill override
  stroke?: string;            // Optional stroke override
}

const SVGIcon: React.FC<SVGIconProps> = ({
  svgContent,
  x,
  y,
  width = 30,
  height = 30,
  preserveAspectRatio = 'xMidYMid meet',
  fill,
  stroke
}) => {
  // Parse and extract data from the SVG
  const svgData = useMemo(() => {
    try {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
      
      // Get the root SVG element
      const svgElement = svgDoc.querySelector('svg');
      
      if (!svgElement) {
        console.error('No SVG element found in the provided content');
        return null;
      }
      
      // Extract viewBox attribute
      const viewBox = svgElement.getAttribute('viewBox') || '';
      
      // Extract the inner content (all child nodes)
      const contentNodes = Array.from(svgElement.childNodes);
      const innerContent = contentNodes
        .filter(node => node.nodeType === Node.ELEMENT_NODE)
        .map(node => {
          // Clone the node to manipulate it
          const clonedNode = node.cloneNode(true) as Element;
          
          // Apply fill/stroke overrides if specified
          if (fill && clonedNode.hasAttribute('fill')) {
            clonedNode.setAttribute('fill', fill);
          }
          
          if (stroke && clonedNode.hasAttribute('stroke')) {
            clonedNode.setAttribute('stroke', stroke);
          }
          
          return clonedNode.outerHTML;
        })
        .join('');
      
      return { viewBox, innerContent };
    } catch (error) {
      console.error('Error parsing SVG:', error);
      return null;
    }
  }, [svgContent, fill, stroke]);
  
  // If parsing failed, show a simple placeholder
  if (!svgData) {
    return (
      <g transform={`translate(${x}, ${y})`}>
        <rect
          x={-width/2}
          y={-height/2}
          width={width}
          height={height}
          fill="red"
          stroke="black"
          strokeWidth={1}
        />
        <text
          x={0}
          y={0}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize={10}
        >
          SVG Error
        </text>
      </g>
    );
  }
  
  // Center the icon at the specified coordinates
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg
        x={-width/2}
        y={-height/2}
        width={width}
        height={height}
        viewBox={svgData.viewBox}
        preserveAspectRatio={preserveAspectRatio}
      >
        <g dangerouslySetInnerHTML={{ __html: svgData.innerContent }} />
      </svg>
    </g>
  );
};

export default SVGIcon;
