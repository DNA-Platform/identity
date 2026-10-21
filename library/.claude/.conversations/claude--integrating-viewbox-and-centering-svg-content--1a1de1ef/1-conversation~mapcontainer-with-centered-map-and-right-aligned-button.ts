// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// Main container takes up the full viewport height to allow vertical centering
const Container = styled.div<{
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // This centers the content vertically
  width: ${props => props.width || '90%'};
  min-height: 90vh; // Take up most of the viewport height for vertical centering
  margin: 0 auto;
  position: relative; // Positioning context for the button
`;

// Map wrapper centers the SVG and has a specific height
const MapWrapper = styled.div<{
  height?: string;
}>`
  width: 100%;
  height: ${props => props.height || '70vh'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > svg, & > div > svg {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

// Button container positioned relative to the map
const ButtonContainer = styled.div`
  align-self: flex-end; // Right-align the button container
  margin-top: 10px; // Space between map and button
  padding: 5px 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

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
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
  
  // Find the SVG element after render
  useEffect(() => {
    if (mapWrapperRef.current) {
      const findSvg = () => {
        const svg = mapWrapperRef.current?.querySelector('svg');
        if (svg instanceof SVGSVGElement) {
          setSvgElement(svg);
        }
      };
      
      // Try immediately
      findSvg();
      
      // And with a delay to catch any SVGs that render late
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
    <Container width={width}>
      <MapWrapper ref={mapWrapperRef} height={height}>
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