import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about finding and working with a life coach online, seeking weekly accountability and
            guidance for accomplishing goals. They requested education about what life coaching entails, as the concept
            was unfamiliar to them. Claude explained that life coaching differs from therapy by focusing forward on goal
            clarification, obstacle identification, and concrete action steps rather than healing past issues. The
            assistant outlined that coaches typically help with career transitions, productivity, time management,
            relationship dynamics, and maintaining momentum on long-term projects.
        </Paragraph>
    </Chapter>
);
