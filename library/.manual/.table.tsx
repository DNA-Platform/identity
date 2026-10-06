import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, Title, Word } from '@dna-platform/public';
import { Index } from './14-the-entry~code.tsx';
import { TableOfContents } from './10-the-manual~faces.tsx';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Section>
            <Heading>What every book is</Heading>
            <Paragraph>
                <Content>$[[ ./The Book ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Theme ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Author and the Subject ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Layout ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Turn ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Entry ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Bars ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Listing ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word>
                    <Content>$[[ Dougs Reference Manual ]]</Content>
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
            <Heading>What a reader may switch</Heading>
            <Paragraph>
                <Content>$[[ ./The Switch ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Outline ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Tone ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>What a chapter may carry</Heading>
            <Paragraph>
                <Content>$[[ ./The Date ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The First ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./The Colour ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>The types of book</Heading>
            <Paragraph>
                <Content>$[[ ./The Manual ]]</Content>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Making the library</Heading>
            <Paragraph>
                <Content>$[[ ./Initializing a Library ]]</Content>
            </Paragraph>
            <Paragraph>
                <Content>$[[ ./Developing a Library ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
