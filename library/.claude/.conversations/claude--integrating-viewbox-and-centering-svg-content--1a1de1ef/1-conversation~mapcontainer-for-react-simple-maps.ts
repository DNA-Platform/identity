// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// The main container that determines the size on the page
const Container = styled.div<{
  width?: string;
  height?: string;
}>`
  position: relative;
  width: ${props => props.width || '80vw'};
  height: ${props => props.height || '80vh'};
  margin: 0 auto; // Center horizontally
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px; // Space for the download button
`;

// The SVG content comes from React Simple Maps
// This wrapper ensures it scales properly within our container
const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  /* 
   * React Simple Maps creates SVG elements that we want to
   * fill the available space while maintaining aspect ratio
   */
  & > svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

// Positioned container for the download button
const ButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10;
`;

interface MapContainerProps {
  children: React.ReactNode; // This will be your React Simple Maps component
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
  
  // Find the SVG element rendered by React Simple Maps
  useEffect(() => {
    if (containerRef.current) {
      // Wait a short time to ensure React Simple Maps has rendered
      const timeoutId = setTimeout(() => {
        const svg = containerRef.current?.querySelector('svg');
        if (svg instanceof SVGSVGElement) {
          setSvgElement(svg);
        }
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, []);
  
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
        {/* This will be your ComposableMap or other React Simple Maps component */}
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

export default MapContainer;