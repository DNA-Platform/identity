import { Chapter, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-11-02T02:11:05.177193Z"
        >
            <Origin>3c9e8bd1-9841-4d5a-a243-186c4f3c0337</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Where is voice message on telegram phone app?</Paragraph>
        </Message>
        <Message
            at="2024-11-02T02:11:05.177193Z"
        >
            <Origin>2390c19b-7bed-446f-940d-1347d51d4a17</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                In the Telegram mobile app, you can find the voice message feature at the bottom right of any chat. Look for
                the microphone icon next to the message input field. To record a voice message:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Press and hold the microphone icon</Line>
                <Line>Speak your message</Line>
                <Line>Release to send, or slide up to "lock" the recording</Line>
                <Line>If you lock the recording, tap the send button when done</Line>
            </Paragraph>
            <Paragraph>You can also cancel a recording by sliding left before releasing.</Paragraph>
            <Paragraph>
                Note: If you don't see the microphone icon, you may need to update your Telegram app or check your device's
                microphone permissions for Telegram.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T02:11:57.460455Z"
        >
            <Origin>83104a65-2373-4d13-9eb0-b9523e19723c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Where? The bottom left one is voice to text. Where is voice?</Paragraph>
            <Attachment>Uploaded “image”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-02T02:11:57.460455Z"
        >
            <Origin>09ac8d0d-6792-44c5-8d9d-d1ffb5e34663</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The voice message icon (microphone) is located at the bottom right corner of the chat interface - you can
                see it in the image on the right side of the message input field, opposite to the emoji icon (which is on
                the bottom left). To record a voice message, just tap and hold that microphone icon.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T02:13:46.682525Z"
        >
            <Origin>28058937-673a-4987-bdcd-7880ab5de8bf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Theres a clip, the message field, the circle and the camera. Bottom right is voice to text!
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T02:13:46.682525Z"
        >
            <Origin>45e4236c-8aba-449c-bc7b-91aa3b9d09e5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Ah, I see where the confusion is now! Looking at your image more carefully:</Paragraph>
            <Paragraph>
                The microphone icon (for voice messages) should be where that camera icon is currently showing. Since you're
                seeing a camera icon instead, this means you'll need to press and hold the clip/attachment icon (the
                paperclip on the left side) - this will bring up a menu where you can find the voice message option.
            </Paragraph>
            <Paragraph>So to send a voice message:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Tap and hold the clip/attachment icon (paperclip)</Line>
                <Line>Look for the voice message option in the menu that appears</Line>
                <Line>Select it to start recording</Line>
            </Paragraph>
            <Paragraph>
                If you're not seeing this option, you might need to check if your Telegram app needs updating, as the
                interface can vary between versions.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-02T02:15:08.402434Z"
        >
            <Origin>5ad52fc4-ac75-40c7-ab62-4a76d490d3ed</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>That’s what I see. Do I need to enable it or something?</Paragraph>
            <Attachment>Uploaded “image”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-02T02:15:08.402434Z"
        >
            <Origin>6e3ec197-971e-4142-815a-f67a87000cb8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, now I can see exactly what you're seeing in the image. This appears to be the attachment menu screen in
                Telegram. The voice message function isn't located here - you'll need to exit this screen first (tap "Close"
                at the top).
            </Paragraph>
            <Paragraph>
                Once you're back in the regular chat view, look for a round microphone button near the message input field.
                If you don't see it there, you may need to:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Check your Telegram settings</Line>
                <Line>Go to Privacy and Security</Line>
                <Line>
                    Make sure microphone permissions are enabled for Telegram in your phone's settings (Settings &gt;
                    Telegram &gt; Microphone)
                </Line>
            </Paragraph>
            <Paragraph>
                If you still don't see the microphone icon after checking these settings, you might need to update your
                Telegram app to the latest version through the App Store.
            </Paragraph>
            <Paragraph>Would you like me to guide you through checking these settings?</Paragraph>
        </Message>
    </Chapter>
);
