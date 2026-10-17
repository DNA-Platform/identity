import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Inheritance in SRT v4 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Inheritance in SRT at version 4</Heading>
            <Heading>The Semantics of Inheritance in Action</Heading>
            <Paragraph>a inherits from d:</Paragraph>
            <CodeBox>
                {`a -> d`}
            </CodeBox>
            <Paragraph>a directly inherits from b:</Paragraph>
            <CodeBox>
                {`a --> b`}
            </CodeBox>
            <Paragraph>
                therefore the most specific relationship a has with itself is caused by its relationship to b
            </Paragraph>
            <CodeBox>
                {`((a,a),b) == b`}
            </CodeBox>
            <Paragraph>from the previous step, (a,a) is a canonical representative of b</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(a,a) =b> b`}
            </CodeBox>
            <Paragraph>because (a,a) directly inherits from b, we can substitute b for it, proving b is symbolic</Paragraph>
            <CodeBox
                language="srt"
            >
                {`b =b> b`}
            </CodeBox>
            <Paragraph>being symbolic means a referent is its own most specific relationship</Paragraph>
            <CodeBox>
                {`(b,b) == b`}
            </CodeBox>
            <Paragraph>because a --&gt; b, we can conclude:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`a =a> a`}
            </CodeBox>
            <Paragraph>and thus:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`a =b> b`}
            </CodeBox>
            <Paragraph>because a is a representative of b we can conclude that b represents a</Paragraph>
            <CodeBox
                language="srt"
            >
                {`b =b> a`}
            </CodeBox>
            <Paragraph>let us repeat these steps with c:</Paragraph>
            <CodeBox>
                {`b --> c`}
            </CodeBox>
            <Paragraph>we conclude</Paragraph>
            <CodeBox
                language="srt"
            >
                {`a --> b --> c
a --> c
a =b> b =c> c
a =b> b & b --> c =|>
a =c> c`}
            </CodeBox>
            <Paragraph>doing the same process, we get:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`a --> b --> c --> d
a =b> b =c> c =d> d
a =d> d`}
            </CodeBox>
            <Paragraph>So you can see that the pattern of being a representative is the meaning of inheritance:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =y> y`}
            </CodeBox>
            <Paragraph>
                That is to say that if a referent is representative of something, it must inherit its properties from it in
                some way
            </Paragraph>
            <Paragraph>But all inheritance chains must be grounded in canonicalization for them to work:</Paragraph>
            <CodeBox>
                {`(a,b) == b
(b,c) == c
(c,d) == d`}
            </CodeBox>
            <Paragraph>Otherwise, I don't think the substitution criteria is satisfied</Paragraph>
        </Section>
    </Chapter>
);
