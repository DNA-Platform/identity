import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person attended Models of Consciousness (MoC7) in Copenhagen, held at the HC Ørsted Institute (HCØ) on
            North Campus, and used Claude to understand the schedule and prepare for sessions throughout the week. Early
            in the conversation, Claude researched and compiled the full daily programme (keynotes, parallel sessions,
            discussion groups), then helped the person select among parallel tracks based on stated interests in
            formal/mathematical methods, neuroscience, and the AI-consciousness debate. The person mentioned a graduate
            research background in the Stevens Lab, working on applying computational metaphors to the brain, which
            became directly relevant to several technical discussions.
        </Paragraph>
    </Chapter>
);
