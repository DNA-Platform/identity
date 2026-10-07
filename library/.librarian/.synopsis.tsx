import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            My own account, and the one book here that is by its own subject: a story about me and what I create,
            told so that the rest of the library can be navigated from it. It begins
            with <Means>$[[ ./Starting Over ]]</Means>, where this library was begun again from
            nothing; <Means>$[[ ./Choosing a Design ]]</Means> is how its look was
            decided; <Means>$[[ ./Closure ]]</Means> is why everything the library needs stands inside it;
            and <Means>$[[ ./Ghost-Writing ]]</Means> is how these words are written with me. Every other book
            in this library is written by me or by someone I have vouched for, and this is where that vouching
            is kept.
        </Paragraph>
    </Chapter>
);
