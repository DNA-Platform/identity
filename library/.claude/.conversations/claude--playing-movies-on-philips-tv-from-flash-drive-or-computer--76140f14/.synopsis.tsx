import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked for help connecting external media sources to their TV setup, which consists of a Philips
            TV and a Magti IPTV set-top box (each with its own remote). They wanted to know how to either play a movie
            from a flash drive or connect a laptop to the TV. Claude explained that the Magti remote controls the
            set-top box rather than the TV, and outlined two options: using a flash drive via the TV's USB port, or
            connecting a laptop via HDMI.
        </Paragraph>
    </Chapter>
);
