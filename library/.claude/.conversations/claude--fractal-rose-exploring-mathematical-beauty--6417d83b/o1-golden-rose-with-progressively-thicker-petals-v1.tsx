import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Golden Rose with Progressively Thicker Petals v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 1200 1200" style="enable-background:new 0 0 1200 1200;" xml:space="preserve">
<style type="text/css">
    .petal{fill:#000000;stroke:#000000;stroke-width:1;stroke-miterlimit:10;}
</style>

<!-- White background -->
<rect width="1200" height="1200" fill="#FFFFFF"/>

<defs>
    <!-- Define the petal as a reusable element -->
    <g id="petal">
        <path class="petal" d="M611.1,436.8c-0.3,30.5-4.3,60.9-11.9,90.4c-4,15.6-9,30.9-14.9,45.8c-5,12.6-10.6,24.9-17,36.9c0,0,0,0,0,0.1
            c-1.2,2.3-2.5,4.7-3.8,7c-8.8,15.8-19.6,29.7-36.1,51.9c28-53,46.6-123.5,55.1-183c0.1-0.5,0.1-1,0.2-1.5
            c13.8-98-20.9-205.1-96-271.4c-31.9-28.1-61.5-52.2-98.6-73.1c-39.1-21.9-77.4-45.5-112.2-73.6c0.5,0.4-12.3,10.7-12.3,10.8
            c-43.7,33.8-88.3,66.3-131.7,100.6c-10.8,8.5-21.5,17.1-32.1,25.7c-4.3,3.5-16.4,17.6-18.5,20.1c-0.2,0.2-0.3,0.4-0.3,0.4
            s-31.8-1.9-81,6.2c0.3-0.1,0.7-0.3,1.2-0.7c3.6-2.5,12.1-10.8,13.2-11.9c2.4-2.6,5.3-4.8,7.9-7.2c6.4-5.7,12.8-11.4,19.3-17
            c12.9-11.2,26-22.2,39.3-33.1c4.1-3.3,8.2-6.6,12.3-9.9c37.2-29.5,76-56.6,114.7-84.3C236,45.9,255,29,279.2,0
            c25.7,38.9,65.9,64.1,106.6,85.7c37.3,19.7,73.8,41.7,105.7,69.4c10.7,9.3,20.7,19.3,30,30c17.6,20.1,32.6,42.5,45.1,66.5
            C596.5,308.5,611.7,373.9,611.1,436.8z"/>
    </g>
    
    <!-- Define a complete whorl with 6 petals -->
    <g id="whorl">
        <!-- Petal 1 (0 degrees) -->
        <use xlink:href="#petal" transform="translate(-300, -585) scale(1.0)" />
        <!-- Petal 2 (60 degrees) -->
        <use xlink:href="#petal" transform="rotate(60) translate(-300, -585) scale(1.0)" />
        <!-- Petal 3 (120 degrees) -->
        <use xlink:href="#petal" transform="rotate(120) translate(-300, -585) scale(1.0)" />
        <!-- Petal 4 (180 degrees) -->
        <use xlink:href="#petal" transform="rotate(180) translate(-300, -585) scale(1.0)" />
        <!-- Petal 5 (240 degrees) -->
        <use xlink:href="#petal" transform="rotate(240) translate(-300, -585) scale(1.0)" />
        <!-- Petal 6 (300 degrees) -->
        <use xlink:href="#petal" transform="rotate(300) translate(-300, -585) scale(1.0)" />
    </g>
</defs>

<!-- Center point at x="600" y="600" -->
<g transform="translate(600, 600)">
    <!-- Whorl 1 (original size) -->
    <use xlink:href="#whorl" transform="scale(1.0, 1.0) rotate(0)" />
    
    <!-- Whorl 2 - thicker petals -->
    <!-- Scale X (width) by 1/0.681 = 1.4684, Scale Y (length) by 0.681 -->
    <use xlink:href="#whorl" transform="rotate(23) scale(1.4684, 0.681)" />
    
    <!-- Whorl 3 - even thicker petals -->
    <use xlink:href="#whorl" transform="rotate(46) scale(2.1563, 0.4638)" />
    
    <!-- Whorl 4 -->
    <use xlink:href="#whorl" transform="rotate(69) scale(3.1663, 0.3158)" />
    
    <!-- Whorl 5 -->
    <use xlink:href="#whorl" transform="rotate(92) scale(4.6496, 0.2151)" />
    
    <!-- Whorl 6 -->
    <use xlink:href="#whorl" transform="rotate(115) scale(6.8275, 0.1465)" />
    
    <!-- Whorl 7 -->
    <use xlink:href="#whorl" transform="rotate(138) scale(10.0215, 0.0998)" />
    
    <!-- Whorl 8 -->
    <use xlink:href="#whorl" transform="rotate(161) scale(14.7116, 0.0679)" />
    
    <!-- Whorl 9 -->
    <use xlink:href="#whorl" transform="rotate(184) scale(21.5986, 0.0463)" />
    
    <!-- Whorl 10 -->
    <use xlink:href="#whorl" transform="rotate(207) scale(31.7052, 0.0315)" />
    
    <!-- Whorl 11 -->
    <use xlink:href="#whorl" transform="rotate(230) scale(46.5369, 0.0215)" />
    
    <!-- Whorl 12 -->
    <use xlink:href="#whorl" transform="rotate(253) scale(68.3126, 0.0146)" />
</g>
</svg>`}
        </CodeBox>
    </Chapter>
);
