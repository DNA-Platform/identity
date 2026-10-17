import { Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 August 2026](2026-08-24)</Date>
        </Dated>
        <Title>[[ 24 August 2026 ]]</Title>
        <Message
            at="2026-08-24T12:32:10.321931Z"
        >
            <Origin>01a033c2-eff4-7cb6-8bed-59a0fa1143b3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>A string can be identified by its length: string =length&gt; string</Paragraph>
            <Paragraph>
                The length is a subject that is related to the string object length =(length,string)&gt; string
            </Paragraph>
            <Paragraph>
                Shorthand: string =length&gt; string length =&gt; string =|&gt; (length,string) can be called length(string)
                Read: length of string string.length is acceptable too
            </Paragraph>
            <Paragraph>
                How does this notation generalize based on the foundational sketch? Its a soecification on the way, and I
                identification can relate to an identity.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-24T12:32:46.351106Z"
        >
            <Origin>01a033c2-eff4-747d-9f2a-7fa6af113ab0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the project's knowledge for “most-specific relationship (x,y) specification identification
                canonical qualification”
            </Action>
            <Paragraph>Reading your two lines against the Sketch's five forms:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`string =length> string          identification form: identity =identification> identity
length =(length,string)> string relationship form:  subject =relationship> object,
                                                     relationship == (subject, object)`}
            </CodeBox>
            <Paragraph>
                So <Word>
                    <Verbatim />
                    length
                </Word> occupies two positions: identification in the first line, subject in the second. The generalization
                is that move — an identification descends into the subject position and relates to its identity. Nothing in
                the primitive forces <Word>
                    <Verbatim />
                    x =p&gt; x =|&gt; p =&gt; x
                </Word>; that's the claim your notation is adding. Once it's added, Specification supplies <Word>
                    <Verbatim />
                    (p,x)
                </Word>, and the call notation is just a name for the witness:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x  &  p => x  =|>  p(x) := (p, x)
x.p      == p(x)                (object-first spelling of the same referent)`}
            </CodeBox>
            <Paragraph>
                "Length of string" reads subject-first; <Word>
                    <Verbatim />
                    string.length
                </Word> reads object-first; both denote <Word>
                    <Verbatim />
                    (length,string)
                </Word>.
            </Paragraph>
            <Paragraph>Run it through the other Sketch forms and each one gives the call a fixed-point shape:</Paragraph>
            <CodeBox>
                {`relationship:    subject(object)             == (subject, object)     -- unconstrained
reference:       reference(referent)         == reference
representation:  representative(representation) == representation
individuality:   individual(individual)      == individual`}
            </CodeBox>
            <Paragraph>
                So the canonical symbol is the self-call: <Word>
                    <Verbatim />
                    x(x) == (x,x) == (x)
                </Word>. And Uniqueness keeps the calls apart — <Word>
                    <Verbatim />
                    length(string)
                </Word>, <Word>
                    <Verbatim />
                    hash(string)
                </Word>, <Word>
                    <Verbatim />
                    first(string)
                </Word> are three distinct most-specifics of three distinct pairs.
            </Paragraph>
            <Paragraph>
                One thing your example leaves open: <Word>
                    <Verbatim />
                    length(string)
                </Word> names a relationship, not the number 5. To get the value in, the natural candidate seems to be a
                second identification, <Word>
                    <Verbatim />
                    string =5&gt; string
                </Word> with <Word>
                    <Verbatim />
                    5 -&gt; length
                </Word> — the specific value inheriting into the general identification — but that's a guess for your
                ruling, not something I can derive from the Sketch.
            </Paragraph>
        </Message>
    </Chapter>
);
