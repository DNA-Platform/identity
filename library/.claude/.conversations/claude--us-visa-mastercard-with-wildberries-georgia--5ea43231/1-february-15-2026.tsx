import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Title>[[ 15 February 2026 ]]</Title>
        <Message
            at="2026-02-15T10:34:17.601230Z"
        >
            <Origin>019c60dd-84db-723e-b304-bc458c9a35bd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Will my us visa mastercard work with wildberries in country of georgia. Use web for strong research
            </Paragraph>
        </Message>
        <Message
            at="2026-02-15T10:35:15.245212Z"
        >
            <Origin>019c60dd-84dc-72c0-8d04-e2622d676a3b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Wildberries Georgia payment Visa Mastercard foreign card”</Action>
            <Action>Searched the web for “Wildberries Georgia country payment methods 2024 2025”</Action>
            <Action>Searched the web for “Wildberries.ge payment methods foreign card US card”</Action>
            <Action>Searched the web for “wildberries.ge оплата способы оплаты Грузия”</Action>
            <Action>
                Searched the web for “"wildberries" Georgia pay "Georgian card" OR "foreign card" OR "international card"
                2025”
            </Action>
            <Action>Searched the web for “wildberries.ge payment upon receipt card Georgia how to pay”</Action>
            <Action>
                Searched the web for “US sanctions Wildberries payment American card sanctions Russia marketplace”
            </Action>
            <Paragraph>
                Here's what I've found, Doug — the short answer is <Word>
                    <Bold />
                    it's very unlikely to work, and there are sanctions-related risks to consider
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How Wildberries Georgia operates:
                </Word> Wildberries started operating in Georgia in October 2024, running through a local franchise entity
                rather than directly as the Russian parent company. In Georgia, the number of pickup points has doubled
                since late 2024, and they now have 90+ locations across Tbilisi, Batumi, Kutaisi, and other cities.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Payment processing — the core problem:
                </Word>
            </Paragraph>
            <Paragraph>
                Wildberries processes payments through its own <Word>
                    <Bold />
                    Wildberries Bank
                </Word>, which is a Russian-incorporated entity (formerly Standard Credit Bank). Even though the Georgian
                operation runs via a local franchise, the payment infrastructure ties back to Russian banking systems. There
                are several layers of issues:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Visa/Mastercard suspended Russian operations in March 2022.
                    </Word> Visa and Mastercard announced that they were voluntarily suspending all operations in Russia.
                    This means transactions routed through Russian payment processors won't clear through Visa/Mastercard
                    networks internationally.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wildberries has its own troubled history with Visa/Mastercard.
                    </Word> The company has repeatedly clashed with both networks, at one point charging a 3% surcharge on
                    Visa/MC transactions even within Russia, and now heavily pushes its own WB Wallet and Russian domestic
                    systems (Mir, SBP, SberPay).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Georgian payment upon receipt model.
                    </Word> From user reports in Russian-language forums, the primary payment method in Georgia appears to
                    be "payment upon receipt" at pickup points using a linked bank card. Users have been linking
                    Russian-issued bank cards. There's no clear evidence that foreign-issued international cards (especially
                    US-issued) are supported.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Sanctions risk for you specifically:
                </Word>
            </Paragraph>
            <Paragraph>
                Even if the transaction somehow went through technically, using a US-issued card to transact with a Russian
                marketplace entity raises OFAC compliance concerns. In April 2022, Kim and Wildberries were added to
                Poland's sanctions list, and while Wildberries isn't currently on the US SDN list specifically, the payment
                flow through Russian banking infrastructure could trigger your US bank's sanctions compliance filters and
                potentially block or flag the transaction.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line:
                </Word> Your US Visa/Mastercard almost certainly won't work with Wildberries in Georgia — the payment
                processing infrastructure either won't accept it technically, or your US bank will likely block it as a
                Russia-connected transaction. If you need to order from Wildberries in Georgia, you'd likely need a
                Georgian-issued bank card or possibly a card from another CIS country. Given the sanctions landscape, I'd
                also suggest considering whether using the platform at all creates any compliance exposure for you as a US
                person.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-15T10:38:36.669090Z"
        >
            <Origin>019c60e1-774d-71de-b269-1310123bec81</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so what payment options do we expect to work? I would imagine payment upon receipt would only work if
                you can prove to them you have valid payment because why would they take the time to ship to you otherwise?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-15T10:39:16.550732Z"
        >
            <Origin>019c60e1-774d-7b8c-a6b2-dc43d47efd32</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good question — let me dig into this more specifically.</Paragraph>
            <Action>Searched the web for “wildberries Грузия способы оплаты грузинская карта кошелек 2025”</Action>
            <Paragraph>
                You're exactly right about the "payment upon receipt" model. Let me clarify what that actually means in
                Wildberries' system and then get to practical options.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How "payment upon receipt" actually works on WB:
                </Word>
            </Paragraph>
            <Paragraph>
                It's not truly "pay when you get there" in a cash-at-the-door sense. Users select the "pay on site" option
                and the order is accepted for processing, but you still need a card linked to your account. When you pick up
                at the ПВЗ (pickup point), the payment is made from the buyer's bank card, which the user must link in
                advance in their personal account. So it's essentially a deferred card charge — the linked card is your
                guarantee, and they auto-charge it at pickup. You're right that they wouldn't ship cross-border from Russia
                on pure faith.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What payment methods actually exist on Wildberries:
                </Word>
            </Paragraph>
            <Paragraph>
                The Russian platform supports Mir cards, SBP (Russia's fast payment system), SberPay, and WB Wallet. The WB
                Wallet is an online wallet that requires verification through Gosuslugi (Russia's government services
                portal) — obviously a non-starter for you. Even for Russian users, since February 2024 there have been
                problems linking Mastercard cards, with periods where only Mir, SBP, SberPay, and WB Wallet worked.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What would realistically work for you in Georgia:
                </Word>
            </Paragraph>
            <Paragraph>
                The most plausible path is a <Word>
                    <Bold />
                    Georgian-issued bank card
                </Word> from TBC Bank or Bank of Georgia. These are locally-issued Visa/Mastercard cards, but the
                transaction would process through Georgian banking infrastructure rather than routing through your US bank.
                The Georgian franchise entity presumably has a local acquiring bank relationship for the Georgian market
                specifically. The card would be "international" by network but "local" by issuer.
            </Paragraph>
            <Paragraph>
                However, there's a <Word>
                    <Bold />
                    second barrier
                </Word> beyond payment: orders can currently only be placed by Georgian citizens or those with a residence
                permit (ВНЖ). You need to enter a name and surname through the Georgian site (wildberries.ge), and
                registration requires Georgian residency documentation.
            </Paragraph>
            <Paragraph>
                So the practical calculus is: even if you solve the payment problem with a Georgian bank card, you'd need
                either Ana's Georgian residency status or someone local with proper documentation to place the order. This
                is essentially a two-gate problem — identity verification AND payment method — and a US card fails on the
                payment side while US citizenship without Georgian ВНЖ fails on the identity side.
            </Paragraph>
            <Paragraph>
                Is there something specific you're trying to order? There might be a simpler alternative channel to get it
                in Georgia.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-15T10:42:15.310940Z"
        >
            <Origin>019c60e4-ce3e-7abd-a276-4458e45547bc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is this a way russia can use to figure out which of their citizens is in which country?? I assumed that they
                don’t let WB operate a completely independent bank from the central government
            </Paragraph>
        </Message>
        <Message
            at="2026-02-15T10:42:57.456799Z"
        >
            <Origin>019c60e4-ce3e-74ff-8c09-2d2e1938dd14</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That's a really sharp observation. Let me dig into the structural pieces.</Paragraph>
            <Action>Searched the web for “Wildberries Bank Central Bank Russia supervision data requirements”</Action>
            <Action>
                Searched the web for “Russia Rosfinmonitoring data requirements banks customer information FSB access”
            </Action>
            <Paragraph>
                You're asking exactly the right question, and the answer is essentially yes — the structural pieces are all
                there for this to function as a geolocation and identification tool for Russian citizens abroad.
            </Paragraph>
            <Paragraph>Here's the chain:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Wildberries Bank is fully under Russian state supervision.
                </Word> Wildberries Bank (formerly Standard Credit Bank, OGRN 1020100002340) is a Russian-licensed LLC
                regulated by the Central Bank of Russia. There is no such thing as a Russian-licensed bank operating
                independently of the state apparatus.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Rosfinmonitoring reports directly to Putin.
                </Word> Rosfinmonitoring has been a separate federal service since 2007, and since 2012 financial
                intelligence of Russia reports directly to the President of the Russian Federation. It coordinates with the
                FSB, Ministry of Internal Affairs, and Prosecutor General's Office.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russian banks must share customer data with security services.
                </Word> Rosfinmonitoring works with state government agencies, such as the Federal Security Service (FSB),
                the Ministry of Internal Affairs, and the Prosecutor General's Office, in order to exchange information and
                provide support to investigations. All financial institutions must maintain customer identification data and
                transaction records.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The FSB is actively expanding its access powers.
                </Word> A law was adopted by the State Duma allowing the FSB to obtain free and without a court order copies
                of the databases of any company operating in the country, coming into effect on April 1, 2026. And
                separately, the FSB has ordered banks to install surveillance equipment known as SORM (System for Operative
                Investigative Activities), which enables security services to intercept and analyze messages, voice
                recordings, videos and other user-generated content, with implementation required by 2027.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now apply this to the Georgia operation specifically.
                </Word> When a Russian citizen who fled to Georgia registers on wildberries.ge, the system captures: their
                phone number, their name, their delivery address (a specific pickup point in a specific Georgian city), what
                they're buying, and their payment method. Even though the Georgian franchise entity handles local logistics,
                the platform infrastructure, user accounts, and payment processing all flow through the Russian parent. The
                app itself is unified across all countries.
            </Paragraph>
            <Paragraph>
                So the data pipeline looks like: Russian citizen registers → Wildberries (Russian entity) holds the account
                data → Wildberries Bank processes financial data → CBR and Rosfinmonitoring have supervisory access → FSB
                has (or will have by April 2026) unrestricted database access without court order.
            </Paragraph>
            <Paragraph>
                The particularly clever part is that this doesn't even require active surveillance. Wildberries even
                requires new sellers to open accounts at Wildberries Bank for "vetting" purposes, since the bank "has access
                to databases for more careful verification" — they're openly acknowledging the bank serves as an identity
                verification layer connected to Russian state databases.
            </Paragraph>
            <Paragraph>
                Whether this is <Word>
                    <Emphasis />
                    intentional
                </Word> intelligence infrastructure or just a convenient byproduct of Russian corporate structure is an open
                question. But the <Word>
                    <Emphasis />
                    effect
                </Word> is the same: Russia's largest e-commerce platform is now operating pickup points across Georgia,
                Kazakhstan, Kyrgyzstan, Armenia, and other countries that happen to be exactly where hundreds of thousands
                of Russians relocated after mobilization — and every transaction generates a data trail that flows back to
                entities under direct Kremlin oversight.
            </Paragraph>
            <Paragraph>
                Your instinct is right. The "independent bank" framing is functionally meaningless in the Russian regulatory
                context.
            </Paragraph>
        </Message>
    </Chapter>
);
