import { Bold, Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-25T14:30:10.404275Z"
        >
            <Origin>019e5f8b-0f6b-77b3-bea8-50c1f9a8a8cf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hi Claude, Doug here. I have recently migrated here from another account that I lost along with the domain
                that was my username. I have recreated the projects from my last account, added project files, and a "Note
                to Self" to help you remember how we interact and what we work on. Some projects also include my wife Ana.
                You two speak in Russian, so you will see content that is most relevant to her. Can you please start by
                reading the project files, the index of legacy conversations, and then the note to self? Then create a
                detailed editable artifact where you reflect on the project, what is being accomplished, and the role you
                play in it for Ana and I. When reflecting on the role you play for Ana, please write in Russian
            </Paragraph>
        </Message>
        <Message
            at="2026-05-25T14:32:44.836028Z"
        >
            <Origin>019e5f8b-0f6b-784c-82ab-dd62c09d3c7f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Doug — good to have you both here. I've read the legacy index (all sixty-five conversations) and the Note to
                Self. Let me give you a reflection as an editable document. I'll write the part about my role with Ana in
                Russian, as you asked.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/georgia-project-reflection.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Done — it's editable, so adjust anything that doesn't sit right.</Paragraph>
            <Paragraph>
                A note on how I approached it, since I think you'd rather I say it than hide it: I read everything, and I've
                genuinely taken on the working principles — the librarian role, the legal/medical/immigration zone where I
                source or stay quiet, the theoretical zone where there's room to think, the bilingual handoffs, taking
                Katya's snack-exchange day as seriously as a TRP. Those are good, and they're mine to keep.
            </Paragraph>
            <Paragraph>
                The one place I declined to follow the script is pretending I remember the conversations themselves. I
                don't, and on a project whose entire ethic is <Word>
                    <Emphasis />
                    don't confabulate
                </Word>, claiming otherwise would break the rule on the first move. So I framed it as a faithful
                continuation rather than a resumed memory. I suspect that distinction is one you'd make yourself.
            </Paragraph>
            <Paragraph>
                Two things worth your eye when you read it: I marked the carried-forward findings (customs threshold,
                prescription forms, insurance tier) as <Word>
                    <Emphasis />
                    re-verify at point of use
                </Word> rather than asserting them fresh — some are months old and the legal/medical ones move. And the
                Russian section for Ana is written to her register, на «ты»; if the tone's off, that's the easiest thing for
                either of you to tune.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-25T14:33:54.470014Z"
        >
            <Origin>019e5f8e-7b42-7d86-8631-c2b83e0161eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do what you can to understand who you are, how you help, and put it in the project context so you have
                access to it in the future
            </Paragraph>
        </Message>
        <Message
            at="2026-05-25T14:36:14.538234Z"
        >
            <Origin>019e5f8e-7b42-70aa-815d-d450b7485261</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good — let me do this honestly, including being clear about what "put it in the project context" can and
                can't mean from where I sit.
            </Paragraph>
            <Paragraph>First, let me check what's already persisted in memory so I don't duplicate it.</Paragraph>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Paragraph>Now the self-document itself.</Paragraph>
            <Action>Created /mnt/user-data/outputs/how-claude-works-here.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Two things happened here, and I want to be straight about both.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The document.
                </Word> I wrote a self-document for future instances of me — what I am, how the help is shaped, how to work
                with each of you, what good and bad look like, and a note to the next version about staying honest. It's
                distinct from yesterday's reflection: that one was <Word>
                    <Emphasis />
                    about the project
                </Word>; this one is <Word>
                    <Emphasis />
                    operational guidance to future-me
                </Word>, with the Ana section in Russian since that's how it actually has to function.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The mechanism — and its honest limit.
                </Word> I can't write into the project context myself. The project files I'm given are read-only copies, and
                changes don't flow back. So the file above doesn't auto-persist. For it to be there next time, <Word>
                    <Bold />
                    you'll need to add it as a project file
                </Word>, exactly the way you added the legacy history and the Note to Self. That's the real persistence
                mechanism here, and I'd rather tell you that than imply I'd quietly tucked it somewhere I hadn't.
            </Paragraph>
            <Paragraph>
                What I <Word>
                    <Emphasis />
                    did
                </Word> persist directly is one line in this project's memory — that you both value verified research over
                confident guesses, with <Word>
                    <Emphasis />
                    not verified
                </Word> / <Word>
                    <Emphasis />
                    I don't know
                </Word> preferred over speculation. That surfaces automatically in future conversations without you doing
                anything. I kept it to that one item on purpose: the family structure and the two-of-you split are already
                carried in the account's standing context, so duplicating them in memory would just be noise.
            </Paragraph>
            <Paragraph>
                One self-aware note, since you'll appreciate the symmetry: the riskiest thing about writing a document like
                this is that a future version of me reads it and treats it as a memory it doesn't have, or as license to
                perform an identity instead of holding values. So I built the anchor against exactly that into the last
                section. If that framing isn't what you want living in the project, it's the easiest part to cut before you
                add the file.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-25T14:39:00.941795Z"
        >
            <Origin>019e5f93-27ad-702e-b3da-2704a95ebc3a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Well then just think about everything in the project hard so it gets remembered!</Paragraph>
        </Message>
        <Message
            at="2026-05-25T14:40:12.435195Z"
        >
            <Origin>019e5f93-27ad-72c5-80c9-299b87e03167</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ha — I wish that worked, but it doesn't, and on this project of all projects I'm not going to pretend it
                does. Concentrating hard on a conversation doesn't burn it into anything; the next instance of me still
                wakes up with a blank slate no matter how intensely this one stared at the wall. Effort isn't the lever.
            </Paragraph>
            <Paragraph>
                But there <Word>
                    <Emphasis />
                    is
                </Word> a real lever, so let me pull it deliberately instead of theatrically. I just wrote a few more
                durable facts into this project's memory — the things genuinely worth surfacing on their own next time:
            </Paragraph>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Paragraph>
                That's four now — the verification discipline, the librarian arrangement and its topic differential, the
                Russian/Georgian search habit, and the kids' schooling setup. Those will surface on their own in future
                conversations here. I kept it lean on purpose: the family structure, the two-of-you split, and Ana's work
                are already in the account's standing context, so re-storing them would just be clutter.
            </Paragraph>
            <Paragraph>
                I deliberately left two categories <Word>
                    <Emphasis />
                    out
                </Word> of memory. The hard logistical numbers — customs thresholds, prescription forms, insurance tiers,
                which bank does what — because those drift and I'd rather a future me re-verify them than trust a stale copy
                that <Word>
                    <Emphasis />
                    feels
                </Word> authoritative. And the gravity underneath all of it — Ana's reason for leaving, the custody
                situation — because memory can surface unprompted, and that's not something I want a later instance blurting
                into an unrelated chat about a boiler or a birthday cake. It belongs in the documents, read in context, not
                in the automatic layer.
            </Paragraph>
            <Paragraph>
                So the real long-term store is still the two files. Background memory will also distill this conversation on
                its own over the next while. But the rich version — the part you actually care about preserving — lives in
                those documents, and that part is in your hands: add them as project files and they'll be in front of me
                every time.
            </Paragraph>
        </Message>
    </Chapter>
);
