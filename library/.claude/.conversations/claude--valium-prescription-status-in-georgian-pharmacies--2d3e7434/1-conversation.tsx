import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-08T12:48:15.441369Z"
        >
            <Origin>019e07a1-788f-7278-852c-0a42e23b3f3a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does valium have the same prescription status as lorazepam or alprazolam in georgian pharmacies
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:50:07.974564Z"
        >
            <Origin>019e07a1-788f-7faa-a550-fbb4cac6f4cf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia pharmacy prescription status diazepam valium lorazepam alprazolam”
            </Action>
            <Paragraph>Search returned US-state Georgia results. Let me refine for the country of Georgia.</Paragraph>
            <Action>
                Searched the web for “Georgia country benzodiazepine prescription rules pharmacy diazepam alprazolam”
            </Action>
            <Paragraph>Let me search for the country of Georgia's specific drug control list.</Paragraph>
            <Action>
                Searched the web for “Georgia Tbilisi controlled substances list benzodiazepines "Form 3" prescription”
            </Action>
            <Paragraph>
                Let me search using Russian terms since Georgian regulations are often better-indexed in Russian sources.
            </Paragraph>
            <Action>Searched the web for “Грузия аптека рецепт диазепам алпразолам лоразепам особый контроль”</Action>
            <Action>
                Searched the web for “"Georgia" "matsne" psychotropic substances list diazepam "subject-to-control"”
            </Action>
            <Action>
                Searched the web for “Georgia Tbilisi pharmacy "form 3" prescription benzodiazepine special prescription
                form”
            </Action>
            <Action>
                Searched the web for “Georgia "List III" psychotropic substances diazepam alprazolam lorazepam Tbilisi”
            </Action>
            <Paragraph>Let me fetch the Georgian customs document on permitted/prohibited drugs.</Paragraph>
            <Action>
                Fetched https://www.rs.ge/Media/Default/Images/CustomsBrochures/Prohibited%20and%20Permitted%20Medicines.pdf
            </Action>
            <Paragraph>
                Critical finding — alprazolam is explicitly named on Georgia's "subject to special control" list, while
                diazepam and lorazepam are not in that named list. Let me verify by searching for the actual Decree 22/n.
            </Paragraph>
            <Action>
                Searched the web for “"Decree 22" Georgia Minister Health "subject to special control" diazepam list”
            </Action>
            <Action>Searched the web for “Tbilisi pharmacy diazepam buy prescription experience expat”</Action>
            <Paragraph>
                Short answer: <Word>
                    <Bold />
                    No, they don't appear to share the same status.
                </Word> Alprazolam is explicitly named on Georgia's "subject to special control" list, while diazepam and
                lorazepam are not.
            </Paragraph>
            <Paragraph>
                The Georgian Revenue Service's official customs brochure on prohibited and permitted medications names
                methadone, methylphenidate, methamphetamine, pregabalin, tianeptine, tramadol, fentanyl, tilidine,
                alprazolam, &#91;and&#93; flunitraze&#91;pam&#93; as substances subject to special control that cannot be
                imported without medical documentation. Diazepam (Valium) and lorazepam are not on that named list. The
                brochure references the underlying instrument: Decree No. 22/n of 22 January 2004 of the Minister of Labor,
                Health and Social Affairs of Georgia on the approval of the list on medicaments subject to special control.
            </Paragraph>
            <Paragraph>
                The legal framework: Georgia's Law on Medicines splits pharmaceutical products into three groups for retail
                sales — the first group includes pharmaceutical products subject to special control; the second group
                includes prescription-only products; the third group includes products that may be sold without a
                prescription. Group 1 drugs in Georgia generally require a special (numbered/registered) prescription form
                and stricter dispensing controls than ordinary Rx (Group 2).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Confidence and caveats:
                </Word> I'm reasonably confident alprazolam sits in Group 1 based on the customs document and the underlying
                Decree 22/n citation. I have <Word>
                    <Emphasis />
                    not
                </Word> directly verified the current full text of Decree 22/n on matsne.gov.ge (the listings have been
                amended multiple times), so I cannot tell you definitively which prescription form is required at the
                pharmacy counter or whether diazepam/lorazepam are formally Group 2 versus some other category. Real-world
                pharmacy practice in Georgia is also notoriously inconsistent — what's <Word>
                    <Emphasis />
                    legally
                </Word> required and what an Aversi or PSP cashier <Word>
                    <Emphasis />
                    actually
                </Word> asks for can diverge.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To verify:
                </Word> (1) Pull the current Georgian-language text of Decree 22/n from matsne.gov.ge for the authoritative
                current list; (2) ask directly at an Aversi or PSP pharmacy — they'll tell you immediately what form of
                prescription each requires; (3) if it matters for clinical planning, ask at AMC.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:50:36.690310Z"
        >
            <Origin>019e07a3-9fa2-7de3-918b-bef57785cf85</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Lorazepam absolutely is on that list. In fact I think it’s even more controlled so I need you to search in
                George or whatever and find the list of substances you’ve done it before and tell me if Valium is on that
                list and remember it’s generic name.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:51:31.022373Z"
        >
            <Origin>019e07a3-9fa2-77e7-a8b0-c860079e9f91</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to push back — that customs brochure was a partial named list, not the actual Decree. Let me
                find the source.
            </Paragraph>
            <Action>Searched the web for “"22/ნ" დანართი სია ფსიქოტროპული დიაზეპამი ლორაზეპამი”</Action>
            <Action>Fetched https://mfa.gov.ge/pfiles/files/wamlebi-sia.pdf</Action>
            <Paragraph>
                You're right, I was wrong. I anchored too heavily on the customs brochure's named examples instead of
                pulling the actual list. Found the authoritative source — Annex №1 to the Law of Georgia on Narcotic Drugs,
                Psychotropic Substances, Precursors, and Narcological Assistance, hosted at mfa.gov.ge.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    All three are on the same list — List III (psychotropic substances / ფსიქოტროპული ნივთიერებები):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>ალპრაზოლამი / ALPRAZOLAM — entry #2</Line>
                <Line>დიაზეპამი / DIAZEPAM — entry #11 (this is Valium's generic; noted)</Line>
                <Line>ლორაზეპამი / LORAZEPAM — entry #30</Line>
            </Paragraph>
            <Paragraph>
                So legally, they share the same classification and the same dispensing regime under Georgian law. None of
                the three is on List I or List II (which is where the more restricted substances sit — flunitrazepam,
                tramadol, tilidine, methylphenidate, morphine, fentanyl, codeine, etc., are in List II; the most restricted
                Schedule-I-equivalent substances are in List I).
            </Paragraph>
            <Paragraph>
                Your intuition that lorazepam might be "even more controlled" doesn't bear out at the legal-classification
                level — the statute treats all List III items uniformly. If there's a real-world difference in how PSP or
                Aversi handles them at the counter (stocking, willingness to dispense without strict paperwork, etc.), that
                would be a pharmacy-practice phenomenon, not a legal-status one.
            </Paragraph>
            <Paragraph>
                Caveat: I pulled the version posted at mfa.gov.ge (Ministry of Foreign Affairs). The list has been amended
                periodically (visible amendment markers in the text run through 2014–2015 in this copy). For the absolutely
                current version, matsne.gov.ge is authoritative — worth a check before relying on this for anything
                consequential.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:52:50.905693Z"
        >
            <Origin>019e07a5-a983-78e4-bd00-93cf4e84c491</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So how does Adderall compared to lorazepam in terms of this list? What are they classified as and is it
                similar to US?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:53:23.648973Z"
        >
            <Origin>019e07a5-a983-72ef-b5a6-b195ff4355ff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Adderall sits one rung <Word>
                    <Bold />
                    higher
                </Word> on Georgia's list than lorazepam — same relative ordering as the US.
            </Paragraph>
            <Paragraph>From the same Annex №1:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        List II
                    </Word> (ბრუნვისათვის შეზღუდული ნარკოტიკული საშუალებები / "narcotic drugs restricted for circulation")
                    contains AMFETAMINE (amphetamine) at entry #7 and DEXAMFETAMINE (dexamphetamine) at entry #14 — these
                    are Adderall's two active ingredients. Methylphenidate (Ritalin/Concerta) is also in List II at entry
                    #41.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        List III
                    </Word> is where lorazepam, diazepam, and alprazolam sit (psychotropic substances).
                </Line>
            </Paragraph>
            <Paragraph>
                So under Georgian law, Adderall components are more strictly controlled than lorazepam — List II &gt; List
                III. List II keeps company with morphine, oxycodone, fentanyl, methadone, cocaine, codeine, tramadol, the
                barbiturates, and flunitrazepam. List III is the benzodiazepine bucket plus zolpidem, ketamine, pregabalin,
                tianeptine, phenobarbital, and phenazepam.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    US comparison:
                </Word> Yes, the relative ordering is the same:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Adderall: Georgia List II ↔ US Schedule II</Line>
                <Line>Lorazepam: Georgia List III ↔ US Schedule IV</Line>
            </Paragraph>
            <Paragraph>
                The structural difference is that Georgia uses four lists with a narcotic/psychotropic split inherited from
                the UN conventions (1961 Single Convention → Lists I &amp; II as "narcotic drugs"; 1971 Psychotropic
                Convention → List III), while the US DEA uses one unified five-tier schedule (I–V) without that
                narcotic/psychotropic distinction. So Georgia's List I and II together roughly map to US Schedule I+II, and
                List III roughly maps to US Schedules III–IV.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical caveat (not legal advice):
                </Word> Even if your US Adderall prescription is current and documented, importing it requires the
                apostilled-prescription documentation chain in the rs.ge customs brochure (List II substances trigger the
                strictest import paperwork). Locally prescribed amphetamine stimulants are reportedly very hard to obtain in
                Georgia — ADHD stimulant treatment isn't a well-established pathway here. Worth raising directly with AMC if
                it's a clinical need for anyone in the family.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:54:13.366184Z"
        >
            <Origin>019e07a6-eef7-74e8-a007-ce5e98e0449a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is list I? Sounds like they might be the unprescribed ones?</Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:54:49.807247Z"
        >
            <Origin>019e07a6-eef7-76a9-9ea3-1d22732ead2d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Roughly, yes — List I is the "no accepted medical use" tier. The Georgian title is "ბრუნვისათვის მკაცრად
                შეზღუდული ნარკოტიკული საშუალებები" — narcotic drugs <Word>
                    <Bold />
                    strictly
                </Word> restricted for circulation. Maps closely to US Schedule I.
            </Paragraph>
            <Paragraph>What's in it (sample, not exhaustive):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Classic hallucinogens:
                    </Word> LSD/LYSERGIDE, DMT, PSILOCYBINE, PSILOCINE, MESCALINE, SALVIA DIVINORUM
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Empathogens / amphetamine-type:
                    </Word> MDMA, MDA (tenamfetamine), DOB, DOET, DMA, TMA, methcathinone (ephedrone), cathinone (raw)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Opioid extreme end:
                    </Word> HEROIN, DESOMORPHINE (krokodil), 3-methylfentanyl and other fentanyl analogues, etorphine,
                    etonitazene
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Plants/naturals:
                    </Word> CANNABIS (the plant + resin + oil + extracts), OPIUM + POPPY STRAW, COCA LEAF, KRATOM, KAVA,
                    peyote-type (mescaline-containing)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Synthetic cannabinoids and "new psychoactive substances"
                    </Word> — entries marked with an asterisk; the JWH series, CP 47,497 series, designer cathinones, 2C-x
                    phenethylamines, etc.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mapping to US:
                </Word> Most List I items correspond to US Schedule I. The handful that don't quite map cleanly: kratom (US:
                not federally scheduled), kava (US: legal supplement), salvia (US: not federally scheduled, varies by
                state). Georgia is more restrictive on those three than the US is.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Important nuance — your hypothesis isn't perfectly clean:
                </Word> "List I = unprescribed" is mostly right but not absolute. The Georgian law allows licensed research
                use of List I substances, and a few items (etorphine — used in veterinary practice for large animals,
                certain fentanyl analogues) have legitimate but extremely narrow uses. The accurate framing is "no general
                medical/prescribing use; circulation requires special state permit," not "categorically illegal everywhere."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cannabis is the famous wrinkle.
                </Word> Cannabis is in List I, but Georgia's Constitutional Court decriminalized <Word>
                    <Bold />
                    personal consumption
                </Word> of cannabis in 2018 (rulings #1/3/1282 in 2017 and #1/13/732 in 2018). Possession with intent to
                distribute, cultivation, and trafficking remain criminal. So the substance is List I on paper, but personal
                use isn't punished — a structural anomaly worth knowing about if it ever comes up.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:56:42.336346Z"
        >
            <Origin>019e07a9-349f-7097-9e24-35efe478946f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so georgia is pretty serious about drugs. Is adderall like benzos only 14 days at a time? The
                pharmacies are nuts right now because people need refills so often
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T12:58:17.690044Z"
        >
            <Origin>019e07a9-34a0-7dcd-9a70-057416825573</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me find the actual prescription-duration rules — this is exactly the kind of consequential question
                where I shouldn't extrapolate.
            </Paragraph>
            <Action>Searched the web for “საქართველო რეცეპტი ვადა სპეციალური კონტროლი დღე "სია II" "სია III"”</Action>
            <Paragraph>Let me try a more targeted search with the specific decree number.</Paragraph>
            <Action>Searched the web for “"N22/ნ" საქართველო რეცეპტი სპეციალური კონტროლი 14 დღე”</Action>
            <Action>
                Searched the web for “Georgia "Decree N22/n" 2004 prescription rules psychotropic List II List III validity”
            </Action>
            <Action>Searched the web for “matsne Georgia "ფორმა N3" "ფორმა N1" სპეციალური რეცეპტი ფსიქოტროპული”</Action>
            <Paragraph>Let me look at the Group 2 prescription rules and find the corresponding Group 1 decree.</Paragraph>
            <Action>Fetched https://matsne.gov.ge/ka/document/download/5433300/0/ge/pdf</Action>
            <Action>Searched the web for “"პირველ ჯგუფს" ფარმაცევტული პროდუქტი რეცეპტი გამოწერა ფორმა საქართველო”</Action>
            <Action>Fetched http://pharmassociation.ge/?page_id=1011</Action>
            <Paragraph>
                Adderall is actually <Word>
                    <Bold />
                    stricter
                </Word> than benzos in terms of prescription validity, not the same. The two sit on different forms
                entirely.
            </Paragraph>
            <Paragraph>
                From the Georgian Pharmacists Association's reproduction of the ministerial decree governing first-group
                (special-control) prescriptions:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Form №1 (yellow blank)
                    </Word> — narcotic drugs, i.e. List I and II. "Narcotic medicinal substances are prescribed on a yellow
                    special prescription blank (Form 1)". Validity: "Prescription blank (Form 1) is valid for 5 days,
                    including the day of issue". Issued in duplicate, kept by pharmacy for 5 years. <Word>
                        <Bold />
                        This is what Adderall (amphetamine/dexamphetamine) requires
                    </Word> — also methylphenidate, oxycodone, fentanyl, morphine, tramadol, etc.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Form №2 (green blank)
                    </Word> — List III psychotropic. "Psychotropic and pharmaceutical products equated with special-control
                    products are prescribed on a green special prescription blank (Form 2)". Validity: "The issued
                    prescription (Form 2) is valid for 14 days, including the day of issue". Only one drug per blank. <Word>
                        <Bold />
                        Lorazepam, diazepam, alprazolam are here.
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Form №3
                    </Word> — Group 2 regular Rx. Per the April 2022 amendment, validity is "for chronic or long-term
                    ongoing diseases, as well as for oral contraceptives, the validity period of the issued prescription is
                    determined to be no more than 6 months".
                </Line>
            </Paragraph>
            <Paragraph>
                So the actual ordering is: <Word>
                    <Bold />
                    Form №1 (5 days, Adderall) → Form №2 (14 days, benzos) → Form №3 (up to 6 months, regular chronic Rx)
                </Word>. The crowding you're seeing makes sense — anyone on a stimulant has to come back for a fresh script
                every five days, and benzo patients every two weeks, with only one drug per blank. That generates a lot of
                pharmacy traffic for a small population of patients.
            </Paragraph>
            <Paragraph>
                One caveat: this rules document is from the Pharmacists Association reproducing the underlying decree
                (originally Min. of Health №150/n of July 21, 2003, with multiple amendments — I saw a 2024 amendment in the
                search results). The 5-day and 14-day numbers are durable across versions I've checked, but if you want the
                absolutely-current text, matsne.gov.ge for №150/n is authoritative. Worth confirming with whoever's writing
                the prescription.
            </Paragraph>
        </Message>
    </Chapter>
);
