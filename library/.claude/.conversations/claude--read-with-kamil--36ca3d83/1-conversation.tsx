import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-10T15:40:58.658167Z"
        >
            <Origin>019c4836-8558-7508-a901-3148ba30a803</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay this is a Turkey question but if affects life in Georgia. I have received my ikam et for 2026 into Feb
                of 2027, but with the problem that they are trying to mail my card to a rental address where mail is not
                delivered to, and I don't think I will be in the country while that whole process carries out. I am in
                Alanya. Let's assume I don't get my new card. I have my old expired one. What do I have to print? What do I
                have to do to convince passport control that I have ikamet in the absence of my card?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T15:41:43.246915Z"
        >
            <Origin>019c4836-8558-7508-a901-314926e3b019</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Turkey ikamet card not received travel passport control e-ikamet printout 2025”
            </Action>
            <Action>
                Searched the web for “Turkey leave country approved ikamet card not received e-ikamet printout border exit”
            </Action>
            <Action>
                Searched the web for “e-ikamet approval PDF document print "müracaat belgesi" approved renewal passport
                control”
            </Action>
            <Paragraph>
                Good question, and your situation is actually better than you might think since you have an <Word>
                    <Bold />
                    approved
                </Word> renewal rather than a pending application. Here's what you need to do:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to print/download before you leave:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        The approval PDF from the e-ikamet system.
                    </Word> Log into https://e-ikamet.goc.gov.tr and navigate to your ongoing/completed application. When a
                    renewal is approved, the system generates a downloadable approval document. Print multiple copies. This
                    is your most important document.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The Müracaat Belgesi (Application Document).
                    </Word> This is available through the same portal — check under "Devam Eden Başvuru" (ongoing
                    application) at https://e-ikamet.goc.gov.tr/Ikamet/DevamEdenBasvuruGiris. Print this as well.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fee payment receipts.
                    </Word> Print proof that you've paid all residence permit fees. These, combined with the approval
                    document, are what border officials check.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Screenshots of your e-ikamet status page
                    </Word> showing the approved status and validity dates, just as belt-and-suspenders backup.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Carry with you:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>All of the above printouts</Line>
                <Line>Your old expired ikamet card</Line>
                <Line>Your passport</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The key legal distinction:
                </Word> The physical card is just the delivery format — your residence permit exists in the system once
                approved. Border control at Turkish airports can pull up your status electronically by passport number. The
                printouts are your backup proof in case of system issues or if you encounter an officer who wants to see
                paper.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Exiting Turkey
                </Word> should be frictionless — they scan your passport, see valid residence status, you're through.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Re-entering Turkey
                </Word> is where it matters more. With an approved permit (not merely pending), you should be able to
                re-enter on your passport and the approval document without the 15-day restriction that applies to pending
                applicants. The 15-day limit specifically applies to people traveling on the Müracaat Belgesi while their
                application is still under evaluation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical steps to take in Alanya before leaving:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Call <Word>
                        <Bold />
                        157 (YİMER)
                    </Word> and explain your specific situation — that the card is being mailed to an undeliverable address.
                    Ask them to either redirect delivery or confirm what you need at passport control. They operate in
                    multiple languages.
                </Line>
                <Line>
                    Visit or contact the <Word>
                        <Bold />
                        Antalya Provincial Directorate of Migration Management
                    </Word> (Alanya falls under Antalya province) and ask them to note the delivery problem. They may be
                    able to update the delivery address or issue you a stamped document confirming approval.
                </Line>
                <Line>
                    Consider having someone you trust in Alanya check for the PTT delivery attempt, since PTT leaves a
                    notification slip and the card can be picked up at the local PTT branch with your passport (which
                    obviously you'd have with you — but a power of attorney holder might be able to collect it).
                </Line>
            </Paragraph>
            <Paragraph>
                The worst-case scenario at passport control is a brief delay while they verify in the system, but you should
                not be denied entry with a valid approved permit on record plus printed documentation.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T15:47:50.835765Z"
        >
            <Origin>019c483c-ced5-72a2-8f64-2ab528d0aa57</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                They can't even get through the gate at my apartment. There is zero mail system. I don't know how Turkey
                functions. My landlord probably has an address that I can use to reroute it if you feel that is possible
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T15:48:12.662613Z"
        >
            <Origin>019c483c-ced5-72a2-8f64-2ab6bc207353</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Turkey PTT ikamet card delivery change address redirect reroute”</Action>
            <Paragraph>Yeah, welcome to Turkey's mail infrastructure. Here's the reality:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The address problem is tricky but not unsolvable.
                </Word> The card gets sent to whatever address you put on your e-ikamet application form — it's tied to that
                specific address in the system. You can't just call PTT and reroute it like a FedEx package.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your practical options:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Visit the Göç İdaresi (Migration Office) in Alanya before you leave.
                </Word> Explain the delivery situation in person. Ask them to update the delivery address in the system to
                your landlord's address. This is your best shot at a clean fix — if they update the address in the migration
                system, PTT will deliver to the new one. Bring your landlord's full address formatted correctly (mahalle,
                sokak, building number, apartment number, ilçe, province).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. When PTT fails delivery, the card goes to the local PTT branch.
                </Word> After the courier can't deliver, you'll get an SMS (if you have a Turkish number) and the card sits
                at the local PTT office for pickup. Someone with a notarized power of attorney (vekalet) and your passport
                copy <Word>
                    <Emphasis />
                    may
                </Word> be able to collect it — but this is inconsistent in practice. Your landlord would need a notarized
                vekalet from a noter.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Call 157 right now
                </Word> and explain the situation. Ask specifically whether the delivery address can be changed
                post-approval. They handle this in English.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But the bigger point stands from my first response:
                </Word> even if the card sits uncollected at a PTT branch indefinitely, your approved permit is in the
                system. Print your approval PDF, carry your fee receipts and old card, and you can exit and re-enter Turkey
                on your passport. The card is a convenience, not a prerequisite for border crossing once the permit is
                approved and recorded electronically.
            </Paragraph>
            <Paragraph>
                The most efficient use of your remaining time in Alanya is a trip to the Göç İdaresi to request the address
                change, and if that fails, getting a vekalet notarized at a noter authorizing your landlord to collect the
                card from PTT on your behalf.
            </Paragraph>
        </Message>
    </Chapter>
);
