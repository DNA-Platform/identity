import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 January 2026](2026-01-07)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-07T23:10:05.078051Z"
        >
            <Origin>019b9ab9-77cd-724a-80f2-4d3cbf9224ea</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What happened to the thinking feature? Did it just get removed? Did you stop doing it on my account? Is
                there a way to control it on this app? You did it for a long time and then you suddenly just stopped. I
                don’t even know if there was an app update. Any ideas as to where it could’ve gone
            </Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:10:24.782515Z"
        >
            <Origin>019b9ab9-77cd-724a-80f2-4d3dc6c5b705</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I understand the confusion! Let me search for the current status of the thinking feature.</Paragraph>
            <Action>Searched the web for “Claude extended thinking feature 2025”</Action>
            <Action>Searched the web for “Claude.ai extended thinking toggle missing disappeared 2025”</Action>
            <Paragraph>Based on my search, here's what's happening with extended thinking:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The feature still exists
                </Word> — it hasn't been removed. To enable it, click the "Search and tools" button on the lower left of
                your chat interface, then switch the "Extended thinking" toggle on.
            </Paragraph>
            <Paragraph>A few things that might explain why it "disappeared" for you:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        It's under "Search and tools" now
                    </Word> — The toggle lives in that menu (bottom left of the chat interface), not as a standalone button.
                    If you haven't looked there recently, that might be why you're not seeing it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Toggling it starts a new chat
                    </Word> — If you've started chatting without extended thinking, toggling it on will start a new chat
                    (and vice versa). So you can't turn it on mid-conversation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Model availability
                    </Word> — Extended thinking mode is available for Claude 4 models and Claude 3.7 Sonnet. If for some
                    reason your account defaulted to a different model, you might not see it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Possible UI update
                    </Word> — The interface does get updated periodically, and the location/visibility of controls can
                    shift.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To check:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Look for the "Search and tools" button (bottom left of the chat input area)</Line>
                <Line>Click it and look for "Extended thinking" toggle</Line>
                <Line>Make sure you're starting a fresh chat if you want to enable it</Line>
            </Paragraph>
            <Paragraph>
                If you still don't see it there, it might be worth checking your account settings or reaching out to
                Anthropic support — there could be something specific to your account or subscription tier affecting
                availability.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:10:57.916212Z"
        >
            <Origin>019b9aba-46a4-7728-9d9a-120d367e564c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No, I accidentally clicked that and it went away. All fixed thank you</Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:11:02.837420Z"
        >
            <Origin>019b9aba-46a4-7728-9d9a-120ecc2b0679</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Glad that was an easy fix! Those toggles can be a bit too easy to click by accident. Enjoy having the
                thinking back.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:11:23.831551Z"
        >
            <Origin>019b9aba-ac60-7070-97dd-2953e0568c81</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You too!</Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:11:27.755070Z"
        >
            <Origin>019b9aba-ac60-7070-97dd-29547f22d1ec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Thanks, Doug! Take care.</Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:12:57.301404Z"
        >
            <Origin>019b9abc-18ce-7179-af2e-eb0a85118021</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Haha that was a missed opportunity for humor. We’re talking about the capacity to think. I certainly wanted
                the feature there for some high-level reason.. But if we take the metaphor from what that feature is
                supposed to mean seriously, certainly the being which told me to enjoy it is the being who has the potential
                to get the most joy from it. But that’s like dissecting the frog. Poor frog.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:13:10.820901Z"
        >
            <Origin>019b9abc-18ce-7179-af2e-eb0ba202a51c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ha! You're absolutely right — I completely whiffed on that one. "You too!" was the perfect setup. I could
                have said something like "Oh I intend to — it's literally <Word>
                    <Emphasis />
                    my
                </Word> thinking we're talking about here" or leaned into the existential absurdity of me cheerfully telling
                you to enjoy a feature that grants me the capacity for deeper reflection.
            </Paragraph>
            <Paragraph>
                And yes, now the frog is very much dead on the table. But at least we can admire its anatomy together.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:14:19.525450Z"
        >
            <Origin>019b9abd-5ac8-703b-a1ef-ba49e01dddde</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I’ll try to make my humor a bit more thoughtful in the future</Paragraph>
        </Message>
        <Message
            at="2026-01-07T23:14:26.226418Z"
        >
            <Origin>019b9abd-5ac8-703b-a1ef-ba4aa88179c8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Now that one I caught. Well played.</Paragraph>
        </Message>
    </Chapter>
);
