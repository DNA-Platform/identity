import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Title>[[ 13 May 2026 ]]</Title>
        <Message
            at="2026-05-13T19:22:17.817432Z"
        >
            <Origin>019e22ca-14c1-7a9b-918c-741c5491754e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                If we were to nounify the concept of “include”, like w is included in the word “word”, is there a better
                English option than “inclusion” even if we are bending what that word actually means in colloquial English
            </Paragraph>
        </Message>
        <Message
            at="2026-05-13T19:22:53.101686Z"
        >
            <Origin>019e22ca-14c2-7410-8740-1279bad5f83c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                "Inclusion" is actually formally fine — set inclusion in math is exactly this kind of relation, and the
                colloquial drift toward the social/diversity sense is an overlay on top of a perfectly good structural
                meaning. But if you want to sidestep that drift, a few candidates:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Incidence
                </Word> is probably the cleanest match. In incidence geometry it denotes precisely the static, structural
                relation between an element and the structure it belongs to (a point's incidence on a line, a vertex's
                incidence on an edge). No action-of-including connotation, no social baggage. "The incidence of w in 'word'"
                reads as a pure structural fact.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Containment
                </Word> works but suggests bounded enclosure more than positional appearance — natural for sets, less
                natural for a letter sitting somewhere in a string.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Constituency
                </Word> is good if you want to lean compositional: w is a constituent of "word." Heavier on part-whole
                structure, lighter on the bare "appears in" reading.
            </Paragraph>
            <Paragraph>
                If what you actually want is the <Word>
                    <Emphasis />
                    positional instance
                </Word> — that there's a particular w at position 1 of "word" — then <Word>
                    <Bold />
                    occurrence
                </Word> beats all of these, since it names the located instance rather than the containment fact itself.
                Which, given that you've been working with type/token/occurrence as a triad, may be the more SRT-native move
                regardless of what colloquial English does with "inclusion."
            </Paragraph>
        </Message>
    </Chapter>
);
