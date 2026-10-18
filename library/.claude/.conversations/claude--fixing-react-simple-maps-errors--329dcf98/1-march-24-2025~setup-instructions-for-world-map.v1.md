
# Setting Up the World Map Page

Follow these instructions to properly set up the world map component I've created.

## 1. Save the Map File

First, you need to download a TopoJSON file for the world map:

1. Download a world countries TopoJSON file from this URL: https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json

2. Save this file in your project's `/public` directory as `world-countries.json`

## 2. Install Dependencies

Make sure you have the required dependencies installed:

```bash
npm install react-simple-maps d3-geo
# or 
yarn add react-simple-maps d3-geo
```

## 3. Add the Map Page

1. Save the provided `world-basic.tsx` file in your `/pages/maps/` directory
2. This will automatically make it appear in your map index page because your index page is set up to dynamically find map files

## 4. Test the Page

1. Start your development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Navigate to `/maps` to see your index page with the new World Basic map listed
3. Click on the map to go to the detailed view

## How It Works

The page works by:
1. Loading the world map TopoJSON data from your public directory
2. Rendering it using react-simple-maps
3. Providing a simple, clean UI to view the map

The download buttons in the UI are currently placeholders. To make them functional, you would need to add logic to:
1. Export the map as SVG/PNG
2. Trigger a download

## Troubleshooting

If the map doesn't appear:
1. Check your browser console for errors
2. Make sure the TopoJSON file is in the correct location
3. Verify that all dependencies are installed

## Extending the Map

This is a minimal implementation. You can enhance it by:
1. Adding country highlighting on hover
2. Implementing the download functionality
3. Adding zoom and pan capabilities
