import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Russian Language Wallpaper Pattern Visualization v11 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`${''}<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Russian Language Patterns</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: 'Georgia', serif;
      background-color: #f9f7f1;
      color: #333;
    }
    
    #container {
      position: relative;
      width: 100vw;
      height: 100vh;
    }
    
    svg {
      width: 100%;
      height: 100%;
    }
    
    .controls {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 100;
      max-width: 250px;
    }
    
    .letter-connection {
      fill: none;
      stroke-width: 1;
    }
    
    .letter-node {
      cursor: pointer;
    }
    
    .tooltip {
      position: absolute;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
      max-width: 200px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    select, button {
      margin: 5px 0;
      padding: 5px;
      width: 100%;
    }
    
    h3 {
      margin-top: 0;
      font-size: 16px;
    }
    
    .fade-text {
      opacity: 0.4;
    }
    
    input[type="range"] {
      width: 100%;
      margin: 10px 0;
    }
    
    label {
      display: block;
      margin-top: 10px;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div id="container">
    <!-- The SVG will be appended here -->
  </div>
  
  <div class`}
        </CodeBox>
    </Chapter>
);
