import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Animated Recursive Rose Pattern v17 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
    <g>
        <use xlink:href="#whorl" transform="scale(1.0) rotate(0)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0"
            to="22.92"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="1.0"
            to="1.272019649514069"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
        <animate
            attributeName="opacity"
            values="1;1;1;1;1;1;1;0.9;0.7;0.4;0"
            keyTimes="0;0.6;0.65;0.7;0.75;0.8;0.85;0.9;0.95;0.98;1"
            dur="10s"
            repeatCount="indefinite" />
    </g>
    
    <!-- Whorl 2 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.7861513778) rotate(37.08)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="37.08"
            to="60"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.7861513778"
            to="1.0"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 3 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.6180339887) rotate(74.16)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="74.16"
            to="97.08"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.6180339887"
            to="0.7861513778"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 4 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.4858682718) rotate(111.24)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="111.24"
            to="134.16"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.4858682718"
            to="0.6180339887"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 5 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.3819660113) rotate(148.32)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="148.32"
            to="171.24"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.3819660113"
            to="0.4858682718"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 6 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.3002831060) rotate(185.4)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="185.4"
            to="208.32"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.3002831060"
            to="0.3819660113"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 7 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.2360679775) rotate(222.48)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="222.48"
            to="245.4"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.2360679775"
            to="0.3002831060"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 8 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.1855851658) rotate(259.56)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="259.56"
            to="282.48"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.1855851658"
            to="0.2360679775"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 9 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.1458980338) rotate(296.64)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="296.64"
            to="319.56"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.1458980338"
            to="0.1855851658"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 10 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.1146979402) rotate(333.72)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="333.72"
            to="356.64"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.1146979402"
            to="0.1458980338"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 11 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0901699437) rotate(370.8)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="370.8"
            to="393.72"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0901699437"
            to="0.1146979402"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 12 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0708872255) rotate(407.88)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="407.88"
            to="430.8"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0708872255"
            to="0.0901699437"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 13 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0557280900) rotate(444.96)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="444.96"
            to="467.88"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0557280900"
            to="0.0708872255"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 14 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0438107147) rotate(482.04)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="482.04"
            to="504.96"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0438107147"
            to="0.0557280900"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 15 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0344418537) rotate(519.12)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="519.12"
            to="542.04"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0344418537"
            to="0.0438107147"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 16 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0270765108) rotate(556.2)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="556.2"
            to="579.12"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0270765108"
            to="0.0344418537"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 17 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0212862363) rotate(593.28)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="593.28"
            to="616.2"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0212862363"
            to="0.0270765108"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 18 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0167342040) rotate(630.36)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="630.36"
            to="653.28"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0167342040"
            to="0.0212862363"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 19 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0131556175) rotate(667.44)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="667.44"
            to="690.36"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0131556175"
            to="0.0167342040"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- Whorl 20 -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0103423068) rotate(704.52)" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="704.52"
            to="727.44"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0103423068"
            to="0.0131556175"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
    
    <!-- New seed whorl that appears during animation -->
    <g>
        <use xlink:href="#whorl" transform="scale(0.0081305456) rotate(741.6)" />
        <animate
            attributeName="opacity"
            values="0;0;0;0;0;0;0;0.1;0.3;0.6;1"
            keyTimes="0;0.6;0.65;0.7;0.75;0.8;0.85;0.9;0.95;0.98;1"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="741.6"
            to="764.52"
            dur="10s"
            repeatCount="indefinite" />
        <animateTransform
            attributeName="transform"
            type="scale"
            from="0.0081305456"
            to="0.0103423068"
            dur="10s"
            repeatCount="indefinite"
            additive="sum" />
    </g>
</g>
</svg>
`}
        </CodeBox>
    </Chapter>
);
