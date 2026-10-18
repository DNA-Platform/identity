import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Title>[[ 23 March 2026 ]]</Title>
        <Message
            at="2026-03-23T10:27:10.025979Z"
        >
            <Origin>019d1a3c-5873-71fb-a86e-8da4f4063f74</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I need to find a bank branch in saburtalo georgia near central park where Ana and I can open up accounts and
                get cards but we aren’t residents yet. They will need to work with our passports. Do a search online,
                especially in Georgian to find a bank that will do this. I’m sure some help foreigners more regularly than
                others.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-23T10:28:13.459229Z"
        >
            <Origin>019d1a3c-5873-75c5-a39c-17dec2dec4d0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “банк Тбилиси открыть счет иностранцу без вида на жительство только паспорт 2025”
            </Action>
            <Action>Searched the web for “Credo Bank expat branch Tbilisi Saburtalo address 2025”</Action>
            <Action>Searched places for “”</Action>
            <Action>Used places map display v0</Action>
            <Paragraph>
                The answer here is unambiguous: <Word>
                    <Bold />
                    Credo Bank
                </Word> is the go-to for non-residents in Tbilisi, and crucially, they've built two dedicated <Word>
                    <Bold />
                    Expat Branches
                </Word> specifically for this. Here's the full picture:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why Credo Bank
                </Word>
            </Paragraph>
            <Paragraph>
                Credo Bank has dedicated Expat Service Centers with banking products specifically designed for foreign
                citizens living in Georgia. To open an account, you only need a passport and a Georgian SIM card — the
                account opens within roughly 2 days, with staff who speak Russian and English. It's the most
                foreigner-friendly option and has documented cases of accounts being opened with passport only.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your nearest Expat Branch: 16 Ilia Chavchavadze Avenue
                </Word>
            </Paragraph>
            <Paragraph>
                This is the purpose-built expat location, about a 10-minute walk from Central Park. The Tamarashvili 17
                branch in Saburtalo proper is physically closer to home but is a standard branch — you want the dedicated
                expat branch for a smoother experience, especially given the crutch situation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to bring
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Both passports (foreign)</Line>
                <Line>
                    Georgian SIM cards (mandatory for account registration — get these before you go if you haven't)
                </Line>
                <Line>Your address in Tbilisi (rental agreement or even just the address is fine)</Line>
                <Line>Documentation of income source (bank statement, contracts — for the KYC form)</Line>
                <Line>45 GEL for the annual Expat Package</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Critical fee to know
                </Word>
            </Paragraph>
            <Paragraph>
                As of May 2025, Credo introduced a 30 GEL/month "Cross-Border Fee" that applies if you haven't made any card
                transactions within Georgia for 3 consecutive months. Since you'll be living there and using the cards
                locally, this won't be an issue — but it's worth knowing if you open an account and then leave for an
                extended period.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Hours:
                </Word> Mon–Fri 10:00–17:30 | Sat 10:15–12:15 | Closed Sunday
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phone:
                </Word> +995 32 242 42 42
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Email to pre-register (optional):
                </Word> account@credo.ge — you can submit a filled KYC Excel file with passport scans to start the process
                before visiting in person.
            </Paragraph>
            <Paragraph>
                One watch-out from reviews: some staff have been known to push unnecessary add-ons like card insurance or
                business account packages. None of those are required — the core Expat Package at 45 GEL/year covers what
                you need. Just decline anything extra confidently.
            </Paragraph>
            <Paragraph>
                Also worth noting: you already have Ziraat Bank Georgia flagged in your notes as a passport-only option for
                a GEL debit card. Credo is the stronger all-around choice (multicurrency IBAN, better app, expat
                infrastructure), but Ziraat remains a valid backup if there are any unexpected issues.
            </Paragraph>
        </Message>
    </Chapter>
);
