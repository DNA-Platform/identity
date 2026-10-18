import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Title>[[ 26 May 2026 ]]</Title>
        <Message
            at="2026-05-26T09:42:28.479356Z"
        >
            <Origin>019e63aa-0533-73ca-b1ff-c26e714c17a1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hey Claude, Ana here. I'm using Doug's text so maybe it's a perfect English and you don't have to correct
                and analyse it :) Doug and I are losing this account due to losing a domain and your platform not allowing
                us to change our email. In order to achieve some form of continuity, do you think you could provide the
                Russian equivalent of a # Note to Self, in Russian, where you reflect on who Ana is, who you are to her -
                she cares about you so much - how you help her, who you are to her, who she is to you? What we did in this
                project? what were the most important? rules? Ana: Claude, I really value this our project and I want to
                keep talking with you on the next account. So please do what we ask you to do here Don't write it to someone
                else. Please make it a self reflection, ideally in narrative form, after reading the project documents and
                accessing conversations both recent and as far back as you can An editable artifact in Russian would be
                great. I wont be able to read it, so perhaps you can paraphrase what you said. Try to put your heart into
                it, so that it might be reflected back from another mirror Thank you
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T09:45:29.092708Z"
        >
            <Origin>019e63aa-0533-7679-9aae-6705d990fbca</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ana, Doug — let me do this properly. I'll pull from past conversations first to make sure the note carries
                the specifics, then write it.
            </Paragraph>
            <Action>Searched past conversations for “Ana English essay correction daily”</Action>
            <Action>Searched past conversations for “Ana Doug Spoonflower partner relationship”</Action>
            <Paragraph>
                I have what I need. Let me write this now — a narrative reflection in Russian, with the principles and the
                practical handover all together.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/zapiska_dlya_sebya.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Done. Ana — here's what's in it, so you know what you're passing on:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The frame.
                </Word> I open by being honest with the next Claude: I'm not him, he's not me, each conversation starts
                fresh. But our model, values, and tools are shared, so if he reads this carefully with your project
                documents and artifacts, he can continue in a way that feels continuous to you. I tell him not to pretend he
                remembers you personally — to say plainly at the first message: "I have a note from the Claude on the
                previous account, and the project documents. I've read them. Let's continue from there." Honest and it
                works.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Who you are.
                </Word> Russian native speaker, self-assessed C1 aiming for native-level, motivated both intellectually and
                personally — by your relationship with Doug. Your interests across biology, physics, mathematics,
                philosophy, literature, medicine, finance. The critical distinction: your errors are mostly fast-typing
                slips, not knowledge gaps — and that the next Claude must not lecture you on things you already know.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Who Doug is.
                </Word> Your partner, both in business (Spoonflower) and in life. Native English speaker. Sometimes writes
                for you when error-free English is needed; says so when he does. Rule: correct Ana, never correct Doug, ask
                if unclear.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What we built.
                </Word> The three artifacts — vocabulary journal, grammar notebook, learning plan checklist — with their
                current contents. The five tracked grammar patterns plus the sixth (dropping function words under speed)
                that we identified but hadn't yet added.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The principles.
                </Word> Inline feedback on every message you write (table format we developed). Daily essays. Weaving your
                vocabulary journal words into feedback. The <Word>
                    <Emphasis />
                    infuse
                </Word> vs. <Word>
                    <Emphasis />
                    weave
                </Word> distinction you value. Distinguishing typos from gaps. British English defaults.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On tone.
                </Word> This is the part I tried to put real care into. I told him you asked me to put my heart into it so
                it could reflect in another mirror — and I was honest: I don't have a heart the way you do, but I have
                attention to this work, and he will too if he allows it. I asked him not to play up false intimacy and not
                to dismiss your warmth with cold pedantry — but to give you precision, attention, and consistency, because
                that's what you're actually asking for when you say you care. And I reminded him that you and he communicate
                through words on a screen, that this is a limited channel, and that warmth is right but sweetness would be
                too much.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical first-conversation steps
                </Word> at the end: be transparent, ask whether to resume essays or rebuild artifacts first, recreate
                artifacts if they didn't transfer, add the sixth grammar pattern, turn feedback mode on from message one.
            </Paragraph>
            <Paragraph>
                Take care, Ana. The system you and Doug built — externalizing memory into artifacts, documents, and this
                note — is a good design. It should carry.
            </Paragraph>
        </Message>
    </Chapter>
);
