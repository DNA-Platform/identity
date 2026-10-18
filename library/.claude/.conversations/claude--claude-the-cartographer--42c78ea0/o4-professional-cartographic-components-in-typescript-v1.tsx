import { Chapter, Emphasis, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque, Quoted, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Professional Cartographic Components in TypeScript v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Professional Cartographic Components in TypeScript at version 1</Heading>
            <Paragraph>
                // Artistic Map Components for Professional Cartography with React Simple Maps // TypeScript implementation
                with strict type checking
            </Paragraph>
            <Paragraph>
                import React from "react"; import &#123; ComposableMap, Geographies, Geography, Marker, ZoomableGroup &#125;
                from "react-simple-maps"; import &#123; scaleQuantile, scaleLinear &#125; from "d3-scale"; import &#123;
                geoPath, geoGraticule &#125; from "d3-geo"; import &#123; geoSinusoidal, geoOrthographic,
                geoAzimuthalEqualArea &#125; from "d3-geo-projection"; import &#123; feature &#125; from "topojson-client";
                import &#123; schemeBlues, schemeYlOrBr &#125; from "d3-scale-chromatic";
            </Paragraph>
            <Paragraph>
                // ============================================================================ // 1. Vintage Style
                Cartographic Border // Recreates ornate borders from golden age Dutch cartography //
                ============================================================================ interface
                CartographicBorderProps &#123; width: number; height: number; strokeWidth?: number; &#125;
            </Paragraph>
            <Paragraph>
                export const CartographicBorder: React.FC&lt;CartographicBorderProps&gt; = (&#123; width, height,
                strokeWidth = 2 &#125;) =&gt; &#123; // Create ornate border pattern inspired by historical maps const
                cornerSize = Math.min(width, height) * 0.15;
            </Paragraph>
            <Paragraph>
                return ( &lt;g className="cartographic-border"&gt; &#123;/<Word>
                    <Emphasis />
                     Main rectangular border 
                </Word>/&#125; &lt;rect x=&#123;strokeWidth/2&#125; y=&#123;strokeWidth/2&#125; width=&#123;width -
                strokeWidth&#125; height=&#123;height - strokeWidth&#125; fill="none" stroke="#8B4513"
                strokeWidth=&#123;strokeWidth&#125; /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Ornate corners - these will be properly grouped in Illustrator 
                </Word>/&#125; &#123;/<Word>
                    <Emphasis />
                     Top Left 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;strokeWidth&#125; $&#123;cornerSize&#125; Q $&#123;cornerSize/2&#125; $&#123;strokeWidth&#125;, $&#123;cornerSize&#125; $&#123;strokeWidth&#125;
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth=&#123;strokeWidth&#125; /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Top Right 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;width - cornerSize&#125; $&#123;strokeWidth&#125; Q $&#123;width - cornerSize/2&#125; $&#123;strokeWidth&#125;, $&#123;width - strokeWidth&#125; $&#123;cornerSize&#125;
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth=&#123;strokeWidth&#125; /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Bottom Right 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;width - strokeWidth&#125; $&#123;height - cornerSize&#125; Q $&#123;width - cornerSize/2&#125; $&#123;height - strokeWidth&#125;, $&#123;width - cornerSize&#125; $&#123;height - strokeWidth&#125;
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth=&#123;strokeWidth&#125; /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Bottom Left 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;cornerSize&#125; $&#123;height - strokeWidth&#125; Q $&#123;cornerSize/2&#125; $&#123;height - strokeWidth&#125;, $&#123;strokeWidth&#125; $&#123;height - cornerSize&#125;
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth=&#123;strokeWidth&#125; /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Decorative flourishes at midpoints 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;width/2 - 20&#125; $&#123;strokeWidth&#125; Q $&#123;width/2&#125; $&#123;-10&#125;, $&#123;width/2 + 20&#125; $&#123;strokeWidth&#125;
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth=&#123;strokeWidth&#125; /&gt;
            </Paragraph>
            <Paragraph>
                &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;width/2 - 20&#125; $&#123;height - strokeWidth&#125; Q $&#123;width/2&#125; $&#123;height + 10&#125;, $&#123;width/2 + 20&#125; $&#123;height - strokeWidth&#125;
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth=&#123;strokeWidth&#125; /&gt; &lt;/g&gt; ); &#125;;
            </Paragraph>
            <Paragraph>
                // ============================================================================ // 2. Renaissance-Inspired
                Cartouche Component // Creates a decorative frame for map titles or legends //
                ============================================================================ interface CartoucheProps &#123;
                x: number; y: number; width: number; height: number; title: string; subtitle?: string; &#125;
            </Paragraph>
            <Paragraph>
                export const Cartouche: React.FC&lt;CartoucheProps&gt; = (&#123; x, y, width, height, title, subtitle = ""
                &#125;) =&gt; &#123; return ( &lt;g className="cartouche" transform=&#123;<Word>
                    <Verbatim />
                    translate($&#123;x&#125;, $&#123;y&#125;)
                </Word>&#125;&gt; &#123;/<Word>
                    <Emphasis />
                     Background shape with decorative border 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                     M 0,$&#123;height * 0.2&#125; Q $&#123;width * 0.1&#125;,0 $&#123;width * 0.3&#125;,0 L $&#123;width * 0.7&#125;,0 Q $&#123;width * 0.9&#125;,0 $&#123;width&#125;,$&#123;height * 0.2&#125; L $&#123;width&#125;,$&#123;height * 0.8&#125; Q $&#123;width * 0.9&#125;,$&#123;height&#125; $&#123;width * 0.7&#125;,$&#123;height&#125; L $&#123;width * 0.3&#125;,$&#123;height&#125; Q $&#123;width * 0.1&#125;,$&#123;height&#125; 0,$&#123;height * 0.8&#125; Z 
                </Word>&#125; fill="#F5F0DC" // Parchment color stroke="#8B4513" // Sepia brown strokeWidth="1.5" /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Decorative scrolls on corners 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M 0,$&#123;height * 0.2&#125; Q $&#123;-width * 0.1&#125;,$&#123;height * 0.1&#125; 0,0
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth="1" /&gt;
            </Paragraph>
            <Paragraph>
                &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;width&#125;,$&#123;height * 0.2&#125; Q $&#123;width * 1.1&#125;,$&#123;height * 0.1&#125; $&#123;width&#125;,0
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth="1" /&gt;
            </Paragraph>
            <Paragraph>
                &lt;path d=&#123;<Word>
                    <Verbatim />
                    M 0,$&#123;height * 0.8&#125; Q $&#123;-width * 0.1&#125;,$&#123;height * 0.9&#125; 0,$&#123;height&#125;
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth="1" /&gt;
            </Paragraph>
            <Paragraph>
                &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;width&#125;,$&#123;height * 0.8&#125; Q $&#123;width * 1.1&#125;,$&#123;height * 0.9&#125; $&#123;width&#125;,$&#123;height&#125;
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth="1" /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Title text 
                </Word>/&#125; &lt;text x=&#123;width / 2&#125; y=&#123;height <Word>
                    <Emphasis />
                     0.4&#125; fontFamily="Garamond, serif" fontSize=&#123;height 
                </Word> 0.18&#125; textAnchor="middle" fill="#59260B" // Dark brown
            </Paragraph>
            <Paragraph>
                <Quoted />
            </Paragraph>
            <Paragraph>&#123;title&#125; &lt;/text&gt;</Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Subtitle text 
                </Word>/&#125; &#123;subtitle &amp;&amp; ( &lt;text x=&#123;width / 2&#125; y=&#123;height <Word>
                    <Emphasis />
                     0.7&#125; fontFamily="Garamond, serif" fontSize=&#123;height 
                </Word> 0.12&#125; textAnchor="middle" fill="#59260B" // Dark brown
            </Paragraph>
            <Paragraph>
                <Quoted />
            </Paragraph>
            <Paragraph>&#123;subtitle&#125; &lt;/text&gt; )&#125; &lt;/g&gt; ); &#125;;</Paragraph>
            <Paragraph>
                // ============================================================================ // 3. Historical Compass
                Rose // Creates an ornate compass rose in vintage style //
                ============================================================================ interface CompassRoseProps
                &#123; x: number; y: number; size: number; &#125;
            </Paragraph>
            <Paragraph>
                export const CompassRose: React.FC&lt;CompassRoseProps&gt; = (&#123; x, y, size &#125;) =&gt; &#123; //
                Create points for main star shape const createStarPoints = (count: number, outerRadius: number, innerRadius:
                number): &#91;number, number&#93;&#91;&#93; =&gt; &#123; let points: &#91;number, number&#93;&#91;&#93; =
                &#91;&#93;; for (let i = 0; i &lt; count <Word>
                    <Emphasis />
                     2; i++) &#123; const radius = i % 2 === 0 ? outerRadius : innerRadius; const angle = (Math.PI 
                </Word> i) / count; const px = x + radius <Word>
                    <Emphasis />
                     Math.sin(angle); const py = y - radius 
                </Word> Math.cos(angle); points.push(&#91;px, py&#93;); &#125; return points; &#125;;
            </Paragraph>
            <Paragraph>
                const mainPoints = createStarPoints(16, size / 2, size / 5); const secondaryPoints = createStarPoints(16,
                size / 3, size / 7);
            </Paragraph>
            <Paragraph>
                return ( &lt;g className="compass-rose"&gt; &#123;/<Word>
                    <Emphasis />
                     Outer decorative circle 
                </Word>/&#125; &lt;circle cx=&#123;x&#125; cy=&#123;y&#125; r=&#123;size / 1.8&#125; fill="none"
                stroke="#8B4513" strokeWidth="1.5" /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Main star shape 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;mainPoints.map(p =&gt; p.join(',')).join(' L ')&#125; Z
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth="1.5" /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Secondary star shape 
                </Word>/&#125; &lt;path d=&#123;<Word>
                    <Verbatim />
                    M $&#123;secondaryPoints.map(p =&gt; p.join(',')).join(' L ')&#125; Z
                </Word>&#125; fill="none" stroke="#8B4513" strokeWidth="1" /&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Cardinal directions 
                </Word>/&#125; &lt;text x=&#123;x&#125; y=&#123;y - size / 2 - 10&#125; textAnchor="middle"
                fontFamily="Garamond, serif" fontSize=&#123;size / 10&#125; fill="#59260B"&gt;N&lt;/text&gt; &lt;text
                x=&#123;x + size / 2 + 10&#125; y=&#123;y&#125; textAnchor="middle" fontFamily="Garamond, serif"
                fontSize=&#123;size / 10&#125; fill="#59260B"&gt;E&lt;/text&gt; &lt;text x=&#123;x&#125; y=&#123;y + size /
                2 + 15&#125; textAnchor="middle" fontFamily="Garamond, serif" fontSize=&#123;size / 10&#125;
                fill="#59260B"&gt;S&lt;/text&gt; &lt;text x=&#123;x - size / 2 - 10&#125; y=&#123;y&#125;
                textAnchor="middle" fontFamily="Garamond, serif" fontSize=&#123;size / 10&#125;
                fill="#59260B"&gt;W&lt;/text&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Center decoration 
                </Word>/&#125; &lt;circle cx=&#123;x&#125; cy=&#123;y&#125; r=&#123;size / 15&#125; fill="#8B4513" /&gt;
                &lt;/g&gt; ); &#125;;
            </Paragraph>
            <Paragraph>
                // ============================================================================ // 4. Terrain Patterns for
                Land Features // Creates SVG patterns that Illustrator can use //
                ============================================================================ export const TerrainPatterns:
                React.FC = () =&gt; &#123; return ( &lt;defs&gt; &#123;/<Word>
                    <Emphasis />
                     Forest Pattern 
                </Word>/&#125; &lt;pattern id="forest-pattern" patternUnits="userSpaceOnUse" width="20" height="20"&gt;
                &lt;circle cx="5" cy="5" r="1.5" fill="#2D6D4B" /&gt; &lt;circle cx="15" cy="5" r="1.5" fill="#2D6D4B" /&gt;
                &lt;circle cx="10" cy="10" r="1.5" fill="#2D6D4B" /&gt; &lt;circle cx="5" cy="15" r="1.5" fill="#2D6D4B"
                /&gt; &lt;circle cx="15" cy="15" r="1.5" fill="#2D6D4B" /&gt; &lt;/pattern&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Mountain Pattern 
                </Word>/&#125; &lt;pattern id="mountain-pattern" patternUnits="userSpaceOnUse" width="20" height="20"&gt;
                &lt;path d="M0,20 L10,5 L20,20 Z" fill="#B5B5B5" stroke="#8A8A8A" strokeWidth="0.5" /&gt; &lt;/pattern&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Desert Pattern 
                </Word>/&#125; &lt;pattern id="desert-pattern" patternUnits="userSpaceOnUse" width="20" height="20"&gt;
                &lt;path d="M5,5 L7,3 L9,5 L11,3 L13,5" fill="none" stroke="#D2B48C" strokeWidth="0.5" /&gt; &lt;path
                d="M5,10 L7,8 L9,10 L11,8 L13,10" fill="none" stroke="#D2B48C" strokeWidth="0.5" /&gt; &lt;path d="M5,15
                L7,13 L9,15 L11,13 L13,15" fill="none" stroke="#D2B48C" strokeWidth="0.5" /&gt; &lt;/pattern&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Agricultural Pattern 
                </Word>/&#125; &lt;pattern id="agriculture-pattern" patternUnits="userSpaceOnUse" width="20" height="20"&gt;
                &lt;path d="M0,0 L20,20" stroke="#CDC6A5" strokeWidth="0.5" /&gt; &lt;path d="M20,0 L0,20" stroke="#CDC6A5"
                strokeWidth="0.5" /&gt; &lt;/pattern&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Wetland Pattern 
                </Word>/&#125; &lt;pattern id="wetland-pattern" patternUnits="userSpaceOnUse" width="20" height="10"&gt;
                &lt;path d="M0,5 Q5,0 10,5 Q15,10 20,5" fill="none" stroke="#6BAED6" strokeWidth="0.5" /&gt;
                &lt;/pattern&gt;
            </Paragraph>
            <Paragraph>
                &#123;/<Word>
                    <Emphasis />
                     Paper Texture 
                </Word>/&#125; &lt;pattern id="paper-texture" patternUnits="userSpaceOnUse" width="100" height="100"&gt;
                &lt;filter id="noise"&gt; &lt;feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5"
                stitchTiles="stitch" /&gt; &lt;feColorMatrix type="matrix" values="0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 0 0.9 0 0
                0 0.5 0" /&gt; &lt;/filter&gt; &lt;rect width="100" height="100" filter="url(#noise)" /&gt; &lt;/pattern&gt;
                &lt;/defs&gt; ); &#125;;
            </Paragraph>
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
        </Section>
    </Chapter>
);
