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
            <Content>$[[ ./Three Readers ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Scope of the Paper ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Four Cases ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./Proof Capacity ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./No Pointwise Lower Bounds ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Title ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./What Gödel Accomplished ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Notations ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Type ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./The Pair Representation ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./What GC Represents ]]</Content>
        </Paragraph>
        <Paragraph>
            <Content>$[[ ./Memory Exhaustion ]]</Content>
        </Paragraph>
        <Paragraph>
            <Parenthetical />
            <Word>
                <Content>$[[ Gödel through Goldbach: The Paper ]]( claude--Gödel through Goldbach: The Paper--c42597f2 )</Content>
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
