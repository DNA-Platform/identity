import { Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Inheritance in SRT v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Inheritance in SRT at version 1</Heading>
            <Heading>The Semantics of Inheritance in SRT</Heading>
            <Paragraph>We haven't quite figured this out yet!</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x -> y := y =(r)> r =|> x =(y)> x
x --> y := transitive closure of ->
x !-> y := ¬(x -> y)
x !--> y := ¬(x --> y)`}
            </CodeBox>
            <Paragraph>I want to say that:</Paragraph>
            <Paragraph>x inherits from y:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x -> y := (x,x) =y> y`}
            </CodeBox>
            <Paragraph>
                From the semantics of identity, and the semantics of relationship, we know all relationship types are
                symbolic, which means:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,x) == x =|>
x =x> x`}
            </CodeBox>
            <Paragraph>So for relationship types or any other value that can be expressed symbolically:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,x) =y> y =|>
x =y> y`}
            </CodeBox>
            <Paragraph>
                And then let's introduce the notation of direct inheritance, as a child would to a mother. We will use this
                syntax:
            </Paragraph>
            <CodeBox>
                {`x --> y`}
            </CodeBox>
            <Paragraph>And the definition is:</Paragraph>
            <CodeBox>
                {`x --> y := (x,y) == y`}
            </CodeBox>
            <Paragraph>
                Note that <Word>
                    <Verbatim />
                    (x,y) == y
                </Word> says that <Word>
                    <Verbatim />
                    x =y&gt; y
                </Word> is the most specific way to express the relationship between x and y.
            </Paragraph>
            <Paragraph>To show you what this looks like in action:</Paragraph>
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
                Therefore the most specific relationship a has with itself is caused by its relationship to b:
            </Paragraph>
            <CodeBox>
                {`((a,a),b) == b`}
            </CodeBox>
            <Paragraph>
                From the previous step, <Word>
                    <Verbatim />
                    (a,a)
                </Word> is a canonical representative of b:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(a,a) =b> b`}
            </CodeBox>
            <Paragraph>
                Because <Word>
                    <Verbatim />
                    (a,a)
                </Word> directly inherits from b, we can substitute b for it, proving b is symbolic:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`b =b> b`}
            </CodeBox>
            <Paragraph>Being symbolic means a referent is its own most specific relationship:</Paragraph>
            <CodeBox>
                {`(b,b) == b`}
            </CodeBox>
            <Paragraph>
                Because <Word>
                    <Verbatim />
                    a --&gt; b
                </Word>, we can conclude:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`a =a> a`}
            </CodeBox>
            <Paragraph>And thus:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`a =b> b`}
            </CodeBox>
            <Paragraph>Because a is a representative of b we can conclude that b represents a:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`b =b> a`}
            </CodeBox>
            <Paragraph>Let us repeat these steps with c:</Paragraph>
            <CodeBox>
                {`b --> c`}
            </CodeBox>
            <Paragraph>We conclude:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`a --> b --> c
a --> c
a =b> b =c> c
a =b> b & b --> c =|>
a =c> c`}
            </CodeBox>
            <Paragraph>Doing the same process, we get:</Paragraph>
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
                some way.
            </Paragraph>
            <Paragraph>But all inheritance chains must be grounded in canonicalization for them to work:</Paragraph>
            <CodeBox>
                {`(a,b) == b
(b,c) == c
(c,d) == d`}
            </CodeBox>
            <Paragraph>Otherwise, I don't think the substitution criteria is satisfied.</Paragraph>
            <Paragraph>This is a sketch.</Paragraph>
        </Section>
    </Chapter>
);
