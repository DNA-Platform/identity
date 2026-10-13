import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The tools that bring my conversations into this library, one chapter to a stage and the code that runs
            the stage beside it, so that how a conversation gets in can be read beside the thing that does it. A
            conversation comes in as <Means>$[[ a conversation ]]( Dougs Reference Manual / The Conversation )</Means>,
            the type of book kept in the reference manual for it, and every source is read into one record, so
            that a second source is one more reader and nothing else moves. Start
            with <Means>$[[ ./The Importer ]]</Means>, which runs the stages in order and reports what it did, and
            then <Means>$[[ ./The Export ]]</Means>, which says what is read and where it is found.
        </Paragraph>
    </Chapter>
);
