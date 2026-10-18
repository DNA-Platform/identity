import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Project Milestones Visualization v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark background -->
  <rect width="800" height="600" fill="#0a0a2a"/>
  
  <!-- Connecting lines -->
  <path d="M 400 50 L 400 550" stroke="#2a4a8a" stroke-width="2" stroke-dasharray="4 4"/>
  
  <!-- Stage circles -->
  <g id="stage1" transform="translate(400,100)">
    <circle r="40" fill="#1e3c72"/>
    <text x="-30" y="-60" fill="white" font-family="Arial" font-size="16">Make It Fast</text>
    <text x="-90" y="-40" fill="#8a9bb5" font-family="Arial" font-size="12">Minutes not hours</text>
  </g>
  
  <g id="stage2" transform="translate(400,250)">
    <circle r="40" fill="#1e3c72"/>
    <text x="-35" y="-60" fill="white" font-family="Arial" font-size="16">Pattern Magic</text>
    <text x="-90" y="-40" fill="#8a9bb5" font-family="Arial" font-size="12">One design becomes many</text>
  </g>
  
  <g id="stage3" transform="translate(400,400)">
    <circle r="40" fill="#1e3c72"/>
    <text x="-45" y="-60" fill="white" font-family="Arial" font-size="16">Auto Descriptions</text>
    <text x="-80" y="-40" fill="#8a9bb5" font-family="Arial" font-size="12">Words write themselves</text>
  </g>
  
  <!-- Grid pattern example -->
  <g transform="translate(650,100)">
    <rect width="100" height="100" fill="none" stroke="#4a6a9a" stroke-width="1"/>
    <line x1="25" y1="0" x2="25" y2="100" stroke="#4a6a9a" stroke-width="1"/>
    <line x1="50" y1="0" x2="50" y2="100" stroke="#4a6a9a" stroke-width="1"/>
    <line x1="75" y1="0" x2="75" y2="100" stroke="#4a6a9a" stroke-width="1"/>
    <line x1="0" y1="25" x2="100" y2="25" stroke="#4a6a9a" stroke-width="1"/>
    <line x1="0" y1="50" x2="100" y2="50" stroke="#4a6a9a" stroke-width="1"/>
    <line x1="0" y1="75" x2="100" y2="75" stroke="#4a6a9a" stroke-width="1"/>
  </g>
  
  <!-- Brushstroke example -->
  <g transform="translate(650,250)">
    <path d="M 0,50 C 25,0 75,100 100,50" stroke="#4a6a9a" stroke-width="8" stroke-linecap="round" fill="none"/>
  </g>
</svg>`}
        </CodeBox>
    </Chapter>
);
