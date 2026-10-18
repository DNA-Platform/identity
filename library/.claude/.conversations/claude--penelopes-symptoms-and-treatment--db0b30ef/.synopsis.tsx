import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude for an update on Penelope's (a pet) symptoms, noting she is currently being treated
            with ronidazole for a colitis-related condition. They shared a photo of a recent stool sample, describing it
            as well-formed (an improvement from before) but containing blood that appeared coagulated rather than fresh.
            Claude searched prior conversation history for context on Penelope's treatment before responding.
        </Paragraph>
    </Chapter>
);
