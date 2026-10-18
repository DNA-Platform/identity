import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is planning transportation from Alanya, Turkey to the Sarp border crossing (which leads to Batumi,
            Georgia) for themselves and two cats. They are currently living in Turkey on an ikamet residence permit and
            needed to research practical options for this cross-border journey. Initially, they explored private
            transfer services, but Claude's research revealed that established services for this specific 1,200+
            kilometer route with pets are not readily available, and the journey would take 15-18 hours of driving.
        </Paragraph>
    </Chapter>
);
