import { Chapter, Content, Heading, Paragraph, Parenthetical, Section, TableOfContents, Title, Word } from '@dna-platform/public';
import { Index } from '../../../.manual/14-the-entry~code.tsx';

export default () => (
    <Chapter>
        <TableOfContents />
        <Index />
        <Title>
            <Parenthetical />
            [[ Table of Contents ]]
        </Title>
        <Paragraph>
            <Content>$[[ ./The Division of Labour ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./Semantic Reference ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Epistemic Commitment ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./Expressive Power ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./Gödel and Shannon ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Origin of the Result ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./Dropping Induction ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Unverifiable ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Surviving Induction ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Title as a Code ]]</Content>
        </Paragraph>
        <Paragraph>
            <Parenthetical />
            <Word>
                <Content>$[[ Gödel through Goldbach: Semantics and Induction ]]( claude--Gödel through Goldbach: Semantics and Induction--d3b441a9 )</Content>
            </Word>
            <Word>
                <Content>$[[ ./Synopsis ]]</Content>
            </Word>
            <Word>
                <Content>$[[ ./Table of Contents ]]</Content>
            </Word>
        </Paragraph>
    </Chapter>
);
