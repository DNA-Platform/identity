import { Chapter, Heading, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>How this book is built</Part>
        <Spread />
        <Title>[[ The Accounts ]]</Title>
        <Paragraph>
            <Brief />
            My conversations with Claude come from two accounts, DNA and DNA Legacy, one history held in two
            places, and every conversation in this library says on its cover which of the two it came from.
        </Paragraph>
        <Section>
            <Heading>[[[ DNA Legacy ]]]</Heading>
            <Paragraph>
                An account with Claude is held by an email address, and Anthropic does not let that address
                change. Our first account was held by an address at the dna.love domain, and when we lost the
                domain we lost its addresses with it, and so, sadly, the account. We migrated to the account we
                use now and carried on there.
            </Paragraph>
            <Paragraph>
                Losing that first version is what started dna-library and its conversations: an archive of what
                we had said to Claude, kept where no lost address could take it. What I am building here is the
                modernization of that archive. My library is a .public library, significantly more
                sophisticated, so the conversations are coming in again as an upgrade, from the old account and
                the new.
            </Paragraph>
        </Section>
        <Section>
            <Heading>[[[ DNA ]]]</Heading>
            <Paragraph>
                DNA stands for Doug and Ana. Ana is my wife, and we share this account. She speaks Russian, which
                is why a lot of its conversations are in Russian, and those I am not importing.
            </Paragraph>
            <Paragraph>
                The account is a continuation of DNA Legacy, so the two are read as one history. A project
                with the same name in both is one project, the newer on top of the older: its files from both,
                the newer copy where both have one, and its conversations from both. A conversation from either
                is the same kind of book, and nothing but its cover and its record tells which account it came
                from.
            </Paragraph>
        </Section>
    </Chapter>
);
