// src/App.tsx
import { useEffect, useState } from 'react'
import './App.css'
// Import the functions directly - they're already instantiated!
import { multiplyByTwo } from '../build/release.js'

function App() {
  const [wasmLoaded, setWasmLoaded] = useState(false)
  const [testResult, setTestResult] = useState<number>(0)

  useEffect(() => {
    // The WASM is already loaded when the module imports!
    try {
      const result = multiplyByTwo(21)
      setTestResult(result)
      setWasmLoaded(true)
    } catch (error) {
      console.error('Failed to use WASM:', error)
    }
  }, [])

  return (
    <div className="App">
      <h1>DNA-Patternity</h1>
      {wasmLoaded ? (
        <div>
          <p>âœ… WASM Loaded!</p>
          <p>Test: 21 Ã— 2 = {testResult}</p>
        </div>
      ) : (
        <p>Loading WASM...</p>
      )}
    </div>
  )
}

export default App