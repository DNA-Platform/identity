import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 October 2024](2024-10-24)</Date>
        </Dated>
        <Title>[[ 24 October 2024 ]]</Title>
        <Message
            at="2024-10-24T14:50:25.742176Z"
        >
            <Origin>a930f028-81a8-47c5-8a20-3f5a360d590e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Why wouldn’t illustrator AI file not convert to perfect SVG. We have a high resolution SVG image and we’re
                having trouble saving it.
            </Paragraph>
        </Message>
        <Message
            at="2024-10-24T14:50:25.742176Z"
        >
            <Origin>e63795fe-ec56-4a22-84cc-fad8e1a5aa62</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me help troubleshoot issues with AI to SVG conversion. Could you provide more details about:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>What happens when you try to export/save as SVG?</Line>
                <Line>Are you seeing any specific error messages?</Line>
                <Line>What elements does your Illustrator file contain?</Line>
            </Paragraph>
            <Paragraph>Some common reasons why AI files might not convert cleanly to SVG include:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Complex effects or features that SVG doesn't support:</Line>
                <Line>Certain blending modes</Line>
                <Line>Complex gradients</Line>
                <Line>Some Illustrator-specific effects</Line>
                <Line>Embedded raster images</Line>
                <Line>Complex patterns or symbols</Line>
                <Line>Potential file structure issues:</Line>
                <Line>Layers with masks</Line>
                <Line>Clipping masks</Line>
                <Line>Compound paths</Line>
                <Line>Effects that haven't been expanded</Line>
                <Line>Live text that hasn't been converted to outlines</Line>
                <Line>Export settings that might need adjustment:</Line>
                <Line>Decimal precision settings too high/low</Line>
                <Line>CSS properties settings</Line>
                <Line>Font handling options</Line>
            </Paragraph>
            <Paragraph>
                If you could share more specifics about your file and the conversion issues, I can provide more targeted
                solutions.
            </Paragraph>
        </Message>
        <Message
            at="2024-10-24T14:51:40.595568Z"
        >
            <Origin>e645f986-70df-42b5-9e92-f4133a365c32</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What happens when you merge layers? Does that cause rasterization? it all started from one SVG path, but we
                merged several. It is a scaling and rotating otherwise which SVG supports
            </Paragraph>
        </Message>
        <Message
            at="2024-10-24T14:51:40.595568Z"
        >
            <Origin>7100d09a-6511-4fec-8e0e-8d64a4f76d9d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, merging vector layers in Illustrator should not cause rasterization if you're only working with paths,
                scaling, and rotation. These are all pure vector operations that SVG fully supports.
            </Paragraph>
            <Paragraph>When you merge layers in Illustrator:</Paragraph>
            <Paragraph>
                <List />
                <Line>Vector paths remain vectors</Line>
                <Line>Transformations (scale, rotate) stay as vector math</Line>
                <Line>Multiple paths just become grouped together</Line>
                <Line>No rasterization occurs unless you have raster effects or images involved</Line>
            </Paragraph>
            <Paragraph>Since you mentioned it started as one SVG path with just scaling and rotation applied:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Try checking if "Outline View" (Ctrl/Cmd + Y) shows everything as paths</Line>
                <Line>If possible, expand any transformations (Object &gt; Expand)</Line>
                <Line>Before export, try Object &gt; Compound Path &gt; Release to ensure paths aren't causing issues</Line>
                <Line>When exporting to SVG, use "Show SVG Code" to check if the paths are clean vector data</Line>
            </Paragraph>
            <Paragraph>
                The fact that it started as an SVG path and you only did vector operations suggests this should export
                cleanly. Could you describe what specific issues you're seeing in the exported SVG? Is it not scaling
                properly, or are there visual artifacts?
            </Paragraph>
        </Message>
        <Message
            at="2024-10-24T14:55:49.382310Z"
        >
            <Origin>6c110144-991f-4c04-bdb1-719ab8d49e1d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What if you combine an overlapping SVG paths</Paragraph>
        </Message>
        <Message
            at="2024-10-24T14:55:49.382310Z"
        >
            <Origin>92140394-666c-4602-abfb-e5fbdcf09d49</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                When you combine overlapping SVG paths, the behavior depends on the specific operation you use:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Unite/Merge (Pathfinder Unite):</Line>
                <Line>Creates a single path from overlapping shapes</Line>
                <Line>Maintains vector properties</Line>
                <Line>Preserves the outermost edges</Line>
                <Line>Interior overlapping segments are removed</Line>
                <Line>Remains fully SVG-compatible</Line>
                <Line>Compound Path (Command/Ctrl + 8):</Line>
                <Line>Keeps paths separate but treats them as one unit</Line>
                <Line>Interior overlaps become "holes"</Line>
                <Line>Still remains vector</Line>
                <Line>Fully SVG-compatible</Line>
            </Paragraph>
            <Paragraph>
                Neither operation should cause any SVG compatibility issues since they're both pure vector operations. SVG
                handles both unified paths and compound paths very well.
            </Paragraph>
            <Paragraph>If you're seeing issues, check:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Were the paths perfectly aligned when combined?</Line>
                <Line>Are there any tiny fragments or artifacts from the combination?</Line>
                <Line>Try ungrouping (Shift + Command/Ctrl + G) and recombining</Line>
                <Line>Use "Clean Up" command to remove stray points</Line>
            </Paragraph>
            <Paragraph>What specific behavior are you seeing with the combined paths in your SVG?</Paragraph>
        </Message>
        <Message
            at="2024-10-24T15:11:42.354611Z"
        >
            <Origin>76c04a00-a553-484d-b6f0-e21d30e6ed03</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What are the difference between these two cat food? Why is one so much more expensive?</Paragraph>
            <Attachment>Uploaded “image”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-10-24T15:11:42.354611Z"
        >
            <Origin>99c5023a-cca3-41bd-b13e-fb4166f303d6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Looking at these two Hill's Science Diet products, here are the key differences:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Top Product ($62.99 for 15.5 lbs, $4.06/lb):</Line>
                <Line>Sensitive Stomach &amp; Skin formula</Line>
                <Line>Specialized for cats with digestive and skin sensitivities</Line>
                <Line>Chicken &amp; Rice formula</Line>
                <Line>15.5 pound bag</Line>
                <Line>Bottom Product ($20.99 for 4 lbs, $5.25/lb):</Line>
                <Line>Regular Adult 1-6 formula</Line>
                <Line>Standard nutrition without specialized ingredients</Line>
                <Line>Chicken Recipe</Line>
                <Line>4 pound bag</Line>
            </Paragraph>
            <Paragraph>The price difference appears large at first ($62.99 vs $20.99), but note that:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The specialized formula is actually cheaper per pound ($4.06/lb vs $5.25/lb)</Line>
                <Line>The higher total price is mainly because you're buying a much larger bag (15.5 lbs vs 4 lbs)</Line>
            </Paragraph>
            <Paragraph>
                The Sensitive Stomach &amp; Skin formula likely costs more to produce because it contains:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Special digestive-friendly ingredients</Line>
                <Line>Specific proteins and fibers for sensitive stomachs</Line>
                <Line>Additional skin-supporting nutrients like omega fatty acids</Line>
                <Line>More specialized processing to avoid irritants</Line>
            </Paragraph>
            <Paragraph>
                Both products have similar ratings (4.7 stars) and strong repurchase rates, suggesting they're both
                effective for their intended purposes.
            </Paragraph>
        </Message>
    </Chapter>
);
