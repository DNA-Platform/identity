import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Setup Instructions for World Map v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Setup Instructions for World Map at version 1</Heading>
            <Heading>Setting Up the World Map Page</Heading>
            <Paragraph>Follow these instructions to properly set up the world map component I've created.</Paragraph>
            <Heading>1. Save the Map File</Heading>
            <Paragraph>First, you need to download a TopoJSON file for the world map:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Download a world countries TopoJSON file from this URL:
                    https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json
                </Line>
                <Line>
                    Save this file in your project's <Word>
                        <Verbatim />
                        /public
                    </Word> directory as <Word>
                        <Verbatim />
                        world-countries.json
                    </Word>
                </Line>
            </Paragraph>
            <Heading>2. Install Dependencies</Heading>
            <Paragraph>Make sure you have the required dependencies installed:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install react-simple-maps d3-geo
# or 
yarn add react-simple-maps d3-geo`}
            </CodeBox>
            <Heading>3. Add the Map Page</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Save the provided <Word>
                        <Verbatim />
                        world-basic.tsx
                    </Word> file in your <Word>
                        <Verbatim />
                        /pages/maps/
                    </Word> directory
                </Line>
                <Line>
                    This will automatically make it appear in your map index page because your index page is set up to
                    dynamically find map files
                </Line>
            </Paragraph>
            <Heading>4. Test the Page</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Start your development server: ``<Word>
                        <Verbatim />
                        bash npm run dev # or yarn dev 
                    </Word>``
                </Line>
                <Line>
                    Navigate to <Word>
                        <Verbatim />
                        /maps
                    </Word> to see your index page with the new World Basic map listed
                </Line>
                <Line>Click on the map to go to the detailed view</Line>
            </Paragraph>
            <Heading>How It Works</Heading>
            <Paragraph>The page works by:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Loading the world map TopoJSON data from your public directory</Line>
                <Line>Rendering it using react-simple-maps</Line>
                <Line>Providing a simple, clean UI to view the map</Line>
            </Paragraph>
            <Paragraph>
                The download buttons in the UI are currently placeholders. To make them functional, you would need to add
                logic to:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Export the map as SVG/PNG</Line>
                <Line>Trigger a download</Line>
            </Paragraph>
            <Heading>Troubleshooting</Heading>
            <Paragraph>If the map doesn't appear:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Check your browser console for errors</Line>
                <Line>Make sure the TopoJSON file is in the correct location</Line>
                <Line>Verify that all dependencies are installed</Line>
            </Paragraph>
            <Heading>Extending the Map</Heading>
            <Paragraph>This is a minimal implementation. You can enhance it by:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Adding country highlighting on hover</Line>
                <Line>Implementing the download functionality</Line>
                <Line>Adding zoom and pan capabilities</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
