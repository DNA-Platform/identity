import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is a Russian-speaking parent helping their daughter Katya with homeschooling through the Foxford
            platform. They requested an English translation of Katya's weekly progress report while maintaining the
            original visual formatting so that someone named Doug could read it in English. Claude created an HTML
            artifact that preserved the layout and design while translating all Russian text, showing Katya's
            performance across Grade 4 subjects including Russian Language, Literature, Mathematics, Environmental
            Science, English, and Visual Arts.
        </Paragraph>
    </Chapter>
);
