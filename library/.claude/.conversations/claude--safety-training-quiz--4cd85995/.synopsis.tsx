import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Douglas Rubino asked Claude to compile reference material on Baylor College of Medicine's new-employee
            orientation to use as a study base, then worked through what appears to be mandatory onboarding compliance
            training. Claude first gathered public information via web search on BCM's New Employee Orientation (NEO)
            process, benefits package, and related onboarding logistics, noting that some material it found online was
            outdated (describing in-person orientation predating the current virtual format).
        </Paragraph>
    </Chapter>
);
