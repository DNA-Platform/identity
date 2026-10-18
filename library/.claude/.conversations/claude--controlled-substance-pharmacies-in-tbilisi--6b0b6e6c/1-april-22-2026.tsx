import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 April 2026](2026-04-22)</Date>
        </Dated>
        <Title>[[ 22 April 2026 ]]</Title>
        <Message
            at="2026-04-22T08:38:36.651056Z"
        >
            <Origin>019db458-2690-7604-9eb3-3e45356fe035</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In tbilisi, there are pharmacies that can give you controlled substances like ativan and lorazepam and ones
                they can’t. First of all, can you check in Georgian sites if when a psychiatrist associates a prescription
                with your passport if it works in any of these pharmacies, where did they call it into a specific one? I
                don’t think so but check. And then how do I identify the pharmacies that I can use and if there’s no way to
                just find them on Google maps can you do a search near the saburtalo region?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-22T08:41:59.218903Z"
        >
            <Origin>019db458-2690-76e3-9f6a-06889b8fc9ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Tbilisi pharmacy controlled substances prescription lorazepam psychiatrist”
            </Action>
            <Action>Searched the web for “საქართველო აფთიაქი ფსიქოტროპული რეცეპტი ფორმა 3”</Action>
            <Action>Searched the web for “ლორაზეპამი ფორმა რეცეპტი საქართველო აფთიაქი”</Action>
            <Action>Searched the web for “"ფორმა N2" რეცეპტი აფთიაქი საქართველო გაცემა”</Action>
            <Action>Fetched https://www.yell.ge/companies.php?lan=geo&amp;rub=3497</Action>
            <Action>
                Fetched
                https://1020.ge/category/%E1%83%90%E1%83%A4%E1%83%97%E1%83%98%E1%83%90%E1%83%A5%E1%83%94%E1%83%91%E1%83%98,-%E1%83%A4%E1%83%A1%E1%83%98%E1%83%A5%E1%83%9D%E1%83%A2%E1%83%A0%E1%83%9D%E1%83%9E%E1%83%A3%E1%83%9A%E1%83%98
            </Action>
            <Action>Fetched https://www.yp.com.ge/ka/organizations?filter_tag%5B0%5D=2146</Action>
            <Action>Searched places for “”</Action>
            <Action>Searched the web for “"ფორმა N2" რეცეპტი ელექტრონული 2022 ნებისმიერ აფთიაქში”</Action>
            <Paragraph>
                Your intuition is right. Since March 2022 for Form N3, and since April 2024 for Form N2, prescriptions for
                controlled substances in Georgia are electronic only — paper forms are no longer issued and prescriptions
                are created exclusively in electronic form. The psychiatrist enters it into the central Ministry of Health
                system (prescription.moh.gov.ge) tied to your passport/ID, and any licensed pharmacy pulls it up when you
                arrive. Nothing is called into a specific pharmacy. The Ministry has explicitly confirmed that a patient can
                visit various pharmacies at different times, in any region of Georgia, and buy the medication at whichever
                pharmacy they need.
            </Paragraph>
            <Paragraph>
                One important classification note: <Word>
                    <Bold />
                    lorazepam/Ativan is Group I, dispensed on Form N2
                </Word> — not the more common Form N3 used for most benzos. Aversi lists lorazepam 2mg as "Group I, issued
                with Form №2 prescription". Group I is the stricter tier (alongside narcotics), and fewer pharmacies are
                licensed to dispense it than Form N3. Worth confirming with the psychiatrist that they can actually issue
                Form N2 — not every prescriber has that authorization.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Finding the pharmacies:
                </Word>
            </Paragraph>
            <Paragraph>
                Google Maps has no "psychotropic license" tag, so you can't filter for it there. Three practical paths:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Yellow Pages Georgia
                    </Word> (yp.com.ge) has a dedicated "აფთიაქები - ფსიქოტროპული" category. In Saburtalo specifically, two
                    are listed:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Bold />
                            Pharmaguide #5
                        </Word> — Vazha-Pshavela Ave 6, ☎ 238 76 46
                    </Line>
                    <Line>
                        <Word>
                            <Bold />
                            Pharmaton
                        </Word> — Vazha-Pshavela Ave 27, ☎ 237 38 81
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Call the chain hotlines.
                    </Word> PSP (☎ 240 20 20) and Aversi (☎ 250 66 77) can tell you which of their Saburtalo branches hold
                    Form N2 authorization — several do, they just don't advertise it. The 24-hour Aversi at Tsintsadze 2-4
                    and the PSP at Vazha-Pshavela Quarter VII are worth asking about first given proximity.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ask the psychiatrist directly.
                    </Word> They know from experience which nearby pharmacies have reliably filled their Form N2 scripts.
                    This is the highest-signal route.
                </Line>
            </Paragraph>
            <Paragraph>
                One more thing worth knowing: new rules took effect April 1, 2026 limiting adult psychotropic prescriptions
                to no more than 14 days' supply, and a new prescription is only allowed if no more than 5 days of medication
                remain. So plan refills accordingly.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-22T08:43:58.359471Z"
        >
            <Origin>019db45d-123f-7129-bf74-9b6874fd8182</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes I know the 14. Lorazepam is different than alprazolam? Can you search for a fee pharmacies
            </Paragraph>
        </Message>
        <Message
            at="2026-04-22T08:44:54.844614Z"
        >
            <Origin>019db45d-1240-70ea-96b6-57e4e1f4a434</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “ალპრაზოლამი ჯგუფი ფორმა რეცეპტი საქართველო აფთიაქი”</Action>
            <Paragraph>
                Same classification — both Group I, Form N2. Aversi-Rational's alprazolam product (Sedaloni) lists
                dispensing condition as "Group I pharmaceutical product (issued with Form 2 prescription)", identical to
                lorazepam. For your purposes they're interchangeable in terms of which pharmacies can fill them and what
                paperwork flows.
            </Paragraph>
            <Paragraph>Let me pull more Saburtalo options.</Paragraph>
            <Action>Searched places for “”</Action>
            <Paragraph>Here are the better candidates to try, mapped across Saburtalo:</Paragraph>
            <Action>Used places map display v0</Action>
            <Paragraph>
                Only Pharmaguide and Pharmaton are actually confirmed on the Yellow Pages "psychotropic" list — the other
                four are strong candidates (big chain, 24h, near Aversi Clinic) but need a phone call to verify N2
                capability before you walk over. Script for the call: <Word>
                    <Emphasis />
                    "ფორმა N2 რეცეპტით გაცემის უფლება გაქვთ?"
                </Word> (<Word>
                    <Emphasis />
                    "Are you authorized to dispense on Form N2 prescription?"
                </Word>).
            </Paragraph>
        </Message>
    </Chapter>
);
