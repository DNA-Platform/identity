import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Title>[[ 22 January 2026 ]]</Title>
        <Message
            at="2026-01-22T18:19:09.860430Z"
        >
            <Origin>019be6ee-846c-7752-a29a-6318c1b76857</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What do I have to do to install this wifi extender</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-01-22T18:19:20.478609Z"
        >
            <Origin>019be6ee-846c-7752-a29a-63192484d675</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Based on the image, you have a Xiaomi Mi WiFi range extender. Here's how to set it up:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Basic Setup:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Plug it in
                    </Word> - Insert the extender into a power outlet roughly midway between your router and the area with
                    weak WiFi signal
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wait for the indicator light
                    </Word> - The LED should start blinking (usually yellow/orange)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Connect to it:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>On your phone/computer, go to WiFi settings</Line>
                    <Line>Look for a network named something like "Xiaomi_xxxx" or "Mi_WiFi_xxxx"</Line>
                    <Line>Connect to it (no password needed initially)</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Configure through the app or web interface:
                    </Word> <Word>
                        <Bold />
                        Option A - Mi Home App (Recommended):
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Download the "Mi Home" app</Line>
                    <Line>Create/log into your Xiaomi account</Line>
                    <Line>The app should detect the extender</Line>
                    <Line>
                        Follow the prompts to connect it to your existing WiFi network <Word>
                            <Bold />
                            Option B - Web Interface:
                        </Word>
                    </Line>
                    <Line>Once connected to the extender's network, open a browser</Line>
                    <Line>
                        Go to <Word>
                            <Verbatim />
                            192.168.31.1
                        </Word> or <Word>
                            <Verbatim />
                            miwifi.com
                        </Word>
                    </Line>
                    <Line>Follow the setup wizard</Line>
                    <Line>Select your existing WiFi network and enter its password</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Repositioning
                    </Word> - After setup, the extender will reboot. Place it where the indicator shows good signal strength
                    (typically solid blue light means good connection)
                </Line>
            </Paragraph>
            <Paragraph>
                The documents underneath mention something about a 72-hour response time - is this for a veterinary clinic?
                Just want to make sure you're setting this up in the right location!
            </Paragraph>
        </Message>
    </Chapter>
);
