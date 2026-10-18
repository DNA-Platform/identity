import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation continues technical development of Ana's DNA Patternity microstock submission pipeline,
            specifically the iStock/Getty ESP upload automation. The session picks up with 131 EPS+JPEG pairs already
            built, validated, and IPTC-injected sitting in dist/ folders across four project directories:
            serens-squares, iran-war/iran-lebanon-front, iran-war/iran-retaliation-arc, and world-options (129 pairs).
            Ana's core preference throughout is to own the tooling directly rather than integrate through third-party
            services like DeepMeta or qHero — when Claude initially recommended DeepMeta as the bulk upload solution,
            Ana explicitly rejected this approach, stating that integrating through a partner they don't control is not
            their way of working. Claude course-corrected to a Playwright browser automation approach mirroring the
            existing Adobe Stock script.
        </Paragraph>
    </Chapter>
);
