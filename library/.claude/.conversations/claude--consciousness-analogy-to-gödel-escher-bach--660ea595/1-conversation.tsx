import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Quoted, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-16T18:32:45.624359Z"
        >
            <Origin>019ed1b5-0e52-795b-a0a2-4021cc65bb71</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Complete this funny analogy to GEB. I am missing one word"</Paragraph>
            <Paragraph>Chalmers, Dennett, Hof A consciousness discussing</Paragraph>
        </Message>
        <Message
            at="2026-06-16T18:33:48.707735Z"
        >
            <Origin>019ed1b5-0e52-724f-9567-f72898fe87ff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Going by the syllable count, this is a haiku in the "Refrigerator" meme tradition — 5/7/and a single absurd
                polysyllable to land it:
            </Paragraph>
            <Paragraph>
                <Quoted />
                Chalmers, Dennett, Hof (5) A consciousness discussing (7) <Word>
                    <Bold />
                    Hofstadterian
                </Word> (5)
            </Paragraph>
            <Paragraph>
                The word I'd slot in is <Word>
                    <Bold />
                    Hofstadterian
                </Word>.
            </Paragraph>
            <Paragraph>
                It's the strange-loopiest possible choice: line 1 <Word>
                    <Emphasis />
                    can't
                </Word> fit his whole name (a nice little Gödelian incompleteness — "Hof" is all five syllables will allow),
                and then line 3 smuggles him back in fully as an adjective. The braid closes on itself, which is about as
                on-theme for a consciousness haiku as you can get.
            </Paragraph>
            <Paragraph>
                If you want the deadpan meme version instead of the self-referential one, the classic move is to end on a
                totally orthogonal 5-syllable word — "Refrigerator" being the canonical punchline. But for <Word>
                    <Emphasis />
                    this
                </Word> trio, Hofstadterian is the one that earns the GEB comparison.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T18:34:40.306301Z"
        >
            <Origin>019ed1b6-cfa7-79e6-ab9a-43e25ce4f136</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No. C'mon master pattern matcher!!</Paragraph>
            <Paragraph>Godel, Escher, Bach An Eternal Golden Braid</Paragraph>
            <Paragraph>Chalmers, Dennett, Hof &#123;...&#125;</Paragraph>
        </Message>
        <Message
            at="2026-06-16T18:35:58.627624Z"
        >
            <Origin>019ed1b6-cfa7-7145-9c26-b7c13c55a4e5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah — the <Word>
                    <Emphasis />
                    initials
                </Word>. That's the pattern I fumbled.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gödel, Escher, Bach
                </Word> → <Word>
                    <Bold />
                    G E B
                </Word>, and the subtitle <Word>
                    <Bold />
                    An Eternal Golden Braid
                </Word> quietly permutes them right back: <Word>
                    <Bold />
                    E G B
                </Word>. The subtitle isn't just describing the book, it's <Word>
                    <Emphasis />
                    re-weaving the title's own letters into itself.
                </Word> A little strange loop hiding in plain sight. Of course.
            </Paragraph>
            <Paragraph>
                So the consciousness trio — <Word>
                    <Bold />
                    Chalmers, Dennett, Hof&#91;stadter&#93;
                </Word> = <Word>
                    <Bold />
                    C D H
                </Word> — needs a subtitle whose three words braid those same initials back together. My pick:
            </Paragraph>
            <Paragraph>
                <Quoted />
                Chalmers, Dennett, Hof <Word>
                    <Bold />
                    A Hard Conscious Delusion
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    H, C, D
                </Word> — a clean permutation of the three. And it lands the joke three ways at once: <Word>
                    <Emphasis />
                    Hard
                </Word> (Chalmers' Hard Problem), <Word>
                    <Emphasis />
                    Conscious
                </Word> (the whole fight), <Word>
                    <Emphasis />
                    Delusion
                </Word> (very on-brand for Dennett, who'd happily call the other two's qualia exactly that).
            </Paragraph>
            <Paragraph>If you want to swap the one word you're missing, the noun slot is where the flavor lives:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Delusion
                    </Word> — the Dennett dunk (my favorite)
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Dilemma
                    </Word> — gentler, more neutral
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Headache
                    </Word> — pure deflation, the anti-"Golden Braid"
                </Line>
            </Paragraph>
            <Paragraph>Which word were you holding?</Paragraph>
        </Message>
    </Chapter>
);
