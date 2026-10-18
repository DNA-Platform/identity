import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 June 2026](2026-06-08)</Date>
        </Dated>
        <Title>[[ 8 June 2026 ]]</Title>
        <Message
            at="2026-06-08T12:27:30.319772Z"
        >
            <Origin>019ea734-09a4-79ea-b583-1c14aa5337c1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Different topic I’m in a Subaru Forester with my iPhone and I’m trying to get Google maps on the screen. I
                clicked the app button with my phone installed and it says that Subaru Starling is the only app and it tells
                me to download it from the App Store, but I don’t see it.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T12:27:51.428152Z"
        >
            <Origin>019ea734-09a9-7a5e-bcfc-f5f9acc4f8b0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That "app button" is the car's own Starlink app menu — ignore it. Don't download anything from the in-car
                App Store. Google Maps doesn't run as a Subaru app; it gets onto the screen through Apple CarPlay, which is
                a separate thing.
            </Paragraph>
            <Paragraph>The path:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Plug the iPhone in with a USB cable
                    </Word> to the data USB port — on a Forester it's the one in the front tray/console marked with a little
                    phone or CarPlay icon, not the charge-only ports. CarPlay over cable is the reliable route. (Newer
                    Foresters, roughly 2020+, can do wireless CarPlay, but get it working wired first.)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        First connection
                    </Word>, your phone will ask permission and the car may prompt "Use CarPlay" — say yes on both.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        On the phone, confirm CarPlay is allowed:
                    </Word> Settings → General → CarPlay → your car should appear. Also make sure Siri is enabled (Settings
                    → Siri &amp; Search) — CarPlay won't launch without it.
                </Line>
                <Line>
                    Once CarPlay is up, the <Word>
                        <Bold />
                        Subaru screen switches to the CarPlay home grid
                    </Word>, and Google Maps will be one of the icons there (it's already installed on your phone, so
                    nothing to download).
                </Line>
            </Paragraph>
            <Paragraph>
                If you plug in and nothing changes, the usual culprits are a charge-only cable or the wrong USB port — try a
                known data cable in the marked port.
            </Paragraph>
            <Paragraph>
                What year is the Forester? That tells me whether wireless is even an option and whether there's a setting I
                can point you to more precisely.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T12:29:16.983690Z"
        >
            <Origin>019ea735-aaf5-721e-b102-e35acbb57de4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Does this Forrester have USB?</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-08T12:29:30.019606Z"
        >
            <Origin>019ea735-aaf6-7ca3-be13-8176c9e4c629</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This changes my answer. That head unit is the older Subaru "Starlink" system (the one with HOME / PHONE /
                APPS hard buttons down the left side), and that generation does <Word>
                    <Bold />
                    not
                </Word> have Apple CarPlay at all. So Google Maps cannot be put on this screen the way I described. The
                "APPS" button and the message you're seeing are Subaru's own old Starlink app-link system — a pre-CarPlay
                thing that only mirrors a tiny handful of partner apps (Pandora, etc.) through their phone app, not Google
                Maps.
            </Paragraph>
            <Paragraph>
                That dashboard is a 2015–2018-era Forester. CarPlay only arrived on the Forester with the 2019 redesign.
            </Paragraph>
            <Paragraph>
                To answer your actual question: yes, it has USB — there are USB ports in the center console/front tray. But
                on this system USB is for music playback and charging only. It will not project Maps.
            </Paragraph>
            <Paragraph>So your realistic options for navigation on a screen:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Bluetooth audio only
                    </Word> — pair the phone (the screen even says "Bluetooth disconnected, please reconnect"), and you'll
                    at least hear Google Maps voice directions through the car speakers while looking at the phone itself.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Use the phone mount you've already got
                    </Word> — that hoco mount on your dash is honestly the practical answer here. Maps on the phone,
                    turn-by-turn audio over Bluetooth.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Aftermarket head unit
                    </Word> — if you really want CarPlay on the screen, a shop can replace the unit, but that's a real
                    install on this generation because the screen is integrated with the climate display.
                </Line>
            </Paragraph>
            <Paragraph>
                Want me to walk through getting the Bluetooth re-paired so at least the voice directions come through the
                speakers?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T12:31:15.102732Z"
        >
            <Origin>019ea737-77d6-77ae-8ea7-2884575d73ef</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I found an adapter for the cigarette thing, but it’s not working. Does it need to heat up or something?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-08T12:31:26.535377Z"
        >
            <Origin>019ea737-77d6-7e11-a824-c64176c41741</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No — a 12V adapter doesn't heat up. The cigarette-lighter socket in your car is just a power outlet; the
                adapter plugs in and should work instantly. Nothing needs to warm up. (The actual lighter element heating up
                is a different, old thing — your adapter isn't that.)
            </Paragraph>
            <Paragraph>If it's not working, it's almost always one of these:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ignition is off.
                    </Word> On most Foresters that socket only has power when the key is in the ACC or ON position (or the
                    engine running). If the car's fully off, the socket is dead. Turn the key to ACC and check.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Blown fuse for that socket.
                    </Word> Very common — a previous high-draw device pops it. There's a fuse box behind a panel near your
                    left knee / lower dash. If the socket is dead even with ignition on, this is the likely cause.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Loose plug.
                    </Word> These sockets are deep; the adapter has to seat firmly enough for the center pin and side
                    springs to make contact. Push it in with a slight twist and wiggle to see if a light flickers on.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The adapter itself.
                    </Word> Many have a little LED or their own fuse in the tip that unscrews. No LED = either no power
                    reaching it or the adapter's own fuse is blown.
                </Line>
            </Paragraph>
            <Paragraph>
                Quick way to isolate it: does the adapter have an indicator light? If the light is <Word>
                    <Bold />
                    off
                </Word>, the problem is the socket (ignition or fuse). If the light is <Word>
                    <Bold />
                    on
                </Word> but your phone/device isn't charging, the problem is the adapter's USB output or your cable.
            </Paragraph>
            <Paragraph>What's the adapter — a USB charger? And is its light on when plugged in?</Paragraph>
        </Message>
    </Chapter>
);
