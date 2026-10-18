import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Restored MapContainer Component v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';
import { ViewBox } from '../../utils/ViewBox';

// Styled container with responsive behavior
const Container = styled.div<{
  maxSize?: string;
}>\`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: \${props => props.maxSize || 'none'};
  max-height: \${props => props.maxSize || 'none'};
  overflow: hidden;
  margin: 0 auto; /* Center the container */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; /* Remove padding that might be causing margins */
\`;

// SVG wrapper to control sizing and centering
const SVGWrapper = styled.div\`
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
\`;

// Bottom right position for the download button
const ButtonPosition = styled.div\`
  position: absolute;
  right: 10px;
  bottom: -40px; /* Position below the map */
  z-index: 10;
\`;

// Simplified Props interface for our MapContainer
interface MapContainerProps {
  children: React.ReactNode;
  filename?: string;
  viewBox?: ViewBox;
  maxSize?: string;
}

const MapContainer: React.FC<MapContainerProps> = ({ 
  children, 
  filename = 'map.svg',
  viewBox = new ViewBox(1600, 1200),
  maxSize,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
  
  // Find and set the SVG element after render
  useEffect(() => {
    if (containerRef.current) {
      const svg = containerRef.current.querySelector('svg');
      if (svg instanceof SVGSVGElement) {
        // Apply viewBox if the SVG doesn't already have one
        if (!svg.getAttribute('viewBox')) {
          svg.setAttribute('viewBox', viewBox.toString());
        }
        
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        setSvgElement(svg);
      }
    }
  }, [viewBox]);
  
  // Create a ref to the SVG for the download button
  const svgRef = React.useMemo(() => {
    if (!svgElement) return null;
    return { current: svgElement } as React.RefObject<SVGSVGElement>;
  }, [svgElement]);
  
  return (
    <Container 
      ref={containerRef}
      maxSize={maxSize}
    >
      <SVGWrapper>
        {children}
      </SVGWrapper>
      
      {svgRef && (
        <ButtonPosition>
          <DownloadButton 
            svgRef={svgRef} 
            filename={filename}
          />
        </ButtonPosition>
      )}
    </Container>
  );
};

export default MapContainer;`}
        </CodeBox>
    </Chapter>
);
