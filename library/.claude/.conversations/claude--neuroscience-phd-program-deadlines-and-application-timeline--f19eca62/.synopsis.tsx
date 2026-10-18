import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is a computational neuroscience researcher with an unusual and distinguished trajectory: an
            undergraduate specialization in computational neuroscience at the University of Chicago, subsequent research
            work in the Hatsopoulos lab (before graduate school) that produced a first-author publication in Nature
            Neuroscience on propagating waves in motor cortex, and a partially completed PhD in neurosciences at UCSD
            under the late Charles Stevens, which was interrupted by a personal health crisis. He holds a master's
            degree from UCSD and has since worked as a software engineer and co-founder in finance. He currently lives
            in Georgia and is exploring re-entering academia to complete his PhD.
        </Paragraph>
    </Chapter>
);
