import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Arrow } from '../../.manual/20-the-bookshelf~code.tsx';
import { Index } from '../../.manual/14-the-entry~code.tsx';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Paragraph>
            <Content>$[[ ./The Project ]]</Content>
        </Paragraph>
        <Section>
            <Heading>Its conversations</Heading>
            <Paragraph>
                <Word>
                    <Content>$[[ Preserving continuity across account transition ]]( ./claude--Preserving continuity across account transition--f54999bb )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Preserving continuity across account transition--f54999bb )***</Content>
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Content>$[[ Building and practicing a personal vocabulary ]]( ./claude--Building and practicing a personal vocabulary--2fb9debb )</Content>
                </Word>
                <Word>
                    <Arrow />
                    <Content>[[ ▷ ]]( claude--Building and practicing a personal vocabulary--2fb9debb )***</Content>
                </Word>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Its files</Heading>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Ana Studies English ]]( claude--Ana Studies English )</Content>
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
            <Heading>Where this book stands</Heading>
        </Section>
    </Chapter>
);
