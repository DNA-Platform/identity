import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is recovering from recent surgery and experiencing significant disruption to their daily routines
            and overall life structure. They reached out seeking help developing a homeostasis recovery plan, explaining
            that basic aspects of routine like hygiene, meal preparation, and work productivity have suffered during
            their recovery period. The user is currently in a career transition phase, exploring passions and figuring
            out how to contribute to society, which means they have fewer external anchors to provide structure.
        </Paragraph>
    </Chapter>
);
