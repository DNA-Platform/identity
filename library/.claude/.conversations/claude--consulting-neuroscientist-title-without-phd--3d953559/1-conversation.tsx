import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-07-27T12:48:30.186691Z"
        >
            <Origin>019fa39f-5b3c-7340-ae44-d2cc04869706</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m consulting at a neuroscience lab at baylor college of medicine. I will be doing computational
                neuroscience, inventing analysis and contributing substantively to neuroscience. I am published in nature
                neuroscience but I have a masters in computational neuroscience and not a phd. What might a good title be
                for this consultancy position be? Do research. Try not to interpolate. Am I allowed to call myself a
                consulting neuroscientist? If not what’s a way to capture the substance of the role without claiming to be a
                scientist
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T12:49:07.493239Z"
        >
            <Origin>019fa39f-5b45-7c0c-8613-be9ae9cf8d14</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Baylor College of Medicine consultant job title research non-employee”</Action>
            <Action>
                Searched the web for “is "neuroscientist" a protected title requiring PhD or can you call yourself a
                scientist without a doctorate”
            </Action>
            <Action>
                Searched the web for “"visiting scientist" OR "research affiliate" non-faculty appointment title academic
                lab consultant master's degree computational”
            </Action>
            <Paragraph>
                Short answer: nothing prohibits it. "Neuroscientist" is not a protected or licensed title anywhere in the
                US, unlike physician, psychologist, or professional engineer. Licensing is generally not required for
                neuroscientists doing only research; it matters only when the role involves diagnosing or treating patients.
            </Paragraph>
            <Paragraph>
                The constraint is conventional, not legal. The standard usage is that a neuroscientist commonly holds a
                doctorate, so in the specific audience you care about (PIs, department admin, grant personnel pages) the
                word carries a doctoral presumption. The cost is asymmetric: it buys you nothing with people who will read
                your CV anyway, and it costs you if someone notices the gap. Role-descriptive titles don't have that
                exposure and read as more senior, not less, because they say what you do.
            </Paragraph>
            <Paragraph>Options that carry the substance:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Computational Neuroscience Consultant
                    </Word> — plainest, no credential claim, says exactly the thing
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Consulting Computational Scientist
                    </Word> — "computational scientist" has no doctoral convention attached to it; this is the closest you
                    get to "consulting neuroscientist" without the freight
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Scientific Consultant, Computational Neuroscience
                    </Word> — good for formal/contract contexts
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Research Consultant (Neural Data Analysis / Encoding Models)
                    </Word> — most specific, best when the parenthetical is true
                </Line>
            </Paragraph>
            <Paragraph>
                One thing worth raising with the PI: rather than self-describing, ask whether the lab can put you up for a
                non-employee academic appointment. Most institutions have these categories, and they're conferred by the
                department rather than claimed. UT Austin, for example, appoints non-employee research affiliates as
                visiting researchers, scholars, or visiting scientists, and MIT's Visiting Scientist appointment covers
                people actively participating in research who aren't employees. A department-granted "Visiting Scientist,
                Department of Neuroscience, Baylor College of Medicine" is unimpeachable in a way no self-description is,
                and those categories generally hinge on the sponsoring faculty's judgment rather than a degree requirement.
            </Paragraph>
            <Paragraph>
                Separately: the Nature Neuroscience paper does more work than any title will. On a bio line, "published in
                <Word>
                    <Emphasis />
                    Nature Neuroscience
                </Word>; consulting on computational analysis at Baylor College of Medicine" lands harder than any noun you
                could pick.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T13:00:54.857209Z"
        >
            <Origin>019fa3aa-d1e7-7185-ae9b-a2480d96b737</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I went with neuroscience research consultant</Paragraph>
        </Message>
        <Message
            at="2026-07-27T13:00:58.617889Z"
        >
            <Origin>019fa3aa-d1e8-77c4-9710-d9d9ec84e704</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That works well. It puts "research" in the role rather than in your credentials, so it describes the work
                without asserting a rank, and "neuroscience" stays as the domain modifier rather than the noun you're
                claiming to be.
            </Paragraph>
            <Paragraph>
                It also scales: if the collaboration turns into authorship or a formal appointment, the title doesn't need
                revising, it just gets supplemented.
            </Paragraph>
        </Message>
    </Chapter>
);
