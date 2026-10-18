import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Animated Recursive Rose Pattern v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`${''}<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Recursive Rose Pattern</title>
  <style>
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f0f0f0;
    }
    
    .container {
      width: 800px;
      height: 800px;
      position: relative;
    }
    
    svg {
      max-width: 100%;
      height: auto;
    }
    
    .controls {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 20px;
      background: rgba(255, 255, 255, 0.7);
      padding: 10px;
      border-radius: 8px;
    }
    
    button {
      padding: 8px 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 1200 1200" style="enable-background:new 0 0 1200 1200;" xml:space="preserve">
    <style type="text/css">
        .petal {
          fill: #000000;
          stroke: #000000;
          stroke-width: 1;
          stroke-miterlimit: 10;
        }
        
        @keyframes rotate-and-scale {
          0% {
            transform: scale(var(--start-scale)) rotate(var(--start-angle)deg);
            opacity: var(--start-opacity);
          }
          100% {
            transform: scale(var(--end-scale)) rotate(var(--end-angle)deg);
            opacity: var(--end-opacity);
          }
        }
        
        .whorl {
          transform-origin: center;
          animation: rotate-and-scale 5s infinite linear;
          animation-play-state: paused;
        }
        
        .animate {
          animation-play-state: running;
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
    <g id="main-rose" transform="translate(600, 600)">
        <!-- Whorl 1 (original size) -->
        <g class="whorl" style="--start-scale: 1.0; --end-scale: 1.0; --start-angle: 0; --end-angle: 60; --start-opacity: 1; --end-opacity: 0;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 2 -->
        <g class="whorl" style="--start-scale: 0.786151377757; --end-scale: 1.0; --start-angle: 37.08; --end-angle: 97.08; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 3 -->
        <g class="whorl" style="--start-scale: 0.618033988749895; --end-scale: 0.786151377757; --start-angle: 74.16; --end-angle: 134.16; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 4 -->
        <g class="whorl" style="--start-scale: 0.485868286683; --end-scale: 0.618033988749895; --start-angle: 111.24; --end-angle: 171.24; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 5 -->
        <g class="whorl" style="--start-scale: 0.381966011250105; --end-scale: 0.485868286683; --start-angle: 148.32; --end-angle: 208.32; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 6 -->
        <g class="whorl" style="--start-scale: 0.300286994342; --end-scale: 0.381966011250105; --start-angle: 185.4; --end-angle: 245.4; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 7 -->
        <g class="whorl" style="--start-scale: 0.236082222554676; --end-scale: 0.300286994342; --start-angle: 222.48; --end-angle: 282.48; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 8 -->
        <g class="whorl" style="--start-scale: 0.185598201593954; --end-scale: 0.236082222554676; --start-angle: 259.56; --end-angle: 319.56; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 9 -->
        <g class="whorl" style="--start-scale: 0.145910713165512; --end-scale: 0.185598201593954; --start-angle: 296.64; --end-angle: 356.64; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 10 -->
        <g class="whorl" style="--start-scale: 0.114703577512371; --end-scale: 0.145910713165512; --start-angle: 333.72; --end-angle: 393.72; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 11 -->
        <g class="whorl" style="--start-scale: 0.0901713057530347; --end-scale: 0.114703577512371; --start-angle: 370.8; --end-angle: 430.8; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 12 -->
        <g class="whorl" style="--start-scale: 0.0708866091004143; --end-scale: 0.0901713057530347; --start-angle: 407.88; --end-angle: 467.88; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 13 -->
        <g class="whorl" style="--start-scale: 0.0557237720344108; --end-scale: 0.0708866091004143; --start-angle: 444.96; --end-angle: 504.96; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 14 -->
        <g class="whorl" style="--start-scale: 0.0438100825352542; --end-scale: 0.0557237720344108; --start-angle: 482.04; --end-angle: 542.04; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 15 -->
        <g class="whorl" style="--start-scale: 0.0344404672644061; --end-scale: 0.0438100825352542; --start-angle: 519.12; --end-angle: 579.12; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 16 -->
        <g class="whorl" style="--start-scale: 0.0270741493001072; --end-scale: 0.0344404672644061; --start-angle: 556.2; --end-angle: 616.2; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 17 -->
        <g class="whorl" style="--start-scale: 0.0212811950071933; --end-scale: 0.0270741493001072; --start-angle: 593.28; --end-angle: 653.28; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 18 -->
        <g class="whorl" style="--start-scale: 0.0167266748427303; --end-scale: 0.0212811950071933; --start-angle: 630.36; --end-angle: 690.36; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 19 -->
        <g class="whorl" style="--start-scale: 0.0131471307358498; --end-scale: 0.0167266748427303; --start-angle: 667.44; --end-angle: 727.44; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- Whorl 20 -->
        <g class="whorl" style="--start-scale: 0.0103343723981664; --end-scale: 0.0131471307358498; --start-angle: 704.52; --end-angle: 764.52; --start-opacity: 1; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
        
        <!-- This is the seed for the next animation cycle - initially invisible -->
        <g class="whorl" style="--start-scale: 0.008; --end-scale: 0.0103343723981664; --start-angle: 741.6; --end-angle: 801.6; --start-opacity: 0; --end-opacity: 1;">
            <use xlink:href="#whorl" />
        </g>
    </g>
    
    <div class="controls">
      <button id="play-pause">Play</button>
      <button id="reset">Reset</button>
    </div>
    </svg>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const whorls = document.querySelectorAll('.whorl');
      const playPauseBtn = document.getElementById('play-pause');
      const resetBtn = document.getElementById('reset');
      let isPlaying = false;
      
      // Function to toggle animation
      function toggleAnimation() {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
          whorls.forEach(whorl => {
            whorl.classList.add('animate');
          });
          playPauseBtn.textContent = 'Pause';
        } else {
          whorls.forEach(whorl => {
            whorl.classList.remove('animate');
          });
          playPauseBtn.textContent = 'Play';
        }
      }
      
      // Function to reset animation
      function resetAnimation() {
        whorls.forEach(whorl => {
          whorl.classList.remove('animate');
          // Trigger reflow to restart animation
          void whorl.offsetWidth;
        });
        
        if (isPlaying) {
          whorls.forEach(whorl => {
            whorl.classList.add('animate');
          });
        }
      }
      
      // Add animation end event listener to restart animation in a loop
      whorls[0].addEventListener('animationend', () => {
        if (isPlaying) {
          resetAnimation();
        }
      });
      
      // Event listeners for buttons
      playPauseBtn.addEventListener('click', toggleAnimation);
      resetBtn.addEventListener('click', resetAnimation);
    });
  </script>
</body>
</html>
`}
        </CodeBox>
    </Chapter>
);
