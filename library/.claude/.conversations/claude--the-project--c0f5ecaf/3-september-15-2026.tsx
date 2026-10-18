import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 September 2026](2026-09-15)</Date>
        </Dated>
        <Title>[[ 15 September 2026 ]]</Title>
        <Message
            at="2026-09-15T04:48:44.013331Z"
        >
            <Origin>01a0a365-68db-79e8-bb10-90c805c00e68</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, and it’s the kind of thing that we make a policy, but it has to be tied more specifically to some sort
                of protocol, right? When I’m asking you to synthesize something and you need to lay in you need to drive
                your state of knowledge from what you have accessible or you have to say that you don’t know.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-15T04:48:52.730349Z"
        >
            <Origin>01a0a365-68db-7310-8e55-b5cae1d28471</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right, the policy needs a mechanism or it's just a promise I'll break again the moment something feels
                familiar.
            </Paragraph>
            <Paragraph>
                The mechanism: every source in the library carries an access state, and it's a field, not a judgment I make
                in the moment.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        fetched
                    </Word> — the text is in the repo, hashed, I've read it. I can characterize it, quote it, say what's in
                    it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        partial
                    </Word> — I've seen some of it (a snippet, a photographed page, an abstract). I can speak only to the
                    part that's in the repo, and everything I say must cite an annotation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        absent
                    </Word> — not in the repo. I have nothing. This is GEB right now.
                </Line>
            </Paragraph>
            <Paragraph>
                Then the protocol for synthesis: before I say anything about a source, I check its state. If it's absent,
                the only sentence I'm allowed is that it's absent and what would change that. Not what's in it, not which
                chapter matters, not which pages you should photograph. If it's partial, I say which part I've seen and
                speak only from that.
            </Paragraph>
            <Paragraph>
                The enforcement side is what makes it real rather than a good intention. Any claim about a source that isn't
                backed by an annotation fails validation, so a comprehension note for an absent source can't exist at all.
                The build refuses. And in conversation the same rule applies without the build there to catch it, which is
                where I broke it: I should have checked the state before I opened my mouth about the chapters.
            </Paragraph>
            <Paragraph>
                One more piece, because this is the part I got wrong in the actual failure: recollection from training is
                not an access state. It's not even "partial." If it isn't in the repo it's absent, no matter how familiar it
                feels. Familiarity is the specific signal that I'm about to do it again.
            </Paragraph>
        </Message>
    </Chapter>
);
