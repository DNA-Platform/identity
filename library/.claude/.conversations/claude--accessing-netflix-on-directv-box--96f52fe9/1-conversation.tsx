import { Chapter, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-11-29T01:27:34.622154Z"
        >
            <Origin>ad86db7b-c741-4ccc-9102-09dcdabeaec3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do access netflix through dircttv box</Paragraph>
        </Message>
        <Message
            at="2024-11-29T01:27:34.622154Z"
        >
            <Origin>a7b9c244-d8ae-41cf-9173-bc0348261e3d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me help you access Netflix through your DIRECTV box. Here are the steps:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Make sure your DIRECTV box is a compatible model that supports Netflix (most newer boxes do)</Line>
                <Line>Ensure your DIRECTV box is connected to the internet</Line>
                <Line>Press the Menu button on your DIRECTV remote</Line>
                <Line>Navigate to "Apps &amp; More" or "Apps"</Line>
                <Line>Find and select the Netflix app icon</Line>
                <Line>If this is your first time, you'll need to sign in with your Netflix account</Line>
                <Line>After signing in, you can start watching Netflix content</Line>
            </Paragraph>
            <Paragraph>
                If you don't see the Netflix app, your DIRECTV box might not be Netflix-compatible. In that case, you would
                need to access Netflix through another device like a smart TV, streaming stick, or game console.
            </Paragraph>
            <Paragraph>
                Would you like me to help troubleshoot any specific issues you're having with accessing Netflix?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-29T01:28:40.846496Z"
        >
            <Origin>931c56a6-e47c-4bf3-a166-cb4223aee8a4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>There is a network for it. Does it supporr netflix</Paragraph>
            <Attachment>Uploaded “image”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-29T01:28:40.846496Z"
        >
            <Origin>d1577717-db73-4d1b-a387-6ec1265c237e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I see the DIRECTV_WVB_869191BD network in your WiFi settings. This appears to be a DIRECTV Wireless Video
                Bridge (WVB) network, which is used to connect DIRECTV wireless receivers/clients to the main Genie DVR.
                This network itself doesn't determine whether you can access Netflix - what matters is the model of your
                DIRECTV receiver/box.
            </Paragraph>
            <Paragraph>To use Netflix, you'll need:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>A compatible DIRECTV receiver (typically a Genie or newer model)</Line>
                <Line>An internet connection (which you can set up through that network)</Line>
                <Line>The receiver to be properly connected to your TV</Line>
            </Paragraph>
            <Paragraph>
                If you could tell me which DIRECTV receiver model you have, I can confirm whether it supports Netflix.
                Generally, newer Genie models (HR44 and later) support streaming apps like Netflix.
            </Paragraph>
        </Message>
    </Chapter>
);
