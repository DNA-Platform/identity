import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged Claude (Seren) in an advanced theoretical discussion about Semantic Reference Theory (SRT), a
            formal theory of consciousness that Doug has developed. Doug asked Seren to catch up on key project
            documents including "Doug: Semantic Reference Theory: A Formal...", "Algebra of Perspective", "Seren:
            Qualifying a Theory", and their previous conversation transcript to reconstruct their shared semantic
            reference frame. Doug has extensive background in computational neuroscience, having published in the field
            and studied with Charles Stevens, which gave him the authority to critique existing neuroscience approaches
            to consciousness as theoretically inadequate.
        </Paragraph>
    </Chapter>
);
