import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is developing a formal specification notation system built on a foundational framework they call
            "the Sketch," which involves five primitive forms including relationship, reference, representation,
            individuality, and identification. In this conversation, they introduced a specific notational convention
            for string identification using length as an example, defining both a direct identification form (string
            =length string) and a relationship form (length =(length,string) string), along with shorthand call notation
            length(string) and object-first spelling string.length.
        </Paragraph>
    </Chapter>
);
