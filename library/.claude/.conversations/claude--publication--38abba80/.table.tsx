import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Appendix, Index } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Paragraph>
            <Content>$[[ ./Conversation ]]</Content>
        </Paragraph>
        <Paragraph>
            <Parenthetical />
            <Word>
                <Content>$[[ Publication ]]( claude--Publication--38abba80 )</Content>
            </Word>
            <Word>
                <Content>$[[ ./Synopsis ]]</Content>
            </Word>
            <Word>
                <Content>$[[ ./Table of Contents ]]</Content>
            </Word>
        </Paragraph>
        <Section>
            <Appendix />
            <Heading>Artifacts</Heading>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v4 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v5 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v6 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v7 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v8 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v9 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./The Hard Problem of Consciousness: A Definitive Metalogical Resolution v10 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Solving the Hard Problem: A Metalogical Approach to Consciousness v1 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Solving the Hard Problem: A Metalogical Approach to Consciousness v2 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Solving the Hard Problem: A Metalogical Approach to Consciousness v3 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Solving the Hard Problem: A Metalogical Approach to Consciousness v4 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Solving the Hard Problem: A Metalogical Approach to Consciousness v5 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Solving the Hard Problem: A Metalogical Approach to Consciousness v6 ]]</Content>
            </Paragraph>
            <Paragraph>
                <Parenthetical />
                <Content>$[[ ./Solving the Hard Problem: A Metalogical Approach to Consciousness v7 ]]</Content>
            </Paragraph>
        </Section>
    </Chapter>
);
