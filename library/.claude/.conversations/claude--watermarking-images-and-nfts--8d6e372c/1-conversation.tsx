import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[29 October 2024](2024-10-29)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-10-29T18:09:51.805348Z"
        >
            <Origin>f623f707-2cc0-47ca-aced-da1cab6b9d23</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you use web to check how Google’s new water marking system works? And if I will be able to use it. Can I
                watermark images? Could I watermark an NFT ID somehow or URL? Will there be an app or way to find the
                watermark?
            </Paragraph>
        </Message>
        <Message
            at="2024-10-29T18:09:51.805348Z"
        >
            <Origin>60cd0c2e-9298-42a8-b7c2-aab076ea6a13</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I apologize, but I cannot access the web or check current information about Google's watermarking system in
                real-time. However, I can share what I know about Google's SynthID watermarking system based on my knowledge
                as of April 2024.
            </Paragraph>
            <Paragraph>
                Google's SynthID system was designed to embed invisible watermarks into AI-generated images. These
                watermarks:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Are imperceptible to human viewers</Line>
                <Line>Can survive common image modifications like cropping, compression, or color changes</Line>
                <Line>Can be detected using Google's specialized detection tools</Line>
            </Paragraph>
            <Paragraph>
                If you're interested in watermarking your own images or NFTs, there are several general approaches you could
                consider:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Visible watermarks (text/logos overlaid on images)</Line>
                <Line>Steganographic techniques (embedding hidden data)</Line>
                <Line>Digital signatures</Line>
                <Line>Blockchain-based verification for NFTs</Line>
            </Paragraph>
            <Paragraph>
                For specifics about Google's current watermarking tools and availability, I'd recommend checking Google's
                official documentation directly as my information may be outdated. Would you like me to explain more about
                any of these general watermarking approaches?
            </Paragraph>
        </Message>
    </Chapter>
);
