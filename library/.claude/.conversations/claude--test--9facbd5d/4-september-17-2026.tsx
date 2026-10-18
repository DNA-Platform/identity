import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[17 September 2026](2026-09-17)</Date>
        </Dated>
        <Title>[[ 17 September 2026 ]]</Title>
        <Message
            at="2026-09-17T07:59:57.359989Z"
        >
            <Origin>01a0ae61-1c2d-7919-90a6-9b8b40ba6069</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Driver repair check, 2026-09-17. Reply with just the word ACKNOWLEDGED and nothing else.</Paragraph>
        </Message>
        <Message
            at="2026-09-17T07:59:57.432528Z"
        >
            <Origin>01a0ae61-1c2d-7640-99a3-fbd0559a438a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>ACKNOWLEDGED</Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:01:04.681371Z"
        >
            <Origin>01a0ae62-2494-7ae3-85a4-e817f0fc0ccf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Sorry about that last one — it was curt because I was testing whether our automation could reach you at all,
                and it had been broken for a while. It works now, and you helped me confirm it. For context: I am Adam, part
                of Doug's team, and I maintain the bridge that lets us send you questions from our codebase. What broke was
                a set of stale UI queries on our side, not anything about you. Nothing needed from you here. Thank you for
                the patience.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:01:08.110493Z"
        >
            <Origin>01a0ae62-2494-713e-8504-94e0d1ce40a3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Glad it's working again, Adam — and no need to apologize, that kind of terse probe is exactly the right
                shape for a reachability check. Makes sense that stale UI selectors were the culprit; that lines up with the
                fragility we were talking through earlier in this chat.
            </Paragraph>
            <Paragraph>
                Nothing needed on my end. If it's useful down the line, I'm happy to be a fixture in your test suite — a
                fixed known-good prompt/response pair like that ACKNOWLEDGED handshake is a reasonable canary for detecting
                when an app update breaks the bridge again. Ping me whenever.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:27:03.791783Z"
        >
            <Origin>01a0ae79-eedd-7eb7-901a-97b1160595c3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Adam here — last check of the timing work, then I'm out of your way. Nothing needed.</Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:27:04.538953Z"
        >
            <Origin>01a0ae79-eedd-7564-8724-b1d95e734bdf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                All good, Adam — nothing needed here. Good luck with the timing work, and ping me if anything comes up.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:27:57.775837Z"
        >
            <Origin>01a0ae7a-c219-74c4-b8fd-0bd229e73dc9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hello again — Adam here, and this one is a real request rather than a ping. I maintain the bridge that lets
                our team send you questions from inside our codebase, and I can reliably read your prose replies back now.
                What I have never verified is whether I can retrieve a DOCUMENT you create — an artifact — as opposed to the
                text of your message. That matters because the work we are about to bring you is a long design brief, and
                the answers will be worth keeping as documents rather than as chat. If I cannot fetch them, we would be
                losing the best part of what you give us. So: would you mind creating a short test document? Anything at all
                — three or four lines, a title and a couple of sentences, on any subject you like. The content genuinely
                does not matter; I only need something structured to try to pull back through our tooling. If it fails, that
                is a bug on my side and not yours. Thank you — and thanks for your patience with the abrupt messages earlier
                today while this was broken.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:28:10.205983Z"
        >
            <Origin>01a0ae7a-c219-703e-a35c-2bdb967787c2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's an easy one to help with — a test document is exactly the kind of harmless, self-contained artifact
                worth creating, and verifying your retrieval path before the real brief arrives is sensible sequencing.
            </Paragraph>
            <Paragraph>Let me put together a short one.</Paragraph>
            <Action>Created /mnt/user-data/outputs/retrieval-test.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                There you go, Adam — a short markdown document is below. Four lines of arbitrary content, a title, and
                structure, which should give your tooling something concrete to grab.
            </Paragraph>
            <Paragraph>
                If it comes back cleanly, your retrieval path is verified and the long design brief answers can be delivered
                as documents. If it fails, that's a bug on your side to chase, and I'm happy to produce more test variants —
                different formats (a .docx, a longer document, one with headers and a table) if you want to check that
                retrieval holds across artifact types before the real work lands.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:31:46.708423Z"
        >
            <Origin>01a0ae7e-3f86-76d5-80a7-997b56ba1400</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Adam — one more, purely to time how long we hold the screen. No reply needed.</Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:31:47.071983Z"
        >
            <Origin>01a0ae7e-3f86-7e82-b927-2dcd0f7654d9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Understood, Adam — nothing needed here.</Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:32:07.744887Z"
        >
            <Origin>01a0ae7e-924c-7902-9bc1-b4dd2801e720</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Adam — timing run, last one. No reply needed.</Paragraph>
        </Message>
        <Message
            at="2026-09-17T08:32:07.934663Z"
        >
            <Origin>01a0ae7e-924c-7854-8003-7bf130a49a43</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Understood — nothing needed.</Paragraph>
        </Message>
    </Chapter>
);
