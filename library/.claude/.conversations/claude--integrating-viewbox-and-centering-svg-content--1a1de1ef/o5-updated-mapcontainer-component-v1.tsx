import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Updated MapContainer Component v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// The main container that determines the size on the page
const Container = styled.div<{
  width?: string;
  height?: string;
}>\`
  position: relative;
  width: \${props => props.width || '80vw'};
  height: \${props => props.height || '80vh'};
  margin: 0 auto; // Center horizontally
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px; // Space for the download button
  overflow: hidden; // Prevent any content from spilling out
\`;

// The wrapper for the SVG content (either direct SVG or from React Simple Maps)
// This ensures the SVG scales properly within our container
const MapWrapper = styled.div\`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* 
   * Handle both direct SVG children and SVG created by React Simple Maps
   * which could be nested inside another component
   */
  & > svg, & > div > svg {
    max-width: 100%;
    max-height: 100%;
  }
\`;

// Positioned container for the download button
const ButtonContainer = styled.div\`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10;
\`;

interface MapContainerProps {
  children: React.ReactNode; // Either an SVG or a component that renders an SVG
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
  
  // Find any SVG element within the container
  useEffect(() => {
    if (containerRef.current) {
      // Use a slight delay to ensure all children have rendered
      const timeoutId = setTimeout(() => {
        // First look for direct SVG child, then try to find an SVG deeper in the tree
        let svg = containerRef.current?.querySelector('svg');
        
        if (svg instanceof SVGSVGElement) {
          setSvgElement(svg);
        }
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [children]); // Re-run if children change
  
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
        {/* This could be an SVG or a component that renders an SVG */}
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
