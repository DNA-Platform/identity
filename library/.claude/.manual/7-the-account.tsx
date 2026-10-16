import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Account ]]</Title>
        <Paragraph>
            <Brief />
            The account a conversation with Claude was held under, said on the conversation's cover as the
            project's twin, and the line the conversation draws for it beside the project line.
        </Paragraph>
        <Section>
            <Heading>Two accounts, one kind of book</Heading>
            <Paragraph>
                I have talked with Claude under two accounts, the one I use now and an older one, and every
                conversation of either is imported as the same kind of book. Which account held it is a fact of
                Claude's, as the project is, so it is said here and not in the library's manual: an account is an
                annotation of a conversation's cover, the twin of <Means>$[[ the project ]]( ./The Project )</Means>,
                holding the account's name and standing a reference to it, written right after the project line.
                It leads to a mention and never to a chapter, on my ruling that the accounts must be free to move:
                the two, <Means>$[[ DNA ]]( Dougs Claude / DNA )</Means> and <Means>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Means>,
                are mentioned in <Means>$[[ The Accounts ]]( Dougs Claude / The Accounts )</Means>, and a mention
                makes its id wherever it stands, so the cover's reference holds wherever the sections go.
            </Paragraph>
            <Paragraph>
                A conversation with Claude draws an account line after its project line whenever its cover says
                one, a word said to be a label and the account's name leading to the mention, so a reader of any
                conversation sees which account it was held under without opening its record. The record says it
                too, in its own field, which is how the import tells the two apart; a record written before the
                field existed reads as the account I use now.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
