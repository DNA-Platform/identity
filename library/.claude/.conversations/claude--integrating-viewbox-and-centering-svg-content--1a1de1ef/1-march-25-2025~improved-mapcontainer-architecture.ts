// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// Styled container with fixed dimensions and centering
const Container = styled.div<{
  width?: string;
  height?: string;
}>`
  position: relative;
  width: ${props => props.width || '80vw'};  // Default to 80% of viewport width
  height: ${props => props.height || '80vh'}; // Default to 80% of viewport height
  margin: 0 auto; // Center horizontally
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px; // Extra padding at bottom for the button
  box-sizing: border-box;
`;

// SVG wrapper to control scaling and centering
const SVGWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > svg {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
  }
`;

// Button container for absolute positioning
const ButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10;
`;

interface MapContainerProps {
  children: React.ReactNode;
  filename?: string;
  width?: string;
  height?: string;
  defaultViewBox?: string; // Optional default viewBox as string: "x y width height"
}

const MapContainer: React.FC<MapContainerProps> = ({ 
  children, 
  filename = 'map.svg',
  width,
  height,
  defaultViewBox = "0 0 1600 1200" // Default dimensions if none specified
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
  
  // Find and configure the SVG element after render
  useEffect(() => {
    if (containerRef.current) {
      const svg = containerRef.current.querySelector('svg');
      if (svg instanceof SVGSVGElement) {
        // Only set the viewBox if it doesn't already have one
        if (!svg.getAttribute('viewBox')) {
          svg.setAttribute('viewBox', defaultViewBox);
        }
        
        // Always ensure preserveAspectRatio is set
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        setSvgElement(svg);
      }
    }
  }, [defaultViewBox]);
  
  // Create a reference to the SVG for the download button
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
      <SVGWrapper>
        {children}
      </SVGWrapper>
      
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