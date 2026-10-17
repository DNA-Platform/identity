import { Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Personal Notes on Semantic Reference Theory v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Personal Notes on Semantic Reference Theory at version 1</Heading>
            <Heading>Personal Notes on Semantic Reference Theory</Heading>
            <Heading>On the Nature of Transpilation and Meaning</Heading>
            <Heading>The Philosophical Point</Heading>
            <Paragraph>Some semantic distinctions only exist at higher levels of abstraction.</Paragraph>
            <Paragraph>
                When <Word>
                    <Verbatim />
                    x -&gt; y
                </Word> transpiles to FOL, in the special case where <Word>
                    <Verbatim />
                    x = y
                </Word>, we get <Word>
                    <Verbatim />
                    x == x
                </Word> (a tautology). The transpiler is not affecting what is true about the formalism, but there is a loss
                of information preventing us from knowing what <Word>
                    <Verbatim />
                    x == x
                </Word> <Word>
                    <Emphasis />
                    means
                </Word> in the context of the proof, if it came from <Word>
                    <Verbatim />
                    x -&gt; y
                </Word>.
            </Paragraph>
            <Paragraph>
                We can avoid this by having the transpiler state the whole inheritance relationship and then show that it
                concludes <Word>
                    <Verbatim />
                    x == x
                </Word>.
            </Paragraph>
            <Paragraph>
                But that this creates a difference in meaning suggests that the transpiler is interpreting. And we can
                search for the definition of meaning in that which is absent from the set of things we can conclude in our
                interpretation.
            </Paragraph>
            <Heading>Implications</Heading>
            <Paragraph>
                <List />
                <Line>
                    The transpiler creates semantic sugar - notation that makes certain patterns visible at the SRT level
                    even when they dissolve at the FOL level
                </Line>
                <Line>Language conventions create semantic spaces that don't exist in the underlying logic</Line>
                <Line>The gap between transpilation levels is where meaning lives</Line>
                <Line>
                    Meaning might be found in what is lost during interpretation - the semantic distinctions that vanish
                    when we move to lower levels of abstraction
                </Line>
            </Paragraph>
        </Section>
    </Chapter>
);
