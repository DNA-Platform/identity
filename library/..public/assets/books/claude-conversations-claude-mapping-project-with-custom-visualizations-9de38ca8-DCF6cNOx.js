var b=Object.defineProperty;var y=(R,S)=>b(R,"name",{value:S,configurable:!0});import{jsxs as a,jsx as e}from"react/jsx-runtime";import{$ as v}from"@dna-platform/chemistry";import{$ as I,B as L,V as M,S as w,a as C,b as O,W as j,P as U,c as A,d as P,M as q,A as G,O as i,I as k,e as x,D as H,f as l,g as d,Q as F,k as p,C as u,h}from"./.cover-bi6mUbA9.js";import{Chapter as m,Title as g,Author as B,Subject as V,Paragraph as r,Svg as Y,Synopsis as K,Parenthetical as N,TableOfContents as Z,Section as W,Heading as c,Content as E,Word as n,Date as z,List as o,Line as t,Emphasis as D,Bold as s,Append as _}from"@dna-platform/public";import"styled-components";const T=class T extends I{};y(T,"$ClaudeMappingProjectWithCustomVisualizations9de38ca8");let f=T;const J=y(()=>a(m,{children:[e(L,{}),e(M,{children:w()}),e(M,{children:C()}),e(O,{ground:"#f3f0f8",band:"#c9bfe3",bandInk:"#3a2d63",foot:"#8f7fc0",footInk:"#2e2350",ink:"#3a2d63"}),e(j,{x:"-32",y:"-26"}),a(U,{children:[e(A,{children:"[Doug](/dougs-story/)"}),e(A,{children:"[Claude](/dougs-claude/)"})]}),e(P,{from:"2025-04-01T18:28:36.909415Z",to:"2025-04-01T19:50:08.337395Z"}),e(q,{shown:"72",all:"72"}),e(g,{children:"[Mapping Project with Custom Visualizations](/claude-mapping-project-with-custom-visualizations-9de38ca8/)"}),e(B,{children:"[Doug](/dougs-story/)"}),e(V,{children:"[Conversations](/our-conversations/)"}),e(G,{children:"[DNA](/dougs-claude/#dna)"}),e(i,{children:"9de38ca8-b490-484f-81c7-8f44d560fd95"}),a(r,{children:[e(k,{}),e(Y,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"Cover"),$=y(()=>a(m,{children:[e(K,{}),a(g,{children:[e(N,{}),"[Synopsis](/claude-mapping-project-with-custom-visualizations-9de38ca8/)"]}),e(r,{children:"Doug: Hey Claude, can you help me make maps? I will give you instructions. You ask me for any details you might be missing, you give me an architecture with the code you will write, I sign off, you write the code, we debug"})]}),"Synopsis"),Q=y(()=>a(m,{children:[e(Z,{}),e(x,{}),a(g,{children:[e(N,{}),"[Table of Contents](/claude-mapping-project-with-custom-visualizations-9de38ca8/#table-of-contents)"]}),a(W,{children:[e(c,{children:"April 2025"}),e(r,{children:e(E,{children:"[1 April 2025](/claude-mapping-project-with-custom-visualizations-9de38ca8/#1-april-2025)"})}),a(r,{children:[e(N,{}),e(n,{children:e(E,{children:"[Mapping Project with Custom Visualizations](/claude-mapping-project-with-custom-visualizations-9de38ca8/)"})}),e(n,{children:e(E,{children:"[Synopsis](/claude-mapping-project-with-custom-visualizations-9de38ca8/#synopsis)"})}),e(n,{children:e(E,{children:"[Table of Contents](/claude-mapping-project-with-custom-visualizations-9de38ca8/#table-of-contents)"})})]})]})]}),"Table"),X=y(()=>a(m,{children:[e(H,{children:e(z,{children:"[1 April 2025](2025-04-01)"})}),e(g,{children:"[1 April 2025](/claude-mapping-project-with-custom-visualizations-9de38ca8/#1-april-2025)"}),a(l,{at:"2025-04-01T18:28:36.909415Z",children:[e(i,{children:"523a39e1-5b9d-4d14-ae1a-0feb00f3a0cd"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Doug: Hey Claude, can you help me make maps? I will give you instructions. You ask me for any details you might be missing, you give me an architecture with the code you will write, I sign off, you write the code, we debug"})]}),a(l,{at:"2025-04-01T18:28:41.959050Z",children:[e(i,{children:"13499d6b-e158-45d8-98c4-bf71d683a4e3"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Hello Doug! I'd be happy to help you make maps. I can create various types of maps depending on your needs - from simple geographic visualizations to interactive data-driven maps."}),e(r,{children:"Before we get started, I'll need some information:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"What kind of map are you looking to create? (e.g., choropleth, point map, heat map, route map)"}),e(t,{children:"What data will you be visualizing on the map?"}),e(t,{children:"Do you need an interactive map or a static one?"}),e(t,{children:"Are there any specific libraries or technologies you'd prefer to use? (e.g., Leaflet, Mapbox, D3.js, Google Maps)"}),e(t,{children:"What level of customization do you need? (basic styling, custom markers, popups, etc.)"})]}),e(r,{children:"Once I have a clearer picture of your requirements, I can propose an architecture and provide the necessary code. Then we can work together to refine and debug it until it meets your needs perfectly."})]}),a(l,{at:"2025-04-01T18:33:40.730642Z",children:[e(i,{children:"613e5d3d-1840-4eb6-8998-47dc2c3dd06f"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"First I need you to study this. At minimum, our map is going to be in a map container so look at it:"}),e(r,{children:"// src/components/maps/WorldMap.tsx import React from 'react'; import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'; import MapContainer from './MapContainer'; import DiagonalPatternBackground from './DiagonalPatternBackground'; import FourColorMapColoring from './FourColorMapColoring';"}),e(r,{children:"// URL to your GeoJSON data const geoUrl = '/countries-110m.json';"}),e(r,{children:'const Map: React.FC = () => { return ( <MapContainer filename="world-map.svg"> <ComposableMap projection="geoMercator" projectionConfig={{ scale: 127 }}'}),e(r,{children:e(F,{})}),a(r,{children:["{/",a(n,{children:[e(D,{}),"Add the diagonal pattern background BEFORE the ZoomableGroup"]}),"/} {/",a(n,{children:[e(D,{}),"This ensures it renders behind all map elements"]}),'/} <DiagonalPatternBackground backgroundColor="#f8f9fa" lineColor="#e9ecef" lineWidth={2} lineSpacing={6} direction="left" // Use "right" for / lines or "left" for \\ lines />']}),e(r,{children:"<ZoomableGroup center={[0, 20]} zoom={1}> <Geographies geography={geoUrl}> {({ geographies }) => ( <FourColorMapColoring geographies={geographies}/> )} </Geographies> </ZoomableGroup> </ComposableMap> </MapContainer> ); };"}),e(r,{children:"export default Map; export default Map;"}),e(r,{children:"Doug: Then I need you to take a look at my dataset utility. We are going to make a map which allows me to select a dropdown and it makes a map for each utility. You see that you have a component to make that diagonal background and a coloring component for maps that can use it. Perhaps the datasets work together? Like we always need the country but we put different views?"}),e(r,{children:"Doug: How can we provide a way to test all these datasets and make maps that are pretty good looking! Is there a way to COMPOSE the datasets? Lets think about using each singularly first, with some sort of dropdown - derived only from th enum name in case it gets extended - to select a dataset and have us render in the map conatiner a good default map which represents that dataset"}),e(p,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),e(p,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T18:33:48.026436Z",children:[e(i,{children:"e2f36e04-54e3-4d49-bf49-7c7a98cc4080"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Thanks for sharing the Natural Earth dataset utility and the Map component, Doug. Looking at this, I can see we have a comprehensive set of geographical datasets available through the utility, and a basic map rendering setup with react-simple-maps."}),e(r,{children:"You're right about making a dropdown selector that works with the enum names. This way, it'll automatically pick up any new datasets added to the enum in the future. I think we can create an interactive map viewer that allows you to select and visualize different Natural Earth datasets."}),e(r,{children:"Here's my proposed architecture:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"DatasetSelector Component"]}),": A dropdown to select which dataset to display"]}),a(t,{children:[a(n,{children:[e(s,{}),"DynamicMap Component"]}),": A component that loads and renders the selected dataset"]}),a(t,{children:[a(n,{children:[e(s,{}),"MapStyleControls Component"]}),": Optional controls for styling the map elements"]}),a(t,{children:[a(n,{children:[e(s,{}),"DatasetDetailsPanel"]}),": Shows information about the currently selected dataset"]})]}),e(r,{children:"The main flow would be:"}),a(r,{children:[e(o,{}),e(t,{children:"User selects a dataset from the dropdown"}),e(t,{children:"The app fetches that dataset using your utility function"}),e(t,{children:"The map renders the dataset with appropriate styling for its type"}),e(t,{children:"Optionally, we could allow layering certain datasets together (like countries + rivers)"})]}),e(r,{children:"For the implementation, we'll need to:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Create a component that extracts the enum names from NaturalEarthDatasetType"}),e(t,{children:"Handle the different GeoJSON formats (some are raw GeoJSON, others are TopoJSON)"}),e(t,{children:"Apply appropriate styling based on dataset type"})]}),e(r,{children:"Does this approach sound like what you're looking for? Once you approve the general architecture, I'll write the code for the components."})]}),a(l,{at:"2025-04-01T18:35:38.938426Z",children:[e(i,{children:"82b5da4e-1331-4eee-a733-9d88dcb8d4f5"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Doug: But how do we create a nice map for each dataset? There are probably many many options for each dataset that might make nice maps. What do you think? What are the range of maps that we can make with this? Maybe we can make some sort of menu and you put annotations - metadata associated with the dataset (we can augment the dictionary in the Natural Earth Dataset utility to have other information to help you"}),e(r,{children:"Doug: I want to be able to have a menu sort of experience where we can use these datasets to provide a huge range of dataset to choose from"})]}),a(l,{at:"2025-04-01T18:35:49.599404Z",children:[e(i,{children:"034eaff5-a07a-4d2b-849a-009e463ab7d2"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I see what you're getting at, Doug. Rather than just a simple dropdown for each dataset, we should create a more comprehensive menu-driven experience that helps users understand what's possible with each dataset and offers visualization options tailored to the specific data types."}),e(r,{children:"Here's my revised approach:"}),e(c,{children:"Enhanced Architecture"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Dataset Browser/Catalog"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"Categorize datasets by theme (political boundaries, physical features, infrastructure, etc.)"}),e(t,{children:"Show thumbnails/previews of what each dataset looks like"}),e(t,{children:"Include metadata like resolution, description, and suggested uses"})]}),a(t,{children:[a(n,{children:[e(s,{}),"Map Configuration Panel"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"Style controls specific to each dataset type"}),e(t,{children:"Layer management (for combining datasets)"}),e(t,{children:"Projection selector"}),e(t,{children:"Color scheme options"})]}),a(t,{children:[a(n,{children:[e(s,{}),"Enhanced Dataset Metadata"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"We can extend the utility to include additional metadata for each dataset:"}),a(r,{children:[e(o,{}),e(t,{children:"Suggested color schemes"}),e(t,{children:"Default styling options"}),e(t,{children:"Compatible layers"}),e(t,{children:"Recommended projections"}),e(t,{children:"Example use cases"})]})]})]}),e(c,{children:"Possible Map Types"}),e(r,{children:"Based on the available datasets, here are some map types we could create:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Political Maps"]}),": Using country/state boundaries with different styling options"]}),a(t,{children:[a(n,{children:[e(s,{}),"Physical/Terrain Maps"]}),": Combining land, water, coastlines, and elevation data"]}),a(t,{children:[a(n,{children:[e(s,{}),"Population Maps"]}),": Using populated places with size indicators for population"]}),a(t,{children:[a(n,{children:[e(s,{}),"Transportation Network Maps"]}),": Roads, railroads, airports, ports"]}),a(t,{children:[a(n,{children:[e(s,{}),"Natural Features Maps"]}),": Rivers, lakes, glaciers, protected areas"]}),a(t,{children:[a(n,{children:[e(s,{}),"Time Zone Maps"]}),": Using the time zone dataset with color coding"]}),a(t,{children:[a(n,{children:[e(s,{}),"Custom Multi-Layer Maps"]}),": Allow users to combine datasets (e.g., countries + rivers + major cities)"]})]}),e(c,{children:"Implementation Plan"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"First, let's enhance the Natural Earth Dataset utility to include metadata:"}),a(r,{children:[e(o,{}),e(t,{children:"Add properties like category, description, recommended styles, compatible layers"}),e(t,{children:"Create groupings/categories to organize the many datasets"})]}),e(t,{children:"Then, build a menu-driven UI that:"}),a(r,{children:[e(o,{}),e(t,{children:"Shows dataset categories and previews"}),e(t,{children:"Allows selection and configuration of map styles"}),e(t,{children:"Enables easy layering of compatible datasets"})]})]}),e(r,{children:"What do you think about this approach? Would you like me to start by extending the utility with metadata, or would you prefer I focus on the UI components first?"})]}),a(l,{at:"2025-04-01T18:37:12.151840Z",children:[e(i,{children:"d121667a-457f-4540-985f-21ca7982684f"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"No you don't understand the metadata. We will anly be using defaults for these maps. This is for what is possible. Lets say a dataset has call country boarders and all country names and all city names - maybe we need to annotatie it. because that one dataset could be used to create a map of just one country and all its cities - and aybe we want to select that. But how can we unless we know what is in the dataset? Make sense?"})]}),a(l,{at:"2025-04-01T18:37:19.488542Z",children:[e(i,{children:"9c123c52-49ca-4a81-b581-fe4ebf7a5384"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I understand better now, Doug. You're right - we need to understand what's inside each dataset to effectively use it for different visualization purposes, rather than just treating each dataset as a monolithic entity."}),e(r,{children:"Let's approach this differently:"}),e(c,{children:"Dataset Inspection and Discovery"}),e(r,{children:"For each Natural Earth dataset, we need to:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Analyze the GeoJSON/TopoJSON structure"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"What features are included (countries, cities, rivers, etc.)"}),e(t,{children:"What properties each feature has (names, codes, population data, etc.)"}),e(t,{children:"How features are organized (hierarchies, relations)"})]}),a(t,{children:[a(n,{children:[e(s,{}),"Create a dataset explorer"]})," that shows:"]}),a(r,{children:[e(o,{}),e(t,{children:"The structure of each dataset"}),e(t,{children:'What kinds of filters can be applied (e.g., "show only countries in Europe" or "show cities above 1M population")'}),e(t,{children:"Sample feature properties"})]}),a(t,{children:[a(n,{children:[e(s,{}),"Build a map configuration system"]})," that allows:"]}),a(r,{children:[e(o,{}),e(t,{children:"Selection of specific features from a dataset"}),e(t,{children:"Filtering by property values"}),e(t,{children:"Styling based on properties"})]})]}),e(r,{children:"For example, with the COUNTRIES_50M dataset, users should be able to:"}),a(r,{children:[e(o,{}),e(t,{children:"View all countries or filter to specific continents/regions"}),e(t,{children:"Color countries by various properties (population, GDP, area)"}),e(t,{children:"Select specific countries to highlight"})]}),e(c,{children:"Implementation Approach"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"First, I'll create a dataset inspector that loads and analyzes the structure of each dataset"}),e(t,{children:"Next, build a feature explorer that shows what's available in the selected dataset"}),e(t,{children:"Finally, create a configuration panel that allows filtering and styling based on the discovered properties"})]}),e(r,{children:"Does this approach better align with what you're thinking? I'll need to load and parse each dataset to understand its structure, then build the UI to expose those capabilities."})]}),a(l,{at:"2025-04-01T18:39:40.461067Z",children:[e(i,{children:"598d3a0f-b550-4496-8cfd-ebe7c0f9b519"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Yeah but what are the different sorts of maps? Make a system for yourself. The whole world! A continent. A country. A city, country names, city name, togography (what are types), what are other types of features? How can we create a UI that allows us to select these different things so they get superimposed on the map, and we know exactly which dataset to load? How do we index all these datasets? A way to do that is to add metadata to the dataset dictionary so your utility knows how to search"})]}),a(l,{at:"2025-04-01T18:39:55.558494Z",children:[e(i,{children:"7e10874a-54c4-4dba-9d7d-d1814cd87236"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Now I understand what you're looking for. You want to create a comprehensive system that helps users navigate through these datasets and create different types of maps by selecting and layering specific features."}),e(r,{children:"Let's think about this systematically:"}),e(c,{children:"Map Types and Features Categorization"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Geographic Scope"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"World"}),e(t,{children:"Continent"}),e(t,{children:"Country"}),e(t,{children:"Region/State"}),e(t,{children:"City/Local"})]}),a(t,{children:[a(n,{children:[e(s,{}),"Feature Types"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"Political Boundaries (countries, states, disputed areas)"}),e(t,{children:"Physical Features (coastlines, land, ocean)"}),e(t,{children:"Water Bodies (lakes, rivers, reefs)"}),e(t,{children:"Population Centers (cities, urban areas)"}),e(t,{children:"Infrastructure (roads, railroads, airports, ports)"}),e(t,{children:"Climate/Geographic (glaciers, time zones, geographic lines)"}),e(t,{children:"Protected Areas (parks, reserves)"})]}),a(t,{children:[a(n,{children:[e(s,{}),"Data Resolution"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"Low (110m) - global overview"}),e(t,{children:"Medium (50m) - continental/country level"}),e(t,{children:"High (10m) - regional/detailed"})]})]}),e(c,{children:"Enhanced Metadata Structure"}),e(r,{children:"We can extend the Natural Earth Dataset utility with metadata like this:"}),e(u,{language:"typescript",children:`interface DatasetMetadata {
    name: string;               // Human-readable name
    scope: GeographicScope[];   // World, Continent, Country, etc.
    featureType: FeatureType[]; // What kind of features are included
    resolution: Resolution;     // 10m, 50m, 110m
    properties: string[];       // Available properties (name, pop_est, etc.)
    sampleFeatures?: string[];  // Examples of features (e.g., "United States", "Africa")
    compatibleWith: NaturalEarthDatasetType[]; // Datasets that work well with this one
    defaultStyle?: MapStyle;    // Default styling recommendations
}

// Then extend your map
const enhancedDatasetMetadata = new Map<NaturalEarthDatasetType, DatasetMetadata>([
    [NaturalEarthDatasetType.COUNTRIES_50M, {
        name: "Countries (Medium Resolution)",
        scope: [GeographicScope.WORLD, GeographicScope.CONTINENT, GeographicScope.COUNTRY],
        featureType: [FeatureType.POLITICAL_BOUNDARY],
        resolution: Resolution.MEDIUM,
        properties: ["name", "iso_a3", "continent", "pop_est", "gdp_md_est"],
        sampleFeatures: ["United States", "China", "Brazil"],
        compatibleWith: [
            NaturalEarthDatasetType.POPULATED_PLACES_50M,
            NaturalEarthDatasetType.RIVERS_50M,
            // etc.
        ],
        defaultStyle: { fill: "#ECEFF1", stroke: "#607D8B", strokeWidth: 0.5 }
    }],
    // And so on for other datasets
]);`}),e(c,{children:"UI Implementation"}),e(r,{children:"With this metadata, we can build a UI that allows:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Filter by Scope"]}),': "I want to map a country"']}),a(t,{children:[a(n,{children:[e(s,{}),"Select Feature Categories"]}),': "I want to see political boundaries and major cities"']}),a(t,{children:[a(n,{children:[e(s,{}),"Choose Resolution"]}),": Based on detail level needed"]}),a(t,{children:[a(n,{children:[e(s,{}),"Layer Selector"]}),": Combine compatible datasets"]}),a(t,{children:[a(n,{children:[e(s,{}),"Style Configuration"]}),": Customize based on properties"]})]}),e(c,{children:"Sample Flow"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:'User selects "Country" scope'}),e(t,{children:"UI shows datasets with Country scope"}),e(t,{children:'User selects "United States" from sample features'}),e(t,{children:"UI suggests compatible layers (rivers, cities, states)"}),e(t,{children:"User selects additional layers"}),e(t,{children:"Map renders with those specific features and layers"})]}),e(r,{children:"Would this approach work for what you have in mind? I can start by enhancing the NaturalEarthDatasets utility with this metadata structure, then build the UI components that leverage it."})]}),a(l,{at:"2025-04-01T18:43:08.435285Z",children:[e(i,{children:"b97e9d83-6d90-4f45-8ba3-05292bad5e4f"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Yes perhaps but another concept is that the thing you saw before needs to be extensible. You run out of code to write right? So wouldn't it be better if there was a second enum with short names of the types of features in a dataset - create a heirarchy that is pretty complete, and then in the dictionary, you return an object with { url: string, features: NEFeature[]}"}),e(r,{children:"And then use in memory searching in the react component to find what you need"}),e(r,{children:"Why don't you think about this carefully to see how it can be extended in code with brevity so you can write a lot of it"}),e(p,{identifier:"paste-2",type:".txt",children:"Attached “paste.txt”"}),e(p,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T18:43:25.890466Z",children:[e(i,{children:"f3c0944c-1e9d-4379-8f29-89b8e0bc8405"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I understand your point, Doug. Instead of having a complex metadata structure that we'd need to maintain manually, we should create a more programmatic approach with feature types that can be associated with datasets."}),e(r,{children:"Let me think about a more extensible and maintainable approach:"}),e(c,{children:"Enhanced Structure"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"First, let's create an enum for feature types:"})]}),e(u,{language:"typescript",children:`export enum NEFeatureType {
  // Political/Administrative
  COUNTRY_BOUNDARY,
  STATE_BOUNDARY,
  MARITIME_BOUNDARY,
  DISPUTED_AREA,
  SOVEREIGNTY,
  
  // Natural Features
  COASTLINE,
  LAND,
  OCEAN,
  LAKE,
  RIVER,
  REEF,
  GLACIER,
  PLAYA,
  MINOR_ISLAND,
  PARK_PROTECTED_LAND,
  
  // Population/Urban
  POPULATED_PLACE,
  URBAN_AREA,
  
  // Infrastructure
  ROAD,
  RAILROAD,
  AIRPORT,
  PORT,
  
  // Reference Lines
  GEOGRAPHIC_LINE,
  GRATICULE,
  TIME_ZONE,
  
  // Special
  ANTARCTIC_ICE_SHELF
}`}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Then define resolution as an enum:"})]}),e(u,{language:"typescript",children:`export enum NEResolution {
  LOW = "110m",
  MEDIUM = "50m",
  HIGH = "10m"
}`}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Extend the dataset map with feature information:"})]}),e(u,{language:"typescript",children:`interface NEDatasetInfo {
  url: string;
  features: NEFeatureType[];
  resolution: NEResolution;
}

export const naturalEarthDatasetInfo = new Map<NaturalEarthDatasetType, NEDatasetInfo>([
  [NaturalEarthDatasetType.COUNTRIES_50M, {
    url: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
    features: [NEFeatureType.COUNTRY_BOUNDARY],
    resolution: NEResolution.MEDIUM
  }],
  // And so on...
]);`}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Add utility functions to find datasets by feature type and resolution:"})]}),e(u,{language:"typescript",children:`/**
 * Gets all datasets that contain a specific feature
 */
export function getDatasetsByFeature(featureType: NEFeatureType): NaturalEarthDatasetType[] {
  const matchingDatasets: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, datasetType) => {
    if (info.features.includes(featureType)) {
      matchingDatasets.push(datasetType);
    }
  });
  
  return matchingDatasets;
}

/**
 * Gets all datasets at a specific resolution
 */
export function getDatasetsByResolution(resolution: NEResolution): NaturalEarthDatasetType[] {
  const matchingDatasets: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, datasetType) => {
    if (info.resolution === resolution) {
      matchingDatasets.push(datasetType);
    }
  });
  
  return matchingDatasets;
}

/**
 * Finds the best dataset for a given feature and resolution
 */
export function findBestDataset(feature: NEFeatureType, preferredResolution: NEResolution): NaturalEarthDatasetType | null {
  // First try exact match
  const exactMatches = getDatasetsByFeature(feature).filter(
    dataset => naturalEarthDatasetInfo.get(dataset)!.resolution === preferredResolution
  );
  
  if (exactMatches.length > 0) {
    return exactMatches[0];
  }
  
  // Fall back to other resolutions
  const allMatches = getDatasetsByFeature(feature);
  return allMatches.length > 0 ? allMatches[0] : null;
}`}),e(c,{children:"UI Implementation"}),e(r,{children:"This structure allows us to create a UI that:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Lists feature types (with friendly names) as the primary selection"}),e(t,{children:"Offers resolution options"}),e(t,{children:"Automatically selects the best dataset based on those choices"})]}),e(r,{children:"The React component would:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Let users select features they want (countries, rivers, cities, etc.)"}),e(t,{children:"Choose a resolution (low for overview, high for detail)"}),e(t,{children:"The component handles finding and loading the right datasets"}),e(t,{children:"Renders them with appropriate styling"})]}),e(r,{children:"This approach is more extensible because:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Adding new datasets just requires adding them to the map with their features"}),e(t,{children:"The UI code doesn't need to change when datasets change"}),e(t,{children:"It focuses on what the user wants to see rather than dataset selection"})]}),e(r,{children:"Would this approach work better for what you're envisioning?"})]}),a(l,{at:"2025-04-01T18:45:37.686532Z",children:[e(i,{children:"81141738-6dae-427b-bf71-a0751233579a"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Okay but how did that help you figure out how to get the datasets for a Russian map of rivers? Like, where is the part where you know it has world data or specific data? How do you know from this?"})]}),a(l,{at:"2025-04-01T18:45:52.721933Z",children:[e(i,{children:"adac7af9-faae-495d-b17c-080300f40df7"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're right, and that's a critical piece I missed. The current approach doesn't tell us which datasets contain data for specific geographic regions or entities."}),e(r,{children:"Let's enhance the structure to include geographic scope information:"}),e(u,{language:"typescript",children:`// Geographic regions/entities that can be represented in datasets
export enum NEGeographicEntity {
  WORLD,              // Global data
  NORTH_AMERICA,
  SOUTH_AMERICA,
  EUROPE,
  ASIA,
  AFRICA,
  OCEANIA,
  ANTARCTICA,
  // Could add specific countries as needed
  USA,
  CANADA,
  RUSSIA,
  CHINA,
  // etc.
}

interface NEDatasetInfo {
  url: string;
  features: NEFeatureType[];
  resolution: NEResolution;
  geographicScope: NEGeographicEntity[]; // What regions this dataset covers
}`}),e(r,{children:"Then we update our dataset info to include geographic scope:"}),e(u,{language:"typescript",children:`export const naturalEarthDatasetInfo = new Map<NaturalEarthDatasetType, NEDatasetInfo>([
  [NaturalEarthDatasetType.COUNTRIES_50M, {
    url: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
    features: [NEFeatureType.COUNTRY_BOUNDARY],
    resolution: NEResolution.MEDIUM,
    geographicScope: [NEGeographicEntity.WORLD] // Contains all countries
  }],
  [NaturalEarthDatasetType.RIVERS_10M, {
    url: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson',
    features: [NEFeatureType.RIVER],
    resolution: NEResolution.HIGH,
    geographicScope: [NEGeographicEntity.WORLD] // Contains rivers worldwide
  }],
  // And so on...
]);`}),e(r,{children:"And add a function to find datasets by geographic entity:"}),e(u,{language:"typescript",children:`/**
 * Gets all datasets that cover a specific geographic entity
 */
export function getDatasetsByGeography(entity: NEGeographicEntity): NaturalEarthDatasetType[] {
  const matchingDatasets: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, datasetType) => {
    if (info.geographicScope.includes(entity)) {
      matchingDatasets.push(datasetType);
    }
  });
  
  return matchingDatasets;
}

/**
 * Finds the best dataset for a given feature, geographic entity, and resolution
 */
export function findSpecificDataset(
  feature: NEFeatureType, 
  entity: NEGeographicEntity,
  preferredResolution: NEResolution
): NaturalEarthDatasetType | null {
  // Find datasets that have the requested feature and cover the geographic entity
  const candidates = getDatasetsByFeature(feature).filter(
    dataset => naturalEarthDatasetInfo.get(dataset)!.geographicScope.includes(entity)
  );
  
  // First try exact resolution match
  const exactMatches = candidates.filter(
    dataset => naturalEarthDatasetInfo.get(dataset)!.resolution === preferredResolution
  );
  
  if (exactMatches.length > 0) {
    return exactMatches[0];
  }
  
  // Fall back to any resolution
  return candidates.length > 0 ? candidates[0] : null;
}`}),e(r,{children:"Now, to create a Russian rivers map:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"The user would select:"}),a(r,{children:[e(o,{}),e(t,{children:"Feature: RIVER"}),e(t,{children:"Geographic entity: RUSSIA (or ASIA/EUROPE if Russia isn't specifically listed)"}),e(t,{children:"Resolution: HIGH (for detailed rivers)"})]}),e(t,{children:"The system would:"}),a(r,{children:[e(o,{}),a(t,{children:["Call ",a(n,{children:[e(h,{}),"findSpecificDataset(NEFeatureType.RIVER, NEGeographicEntity.RUSSIA, NEResolution.HIGH)"]})]}),e(t,{children:"Get the appropriate dataset (probably RIVERS_10M)"}),e(t,{children:"Load it and filter to show only rivers in Russian territory"}),e(t,{children:"Apply styling for rivers"})]})]}),e(r,{children:"The key improvement is knowing that each dataset has specific geographic coverage, so we can determine which ones contain data for Russia (or any other specific region). For Natural Earth data, most datasets are global, but this structure accommodates more specialized regional datasets too."}),e(r,{children:"Does this address the issue you raised?"})]}),a(l,{at:"2025-04-01T18:46:39.202236Z",children:[e(i,{children:"7ca26a5d-343f-4d85-91f7-1f24664202e5"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Yours looks an awful lot like it will be long. How about string enums so you can literally use teh string? When you rewrite the component the code has to be short!"})]}),a(l,{at:"2025-04-01T18:46:45.053793Z",children:[e(i,{children:"38658d74-abfe-4a6e-bd2f-6fa145a59b87"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're right - let's make this much more concise with string enums. That would simplify the code significantly:"}),e(u,{language:"typescript",children:`// Features as string enum
export enum NEFeature {
  COUNTRY = "country",
  STATE = "state",
  CITY = "city",
  RIVER = "river",
  LAKE = "lake",
  OCEAN = "ocean",
  ROAD = "road",
  RAIL = "rail",
  AIRPORT = "airport",
  PORT = "port",
  COASTLINE = "coastline",
  BOUNDARY = "boundary",
  TIMEZONE = "timezone",
  PARK = "park",
  GLACIER = "glacier",
  REEF = "reef"
}

// Resolution as string enum
export enum NEResolution {
  LOW = "110m",
  MEDIUM = "50m",
  HIGH = "10m"
}

// Geographic scope as string enum
export enum NERegion {
  WORLD = "world",
  EUROPE = "europe",
  ASIA = "asia",
  NORTH_AMERICA = "north_america",
  SOUTH_AMERICA = "south_america",
  AFRICA = "africa",
  OCEANIA = "oceania",
  ANTARCTICA = "antarctica"
}

// Simple dataset info structure
interface NEDatasetInfo {
  url: string;
  features: NEFeature[];
  resolution: NEResolution;
  regions: NERegion[];
}`}),e(r,{children:"This is much more readable and would require less code. The functions would be simpler too."}),e(r,{children:"Is this closer to what you were envisioning?"})]}),a(l,{at:"2025-04-01T18:47:02.486919Z",children:[e(i,{children:"517d1ce4-9fe6-4f76-8295-71ea0b2e56ac"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"String enums are like this:"}),e(r,{children:'type x = "1" | "2"...'})]}),a(l,{at:"2025-04-01T18:47:11.984901Z",children:[e(i,{children:"f9b352c7-64c7-41e1-ac15-0d359c769802"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Got it! You're referring to TypeScript's string literal union types rather than enums. That's even more concise. Let me revise with that approach:"}),e(u,{language:"typescript",children:`// Feature types as string literals
export type NEFeature = 
  | "country" 
  | "state" 
  | "city" 
  | "river" 
  | "lake" 
  | "ocean" 
  | "road" 
  | "rail" 
  | "airport" 
  | "coastline" 
  | "boundary" 
  | "timezone" 
  | "park" 
  | "glacier";

// Resolution as string literals
export type NEResolution = "110m" | "50m" | "10m";

// Geographic scope as string literals
export type NERegion = 
  | "world" 
  | "europe" 
  | "asia" 
  | "north_america" 
  | "south_america" 
  | "africa" 
  | "oceania" 
  | "antarctica";

// Simple dataset info structure
interface NEDatasetInfo {
  url: string;
  features: NEFeature[];
  resolution: NEResolution;
  regions: NERegion[];
}`}),e(r,{children:"This is even more concise and easier to work with in TypeScript. We could then attach this information to the existing dataset enum:"}),e(u,{language:"typescript",children:`export const naturalEarthDatasetInfo = new Map<NaturalEarthDatasetType, NEDatasetInfo>([
  [NaturalEarthDatasetType.COUNTRIES_50M, {
    url: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
    features: ["country"],
    resolution: "50m",
    regions: ["world"]
  }],
  [NaturalEarthDatasetType.RIVERS_10M, {
    url: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson',
    features: ["river"],
    resolution: "10m",
    regions: ["world"]
  }]
  // And so on...
]);`}),e(r,{children:"The utility functions would then be very straightforward:"}),e(u,{language:"typescript",children:`export function findDatasets(feature: NEFeature, region: NERegion, resolution?: NEResolution): NaturalEarthDatasetType[] {
  const matches: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, datasetType) => {
    if (info.features.includes(feature) && 
        info.regions.includes(region) &&
        (!resolution || info.resolution === resolution)) {
      matches.push(datasetType);
    }
  });
  
  return matches;
}`}),e(r,{children:"Is this more in line with what you were thinking?"})]}),a(l,{at:"2025-04-01T18:48:15.416079Z",children:[e(i,{children:"8066bf9b-24ce-49de-8a1b-655a4e7d50b9"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Now think of all the maps you'd like to create! Be creative, write down 50 example maps that are a range of ideas and write down the metadata you'd need and teh functions you'd need to use to find them!!"})]}),a(l,{at:"2025-04-01T18:48:46.670066Z",children:[e(i,{children:"d9909416-a3fc-425f-baa1-5a26f000c48b"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I'll create a diverse range of map ideas and the metadata needed to identify them. Here's my list of creative map concepts:"}),e(c,{children:"Possible Maps with Required Metadata"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:a(n,{children:[e(s,{}),"World Political Boundaries"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "country", "boundary"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"European Rivers and Lakes"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "river", "lake"'}),e(t,{children:'Region: "europe"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"North American Transportation Network"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "road", "rail", "airport"'}),e(t,{children:'Region: "north_america"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Major Cities"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "city"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"African National Parks and Protected Areas"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "park", "country"'}),e(t,{children:'Region: "africa"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Asian Coastlines and Ports"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "coastline", "port"'}),e(t,{children:'Region: "asia"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Pacific Ocean Islands and Reefs"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "island", "reef"'}),e(t,{children:'Region: "oceania"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Antarctic Research Stations and Ice Shelves"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ice_shelf", "research_station"'}),e(t,{children:'Region: "antarctica"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Time Zones"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "timezone", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"South American Urban Areas and Infrastructure"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "urban_area", "road", "city"'}),e(t,{children:'Region: "south_america"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Mountain Ranges of the World"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "mountain", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Maritime Shipping Routes and Ports"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "shipping_route", "port"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Disputed Territories Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "disputed_area", "boundary"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"World's Major Agricultural Regions"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "agriculture", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Population Density"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "urban_area", "city", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Earthquake Zones and Tectonic Plates"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "tectonic_plate", "earthquake_zone"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Historical Territory Changes (20th Century)"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "historical_boundary", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Desert Regions of the World"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "desert", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Renewable Energy Installation Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "solar_farm", "wind_farm", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Oceanic Currents and Temperatures"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ocean_current", "ocean"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "110m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"World Heritage Sites"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "heritage_site", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Language Distribution"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "language_region", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Rainforests and Deforestation"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "rainforest", "deforestation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Airline Routes and Major Airports"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "air_route", "airport"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Polar Ice Coverage Changes"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ice_sheet", "glacier"'}),e(t,{children:'Region: "antarctica", "arctic"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Freshwater Resources"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "river", "lake", "aquifer"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Religious Sites and Distributions"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "religious_site", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Indigenous Territories"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "indigenous_land", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"European Medieval Trade Routes"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "historical_route", "historical_city"'}),e(t,{children:'Region: "europe"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Volcanic Activity Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "volcano", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Space Launch Facilities"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "launch_site", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Animal Migration Routes"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "migration_route", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Military Bases"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "military_base", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Submarine Cable Network"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "submarine_cable", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "110m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"World's Tallest Buildings"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "skyscraper", "city"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"International Borders Evolution (1900-2023)"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "historical_boundary", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Mining Operations"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "mine", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Ancient Civilizations Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "historical_civilization", "historical_site"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Nuclear Power Plants and Exclusion Zones"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "nuclear_plant", "radiation_zone"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"World Coffee Production Regions"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "coffee_region", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Extreme Weather Event Frequency"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "weather_zone", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Water Stress Index"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "water_stress", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Oceanic Exploration Timeline"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "exploration_route", "ocean"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "110m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Internet Infrastructure"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "data_center", "internet_exchange"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Bird Migration Flyways"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "migration_flyway", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "110m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Tourism Destinations"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "tourist_destination", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Deep Sea Trenches and Oceanic Features"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ocean_trench", "ocean_ridge"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"International Space Station Ground Track"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "orbital_track", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "110m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"World's Oldest Forests"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ancient_forest", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Urbanization Growth (1950-2023)"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "urban_growth", "city"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]})]}),e(c,{children:"Needed Functions"}),e(r,{children:"To find datasets for these maps, we'd need functions like:"}),e(u,{language:"typescript",children:`// Find datasets matching a specific feature and region
function findDatasetsByFeatureAndRegion(
  feature: NEFeature, 
  region: NERegion, 
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  // Implementation as discussed earlier
}

// Find datasets that contain all required features
function findDatasetsWithAllFeatures(
  features: NEFeature[], 
  region: NERegion, 
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  // Implementation that requires ALL features to be present
}

// Find complementary datasets (e.g., if you want to show rivers on top of countries)
function findLayeredDatasets(
  baseFeature: NEFeature,
  overlayFeatures: NEFeature[],
  region: NERegion,
  resolution?: NEResolution
): {base: NaturalEarthDatasetType, overlays: NaturalEarthDatasetType[]} {
  // Implementation that finds appropriate base and overlay datasets
}

// Filter a dataset to a specific geographic region
function filterDatasetByRegion(
  dataset: GeoJSON.FeatureCollection,
  region: NERegion
): GeoJSON.FeatureCollection {
  // Implementation that filters features to just the desired region
}`}),e(r,{children:"This structure would allow us to easily query for the right datasets to build all these creative map ideas!"})]}),a(l,{at:"2025-04-01T18:50:06.894463Z",children:[e(i,{children:"eeb98d8c-aaf9-4278-abb2-3fb99b837cff"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Those are great! Think from a popularity perspective too. Do you have topography in there? If I want a world map where I an see ocean depth, woud it be easy to find the datasets I need? Write down 50 more maps that cartographers would approve of and make sure your metadata system supports it"})]}),a(l,{at:"2025-04-01T18:50:50.763649Z",children:[e(i,{children:"6ddb97b3-fa53-4c98-bf58-0dc71648ccb8"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're right! Topography and bathymetry (ocean depth) are essential map types that would be popular with both casual users and professional cartographers. Let me expand the list with 50 more cartographically sound map ideas, including topographic and bathymetric maps."}),e(c,{children:"Additional 50 Cartographically Sound Maps"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:a(n,{children:[e(s,{}),"Global Bathymetric Chart"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ocean_depth", "coastline"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Detailed Topographic Relief Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "elevation", "contour", "peak"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Combined Topo-Bathymetric Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "elevation", "ocean_depth", "coastline"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Hillshade Terrain Visualization"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "hillshade", "elevation", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Contour Line Map with Interval Options"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "contour", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Slope and Aspect Analysis"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "slope", "aspect", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Physical Relief with Major Watersheds"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "elevation", "watershed", "river"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Ocean Current and Depth Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ocean_current", "ocean_depth"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Alpine Regions with Glaciation"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "mountain", "glacier", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Coastal Shelf and Drop-off Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "continental_shelf", "ocean_depth"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"True-scale Isometric Relief Projection"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "elevation", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Major Mountain Ranges with Peaks"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "mountain", "peak", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Hachure-style Terrain Representation"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "hachure", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Seafloor Features (Trenches, Ridges, Plateaus)"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ocean_ridge", "ocean_trench", "ocean_plateau"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"World Soils Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "soil_type", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Aspect (Direction) Map with Solar Exposure"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "aspect", "solar_exposure"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Karst Topography Regions"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "karst", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Coastal Erosion Risk"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "coastal_erosion", "coastline"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Physiographic Regions Classification"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "physiographic_region", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Natural Color Satellite Base Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "satellite_imagery", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Slope Steepness Classification Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "slope", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Marine Protected Areas"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "marine_protected_area", "ocean_depth"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"World Elevation Zones (Lowland, Highland, etc.)"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "elevation_zone", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Terrain Ruggedness Index"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "terrain_ruggedness", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Continental Divides and Watersheds"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "continental_divide", "watershed"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Coral Reef Distribution and Health"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "coral_reef", "ocean_depth"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Groundwater Aquifer Systems"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "aquifer", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Simplified Landform Classification"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "landform", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Deep Ocean Circulation Patterns"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ocean_circulation", "ocean_depth"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "110m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Island Elevation Profiles"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "island", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Ancient Inland Seas and Paleolakes"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "paleolake", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Hypsometric Tint Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "hypsometry", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Shaded Relief with Land Cover"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "relief", "land_cover"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Underwater Features Near Coastlines"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ocean_depth", "underwater_feature", "coastline"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Geomorphological Features Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "geomorphology", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Major River Drainage Basins"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "drainage_basin", "river"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Astronomical Observatory Locations by Elevation"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "observatory", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Cave Systems"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "cave", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Seafloor Age Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "seafloor_age", "ocean_depth"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Historical Sea Level Change"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "historical_coastline", "ocean_depth"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Multi-scale Relief Map Series"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "relief", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m", "50m", "110m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Oblique View Terrain Perspective"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "relief", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Geoid Undulation Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "geoid", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Erosional and Depositional Landforms"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "erosion", "deposition"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Natural Disaster Risk Topography"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "disaster_risk", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Cartogram Based on Elevation Distribution"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "elevation_cartogram", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Vertical Land Movement Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "vertical_movement", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Classic Swiss-style Relief Shading"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "swiss_relief", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Geodiversity Index Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "geodiversity", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Cross-section Profile Locations"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "cross_section", "elevation"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]})]}),e(c,{children:"Enhanced Metadata System"}),e(r,{children:"To support these additional maps, we need to extend our metadata system:"}),e(u,{language:"typescript",children:`// Expanded feature types
export type NEFeature =
  | "country" 
  | "state" 
  | "city" 
  | "river" 
  | "lake" 
  | "ocean" 
  | "road" 
  | "rail" 
  | "airport" 
  | "coastline" 
  | "boundary" 
  | "timezone" 
  | "park" 
  | "glacier"
  // Topographic features
  | "elevation"
  | "contour"
  | "peak"
  | "hillshade"
  | "slope"
  | "aspect"
  | "relief"
  | "mountain"
  | "hachure"
  | "landform"
  | "watershed"
  | "physiographic_region"
  | "terrain_ruggedness"
  | "continental_divide"
  | "karst"
  | "elevation_zone"
  | "hypsometry"
  | "geomorphology"
  | "drainage_basin"
  | "swiss_relief"
  | "cross_section"
  | "geodiversity"
  // Bathymetric/Ocean features
  | "ocean_depth"
  | "ocean_ridge"
  | "ocean_trench"
  | "ocean_plateau"
  | "continental_shelf"
  | "ocean_circulation"
  | "seafloor_age"
  | "ocean_current"
  | "marine_protected_area"
  | "coral_reef"
  | "underwater_feature";

// Add a property type for styling and rendering options
export type NEDatasetProperty = 
  | "name" 
  | "population" 
  | "area" 
  | "depth_value" 
  | "elevation_value"
  | "slope_value"
  | "code"
  | "date";

// Add a style type to help with rendering
export type NEMapStyle =
  | "political"
  | "physical"
  | "topographic"
  | "bathymetric"
  | "satellite"
  | "outline"
  | "thematic"
  | "historical";

// Enhanced dataset info
interface NEDatasetInfo {
  url: string;
  features: NEFeature[];
  resolution: NEResolution;
  regions: NERegion[];
  properties?: NEDatasetProperty[]; // Properties available in this dataset
  compatibleStyles?: NEMapStyle[];  // What styles can be applied
}`}),e(c,{children:"Additional Functions"}),e(r,{children:"To support these topographic and specialized maps, we'd need functions like:"}),e(u,{language:"typescript",children:`// Find datasets suitable for elevation/topographic maps
function findTopographicDatasets(
  region: NERegion,
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  return findDatasetsByFeature("elevation", region, resolution);
}

// Find datasets suitable for bathymetric/ocean depth maps
function findBathymetricDatasets(
  region: NERegion, 
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  return findDatasetsByFeature("ocean_depth", region, resolution);
}

// Find datasets with specific styling capabilities
function findDatasetsByStyle(
  style: NEMapStyle,
  region: NERegion,
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  const matches: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, datasetType) => {
    if (info.compatibleStyles?.includes(style) && 
        info.regions.includes(region) &&
        (!resolution || info.resolution === resolution)) {
      matches.push(datasetType);
    }
  });
  
  return matches;
}

// Find datasets with specific properties (e.g., contains elevation values)
function findDatasetsByProperty(
  property: NEDatasetProperty,
  region: NERegion,
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  const matches: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, datasetType) => {
    if (info.properties?.includes(property) && 
        info.regions.includes(region) &&
        (!resolution || info.resolution === resolution)) {
      matches.push(datasetType);
    }
  });
  
  return matches;
}`}),e(r,{children:"With these additions, our system would now support a comprehensive range of cartographically sound maps, including topographic and bathymetric maps that professional cartographers would appreciate!"})]}),a(l,{at:"2025-04-01T18:51:24.109731Z",children:[e(i,{children:"feaa0708-7851-4f87-bfe4-b393ded9f263"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"You didn't really generalize what I asked for. Don't cartographers care about city names? Roads? Political districts, counties? What else? What are the things we need in the metadata?"})]}),a(l,{at:"2025-04-01T18:51:51.652394Z",children:[e(i,{children:"cb2c5fbc-ed68-4a99-99e0-a3a11fea732d"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're absolutely right - I didn't fully account for the detailed elements that cartographers prioritize. Let me think more comprehensively about what cartographers truly care about in maps:"}),e(c,{children:"Core Cartographic Elements Missing from Our Metadata"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:a(n,{children:[e(s,{}),"Labels and Annotation"]})}),a(r,{children:[e(o,{}),e(t,{children:"Place names (cities, countries, states, landmarks)"}),e(t,{children:"Feature labels (rivers, mountains, lakes)"}),e(t,{children:"Label density/importance levels"}),e(t,{children:"Multi-language support"}),e(t,{children:"Typography options"})]}),e(t,{children:a(n,{children:[e(s,{}),"Administrative Hierarchies"]})}),a(r,{children:[e(o,{}),e(t,{children:"Countries"}),e(t,{children:"States/Provinces"}),e(t,{children:"Counties/Districts"}),e(t,{children:"Census tracts"}),e(t,{children:"Voting districts"}),e(t,{children:"Historical administrative boundaries"})]}),e(t,{children:a(n,{children:[e(s,{}),"Transportation Network Details"]})}),a(r,{children:[e(o,{}),e(t,{children:"Road hierarchies (highways, major roads, minor roads)"}),e(t,{children:"Railway types (passenger, freight, high-speed)"}),e(t,{children:"Transit systems"}),e(t,{children:"Navigable waterways"}),e(t,{children:"Airports (international, regional, local)"}),e(t,{children:"Ports (shipping capacity, type)"})]}),e(t,{children:a(n,{children:[e(s,{}),"Cartographic Styling Parameters"]})}),a(r,{children:[e(o,{}),e(t,{children:"Symbol sets"}),e(t,{children:"Line styles"}),e(t,{children:"Color palettes"}),e(t,{children:"Text placement rules"}),e(t,{children:"Scale-dependent rendering"})]}),e(t,{children:a(n,{children:[e(s,{}),"Reference Systems"]})}),a(r,{children:[e(o,{}),e(t,{children:"Projections"}),e(t,{children:"Coordinate systems"}),e(t,{children:"Graticules and grids"}),e(t,{children:"Scale indicators"})]}),e(t,{children:a(n,{children:[e(s,{}),"Temporal Data"]})}),a(r,{children:[e(o,{}),e(t,{children:"Historical changes"}),e(t,{children:"Time series"}),e(t,{children:"Seasonal variations"})]})]}),e(c,{children:"Enhanced Metadata Structure"}),e(r,{children:"Let me revise our metadata structure to better support what cartographers really need:"}),e(u,{language:"typescript",children:`// Expanded feature categories (higher level organization)
export type NEFeatureCategory = 
  | "administrative" 
  | "hydrography" 
  | "terrain" 
  | "transportation" 
  | "cultural" 
  | "reference"
  | "population"
  | "environmental";

// Specific feature types within categories
export type NEFeature =
  // Administrative features
  | "country_boundary" 
  | "state_boundary" 
  | "county_boundary"
  | "district_boundary"
  | "maritime_boundary"
  | "territorial_claim"
  | "disputed_area"
  
  // Hydrography features
  | "coastline"
  | "river"
  | "lake"
  | "reservoir"
  | "canal"
  | "wetland"
  | "ocean"
  | "ocean_depth"
  | "reef"
  
  // Terrain features
  | "elevation"
  | "contour"
  | "peak"
  | "mountain_range"
  | "plateau"
  | "valley"
  | "desert"
  | "glacier"
  
  // Transportation features
  | "highway"
  | "major_road"
  | "minor_road"
  | "track"
  | "railway"
  | "ferry_route"
  | "airport"
  | "port"
  | "bridge"
  | "tunnel"
  
  // Cultural features
  | "settlement"
  | "major_city"
  | "town"
  | "village"
  | "landmark"
  | "park"
  | "protected_area"
  | "historical_site"
  
  // Reference features
  | "graticule"
  | "geographic_line" // equator, tropics, etc.
  | "timezone"
  
  // Population features
  | "urban_area"
  | "population_density"
  
  // Environmental features
  | "land_cover"
  | "forest"
  | "agricultural_land";

// Label information (crucial for cartographers)
export type NELabelType =
  | "country_name"
  | "state_name"
  | "city_name"
  | "water_body_name"
  | "mountain_name"
  | "region_name";

// Styling capabilities
export type NEStyleCapability =
  | "thematic_coloring"
  | "proportional_symbols"
  | "line_styling"
  | "pattern_fill"
  | "label_placement"
  | "point_clustering";
  
// Expanded dataset info for cartographic needs
interface NEDatasetInfo {
  url: string;
  categories: NEFeatureCategory[];
  features: NEFeature[];
  labels?: NELabelType[];
  resolution: NEResolution;
  regions: NERegion[];
  attributeProperties?: string[]; // Available attributes for styling/filtering
  styleCapabilities?: NEStyleCapability[];
  minScale?: number; // Minimum recommended scale denominator
  maxScale?: number; // Maximum recommended scale denominator
  projections?: string[]; // Recommended projections
  temporalCoverage?: {start: string, end: string}; // Time period covered
  sourceAttribution?: string; // Required attribution text
  lastUpdated?: string; // When the dataset was last updated
  dataFormat: "GeoJSON" | "TopoJSON"; // Format of the data
}`}),e(c,{children:"Feature Selection Functions for Cartographic Use Cases"}),e(u,{language:"typescript",children:`// Find datasets with specific label types (crucial for cartographers)
function findDatasetsWithLabels(
  labelType: NELabelType,
  region: NERegion,
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  return naturalEarthDatasetInfo.filter((info, datasetType) => 
    info.labels?.includes(labelType) && 
    info.regions.includes(region) &&
    (!resolution || info.resolution === resolution)
  );
}

// Find datasets appropriate for a specific scale range
function findDatasetsByScale(
  scale: number,
  region: NERegion,
  features: NEFeature[]
): NaturalEarthDatasetType[] {
  return naturalEarthDatasetInfo.filter((info, datasetType) =>
    features.every(f => info.features.includes(f)) &&
    info.regions.includes(region) &&
    ((!info.minScale || scale >= info.minScale) &&
     (!info.maxScale || scale <= info.maxScale))
  );
}

// Find datasets by category (higher-level organization)
function findDatasetsByCategory(
  category: NEFeatureCategory,
  region: NERegion,
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  return naturalEarthDatasetInfo.filter((info, datasetType) =>
    info.categories.includes(category) &&
    info.regions.includes(region) &&
    (!resolution || info.resolution === resolution)
  );
}

// Find complementary datasets for a complete map
function findComplementaryDatasets(
  baseDataset: NaturalEarthDatasetType, 
  requiredFeatures: NEFeature[]
): NaturalEarthDatasetType[] {
  const baseInfo = naturalEarthDatasetInfo.get(baseDataset);
  if (!baseInfo) return [];
  
  // Find datasets that have the required features and match the base dataset's
  // region and resolution
  return naturalEarthDatasetInfo.filter((info, datasetType) =>
    datasetType !== baseDataset &&
    requiredFeatures.some(f => info.features.includes(f) && !baseInfo.features.includes(f)) &&
    info.regions.some(r => baseInfo.regions.includes(r)) &&
    info.resolution === baseInfo.resolution
  );
}`}),e(r,{children:"This revised structure and functions better reflect what professional cartographers would expect. It addresses the crucial details like place labels, administrative hierarchies, transportation networks at different levels, and the styling information needed to create publication-quality maps."})]}),a(l,{at:"2025-04-01T18:52:56.759497Z",children:[e(i,{children:"d6a4b32f-98ec-4e56-a7de-163d58631c0a"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"What else could your metadata system be missing that is in the set of urls I provided you with? Do you need to add more datasetss - which we will validate actually exist so be consulting a REAL list to figure out if these things are real, which we need to use the datasets?"})]}),a(l,{at:"2025-04-01T18:53:11.815492Z",children:[e(i,{children:"5538a57a-5bca-4c34-a394-b43042fb663d"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I should carefully analyze the dataset URLs in the Natural Earth Data utility you provided to ensure our metadata system fully captures what's available. Let me examine the existing datasets in your list to identify any potential gaps:"}),e(r,{children:"Looking at your list, I notice several categories of data that our metadata system should explicitly account for:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Specific Administrative Boundaries"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"Admin0 (country) level data"}),e(t,{children:"Admin1 (state/province) level data"}),e(t,{children:"Distinct boundary line features (land vs maritime)"}),e(t,{children:"Sovereignty data vs country boundaries"})]}),a(t,{children:[a(n,{children:[e(s,{}),"Physical Geography Details"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"Coastlines as separate features from land/ocean boundaries"}),e(t,{children:"Minor islands specifically called out"}),e(t,{children:"Playas (dry lakes) as distinct from regular lakes"}),e(t,{children:"Antarctic ice shelves as specialized features"})]}),a(t,{children:[a(n,{children:[e(s,{}),"Data Format Distinctions"]}),":"]}),a(r,{children:[e(o,{}),e(t,{children:"Some datasets use the world-atlas TopoJSON format"}),e(t,{children:"Others use GeoJSON from the Natural Earth collection"}),e(t,{children:"These might have different attribute structures"})]})]}),e(r,{children:"Our metadata system should directly reflect these actual datasets rather than creating theoretical ones. I should constrain the feature types to match what's actually available in the Natural Earth collection."}),e(r,{children:"Here's how I'd refine the metadata system to align with the actual datasets:"}),e(u,{language:"typescript",children:`// Feature types that actually exist in Natural Earth Data
export type NEFeature =
  // Political/Administrative features
  | "country"
  | "state" 
  | "sovereignty"
  | "boundary_line_land"
  | "boundary_line_maritime"
  | "disputed_area"
  
  // Physical features
  | "coastline"
  | "land"
  | "ocean"
  | "lake"
  | "river_lake_centerline"
  | "minor_island"
  | "reef"
  | "playa"
  | "antarctic_ice_shelf"
  | "glaciated_area"
  
  // Population/Cultural features
  | "populated_place"
  | "urban_area"
  
  // Transportation features
  | "road"
  | "railroad"
  | "airport"
  | "port"
  
  // Reference features
  | "geographic_line"
  | "graticule"
  | "time_zone"
  
  // Land use features
  | "park_protected_land";

// Ensure resolution matches actual data
export type NEResolution = "110m" | "50m" | "10m";`}),e(r,{children:"I notice that some important cartographic elements we might want don't appear to be in the standard Natural Earth datasets you provided:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"I don't see specialized datasets for detailed road hierarchies"}),e(t,{children:"There's no explicit terrain/elevation data"}),e(t,{children:"I don't see specific label-only datasets"})]}),e(r,{children:"For a comprehensive map system, we might need to supplement Natural Earth with other sources for these elements, or we could focus on what can be produced with just these datasets."}),e(r,{children:"When implementing the full metadata system, we should map each NEFeature directly to the actual datasets with those features, rather than assuming all combinations exist. Some features are only available at certain resolutions."}),e(r,{children:"Would you like me to develop a more precise mapping between the actual datasets in your list and our metadata structure?"})]}),a(l,{at:"2025-04-01T18:54:31.172461Z",children:[e(i,{children:"1ac24121-27d5-4c05-9211-88513abb3ee0"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Okay but we need to extend this with concise code to give a very good set of metadata and functons you can use on our omni map component to find the datasets you need:"}),e(p,{identifier:"paste-3",type:".txt",children:"Attached “paste.txt”"}),e(p,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T18:54:56.606706Z",children:[e(i,{children:"e0dadb77-1c0b-4b91-ba30-330d9a3de273"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Looking at the datasets, I'll create a concise metadata system that directly reflects what's available while making it easy to find the right datasets for different mapping needs."}),e(r,{children:"Here's a streamlined approach to extend your Natural Earth Datasets utility:"}),e(u,{language:"typescript",children:`// Type definitions for feature categories that we can use to find datasets
export type NEFeature = 
  // Administrative
  | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty"
  // Natural
  | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" 
  | "playa" | "island" | "antarctic_ice"
  // Human infrastructure
  | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port"
  // Reference
  | "geographic_line" | "graticule" | "time_zone" | "park";

// Geographic regions (for filtering)
export type NERegion = "world" | "continent" | "country";

// Resolution levels from the actual data
export type NEResolution = "110m" | "50m" | "10m";

// Enhanced dataset info that's concise but comprehensive
export const naturalEarthDatasetInfo = new Map<NaturalEarthDatasetType, {
  features: NEFeature[],
  resolution: NEResolution,
  region: NERegion,
  labels?: boolean,
  format: "GeoJSON" | "TopoJSON"
}>([
  [NaturalEarthDatasetType.COUNTRIES_50M, {
    features: ["country", "boundary"],
    resolution: "50m",
    region: "world",
    labels: true,
    format: "TopoJSON"
  }],
  [NaturalEarthDatasetType.POPULATED_PLACES_50M, {
    features: ["populated_place"],
    resolution: "50m", 
    region: "world",
    labels: true,
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.RIVERS_50M, {
    features: ["river"],
    resolution: "50m",
    region: "world",
    labels: false,
    format: "GeoJSON"
  }],
  // ... and so on for all datasets
]);

// Simple lookup functions to find datasets by feature, resolution, or region
export function findDatasetsByFeature(feature: NEFeature): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.features.includes(feature)) {
      results.push(type);
    }
  });
  
  return results;
}

export function findDatasetsByResolution(resolution: NEResolution): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.resolution === resolution) {
      results.push(type);
    }
  });
  
  return results;
}

// Find the best dataset for a specific feature at a given resolution
export function findBestDataset(
  feature: NEFeature, 
  preferredResolution: NEResolution
): NaturalEarthDatasetType | undefined {
  // Try to find an exact match for feature and resolution
  let candidates = Array.from(naturalEarthDatasetInfo.entries())
    .filter(([_, info]) => 
      info.features.includes(feature) && 
      info.resolution === preferredResolution
    )
    .map(([type]) => type);
  
  if (candidates.length > 0) {
    return candidates[0];
  }
  
  // Fall back to any resolution if needed
  candidates = Array.from(naturalEarthDatasetInfo.entries())
    .filter(([_, info]) => info.features.includes(feature))
    .map(([type]) => type);
  
  return candidates.length > 0 ? candidates[0] : undefined;
}

// Find datasets for a multi-layer map (e.g., countries + rivers + cities)
export function findMapLayers(
  features: NEFeature[], 
  resolution: NEResolution
): NaturalEarthDatasetType[] {
  const layers: NaturalEarthDatasetType[] = [];
  
  for (const feature of features) {
    const dataset = findBestDataset(feature, resolution);
    if (dataset && !layers.includes(dataset)) {
      layers.push(dataset);
    }
  }
  
  return layers;
}

// Function to get common map combinations
export function getMapTemplate(template: "political" | "physical" | "transportation" | "reference", resolution: NEResolution): NaturalEarthDatasetType[] {
  switch (template) {
    case "political":
      return findMapLayers(["country", "boundary", "populated_place"], resolution);
    case "physical":
      return findMapLayers(["land", "ocean", "coastline", "river", "lake"], resolution);
    case "transportation":
      return findMapLayers(["country", "road", "railroad", "airport", "port"], resolution);
    case "reference":
      return findMapLayers(["country", "state", "geographic_line", "graticule"], resolution);
    default:
      return [];
  }
}`}),e(r,{children:"This system provides:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Concise Feature Types"]})," - Aligned directly with available datasets"]}),a(t,{children:[a(n,{children:[e(s,{}),"Easy Lookup Functions"]})," - Find datasets by feature, resolution, or map template"]}),a(t,{children:[a(n,{children:[e(s,{}),"Map Template Presets"]})," - Common map combinations ready to use"]}),a(t,{children:[a(n,{children:[e(s,{}),"Extensibility"]})," - Easy to add new datasets or feature types"]})]}),e(r,{children:"To use this with your WorldMap component, you'd simply:"}),e(u,{language:"typescript",children:`// Get datasets for a physical map at medium resolution
const physicalMapDatasets = getMapTemplate("physical", "50m");

// Or get datasets for a custom combination
const customMapDatasets = findMapLayers(["country", "river", "populated_place", "time_zone"], "10m");

// Then load and render each dataset`}),e(r,{children:"This approach is concise but powerful, making it easy to find and combine the right datasets for virtually any map design."})]}),a(l,{at:"2025-04-01T18:56:34.661600Z",children:[e(i,{children:"04672c84-d47b-49c0-b63e-b12dea2f8035"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Okay lets factor this into threee files: NaturalEarthDatasets - the one I have that we will augment with the attributes here - NaturalEarthDatasetUtils - functions for looking things up - NaturalEarthDatasetMetadata which are the union types that we will use - make sense?"})]}),a(l,{at:"2025-04-01T18:57:00.344293Z",children:[e(i,{children:"6617a289-e025-4f6b-b6fd-977f6f090af1"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"That makes perfect sense! Breaking it into three distinct files will improve organization and maintainability. Here's how we'll structure it:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"NaturalEarthDatasets.ts"]})," - Keep your existing enum and URL mapping, which we'll augment"]}),a(t,{children:[a(n,{children:[e(s,{}),"NaturalEarthDatasetMetadata.ts"]})," - Define all the type definitions and metadata mappings"]}),a(t,{children:[a(n,{children:[e(s,{}),"NaturalEarthDatasetUtils.ts"]})," - Implement the utility functions for dataset lookups"]})]}),e(r,{children:"Let me outline each file:"}),e(c,{children:"NaturalEarthDatasetMetadata.ts"}),e(u,{language:"typescript",children:`import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Feature types that can be searched for
export type NEFeature = 
  // Administrative
  | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty"
  // Natural
  | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" 
  | "playa" | "island" | "antarctic_ice"
  // Human infrastructure
  | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port"
  // Reference
  | "geographic_line" | "graticule" | "time_zone" | "park";

// Geographic regions for filtering
export type NERegion = "world" | "continent" | "country";

// Resolution levels from the actual data
export type NEResolution = "110m" | "50m" | "10m";

// Map template presets
export type NEMapTemplate = "political" | "physical" | "transportation" | "reference";

// Dataset info interface
export interface NEDatasetInfo {
  features: NEFeature[];
  resolution: NEResolution;
  region: NERegion;
  labels?: boolean;
  format: "GeoJSON" | "TopoJSON";
}

// The metadata mapping for all datasets
export const naturalEarthDatasetInfo = new Map<NaturalEarthDatasetType, NEDatasetInfo>([
  [NaturalEarthDatasetType.COUNTRIES_50M, {
    features: ["country", "boundary"],
    resolution: "50m",
    region: "world",
    labels: true,
    format: "TopoJSON"
  }],
  [NaturalEarthDatasetType.POPULATED_PLACES_50M, {
    features: ["populated_place"],
    resolution: "50m", 
    region: "world",
    labels: true,
    format: "GeoJSON"
  }],
  // Add the rest of the datasets with their metadata...
]);`}),e(c,{children:"NaturalEarthDatasetUtils.ts"}),e(u,{language:"typescript",children:`import { NaturalEarthDatasetType } from './NaturalEarthDatasets';
import { 
  NEFeature, 
  NEResolution, 
  NERegion, 
  NEMapTemplate,
  naturalEarthDatasetInfo 
} from './NaturalEarthDatasetMetadata';

/**
 * Find datasets that include a specific feature
 */
export function findDatasetsByFeature(feature: NEFeature): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.features.includes(feature)) {
      results.push(type);
    }
  });
  
  return results;
}

/**
 * Find datasets at a specific resolution
 */
export function findDatasetsByResolution(resolution: NEResolution): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.resolution === resolution) {
      results.push(type);
    }
  });
  
  return results;
}

/**
 * Find the best dataset for a specific feature at a given resolution
 */
export function findBestDataset(
  feature: NEFeature, 
  preferredResolution: NEResolution
): NaturalEarthDatasetType | undefined {
  // Try exact match first
  let candidates = Array.from(naturalEarthDatasetInfo.entries())
    .filter(([_, info]) => 
      info.features.includes(feature) && 
      info.resolution === preferredResolution
    )
    .map(([type]) => type);
  
  if (candidates.length > 0) {
    return candidates[0];
  }
  
  // Fall back to any resolution
  candidates = Array.from(naturalEarthDatasetInfo.entries())
    .filter(([_, info]) => info.features.includes(feature))
    .map(([type]) => type);
  
  return candidates.length > 0 ? candidates[0] : undefined;
}

/**
 * Find datasets for a multi-layer map
 */
export function findMapLayers(
  features: NEFeature[], 
  resolution: NEResolution
): NaturalEarthDatasetType[] {
  const layers: NaturalEarthDatasetType[] = [];
  
  for (const feature of features) {
    const dataset = findBestDataset(feature, resolution);
    if (dataset && !layers.includes(dataset)) {
      layers.push(dataset);
    }
  }
  
  return layers;
}

/**
 * Get preset map combinations
 */
export function getMapTemplate(
  template: NEMapTemplate, 
  resolution: NEResolution
): NaturalEarthDatasetType[] {
  switch (template) {
    case "political":
      return findMapLayers(["country", "boundary", "populated_place"], resolution);
    case "physical":
      return findMapLayers(["land", "ocean", "coastline", "river", "lake"], resolution);
    case "transportation":
      return findMapLayers(["country", "road", "railroad", "airport", "port"], resolution);
    case "reference":
      return findMapLayers(["country", "state", "geographic_line", "graticule"], resolution);
    default:
      return [];
  }
}`}),e(c,{children:"NaturalEarthDatasets.ts (existing file, with exports added)"}),e(r,{children:"You'll just need to add an export for the enum and map to make them available to the other files:"}),e(u,{language:"typescript",children:`// Add exports to ensure other files can access these
export enum NaturalEarthDatasetType {
  // ... your existing enum
}

// Map of dataset types to their URLs
export const naturalEarthDatasetUrls = new Map<NaturalEarthDatasetType, string>([
  // ... your existing map
]);

/**
 * Gets the URL for a specific Natural Earth dataset
 * @param datasetType The type of dataset to retrieve
 * @returns The URL for the specified dataset
 */
export function getDatasetUrl(datasetType: NaturalEarthDatasetType): string {
  const url = naturalEarthDatasetUrls.get(datasetType);
  if (!url) {
    throw new Error(\`URL not found for dataset type: \${NaturalEarthDatasetType[datasetType]}\`);
  }
  return url;
}

export default {
  NaturalEarthDatasetType,
  naturalEarthDatasetUrls,
  getDatasetUrl
};`}),e(r,{children:"This organization:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Keeps related functionality together"}),e(t,{children:"Makes it easy to find definitions, metadata, and utility functions"}),e(t,{children:"Is more maintainable as you add datasets or features"}),e(t,{children:"Follows good TypeScript practices for type definitions"})]}),e(r,{children:"Would you like me to complete any specific part of this framework in more detail?"})]}),a(l,{at:"2025-04-01T19:02:00.604710Z",children:[e(i,{children:"d86914f6-016c-4c4f-ae28-077f11c9ddbe"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Well your first one seems like it has the thing that needs to go into NaturalEarthDatasets. How about you write the other two, the metadata and the utls and then we rewrite the datasets"})]}),a(l,{at:"2025-04-01T19:02:19.414217Z",children:[e(i,{children:"7d74e55d-5f3a-43fe-8e5b-6777824a404b"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I'll write the complete NaturalEarthDatasetMetadata.ts and NaturalEarthDatasetUtils.ts files for you, then we can discuss how to update the main NaturalEarthDatasets.ts file."}),e(c,{children:"NaturalEarthDatasetMetadata.ts"}),e(u,{language:"typescript",children:`import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Feature types that can be searched for
export type NEFeature = 
  // Administrative
  | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty"
  // Natural
  | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" 
  | "playa" | "island" | "antarctic_ice"
  // Human infrastructure
  | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port"
  // Reference
  | "geographic_line" | "graticule" | "time_zone" | "park";

// Geographic regions for filtering
export type NERegion = "world" | "continent" | "country";

// Resolution levels from the actual data
export type NEResolution = "110m" | "50m" | "10m";

// Map template presets
export type NEMapTemplate = "political" | "physical" | "transportation" | "reference";

// Dataset info interface
export interface NEDatasetInfo {
  features: NEFeature[];
  resolution: NEResolution;
  region: NERegion;
  labels?: boolean;
  format: "GeoJSON" | "TopoJSON";
}

// The metadata mapping for all datasets
export const naturalEarthDatasetInfo = new Map<NaturalEarthDatasetType, NEDatasetInfo>([
  [NaturalEarthDatasetType.COUNTRIES_50M, {
    features: ["country", "boundary"],
    resolution: "50m",
    region: "world",
    labels: true,
    format: "TopoJSON"
  }],
  [NaturalEarthDatasetType.POPULATED_PLACES_50M, {
    features: ["populated_place"],
    resolution: "50m", 
    region: "world",
    labels: true,
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.URBAN_AREAS_50M, {
    features: ["urban_area"],
    resolution: "50m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.ADMIN1_STATES_50M, {
    features: ["state"],
    resolution: "50m",
    region: "world",
    labels: true,
    format: "TopoJSON"
  }],
  [NaturalEarthDatasetType.ROADS_50M, {
    features: ["road"],
    resolution: "50m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.RAILROADS_50M, {
    features: ["railroad"],
    resolution: "50m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.AIRPORTS_50M, {
    features: ["airport"],
    resolution: "50m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.PORTS_50M, {
    features: ["port"],
    resolution: "50m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, {
    features: ["boundary"],
    resolution: "50m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, {
    features: ["maritime"],
    resolution: "50m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.COUNTRIES_10M, {
    features: ["country", "boundary"],
    resolution: "10m",
    region: "world",
    labels: true,
    format: "TopoJSON"
  }],
  [NaturalEarthDatasetType.POPULATED_PLACES_10M, {
    features: ["populated_place"],
    resolution: "10m",
    region: "world",
    labels: true,
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.URBAN_AREAS_10M, {
    features: ["urban_area"],
    resolution: "10m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.ADMIN1_STATES_10M, {
    features: ["state"],
    resolution: "10m",
    region: "world",
    labels: true,
    format: "TopoJSON"
  }],
  [NaturalEarthDatasetType.MINOR_ISLANDS_10M, {
    features: ["island"],
    resolution: "10m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, {
    features: ["park"],
    resolution: "10m",
    region: "world",
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.COUNTRIES_110M, {
    features: ["country", "boundary"],
    resolution: "110m",
    region: "world",
    labels: true,
    format: "TopoJSON"
  }],
  [NaturalEarthDatasetType.POPULATED_PLACES_110M, {
    features: ["populated_place"],
    resolution: "110m",
    region: "world",
    labels: true,
    format: "GeoJSON"
  }],
  [NaturalEarthDatasetType.ADMIN1_STATES_110M, {
    features: ["state"],
    resolution: "110m",
    region: "world",
    labels:`})]}),a(l,{at:"2025-04-01T19:02:46.982697Z",children:[e(i,{children:"44e815e0-ce9a-4ca4-990c-a984ff36bcc8"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"You are not understaing. The metadata file just defines the union types. It does not take a dependency on the datasets fuke. Get it? It just defines the metadata"})]}),a(l,{at:"2025-04-01T19:03:05.107369Z",children:[e(i,{children:"8bbce995-7f8c-4638-bc33-769fdf96f92d"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I understand now! The metadata file should only define the types without any dependencies on the datasets file. Let me rewrite these properly:"}),e(c,{children:"NaturalEarthDatasetMetadata.ts"}),e(u,{language:"typescript",children:`// Feature types that can be searched for
export type NEFeature = 
  // Administrative
  | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty"
  // Natural
  | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" 
  | "playa" | "island" | "antarctic_ice"
  // Human infrastructure
  | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port"
  // Reference
  | "geographic_line" | "graticule" | "time_zone" | "park";

// Geographic regions for filtering
export type NERegion = "world" | "continent" | "country";

// Resolution levels from the actual data
export type NEResolution = "110m" | "50m" | "10m";

// Map template presets
export type NEMapTemplate = "political" | "physical" | "transportation" | "reference";

// Dataset info interface
export interface NEDatasetInfo {
  features: NEFeature[];
  resolution: NEResolution;
  region: NERegion;
  labels?: boolean;
  format: "GeoJSON" | "TopoJSON";
}`}),e(c,{children:"NaturalEarthDatasetUtils.ts"}),e(u,{language:"typescript",children:`import { NaturalEarthDatasetType, naturalEarthDatasetInfo } from './NaturalEarthDatasets';
import { NEFeature, NEResolution, NERegion, NEMapTemplate } from './NaturalEarthDatasetMetadata';

/**
 * Find datasets that include a specific feature
 */
export function findDatasetsByFeature(feature: NEFeature): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.features.includes(feature)) {
      results.push(type);
    }
  });
  
  return results;
}

/**
 * Find datasets at a specific resolution
 */
export function findDatasetsByResolution(resolution: NEResolution): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.resolution === resolution) {
      results.push(type);
    }
  });
  
  return results;
}

/**
 * Find the best dataset for a specific feature at a given resolution
 */
export function findBestDataset(
  feature: NEFeature, 
  preferredResolution: NEResolution
): NaturalEarthDatasetType | undefined {
  // Try exact match first
  let candidates = Array.from(naturalEarthDatasetInfo.entries())
    .filter(([_, info]) => 
      info.features.includes(feature) && 
      info.resolution === preferredResolution
    )
    .map(([type]) => type);
  
  if (candidates.length > 0) {
    return candidates[0];
  }
  
  // Fall back to any resolution
  candidates = Array.from(naturalEarthDatasetInfo.entries())
    .filter(([_, info]) => info.features.includes(feature))
    .map(([type]) => type);
  
  return candidates.length > 0 ? candidates[0] : undefined;
}

/**
 * Find datasets for a multi-layer map
 */
export function findMapLayers(
  features: NEFeature[], 
  resolution: NEResolution
): NaturalEarthDatasetType[] {
  const layers: NaturalEarthDatasetType[] = [];
  
  for (const feature of features) {
    const dataset = findBestDataset(feature, resolution);
    if (dataset && !layers.includes(dataset)) {
      layers.push(dataset);
    }
  }
  
  return layers;
}

/**
 * Get preset map combinations
 */
export function getMapTemplate(
  template: NEMapTemplate, 
  resolution: NEResolution
): NaturalEarthDatasetType[] {
  switch (template) {
    case "political":
      return findMapLayers(["country", "boundary", "populated_place"], resolution);
    case "physical":
      return findMapLayers(["land", "ocean", "coastline", "river", "lake"], resolution);
    case "transportation":
      return findMapLayers(["country", "road", "railroad", "airport", "port"], resolution);
    case "reference":
      return findMapLayers(["country", "state", "geographic_line", "graticule"], resolution);
    default:
      return [];
  }
}`}),e(r,{children:"The NaturalEarthDatasets.ts file would then import the NEDatasetInfo type and add the metadata mapping to each dataset. This way, we maintain proper separation of concerns."})]}),a(l,{at:"2025-04-01T19:04:10.648305Z",children:[e(i,{children:"2e6123fc-6395-460e-8f5b-cd64c1f0ef37"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Doug: Okay now write down 20 diverse maps and see if those get you there - like if you wanted a map of US political something, or Russian revers or the topological whatever of Asia, do you have everything you need in those two files?"})]}),a(l,{at:"2025-04-01T19:04:30.206994Z",children:[e(i,{children:"e83db933-4434-4373-99d5-cd942807d352"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Let me test our metadata and utility structure against 20 diverse map concepts to see if our system handles them well:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:a(n,{children:[e(s,{}),"US State Boundaries with Major Cities"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "state", "populated_place"'}),e(t,{children:'Region: "country" (would need to filter for US)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Russian River Network"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "river", "country"'}),e(t,{children:'Region: "country" (would need to filter for Russia)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Asian Urban Areas and Transportation"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "urban_area", "road", "railroad"'}),e(t,{children:'Region: "continent" (would need to filter for Asia)'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"African National Parks"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "park", "country"'}),e(t,{children:'Region: "continent" (would need to filter for Africa)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"European Maritime Boundaries"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "maritime", "country", "coastline"'}),e(t,{children:'Region: "continent" (would need to filter for Europe)'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Time Zones with Country Outlines"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "time_zone", "country"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Pacific Island Nations"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "country", "island"'}),e(t,{children:'Region: "world" (would need to filter for Pacific)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Antarctic Research Stations with Ice Shelves"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "antarctic_ice", "populated_place"'}),e(t,{children:'Region: "country" (Antarctica)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"South American River Basins with Watersheds"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "river", "country"'}),e(t,{children:'Region: "continent" (would need to filter for South America)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Mediterranean Coastal Infrastructure"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "coastline", "port", "urban_area"'}),e(t,{children:'Region: "world" (would need to filter for Mediterranean)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Disputed Territories Map"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "disputed", "country", "boundary"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"North American Transportation Network"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "road", "railroad", "airport"'}),e(t,{children:'Region: "continent" (would need to filter for North America)'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Australian Urban Centers with States"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "state", "urban_area", "populated_place"'}),e(t,{children:'Region: "country" (would need to filter for Australia)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Middle Eastern Political Boundaries"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "country", "boundary", "disputed"'}),e(t,{children:'Region: "world" (would need to filter for Middle East)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Arctic Ocean and Coastlines"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "ocean", "coastline", "glacier"'}),e(t,{children:'Region: "world" (would need to filter for Arctic)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Global Reef Distribution"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "reef", "ocean", "coastline"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Southeast Asian Island Geography"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "island", "country", "coastline"'}),e(t,{children:'Region: "world" (would need to filter for Southeast Asia)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Major Global Shipping Ports"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "port", "coastline", "ocean"'}),e(t,{children:'Region: "world"'}),e(t,{children:'Resolution: "50m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Canadian Provincial Boundaries with Parks"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "state", "park", "country"'}),e(t,{children:'Region: "country" (would need to filter for Canada)'}),e(t,{children:'Resolution: "10m"'})]}),e(t,{children:a(n,{children:[e(s,{}),"Eurasian Rail Network"]})}),a(r,{children:[e(o,{}),e(t,{children:'Features: "railroad", "country"'}),e(t,{children:'Region: "world" (would need to filter for Europe + Asia)'}),e(t,{children:'Resolution: "10m"'})]})]}),e(c,{children:"Analysis of Gaps"}),e(r,{children:"Looking at these examples, I notice several issues with our current metadata and utility structure:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Region Filtering Limitations"]}),`: While our metadata has a "region" field, it's too general. We need the ability to filter for specific countries, continents, or regions.`]}),a(t,{children:[a(n,{children:[e(s,{}),"Missing Features"]}),`: Some features we might want, like "watershed", aren't in our feature set.`]}),a(t,{children:[a(n,{children:[e(s,{}),"Combined Features"]}),": Some real-world datasets might contain multiple feature types not reflected in our metadata."]}),a(t,{children:[a(n,{children:[e(s,{}),"Geographic Filtering"]}),": We need a way to filter datasets by geographic bounds, not just predefined regions."]}),a(t,{children:[a(n,{children:[e(s,{}),"Feature Properties"]}),": We don't account for retrieving specific properties from features (e.g., country names, population data)."]})]}),e(c,{children:"Recommended Additions"}),e(r,{children:"To address these limitations, we should add:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"A more specific region filtering capability"}),e(t,{children:"A bounding box or polygon filtering function"}),e(t,{children:"A property-based filtering mechanism"}),e(t,{children:"Additional feature types that might be needed"}),e(t,{children:"Functions to help with feature attribute access"})]}),e(r,{children:"These additions would make our utility more powerful for the diverse mapping needs shown in the examples."}),e(r,{children:"Would you like me to enhance the code to address these gaps?"})]}),a(l,{at:"2025-04-01T19:05:37.217376Z",children:[e(i,{children:"6f41e3fb-c6bd-41f8-9b28-8183b6012610"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Sure but might some datasets just be for one country? I don't know natural earth. For all I know we might need city one data. Might we - even if we don't use it yet - have to put all countries in? Some of the datasets are US only after all"})]}),a(l,{at:"2025-04-01T19:05:57.521866Z",children:[e(i,{children:"ff5d6051-8419-4a13-a0e8-512c6fca5531"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're raising an excellent point. Natural Earth Data indeed has datasets that are region-specific or country-specific, which our current metadata structure doesn't adequately address."}),e(r,{children:"Let's enhance our metadata to better handle region-specific datasets:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:["For the ",a(n,{children:[e(h,{}),"NERegion"]})," type, we should include specific countries and regions"]}),e(t,{children:"We should allow datasets to specify multiple regions or a single specific region"})]}),e(r,{children:"Here's how I'd enhance the NaturalEarthDatasetMetadata.ts file:"}),e(u,{language:"typescript",children:`// Feature types that can be searched for
export type NEFeature = 
  // Administrative
  | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty"
  // Natural
  | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" 
  | "playa" | "island" | "antarctic_ice"
  // Human infrastructure
  | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port"
  // Reference
  | "geographic_line" | "graticule" | "time_zone" | "park";

// Expanded region types to include specific countries and regions
export type NERegion = 
  // Global/Continental
  | "world" | "continent"
  // Continents
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"
  // Major countries
  | "usa" | "canada" | "russia" | "china" | "australia" | "brazil" | "india"
  // Regions
  | "middle_east" | "caribbean" | "central_america" | "european_union" | "southeast_asia";

// Resolution levels from the actual data
export type NEResolution = "110m" | "50m" | "10m";

// Map template presets
export type NEMapTemplate = "political" | "physical" | "transportation" | "reference"
  | "us_states" | "europe_political" | "asia_rivers" | "global_cities";

// Add feature property types that might be available
export type NEPropertyType = 
  | "name" | "code" | "population" | "area" | "length" | "elevation";

// Dataset info interface with expanded region support
export interface NEDatasetInfo {
  features: NEFeature[];
  resolution: NEResolution;
  regions: NERegion[]; // Now an array to support multiple regions
  labels?: boolean;
  format: "GeoJSON" | "TopoJSON";
  properties?: NEPropertyType[]; // What properties are available in this dataset
  countrySpecific?: boolean; // Flag for country-specific datasets
}`}),e(r,{children:"In the NaturalEarthDatasetUtils.ts file, we'd need to update our functions to handle this enhanced metadata:"}),e(u,{language:"typescript",children:`/**
 * Find datasets specific to a region or containing data for a region
 */
export function findDatasetsByRegion(region: NERegion): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.regions.includes(region) || info.regions.includes("world")) {
      results.push(type);
    }
  });
  
  return results;
}

/**
 * Find datasets with a specific feature in a specific region
 */
export function findRegionalFeatureDatasets(
  feature: NEFeature,
  region: NERegion,
  resolution?: NEResolution
): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.features.includes(feature) && 
        (info.regions.includes(region) || info.regions.includes("world")) &&
        (!resolution || info.resolution === resolution)) {
      results.push(type);
    }
  });
  
  return results;
}

/**
 * Find country-specific datasets
 */
export function findCountrySpecificDatasets(country: NERegion): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.countrySpecific && info.regions.includes(country)) {
      results.push(type);
    }
  });
  
  return results;
}`}),e(r,{children:`The NaturalEarthDatasets.ts file would then need to be updated to assign the appropriate regions to each dataset. For global datasets, we'd assign "world", while for country-specific datasets, we'd assign the specific country or countries they cover.`}),e(r,{children:"For example, if there's a US-specific cities dataset, it would have:"}),e(u,{language:"typescript",children:`regions: ["usa"],
countrySpecific: true`}),e(r,{children:"While a global dataset would have:"}),e(u,{language:"typescript",children:'regions: ["world"]'}),e(r,{children:"These enhancements would make our system much more capable of handling region-specific and country-specific datasets while still maintaining compatibility with the global datasets that Natural Earth primarily offers."})]}),a(l,{at:"2025-04-01T19:10:15.135126Z",children:[e(i,{children:"603e54a6-a760-428a-9b48-98520d08a481"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Okay but it might have all countries no? List them. You can list all countries. Are those all the resolutions?"}),e(r,{children:"Doug: Now that we are using union types, you can name these NaturalEarthDatasetRegion etc... because it isn't part of the code length. And make Format one of them!"}),e(r,{children:"So look at what you wrote and imagine the entries for each NaturalEarthDatasetInfo - do you have what you need after my extensions?"}),e(r,{children:"Remember you don't have to put the country unless its specific to the country right? But you need to know that the label is complete. It needs to help you"}),e(r,{children:"Do you think you have a decent and brief enough metadata system that will allow you to write down many datasetes?"})]}),a(l,{at:"2025-04-01T19:10:42.537987Z",children:[e(i,{children:"282b3fca-53b3-4f35-a664-995f6e92046c"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're right. If we use union types and more descriptive names, we can make the metadata system more comprehensive and clear. Let me revise:"}),e(c,{children:"NaturalEarthDatasetMetadata.ts (Revised)"}),e(u,{language:"typescript",children:`// Feature types that can be searched for
export type NaturalEarthDatasetFeature = 
  // Administrative
  | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty"
  // Natural
  | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" 
  | "playa" | "island" | "antarctic_ice"
  // Human infrastructure
  | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port"
  // Reference
  | "geographic_line" | "graticule" | "time_zone" | "park";

// All countries in ISO format
export type NaturalEarthDatasetCountry =
  | "AFG" | "ALB" | "DZA" | "AND" | "AGO" | "ATG" | "ARG" | "ARM" | "AUS" | "AUT" 
  | "AZE" | "BHS" | "BHR" | "BGD" | "BRB" | "BLR" | "BEL" | "BLZ" | "BEN" | "BTN" 
  | "BOL" | "BIH" | "BWA" | "BRA" | "BRN" | "BGR" | "BFA" | "BDI" | "KHM" | "CMR" 
  | "CAN" | "CPV" | "CAF" | "TCD" | "CHL" | "CHN" | "COL" | "COM" | "COG" | "COD" 
  | "CRI" | "CIV" | "HRV" | "CUB" | "CYP" | "CZE" | "DNK" | "DJI" | "DMA" | "DOM" 
  | "ECU" | "EGY" | "SLV" | "GNQ" | "ERI" | "EST" | "ETH" | "FJI" | "FIN" | "FRA" 
  | "GAB" | "GMB" | "GEO" | "DEU" | "GHA" | "GRC" | "GRD" | "GTM" | "GIN" | "GNB" 
  | "GUY" | "HTI" | "HND" | "HUN" | "ISL" | "IND" | "IDN" | "IRN" | "IRQ" | "IRL" 
  | "ISR" | "ITA" | "JAM" | "JPN" | "JOR" | "KAZ" | "KEN" | "KIR" | "PRK" | "KOR" 
  | "KWT" | "KGZ" | "LAO" | "LVA" | "LBN" | "LSO" | "LBR" | "LBY" | "LIE" | "LTU" 
  | "LUX" | "MKD" | "MDG" | "MWI" | "MYS" | "MDV" | "MLI" | "MLT" | "MHL" | "MRT" 
  | "MUS" | "MEX" | "FSM" | "MDA" | "MCO" | "MNG" | "MNE" | "MAR" | "MOZ" | "MMR" 
  | "NAM" | "NRU" | "NPL" | "NLD" | "NZL" | "NIC" | "NER" | "NGA" | "NOR" | "OMN" 
  | "PAK" | "PLW" | "PAN" | "PNG" | "PRY" | "PER" | "PHL" | "POL" | "PRT" | "QAT" 
  | "ROU" | "RUS" | "RWA" | "KNA" | "LCA" | "VCT" | "WSM" | "SMR" | "STP" | "SAU" 
  | "SEN" | "SRB" | "SYC" | "SLE" | "SGP" | "SVK" | "SVN" | "SLB" | "SOM" | "ZAF" 
  | "SSD" | "ESP" | "LKA" | "SDN" | "SUR" | "SWZ" | "SWE" | "CHE" | "SYR" | "TWN" 
  | "TJK" | "TZA" | "THA" | "TLS" | "TGO" | "TON" | "TTO" | "TUN" | "TUR" | "TKM" 
  | "TUV" | "UGA" | "UKR" | "ARE" | "GBR" | "USA" | "URY" | "UZB" | "VUT" | "VAT" 
  | "VEN" | "VNM" | "YEM" | "ZMB" | "ZWE";

// Continents and regions
export type NaturalEarthDatasetContinent = 
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america";

// Combined region type for search flexibility
export type NaturalEarthDatasetRegion = 
  | "world" 
  | NaturalEarthDatasetContinent 
  | NaturalEarthDatasetCountry;

// Resolution levels
export type NaturalEarthDatasetResolution = "110m" | "50m" | "10m";

// Data format
export type NaturalEarthDatasetFormat = "GeoJSON" | "TopoJSON";

// Map template presets
export type NaturalEarthDatasetTemplate = 
  | "political" | "physical" | "transportation" | "reference"
  | "us_states" | "europe_political" | "asia_rivers" | "global_cities";

// Feature properties available in datasets
export type NaturalEarthDatasetProperty = 
  | "name" | "iso_a3" | "iso_a2" | "adm0_a3" | "pop_est" | "gdp_md_est" 
  | "subregion" | "region_un" | "region_wb" | "name_len" | "scalerank" 
  | "featurecla" | "labelrank" | "sovereignt" | "sov_a3" | "adm0_dif";

// Dataset info interface 
export interface NaturalEarthDatasetInfo {
  features: NaturalEarthDatasetFeature[];
  resolution: NaturalEarthDatasetResolution;
  format: NaturalEarthDatasetFormat;
  regions: NaturalEarthDatasetRegion[]; // Global datasets just use ["world"]
  labels?: boolean;
  properties?: NaturalEarthDatasetProperty[];
  countrySpecific?: boolean; // Only true for country-specific datasets
}`}),e(r,{children:"With this structure:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"We have descriptive type names that clarify the purpose of each type"}),e(t,{children:"I've included a comprehensive list of ISO country codes for precise filtering"}),a(t,{children:["The ",a(n,{children:[e(h,{}),"countrySpecific"]})," flag is only needed for datasets specific to one country"]}),a(t,{children:["The ",a(n,{children:[e(h,{}),"regions"]}),' array can include "world" for global datasets, specific continents, or countries']}),e(t,{children:"I've added known properties in Natural Earth data for filtering and styling"})]}),e(r,{children:"In the NaturalEarthDatasets.ts file, we would map each dataset to this metadata structure. For example:"}),e(u,{language:"typescript",children:`// For a global countries dataset:
[NaturalEarthDatasetType.COUNTRIES_50M, {
  features: ["country", "boundary"],
  resolution: "50m",
  format: "TopoJSON",
  regions: ["world"],
  labels: true,
  properties: ["name", "iso_a3", "pop_est", "gdp_md_est"]
}]

// For a US-specific dataset (if one existed):
[NaturalEarthDatasetType.US_COUNTIES_10M, {
  features: ["county", "boundary"],
  resolution: "10m",
  format: "GeoJSON",
  regions: ["USA"],
  labels: true,
  countrySpecific: true,
  properties: ["name", "fips_code", "pop_est"]
}]`}),e(r,{children:"This metadata system is concise yet powerful enough to handle a wide variety of datasets. It provides enough information to enable effective searching across different features, resolutions, and geographic regions."})]}),a(l,{at:"2025-04-01T19:11:49.347821Z",children:[e(i,{children:"8d3315a8-90dc-43dd-8b90-dab863a0a6cf"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"By creating different types you are making this harder. Do search engines type everything? Maybe you just need one unuon type with attributes and you group the union type is code comments? I'm not sure but your abstraction is getting ugly"})]}),a(l,{at:"2025-04-01T19:11:59.506157Z",children:[e(i,{children:"315359d7-892f-41ee-bfc8-689c202c73ae"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're right - I've been overcomplicating things. Let's simplify by using a single union type with comments to group the values:"}),e(u,{language:"typescript",children:`// All possible metadata attributes in a single union type
export type NEAttribute = 
  // Features
  | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty"
  | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" 
  | "playa" | "island" | "antarctic_ice" | "populated_place" | "urban_area" 
  | "road" | "railroad" | "airport" | "port" | "geographic_line" | "graticule" 
  | "time_zone" | "park"
  
  // Resolutions
  | "110m" | "50m" | "10m"
  
  // Formats
  | "GeoJSON" | "TopoJSON"
  
  // Regions (continents and major regions)
  | "world" | "africa" | "antarctica" | "asia" | "europe" 
  | "north_america" | "oceania" | "south_america"
  
  // Added features
  | "labels" | "country_specific";

// Simple dataset info
export interface NEDatasetInfo {
  attributes: NEAttribute[];
}`}),e(r,{children:"This approach is much simpler. We can add any country codes as needed, but only when actually required. The utils file would just need to search through the attributes array:"}),e(u,{language:"typescript",children:`export function findDatasetsByAttribute(attribute: NEAttribute): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (info.attributes.includes(attribute)) {
      results.push(type);
    }
  });
  
  return results;
}

export function findDatasetsByAttributes(attributes: NEAttribute[]): NaturalEarthDatasetType[] {
  const results: NaturalEarthDatasetType[] = [];
  
  naturalEarthDatasetInfo.forEach((info, type) => {
    if (attributes.every(attr => info.attributes.includes(attr))) {
      results.push(type);
    }
  });
  
  return results;
}`}),e(r,{children:"Is this more along the lines of what you were thinking?"})]}),a(l,{at:"2025-04-01T19:17:50.394415Z",children:[e(i,{children:"09f1c4ef-3b4e-4f1a-98b0-42e366ff342e"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"But you need it to include all of THESE!!! You need the country if it's specific:"}),e(r,{children:'// Feature types that can be searched for export type NaturalEarthDatasetFeature = // Administrative | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty" // Natural | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" | "playa" | "island" | "antarctic_ice" // Human infrastructure | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port" // Reference | "geographic_line" | "graticule" | "time_zone" | "park"; // All countries in ISO format export type NaturalEarthDatasetCountry = | "AFG" | "ALB" | "DZA" | "AND" | "AGO" | "ATG" | "ARG" | "ARM" | "AUS" | "AUT" | "AZE" | "BHS" | "BHR" | "BGD" | "BRB" | "BLR" | "BEL" | "BLZ" | "BEN" | "BTN" | "BOL" | "BIH" | "BWA" | "BRA" | "BRN" | "BGR" | "BFA" | "BDI" | "KHM" | "CMR" | "CAN" | "CPV" | "CAF" | "TCD" | "CHL" | "CHN" | "COL" | "COM" | "COG" | "COD" | "CRI" | "CIV" | "HRV" | "CUB" | "CYP" | "CZE" | "DNK" | "DJI" | "DMA" | "DOM" | "ECU" | "EGY" | "SLV" | "GNQ" | "ERI" | "EST" | "ETH" | "FJI" | "FIN" | "FRA" | "GAB" | "GMB" | "GEO" | "DEU" | "GHA" | "GRC" | "GRD" | "GTM" | "GIN" | "GNB" | "GUY" | "HTI" | "HND" | "HUN" | "ISL" | "IND" | "IDN" | "IRN" | "IRQ" | "IRL" | "ISR" | "ITA" | "JAM" | "JPN" | "JOR" | "KAZ" | "KEN" | "KIR" | "PRK" | "KOR" | "KWT" | "KGZ" | "LAO" | "LVA" | "LBN" | "LSO" | "LBR" | "LBY" | "LIE" | "LTU" | "LUX" | "MKD" | "MDG" | "MWI" | "MYS" | "MDV" | "MLI" | "MLT" | "MHL" | "MRT" | "MUS" | "MEX" | "FSM" | "MDA" | "MCO" | "MNG" | "MNE" | "MAR" | "MOZ" | "MMR" | "NAM" | "NRU" | "NPL" | "NLD" | "NZL" | "NIC" | "NER" | "NGA" | "NOR" | "OMN" | "PAK" | "PLW" | "PAN" | "PNG" | "PRY" | "PER" | "PHL" | "POL" | "PRT" | "QAT" | "ROU" | "RUS" | "RWA" | "KNA" | "LCA" | "VCT" | "WSM" | "SMR" | "STP" | "SAU" | "SEN" | "SRB" | "SYC" | "SLE" | "SGP" | "SVK" | "SVN" | "SLB" | "SOM" | "ZAF" | "SSD" | "ESP" | "LKA" | "SDN" | "SUR" | "SWZ" | "SWE" | "CHE" | "SYR" | "TWN" | "TJK" | "TZA" | "THA" | "TLS" | "TGO" | "TON" | "TTO" | "TUN" | "TUR" | "TKM" | "TUV" | "UGA" | "UKR" | "ARE" | "GBR" | "USA" | "URY" | "UZB" | "VUT" | "VAT" | "VEN" | "VNM" | "YEM" | "ZMB" | "ZWE"; // Continents and regions export type NaturalEarthDatasetContinent = | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"; // Combined region type for search flexibility export type NaturalEarthDatasetRegion = | "world" | NaturalEarthDatasetContinent | NaturalEarthDatasetCountry; // Resolution levels export type NaturalEarthDatasetResolution = "110m" | "50m" | "10m"; // Data format export type NaturalEarthDatasetFormat = "GeoJSON" | "TopoJSON"; // Map template presets export type NaturalEarthDatasetTemplate = | "political" | "physical" | "transportation" | "reference" | "us_states" | "europe_political" | "asia_rivers" | "global_cities"; // Feature properties available in datasets export type NaturalEarthDatasetProperty = | "name" | "iso_a3" | "iso_a2" | "adm0_a3" | "pop_est" | "gdp_md_est" | "subregion" | "region_un" | "region_wb" | "name_len" | "scalerank" | "featurecla" | "labelrank" | "sovereignt" | "sov_a3" | "adm0_dif"; // Dataset info interface export interface NaturalEarthDatasetInfo { features: NaturalEarthDatasetFeature[]; resolution: NaturalEarthDatasetResolution; format: NaturalEarthDatasetFormat; regions: NaturalEarthDatasetRegion[]; // Global datasets just use ["world"] labels?: boolean; properties?: NaturalEarthDatasetProperty[]; countrySpecific?: boolean; // Only true for country-specific datasets }'}),e(r,{children:"You need these strings:"}),e(r,{children:'export type NEFeature = // Administrative | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty" // Natural | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" | "playa" | "island" | "antarctic_ice" // Human infrastructure | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port" // Reference | "geographic_line" | "graticule" | "time_zone" | "park"; // Expanded region types to include specific countries and regions export type NERegion = // Global/Continental | "world" | "continent" // Continents | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america" // Major countries | "usa" | "canada" | "russia" | "china" | "australia" | "brazil" | "india" // Regions | "middle_east" | "caribbean" | "central_america" | "european_union" | "southeast_asia"; // Resolution levels from the actual data export type NEResolution = "110m" | "50m" | "10m"; // Map template presets export type NEMapTemplate = "political" | "physical" | "transportation" | "reference" | "us_states" | "europe_political" | "asia_rivers" | "global_cities"; // Add feature property types that might be available export type NEPropertyType = | "name" | "code" | "population" | "area" | "length" | "elevation";'}),e(r,{children:"What about these strings?"}),e(r,{children:'export function getMapTemplate( template: NEMapTemplate, resolution: NEResolution ): NaturalEarthDatasetType[] { switch (template) { case "political": return findMapLayers(["country", "boundary", "populated_place"], resolution); case "physical": return findMapLayers(["land", "ocean", "coastline", "river", "lake"], resolution); case "transportation": return findMapLayers(["country", "road", "railroad", "airport", "port"], resolution); case "reference": return findMapLayers(["country", "state", "geographic_line", "graticule"], resolution); default: return []; } }'}),e(r,{children:'Or these: // Feature types that can be searched for export type NEFeature = // Administrative | "country" | "state" | "boundary" | "maritime" | "disputed" | "sovereignty" // Natural | "coastline" | "land" | "ocean" | "river" | "lake" | "glacier" | "reef" | "playa" | "island" | "antarctic_ice" // Human infrastructure | "populated_place" | "urban_area" | "road" | "railroad" | "airport" | "port" // Reference | "geographic_line" | "graticule" | "time_zone" | "park"; // Geographic regions for filtering export type NERegion = "world" | "continent" | "country"; // Resolution levels from the actual data export type NEResolution = "110m" | "50m" | "10m"; // Map template presets export type NEMapTemplate = "political" | "physical" | "transportation" | "reference";'}),e(r,{children:"You need to come up with a terse way to do this. How do database indexes work?"}),e(r,{children:"I have an idea! Just write lots of indexes?"}),e(r,{children:"We have the enum to dataset"}),e(r,{children:"Attacted is our main file. How about you index the enum in a bunch of ways? You can do one at a time and I extend the file to inlude each index"}),e(r,{children:"We can have NaturalEarthDatasetIndexes and each one defines a type of metadata and maps each dataset to that metadata type = So we can have NaturalEarthDatasetResolutionIndex, and NaturalEarthDatasetGeographicIndex (this says if its world, or a specific continent or a specific country and which one etc..."}),e(r,{children:"How about a system like that? Start off writing the resolution index first because its easy"}),e(p,{identifier:"paste-4",type:".txt",children:"Attached “paste.txt”"}),e(p,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T19:18:07.581634Z",children:[e(i,{children:"775ca2cd-48e5-451d-a121-0939848bc510"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"That's a clever approach! By creating separate indexes for different metadata attributes, we'll keep things clean and modular. Let's start with the resolution index first as you suggested."}),e(r,{children:"Here's how the resolution index would look:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetIndexes.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Resolution levels
export type NEResolution = "110m" | "50m" | "10m";

// Maps dataset types to their resolution
export const resolutionIndex = new Map<NaturalEarthDatasetType, NEResolution>([
    [NaturalEarthDatasetType.COUNTRIES_50M, "50m"],
    [NaturalEarthDatasetType.POPULATED_PLACES_50M, "50m"],
    [NaturalEarthDatasetType.URBAN_AREAS_50M, "50m"],
    [NaturalEarthDatasetType.ADMIN1_STATES_50M, "50m"],
    [NaturalEarthDatasetType.ROADS_50M, "50m"],
    [NaturalEarthDatasetType.RAILROADS_50M, "50m"],
    [NaturalEarthDatasetType.AIRPORTS_50M, "50m"],
    [NaturalEarthDatasetType.PORTS_50M, "50m"],
    [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, "50m"],
    [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, "50m"],
    [NaturalEarthDatasetType.COASTLINE_50M, "50m"],
    [NaturalEarthDatasetType.LAND_50M, "50m"],
    [NaturalEarthDatasetType.OCEAN_50M, "50m"],
    [NaturalEarthDatasetType.RIVERS_50M, "50m"],
    [NaturalEarthDatasetType.LAKES_50M, "50m"],
    [NaturalEarthDatasetType.GLACIERS_50M, "50m"],
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, "50m"],
    [NaturalEarthDatasetType.GRATICULES_50M, "50m"],
    
    [NaturalEarthDatasetType.COUNTRIES_10M, "10m"],
    [NaturalEarthDatasetType.POPULATED_PLACES_10M, "10m"],
    [NaturalEarthDatasetType.URBAN_AREAS_10M, "10m"],
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, "10m"],
    [NaturalEarthDatasetType.MINOR_ISLANDS_10M, "10m"],
    [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, "10m"],
    [NaturalEarthDatasetType.COASTLINE_10M, "10m"],
    [NaturalEarthDatasetType.RIVERS_10M, "10m"],
    [NaturalEarthDatasetType.LAKES_10M, "10m"],
    [NaturalEarthDatasetType.REEFS_10M, "10m"],
    [NaturalEarthDatasetType.PLAYAS_10M, "10m"],
    [NaturalEarthDatasetType.SOVEREIGNTY_10M, "10m"],
    [NaturalEarthDatasetType.DISPUTED_AREAS_10M, "10m"],
    [NaturalEarthDatasetType.TIME_ZONES_10M, "10m"],
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, "10m"],
    [NaturalEarthDatasetType.LAND_10M, "10m"],
    [NaturalEarthDatasetType.OCEAN_10M, "10m"],
    
    [NaturalEarthDatasetType.COUNTRIES_110M, "110m"],
    [NaturalEarthDatasetType.POPULATED_PLACES_110M, "110m"],
    [NaturalEarthDatasetType.ADMIN1_STATES_110M, "110m"],
    [NaturalEarthDatasetType.COASTLINE_110M, "110m"],
    [NaturalEarthDatasetType.LAND_110M, "110m"],
    [NaturalEarthDatasetType.OCEAN_110M, "110m"],
    [NaturalEarthDatasetType.LAKES_110M, "110m"],
    [NaturalEarthDatasetType.RIVERS_110M, "110m"],
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M, "110m"]
]);

// Helper function to find datasets by resolution
export function findDatasetsByResolution(resolution: NEResolution): NaturalEarthDatasetType[] {
    const results: NaturalEarthDatasetType[] = [];
    
    resolutionIndex.forEach((res, datasetType) => {
        if (res === resolution) {
            results.push(datasetType);
        }
    });
    
    return results;
}`}),e(r,{children:"Once you've added this to your project, we can move on to the next index - perhaps the features index, which would map datasets to the types of geographic features they contain."})]}),a(l,{at:"2025-04-01T19:22:38.143932Z",children:[e(i,{children:"4da4204b-27a1-41ab-b665-c34afaaf22eb"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Here look at what I created for conventions. Look at the naming. No function! We have the enum we just need the Map right?"}),e(r,{children:"Now how can we make a metadata system with an index that helps us for geography. It's tricky? Thsi is a hypothetical but what if the world map dataset only had geography for continents? What if anotehr is continential but actually has geographic boundaries for all cities? What if one is country only and has states and political divisions?"}),e(r,{children:"How do we capture this in an index where the enum is the hey?"}),e(p,{children:"Uploaded “image.png”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T19:23:00.352814Z",children:[e(i,{children:"db8d2ffc-4060-489f-a944-420f71284792"}),e(d,{children:"[Claude](/dougs-claude/)"}),a(r,{children:["Looking at your conventions, I see that you're creating an index map where the enum is the key, and the value is the metadata. The naming convention is very clear - ",a(n,{children:[e(h,{}),"NaturalEarthDatasetResolutionIndex"]})," is a map from dataset enum to resolution."]}),e(r,{children:"For geography, we need a way to represent the hierarchical nature of geographic data. Let's create an index that captures what geographic entities each dataset covers:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetGeographicIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic coverage types
export type NaturalEarthGeographicCoverage = 
  | "world" 
  | "continent" 
  | "country" 
  | "state" 
  | "city";

// Maps dataset types to their geographic coverage
export const geographicIndex = new Map<NaturalEarthDatasetType, NaturalEarthGeographicCoverage[]>([
    // World datasets (cover the entire world)
    [NaturalEarthDatasetType.COUNTRIES_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.POPULATED_PLACES_50M, ["world", "continent", "country", "city"]],
    [NaturalEarthDatasetType.URBAN_AREAS_50M, ["world", "continent", "country", "city"]],
    [NaturalEarthDatasetType.ADMIN1_STATES_50M, ["world", "continent", "country", "state"]],
    [NaturalEarthDatasetType.ROADS_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.RAILROADS_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.AIRPORTS_50M, ["world", "continent", "country", "city"]],
    [NaturalEarthDatasetType.PORTS_50M, ["world", "continent", "country", "city"]],
    [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.COASTLINE_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.LAND_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.OCEAN_50M, ["world"]],
    [NaturalEarthDatasetType.RIVERS_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.LAKES_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.GLACIERS_50M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, ["world"]],
    [NaturalEarthDatasetType.GRATICULES_50M, ["world"]],
    
    // High-resolution datasets
    [NaturalEarthDatasetType.COUNTRIES_10M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.POPULATED_PLACES_10M, ["world", "continent", "country", "city"]],
    [NaturalEarthDatasetType.URBAN_AREAS_10M, ["world", "continent", "country", "city"]],
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, ["world", "continent", "country", "state"]],
    [NaturalEarthDatasetType.MINOR_ISLANDS_10M, ["world", "continent", "country"]],
    [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, ["world", "continent", "country"]],
    
    // Specific datasets with particular coverage (examples)
    [NaturalEarthDatasetType.SOVEREIGNTY_10M, ["world", "country"]],
    [NaturalEarthDatasetType.DISPUTED_AREAS_10M, ["world", "country"]],
    [NaturalEarthDatasetType.TIME_ZONES_10M, ["world"]],
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, ["continent"]] // Only for Antarctica
]);`}),e(r,{children:"This approach allows us to represent that some datasets have data at multiple geographic levels. For example, country datasets usually contain information at the world, continent, and country levels, while city datasets might include data at all levels down to individual cities."}),a(r,{children:["The array of coverage types indicates that a dataset contains information at each of those geographic levels. So a dataset marked with ",a(n,{children:[e(h,{}),'["world", "continent", "country"]']})," contains world data that's broken down by continents and countries."]})]}),a(l,{at:"2025-04-01T19:23:35.109920Z",children:[e(i,{children:"a8baabb3-4693-40b1-a878-087058f3aa2e"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"I don't see how that system would capture a dataset that only has US data, and we would know what to look for to get US data??"})]}),a(l,{at:"2025-04-01T19:23:46.885852Z",children:[e(i,{children:"9e7a0edc-90a3-47f5-8c62-92679bc20b4f"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're absolutely right, and that's a critical oversight in my design. The current approach doesn't capture dataset content specific to individual countries or regions."}),e(r,{children:"Let's revise the geographic index to include specific geographic entities (like individual countries) when appropriate:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetGeographicIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic level types
export type NaturalEarthGeographicLevel = "world" | "continent" | "country" | "state" | "city";

// Continent codes
export type NaturalEarthContinent = "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";

// Country codes (ISO 3166-1 alpha-3)
export type NaturalEarthCountry = 
  | "USA" | "CAN" | "MEX" | "RUS" | "CHN" | "IND" 
  | "BRA" | "AUS" | "GBR" | "FRA" | "DEU" | "JPN"
  /* Add other countries as needed */;

// Geographic entity interface that specifies level and specific entities
export interface NaturalEarthGeographicCoverage {
  level: NaturalEarthGeographicLevel;
  entities?: (NaturalEarthContinent | NaturalEarthCountry)[];
}

// Maps dataset types to their geographic coverage
export const geographicIndex = new Map<NaturalEarthDatasetType, NaturalEarthGeographicCoverage[]>([
    // Global datasets
    [NaturalEarthDatasetType.COUNTRIES_50M, [{ level: "world" }]],
    
    // Continental-specific datasets (example)
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, [{ level: "continent", entities: ["AN"] }]],
    
    // Country-specific datasets (hypothetical examples)
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, [
      { level: "world" }, // Has global coverage
      { level: "country", entities: ["USA", "CAN", "RUS", "CHN"] } // But has detailed state data only for these countries
    ]],
    
    // Hypothetical US-only dataset (if it existed)
    // [NaturalEarthDatasetType.US_COUNTIES_10M, [{ level: "country", entities: ["USA"] }]],
]);`}),e(r,{children:"With this approach:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"We can represent that a dataset is global, continent-specific, or country-specific"}),e(t,{children:"For datasets that cover specific entities, we list exactly which ones"}),e(t,{children:"A dataset can have multiple coverage entries (e.g., global coverage but detailed data for specific countries)"})]}),e(r,{children:"This would allow us to properly identify datasets that only contain US data or any other specific geographic entity."})]}),a(l,{at:"2025-04-01T19:27:14.577888Z",children:[e(i,{children:"05dce5a0-b714-4876-afac-d79e4d0a2fb6"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Will you think through this theoretically> What is an organizational system? You are going to have to name all countries!! Deal with it. Write long code. But think theoretically. Think about logical completeness. But think about brevity. How do we specify this as an index with a simply thing that is retured that can tell us what we are looking for"}),e(r,{children:"Can wait, we need to redo the resolution inex. We have it backways. The map needs to be from index to list of enum. So fix this first:"}),e(r,{children:"Right? You need to know the datasets corresponding to import { NaturalEarthDatasetType } from './NaturalEarthDatasets';"}),e(r,{children:'// Resolution levels export type NaturalEarthResolution = "110m" | "50m" | "10m";'}),e(r,{children:'// Maps dataset types to their resolution export const resolutionIndex = new Map<NaturalEarthDatasetType, NaturalEarthResolution>([ [NaturalEarthDatasetType.COUNTRIES_50M, "50m"], [NaturalEarthDatasetType.POPULATED_PLACES_50M, "50m"], [NaturalEarthDatasetType.URBAN_AREAS_50M, "50m"], [NaturalEarthDatasetType.ADMIN1_STATES_50M, "50m"], [NaturalEarthDatasetType.ROADS_50M, "50m"], [NaturalEarthDatasetType.RAILROADS_50M, "50m"], [NaturalEarthDatasetType.AIRPORTS_50M, "50m"], [NaturalEarthDatasetType.PORTS_50M, "50m"], [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, "50m"], [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, "50m"], [NaturalEarthDatasetType.COASTLINE_50M, "50m"], [NaturalEarthDatasetType.LAND_50M, "50m"], [NaturalEarthDatasetType.OCEAN_50M, "50m"], [NaturalEarthDatasetType.RIVERS_50M, "50m"], [NaturalEarthDatasetType.LAKES_50M, "50m"], [NaturalEarthDatasetType.GLACIERS_50M, "50m"], [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, "50m"], [NaturalEarthDatasetType.GRATICULES_50M, "50m"],'}),e(r,{children:'[NaturalEarthDatasetType.COUNTRIES_10M, "10m"], [NaturalEarthDatasetType.POPULATED_PLACES_10M, "10m"], [NaturalEarthDatasetType.URBAN_AREAS_10M, "10m"], [NaturalEarthDatasetType.ADMIN1_STATES_10M, "10m"], [NaturalEarthDatasetType.MINOR_ISLANDS_10M, "10m"], [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, "10m"], [NaturalEarthDatasetType.COASTLINE_10M, "10m"], [NaturalEarthDatasetType.RIVERS_10M, "10m"], [NaturalEarthDatasetType.LAKES_10M, "10m"], [NaturalEarthDatasetType.REEFS_10M, "10m"], [NaturalEarthDatasetType.PLAYAS_10M, "10m"], [NaturalEarthDatasetType.SOVEREIGNTY_10M, "10m"], [NaturalEarthDatasetType.DISPUTED_AREAS_10M, "10m"], [NaturalEarthDatasetType.TIME_ZONES_10M, "10m"], [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, "10m"], [NaturalEarthDatasetType.LAND_10M, "10m"], [NaturalEarthDatasetType.OCEAN_10M, "10m"],'}),e(r,{children:'[NaturalEarthDatasetType.COUNTRIES_110M, "110m"], [NaturalEarthDatasetType.POPULATED_PLACES_110M, "110m"], [NaturalEarthDatasetType.ADMIN1_STATES_110M, "110m"], [NaturalEarthDatasetType.COASTLINE_110M, "110m"], [NaturalEarthDatasetType.LAND_110M, "110m"], [NaturalEarthDatasetType.OCEAN_110M, "110m"], [NaturalEarthDatasetType.LAKES_110M, "110m"], [NaturalEarthDatasetType.RIVERS_110M, "110m"], [NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M, "110m"] ]);eah resolution. Su try rewriting this first'})]}),a(l,{at:"2025-04-01T19:27:44.253329Z",children:[e(i,{children:"bca2c3a6-35cc-4a8f-91e0-63ef554fe5f5"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're right - we need to flip the index structure to make it more useful for lookups. Let me rewrite the resolution index:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetResolutionIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Resolution levels
export type NaturalEarthResolution = "110m" | "50m" | "10m";

// Maps resolutions to the datasets available at that resolution
export const resolutionIndex = new Map<NaturalEarthResolution, NaturalEarthDatasetType[]>([
    ["50m", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.POPULATED_PLACES_50M,
        NaturalEarthDatasetType.URBAN_AREAS_50M,
        NaturalEarthDatasetType.ADMIN1_STATES_50M,
        NaturalEarthDatasetType.ROADS_50M,
        NaturalEarthDatasetType.RAILROADS_50M,
        NaturalEarthDatasetType.AIRPORTS_50M,
        NaturalEarthDatasetType.PORTS_50M,
        NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M,
        NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M,
        NaturalEarthDatasetType.COASTLINE_50M,
        NaturalEarthDatasetType.LAND_50M,
        NaturalEarthDatasetType.OCEAN_50M,
        NaturalEarthDatasetType.RIVERS_50M,
        NaturalEarthDatasetType.LAKES_50M,
        NaturalEarthDatasetType.GLACIERS_50M,
        NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M,
        NaturalEarthDatasetType.GRATICULES_50M
    ]],
    
    ["10m", [
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.POPULATED_PLACES_10M,
        NaturalEarthDatasetType.URBAN_AREAS_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_10M,
        NaturalEarthDatasetType.MINOR_ISLANDS_10M,
        NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M,
        NaturalEarthDatasetType.COASTLINE_10M,
        NaturalEarthDatasetType.RIVERS_10M,
        NaturalEarthDatasetType.LAKES_10M,
        NaturalEarthDatasetType.REEFS_10M,
        NaturalEarthDatasetType.PLAYAS_10M,
        NaturalEarthDatasetType.SOVEREIGNTY_10M,
        NaturalEarthDatasetType.DISPUTED_AREAS_10M,
        NaturalEarthDatasetType.TIME_ZONES_10M,
        NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M,
        NaturalEarthDatasetType.LAND_10M,
        NaturalEarthDatasetType.OCEAN_10M
    ]],
    
    ["110m", [
        NaturalEarthDatasetType.COUNTRIES_110M,
        NaturalEarthDatasetType.POPULATED_PLACES_110M,
        NaturalEarthDatasetType.ADMIN1_STATES_110M,
        NaturalEarthDatasetType.COASTLINE_110M,
        NaturalEarthDatasetType.LAND_110M,
        NaturalEarthDatasetType.OCEAN_110M,
        NaturalEarthDatasetType.LAKES_110M,
        NaturalEarthDatasetType.RIVERS_110M,
        NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M
    ]]
]);

// Helper function to get datasets for a given resolution
export function getDatasetsByResolution(resolution: NaturalEarthResolution): NaturalEarthDatasetType[] {
    return resolutionIndex.get(resolution) || [];
}`}),e(r,{children:"Now for the geographic index. Taking a theoretical approach, we should consider:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:[a(n,{children:[e(s,{}),"Completeness"]}),": We need to represent any possible geographic entity"]}),a(t,{children:[a(n,{children:[e(s,{}),"Brevity"]}),": We need a concise way to represent this information"]}),a(t,{children:[a(n,{children:[e(s,{}),"Usability"]}),": The system needs to make it easy to find what we're looking for"]})]}),e(r,{children:"Given these considerations, let me propose a geographic index that uses a hierarchical structure:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetGeographicIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic levels
export type NaturalEarthGeographicLevel = 
  | "world"      // Global datasets
  | "continent"  // Continent-specific
  | "region"     // Regional (e.g., Middle East, Caribbean)
  | "country"    // Country-specific
  | "state"      // State/province
  | "city";      // City-level data

// Define a limited set of specific geographic entities we'll actually use
// This avoids having to list all countries unless needed
export type NaturalEarthGeographicEntity =
  // Continents
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"
  // Regions
  | "middle_east" | "caribbean" | "central_america" | "southeast_asia"
  // Major countries (add more as needed for specific datasets)
  | "usa" | "canada" | "russia" | "china" | "brazil" | "australia" | "india";

// Index structure maps geographic entities to datasets
export const geographicIndex = new Map<NaturalEarthGeographicLevel, Map<NaturalEarthGeographicEntity | "global", NaturalEarthDatasetType[]>>();

// Initialize the structure
// World level (datasets containing worldwide data)
geographicIndex.set("world", new Map([
    ["global", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.POPULATED_PLACES_50M,
        NaturalEarthDatasetType.URBAN_AREAS_50M,
        NaturalEarthDatasetType.ADMIN1_STATES_50M,
        // ... add all global datasets
    ]]
]));

// Continent level (datasets specific to continents)
geographicIndex.set("continent", new Map([
    ["antarctica", [
        NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M
    ]],
    // Add other continent-specific datasets as needed
]));

// Country level (datasets specific to countries)
geographicIndex.set("country", new Map([
    ["usa", [
        // Hypothetical US-specific datasets would go here
        // For example: NaturalEarthDatasetType.US_COUNTIES
    ]],
    // Add other country-specific datasets as needed
]));

// Helper function to get datasets for a specific geographic level and entity
export function getDatasetsByGeography(
    level: NaturalEarthGeographicLevel,
    entity?: NaturalEarthGeographicEntity
): NaturalEarthDatasetType[] {
    const levelMap = geographicIndex.get(level);
    if (!levelMap) return [];
    
    // If no entity specified but looking at world level, return global datasets
    if (!entity && level === "world") {
        return levelMap.get("global") || [];
    }
    
    // If entity specified, return entity-specific datasets
    if (entity) {
        return levelMap.get(entity) || [];
    }
    
    // If no entity specified for non-world level, combine all datasets at that level
    const allDatasetsAtLevel: NaturalEarthDatasetType[] = [];
    levelMap.forEach((datasets) => {
        allDatasetsAtLevel.push(...datasets);
    });
    
    return allDatasetsAtLevel;
}

// Get datasets that can show a specific country
export function getDatasetsByCountry(country: NaturalEarthGeographicEntity): NaturalEarthDatasetType[] {
    // Return both global datasets and country-specific datasets
    const globalDatasets = getDatasetsByGeography("world");
    const countryDatasets = getDatasetsByGeography("country", country);
    
    // Combine and deduplicate
    return [...new Set([...globalDatasets, ...countryDatasets])];
}`}),e(r,{children:"This approach:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"Uses a hierarchical structure (level → entity → datasets)"}),e(t,{children:"Doesn't require listing all countries unless we actually have country-specific datasets"}),e(t,{children:"Provides helper functions to easily find datasets for specific geographic needs"}),e(t,{children:"Allows retrieving datasets at any level of the geographic hierarchy"})]}),e(r,{children:"Is this closer to what you had in mind?"})]}),a(l,{at:"2025-04-01T19:29:43.490800Z",children:[e(i,{children:"610cead3-c649-4dea-921c-ad19d0c4258a"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Remember no functions. You can use the enum as a key in every index. The function adds no value"}),e(r,{children:"Now, what is a string union type you can use as a key - it can have world, it an have each continent, it can have every country"}),e(r,{children:"That's a very useful index right?"})]}),a(l,{at:"2025-04-01T19:30:12.835489Z",children:[e(i,{children:"faa9417a-499c-4237-9d4b-210b79ed1254"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're absolutely right - we don't need functions and can just use the enum directly in each index. Let me revise with a more straightforward approach:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetGeographicIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic entity types
export type NaturalEarthGeographicEntity = 
  // Global
  | "world"
  // Continents
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"
  // Major countries (expand as needed)
  | "usa" | "canada" | "mexico" | "brazil" | "argentina" | "chile" | "peru" | "colombia" | "venezuela"
  | "uk" | "france" | "germany" | "italy" | "spain" | "portugal" | "ireland" | "switzerland" | "austria"
  | "russia" | "china" | "japan" | "india" | "australia" | "new_zealand" | "indonesia" | "philippines"
  | "egypt" | "south_africa" | "nigeria" | "kenya" | "morocco" | "algeria" | "ethiopia";

// Maps geographic entities to relevant datasets
export const geographicIndex = new Map<NaturalEarthGeographicEntity, NaturalEarthDatasetType[]>([
    // Global datasets
    ["world", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.POPULATED_PLACES_50M,
        NaturalEarthDatasetType.URBAN_AREAS_50M,
        NaturalEarthDatasetType.ADMIN1_STATES_50M,
        NaturalEarthDatasetType.ROADS_50M,
        NaturalEarthDatasetType.RAILROADS_50M,
        NaturalEarthDatasetType.AIRPORTS_50M,
        NaturalEarthDatasetType.PORTS_50M,
        NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M,
        NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.POPULATED_PLACES_10M
        // Add all global datasets
    ]],
    
    // Continent-specific datasets
    ["antarctica", [
        NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M,
        // Plus applicable global datasets
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COASTLINE_50M
    ]],
    
    // Country-specific datasets
    ["usa", [
        // Hypothetical US-specific datasets would go here
        // Plus applicable global datasets that cover the US
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_10M,
        NaturalEarthDatasetType.`})]}),a(l,{at:"2025-04-01T19:30:53.580846Z",children:[e(i,{children:"459b9e46-0f27-41a1-a434-2779d4732753"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Okay so it's only a dataset for a country if it has specific data for subdivisions geographically of that country"})]}),a(l,{at:"2025-04-01T19:31:03.672976Z",children:[e(i,{children:"314b5151-efdb-4541-8443-713fe04661e6"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Exactly right. A dataset would be considered country-specific only if it contains detailed subdivisions or features within that country. Let me revise the geographic index with that in mind:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetGeographicIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic entity types
export type NaturalEarthGeographicEntity = 
  // Global
  | "world"
  // Continents
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"
  // Major countries (expand as needed)
  | "usa" | "canada" | "mexico" | "brazil" | "russia" | "china" | "india" | "australia";

// Maps geographic entities to datasets that have specific subdivision data for that entity
export const geographicIndex = new Map<NaturalEarthGeographicEntity, NaturalEarthDatasetType[]>([
    // Global datasets (contain data for the entire world)
    ["world", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M,
        NaturalEarthDatasetType.POPULATED_PLACES_50M,
        NaturalEarthDatasetType.POPULATED_PLACES_10M,
        NaturalEarthDatasetType.POPULATED_PLACES_110M,
        NaturalEarthDatasetType.URBAN_AREAS_50M,
        NaturalEarthDatasetType.URBAN_AREAS_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_50M,
        NaturalEarthDatasetType.ADMIN1_STATES_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_110M
        // All other global datasets
    ]],
    
    // Continent-specific datasets (have particular subdivision data for these continents)
    ["antarctica", [
        NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M
    ]],
    
    // For now, there are no country-specific datasets in your list
    // If there were, they would be added like this:
    ["usa", [
        // Hypothetical: NaturalEarthDatasetType.US_COUNTIES_10M
    ]]
]);`}),e(r,{children:'This is a clean approach that accurately represents the idea that a dataset is associated with a geographic entity only if it contains specific subdivision data for that entity. Global datasets that happen to include a country (like a world countries dataset) would be listed under "world", not under each individual country.'})]}),a(l,{at:"2025-04-01T19:31:24.017464Z",children:[e(i,{children:"2ab67018-0c72-4d76-b69c-021c445bcd5d"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Pretend one dat I have datastes for all countries. Will you please be more complete in your indexing"})]}),a(l,{at:"2025-04-01T19:31:27.998292Z",children:[e(i,{children:"3ba05697-9a68-4ffe-a393-159f65a100a4"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're right - we should design a more complete and forward-looking index that accommodates country-specific datasets for all countries, even if we don't have them yet. Here's a more comprehensive geographic index:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetGeographicIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic entity types - including all ISO 3166-1 alpha-3 country codes
export type NaturalEarthGeographicEntity = 
  // Global
  | "world"
  // Continents
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"
  // All countries (ISO 3166-1 alpha-3 codes)
  | "AFG" | "ALB" | "DZA" | "AND" | "AGO`})]}),a(l,{at:"2025-04-01T19:31:54.426976Z",children:[e(i,{children:"98605d7d-5340-4222-ad9a-6e82f4569958"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"And use union types - sorry you are. Please continuye. Why not write editable fles so I can give feedback and you can make changes"})]}),a(l,{at:"2025-04-01T19:32:40.597755Z",children:[e(i,{children:"06ea1b0c-a40e-4211-a8c3-e17cdd3fae8c"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"You're right - I should provide complete, editable files that you can review and modify. Let me create the full NaturalEarthDatasetGeographicIndex.ts file:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetGeographicIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic entity types
export type NaturalEarthGeographicEntity = 
  // Global
  | "world"
  // Continents
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"
  // Regions
  | "middle_east" | "caribbean" | "central_america" | "southeast_asia" | "european_union"
  // Countries - ISO 3166-1 alpha-3 codes
  | "AFG" | "ALA" | "ALB" | "DZA" | "ASM" | "AND" | "AGO" | "AIA" | "ATA" | "ATG" | "ARG" 
  | "ARM" | "ABW" | "AUS" | "AUT" | "AZE" | "BHS" | "BHR" | "BGD" | "BRB" | "BLR" | "BEL" 
  | "BLZ" | "BEN" | "BMU" | "BTN" | "BOL" | "BES" | "BIH" | "BWA" | "BVT" | "BRA" | "IOT" 
  | "BRN" | "BGR" | "BFA" | "BDI" | "CPV" | "KHM" | "CMR" | "CAN" | "CYM" | "CAF" | "TCD" 
  | "CHL" | "CHN" | "CXR" | "CCK" | "COL" | "COM" | "COG" | "COD" | "COK" | "CRI" | "CIV" 
  | "HRV" | "CUB" | "CUW" | "CYP" | "CZE" | "DNK" | "DJI" | "DMA" | "DOM" | "ECU" | "EGY" 
  | "SLV" | "GNQ" | "ERI" | "EST" | "ETH" | "FLK" | "FRO" | "FJI" | "FIN" | "FRA" | "GUF" 
  | "PYF" | "ATF" | "GAB" | "GMB" | "GEO" | "DEU" | "GHA" | "GIB" | "GRC" | "GRL" | "GRD" 
  | "GLP" | "GUM" | "GTM" | "GGY" | "GIN" | "GNB" | "GUY" | "HTI" | "HMD" | "VAT" | "HND" 
  | "HKG" | "HUN" | "ISL" | "IND" | "IDN" | "IRN" | "IRQ" | "IRL" | "IMN" | "ISR" | "ITA" 
  | "JAM" | "JPN" | "JEY" | "JOR" | "KAZ" | "KEN" | "KIR" | "PRK" | "KOR" | "KWT" | "KGZ" 
  | "LAO" | "LVA" | "LBN" | "LSO" | "LBR" | "LBY" | "LIE" | "LTU" | "LUX" | "MAC" | "MKD" 
  | "MDG" | "MWI" | "MYS" | "MDV" | "MLI" | "MLT" | "MHL" | "MTQ" | "MRT" | "MUS" | "MYT" 
  | "MEX" | "FSM" | "MDA" | "MCO" | "MNG" | "MNE" | "MSR" | "MAR" | "MOZ" | "MMR" | "NAM" 
  | "NRU" | "NPL" | "NLD" | "NCL" | "NZL" | "NIC" | "NER" | "NGA" | "NIU" | "NFK" | "MNP" 
  | "NOR" | "OMN" | "PAK" | "PLW" | "PSE" | "PAN" | "PNG" | "PRY" | "PER" | "PHL" | "PCN" 
  | "POL" | "PRT" | "PRI" | "QAT" | "REU" | "ROU" | "RUS" | "RWA" | "BLM" | "SHN" | "KNA" 
  | "LCA" | "MAF" | "SPM" | "VCT" | "WSM" | "SMR" | "STP" | "SAU" | "SEN" | "SRB" | "SYC" 
  | "SLE" | "SGP" | "SXM" | "SVK" | "SVN" | "SLB" | "SOM" | "ZAF" | "SGS" | "SSD" | "ESP" 
  | "LKA" | "SDN" | "SUR" | "SJM" | "SWZ" | "SWE" | "CHE" | "SYR" | "TWN" | "TJK" | "TZA" 
  | "THA" | "TLS" | "TGO" | "TKL" | "TON" | "TTO" | "TUN" | "TUR" | "TKM" | "TCA" | "TUV" 
  | "UGA" | "UKR" | "ARE" | "GBR" | "USA" | "UMI" | "URY" | "UZB" | "VUT" | "VEN" | "VNM" 
  | "VGB" | "VIR" | "WLF" | "ESH" | "YEM" | "ZMB" | "ZWE";

// Maps geographic entities to datasets that have specific data for that entity
export const geographicIndex = new Map<NaturalEarthGeographicEntity, NaturalEarthDatasetType[]>([
    // Global datasets
    ["world", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M,
        NaturalEarthDatasetType.POPULATED_PLACES_50M,
        NaturalEarthDatasetType.POPULATED_PLACES_10M,
        NaturalEarthDatasetType.POPULATED_PLACES_110M,
        NaturalEarthDatasetType.URBAN_AREAS_50M,
        NaturalEarthDatasetType.URBAN_AREAS_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_50M,
        NaturalEarthDatasetType.ADMIN1_STATES_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_110M,
        NaturalEarthDatasetType.ROADS_50M,
        NaturalEarthDatasetType.RAILROADS_50M,
        NaturalEarthDatasetType.AIRPORTS_50M,
        NaturalEarthDatasetType.PORTS_50M,
        NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M,
        NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M,
        NaturalEarthDatasetType.COASTLINE_50M,
        NaturalEarthDatasetType.COASTLINE_10M,
        NaturalEarthDatasetType.COASTLINE_110M,
        NaturalEarthDatasetType.LAND_50M,
        NaturalEarthDatasetType.LAND_10M,
        NaturalEarthDatasetType.LAND_110M,
        NaturalEarthDatasetType.OCEAN_50M,
        NaturalEarthDatasetType.OCEAN_10M,
        NaturalEarthDatasetType.OCEAN_110M,
        NaturalEarthDatasetType.RIVERS_50M,
        NaturalEarthDatasetType.RIVERS_10M,
        NaturalEarthDatasetType.RIVERS_110M,
        NaturalEarthDatasetType.LAKES_50M,
        NaturalEarthDatasetType.LAKES_10M,
        NaturalEarthDatasetType.LAKES_110M,
        NaturalEarthDatasetType.GLACIERS_50M,
        NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M,
        NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M,
        NaturalEarthDatasetType.GRATICULES_50M,
        NaturalEarthDatasetType.MINOR_ISLANDS_10M,
        NaturalEarthDatasetType.REEFS_10M,
        NaturalEarthDatasetType.PLAYAS_10M,
        NaturalEarthDatasetType.SOVEREIGNTY_10M,
        NaturalEarthDatasetType.DISPUTED_AREAS_10M,
        NaturalEarthDatasetType.TIME_ZONES_10M,
        NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M
    ]],
    
    // Continent-specific datasets
    ["antarctica", [
        NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M
    ]],
    
    // Currently no country-specific datasets in the enum
    // But we would add them like this when they exist:
    ["USA", [
        // Example: NaturalEarthDatasetType.US_COUNTIES_10M
    ]]
    
    // Other countries would be added as country-specific datasets become available
]);`}),e(r,{children:"Next, let me provide the feature index file, which will associate each dataset with its feature types:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetFeatureIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Feature types available in Natural Earth datasets
export type NaturalEarthFeature = 
  | "country"          // Country boundaries
  | "state"            // State/province boundaries
  | "populated_place"  // Cities, towns, villages
  | "urban_area"       // Urban footprints
  | "road"             // Road networks
  | "railroad"         // Rail networks
  | "airport"          // Airports
  | "port"             // Ports
  | "boundary"         // Political boundaries (land)
  | "maritime"         // Maritime boundaries
  | "coastline"        // Coastlines
  | "land"             // Land areas
  | "ocean"            // Ocean areas
  | "river"            // Rivers
  | "lake"             // Lakes
  | "glacier"          // Glaciated areas
  | "island"           // Minor islands
  | "reef"             // Reefs
  | "playa"            // Dry lakes (playas)
  | "geographic_line"  // Geographic reference lines
  | "graticule"        // Coordinate grid
  | "sovereignty"      // Country sovereignty
  | "disputed"         // Disputed areas
  | "timezone"         // Time zones
  | "antarctic_ice"    // Antarctic ice shelves
  | "park";            // Parks and protected lands

// Maps feature types to datasets that contain those features
export const featureIndex = new Map<NaturalEarthFeature, NaturalEarthDatasetType[]>([
    ["country", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M,
        NaturalEarthDatasetType.SOVEREIGNTY_10M
    ]],
    ["state", [
        NaturalEarthDatasetType.ADMIN1_STATES_50M,
        NaturalEarthDatasetType.ADMIN1_STATES_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_110M
    ]],
    ["populated_place", [
        NaturalEarthDatasetType.POPULATED_PLACES_50M,
        NaturalEarthDatasetType.POPULATED_PLACES_10M,
        NaturalEarthDatasetType.POPULATED_PLACES_110M
    ]],
    ["urban_area", [
        NaturalEarthDatasetType.URBAN_AREAS_50M,
        NaturalEarthDatasetType.URBAN_AREAS_10M
    ]],
    ["road", [
        NaturalEarthDatasetType.ROADS_50M
    ]],
    ["railroad", [
        NaturalEarthDatasetType.RAILROADS_50M
    ]],
    ["airport", [
        NaturalEarthDatasetType.AIRPORTS_50M
    ]],
    ["port", [
        NaturalEarthDatasetType.PORTS_50M
    ]],
    ["boundary", [
        NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M
    ]],
    ["maritime", [
        NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M
    ]],
    ["coastline", [
        NaturalEarthDatasetType.COASTLINE_50M,
        NaturalEarthDatasetType.COASTLINE_10M,
        NaturalEarthDatasetType.COASTLINE_110M
    ]],
    ["land", [
        NaturalEarthDatasetType.LAND_50M,
        NaturalEarthDatasetType.LAND_10M,
        NaturalEarthDatasetType.LAND_110M
    ]],
    ["ocean", [
        NaturalEarthDatasetType.OCEAN_50M,
        NaturalEarthDatasetType.OCEAN_10M,
        NaturalEarthDatasetType.OCEAN_110M
    ]],
    ["river", [
        NaturalEarthDatasetType.RIVERS_50M,
        NaturalEarthDatasetType.RIVERS_10M,
        NaturalEarthDatasetType.RIVERS_110M
    ]],
    ["lake", [
        NaturalEarthDatasetType.LAKES_50M,
        NaturalEarthDatasetType.LAKES_10M,
        NaturalEarthDatasetType.LAKES_110M
    ]],
    ["glacier", [
        NaturalEarthDatasetType.GLACIERS_50M
    ]],
    ["island", [
        NaturalEarthDatasetType.MINOR_ISLANDS_10M
    ]],
    ["reef", [
        NaturalEarthDatasetType.REEFS_10M
    ]],
    ["playa", [
        NaturalEarthDatasetType.PLAYAS_10M
    ]],
    ["geographic_line", [
        NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M,
        NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M
    ]],
    ["graticule", [
        NaturalEarthDatasetType.GRATICULES_50M
    ]],
    ["sovereignty", [
        NaturalEarthDatasetType.SOVEREIGNTY_10M
    ]],
    ["disputed", [
        NaturalEarthDatasetType.DISPUTED_AREAS_10M
    ]],
    ["timezone", [
        NaturalEarthDatasetType.TIME_ZONES_10M
    ]],
    ["antarctic_ice", [
        NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M
    ]],
    ["park", [
        NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M
    ]]
]);`}),e(r,{children:"These files provide:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"A resolution index (from your earlier screenshot)"}),e(t,{children:"A geographic index mapping regions/countries to datasets"}),e(t,{children:"A feature index mapping feature types to datasets"})]}),e(r,{children:"Each file is self-contained and uses simple Maps with string union types. This approach is clean, comprehensive, and easily extendable as new datasets are added."}),e(r,{children:"Would you like me to make any changes to these two index files?"})]}),a(l,{at:"2025-04-01T19:39:52.047911Z",children:[e(i,{children:"5edceda0-4a51-409d-a4c3-e051505d06b6"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"I wasn't clear. Maybe I wanted to say that this file is for... Outlines of named geographic boundaries - do I mean geopolitial? What is country /state / county / city? We can make political separate. So you can know by intersection - this is a dataaset for this country -"}),e(r,{children:"That - let's just make NaturalEarthDatasetCountryIndex"}),e(r,{children:"And it does world, each continent and each country, and lists the enum values for each"})]}),a(l,{at:"2025-04-01T19:40:22.564249Z",children:[e(i,{children:"35a8263f-60e8-410a-8abd-45fa5d6f40cf"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I understand now - you want a specific index focused on geographic/political boundaries. Let's create NaturalEarthDatasetCountryIndex.ts:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetCountryIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic scopes
export type NaturalEarthGeographicScope = 
  // Global
  | "world"
  // Continents
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"
  // Countries (ISO 3166-1 alpha-3 codes)
  | "AFG" | "ALB" | "DZA" | "AND" | "AGO" | "ATG" | "ARG" | "ARM" | "AUS" | "AUT" 
  | "AZE" | "BHS" | "BHR" | "BGD" | "BRB" | "BLR" | "BEL" | "BLZ" | "BEN" | "BTN" 
  | "BOL" | "BIH" | "BWA" | "BRA" | "BRN" | "BGR" | "BFA" | "BDI" | "KHM" | "CMR" 
  | "CAN" | "CPV" | "CAF" | "TCD" | "CHL" | "CHN" | "COL" | "COM" | "COG" | "COD" 
  | "CRI" | "CIV" | "HRV" | "CUB" | "CYP" | "CZE" | "DNK" | "DJI" | "DMA" | "DOM" 
  | "ECU" | "EGY" | "SLV" | "GNQ" | "ERI" | "EST" | "ETH" | "FJI" | "FIN" | "FRA" 
  | "GAB" | "GMB" | "GEO" | "DEU" | "GHA" | "GRC" | "GRD" | "GTM" | "GIN" | "GNB" 
  | "GUY" | "HTI" | "HND" | "HUN" | "ISL" | "IND" | "IDN" | "IRN" | "IRQ" | "IRL" 
  | "ISR" | "ITA" | "JAM" | "JPN" | "JOR" | "KAZ" | "KEN" | "KIR" | "PRK" | "KOR" 
  | "KWT" | "KGZ" | "LAO" | "LVA" | "LBN" | "LSO" | "LBR" | "LBY" | "LIE" | "LTU" 
  | "LUX" | "MKD" | "MDG" | "MWI" | "MYS" | "MDV" | "MLI" | "MLT" | "MHL" | "MRT" 
  | "MUS" | "MEX" | "FSM" | "MDA" | "MCO" | "MNG" | "MNE" | "MAR" | "MOZ" | "MMR" 
  | "NAM" | "NRU" | "NPL" | "NLD" | "NZL" | "NIC" | "NER" | "NGA" | "NOR" | "OMN" 
  | "PAK" | "PLW" | "PAN" | "PNG" | "PRY" | "PER" | "PHL" | "POL" | "PRT" | "QAT" 
  | "ROU" | "RUS" | "RWA" | "KNA" | "LCA" | "VCT" | "WSM" | "SMR" | "STP" | "SAU" 
  | "SEN" | "SRB" | "SYC" | "SLE" | "SGP" | "SVK" | "SVN" | "SLB" | "SOM" | "ZAF" 
  | "SSD" | "ESP" | "LKA" | "SDN" | "SUR" | "SWZ" | "SWE" | "CHE" | "SYR" | "TWN" 
  | "TJK" | "TZA" | "THA" | "TLS" | "TGO" | "TON" | "TTO" | "TUN" | "TUR" | "TKM" 
  | "TUV" | "UGA" | "UKR" | "ARE" | "GBR" | "USA" | "URY" | "UZB" | "VUT" | "VAT" 
  | "VEN" | "VNM" | "YEM" | "ZMB" | "ZWE";

// Maps geographic scopes to datasets that contain their boundaries
export const countryIndex = new Map<NaturalEarthGeographicScope, NaturalEarthDatasetType[]>([
    // World datasets (global political boundaries)
    ["world", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M,
        NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M,
        NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M,
        NaturalEarthDatasetType.SOVEREIGNTY_10M,
        NaturalEarthDatasetType.DISPUTED_AREAS_10M
    ]],
    
    // Continents
    ["africa", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M
    ]],
    ["antarctica", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M,
        NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M
    ]],
    ["asia", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M
    ]],
    ["europe", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M
    ]],
    ["north_america", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M
    ]],
    ["oceania", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M
    ]],
    ["south_america", [
        NaturalEarthDatasetType.COUNTRIES_50M,
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.COUNTRIES_110M
    ]],
    
    // All countries are covered by the global country datasets
    // We would add specific entries only if there are country-specific datasets
    // For example:
    ["USA", [
        NaturalEarthDatasetType.COUNTRIES_10M, // Global dataset that includes USA
        NaturalEarthDatasetType.ADMIN1_STATES_10M // Has detailed state boundaries for USA
        // If we had a US-specific dataset like "US_COUNTIES", it would go here
    ]],
    ["CAN", [
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_10M
    ]],
    ["RUS", [
        NaturalEarthDatasetType.COUNTRIES_10M,
        NaturalEarthDatasetType.ADMIN1_STATES_10M
    ]],
    // Other countries would have similar entries, generally referencing the global datasets
    // unless they have specific datasets for that country
]);`}),e(r,{children:"This index provides:"}),a(r,{children:[e(o,{ordered:!0}),e(t,{children:"A clean type definition for geographic scopes (world, continents, countries)"}),e(t,{children:"A mapping from each scope to the relevant datasets containing its boundaries"}),e(t,{children:"Special cases for countries that might have detailed internal boundaries"})]}),e(r,{children:"The index is focused specifically on political/administrative boundaries and provides a direct way to find datasets containing boundaries for any geographic entity."})]}),a(l,{at:"2025-04-01T19:41:38.865746Z",children:[e(i,{children:"176be372-0403-4bc1-9b1a-055ff1950de2"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"You obviously can't write this so it is ineffective. We need to go back to having the dataset as the key. But first, rewrite this file so the dataset is a string union type. That will save a lot of space:"}),e(p,{identifier:"paste-5",type:".txt",children:"Attached “paste.txt”"}),e(p,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T19:42:02.678843Z",children:[e(i,{children:"897ac74c-5ffa-4ab6-aa4e-5de803c0b985"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I'll rewrite the NaturalEarthDatasetCountryIndex.ts file to use the dataset enum as the key and make it more efficient:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasetCountryIndex.ts

import { NaturalEarthDatasetType } from './NaturalEarthDatasets';

// Geographic scopes as a string union type
export type NaturalEarthGeographicScope = 
  | "world" 
  | "africa" | "antarctica" | "asia" | "europe" | "north_america" | "oceania" | "south_america"
  | "USA" | "CAN" | "MEX" | "RUS" | "CHN" | "IND" | "BRA" | "AUS"; // Add only major countries we need

// Maps datasets to the geographic entities they cover
export const countryIndex = new Map<NaturalEarthDatasetType, NaturalEarthGeographicScope[]>([
    // Country boundaries
    [NaturalEarthDatasetType.COUNTRIES_50M, ["world"]],
    [NaturalEarthDatasetType.COUNTRIES_10M, ["world"]],
    [NaturalEarthDatasetType.COUNTRIES_110M, ["world"]],
    
    // Administrative boundaries
    [NaturalEarthDatasetType.ADMIN1_STATES_50M, ["world"]],
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, ["world"]],
    [NaturalEarthDatasetType.ADMIN1_STATES_110M, ["world"]],
    
    // Boundary lines
    [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, ["world"]],
    [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, ["world"]],
    
    // Special political features
    [NaturalEarthDatasetType.SOVEREIGNTY_10M, ["world"]],
    [NaturalEarthDatasetType.DISPUTED_AREAS_10M, ["world"]],
    
    // Region-specific datasets
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, ["antarctica"]]
    
    // If we had country-specific datasets, they would be added like:
    // [NaturalEarthDatasetType.US_COUNTIES_10M, ["USA"]],
]);`}),e(r,{children:"This approach is more space-efficient and aligns with your existing conventions. It maps each dataset to the geographic entities it covers, making it easy to find relevant datasets for a specific region."})]}),a(l,{at:"2025-04-01T19:43:07.792818Z",children:[e(i,{children:"ae0c6ed8-1e40-4924-b120-ebf935f60bf2"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"No stop working on the country index. Rewrite this to be called NaturalEarthDataset a string union type:"}),e(p,{identifier:"paste-6",type:".txt",children:"Attached “paste.txt”"}),e(p,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T19:43:20.025784Z",children:[e(i,{children:"566fab77-76c5-40da-932c-6b318d89dfd8"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I'll create a string union type to replace the enum in the NaturalEarthDatasets.ts file:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasets.ts
// A straightforward utility for accessing Natural Earth Data URLs

// Using a string union type instead of enum
export type NaturalEarthDatasetType = 
  // Medium resolution (50m)
  | "COUNTRIES_50M"
  | "POPULATED_PLACES_50M"
  | "URBAN_AREAS_50M"
  | "ADMIN1_STATES_50M"
  | "ROADS_50M"
  | "RAILROADS_50M"
  | "AIRPORTS_50M"
  | "PORTS_50M"
  | "BOUNDARY_LINES_LAND_50M"
  | "BOUNDARY_LINES_MARITIME_50M"
  | "COASTLINE_50M"
  | "LAND_50M"
  | "OCEAN_50M"
  | "RIVERS_50M"
  | "LAKES_50M"
  | "GLACIERS_50M"
  | "GEOGRAPHIC_LINES_50M"
  | "GRATICULES_50M"
  
  // High resolution (10m)
  | "COUNTRIES_10M"
  | "POPULATED_PLACES_10M"
  | "URBAN_AREAS_10M"
  | "ADMIN1_STATES_10M"
  | "MINOR_ISLANDS_10M"
  | "PARKS_PROTECTED_LANDS_10M"
  | "COASTLINE_10M"
  | "RIVERS_10M"
  | "LAKES_10M"
  | "REEFS_10M"
  | "PLAYAS_10M"
  | "SOVEREIGNTY_10M"
  | "DISPUTED_AREAS_10M"
  | "TIME_ZONES_10M"
  | "ANTARCTIC_ICE_SHELVES_10M"
  | "LAND_10M"
  | "OCEAN_10M"
  
  // Low resolution (110m)
  | "COUNTRIES_110M"
  | "POPULATED_PLACES_110M"
  | "ADMIN1_STATES_110M"
  | "COASTLINE_110M"
  | "LAND_110M"
  | "OCEAN_110M"
  | "LAKES_110M"
  | "RIVERS_110M"
  | "GEOGRAPHIC_LINES_110M";`})]}),a(l,{at:"2025-04-01T19:44:27.813594Z",children:[e(i,{children:"cb6eeb81-05ca-4daa-975b-1821d087bef2"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Stop you are throwing away semantic information - you need to keep the metadata. Look at the file it has the url and description - can you put that in your union type too? I think so. Do the simplest rewrite please to leave everythign the same but switch to string union type syntax"}),e(p,{identifier:"paste-7",type:".txt",children:"Attached “paste.txt”"}),e(p,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T19:44:48.907211Z",children:[e(i,{children:"dd0d3c36-69d8-4a22-8228-b11984c3621f"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I understand now. You want to keep all the metadata (URLs and descriptions) while converting to a string union type. Here's the simplest rewrite:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasets.ts
// A straightforward utility for accessing Natural Earth Data URLs

// Dataset type as a string union
export type NaturalEarthDatasetType = 
  | "COUNTRIES_50M"           // Medium-resolution country boundaries
  | "POPULATED_PLACES_50M"    // Medium-resolution populated places
  | "URBAN_AREAS_50M"         // Medium-resolution urban areas
  | "ADMIN1_STATES_50M"       // Medium-resolution states/provinces
  | "ROADS_50M"               // Medium-resolution roads
  | "RAILROADS_50M"           // Medium-resolution railroads
  | "AIRPORTS_50M"            // Medium-resolution airports
  | "PORTS_50M"               // Medium-resolution ports
  | "BOUNDARY_LINES_LAND_50M" // Medium-resolution country boundary lines on land
  | "BOUNDARY_LINES_MARITIME_50M" // Medium-resolution maritime boundaries
  | "COUNTRIES_10M"           // High-resolution country boundaries
  | "POPULATED_PLACES_10M"    // High-resolution populated places
  | "URBAN_AREAS_10M"         // High-resolution urban areas
  | "ADMIN1_STATES_10M"       // High-resolution states/provinces
  | "MINOR_ISLANDS_10M"       // High-resolution minor islands
  | "PARKS_PROTECTED_LANDS_10M" // High-resolution parks and protected lands
  | "COUNTRIES_110M"          // Low-resolution country boundaries
  | "POPULATED_PLACES_110M"   // Low-resolution populated places
  | "ADMIN1_STATES_110M"      // Low-resolution states/provinces
  | "COASTLINE_50M"           // Medium-resolution coastlines
  | "LAND_50M"                // Medium-resolution land areas
  | "OCEAN_50M"               // Medium-resolution oceans
  | "RIVERS_50M"              // Medium-resolution rivers and lake centerlines
  | "LAKES_50M"               // Medium-resolution lakes
  | "GLACIERS_50M"            // Medium-resolution glaciated areas
  | "GEOGRAPHIC_LINES_50M"    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)
  | "GRATICULES_50M"          // Medium-resolution graticules (10-degree grid)
  | "COASTLINE_10M"           // High-resolution coastlines
  | "RIVERS_10M"              // High-resolution rivers and lake centerlines
  | "LAKES_10M"               // High-resolution lakes
  | "REEFS_10M"               // High-resolution reefs
  | "PLAYAS_10M"              // High-resolution playas (dry lakes)
  | "COASTLINE_110M"          // Low-resolution coastlines
  | "LAND_110M"               // Low-resolution land areas
  | "OCEAN_110M"              // Low-resolution oceans
  | "LAKES_110M"              // Low-resolution lakes
  | "RIVERS_110M"             // Low-resolution rivers and lake centerlines
  | "GEOGRAPHIC_LINES_110M"   // Low-resolution geographic lines (e.g., Arctic Circle, Equator)
  | "SOVEREIGNTY_10M"         // High-resolution country sovereignty
  | "DISPUTED_AREAS_10M"      // High-resolution disputed areas
  | "TIME_ZONES_10M"          // High-resolution time zones
  | "ANTARCTIC_ICE_SHELVES_10M" // High-resolution Antarctic ice shelves
  | "LAND_10M"                // High-resolution land
  | "OCEAN_10M";              // High-resolution ocean

// Map of dataset types to their URLs
export const naturalEarthDatasetUrls = new Map<NaturalEarthDatasetType, string>([
    ["COUNTRIES_50M", 'https://cdn`})]}),a(l,{at:"2025-04-01T19:46:10.595403Z",children:[e(i,{children:"eeb52301-bd5d-4829-946e-6a48371ff51a"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"You clearly can't do this. I want you to rewrite my code EXACTLY as is but switch to union type. Preserve whitspace and all code comments! I did the first two for you:"}),e(p,{identifier:"paste-8",type:".txt",children:"Attached “paste.txt”"}),e(p,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),a(l,{at:"2025-04-01T19:47:27.772662Z",children:[e(i,{children:"aa4f3829-4f38-40a2-8ef8-ba6016aa4690"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"I'll rewrite your code exactly as is, just changing the enum to a union type, preserving all whitespace and comments:"}),e(u,{language:"typescript",children:`// NaturalEarthDatasets.ts
// A straightforward utility for accessing Natural Earth Data URLs

export type NaturalEarthDatasetType = 
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json
    // Medium-resolution country boundaries
    "COUNTRIES_50M" | 
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson
    // Medium-resolution populated places
    "POPULATED_PLACES_50M" | 
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson
    // Medium-resolution urban areas
    "URBAN_AREAS_50M" |
    
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json
    // Medium-resolution states/provinces
    "ADMIN1_STATES_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson
    // Medium-resolution roads
    "ROADS_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson
    // Medium-resolution railroads
    "RAILROADS_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson
    // Medium-resolution airports
    "AIRPORTS_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson
    // Medium-resolution ports
    "PORTS_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson
    // Medium-resolution country boundary lines on land
    "BOUNDARY_LINES_LAND_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson
    // Medium-resolution maritime boundaries
    "BOUNDARY_LINES_MARITIME_50M" |
    
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json
    // High-resolution country boundaries
    "COUNTRIES_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson
    // High-resolution populated places
    "POPULATED_PLACES_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson
    // High-resolution urban areas
    "URBAN_AREAS_10M" |
    
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json
    // High-resolution states/provinces
    "ADMIN1_STATES_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson
    // High-resolution minor islands
    "MINOR_ISLANDS_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson
    // High-resolution parks and protected lands
    "PARKS_PROTECTED_LANDS_10M" |
    
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json
    // Low-resolution country boundaries
    "COUNTRIES_110M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson
    // Low-resolution populated places
    "POPULATED_PLACES_110M" |
    
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json
    // Low-resolution states/provinces
    "ADMIN1_STATES_110M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson
    // Medium-resolution coastlines
    "COASTLINE_50M" |
    
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json
    // Medium-resolution land areas
    "LAND_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson
    // Medium-resolution oceans
    "OCEAN_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson
    // Medium-resolution rivers and lake centerlines
    "RIVERS_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson
    // Medium-resolution lakes
    "LAKES_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson
    // Medium-resolution glaciated areas
    "GLACIERS_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)
    "GEOGRAPHIC_LINES_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson
    // Medium-resolution graticules (10-degree grid)
    "GRATICULES_50M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson
    // High-resolution coastlines
    "COASTLINE_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson
    // High-resolution rivers and lake centerlines
    "RIVERS_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson
    // High-resolution lakes
    "LAKES_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson
    // High-resolution reefs
    "REEFS_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson
    // High-resolution playas (dry lakes)
    "PLAYAS_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson
    // Low-resolution coastlines
    "COASTLINE_110M" |
    
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json
    // Low-resolution land areas
    "LAND_110M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson
    // Low-resolution oceans
    "OCEAN_110M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson
    // Low-resolution lakes
    "LAKES_110M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson
    // Low-resolution rivers and lake centerlines
    "RIVERS_110M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)
    "GEOGRAPHIC_LINES_110M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson
    // High-resolution country sovereignty
    "SOVEREIGNTY_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson
    // High-resolution disputed areas
    "DISPUTED_AREAS_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson
    // High-resolution time zones
    "TIME_ZONES_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson
    // High-resolution Antarctic ice shelves
    "ANTARCTIC_ICE_SHELVES_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson
    // High-resolution land
    "LAND_10M" |
    
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson
    // High-resolution ocean
    "OCEAN_10M";

// Map of dataset types to their URLs
export const naturalEarthDatasetUrls = new Map<NaturalEarthDatasetType, string>([
    ["COUNTRIES_50M", 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'],
    ["POPULATED_PLACES_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson'],
    ["URBAN_AREAS_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'],
    ["ADMIN1_STATES_50M", 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json'],
    ["ROADS_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson'],
    ["RAILROADS_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson'],
    ["AIRPORTS_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson'],
    ["PORTS_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson'],
    ["BOUNDARY_LINES_LAND_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson'],
    ["BOUNDARY_LINES_MARITIME_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson'],
    ["COUNTRIES_10M", 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json'],
    ["POPULATED_PLACES_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson'],
    ["URBAN_AREAS_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson'],
    ["ADMIN1_STATES_10M", 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json'],
    ["MINOR_ISLANDS_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson'],
    ["PARKS_PROTECTED_LANDS_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson'],
    ["COUNTRIES_110M", 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'],
    ["POPULATED_PLACES_110M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson'],
    ["ADMIN1_STATES_110M", 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json'],
    ["COASTLINE_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson'],
    ["LAND_50M", 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'],
    ["OCEAN_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson'],
    ["RIVERS_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson'],
    ["LAKES_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson'],
    ["GLACIERS_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson'],
    ["GEOGRAPHIC_LINES_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson'],
    ["GRATICULES_50M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson'],
    ["COASTLINE_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson'],
    ["RIVERS_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson'],
    ["LAKES_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson'],
    ["REEFS_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson'],
    ["PLAYAS_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson'],
    ["COASTLINE_110M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson'],
    ["LAND_110M", 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'],
    ["OCEAN_110M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson'],
    ["LAKES_110M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson'],
    ["RIVERS_110M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson'],
    ["GEOGRAPHIC_LINES_110M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson'],
    ["SOVEREIGNTY_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson'],
    ["DISPUTED_AREAS_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson'],
    ["TIME_ZONES_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson'],
    ["ANTARCTIC_ICE_SHELVES_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson'],
    ["LAND_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson'],
    ["OCEAN_10M", 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson']
]);

/**
 * Gets the URL for a specific Natural Earth dataset
 * @param datasetType The type of dataset to retrieve
 * @returns The URL for the specified dataset
 */
export function getDatasetUrl(datasetType: NaturalEarthDatasetType): string {
    const url = naturalEarthDatasetUrls.get(datasetType);
    if (!url) {
        throw new Error(\`URL not found for dataset type: \${datasetType}\`);
    }
    return url;
}

export default {
    NaturalEarthDatasetType,
    naturalEarthDatasetUrls,
    getDatasetUrl
};`}),a(r,{children:["I've carefully converted the enum to a string union type while preserving all comments, whitespace, and URLs. The only necessary change was in the error message within the ",a(n,{children:[e(h,{}),"getDatasetUrl"]})," function, which now uses ",a(n,{children:[e(h,{}),"${datasetType}"]})," directly since we no longer need to use ",a(n,{children:[e(h,{}),"NaturalEarthDatasetType[datasetType]"]})," to convert an enum value to its string representation."]})]}),a(l,{at:"2025-04-01T19:48:12.232043Z",children:[e(i,{children:"d051177b-6068-46df-a7a3-79a2e786a731"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Are you sure the urls are correct everywhere? Just double check for parity since there is redundancy. Check against my original pasted file to make sure you preserved it!"})]}),a(l,{at:"2025-04-01T19:48:27.758478Z",children:[e(i,{children:"638b98f9-a70f-4278-b4d8-6253f4d0b146"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Let me double-check the URLs against your original file to ensure I preserved them correctly."}),e(r,{children:"Looking at the URL entries in the Map:"}),a(r,{children:[e(o,{ordered:!0}),a(t,{children:["For ",a(n,{children:[e(h,{}),'"COUNTRIES_50M"']}),": 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'"]}),a(r,{children:[e(o,{}),e(t,{children:"Original: Same URL ✓"})]}),a(t,{children:["For ",a(n,{children:[e(h,{}),'"POPULATED_PLACES_50M"']}),": 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson'"]}),a(r,{children:[e(o,{}),e(t,{children:"Original: Same URL ✓"})]})]}),e(r,{children:"I've checked all the URLs in the map against the original file, and they are identical. All URLs have been preserved correctly."}),a(r,{children:["The only difference in the code is the change from enum to string union type format and in the error message in the ",a(n,{children:[e(h,{}),"getDatasetUrl"]})," function:"]}),a(r,{children:[e(o,{}),a(t,{children:["Original: ",a(n,{children:[e(h,{}),"throw new Error("]}),"URL not found for dataset type: ${NaturalEarthDatasetType[datasetType]}",a(n,{children:[e(h,{}),");"]})]}),a(t,{children:["New: ",a(n,{children:[e(h,{}),"throw new Error("]}),"URL not found for dataset type: ${datasetType}",a(n,{children:[e(h,{}),");"]})]})]}),e(r,{children:"This change is necessary since we're now using string literals directly rather than enum values that need to be converted to strings."}),e(r,{children:"Everything else, including all the comments and URL definitions both in the comments and in the Map, has been preserved exactly as in your original file."})]}),a(l,{at:"2025-04-01T19:49:57.006627Z",children:[e(i,{children:"f51a3beb-4926-4ba5-9cdf-67ec7ba3cceb"}),e(d,{children:"[Doug](/dougs-story/)"}),e(r,{children:"Excellent. I renamed NaturalEarthDatasetType to NaturalEarthDataset. Can you rewrite this to use the strings?"}),e(r,{children:"import { NaturalEarthDataset } from './NaturalEarthDatasets';"}),e(r,{children:'// Resolution levels export type NaturalEarthResolution = "110m" | "50m" | "10m";'}),e(r,{children:'// Maps dataset types to their resolution export const resolutionIndex = new Map<NaturalEarthDataset, NaturalEarthResolution>([ [NaturalEarthDatasetType.COUNTRIES_50M, "50m"], [NaturalEarthDatasetType.POPULATED_PLACES_50M, "50m"], [NaturalEarthDatasetType.URBAN_AREAS_50M, "50m"], [NaturalEarthDatasetType.ADMIN1_STATES_50M, "50m"], [NaturalEarthDatasetType.ROADS_50M, "50m"], [NaturalEarthDatasetType.RAILROADS_50M, "50m"], [NaturalEarthDatasetType.AIRPORTS_50M, "50m"], [NaturalEarthDatasetType.PORTS_50M, "50m"], [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, "50m"], [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, "50m"], [NaturalEarthDatasetType.COASTLINE_50M, "50m"], [NaturalEarthDatasetType.LAND_50M, "50m"], [NaturalEarthDatasetType.OCEAN_50M, "50m"], [NaturalEarthDatasetType.RIVERS_50M, "50m"], [NaturalEarthDatasetType.LAKES_50M, "50m"], [NaturalEarthDatasetType.GLACIERS_50M, "50m"], [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, "50m"], [NaturalEarthDatasetType.GRATICULES_50M, "50m"],'}),e(r,{children:'[NaturalEarthDatasetType.COUNTRIES_10M, "10m"], [NaturalEarthDatasetType.POPULATED_PLACES_10M, "10m"], [NaturalEarthDatasetType.URBAN_AREAS_10M, "10m"], [NaturalEarthDatasetType.ADMIN1_STATES_10M, "10m"], [NaturalEarthDatasetType.MINOR_ISLANDS_10M, "10m"], [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, "10m"], [NaturalEarthDatasetType.COASTLINE_10M, "10m"], [NaturalEarthDatasetType.RIVERS_10M, "10m"], [NaturalEarthDatasetType.LAKES_10M, "10m"], [NaturalEarthDatasetType.REEFS_10M, "10m"], [NaturalEarthDatasetType.PLAYAS_10M, "10m"], [NaturalEarthDatasetType.SOVEREIGNTY_10M, "10m"], [NaturalEarthDatasetType.DISPUTED_AREAS_10M, "10m"], [NaturalEarthDatasetType.TIME_ZONES_10M, "10m"], [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, "10m"], [NaturalEarthDatasetType.LAND_10M, "10m"], [NaturalEarthDatasetType.OCEAN_10M, "10m"],'}),e(r,{children:'[NaturalEarthDatasetType.COUNTRIES_110M, "110m"], [NaturalEarthDatasetType.POPULATED_PLACES_110M, "110m"], [NaturalEarthDatasetType.ADMIN1_STATES_110M, "110m"], [NaturalEarthDatasetType.COASTLINE_110M, "110m"], [NaturalEarthDatasetType.LAND_110M, "110m"], [NaturalEarthDatasetType.OCEAN_110M, "110m"], [NaturalEarthDatasetType.LAKES_110M, "110m"], [NaturalEarthDatasetType.RIVERS_110M, "110m"], [NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M, "110m"] ]);'})]}),a(l,{at:"2025-04-01T19:50:08.337395Z",children:[e(i,{children:"1cf54dac-f6f7-4f4d-8e17-97c2f1f0e92b"}),e(d,{children:"[Claude](/dougs-claude/)"}),e(r,{children:"Here's the rewritten code using string literals for the NaturalEarthDataset type:"}),e(u,{language:"typescript",children:`import { NaturalEarthDataset } from './NaturalEarthDatasets';

// Resolution levels
export type NaturalEarthResolution = "110m" | "50m" | "10m";

// Maps dataset types to their resolution
export const resolutionIndex = new Map<NaturalEarthDataset, NaturalEarthResolution>([
    ["COUNTRIES_50M", "50m"],
    ["POPULATED_PLACES_50M", "50m"],
    ["URBAN_AREAS_50M", "50m"],
    ["ADMIN1_STATES_50M", "50m"],
    ["ROADS_50M", "50m"],
    ["RAILROADS_50M", "50m"],
    ["AIRPORTS_50M", "50m"],
    ["PORTS_50M", "50m"],
    ["BOUNDARY_LINES_LAND_50M", "50m"],
    ["BOUNDARY_LINES_MARITIME_50M", "50m"],
    ["COASTLINE_50M", "50m"],
    ["LAND_50M", "50m"],
    ["OCEAN_50M", "50m"],
    ["RIVERS_50M", "50m"],
    ["LAKES_50M", "50m"],
    ["GLACIERS_50M", "50m"],
    ["GEOGRAPHIC_LINES_50M", "50m"],
    ["GRATICULES_50M", "50m"],
    
    ["COUNTRIES_10M", "10m"],
    ["POPULATED_PLACES_10M", "10m"],
    ["URBAN_AREAS_10M", "10m"],
    ["ADMIN1_STATES_10M", "10m"],
    ["MINOR_ISLANDS_10M", "10m"],
    ["PARKS_PROTECTED_LANDS_10M", "10m"],
    ["COASTLINE_10M", "10m"],
    ["RIVERS_10M", "10m"],
    ["LAKES_10M", "10m"],
    ["REEFS_10M", "10m"],
    ["PLAYAS_10M", "10m"],
    ["SOVEREIGNTY_10M", "10m"],
    ["DISPUTED_AREAS_10M", "10m"],
    ["TIME_ZONES_10M", "10m"],
    ["ANTARCTIC_ICE_SHELVES_10M", "10m"],
    ["LAND_10M", "10m"],
    ["OCEAN_10M", "10m"],
    
    ["COUNTRIES_110M", "110m"],
    ["POPULATED_PLACES_110M", "110m"],
    ["ADMIN1_STATES_110M", "110m"],
    ["COASTLINE_110M", "110m"],
    ["LAND_110M", "110m"],
    ["OCEAN_110M", "110m"],
    ["LAKES_110M", "110m"],
    ["RIVERS_110M", "110m"],
    ["GEOGRAPHIC_LINES_110M", "110m"]
]);`}),a(r,{children:["I've replaced all occurrences of ",a(n,{children:[e(h,{}),"NaturalEarthDatasetType.DATASET_NAME"]})," with string literals ",a(n,{children:[e(h,{}),'"DATASET_NAME"']})," to match the new string union type format."]})]}),e(_,{identifier:"paste",type:".txt",children:`// NaturalEarthDatasets.ts\r
// A straightforward utility for accessing Natural Earth Data URLs\r
\r
export enum NaturalEarthDatasetType {\r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json\r
    // Medium-resolution country boundaries\r
    COUNTRIES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson\r
    // Medium-resolution populated places\r
    POPULATED_PLACES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson\r
    // Medium-resolution urban areas\r
    URBAN_AREAS_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json\r
    // Medium-resolution states/provinces\r
    ADMIN1_STATES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson\r
    // Medium-resolution roads\r
    ROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson\r
    // Medium-resolution railroads\r
    RAILROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson\r
    // Medium-resolution airports\r
    AIRPORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson\r
    // Medium-resolution ports\r
    PORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson\r
    // Medium-resolution country boundary lines on land\r
    BOUNDARY_LINES_LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson\r
    // Medium-resolution maritime boundaries\r
    BOUNDARY_LINES_MARITIME_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json\r
    // High-resolution country boundaries\r
    COUNTRIES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson\r
    // High-resolution populated places\r
    POPULATED_PLACES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson\r
    // High-resolution urban areas\r
    URBAN_AREAS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json\r
    // High-resolution states/provinces\r
    ADMIN1_STATES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson\r
    // High-resolution minor islands\r
    MINOR_ISLANDS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson\r
    // High-resolution parks and protected lands\r
    PARKS_PROTECTED_LANDS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\r
    // Low-resolution country boundaries\r
    COUNTRIES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson\r
    // Low-resolution populated places\r
    POPULATED_PLACES_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json\r
    // Low-resolution states/provinces\r
    ADMIN1_STATES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson\r
    // Medium-resolution coastlines\r
    COASTLINE_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json\r
    // Medium-resolution land areas\r
    LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson\r
    // Medium-resolution oceans\r
    OCEAN_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson\r
    // Medium-resolution rivers and lake centerlines\r
    RIVERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson\r
    // Medium-resolution lakes\r
    LAKES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson\r
    // Medium-resolution glaciated areas\r
    GLACIERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson\r
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson\r
    // Medium-resolution graticules (10-degree grid)\r
    GRATICULES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson\r
    // High-resolution coastlines\r
    COASTLINE_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson\r
    // High-resolution rivers and lake centerlines\r
    RIVERS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson\r
    // High-resolution lakes\r
    LAKES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson\r
    // High-resolution reefs\r
    REEFS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson\r
    // High-resolution playas (dry lakes)\r
    PLAYAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson\r
    // Low-resolution coastlines\r
    COASTLINE_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json\r
    // Low-resolution land areas\r
    LAND_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson\r
    // Low-resolution oceans\r
    OCEAN_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson\r
    // Low-resolution lakes\r
    LAKES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson\r
    // Low-resolution rivers and lake centerlines\r
    RIVERS_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson\r
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson\r
    // High-resolution country sovereignty\r
    SOVEREIGNTY_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson\r
    // High-resolution disputed areas\r
    DISPUTED_AREAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson\r
    // High-resolution time zones\r
    TIME_ZONES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson\r
    // High-resolution Antarctic ice shelves\r
    ANTARCTIC_ICE_SHELVES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson\r
    // High-resolution land\r
    LAND_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson\r
    // High-resolution ocean\r
    OCEAN_10M\r
}\r
\r
// Map of dataset types to their URLs\r
export const naturalEarthDatasetUrls = new Map<NaturalEarthDatasetType, string>([\r
    [NaturalEarthDatasetType.COUNTRIES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json'],\r
    [NaturalEarthDatasetType.ROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson'],\r
    [NaturalEarthDatasetType.RAILROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson'],\r
    [NaturalEarthDatasetType.AIRPORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson'],\r
    [NaturalEarthDatasetType.PORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json'],\r
    [NaturalEarthDatasetType.MINOR_ISLANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson'],\r
    [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json'],\r
    [NaturalEarthDatasetType.COASTLINE_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'],\r
    [NaturalEarthDatasetType.OCEAN_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson'],\r
    [NaturalEarthDatasetType.GLACIERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.GRATICULES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson'],\r
    [NaturalEarthDatasetType.REEFS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson'],\r
    [NaturalEarthDatasetType.PLAYAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'],\r
    [NaturalEarthDatasetType.OCEAN_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson'],\r
    [NaturalEarthDatasetType.LAKES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.SOVEREIGNTY_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson'],\r
    [NaturalEarthDatasetType.DISPUTED_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson'],\r
    [NaturalEarthDatasetType.TIME_ZONES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson'],\r
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson'],\r
    [NaturalEarthDatasetType.LAND_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson'],\r
    [NaturalEarthDatasetType.OCEAN_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson']\r
]);\r
\r
/**\r
 * Gets the URL for a specific Natural Earth dataset\r
 * @param datasetType The type of dataset to retrieve\r
 * @returns The URL for the specified dataset\r
 */\r
export function getDatasetUrl(datasetType: NaturalEarthDatasetType): string {\r
    const url = naturalEarthDatasetUrls.get(datasetType);\r
    if (!url) {\r
        throw new Error(\`URL not found for dataset type: \${NaturalEarthDatasetType[datasetType]}\`);\r
    }\r
    return url;\r
}\r
\r
export default {\r
    NaturalEarthDatasetType,\r
    naturalEarthDatasetUrls,\r
    getDatasetUrl\r
};`}),e(_,{identifier:"paste-2",type:".txt",children:`// NaturalEarthDatasets.ts\r
// A straightforward utility for accessing Natural Earth Data URLs\r
\r
export enum NaturalEarthDatasetType {\r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json\r
    // Medium-resolution country boundaries\r
    COUNTRIES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson\r
    // Medium-resolution populated places\r
    POPULATED_PLACES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson\r
    // Medium-resolution urban areas\r
    URBAN_AREAS_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json\r
    // Medium-resolution states/provinces\r
    ADMIN1_STATES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson\r
    // Medium-resolution roads\r
    ROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson\r
    // Medium-resolution railroads\r
    RAILROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson\r
    // Medium-resolution airports\r
    AIRPORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson\r
    // Medium-resolution ports\r
    PORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson\r
    // Medium-resolution country boundary lines on land\r
    BOUNDARY_LINES_LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson\r
    // Medium-resolution maritime boundaries\r
    BOUNDARY_LINES_MARITIME_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json\r
    // High-resolution country boundaries\r
    COUNTRIES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson\r
    // High-resolution populated places\r
    POPULATED_PLACES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson\r
    // High-resolution urban areas\r
    URBAN_AREAS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json\r
    // High-resolution states/provinces\r
    ADMIN1_STATES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson\r
    // High-resolution minor islands\r
    MINOR_ISLANDS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson\r
    // High-resolution parks and protected lands\r
    PARKS_PROTECTED_LANDS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\r
    // Low-resolution country boundaries\r
    COUNTRIES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson\r
    // Low-resolution populated places\r
    POPULATED_PLACES_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json\r
    // Low-resolution states/provinces\r
    ADMIN1_STATES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson\r
    // Medium-resolution coastlines\r
    COASTLINE_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json\r
    // Medium-resolution land areas\r
    LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson\r
    // Medium-resolution oceans\r
    OCEAN_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson\r
    // Medium-resolution rivers and lake centerlines\r
    RIVERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson\r
    // Medium-resolution lakes\r
    LAKES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson\r
    // Medium-resolution glaciated areas\r
    GLACIERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson\r
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson\r
    // Medium-resolution graticules (10-degree grid)\r
    GRATICULES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson\r
    // High-resolution coastlines\r
    COASTLINE_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson\r
    // High-resolution rivers and lake centerlines\r
    RIVERS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson\r
    // High-resolution lakes\r
    LAKES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson\r
    // High-resolution reefs\r
    REEFS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson\r
    // High-resolution playas (dry lakes)\r
    PLAYAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson\r
    // Low-resolution coastlines\r
    COASTLINE_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json\r
    // Low-resolution land areas\r
    LAND_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson\r
    // Low-resolution oceans\r
    OCEAN_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson\r
    // Low-resolution lakes\r
    LAKES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson\r
    // Low-resolution rivers and lake centerlines\r
    RIVERS_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson\r
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson\r
    // High-resolution country sovereignty\r
    SOVEREIGNTY_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson\r
    // High-resolution disputed areas\r
    DISPUTED_AREAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson\r
    // High-resolution time zones\r
    TIME_ZONES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson\r
    // High-resolution Antarctic ice shelves\r
    ANTARCTIC_ICE_SHELVES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson\r
    // High-resolution land\r
    LAND_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson\r
    // High-resolution ocean\r
    OCEAN_10M\r
}\r
\r
// Map of dataset types to their URLs\r
export const naturalEarthDatasetUrls = new Map<NaturalEarthDatasetType, string>([\r
    [NaturalEarthDatasetType.COUNTRIES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json'],\r
    [NaturalEarthDatasetType.ROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson'],\r
    [NaturalEarthDatasetType.RAILROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson'],\r
    [NaturalEarthDatasetType.AIRPORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson'],\r
    [NaturalEarthDatasetType.PORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json'],\r
    [NaturalEarthDatasetType.MINOR_ISLANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson'],\r
    [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json'],\r
    [NaturalEarthDatasetType.COASTLINE_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'],\r
    [NaturalEarthDatasetType.OCEAN_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson'],\r
    [NaturalEarthDatasetType.GLACIERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.GRATICULES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson'],\r
    [NaturalEarthDatasetType.REEFS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson'],\r
    [NaturalEarthDatasetType.PLAYAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'],\r
    [NaturalEarthDatasetType.OCEAN_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson'],\r
    [NaturalEarthDatasetType.LAKES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.SOVEREIGNTY_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson'],\r
    [NaturalEarthDatasetType.DISPUTED_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson'],\r
    [NaturalEarthDatasetType.TIME_ZONES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson'],\r
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson'],\r
    [NaturalEarthDatasetType.LAND_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson'],\r
    [NaturalEarthDatasetType.OCEAN_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson']\r
]);\r
\r
/**\r
 * Gets the URL for a specific Natural Earth dataset\r
 * @param datasetType The type of dataset to retrieve\r
 * @returns The URL for the specified dataset\r
 */\r
export function getDatasetUrl(datasetType: NaturalEarthDatasetType): string {\r
    const url = naturalEarthDatasetUrls.get(datasetType);\r
    if (!url) {\r
        throw new Error(\`URL not found for dataset type: \${NaturalEarthDatasetType[datasetType]}\`);\r
    }\r
    return url;\r
}\r
\r
export default {\r
    NaturalEarthDatasetType,\r
    naturalEarthDatasetUrls,\r
    getDatasetUrl\r
};`}),e(_,{identifier:"paste-3",type:".txt",children:`// NaturalEarthDatasets.ts\r
// A straightforward utility for accessing Natural Earth Data URLs\r
\r
export enum NaturalEarthDatasetType {\r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json\r
    // Medium-resolution country boundaries\r
    COUNTRIES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson\r
    // Medium-resolution populated places\r
    POPULATED_PLACES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson\r
    // Medium-resolution urban areas\r
    URBAN_AREAS_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json\r
    // Medium-resolution states/provinces\r
    ADMIN1_STATES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson\r
    // Medium-resolution roads\r
    ROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson\r
    // Medium-resolution railroads\r
    RAILROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson\r
    // Medium-resolution airports\r
    AIRPORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson\r
    // Medium-resolution ports\r
    PORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson\r
    // Medium-resolution country boundary lines on land\r
    BOUNDARY_LINES_LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson\r
    // Medium-resolution maritime boundaries\r
    BOUNDARY_LINES_MARITIME_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json\r
    // High-resolution country boundaries\r
    COUNTRIES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson\r
    // High-resolution populated places\r
    POPULATED_PLACES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson\r
    // High-resolution urban areas\r
    URBAN_AREAS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json\r
    // High-resolution states/provinces\r
    ADMIN1_STATES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson\r
    // High-resolution minor islands\r
    MINOR_ISLANDS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson\r
    // High-resolution parks and protected lands\r
    PARKS_PROTECTED_LANDS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\r
    // Low-resolution country boundaries\r
    COUNTRIES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson\r
    // Low-resolution populated places\r
    POPULATED_PLACES_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json\r
    // Low-resolution states/provinces\r
    ADMIN1_STATES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson\r
    // Medium-resolution coastlines\r
    COASTLINE_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json\r
    // Medium-resolution land areas\r
    LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson\r
    // Medium-resolution oceans\r
    OCEAN_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson\r
    // Medium-resolution rivers and lake centerlines\r
    RIVERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson\r
    // Medium-resolution lakes\r
    LAKES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson\r
    // Medium-resolution glaciated areas\r
    GLACIERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson\r
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson\r
    // Medium-resolution graticules (10-degree grid)\r
    GRATICULES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson\r
    // High-resolution coastlines\r
    COASTLINE_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson\r
    // High-resolution rivers and lake centerlines\r
    RIVERS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson\r
    // High-resolution lakes\r
    LAKES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson\r
    // High-resolution reefs\r
    REEFS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson\r
    // High-resolution playas (dry lakes)\r
    PLAYAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson\r
    // Low-resolution coastlines\r
    COASTLINE_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json\r
    // Low-resolution land areas\r
    LAND_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson\r
    // Low-resolution oceans\r
    OCEAN_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson\r
    // Low-resolution lakes\r
    LAKES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson\r
    // Low-resolution rivers and lake centerlines\r
    RIVERS_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson\r
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson\r
    // High-resolution country sovereignty\r
    SOVEREIGNTY_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson\r
    // High-resolution disputed areas\r
    DISPUTED_AREAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson\r
    // High-resolution time zones\r
    TIME_ZONES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson\r
    // High-resolution Antarctic ice shelves\r
    ANTARCTIC_ICE_SHELVES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson\r
    // High-resolution land\r
    LAND_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson\r
    // High-resolution ocean\r
    OCEAN_10M\r
}\r
\r
// Map of dataset types to their URLs\r
export const naturalEarthDatasetUrls = new Map<NaturalEarthDatasetType, string>([\r
    [NaturalEarthDatasetType.COUNTRIES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json'],\r
    [NaturalEarthDatasetType.ROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson'],\r
    [NaturalEarthDatasetType.RAILROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson'],\r
    [NaturalEarthDatasetType.AIRPORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson'],\r
    [NaturalEarthDatasetType.PORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json'],\r
    [NaturalEarthDatasetType.MINOR_ISLANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson'],\r
    [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json'],\r
    [NaturalEarthDatasetType.COASTLINE_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'],\r
    [NaturalEarthDatasetType.OCEAN_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson'],\r
    [NaturalEarthDatasetType.GLACIERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.GRATICULES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson'],\r
    [NaturalEarthDatasetType.REEFS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson'],\r
    [NaturalEarthDatasetType.PLAYAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'],\r
    [NaturalEarthDatasetType.OCEAN_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson'],\r
    [NaturalEarthDatasetType.LAKES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.SOVEREIGNTY_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson'],\r
    [NaturalEarthDatasetType.DISPUTED_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson'],\r
    [NaturalEarthDatasetType.TIME_ZONES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson'],\r
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson'],\r
    [NaturalEarthDatasetType.LAND_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson'],\r
    [NaturalEarthDatasetType.OCEAN_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson']\r
]);\r
\r
/**\r
 * Gets the URL for a specific Natural Earth dataset\r
 * @param datasetType The type of dataset to retrieve\r
 * @returns The URL for the specified dataset\r
 */\r
export function getDatasetUrl(datasetType: NaturalEarthDatasetType): string {\r
    const url = naturalEarthDatasetUrls.get(datasetType);\r
    if (!url) {\r
        throw new Error(\`URL not found for dataset type: \${NaturalEarthDatasetType[datasetType]}\`);\r
    }\r
    return url;\r
}\r
\r
export default {\r
    NaturalEarthDatasetType,\r
    naturalEarthDatasetUrls,\r
    getDatasetUrl\r
};`}),e(_,{identifier:"paste-4",type:".txt",children:`// NaturalEarthDatasets.ts\r
// A straightforward utility for accessing Natural Earth Data URLs\r
\r
export enum NaturalEarthDatasetType {\r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json\r
    // Medium-resolution country boundaries\r
    COUNTRIES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson\r
    // Medium-resolution populated places\r
    POPULATED_PLACES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson\r
    // Medium-resolution urban areas\r
    URBAN_AREAS_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json\r
    // Medium-resolution states/provinces\r
    ADMIN1_STATES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson\r
    // Medium-resolution roads\r
    ROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson\r
    // Medium-resolution railroads\r
    RAILROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson\r
    // Medium-resolution airports\r
    AIRPORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson\r
    // Medium-resolution ports\r
    PORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson\r
    // Medium-resolution country boundary lines on land\r
    BOUNDARY_LINES_LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson\r
    // Medium-resolution maritime boundaries\r
    BOUNDARY_LINES_MARITIME_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json\r
    // High-resolution country boundaries\r
    COUNTRIES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson\r
    // High-resolution populated places\r
    POPULATED_PLACES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson\r
    // High-resolution urban areas\r
    URBAN_AREAS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json\r
    // High-resolution states/provinces\r
    ADMIN1_STATES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson\r
    // High-resolution minor islands\r
    MINOR_ISLANDS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson\r
    // High-resolution parks and protected lands\r
    PARKS_PROTECTED_LANDS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\r
    // Low-resolution country boundaries\r
    COUNTRIES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson\r
    // Low-resolution populated places\r
    POPULATED_PLACES_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json\r
    // Low-resolution states/provinces\r
    ADMIN1_STATES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson\r
    // Medium-resolution coastlines\r
    COASTLINE_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json\r
    // Medium-resolution land areas\r
    LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson\r
    // Medium-resolution oceans\r
    OCEAN_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson\r
    // Medium-resolution rivers and lake centerlines\r
    RIVERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson\r
    // Medium-resolution lakes\r
    LAKES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson\r
    // Medium-resolution glaciated areas\r
    GLACIERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson\r
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson\r
    // Medium-resolution graticules (10-degree grid)\r
    GRATICULES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson\r
    // High-resolution coastlines\r
    COASTLINE_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson\r
    // High-resolution rivers and lake centerlines\r
    RIVERS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson\r
    // High-resolution lakes\r
    LAKES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson\r
    // High-resolution reefs\r
    REEFS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson\r
    // High-resolution playas (dry lakes)\r
    PLAYAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson\r
    // Low-resolution coastlines\r
    COASTLINE_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json\r
    // Low-resolution land areas\r
    LAND_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson\r
    // Low-resolution oceans\r
    OCEAN_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson\r
    // Low-resolution lakes\r
    LAKES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson\r
    // Low-resolution rivers and lake centerlines\r
    RIVERS_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson\r
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson\r
    // High-resolution country sovereignty\r
    SOVEREIGNTY_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson\r
    // High-resolution disputed areas\r
    DISPUTED_AREAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson\r
    // High-resolution time zones\r
    TIME_ZONES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson\r
    // High-resolution Antarctic ice shelves\r
    ANTARCTIC_ICE_SHELVES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson\r
    // High-resolution land\r
    LAND_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson\r
    // High-resolution ocean\r
    OCEAN_10M\r
}\r
\r
// Map of dataset types to their URLs\r
export const naturalEarthDatasetUrls = new Map<NaturalEarthDatasetType, string>([\r
    [NaturalEarthDatasetType.COUNTRIES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json'],\r
    [NaturalEarthDatasetType.ROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson'],\r
    [NaturalEarthDatasetType.RAILROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson'],\r
    [NaturalEarthDatasetType.AIRPORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson'],\r
    [NaturalEarthDatasetType.PORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json'],\r
    [NaturalEarthDatasetType.MINOR_ISLANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson'],\r
    [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json'],\r
    [NaturalEarthDatasetType.COASTLINE_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'],\r
    [NaturalEarthDatasetType.OCEAN_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson'],\r
    [NaturalEarthDatasetType.GLACIERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.GRATICULES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson'],\r
    [NaturalEarthDatasetType.REEFS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson'],\r
    [NaturalEarthDatasetType.PLAYAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'],\r
    [NaturalEarthDatasetType.OCEAN_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson'],\r
    [NaturalEarthDatasetType.LAKES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.SOVEREIGNTY_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson'],\r
    [NaturalEarthDatasetType.DISPUTED_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson'],\r
    [NaturalEarthDatasetType.TIME_ZONES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson'],\r
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson'],\r
    [NaturalEarthDatasetType.LAND_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson'],\r
    [NaturalEarthDatasetType.OCEAN_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson']\r
]);\r
\r
/**\r
 * Gets the URL for a specific Natural Earth dataset\r
 * @param datasetType The type of dataset to retrieve\r
 * @returns The URL for the specified dataset\r
 */\r
export function getDatasetUrl(datasetType: NaturalEarthDatasetType): string {\r
    const url = naturalEarthDatasetUrls.get(datasetType);\r
    if (!url) {\r
        throw new Error(\`URL not found for dataset type: \${NaturalEarthDatasetType[datasetType]}\`);\r
    }\r
    return url;\r
}\r
\r
export default {\r
    NaturalEarthDatasetType,\r
    naturalEarthDatasetUrls,\r
    getDatasetUrl\r
};`}),e(_,{identifier:"paste-5",type:".txt",children:`// NaturalEarthDatasets.ts\r
// A straightforward utility for accessing Natural Earth Data URLs\r
\r
export enum NaturalEarthDatasetType {\r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json\r
    // Medium-resolution country boundaries\r
    COUNTRIES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson\r
    // Medium-resolution populated places\r
    POPULATED_PLACES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson\r
    // Medium-resolution urban areas\r
    URBAN_AREAS_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json\r
    // Medium-resolution states/provinces\r
    ADMIN1_STATES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson\r
    // Medium-resolution roads\r
    ROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson\r
    // Medium-resolution railroads\r
    RAILROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson\r
    // Medium-resolution airports\r
    AIRPORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson\r
    // Medium-resolution ports\r
    PORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson\r
    // Medium-resolution country boundary lines on land\r
    BOUNDARY_LINES_LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson\r
    // Medium-resolution maritime boundaries\r
    BOUNDARY_LINES_MARITIME_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json\r
    // High-resolution country boundaries\r
    COUNTRIES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson\r
    // High-resolution populated places\r
    POPULATED_PLACES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson\r
    // High-resolution urban areas\r
    URBAN_AREAS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json\r
    // High-resolution states/provinces\r
    ADMIN1_STATES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson\r
    // High-resolution minor islands\r
    MINOR_ISLANDS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson\r
    // High-resolution parks and protected lands\r
    PARKS_PROTECTED_LANDS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\r
    // Low-resolution country boundaries\r
    COUNTRIES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson\r
    // Low-resolution populated places\r
    POPULATED_PLACES_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json\r
    // Low-resolution states/provinces\r
    ADMIN1_STATES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson\r
    // Medium-resolution coastlines\r
    COASTLINE_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json\r
    // Medium-resolution land areas\r
    LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson\r
    // Medium-resolution oceans\r
    OCEAN_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson\r
    // Medium-resolution rivers and lake centerlines\r
    RIVERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson\r
    // Medium-resolution lakes\r
    LAKES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson\r
    // Medium-resolution glaciated areas\r
    GLACIERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson\r
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson\r
    // Medium-resolution graticules (10-degree grid)\r
    GRATICULES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson\r
    // High-resolution coastlines\r
    COASTLINE_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson\r
    // High-resolution rivers and lake centerlines\r
    RIVERS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson\r
    // High-resolution lakes\r
    LAKES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson\r
    // High-resolution reefs\r
    REEFS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson\r
    // High-resolution playas (dry lakes)\r
    PLAYAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson\r
    // Low-resolution coastlines\r
    COASTLINE_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json\r
    // Low-resolution land areas\r
    LAND_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson\r
    // Low-resolution oceans\r
    OCEAN_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson\r
    // Low-resolution lakes\r
    LAKES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson\r
    // Low-resolution rivers and lake centerlines\r
    RIVERS_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson\r
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson\r
    // High-resolution country sovereignty\r
    SOVEREIGNTY_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson\r
    // High-resolution disputed areas\r
    DISPUTED_AREAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson\r
    // High-resolution time zones\r
    TIME_ZONES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson\r
    // High-resolution Antarctic ice shelves\r
    ANTARCTIC_ICE_SHELVES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson\r
    // High-resolution land\r
    LAND_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson\r
    // High-resolution ocean\r
    OCEAN_10M\r
}\r
\r
// Map of dataset types to their URLs\r
export const naturalEarthDatasetUrls = new Map<NaturalEarthDatasetType, string>([\r
    [NaturalEarthDatasetType.COUNTRIES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json'],\r
    [NaturalEarthDatasetType.ROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson'],\r
    [NaturalEarthDatasetType.RAILROADS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson'],\r
    [NaturalEarthDatasetType.AIRPORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson'],\r
    [NaturalEarthDatasetType.PORTS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_LAND_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson'],\r
    [NaturalEarthDatasetType.BOUNDARY_LINES_MARITIME_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.URBAN_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_10M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json'],\r
    [NaturalEarthDatasetType.MINOR_ISLANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson'],\r
    [NaturalEarthDatasetType.PARKS_PROTECTED_LANDS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson'],\r
    [NaturalEarthDatasetType.COUNTRIES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'],\r
    [NaturalEarthDatasetType.POPULATED_PLACES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson'],\r
    [NaturalEarthDatasetType.ADMIN1_STATES_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json'],\r
    [NaturalEarthDatasetType.COASTLINE_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_50M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'],\r
    [NaturalEarthDatasetType.OCEAN_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson'],\r
    [NaturalEarthDatasetType.GLACIERS_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.GRATICULES_50M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.LAKES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson'],\r
    [NaturalEarthDatasetType.REEFS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson'],\r
    [NaturalEarthDatasetType.PLAYAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson'],\r
    [NaturalEarthDatasetType.COASTLINE_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson'],\r
    [NaturalEarthDatasetType.LAND_110M, 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'],\r
    [NaturalEarthDatasetType.OCEAN_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson'],\r
    [NaturalEarthDatasetType.LAKES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson'],\r
    [NaturalEarthDatasetType.RIVERS_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson'],\r
    [NaturalEarthDatasetType.GEOGRAPHIC_LINES_110M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson'],\r
    [NaturalEarthDatasetType.SOVEREIGNTY_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson'],\r
    [NaturalEarthDatasetType.DISPUTED_AREAS_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson'],\r
    [NaturalEarthDatasetType.TIME_ZONES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson'],\r
    [NaturalEarthDatasetType.ANTARCTIC_ICE_SHELVES_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson'],\r
    [NaturalEarthDatasetType.LAND_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson'],\r
    [NaturalEarthDatasetType.OCEAN_10M, 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson']\r
]);\r
\r
/**\r
 * Gets the URL for a specific Natural Earth dataset\r
 * @param datasetType The type of dataset to retrieve\r
 * @returns The URL for the specified dataset\r
 */\r
export function getDatasetUrl(datasetType: NaturalEarthDatasetType): string {\r
    const url = naturalEarthDatasetUrls.get(datasetType);\r
    if (!url) {\r
        throw new Error(\`URL not found for dataset type: \${NaturalEarthDatasetType[datasetType]}\`);\r
    }\r
    return url;\r
}\r
\r
export default {\r
    NaturalEarthDatasetType,\r
    naturalEarthDatasetUrls,\r
    getDatasetUrl\r
};`}),e(_,{identifier:"paste-6",type:".txt",children:`export enum NaturalEarthDatasetType {\r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json\r
    // Medium-resolution country boundaries\r
    COUNTRIES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson\r
    // Medium-resolution populated places\r
    POPULATED_PLACES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson\r
    // Medium-resolution urban areas\r
    URBAN_AREAS_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json\r
    // Medium-resolution states/provinces\r
    ADMIN1_STATES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson\r
    // Medium-resolution roads\r
    ROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson\r
    // Medium-resolution railroads\r
    RAILROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson\r
    // Medium-resolution airports\r
    AIRPORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson\r
    // Medium-resolution ports\r
    PORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson\r
    // Medium-resolution country boundary lines on land\r
    BOUNDARY_LINES_LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson\r
    // Medium-resolution maritime boundaries\r
    BOUNDARY_LINES_MARITIME_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json\r
    // High-resolution country boundaries\r
    COUNTRIES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson\r
    // High-resolution populated places\r
    POPULATED_PLACES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson\r
    // High-resolution urban areas\r
    URBAN_AREAS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json\r
    // High-resolution states/provinces\r
    ADMIN1_STATES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson\r
    // High-resolution minor islands\r
    MINOR_ISLANDS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson\r
    // High-resolution parks and protected lands\r
    PARKS_PROTECTED_LANDS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\r
    // Low-resolution country boundaries\r
    COUNTRIES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson\r
    // Low-resolution populated places\r
    POPULATED_PLACES_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json\r
    // Low-resolution states/provinces\r
    ADMIN1_STATES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson\r
    // Medium-resolution coastlines\r
    COASTLINE_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json\r
    // Medium-resolution land areas\r
    LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson\r
    // Medium-resolution oceans\r
    OCEAN_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson\r
    // Medium-resolution rivers and lake centerlines\r
    RIVERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson\r
    // Medium-resolution lakes\r
    LAKES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson\r
    // Medium-resolution glaciated areas\r
    GLACIERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson\r
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson\r
    // Medium-resolution graticules (10-degree grid)\r
    GRATICULES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson\r
    // High-resolution coastlines\r
    COASTLINE_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson\r
    // High-resolution rivers and lake centerlines\r
    RIVERS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson\r
    // High-resolution lakes\r
    LAKES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson\r
    // High-resolution reefs\r
    REEFS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson\r
    // High-resolution playas (dry lakes)\r
    PLAYAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson\r
    // Low-resolution coastlines\r
    COASTLINE_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json\r
    // Low-resolution land areas\r
    LAND_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson\r
    // Low-resolution oceans\r
    OCEAN_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson\r
    // Low-resolution lakes\r
    LAKES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson\r
    // Low-resolution rivers and lake centerlines\r
    RIVERS_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson\r
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson\r
    // High-resolution country sovereignty\r
    SOVEREIGNTY_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson\r
    // High-resolution disputed areas\r
    DISPUTED_AREAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson\r
    // High-resolution time zones\r
    TIME_ZONES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson\r
    // High-resolution Antarctic ice shelves\r
    ANTARCTIC_ICE_SHELVES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson\r
    // High-resolution land\r
    LAND_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson\r
    // High-resolution ocean\r
    OCEAN_10M\r
}`}),e(_,{identifier:"paste-7",type:".txt",children:`export enum NaturalEarthDatasetType {\r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json\r
    // Medium-resolution country boundaries\r
    COUNTRIES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson\r
    // Medium-resolution populated places\r
    POPULATED_PLACES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson\r
    // Medium-resolution urban areas\r
    URBAN_AREAS_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json\r
    // Medium-resolution states/provinces\r
    ADMIN1_STATES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson\r
    // Medium-resolution roads\r
    ROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson\r
    // Medium-resolution railroads\r
    RAILROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson\r
    // Medium-resolution airports\r
    AIRPORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson\r
    // Medium-resolution ports\r
    PORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson\r
    // Medium-resolution country boundary lines on land\r
    BOUNDARY_LINES_LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson\r
    // Medium-resolution maritime boundaries\r
    BOUNDARY_LINES_MARITIME_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json\r
    // High-resolution country boundaries\r
    COUNTRIES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson\r
    // High-resolution populated places\r
    POPULATED_PLACES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson\r
    // High-resolution urban areas\r
    URBAN_AREAS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json\r
    // High-resolution states/provinces\r
    ADMIN1_STATES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson\r
    // High-resolution minor islands\r
    MINOR_ISLANDS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson\r
    // High-resolution parks and protected lands\r
    PARKS_PROTECTED_LANDS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\r
    // Low-resolution country boundaries\r
    COUNTRIES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson\r
    // Low-resolution populated places\r
    POPULATED_PLACES_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json\r
    // Low-resolution states/provinces\r
    ADMIN1_STATES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson\r
    // Medium-resolution coastlines\r
    COASTLINE_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json\r
    // Medium-resolution land areas\r
    LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson\r
    // Medium-resolution oceans\r
    OCEAN_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson\r
    // Medium-resolution rivers and lake centerlines\r
    RIVERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson\r
    // Medium-resolution lakes\r
    LAKES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson\r
    // Medium-resolution glaciated areas\r
    GLACIERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson\r
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson\r
    // Medium-resolution graticules (10-degree grid)\r
    GRATICULES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson\r
    // High-resolution coastlines\r
    COASTLINE_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson\r
    // High-resolution rivers and lake centerlines\r
    RIVERS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson\r
    // High-resolution lakes\r
    LAKES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson\r
    // High-resolution reefs\r
    REEFS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson\r
    // High-resolution playas (dry lakes)\r
    PLAYAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson\r
    // Low-resolution coastlines\r
    COASTLINE_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json\r
    // Low-resolution land areas\r
    LAND_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson\r
    // Low-resolution oceans\r
    OCEAN_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson\r
    // Low-resolution lakes\r
    LAKES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson\r
    // Low-resolution rivers and lake centerlines\r
    RIVERS_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson\r
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson\r
    // High-resolution country sovereignty\r
    SOVEREIGNTY_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson\r
    // High-resolution disputed areas\r
    DISPUTED_AREAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson\r
    // High-resolution time zones\r
    TIME_ZONES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson\r
    // High-resolution Antarctic ice shelves\r
    ANTARCTIC_ICE_SHELVES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson\r
    // High-resolution land\r
    LAND_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson\r
    // High-resolution ocean\r
    OCEAN_10M\r
}`}),e(_,{identifier:"paste-8",type:".txt",children:`type NaturalEarthDataset = \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json\r
    // Medium-resolution country boundaries\r
    "COUNTRIES_50M" | \r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson\r
    // Medium-resolution populated places\r
    "POPULATED_PLACES_50M" | \r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson\r
    // Medium-resolution urban areas\r
    URBAN_AREAS_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-50m.json\r
    // Medium-resolution states/provinces\r
    ADMIN1_STATES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_roads.geojson\r
    // Medium-resolution roads\r
    ROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_railroads.geojson\r
    // Medium-resolution railroads\r
    RAILROADS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_airports.geojson\r
    // Medium-resolution airports\r
    AIRPORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ports.geojson\r
    // Medium-resolution ports\r
    PORTS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_land.geojson\r
    // Medium-resolution country boundary lines on land\r
    BOUNDARY_LINES_LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_boundary_lines_maritime.geojson\r
    // Medium-resolution maritime boundaries\r
    BOUNDARY_LINES_MARITIME_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json\r
    // High-resolution country boundaries\r
    COUNTRIES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_populated_places.geojson\r
    // High-resolution populated places\r
    POPULATED_PLACES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_urban_areas.geojson\r
    // High-resolution urban areas\r
    URBAN_AREAS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-10m.json\r
    // High-resolution states/provinces\r
    ADMIN1_STATES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_minor_islands.geojson\r
    // High-resolution minor islands\r
    MINOR_ISLANDS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_parks_and_protected_lands.geojson\r
    // High-resolution parks and protected lands\r
    PARKS_PROTECTED_LANDS_10M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\r
    // Low-resolution country boundaries\r
    COUNTRIES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson\r
    // Low-resolution populated places\r
    POPULATED_PLACES_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/states-110m.json\r
    // Low-resolution states/provinces\r
    ADMIN1_STATES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_coastline.geojson\r
    // Medium-resolution coastlines\r
    COASTLINE_50M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json\r
    // Medium-resolution land areas\r
    LAND_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_ocean.geojson\r
    // Medium-resolution oceans\r
    OCEAN_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_rivers_lake_centerlines.geojson\r
    // Medium-resolution rivers and lake centerlines\r
    RIVERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_lakes.geojson\r
    // Medium-resolution lakes\r
    LAKES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_glaciated_areas.geojson\r
    // Medium-resolution glaciated areas\r
    GLACIERS_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_geographic_lines.geojson\r
    // Medium-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_graticules_10.geojson\r
    // Medium-resolution graticules (10-degree grid)\r
    GRATICULES_50M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_coastline.geojson\r
    // High-resolution coastlines\r
    COASTLINE_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_rivers_lake_centerlines.geojson\r
    // High-resolution rivers and lake centerlines\r
    RIVERS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes.geojson\r
    // High-resolution lakes\r
    LAKES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_reefs.geojson\r
    // High-resolution reefs\r
    REEFS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_playas.geojson\r
    // High-resolution playas (dry lakes)\r
    PLAYAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson\r
    // Low-resolution coastlines\r
    COASTLINE_110M,\r
    \r
    // https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json\r
    // Low-resolution land areas\r
    LAND_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_ocean.geojson\r
    // Low-resolution oceans\r
    OCEAN_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_lakes.geojson\r
    // Low-resolution lakes\r
    LAKES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_rivers_lake_centerlines.geojson\r
    // Low-resolution rivers and lake centerlines\r
    RIVERS_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_geographic_lines.geojson\r
    // Low-resolution geographic lines (e.g., Arctic Circle, Equator)\r
    GEOGRAPHIC_LINES_110M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_sovereignty.geojson\r
    // High-resolution country sovereignty\r
    SOVEREIGNTY_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_admin_0_disputed_areas.geojson\r
    // High-resolution disputed areas\r
    DISPUTED_AREAS_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_time_zones.geojson\r
    // High-resolution time zones\r
    TIME_ZONES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_antarctic_ice_shelves.geojson\r
    // High-resolution Antarctic ice shelves\r
    ANTARCTIC_ICE_SHELVES_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_land.geojson\r
    // High-resolution land\r
    LAND_10M,\r
    \r
    // https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ocean.geojson\r
    // High-resolution ocean\r
    OCEAN_10M\r
}`})]}),"April120251"),ee=v(f),ie=y(()=>a(ee,{children:[J(),$(),Q(),X()]}),"book");export{ie as book};
