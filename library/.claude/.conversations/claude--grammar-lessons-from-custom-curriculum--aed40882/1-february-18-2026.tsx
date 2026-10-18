import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Title>[[ 18 February 2026 ]]</Title>
        <Message
            at="2026-02-18T22:33:56.491880Z"
        >
            <Origin>019c72e3-799d-7654-aff8-a0bd7305ff6b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I uploaded the curriculum we created from another chat. We haven't started it yet. I want you to start
                teaching me grammar from the curriculum. Teach me in lessons or whatever format seems to suggest itself from
                the way you wrote the curriculum. Write the lesson in an editable artifact for me to read. Then we can use
                the chat to explore the subject as I ned
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T22:35:34.017837Z"
        >
            <Origin>019c72e3-799d-7654-aff8-a0bec3638f38</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me read the curriculum closely, then I'll write up Session 1 as a lesson artifact.</Paragraph>
            <Action>Read /mnt/project/English_Grammar_Curriculum</Action>
            <Action>Created /home/claude/session-01.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                There's your Session 1 lesson. Read through it at your own pace — it covers the descriptive/prescriptive
                distinction, the notation system linguists use for marking grammaticality, Standard English as a dialect,
                and the formal framing of grammar as a generative system.
            </Paragraph>
            <Paragraph>
                I've included discussion prompts at the end, but don't feel bound by those. Whatever catches your attention,
                puzzles you, or provokes an objection as you read — bring it here and we'll dig in.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T22:49:54.098222Z"
        >
            <Origin>019c72f2-1663-7701-9678-f2ca6c22c51e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay good attempt but the tone of the things is way way way too introductory. I am afraid that at this level
                of formalism, we aren't going to get to the real topics. Maybe a paragraph or two about descriptive versus
                prescriptive grammar is interesting. But that much content, and I'm not sure I'm even learning grammar. Look
                at this sentence: "If you've worked with formal grammars in computer science — BNF, CFGs, parser generators
                — you already have the right mental model." - I am the one who wanted this to be formal. If that even might
                be true, then how much do I not need the soft intro to grammars that you are giving? If YOU came up with
                deciding to teach me English grammar with an eye for formality, then perhaps it would be justified. But if I
                did, why not assume we can map my knowledge of formal grammars onto natural language. The goal was to make
                you more rigorous about grammatical topics that might be underspecified in the literature. Not to make this
                a textbook on formal grammar too
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T22:51:35.657734Z"
        >
            <Origin>019c72f2-1663-7701-9678-f2cb639cd2a5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're completely right. I padded it with motivational scaffolding you don't need and starved it of actual
                grammar. The curriculum front-loads a lot of "foundations" that are really just throat-clearing for someone
                with your background. Let me compress Sessions 1–3 (maybe even touching 4) into a single dense lesson that
                gets into real grammatical substance fast — actual categories, actual tests, actual English structure. Give
                me a minute.
            </Paragraph>
            <Action>Created /home/claude/session-01-v2.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                That's more like it, I think. Sessions 1–4 compressed into one lesson that gets into actual grammar —
                categories, tests, phrase structure, the complement/modifier distinction — rather than spending pages
                explaining what a formal grammar is to someone who already knows.
            </Paragraph>
            <Paragraph>
                The pace should be roughly right now: dense enough that you're learning real English grammar, not so padded
                that you're reading things you already know. Let me know what hits, what's too fast, what provokes questions
                — and we'll calibrate from there.
            </Paragraph>
        </Message>
    </Chapter>
);
