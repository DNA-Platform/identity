import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation took place in the "Разное" (Miscellaneous) project and involved two people: Ana, who
            initiated the conversation in Russian, and Doug, who joined partway through in English. Doug had shared an
            Anthropic research article with Ana — "Global Workspace" — and she brought it to Claude for help reading and
            understanding it, noting that dense English-language scientific text is difficult for her. Her explicit goal
            was to get a walkthrough of the article's content with citations, in Russian. Doug is a neuroscientist; Ana
            mentioned he gave her the article to read, and the conversation makes clear he has deep familiarity with
            global workspace theory, consciousness research, and related neuroscience literature.
        </Paragraph>
    </Chapter>
);
