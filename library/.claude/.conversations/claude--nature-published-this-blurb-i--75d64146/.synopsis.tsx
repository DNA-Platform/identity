import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged Claude in a focused discussion about neutrino physics prompted by a Nature article blurb
            that seemed, on its face, to contradict the Standard Model. The person correctly anticipated that the
            apparent contradiction was an artifact of simplification rather than genuine controversy, and asked Claude
            to explain the actual standard research picture and how the JUNO experiment relates to it.
        </Paragraph>
    </Chapter>
);
