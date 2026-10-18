// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';

export default function PatternPage() {
  const [wasm, setWasm] = useState<any>(null);
  const [pattern, setPattern] = useState<string>('');
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [gridSize, setGridSize] = useState(3);
  const [loading, setLoading] = useState(true);

  // Load WASM module on mount
  useEffect(() => {
    const loadWasm = async () => {
      try {
        // Load the WASM file
        const wasmResponse = await fetch('/release.wasm');
        const wasmBuffer = await wasmResponse.arrayBuffer();
        
        // Instantiate with imports
        const wasmModule = await WebAssembly.instantiate(wasmBuffer, {
          env: {
            abort: (msg: any, file: any, line: any, column: any) => {
              console.error('abort called', { msg, file, line, column });
            }
          },
          // AssemblyScript runtime imports
          'wasi_snapshot_preview1': {
            proc_exit: () => {},
            fd_close: () => {},
            fd_seek: () => {},
            fd_write: () => {}
          }
        });
        
        setWasm(wasmModule.instance.exports);
        console.log('WASM loaded successfully!', wasmModule.instance.exports);
        
        // Test the add function if it exists
        if (wasmModule.instance.exports.add) {
          const result = wasmModule.instance.exports.add(2, 3);
          console.log('WASM test: 2 + 3 =', result);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Failed to load WASM:', error);
        setLoading(false);
      }
    };
    
    loadWasm();
  }, []);

  // Generate pattern when parameters change
  useEffect(() => {
    if (wasm && wasm.generatePattern) {
      try {
        // Call the WASM function
        const svgPtr = wasm.generatePattern(gridSize, scale, rotation, 512, 512);
        
        // Read string from WASM memory
        // This is simplified - in production you'd need proper string handling
        const memory = new Uint8Array(wasm.memory.buffer);
        let svgString = '';
        for (let i = svgPtr; memory[i] !== 0; i++) {
          svgString += String.fromCharCode(memory[i]);
        }
        
        setPattern(svgString);
      } catch (error) {
        console.error('Error generating pattern:', error);
        // Fallback pattern for testing
        setPattern(`
          <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
            <rect width="512" height="512" fill="#f0f0f0"/>
            <text x="256" y="256" text-anchor="middle" font-size="20">
              Pattern will appear here
            </text>
          </svg>
        `);
      }
    }
  }, [wasm, scale, rotation, gridSize]);

  if (loading) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Loading WASM Pattern Engine...</h1>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1>DNA-Patternity Pattern Test</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {/* Pattern Display */}
        <div>
          <h2>Pattern Preview</h2>
          <div 
            style={{ 
              border: '2px solid #333',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#fff'
            }}
            dangerouslySetInnerHTML={{ __html: pattern || '<p>Generating pattern...</p>' }}
          />
        </div>
        
        {/* Controls */}
        <div>
          <h2>Controls</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Grid Size: {gridSize}x{gridSize}
            </label>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={gridSize}
              onChange={(e) => setGridSize(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Scale: {scale.toFixed(1)}
            </label>
            <input 
              type="range" 
              min="0.5" 
              max="2" 
              step="0.1"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Rotation: {rotation}°
            </label>
            <input 
              type="range" 
              min="0" 
              max="360" 
              step="15"
              value={rotation}
              onChange={(e) => setRotation(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          
          <div style={{ 
            padding: '1rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            marginTop: '2rem'
          }}>
            <h3>WASM Status</h3>
            <p>Module: {wasm ? '✓ Loaded' : '✗ Not loaded'}</p>
            <p>Functions available:</p>
            <ul>
              {wasm && Object.keys(wasm).filter(k => typeof wasm[k] === 'function').map(fn => (
                <li key={fn}>{fn}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}