import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Arrow, Index } from '../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>The project and its files</Heading>
            <Paragraph>
                <Content>$[[ ./The Project ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Claude ]]( claude--Claude )</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Synopsis ]]</Content>
                </Word>
                <Word>
                    <Content>$[[ ./Table of Contents ]]</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>September 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Cathy &gt; Programming ]]( ./claude--Cathy &gt; Programming--b6395c0d )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Cathy &gt; Programming--b6395c0d )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>June 2026</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Claude &gt; Philosophy ]]( ./claude--Claude &gt; Philosophy--f8c40c37 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Claude &gt; Philosophy--f8c40c37 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Claude &gt; Programming ]]( ./claude--Claude &gt; Programming--401768b2 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Claude &gt; Programming--401768b2 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Arthur &gt; Team ]]( ./claude--Arthur &gt; Team--f21e3ed3 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Arthur &gt; Team--f21e3ed3 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Nancy &gt; Neuroscience ]]( ./claude--Nancy &gt; Neuroscience--a4816e75 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Nancy &gt; Neuroscience--a4816e75 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Nancy &gt; Visualization ]]( ./claude--Nancy &gt; Visualization--99948077 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Nancy &gt; Visualization--99948077 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Cathy &gt; Libraries ]]( ./claude--Cathy &gt; Libraries--b5de0287 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Cathy &gt; Libraries--b5de0287 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Claude &gt; Miscellaneous ]]( ./claude--Claude &gt; Miscellaneous--ead0c815 )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Claude &gt; Miscellaneous--ead0c815 )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Test ]]( ./claude--Test--9facbd5d )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Test--9facbd5d )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
