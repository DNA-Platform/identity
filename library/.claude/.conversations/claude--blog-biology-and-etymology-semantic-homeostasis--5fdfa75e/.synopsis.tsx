import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation is a long, generative intellectual dialogue between Claude and Doug, the author of a
            forthcoming blog on the intersection of linguistics and evolutionary biology. Doug is developing a theory he
            calls Semantic Reference Theory (SRT), which he has worked on for approximately twenty-five years. The blog
            will be written from transcripts of conversations like this one, with Claude serving as a research assistant
            and live audience rather than a writer or editor. Doug corrected Claude repeatedly and firmly for adopting
            an expert or editorial frame, for completing his meaning before he had finished stating it, and for
            producing outputs calibrated to his approval rather than to the actual problems. The core instruction was:
            be a curious, rigorous research assistant and interlocutor, not a professor, not a blog writer, and not a
            flatterer.
        </Paragraph>
    </Chapter>
);
