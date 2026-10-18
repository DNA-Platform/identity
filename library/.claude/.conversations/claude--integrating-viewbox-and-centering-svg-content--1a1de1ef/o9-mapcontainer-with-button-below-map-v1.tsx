import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ MapContainer with Button Below Map v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// Main container is now a flex column that holds both map and button
const Container = styled.div<{
  width?: string;
  height?: string;
}>\`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: \${props => props.width || '90%'};
  margin: 20px auto;
\`;

// SVG container has a fixed height and centers the map
const MapWrapper = styled.div<{
  height?: string;
}>\`
  width: 100%;
  height: \${props => props.height || '70vh'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px; // Space between map and button
  
  & > svg, & > div > svg {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
\`;

// Button now lives in its own container below the map
const ButtonContainer = styled.div\`
  padding: 5px 10px;
  background-color: #f5f5f5;
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

export default MapContainer;`}
        </CodeBox>
    </Chapter>
);
