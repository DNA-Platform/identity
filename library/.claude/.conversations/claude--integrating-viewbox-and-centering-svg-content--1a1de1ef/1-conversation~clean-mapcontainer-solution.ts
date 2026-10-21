// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// Simple container with sensible dimensions and positioning
const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
`;

// Map content with no extra margins or padding
const MapContent = styled.div`
  width: 100%;
  
  & > svg, & > div > svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// Button positioned at the bottom right of the map
const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -40px;
`;

interface MapContainerProps {
  children: React.ReactNode;
  filename?: string;
}

const MapContainer: React.FC<MapContainerProps> = ({ 
  children, 
  filename = 'map.svg',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      const svg = containerRef.current.querySelector('svg');
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
    <Container ref={containerRef}>
      <MapContent>
        {children}
      </MapContent>
      
      {svgRef && (
        <ButtonWrapper>
          <DownloadButton 
            svgRef={svgRef} 
            filename={filename}
          />
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default MapContainer;