import { Chapter, Heading, Line, List, Paragraph, Reference, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Implementation Guide for React Simple Maps v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Implementation Guide for React Simple Maps at version 1</Heading>
            <Heading>How to Fix React Simple Maps Errors</Heading>
            <Paragraph>
                The main issue in your code is that the map data URL (<Word>
                    <Verbatim />
                    https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json
                </Word>) is returning a 404 error, meaning the file is no longer available at that location.
            </Paragraph>
            <Heading>Step 1: Download the TopoJSON Data</Heading>
            <Paragraph>First, download the world countries TopoJSON file:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Visit <Word>
                        <Reference>https://www.naturalearthdata.com/downloads/</Reference>
                        Natural Earth
                    </Word> or use this direct link to a TopoJSON world countries file: <Word>
                        <Reference>https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json</Reference>
                        world-countries.json
                    </Word>
                </Line>
                <Line>
                    Save the file to your project's <Word>
                        <Verbatim />
                        /public
                    </Word> directory as <Word>
                        <Verbatim />
                        world-countries.json
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Step 2: Update Your Dependencies</Heading>
            <Paragraph>Make sure you have all the necessary dependencies:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install react-simple-maps d3-geo
# or
yarn add react-simple-maps d3-geo`}
            </CodeBox>
            <Heading>Step 3: Implement the WorldMap Component</Heading>
            <Paragraph>I've created a fixed WorldMap component that:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Loads the data from your local public directory</Line>
                <Line>Properly handles loading states and errors</Line>
                <Line>Implements the map with standard styling</Line>
            </Paragraph>
            <Heading>Step 4: Use the Component in Your Page</Heading>
            <Paragraph>Add the WorldMap component to your page:</Paragraph>
            <CodeBox
                language="jsx"
            >
                {`// In your index.tsx or any other page
import WorldMap from '../components/WorldMap'; // adjust path as needed

export default function Home() {
  return (
    <>
      {/* Your existing content */}
      <div className={styles.mapContainer}>
        <h2>World Map</h2>
        <WorldMap />
      </div>
      {/* Rest of your content */}
    </>
  );
}`}
            </CodeBox>
            <Heading>Step 5: Add Some Basic Styling (Optional)</Heading>
            <Paragraph>Add this to your CSS module:</Paragraph>
            <CodeBox
                language="css"
            >
                {`.mapContainer {
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;
}`}
            </CodeBox>
            <Heading>Troubleshooting</Heading>
            <Paragraph>If you still encounter issues:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Check browser console for network errors</Line>
                <Line>Verify the path to your JSON file is correct</Line>
                <Line>Make sure the JSON file has the expected structure for react-simple-maps</Line>
                <Line>Consider adding CORS headers if you're fetching from an external source</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
