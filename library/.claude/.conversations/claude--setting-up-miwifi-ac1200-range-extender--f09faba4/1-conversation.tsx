import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-22T18:27:11.866618Z"
        >
            <Origin>019be6f5-df4e-731a-ad2e-f9354c5e24f5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have a miwifi range extender AC1200. I need to set it up. I am in Georgia the cpuntry if that matters.
                What do I do?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-22T18:27:21.868013Z"
        >
            <Origin>019be6f5-df4e-731a-ad2e-f9368f5ac7f6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll help you set up your Xiaomi Mi WiFi Range Extender AC1200. The setup process is straightforward and
                doesn't require special considerations for Georgia (the country).
            </Paragraph>
            <Paragraph>Here's how to set it up:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Basic Setup Steps:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Power on the extender
                    </Word> - Plug it into a power outlet near your main router (for initial setup)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Connect to the extender's network
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        On your phone or computer, look for a new WiFi network named something like "Xiaomi_xxxx" or
                        "Mi_xxxx" (the x's are random characters)
                    </Line>
                    <Line>Connect to this network (no password needed initially)</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Access the setup page
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Open a web browser and go to: <Word>
                            <Bold />
                            192.168.31.1
                        </Word> or <Word>
                            <Bold />
                            miwifi.com
                        </Word>
                    </Line>
                    <Line>You should see the Mi WiFi extender setup page</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Configure the extender
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Select your main WiFi network from the list</Line>
                    <Line>Enter your main WiFi password</Line>
                    <Line>The extender will connect to your router</Line>
                    <Line>You can choose to either:</Line>
                    <Paragraph>
                        <List />
                        <Line>Keep the same network name (recommended - seamless roaming)</Line>
                        <Line>Create a different network name (you'll see "_plus" or similar added)</Line>
                    </Paragraph>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Relocate the extender
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Once setup is complete, unplug the extender</Line>
                    <Line>Place it roughly halfway between your router and the area with weak signal</Line>
                    <Line>The LED indicator should show good signal strength (usually blue or stable light)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tip:
                </Word> If the setup page doesn't load, make sure you're connected to the extender's WiFi network and try
                clearing your browser cache or using a different browser.
            </Paragraph>
            <Paragraph>Does this help? Let me know if you run into any specific issues during setup!</Paragraph>
        </Message>
        <Message
            at="2026-01-22T18:29:40.500009Z"
        >
            <Origin>019be6f8-23fb-7671-a16c-6698c7616055</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I see a WIFI connection called xiaomi repeater. Not Xiaomi_xxxx. Are your documents out of date? Use the web
                and look for recent info on an AC12000 and make sure you check how this might work in Georgia or some other
                country with this plug type because it isn't the same as a US unit
            </Paragraph>
        </Message>
        <Message
            at="2026-01-22T18:29:59.896507Z"
        >
            <Origin>019be6f8-23fb-7671-a16c-6699995a1320</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to question this - let me search for current information about the AC1200 setup and any
                regional differences.
            </Paragraph>
            <Action>Searched the web for “Xiaomi Mi WiFi range extender AC1200 setup guide”</Action>
            <Action>Searched the web for “Xiaomi repeater WiFi network name setup Georgia country EU plug”</Action>
            <Paragraph>
                Good catch! You're absolutely right - my initial info was outdated. Based on current documentation, here's
                the correct setup for your AC1200:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Updated Setup Steps:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Power on the extender
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Plug it into a power outlet near your router</Line>
                    <Line>Wait until the LED starts flashing red (this means it's ready for setup)</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Connect to the extender's WiFi
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        On your phone, look for a WiFi network called <Word>
                            <Bold />
                            "xiaomi repeater"
                        </Word> (not Xiaomi_xxxx)
                    </Line>
                    <Line>Connect to it (no password needed)</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Setup Methods - Choose One:
                    </Word> <Word>
                        <Bold />
                        Method A: Using Mi Home App (Recommended)
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Download "Mi Home" or "Xiaomi Home" app (Android/iOS)</Line>
                    <Line>
                        <Word>
                            <Bold />
                            Important
                        </Word>: When setting region, select <Word>
                            <Bold />
                            "China Mainland"
                        </Word> - this is crucial even though you're in Georgia. Many users report setup fails with other
                        regions
                    </Line>
                    <Line>Log in or create a Mi account</Line>
                    <Line>Follow the in-app instructions to add the device</Line>
                    <Line>
                        The app will detect your extender and guide you through connecting it to your main WiFi <Word>
                            <Bold />
                            Method B: WPS Button (if your router has WPS)
                        </Word>
                    </Line>
                    <Line>Press the WPS button on your router</Line>
                    <Line>Within 2 minutes, press the WPS button on the extender</Line>
                    <Line>Wait for the signal indicator to turn solid blue</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Final placement
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Move the extender halfway between your router and the weak signal area</Line>
                    <Line>Look for solid blue light (good signal) rather than orange (weak signal)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Regarding Georgia:
                </Word> The AC1200 has the EU plug type and supports 100-240V AC (50/60Hz), so it will work fine with
                Georgia's electrical system (220V, 50Hz with Type C/F plugs). The setup process is the same regardless of
                country - the only regional consideration is selecting "China Mainland" in the app for best compatibility.
            </Paragraph>
            <Paragraph>Let me know if you run into issues!</Paragraph>
        </Message>
    </Chapter>
);
