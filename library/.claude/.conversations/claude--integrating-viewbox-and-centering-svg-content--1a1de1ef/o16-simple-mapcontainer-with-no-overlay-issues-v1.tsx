import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Simple MapContainer with No Overlay Issues v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/shared/MapContainer.tsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import DownloadButton from './DownloadButton';

// Use a flex column layout to guarantee separation between map and button
const Container = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
\`;

// Map container with clear boundaries
const MapContent = styled.div\`
  width: 100%;
  margin-bottom: 20px; /* Guarantee space between map and button */
  
  & > svg, & > div > svg {
    width: 100%;
    height: auto;
    display: block;
  }
\`;

// Button container aligned to the right
const ButtonContainer = styled.div\`
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Right-align the button */
\`;

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
