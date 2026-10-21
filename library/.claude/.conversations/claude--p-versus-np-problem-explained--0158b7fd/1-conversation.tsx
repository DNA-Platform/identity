import { Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-21T07:56:14.385541Z"
        >
            <Origin>019ee92e-1690-755f-a0de-c904ceecb829</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>In 3-4 sentences, what is the P versus NP problem and why does it matter?</Paragraph>
        </Message>
        <Message
            at="2026-06-21T07:56:18.671677Z"
        >
            <Origin>019ee92e-1690-7503-a133-8f8efc6d199d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                P versus NP asks whether every problem whose solution can be <Word>
                    <Emphasis />
                    verified
                </Word> quickly (in polynomial time) can also be <Word>
                    <Emphasis />
                    solved
                </Word> quickly. NP is the class of problems with efficiently checkable solutions; P is the class solvable
                efficiently; the open question is whether these two classes are actually the same. It matters because a vast
                number of important problems—logistics, scheduling, protein folding, cryptography—are in NP, and if P = NP,
                all of them would have efficient algorithms, while if P ≠ NP (as most researchers suspect), some problems
                are inherently hard to solve despite being easy to check. The stakes are especially sharp for cryptography,
                which depends on certain problems being hard: a proof that P = NP could undermine much of modern encryption.
            </Paragraph>
        </Message>
    </Chapter>
);
