import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[19 March 2026](2026-03-19)</Date>
        </Dated>
        <Title>[[ 19 March 2026 ]]</Title>
        <Message
            at="2026-03-19T09:09:57.141572Z"
        >
            <Origin>019d055c-2916-71d0-8003-94982a423f68</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can Ipurchase an international plan from at&amp;t or another us carrier that is cheaper than there travel
                pass? For myiphone. I don’t want to lose my US number.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:10:27.840847Z"
        >
            <Origin>019d055c-2916-7c83-846b-12acca04cff2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “AT&amp;T international plan alternatives cheaper than Travel Pass 2026”</Action>
            <Paragraph>
                Since you're in Tbilisi long-term rather than just visiting, the calculus here is a bit different from a
                tourist scenario. Here's the breakdown:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Within AT&amp;T's own options
                </Word>, the Day Pass is currently $12/day, and there's also the Passport plan at $70/month for 2GB or
                $140/month for 6GB, with calls billed at $0.35/minute and unlimited texts. The breakeven versus the daily
                pass is around 11 days. For a month in Tbilisi, Passport is cheaper than daily passes — but still not cheap.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    T-Mobile is generally considered the better carrier for long-term international use.
                </Word> Their 15GB international pass is $50 for 30 days, includes 15GB of high-speed data before speed
                reduction, and works in the same countries as the major carriers' options. Switching to T-Mobile would
                require a new number unless you port yours over, but porting preserves your existing number.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real answer for your situation
                </Word> is probably a two-layer approach you're already partly doing: since you have Magti for local
                Georgian data, you don't actually need a US carrier plan to provide your data. You just need to keep the US
                number alive and reachable. The cheapest way to do that is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Drop to a minimal US plan (e.g., T-Mobile's $15/month prepaid, or even Google Fi's base tier) just to
                    keep the number active
                </Line>
                <Line>
                    Enable <Word>
                        <Bold />
                        WiFi Calling
                    </Word> on your iPhone — this lets you make and receive calls and texts over any WiFi connection as if
                    you're on US soil, with no roaming charges
                </Line>
                <Line>Use Magti for cellular data when off WiFi</Line>
            </Paragraph>
            <Paragraph>
                This approach can keep your total extra charges to a few dollars a month, as long as you have reliable WiFi
                access at home and the venues you frequent.
            </Paragraph>
            <Paragraph>
                The WiFi calling route is the strongest option for your use case — you're not a tourist needing cellular
                everywhere, you're a resident with home WiFi and a local data SIM already in place.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:12:16.550001Z"
        >
            <Origin>019d055e-4a99-7a03-b50e-07c76dbcee26</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>At&amp;t $70 is better than day pass. How do I do that</Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:12:29.909158Z"
        >
            <Origin>019d055e-4a99-76a7-be49-d799cce80081</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>A few important caveats from the search results before you go ahead:</Paragraph>
            <Paragraph>
                The AT&amp;T Passport plan is not available to customers with unlimited plans. So if you're currently on an
                AT&amp;T unlimited plan, you'd need to either switch to a different AT&amp;T base plan first, or this option
                is off the table entirely.
            </Paragraph>
            <Paragraph>
                Assuming you're eligible, you can purchase and activate it through the AT&amp;T website or app. The plan is
                valid for 30 days and ends automatically unless you renew it.
            </Paragraph>
            <Paragraph>
                Practically: log into your AT&amp;T account at att.com or in the myAT&amp;T app, go to Add-ons or
                International Plans, and look for "AT&amp;T Passport." You can add it before you travel.
            </Paragraph>
            <Paragraph>A few things worth knowing going in:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Data over your 2GB allowance is billed at $25 per GB. Given you're in Tbilisi full-time and likely
                    burning data regularly, 2GB could go fast — keep an eye on usage or lean on WiFi heavily.
                </Line>
                <Line>
                    Calls are $0.35/minute outgoing, so US-to-Georgia or Georgia-to-US calls add up. WhatsApp/Signal over
                    WiFi sidesteps that entirely.
                </Line>
                <Line>
                    Since you already have Magti for local data, the Passport 2GB is really just your fallback cellular and
                    your US number's voice/text lifeline — which makes the 2GB tier reasonable rather than a liability.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:13:05.367607Z"
        >
            <Origin>019d055f-0913-7ef8-be75-b1ff3b5929c3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well can I switch from unlimited? One way or another I have to switch even if it’s to T-Mobile.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:13:30.322552Z"
        >
            <Origin>019d055f-0913-764e-9ad9-a0b1beff6640</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “AT&amp;T switch from unlimited to non-unlimited plan 2026”</Action>
            <Paragraph>
                There's an important wrinkle that just became relevant. AT&amp;T literally relaunched all its plans last
                week (March 13), and the new lineup is Value 2.0 ($50/line), Extra 2.0 ($70/line), and Premium 2.0
                ($90/line) — all unlimited. AT&amp;T's current plan change tool only shows these unlimited options. There's
                no longer a non-unlimited tier being sold to new customers, which means the Passport add-on route is likely
                a dead end — you'd have nowhere to downgrade to.
            </Paragraph>
            <Paragraph>So your real options are:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Stay on AT&amp;T + Day Pass
                </Word> — the status quo, paying $12/day only when you actually use cellular. Since you have Magti for data,
                you could stay in airplane mode most of the time and only activate the day pass on days you actually need
                the US number on cellular.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Switch to T-Mobile
                </Word> — their 15GB international pass is $50 for 30 days, includes 15GB of high-speed data, unlimited
                texting and calling, and works in the same countries as the major carriers. You'd port your existing number
                over, keeping it. This is the cleanest full-coverage option.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The WiFi calling approach (cheapest)
                </Word> — stay on whatever minimal plan you're on, enable WiFi Calling on your iPhone, and your US number
                rings and texts over any WiFi connection. No roaming charges at all. This works well given you have home
                WiFi and Magti as a backup.
            </Paragraph>
            <Paragraph>
                Honestly, given you're in Tbilisi full-time and already have Magti, the WiFi calling route makes the most
                financial sense unless you specifically need reliable US cellular in spots without WiFi. What's your actual
                usage pattern — do you regularly need the US number somewhere without WiFi access?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:14:10.623505Z"
        >
            <Origin>019d0560-02af-7d31-81fd-dc530676d239</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I need the US number when people message me on my US number</Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:14:21.466049Z"
        >
            <Origin>019d0560-02af-71ed-ab05-099934718a82</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's exactly what WiFi calling handles. When you enable it on your iPhone, your US number receives calls
                and texts over WiFi just as if you were in the US — no cellular needed, no roaming charges. Anyone texting
                or calling your US number reaches you normally.
            </Paragraph>
            <Paragraph>
                The setup is: <Word>
                    <Bold />
                    Settings → Phone → Wi-Fi Calling → toggle on.
                </Word> That's it.
            </Paragraph>
            <Paragraph>The only edge cases where this breaks down:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    You're away from WiFi and need to receive a call or text on cellular (Magti won't carry your US number,
                    obviously)
                </Line>
                <Line>
                    Some carriers charge for WiFi calling internationally — worth checking your AT&amp;T plan's fine print,
                    but most postpaid plans include it free
                </Line>
            </Paragraph>
            <Paragraph>
                If you're mostly home or in cafes with WiFi, this covers essentially all your use cases without any add-on
                or plan change. You'd only need the Day Pass on days you're somewhere without WiFi and expecting important
                US calls or texts.
            </Paragraph>
            <Paragraph>
                So before doing anything else — try enabling WiFi calling tonight and see if it solves the problem as-is,
                before switching carriers or buying add-ons.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:14:44.994255Z"
        >
            <Origin>019d0560-8902-7b97-8f9d-5836630aedbb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do I do the Wi-Fi going?</Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:14:51.399372Z"
        >
            <Origin>019d0560-8902-7be0-8784-3d0865dd648b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>On your iPhone:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Settings
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Phone
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wi-Fi Calling
                    </Word>
                </Line>
                <Line>
                    Toggle on <Word>
                        <Bold />
                        Wi-Fi Calling on This iPhone
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                It'll ask you to confirm or enter a US emergency address (just use your US mail forwarding address). That's
                a one-time setup step AT&amp;T requires.
            </Paragraph>
            <Paragraph>
                After that, you'll see a small "AT&amp;T Wi-Fi" indicator in your status bar when it's active over WiFi.
                Calls and texts to your US number just work normally.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:16:11.324538Z"
        >
            <Origin>019d0561-df5d-704a-a924-dda2a7493dc1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have wifi calling enables on my US line and I have magti for cellular and I don’t have it switched to US
                so I don’t really understand why I’m being billed the $12 a day
            </Paragraph>
            <Attachment>Uploaded “IMG_3046.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-19T09:16:21.855688Z"
        >
            <Origin>019d0561-df5d-748a-94eb-d86cb31b37b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Your AT&amp;T SIM is still active and connected to a Georgian network in the background. Even without you
                deliberately using it, background app activity — push notifications, iMessage sync, etc. — is enough to
                trigger the $12 day pass automatically.
            </Paragraph>
            <Paragraph>
                The fix is to turn off <Word>
                    <Bold />
                    Data Roaming
                </Word> specifically for the AT&amp;T line:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Settings → Cellular → tap your AT&amp;T line → Data Roaming → toggle OFF
                </Word>
            </Paragraph>
            <Paragraph>
                That stops the AT&amp;T SIM from using any cellular data abroad, so it can never trigger the day pass. WiFi
                Calling still works independently over WiFi regardless, so your US number stays reachable. Magti handles all
                your cellular data as usual.
            </Paragraph>
            <Paragraph>
                Essentially: AT&amp;T SIM = voice/WiFi calling only, no cellular data. Magti = all cellular data. That
                combination costs you nothing extra.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-19T09:18:00.054193Z"
        >
            <Origin>019d0563-865b-71c0-9059-570661412621</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Roaming is not an option. I have it look like this and if I click the US number, I can turn it off, but it
                has Wi-Fi on it. I assume Wi-Fi won’t work if I turn it off.
            </Paragraph>
            <Attachment>Uploaded “IMG_3047.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-19T09:18:28.650742Z"
        >
            <Origin>019d0563-865b-7d1a-9d1d-24e54c0ce43e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good news — cellular data is already correctly set to MAGTICOM, so the AT&amp;T SIM isn't using cellular
                data. Don't turn off the USA SIM — that would kill WiFi calling.
            </Paragraph>
            <Paragraph>
                The $12 charge is likely triggering because AT&amp;T auto-activates the day pass the moment the SIM
                registers on a Georgian network at all, even just to receive a text or signal presence. The fix isn't on the
                phone — it's in your AT&amp;T account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Go to att.com or the myAT&amp;T app → Add-ons → International Day Pass → turn it OFF.
                </Word>
            </Paragraph>
            <Paragraph>
                This opts your line out of the day pass entirely. Without it enabled, AT&amp;T can't charge you $12/day —
                the SIM stays on for WiFi calling, but there's no day pass to auto-trigger. The fallback would be
                pay-per-use rates if you ever did use AT&amp;T cellular, but since MAGTICOM handles all your data and WiFi
                handles your US number, you'd essentially never hit those.
            </Paragraph>
        </Message>
    </Chapter>
);
