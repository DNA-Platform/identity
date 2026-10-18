import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is a UChicago-trained computational neuroscientist who worked as a software engineer and is
            currently developing a sophisticated React framework called $Chemistry. They are building this framework
            both for a personal theory-of-representation project hosted on GitHub Pages and as part of a broader
            artistic vision to support digital artists through easily extensible UI components. The user has a strong
            background in C and was an early TypeScript adopter, bringing object-oriented programming principles to
            React development.
        </Paragraph>
    </Chapter>
);
