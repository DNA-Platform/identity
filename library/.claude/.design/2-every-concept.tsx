import { Chapter, Paragraph, Part, Title } from '@dna-platform/public';
import { Brief, Gallery } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Part>The sketches</Part>
        <Gallery />
        <Title>[[ Every Concept ]]</Title>
        <Paragraph>
            <Brief />
            Every concept of this book has a number, from one, and keeps it. Each is shown as it looks at a desk
            and on a phone, and I answer by its number. What I say of one is written under it. The first sketches
            are for the conversation, the book of conversations and a project's page.
        </Paragraph>
    </Chapter>
);
