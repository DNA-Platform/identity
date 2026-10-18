// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// Flex column layout for vertical stacking
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
`;

// Map container
const MapContent = styled.div`
  width: 100%;
  margin-bottom: 20px; /* Guaranteed space between map and button */
  
  & > svg, & > div > svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// Button container with right alignment
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Right-align the button */
`;

// Style wrapper for the button to ensure single-line text
const ButtonWrapper = styled.div`
  /* Ensure button text stays on a single line */
  white-space: nowrap;
  /* Add some styling to make button more visible */
  background: white;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

interface MapContainerProps {
  children: React.ReactNode;
  filename?: string;
}

const MapContainer: React.FC<MapContainerProps> = ({ 
  children, 
  filename = 'map.svg',
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
  
  useEffect(() => {
    if (mapRef.current) {
      const svg = mapRef.current.querySelector('svg');
      if (svg instanceof SVGSVGElement) {
        setSvgElement(svg);
      }
    }
  }, [children]);
  
  const svgRef = React.useMemo(() => {
    if (!svgElement) return null;
    return { current: svgElement } as React.RefObject<SVGSVGElement>;
  }, [svgElement]);
  
  return (
    <Container>
      <MapContent ref={mapRef}>
        {children}
      </MapContent>
      
      {svgRef && (
        <ButtonContainer>
          <ButtonWrapper>
            <DownloadButton 
              svgRef={svgRef} 
              filename={filename}
            />
          </ButtonWrapper>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default MapContainer;