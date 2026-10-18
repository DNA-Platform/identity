import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Fixed MapContainer Component v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// The main container with improved vertical centering
const Container = styled.div<{
  width?: string;
  height?: string;
}>\`
  position: relative;
  width: \${props => props.width || '100%'};
  height: \${props => props.height || '80vh'};
  margin: 40px auto; // Added top margin to pull it down from the top
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
\`;

// SVG wrapper with improved positioning
const MapWrapper = styled.div\`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; // Vertical centering
  justify-content: center; // Horizontal centering
  
  /* Target both direct SVG children and SVGs inside other components */
  & > svg, & > div > svg {
    max-width: 100%;
    max-height: 90%; // Reduced from 100% to leave room for the button
    display: block; // Removes extra space below the SVG
  }
\`;

// Fixed button container positioning
const ButtonContainer = styled.div\`
  position: absolute;
  right: 20px;
  bottom: 10px; // Moved up slightly
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8); // Semi-transparent background
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
\`;

interface MapContainerProps {
  children: React.ReactNode;
  filename?: string;
  width?: string;
  height?: string;
}

const MapContainer: React.FC<MapContainerProps> = ({ 
  children, 
  filename = 'map.svg',
  width,
  height,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
  
  // Find the SVG element after render
  useEffect(() => {
    if (containerRef.current) {
      // Use both immediate search and delayed search to ensure we find the SVG
      const findSvg = () => {
        const svg = containerRef.current?.querySelector('svg');
        if (svg instanceof SVGSVGElement) {
          setSvgElement(svg);
        }
      };
      
      // Try immediately
      findSvg();
      
      // And also with a delay to catch any SVGs that render late
      const timeoutId = setTimeout(findSvg, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [children]);
  
  // Create a ref to the SVG for the download button
  const svgRef = React.useMemo(() => {
    if (!svgElement) return null;
    return { current: svgElement } as React.RefObject<SVGSVGElement>;
  }, [svgElement]);
  
  return (
    <Container 
      ref={containerRef}
      width={width}
      height={height}
    >
      <MapWrapper>
        {children}
      </MapWrapper>
      
      {svgRef && (
        <ButtonContainer>
          <DownloadButton 
            svgRef={svgRef} 
            filename={filename}
          />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default MapContainer;`}
        </CodeBox>
    </Chapter>
);
