import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-13T19:46:58.713025Z"
        >
            <Origin>019ffcaa-ef2f-7940-9406-d801106bf95a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Im looking for my Telegram bots in the Telegram settings. I think it’s been renamed, but what would it be
                now?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T19:47:10.463699Z"
        >
            <Origin>019ffcaa-ef30-7ae9-956b-5ac3f4f5b3b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Telegram settings bots section renamed Apps”</Action>
            <Paragraph>
                Telegram never had a full bots section in Settings proper — management has always lived in @BotFather — but
                two renames are probably what you're hitting:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        "Bots" → "Apps"
                    </Word>: Telegram rebranded mini apps/bots as "Apps" in the UI, so the tab in global search and the
                    profile section that used to say Bots now says Apps.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        BotFather's mini app
                    </Word>: bot settings now open in BotFather's MiniApp rather than the old command-driven chat flow. So
                    your bot list is under @BotFather → open its mini app → "My Bots," instead of typing /mybots (though the
                    command still works).
                </Line>
            </Paragraph>
            <Paragraph>
                If you were looking for bots you've <Word>
                    <Emphasis />
                    chatted with
                </Word> rather than ones you own, check the "Apps" tab in the search screen or the bottom-bar Apps section
                if your client shows one.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T19:53:02.596852Z"
        >
            <Origin>019ffcb0-7c23-7d71-b229-12bead013637</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We are reading instructions in Russian that look like that but the new bot father app looks like what I’m
                showing you so can you help us follow the instructions but translated to the new app
            </Paragraph>
            <Attachment>Uploaded “FullSizeRender.jpeg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “FullSizeRender.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-13T19:53:11.232127Z"
        >
            <Origin>019ffcb0-7c2a-7b24-b110-0c933b5c1c88</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — the instructions map cleanly onto what you're seeing. Here's the translation between the two:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the Russian guide says (Шаг 9):
                </Word> "Enter the previously obtained key and press 'Создать' (Create)" — i.e., paste your bot's API token
                into that third-party service ("Ваши Telegram боты") and hit Create.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    In the new BotFather mini app (your first screenshot):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The scrambled line at the top of your screen <Word>
                        <Emphasis />
                        is
                    </Word> the key ("ключ") the guide means — the API token, format <Word>
                        <Verbatim />
                        1234567890:AAxxxx...
                    </Word> just like the example in the Russian screenshot.
                </Line>
                <Line>
                    Tap the blue <Word>
                        <Bold />
                        Copy
                    </Word> button to copy it. (Don't touch <Word>
                        <Bold />
                        Revoke
                    </Word> — that invalidates the token and breaks anything already using it.)
                </Line>
                <Line>
                    Go back to the "Ваши Telegram боты" service, paste the token into its field, and press <Word>
                        <Bold />
                        Создать
                    </Word>.
                </Line>
            </Paragraph>
            <Paragraph>
                That's it — in the old flow you'd get this token as a text message from BotFather; now it lives at the top
                of the bot's settings page with the Copy button. Everything else (Edit Info, Commands, etc.) is just the old
                /mybots menu in graphical form.
            </Paragraph>
            <Paragraph>
                One caution worth noting: that token gives full control of your bot, and the guide is asking you to hand it
                to a third-party service that "earns a percentage on orders." That's fine if you trust the service, but if
                you ever want to cut it off, the <Word>
                    <Bold />
                    Revoke
                </Word> button on this same screen instantly kills the old token and issues a new one.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T19:54:36.779650Z"
        >
            <Origin>019ffcb1-ec79-7ed8-a6a1-d55f1904aa31</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I don’t understand your step three so how do I do that?</Paragraph>
        </Message>
        <Message
            at="2026-08-13T19:54:43.566235Z"
        >
            <Origin>019ffcb1-ec7a-78a2-9bdd-df2913efb1aa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good question — "the service" is the thing from the Russian instructions, not part of BotFather. Here's what
                I mean:
            </Paragraph>
            <Paragraph>
                That guide you're following (the "Ваши Telegram боты" screen with the Создать button) belongs to some <Word>
                    <Emphasis />
                    other
                </Word> bot or website — whatever the earlier steps (Шаг 1–8) had you open. It's probably a Telegram bot or
                mini app that Ana opened in another chat.
            </Paragraph>
            <Paragraph>So concretely:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    In BotFather, tap <Word>
                        <Bold />
                        Copy
                    </Word> — the token is now on your clipboard.
                </Line>
                <Line>
                    Leave BotFather: tap the back arrow (top left) to exit the mini app, then go back to your Telegram chat
                    list.
                </Line>
                <Line>
                    Find the chat with that other bot — the one that showed the "Ваши Telegram боты / Создавайте своих
                    ботов…" screen. It should be in your recent chats from when you did the earlier steps.
                </Line>
                <Line>
                    Open it, and you'll see a text field or a prompt asking for the key. Paste the token there (long-press →
                    Вставить/Paste), then tap <Word>
                        <Bold />
                        Создать
                    </Word>.
                </Line>
            </Paragraph>
            <Paragraph>
                If you can't find which bot that screen came from — what do the earlier steps (Шаг 1–8) of the guide say to
                open? Or tell me the name of the guide and I can figure out which service it is.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T19:56:19.147060Z"
        >
            <Origin>019ffcb3-7acc-7b44-8b5d-6c01b00c9056</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Isn’t the Russian saying your Telegram bought because it’s giving an example for mine?</Paragraph>
        </Message>
        <Message
            at="2026-08-13T19:56:27.873558Z"
        >
            <Origin>019ffcb3-7acd-7e13-a4ff-8bdbccc20d35</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right about the literal translation — "Ваши Telegram боты" does mean "Your Telegram bots," so I see
                why it reads like it's just showing your own bot list. But look at the description text under it:
                "Создавайте своих ботов, делитесь ими с друзьями и зарабатывайте свой процент на заказах" — "Create your
                bots, share them with friends, and earn your percentage on orders." That's marketing copy for a specific
                service (a bot-constructor that pays commission on orders), not anything Telegram or BotFather displays.
                BotFather never talks about earning percentages.
            </Paragraph>
            <Paragraph>
                So that screen is a third-party app whose <Word>
                    <Emphasis />
                    name or header
                </Word> happens to be "Your Telegram bots," and yes — the token shown (<Word>
                    <Verbatim />
                    7348467244:AAHXL...
                </Word>) is their example of what your key should look like. Yours from the Copy button will have the same
                shape.
            </Paragraph>
            <Paragraph>
                The flow is: BotFather gives you the key → this other service consumes the key → it takes over running your
                bot for you.
            </Paragraph>
            <Paragraph>
                What are Шаг 1–8 in that guide? That would tell us exactly which service you're supposed to paste it into —
                likely one of the earlier steps had you open a link or a specific bot where that Создать screen lives.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T20:03:06.285252Z"
        >
            <Origin>019ffcb9-adc1-78ee-b83a-26523e7b4c82</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It says this first. You sure its not mine?</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-13T20:03:16.143380Z"
        >
            <Origin>019ffcb9-adc7-7ee4-aa32-c36b5723e925</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'm sure, yes — and this clearer photo actually helps. Look at what the screen is: it's a <Word>
                    <Emphasis />
                    form
                </Word>. There's a field where the example token (<Word>
                    <Verbatim />
                    7348467244:AAHXL...
                </Word>) is sitting as placeholder text, and a Создать button below it. BotFather has no screen like this
                anywhere — BotFather <Word>
                    <Emphasis />
                    gives out
                </Word> tokens, it never asks you to type one in. Only an outside service that wants to connect to your bot
                asks for the key.
            </Paragraph>
            <Paragraph>
                And the giveaway is still that description line: "зарабатывайте свой процент на заказах" — earn your
                commission on orders. That's a sales pitch from whatever platform this guide belongs to. The "Ваши Telegram
                боты" header is just what <Word>
                    <Emphasis />
                    they
                </Word> named their bot-connection page.
            </Paragraph>
            <Paragraph>So the flow the guide is teaching is:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Шаг 1–8: create a bot in BotFather and get its key (you've done this — that's the token behind your Copy
                    button)
                </Line>
                <Line>
                    Шаг 9: go back to <Word>
                        <Emphasis />
                        their
                    </Word> platform, paste your key into this form, press Создать
                </Line>
            </Paragraph>
            <Paragraph>
                The missing piece is where this form lives — it was opened somewhere in steps 1–8, or wherever the guide
                itself came from (a shop platform? a dropshipping/store service?). What is the guide overall for — what were
                you and Ana setting up when you started it? If you tell me the platform name or show me Шаг 1, I can point
                you to exactly where that Создать screen is.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T20:04:10.890441Z"
        >
            <Origin>019ffcba-afca-7392-a202-227210aebd45</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>And what is the name of the bot that I type of look for exactly</Paragraph>
        </Message>
        <Message
            at="2026-08-13T20:04:19.295593Z"
        >
            <Origin>019ffcba-afcb-7779-83ce-1534fc948f3c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the thing — I can't tell you the exact name, because it isn't visible anywhere in the screenshots.
                The "Ваши Telegram боты" screen is inside some platform's own app or site, and the guide never shows its
                @username in what you've sent me. I don't want to guess a name and send you to the wrong bot.
            </Paragraph>
            <Paragraph>Here's how to find it, in order of likelihood:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Look at the guide itself.
                    </Word> Шаг 1 or 2 almost certainly says "открыть бот @Такой-то" or gives a link — the very beginning of
                    the instructions is where they tell you what to open. Scroll to the top of the document/page the steps
                    are on.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Where is the guide displayed?
                    </Word> If you're reading these steps inside a website or a Telegram channel, that site/channel belongs
                    to the platform — its name will be in the page header or the channel name.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The "Инструкция" link
                    </Word> in the description on that screen points back to their full instructions — hovering over or
                    opening it would reveal their domain or channel.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Check your recent Telegram chats.
                    </Word> If Ana already did steps 1–8, the bot is sitting in the chat list — a recently opened bot you
                    don't recognize, probably with a store/orders theme.
                </Line>
            </Paragraph>
            <Paragraph>
                If you snap a photo of Шаг 1–2 (or just tell me the site or channel where the instructions live), I can tell
                you precisely which one to open.
            </Paragraph>
        </Message>
    </Chapter>
);
