import { Chapter, Emphasis, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque, Quoted, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Complete Professional Cartographic Components in TypeScript v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Complete Professional Cartographic Components in TypeScript at version 1</Heading>
            <Paragraph>
                // ============================================================================ // 5. Hand-Drawn Effect
                Filters // Creates filters that give maps a vintage, hand-drawn feel //
                ============================================================================ export const HandDrawnEffects:
                React.FC = () =&gt; &#123; return ( &lt;defs&gt; &#123;/<Word>
                    <Emphasis />
                     Subtle paper grain effect 
                </Word>/&#125; &lt;filter id="paper-grain" x="0" y="0" width="100%" height="100%"&gt; &lt;feTurbulence
                type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" result="noise" /&gt;
                &lt;feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0" result="coloredNoise"
                /&gt; &lt;feComposite operator="in" in="SourceGraphic" in2="coloredNoise" result="noisyImage" /&gt;
                &lt;feBlend mode="multiply" in="noisyImage" in2="SourceGraphic" /&gt; &lt;/filter&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Hand-drawn line effect 
                </Word>/&#125; &lt;filter id="hand-drawn" x="-5%" y="-5%" width="110%" height="110%"&gt; &lt;feTurbulence
                type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" seed="1" /&gt;
                &lt;feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1" xChannelSelector="R"
                yChannelSelector="G" /&gt; &lt;/filter&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Vintage color effect 
                </Word>/&#125; &lt;filter id="vintage-color"&gt; &lt;feColorMatrix type="matrix" values="0.9 0.1 0.1 0 0 0.1
                0.8 0.1 0 0 0.1 0.1 0.7 0 0 0 0 0 1 0" /&gt; &lt;feComponentTransfer&gt; &lt;feFuncR type="table"
                tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1" /&gt; &lt;feFuncG type="table" tableValues="0 0.1 0.2
                0.3 0.4 0.5 0.6 0.7 0.8 0.9 0.9" /&gt; &lt;feFuncB type="table" tableValues="0 0.05 0.1 0.15 0.2 0.3 0.4 0.5
                0.6 0.7 0.8" /&gt; &lt;/feComponentTransfer&gt; &lt;/filter&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Watercolor effect 
                </Word>/&#125; &lt;filter id="watercolor" x="-10%" y="-10%" width="120%" height="120%"&gt; &lt;feTurbulence
                type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="5" result="noise" /&gt; &lt;feDisplacementMap
                in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" result="displacedImage"
                /&gt; &lt;feGaussianBlur in="displacedImage" stdDeviation="1" result="blurredImage" /&gt; &lt;feBlend
                mode="multiply" in="blurredImage" in2="SourceGraphic" /&gt; &lt;/filter&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Parchment effect 
                </Word>/&#125; &lt;filter id="parchment"&gt; &lt;feTurbulence type="fractalNoise" baseFrequency="0.04"
                numOctaves="5" stitchTiles="stitch" result="noise" /&gt; &lt;feDiffuseLighting in="noise"
                lighting-color="#f5e8c8" surfaceScale="2" result="diffLight"&gt; &lt;feDistantLight azimuth="45"
                elevation="60" /&gt; &lt;/feDiffuseLighting&gt; &lt;feComposite operator="arithmetic" k1="1" k2="0" k3="0"
                k4="0" in="SourceGraphic" in2="diffLight" /&gt; &lt;/filter&gt; &lt;/defs&gt; ); &#125;;
            </Paragraph>
            <Paragraph>
                // ============================================================================ // 6. Topographic Contour
                Lines Generator // Creates professional contour lines based on elevation data //
                ============================================================================ interface
                TopographicContoursProps &#123; geoData: GeoJSON.FeatureCollection; elevationAccessor: (feature:
                GeoJSON.Feature) =&gt; number; contourLevels: number&#91;&#93;; contourColors?: string&#91;&#93;;
                strokeWidth?: number; projection: (coordinates: &#91;number, number&#93;) =&gt; &#91;number, number&#93;;
                &#125;
            </Paragraph>
            <Paragraph>
                export const TopographicContours: React.FC&lt;TopographicContoursProps&gt; = (&#123; geoData,
                elevationAccessor, contourLevels, contourColors = &#91;'#94765A', '#A68564', '#B8946E', '#CAA278',
                '#DCB082'&#93;, strokeWidth = 0.5, projection &#125;) =&gt; &#123; // For a real implementation, you would
                use d3-contour to generate contour paths // This is a simplified version that draws contour lines at
                specific elevations
            </Paragraph>
            <Paragraph>
                const createContourLines = (): React.ReactNode&#91;&#93; =&gt; &#123; const contours:
                React.ReactNode&#91;&#93; = &#91;&#93;;
            </Paragraph>
            <Paragraph>
                contourLevels.forEach((level, index) =&gt; &#123; const color = contourColors&#91;index %
                contourColors.length&#93;;
            </Paragraph>
            <Paragraph>
                // Filter features at this elevation level const featuresAtLevel = geoData.features.filter(feature =&gt;
                &#123; const elevation = elevationAccessor(feature); return Math.abs(elevation - level) &lt; 10; //
                Tolerance for matching elevation &#125;);
            </Paragraph>
            <Paragraph>
                if (featuresAtLevel.length &gt; 0) &#123; // Create a path for this contour level const contourPath =
                featuresAtLevel.map(feature =&gt; &#123; // This is a simplification - in reality you would use d3.geoPath()
                // with the projection to generate the SVG path string if (feature.geometry.type === 'LineString') &#123;
                const coordinates = (feature.geometry as GeoJSON.LineString).coordinates; const pathData = coordinates
                .map((coord, i) =&gt; &#123; const &#91;x, y&#93; = projection(coord as &#91;number, number&#93;); return
                <Word>
                    <Verbatim />
                    $&#123;i === 0 ? 'M' : 'L'&#125; $&#123;x&#125;,$&#123;y&#125;
                </Word>; &#125;) .join(' '); return pathData; &#125; return ''; &#125;).join(' ');
            </Paragraph>
            <Paragraph>
                contours.push( &lt;path key=&#123;<Word>
                    <Verbatim />
                    contour-$&#123;level&#125;
                </Word>&#125; d=&#123;contourPath&#125; fill="none" stroke=&#123;color&#125;
                strokeWidth=&#123;strokeWidth&#125; strokeLinejoin="round" strokeLinecap="round" /&gt; ); &#125; &#125;);
            </Paragraph>
            <Paragraph>return contours; &#125;;</Paragraph>
            <Paragraph>
                return &lt;g className="topographic-contours"&gt;&#123;createContourLines()&#125;&lt;/g&gt;; &#125;;
            </Paragraph>
            <Paragraph>
                // ============================================================================ // 7. Illuminated Relief
                Component // Creates shaded relief effect for topography //
                ============================================================================ interface
                IlluminatedReliefProps &#123; width: number; height: number; elevationData: number&#91;&#93;&#91;&#93;;
                azimuth?: number; // Light direction in degrees altitude?: number; // Light angle in degrees exaggeration?:
                number; // Height exaggeration factor &#125;
            </Paragraph>
            <Paragraph>
                export const IlluminatedRelief: React.FC&lt;IlluminatedReliefProps&gt; = (&#123; width, height,
                elevationData, azimuth = 315, // Light from northwest altitude = 45, exaggeration = 1.5 &#125;) =&gt; &#123;
                // Convert elevationData to an array of RGB values for the relief const generateReliefImage = (): string
                =&gt; &#123; // Illuminated relief calculation would normally use the elevation data // to calculate
                hillshading based on surface normals // This is a simplified placeholder implementation
            </Paragraph>
            <Paragraph>
                // For a real implementation, you would: // 1. Calculate surface normals from the elevation data // 2.
                Calculate illumination based on light direction (azimuth &amp; altitude) // 3. Generate an SVG gradient or
                image that represents the shaded relief
            </Paragraph>
            <Paragraph>
                // For this placeholder, we'll return a linear gradient based on the parameters const azimuthRad = (azimuth
                <Word>
                    <Emphasis />
                     Math.PI) / 180; const x1 = 50 - 50 
                </Word> Math.cos(azimuthRad); const y1 = 50 - 50 <Word>
                    <Emphasis />
                     Math.sin(azimuthRad); const x2 = 50 + 50 
                </Word> Math.cos(azimuthRad); const y2 = 50 + 50 * Math.sin(azimuthRad);
            </Paragraph>
            <Paragraph>
                return <Word>
                    <Verbatim />
                    url(#relief-gradient-$&#123;azimuth&#125;-$&#123;altitude&#125;)
                </Word>; &#125;;
            </Paragraph>
            <Paragraph>const fill = generateReliefImage();</Paragraph>
            <Paragraph>
                return ( &lt;g className="illuminated-relief"&gt; &lt;defs&gt; &lt;linearGradient id=&#123;<Word>
                    <Verbatim />
                    relief-gradient-$&#123;azimuth&#125;-$&#123;altitude&#125;
                </Word>&#125; x1=&#123;<Word>
                    <Verbatim />
                    $&#123;50 - 50 * Math.cos((azimuth * Math.PI) / 180)&#125;%
                </Word>&#125; y1=&#123;<Word>
                    <Verbatim />
                    $&#123;50 - 50 * Math.sin((azimuth * Math.PI) / 180)&#125;%
                </Word>&#125; x2=&#123;<Word>
                    <Verbatim />
                    $&#123;50 + 50 * Math.cos((azimuth * Math.PI) / 180)&#125;%
                </Word>&#125; y2=&#123;<Word>
                    <Verbatim />
                    $&#123;50 + 50 * Math.sin((azimuth * Math.PI) / 180)&#125;%
                </Word>&#125;
            </Paragraph>
            <Paragraph>
                <Quoted />
            </Paragraph>
            <Paragraph>
                &lt;stop offset="0%" stopColor="#ffffff" stopOpacity=&#123;0.7&#125; /&gt; &lt;stop offset="50%"
                stopColor="#cccccc" stopOpacity=&#123;0.2&#125; /&gt; &lt;stop offset="100%" stopColor="#555555"
                stopOpacity=&#123;0.5&#125; /&gt; &lt;/linearGradient&gt; &lt;/defs&gt;
            </Paragraph>
            <Paragraph>
                &lt;rect x=&#123;0&#125; y=&#123;0&#125; width=&#123;width&#125; height=&#123;height&#125;
                fill=&#123;fill&#125; style=&#123;&#123; mixBlendMode: 'multiply' &#125;&#125; /&gt; &lt;/g&gt; ); &#125;;
            </Paragraph>
            <Paragraph>
                // ============================================================================ // 8. Historical Mapmaker
                Attribution // Creates an elegant attribution in historical map style //
                ============================================================================ interface
                MapmakerAttributionProps &#123; x: number; y: number; width: number; author: string; year: string | number;
                &#125;
            </Paragraph>
            <Paragraph>
                export const MapmakerAttribution: React.FC&lt;MapmakerAttributionProps&gt; = (&#123; x, y, width, author,
                year &#125;) =&gt; &#123; return ( &lt;g className="mapmaker-attribution" transform=&#123;<Word>
                    <Verbatim />
                    translate($&#123;x&#125;, $&#123;y&#125;)
                </Word>&#125;&gt; &lt;text fontFamily="'Cormorant Garamond', serif" fontSize=&#123;width * 0.03&#125;
                textAnchor="middle" fontStyle="italic"
            </Paragraph>
            <Paragraph>
                <Quoted />
            </Paragraph>
            <Paragraph>
                &lt;tspan x=&#123;width / 2&#125; dy="0"&gt;Cartography by&lt;/tspan&gt; &lt;tspan x=&#123;width / 2&#125;
                dy=&#123;width <Word>
                    <Emphasis />
                     0.035&#125; fontStyle="normal" fontWeight="bold"&gt;&#123;author&#125;&lt;/tspan&gt; &lt;tspan x=&#123;width / 2&#125; dy=&#123;width 
                </Word> 0.035&#125;&gt;&#123;year&#125;&lt;/tspan&gt; &lt;/text&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Decorative line beneath attribution 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M$&#123;width * 0.3&#125;,$&#123;width * 0.12&#125; L$&#123;width * 0.7&#125;,$&#123;width * 0.12&#125;
                </Word>&#125; stroke="#59260B" strokeWidth="0.5" fill="none" /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Small flourish 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M$&#123;width * 0.48&#125;,$&#123;width * 0.13&#125; C$&#123;width * 0.5&#125;,$&#123;width * 0.14&#125; $&#123;width * 0.52&#125;,$&#123;width * 0.14&#125; $&#123;width * 0.54&#125;,$&#123;width * 0.13&#125; C$&#123;width * 0.52&#125;,$&#123;width * 0.15&#125; $&#123;width * 0.5&#125;,$&#123;width * 0.15&#125; $&#123;width * 0.48&#125;,$&#123;width * 0.13&#125;
                </Word>&#125; fill="#59260B" /&gt; &lt;/g&gt; ); &#125;;
            </Paragraph>
            <Paragraph>
                // ============================================================================ // 9. Ornate Scale Bar //
                Creates a decorative scale bar with period styling //
                ============================================================================ interface ScaleBarProps &#123;
                x: number; y: number; width: number; units: string; divisions: number; distance: number; &#125;
            </Paragraph>
            <Paragraph>
                export const OrnateScaleBar: React.FC&lt;ScaleBarProps&gt; = (&#123; x, y, width, units, divisions, distance
                &#125;) =&gt; &#123; const height = width * 0.15; const divisionWidth = width / divisions;
            </Paragraph>
            <Paragraph>
                // Generate scale bar divisions const renderDivisions = (): React.ReactNode&#91;&#93; =&gt; &#123; const
                divs: React.ReactNode&#91;&#93; = &#91;&#93;; for (let i = 0; i &lt;= divisions; i++) &#123; const xPos = i
                * divisionWidth;
            </Paragraph>
            <Paragraph>
                // Vertical tick mark divs.push( &lt;line key=&#123;<Word>
                    <Verbatim />
                    tick-$&#123;i&#125;
                </Word>&#125; x1=&#123;xPos&#125; y1=&#123;0&#125; x2=&#123;xPos&#125; y2=&#123;height * 0.6&#125;
                stroke="#59260B" strokeWidth="1" /&gt; );
            </Paragraph>
            <Paragraph>
                // Label for each division divs.push( &lt;text key=&#123;<Word>
                    <Verbatim />
                    label-$&#123;i&#125;
                </Word>&#125; x=&#123;xPos&#125; y=&#123;height <Word>
                    <Emphasis />
                     0.9&#125; textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize=&#123;height 
                </Word> 0.5&#125; fill="#59260B"
            </Paragraph>
            <Paragraph>
                <Quoted />
            </Paragraph>
            <Paragraph>
                &#123;(i * (distance / divisions)).toString()&#125; &lt;/text&gt; ); &#125; return divs; &#125;;
            </Paragraph>
            <Paragraph>
                // Create alternating filled/unfilled segments const renderSegments = (): React.ReactNode&#91;&#93; =&gt;
                &#123; const segments: React.ReactNode&#91;&#93; = &#91;&#93;; for (let i = 0; i &lt; divisions; i++) &#123;
                const xPos = i <Word>
                    <Emphasis />
                     divisionWidth; segments.push( &lt;rect key=&#123; 0 &#125; x=&#123;xPos&#125; y=&#123;0&#125; width=&#123;divisionWidth&#125; height=&#123;height 
                </Word> 0.6&#125; fill=&#123;i % 2 === 0 ? "#59260B" : "none"&#125; stroke="#59260B" strokeWidth="1" /&gt;
                ); &#125; return segments; &#125;;
            </Paragraph>
            <Paragraph>
                return ( &lt;g className="ornate-scale-bar" transform=&#123;<Word>
                    <Verbatim />
                    translate($&#123;x&#125;, $&#123;y&#125;)
                </Word>&#125;&gt; &#123;/<Word>
                    <Emphasis />
                     Decorative flourish above scale 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M0,$&#123;-height * 0.3&#125; Q$&#123;width * 0.5&#125;,$&#123;-height * 0.6&#125; $&#123;width&#125;,$&#123;-height * 0.3&#125;
                </Word>&#125; fill="none" stroke="#59260B" strokeWidth="0.75" strokeDasharray="3,2" /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Scale bar segments 
                </Word>/&#125; &#123;renderSegments()&#125;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Scale bar divisions 
                </Word>/&#125; &#123;renderDivisions()&#125;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Units label 
                </Word>/&#125; &lt;text x=&#123;width + 10&#125; y=&#123;height * 0.35&#125; fontFamily="'Cormorant Garamon
            </Paragraph>
        </Section>
    </Chapter>
);
