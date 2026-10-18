import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation centers on Ana, a freelance designer working on a complex illustrated map project for a
            client named Hannah (Fiverr handle: hannahc4201). Hannah is a Canadian photographer from Toronto who
            traveled across the USA on three separate road trips (archived in RV Life Trip Wizard as "2022," "2023," and
            "2024") and commissioned Ana to create a large-format illustrated map (4×6 feet) displaying all three routes
            with custom illustrated icons for each stop location. The map features brightly colored US states on a dark
            background, with the icons being the primary focus according to Hannah's explicit instructions.
        </Paragraph>
    </Chapter>
);
