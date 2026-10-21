import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[19 February 2026](2026-02-19)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-19T09:26:05.479412Z"
        >
            <Origin>019c7538-7ba7-722a-8ff5-8059522bcc6a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Does extra.ge support english on the app. Web search in georgian</Paragraph>
        </Message>
        <Message
            at="2026-02-19T09:26:21.817656Z"
        >
            <Origin>019c7538-7ba7-74cd-9400-f1bfd8b2129a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “extra.ge აპლიკაცია ინგლისური ენა”</Action>
            <Paragraph>
                The Georgian-language search didn't turn up specific info about Extra.ge's language settings. Let me check
                their Google Play listing directly for more details.
            </Paragraph>
            <Action>Fetched https://play.google.com/store/apps/details?id=ge.extra&amp;hl=en_US</Action>
            <Paragraph>
                No, the Extra.ge app does <Word>
                    <Bold />
                    not
                </Word> support English. Multiple user reviews on Google Play confirm this clearly. One reviewer from
                October 2025 specifically noted that while the separate "Extra Market" app has an English toggle, the main
                Extra.ge app is entirely in Georgian with no language switching option. Another reviewer echoed that it's
                hard to use without Georgian and recommended using the browser version instead.
            </Paragraph>
            <Paragraph>
                So for now, your options would be using the Extra.ge website through a browser with auto-translate, or
                trying the "Extra Market" app if that's still available with its English option. The website at extra.ge may
                be more workable with Chrome's built-in translation than the app.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-19T09:27:13.832562Z"
        >
            <Origin>019c7539-86b7-7e31-a510-89986475b59e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is extra markwt full featured</Paragraph>
        </Message>
        <Message
            at="2026-02-19T09:27:26.643555Z"
        >
            <Origin>019c7539-86b7-7b70-8d77-4eaa7367d76f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Extra Market app Georgia extra.ge difference”</Action>
            <Paragraph>
                Extra Market is a <Word>
                    <Bold />
                    different, more limited app
                </Word> — it's specifically a <Word>
                    <Bold />
                    grocery delivery
                </Word> service ("same day grocery delivery"), not the full Extra.ge marketplace. So while it reportedly has
                an English language option, it only covers supermarket/grocery items, not the full 150,000+ product catalog
                across electronics, furniture, clothing, tools, etc. that the main Extra.ge platform offers.
            </Paragraph>
            <Paragraph>
                Its recent update also notes "Quick Access to extra.ge" as a new feature, which suggests they're trying to
                bridge the two but they remain separate products.
            </Paragraph>
            <Paragraph>
                So your practical options for the full Extra.ge catalog as an English speaker are basically using the <Word>
                    <Bold />
                    website in Chrome with auto-translate
                </Word> rather than the app. Not ideal, but it's the workaround most expats seem to rely on.
            </Paragraph>
        </Message>
    </Chapter>
);
