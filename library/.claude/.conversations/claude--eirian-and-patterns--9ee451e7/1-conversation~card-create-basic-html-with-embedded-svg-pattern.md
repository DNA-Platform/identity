# Card: Create Basic HTML with Embedded SVG Pattern

## Goal
Create a single HTML file that displays a tiled pattern using inline JavaScript and SVG.

## Implementation
Create `pattern.html`:
- Embed a simple SVG motif (triangle) directly in the HTML
- Use vanilla JavaScript to tile it 3x3
- Display on a canvas element
- Must work with `file://` protocol (no server)

## Structure
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Inline CSS */
    </style>
</head>
<body>
    <div id="pattern-canvas"></div>
    <script>
        // Motif embedded as string
        const motif = '<path d="M 0,10 L 5,0 L 10,10 Z"/>';
        
        // Tiling logic
        function createPattern(motif, gridSize) {
            // Generate SVG with tiled motif
        }
        
        // Render pattern
        document.getElementById('pattern-canvas').innerHTML = 
            createPattern(motif, 3);
    </script>
</body>
</html>
```

## Test
- Open pattern.html in browser directly
- Should see 3x3 grid of triangles
- No console errors
- Works offline

## Result
We have a working pattern viewer in a single HTML file!