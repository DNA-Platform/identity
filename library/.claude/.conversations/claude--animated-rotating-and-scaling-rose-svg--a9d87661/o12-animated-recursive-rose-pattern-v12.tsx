import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Animated Recursive Rose Pattern v12 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 1200 1200" style="enable-background:new 0 0 1200 1200;" xml:space="preserve">
<style type="text/css">
    .petal{fill:#000000;stroke:#000000;stroke-width:1;stroke-miterlimit:10;}
    
    @keyframes rotate1 {
        from { transform: rotate(0deg) scale(1.0); }
        to { transform: rotate(22.92deg) scale(1.272019649514069); }
    }
    
    @keyframes rotate2 {
        from { transform: rotate(37.08deg) scale(0.7861513778); }
        to { transform: rotate(60deg) scale(1.0); }
    }
    
    @keyframes rotate3 {
        from { transform: rotate(74.16deg) scale(0.6180339887); }
        to { transform: rotate(97.08deg) scale(0.7861513778); }
    }
    
    @keyframes rotate4 {
        from { transform: rotate(111.24deg) scale(0.4858682718); }
        to { transform: rotate(134.16deg) scale(0.6180339887); }
    }
    
    @keyframes rotate5 {
        from { transform: rotate(148.32deg) scale(0.3819660113); }
        to { transform: rotate(171.24deg) scale(0.4858682718); }
    }
    
    @keyframes rotate6 {
        from { transform: rotate(185.4deg) scale(0.3002831060); }
        to { transform: rotate(208.32deg) scale(0.3819660113); }
    }
    
    @keyframes rotate7 {
        from { transform: rotate(222.48deg) scale(0.2360679775); }
        to { transform: rotate(245.4deg) scale(0.3002831060); }
    }
    
    @keyframes rotate8 {
        from { transform: rotate(259.56deg) scale(0.1855851658); }
        to { transform: rotate(282.48deg) scale(0.2360679775); }
    }
    
    @keyframes rotate9 {
        from { transform: rotate(296.64deg) scale(0.1458980338); }
        to { transform: rotate(319.56deg) scale(0.1855851658); }
    }
    
    @keyframes rotate10 {
        from { transform: rotate(333.72deg) scale(0.1146979402); }
        to { transform: rotate(356.64deg) scale(0.1458980338); }
    }
    
    @keyframes rotate11 {
        from { transform: rotate(370.8deg) scale(0.0901699437); }
        to { transform: rotate(393.72deg) scale(0.1146979402); }
    }
    
    @keyframes rotate12 {
        from { transform: rotate(407.88deg) scale(0.0708872255); }
        to { transform: rotate(430.8deg) scale(0.0901699437); }
    }
    
    @keyframes rotate13 {
        from { transform: rotate(444.96deg) scale(0.0557280900); }
        to { transform: rotate(467.88deg) scale(0.0708872255); }
    }
    
    @keyframes rotate14 {
        from { transform: rotate(482.04deg) scale(0.0438107147); }
        to { transform: rotate(504.96deg) scale(0.0557280900); }
    }
    
    @keyframes rotate15 {
        from { transform: rotate(519.12deg) scale(0.0344418537); }
        to { transform: rotate(542.04deg) scale(0.0438107147); }
    }
    
    @keyframes rotate16 {
        from { transform: rotate(556.2deg) scale(0.0270765108); }
        to { transform: rotate(579.12deg) scale(0.0344418537); }
    }
    
    @keyframes rotate17 {
        from { transform: rotate(593.28deg) scale(0.0212862363); }
        to { transform: rotate(616.2deg) scale(0.0270765108); }
    }
    
    @keyframes rotate18 {
        from { transform: rotate(630.36deg) scale(0.0167342040); }
        to { transform: rotate(653.28deg) scale(0.0212862363); }
    }
    
    @keyframes rotate19 {
        from { transform: rotate(667.44deg) scale(0.0131556175); }
        to { transform: rotate(690.36deg) scale(0.0167342040); }
    }
    
    @keyframes rotate20 {
        from { transform: rotate(704.52deg) scale(0.0103423068); }
        to { transform: rotate(727.44deg) scale(0.0131556175); }
    }
    
    @keyframes rotateSeed {
        from { transform: rotate(741.6deg) scale(0.0081305456); }
        to { transform: rotate(764.52deg) scale(0.0103423068); }
    }
    
    @keyframes fade-out {
        0% { opacity: 1; }
        80% { opacity: 0.9; }
        100% { opacity: 0; }
        /* Keep the element visible throughout the entire animation */
        0%, 100% { visibility: visible; }
    }
    
    @keyframes fade-in {
        0% { opacity: 0; }
        1% { opacity: 0; }
        30% { opacity: 0.1; }
        100% { opacity: 1; }
    }
    
    #whorl1 {
        animation: rotate1 10s infinite linear, fade-out 10s infinite linear;
    }
    
    #whorl2 {
        animation: rotate2 10s infinite linear;
    }
    
    #whorl3 {
        animation: rotate3 10s infinite linear;
    }
    
    #whorl4 {
        animation: rotate4 10s infinite linear;
    }
    
    #whorl5 {
        animation: rotate5 10s infinite linear;
    }
    
    #whorl6 {
        animation: rotate6 10s infinite linear;
    }
    
    #whorl7 {
        animation: rotate7 10s infinite linear;
    }
    
    #whorl8 {
        animation: rotate8 10s infinite linear;
    }
    
    #whorl9 {
        animation: rotate9 10s infinite linear;
    }
    
    #whorl10 {
        animation: rotate10 10s infinite linear;
    }
    
    #whorl11 {
        animation: rotate11 10s infinite linear;
    }
    
    #whorl12 {
        animation: rotate12 10s infinite linear;
    }
    
    #whorl13 {
        animation: rotate13 10s infinite linear;
    }
    
    #whorl14 {
        animation: rotate14 10s infinite linear;
    }
    
    #whorl15 {
        animation: rotate15 10s infinite linear;
    }
    
    #whorl16 {
        animation: rotate16 10s infinite linear;
    }
    
    #whorl17 {
        animation: rotate17 10s infinite linear;
    }
    
    #whorl18 {
        animation: rotate18 10s infinite linear;
    }
    
    #whorl19 {
        animation: rotate19 10s infinite linear;
    }
    
    #whorl20 {
        animation: rotate20 10s infinite linear;
    }
    
    #whorlSeed {
        animation: rotateSeed 10s infinite linear, fade-in 10s infinite linear;
    }
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
    <!-- Using CSS animations for more precise control -->
    <g id="whorl1"><use xlink:href="#whorl" /></g>
    <g id="whorl2"><use xlink:href="#whorl" /></g>
    <g id="whorl3"><use xlink:href="#whorl" /></g>
    <g id="whorl4"><use xlink:href="#whorl" /></g>
    <g id="whorl5"><use xlink:href="#whorl" /></g>
    <g id="whorl6"><use xlink:href="#whorl" /></g>
    <g id="whorl7"><use xlink:href="#whorl" /></g>
    <g id="whorl8"><use xlink:href="#whorl" /></g>
    <g id="whorl9"><use xlink:href="#whorl" /></g>
    <g id="whorl10"><use xlink:href="#whorl" /></g>
    <g id="whorl11"><use xlink:href="#whorl" /></g>
    <g id="whorl12"><use xlink:href="#whorl" /></g>
    <g id="whorl13"><use xlink:href="#whorl" /></g>
    <g id="whorl14"><use xlink:href="#whorl" /></g>
    <g id="whorl15"><use xlink:href="#whorl" /></g>
    <g id="whorl16"><use xlink:href="#whorl" /></g>
    <g id="whorl17"><use xlink:href="#whorl" /></g>
    <g id="whorl18"><use xlink:href="#whorl" /></g>
    <g id="whorl19"><use xlink:href="#whorl" /></g>
    <g id="whorl20"><use xlink:href="#whorl" /></g>
    <g id="whorlSeed"><use xlink:href="#whorl" /></g>
</g>
</svg>
`}
        </CodeBox>
    </Chapter>
);
