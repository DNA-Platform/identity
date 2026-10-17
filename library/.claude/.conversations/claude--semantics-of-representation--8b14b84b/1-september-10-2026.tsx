import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 September 2026](2026-09-10)</Date>
        </Dated>
        <Title>[[ 10 September 2026 ]]</Title>
        <Message
            at="2026-09-10T21:16:16.926299Z"
        >
            <Origin>01a08d2d-aaeb-7654-b046-57f609c49caa</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Read up on the last chat, catch up on using the sketch, foundationa with the 10 referents and the semantics
                of types. Let’s do the semantics of representation
            </Paragraph>
        </Message>
        <Message
            at="2026-09-10T21:19:19.737573Z"
        >
            <Origin>01a08d2d-aaeb-7f6d-8b64-e8c9a2ad5d6a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read memory</Action>
            <Action>Looked at recent conversations</Action>
            <Action>
                Ran ls -la /mnt/user-data/outputs/ 2&gt;/dev/null; ls -la /mnt/project/; wc -c
                /mnt/project/Semantic_Reference_Theory__A_Foundational_Sketch
                /mnt/project/Doug__Semantic_Reference_Theory__A_Formal_Foundation
            </Action>
            <Action>
                Ran cat /mnt/project/Semantic_Reference_Theory__A_Foundational_Sketch; echo ======; cat
                /mnt/project/Doug__Semantic_Reference_Theory__A_Formal_Foundation
            </Action>
            <Action>Searched past conversations for “ten referents foundational sketch”</Action>
            <Action>Searched past conversations for “Semantics of Types document Polymorphism Symbolism”</Action>
            <Action>Searched past conversations for “remove literal section compress types document final”</Action>
            <Action>
                Searched past conversations for “subject verb object universal theory of meaning counting semantics”
            </Action>
            <Action>Used read conversation</Action>
            <Paragraph>
                I'm caught up on the Sketch's five forms and ten referents, and on the types document: dot and brace,
                three-line inheritance, the tentative identification reading, canonical, bottom, polymorphism, and
                symbolism. The last session ended on value as closure, love's finite cycle, and the whole numbers by
                part-whole conservation.
            </Paragraph>
            <Paragraph>
                Representation opens from one fact already in the Sketch. The reference and representation blocks are the
                two ways a most specific relationship can be one of its own terms.
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Pencil — the two collapses

  (x,y) most specific:  x =(x,y)> y

  (x,y) == x  =|>  x =x> y   reference
     Sketch: reference == (reference, referent)
  (x,y) == y  =|>  x =y> y   representation
     Sketch: representation == (representative, representation)
  both        =|>  x == y    individuality
     Sketch: individual == (individual, individual)`}
            </CodeBox>
            <Paragraph>
                In reference, the relationship is the subject: the symbol is how it refers. In representation, the
                relationship is the object: the representative relates to the representation only by standing in it. A
                sample and its population, or a part and its whole, have nothing more specific between them than the
                population or the whole. This is the form last session's counting already used.
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Pencil — one canonical per representation

  (x,y) == y  &  (x',y) == y
  uniqueness of the pair  =|>  x == x'

  Verdict: a representation is the most specific
  relationship of exactly one representative. Others
  may still stand x' =y> y, but through something
  narrower: (x',y) != y.`}
            </CodeBox>
            <Paragraph>That derives the Bible ruling, that the canonical is singular, instead of assuming it.</Paragraph>
            <CodeBox
                language="srt"
            >
                {`Pencil — the conundrum

  Sketch:      representation == (representative, representation)
  Supposition: representation == (representative, referent)
  uniqueness =|> referent == representation

  The conundrum's other lines then reduce:
    representative =representation> referent
      → the block's own first line
    representation =representative> referent
      → representation =representative> representation
        identification: the representation is
        identified by its representative`}
            </CodeBox>
            <Paragraph>
                Under the supposition, what a representative refers to through its representation is the representation
                itself. That is the sample reading: the sample refers to the population. The other perspective refuses the
                supposition. There, the representative's most specific relationship to the referent is not the
                representation, and the reference stands on its own. So the Sketch's closing line has formal content.
                Uniqueness lets "representation" be the most specific relationship of only one pair, and the frame's subject
                decides which pair.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ruling question.
                </Word> Is that the conundrum as you intend it? The alternative is a weaker supposition, <Word>
                    <Verbatim />
                    (representative, referent) -&gt; representation
                </Word>. That leaves the referent free and keeps both perspectives inside one frame.
            </Paragraph>
            <Paragraph>Once you rule, I'll set this in the types-document style.</Paragraph>
        </Message>
    </Chapter>
);
