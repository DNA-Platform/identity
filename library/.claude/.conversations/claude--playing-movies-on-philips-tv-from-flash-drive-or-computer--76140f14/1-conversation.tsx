import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 July 2026](2026-07-12)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-07-12T11:21:02.680352Z"
        >
            <Origin>019f560f-b9c3-7a32-952c-6d144f1425f0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have a TV that has these two controllers and I want to know if there’s a way of either showing a movie on
                a flash drive or figuring out a way to plug my computer into the TV. Is that possible and what would I need
                to do it?
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-12T11:21:10.737656Z"
        >
            <Origin>019f560f-b9d0-735f-a1c2-ab20529075a3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, both are doable. You've got a Philips TV plus a Magti IPTV set-top box (the second remote controls the
                box, not the TV — you can ignore it for this).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: Flash drive (easiest)
                </Word>
            </Paragraph>
            <Paragraph>
                Most Philips TVs of this generation have a USB port on the back or side and a built-in media player.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Put the movie file on a FAT32- or NTFS-formatted flash drive (MP4/H.264 is the safest format; MKV
                    usually works too)
                </Line>
                <Line>Plug it into the TV's USB port</Line>
                <Line>
                    On the Philips remote, press <Word>
                        <Bold />
                        SOURCES
                    </Word> and select USB, or it may pop up automatically
                </Line>
            </Paragraph>
            <Paragraph>
                If the TV complains about the file, the container/codec is the issue — re-encoding to MP4 with HandBrake
                fixes it almost every time.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: Laptop via HDMI
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Check the back of the TV for a free HDMI input (the Magti box is occupying one)</Line>
                <Line>
                    You need an HDMI cable plus, depending on the laptop, possibly an adapter — your HP laptop likely has a
                    full-size HDMI port, so just a cable; if it's a newer machine with only USB-C, you'd need a
                    USB-C-to-HDMI adapter
                </Line>
                <Line>
                    Press <Word>
                        <Bold />
                        SOURCES
                    </Word> on the Philips remote and pick the HDMI input you plugged into
                </Line>
            </Paragraph>
            <Paragraph>
                HDMI cables and adapters are easy to get in Tbilisi — Alta, Zoommer, or even Glovo from an electronics shop.
            </Paragraph>
            <Paragraph>
                Worth checking first: look at the TV's back panel and tell me what ports you see (USB, number of HDMI). That
                determines whether you need anything at all beyond a cable or a flash drive you probably already have.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-12T11:22:33.447415Z"
        >
            <Origin>019f5611-1a5c-7307-9259-9ee7919bab7d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>There’s also a USB port that doesn’t work for the laptop only the flash drive</Paragraph>
        </Message>
        <Message
            at="2026-07-12T11:22:40.276469Z"
        >
            <Origin>019f5611-1a5d-74a1-b906-f73b5122bdf7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — that's expected, and worth knowing why: the USB port on a TV is an <Word>
                    <Emphasis />
                    input for files
                </Word>, not a video input. The TV reads the drive like a computer reads a flash drive. A laptop plugged in
                by USB has nothing to offer it — TVs can't receive a video signal over that kind of USB connection.
            </Paragraph>
            <Paragraph>So the two paths stay as they were:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Flash drive → USB port
                    </Word>: works, since the TV reads files directly
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Laptop → HDMI port
                    </Word>: the only way to mirror your laptop screen; USB won't substitute
                </Line>
            </Paragraph>
            <Paragraph>
                If the flash drive route is the one you want, the main thing that can still trip you up is file format. If
                the TV shows the drive but says "unsupported file" or shows the file grayed out, tell me the file extension
                and I'll give you the quickest conversion path.
            </Paragraph>
            <Paragraph>
                If you want the laptop route, check whether there's a free HDMI socket next to where the Magti box is
                plugged in — most Philips TVs have 2-3.
            </Paragraph>
        </Message>
    </Chapter>
);
