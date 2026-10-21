import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-07-29T10:45:02.545974Z"
        >
            <Origin>019fad7b-21da-7952-9c02-1c6bbac161df</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In turkey I could be varenicline over the counter as dupons. Does a similar thing exist in tbilisi georgia?
                Read project memory before searching
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T10:48:19.241525Z"
        >
            <Origin>019fad7b-21dd-76ca-bf6c-76a2f77b398d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “Valium diazepam prescription Georgian pharmacies”</Action>
            <Action>Searched the web for “ვარენიკლინი აფთიაქი საქართველო”</Action>
            <Action>Fetched https://www.aversi.ge/en/aversi/act/drugDet/?MatID=33028</Action>
            <Action>Fetched http://www.mis.ge/mis_genmed.mis?g=Varenicline</Action>
            <Action>Searched the web for “ტაბექსი ციტიზინი აფთიაქი ფასი”</Action>
            <Action>Fetched https://mdc.ge/medications/34059/tabex-1,5mg-film-coated-tablets</Action>
            <Action>Searched the web for “варениклин Чампикс Тбилиси аптеки купить”</Action>
            <Action>Searched the web for “ჩამპიქსი ვარენიკლინი ფასი psp gpc pharmadepot”</Action>
            <Action>Searched the web for “pharmadeals ტაბექსი ფასი”</Action>
            <Action>Fetched https://www.vidal.ge/drugs/tabex</Action>
            <Paragraph>
                Short answer: not as varenicline - but yes as cytisine (Tabex), which is over the counter here.
            </Paragraph>
            <Paragraph>
                On varenicline itself (Dupons' active ingredient): the Georgian drug registry on mis.ge shows only three
                registered varenicline products, all Pfizer's Champix, all classified Group II - dispensed with a Form №3
                prescription - so even on paper it was never OTC here the way it is in Turkey. And it appears to be
                effectively off the market: those registrations ran only through October–December 2025, and Aversi's catalog
                lists Champix 1mg #28 at 0.00 GEL, marked "Product not for sale". It didn't surface in PSP, GPC, or
                Pharmadepot listings either. That's consistent with Pfizer's global 2021 Chantix/Champix withdrawal
                (nitrosamine impurities), after which it never returned in many markets - background context, not from these
                sources.
            </Paragraph>
            <Paragraph>
                What Georgia does sell freely is Tabex (cytisine, Sopharma Bulgaria) - the plant alkaloid varenicline was
                derived from, same α4β2 partial-agonist mechanism. Per vidal.ge it's Group III, dispensed without
                prescription, and it's currently stocked: 79.90 GEL for the 100-tablet pack at Aversi and 79.93 at
                pharmadepot.ge. The leaflet's course is 25 days, tapering from 6 tablets/day down to 1-2, with the quit date
                set at day 5.
            </Paragraph>
            <Paragraph>
                If you specifically want varenicline, the realistic route is carrying Dupons in from Turkey - per what we
                verified earlier this year, non-controlled prescription drugs in personal quantities generally pass when
                carried (mail is where the return-to-sender risk lives). Worth re-checking at point of use since that
                finding is a few months old.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T10:51:16.312899Z"
        >
            <Origin>019fad80-c60e-7057-9624-7bef3cd99f0f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m not 100% convinced that the plant alkaloid is the same unless you can prove that it has the same active
                ingredient or one with the same mechanism. Did you find that? Can I buy this on glovo or wolt in saburtalo
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T10:52:48.359536Z"
        >
            <Origin>019fad80-c60f-7d33-a38c-4dd43d22a000</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “varenicline derived from cytisine α4β2 partial agonist Coe 2005”</Action>
            <Action>
                Searched the web for “cytisine versus varenicline head-to-head trial Cochrane 2023 non-inferiority”
            </Action>
            <Action>Searched the web for “Glovo Wolt აფთიაქი მიწოდება თბილისი PSP Aversi Pharmadepot”</Action>
            <Action>Searched the web for “"ტაბექსი" wolt OR glovo საბურთალო”</Action>
            <Action>
                Fetched
                https://www.pharmadeals.ge/product/70556/%E1%83%A2%E1%83%90%E1%83%91%E1%83%94%E1%83%A5%E1%83%A1%E1%83%98-15%E1%83%9B%E1%83%92-100%E1%83%A2
            </Action>
            <Action>Searched the web for “wolt.com tbilisi tabex cytisine pharmacy item”</Action>
            <Action>
                Fetched
                https://wolt.com/en/geo/tbilisi/venue/psp-temk/tabex-tabeksi-1-5mg-100-tableti-itemid-6450fba6a822b3bc64b3dd3e
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Same mechanism, different molecule
                </Word> — here's the sourcing.
            </Paragraph>
            <Paragraph>
                Varenicline is not a cytisine derivative in a loose sense; it was literally built from it. The
                Mihalak/Molecular Pharmacology characterization describes varenicline as a nicotinic ligand based on the
                structure of cytisine, and the 5-HT3 pharmacology paper states plainly that varenicline is a derivative of
                cytisine, citing Coe et al. 2005 — the J Med Chem paper that introduced varenicline.
            </Paragraph>
            <Paragraph>
                On mechanism, Rollema's 2010 BJP paper treats them as members of the same pharmacological class:
                varenicline, cytisine and dianicline are all α4β2 nAChR partial agonists studied in smoking-cessation
                trials. A separate trial protocol puts it directly: like its analogue varenicline, cytisine acts as a
                partial agonist of the nicotinic acetylcholine receptor. So: same target, same partial-agonist mechanism,
                direct structural lineage — but two distinct compounds, not one active ingredient.
            </Paragraph>
            <Paragraph>Where they diverge, since it matters for what you'd actually get:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Off-target profile differs. Varenicline is a potent partial agonist at α4β2, a weak partial agonist at
                    α3β4, and a full agonist at α7 — cytisine's subtype profile isn't identical.
                </Line>
                <Line>
                    Efficacy is genuinely contested. The Croatia/Slovenia head-to-head found 24-week cessation of 32.5% on
                    varenicline vs 23.1% on cytisine (OR 0.63), failing non-inferiority — but with higher adherence on
                    cytisine (70.4% vs 59.2%) and fewer adverse events (IRR 0.59). Against that, the 2023 systematic reviews
                    suggest the benefit of both may be comparable (RR 1.13 and RR 1.00), though the evidence base is
                    limited. Note the trials compare 4 weeks of cytisine to 12 weeks of varenicline, which isn't a clean
                    dose-matched comparison.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Glovo/Wolt in Saburtalo:
                </Word> yes on Wolt — Tabex 1.5mg #100 appears in PSP's Wolt catalog as a listed item, and Aversi, PSP,
                Pharmadepot and GPC all run pharmacy storefronts on Wolt Tbilisi. Aversi Pharmacy is also on Glovo Tbilisi.
                Current price at Aversi is 89.24 GEL, with a 15% discount showing.
            </Paragraph>
            <Paragraph>
                What I couldn't verify: which specific branch serves your address and whether it has stock today. Wolt and
                Glovo gate catalogs by delivery address and render them client-side, so branch-level inventory only appears
                once you enter the address in the app — that's a technical limit on my end, not a policy one. Search
                "ტაბექსი" or "Tabex" inside the pharmacy storefront once your address is set.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T10:57:29.527247Z"
        >
            <Origin>019fad86-8ae7-7ede-bf29-82f1c3b85d82</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is georgia’s policy on pseudofed, benzedrine for clearing nose, or ephedrine tablets that they sell in
                us
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T11:00:35.447404Z"
        >
            <Origin>019fad86-8ae8-79d3-b3a4-c88f0ba9922b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “ფსევდოეფედრინი საქართველო რეცეპტი კონტროლი აფთიაქი”</Action>
            <Action>Fetched http://www.mis.ge/mis_genmed.mis?g=Pseudoephedrine</Action>
            <Action>Searched the web for “vidal.ge ფსევდოეფედრინი აქტიური ნივთიერება მედიკამენტები”</Action>
            <Action>Fetched https://vidal.ge/drugs/active-ingredients/pseudoephedrine</Action>
            <Action>Searched the web for “"pseudoephedrine" vidal.ge სუდაფედი აქტიური ნივთიერება”</Action>
            <Action>Searched the web for “აფთიაქი ფსევდოეფედრინი შემცველი პრეპარატი ნურაფენი ცივი გრიპი ტაბლეტი”</Action>
            <Action>
                Fetched
                https://pharmaco.ge/product/%E1%83%92%E1%83%A0%E1%83%98%E1%83%91%E1%83%94%E1%83%A5%E1%83%A1%E1%83%98-%E1%83%AA%E1%83%98%E1%83%95%E1%83%98-%E1%83%92%E1%83%A0%E1%83%98%E1%83%9E%E1%83%98-200-%E1%83%9B%E1%83%92-30-%E1%83%9B/
            </Action>
            <Action>Searched the web for “mis.ge ფსევდოეფედრინი გაცემის რეჟიმი III ჯგუფი ურეცეპტოდ”</Action>
            <Action>Searched the web for “ეფედრინი ფსევდოეფედრინი პრეკურსორების სია საქართველო III სია კანონი”</Action>
            <Action>Fetched https://mfa.gov.ge/pfiles/files/wamlebi-sia.pdf</Action>
            <Action>
                Searched the web for “propylhexedrine Benzedrex inhaler legal status Georgia country registered”
            </Action>
            <Action>Searched the web for “ფსევდოეფედრინის შემცველი პრეპარატი ფორმა №2 რეცეპტი აფთიაქი საქართველო”</Action>
            <Action>
                Searched the web for “ფორმა №2 რეცეპტი ვადა 2026 სპეციალურ კონტროლს დაქვემდებარებული არანარკოტიკული
                სამკურნალო საშუალება”
            </Action>
            <Paragraph>
                Short version: all three are worse in Georgia than in the US. Pseudoephedrine and ephedrine aren't just
                behind-the-counter here — they're scheduled psychotropics.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pseudoephedrine and ephedrine.
                </Word> Both were added to List III (psychotropic substances) of Georgia's special-control law by the
                05.03.2014 N2043 amendment, effective 15 March 2014, along with norephedrine. The note to List III extends
                it to combined preparations containing ephedrine, norephedrine or pseudoephedrine, and the quantity annex
                sets criminal thresholds — pseudoephedrine at 0.3 / 3 / 30 grams for small / large / especially large,
                ephedrine and norephedrine at 0.15 / 1.5 / 15. The Health Minister's Order №22/ნ list of special-control
                medicines opens with exactly this category, and prescribing is on the Form №2 blank, with the form number
                and justification recorded in the patient's chart. Georgian press coverage of the change puts the practical
                result plainly: these combination products can be dispensed from a pharmacy only on a Form №2 prescription,
                and illegal circulation carries criminal liability. Form №2 is the non-narcotic special-control blank and
                has since moved to electronic-only.
            </Paragraph>
            <Paragraph>
                So Sudafed and Bronkaid are not a mail-order or walk-in proposition here. This also sharpens the earlier
                three-tier framing we worked out: Sudafed isn't the OTC exception in Georgia — for the parcel channel it
                sits in the controlled tier, documentation mandatory.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Benzedrex.
                </Word> Assuming you mean the propylhexedrine inhaler (actual Benzedrine was amphetamine, which is on
                Georgia's List II). I did not find propylhexedrine anywhere in Lists I–IV, and found no Georgian
                registration or pharmacy listing — but I'd call that <Word>
                    <Emphasis />
                    not verified
                </Word> rather than cleared, partly because Georgia's new-psychoactive-substance annex controls whole
                chemical classes by core structure. Internationally it's UN-unscheduled, OTC in the US, pharmacy-only in the
                UK, prescription in Germany and Australia.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What actually works locally:
                </Word> topical decongestants are unrestricted. Xylometazoline is on Wolt now — Snup spray 90mcg/dose 15ml,
                9.43 GEL at PSP — and oxymetazoline (Afrin) is the same tier.
            </Paragraph>
            <Paragraph>
                Two caveats worth holding: the consolidated annex I read carries amendment markers through 2014, and
                Georgia's schedules move, so re-verify before acting. And I don't know whether the April 2026 dispensary
                tightening for psychotropics reaches Form №2 pseudoephedrine combinations — I found nothing either way.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T11:04:33.184139Z"
        >
            <Origin>019fad8d-049a-771f-b0fb-874b2b9ce0cd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Oh interesting so they have something like the analogs act? Is it like the us? Search harder for
                propylhexedrine. Do they follow US so that it covers things like the fluoroamphetamines or ethylphenidate
                (not methyl)
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T11:07:33.466103Z"
        >
            <Origin>019fad8d-049b-72fb-9872-a4111c704809</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “"ახალი ფსიქოაქტიური ნივთიერებების შესახებ" საქართველოს კანონი matsne”</Action>
            <Action>Fetched https://matsne.gov.ge/ka/document/view/2330479</Action>
            <Action>Searched the web for “პროპილჰექსედრინი OR პროპილგექსედრინი საქართველო ნივთიერება”</Action>
            <Action>Fetched https://matsne.gov.ge/ka/document/download/2330479/3/1</Action>
            <Action>Searched the web for “ethylphenidate legal status Georgia controlled OR ეთილფენიდატი”</Action>
            <Action>Searched the web for “ethylphenidate added 1971 Convention Schedule II CND decision year”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    No — it's the continental class-scheduling model, not the US analog test.
                </Word> Georgia enacted a standalone New Psychoactive Substances Act (№2234-IIს, 16 April 2014, in force 1
                May 2014, amended 2015 and twice in 2018). Three provisions define its architecture:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Art. 3(a) defines an NPS as a substance or admixture <Word>
                        <Emphasis />
                        determined by the annexes to this law
                    </Word> that can produce psychoactive effect — closed list, not an open-textured similarity standard.
                </Line>
                <Line>
                    Art. 7(3) lets the State Commission propose adding whole <Word>
                        <Emphasis />
                        chemical compound classes
                    </Word> where listing substances individually is less useful for stopping their spread.
                </Line>
                <Line>
                    Art. 8 is the tell: inclusion of a class is not precluded by that class containing compounds which
                    cannot produce psychoactive effect, or produce only insignificant effect, or are already regulated as
                    controlled substances or pharmaceuticals.
                </Line>
            </Paragraph>
            <Paragraph>
                That last one is the inverse of 21 U.S.C. § 802(32), which requires both structural similarity <Word>
                    <Emphasis />
                    and
                </Word> substantially similar or greater CNS effect, litigated compound by compound with
                intent-for-human-consumption. Georgia deliberately writes the effects prong out for class members and
                accepts over-inclusion. The annex text carries German-language fingerprints throughout — <Word>
                    <Emphasis />
                    Phenethylamin
                </Word>, <Word>
                    <Emphasis />
                    Naphthoyl-Indole
                </Word>, <Word>
                    <Emphasis />
                    Alpha-Keto-Benzylamin
                </Word>, <Word>
                    <Emphasis />
                    Säuremide
                </Word> — so it looks translated from a German-model statute rather than a US one. That's my observation
                from the text, not a sourced claim.
            </Paragraph>
            <Paragraph>
                Two scope limits matter: the NPS law doesn't apply to pharmaceutical product circulation or to
                special-control substances, and it covers only substances <Word>
                    <Emphasis />
                    not
                </Word> already defined by the 1961 and 1971 conventions. It's a residual regime. And the transitional Art.
                9(2) instructs the Minister to make prescription-only any pharmaceutical product containing an Annex 2 class
                member that wasn't already Rx — so class membership can convert an OTC drug to prescription rather than
                criminalize it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fluoroamphetamines never reach the analog question.
                </Word> They're named individually in List I of the narcotics law — the strictest tier. 2- or
                3-fluoroamphetamine, p-fluoroamphetamine, 3-FMA, 3-fluoromethcathinone and flephedrone all appear by name,
                each flagged with the asterisk marking a new psychoactive substance, and List I's note sweeps in isomers,
                esters, ethers and their salts.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ethylphenidate is the more interesting case, and it's out of the NPS law entirely.
                </Word> The CND placed it in Schedule II of the 1971 Convention on 16 March 2017 (CND Dec/60/7), and UNODC
                treats it as the one phenidate under international control since then. Since Georgia's List III is compiled
                on the basis of the UN conventions and the NPS law excludes convention substances, the obligation runs to
                List III. Whether Georgia has actually transposed it by name I could not verify — matsne serves the current
                consolidated annex only as a binary .doc I can't read, and the readable compiled version is 2014-vintage,
                predating the 2017 decision.
            </Paragraph>
            <Paragraph>
                Worth flagging as a textual reading rather than a verified conclusion: methylphenidate sits in List III, and
                List III's notes cover only drug forms and salts, reference standards, and the
                ephedrine/norephedrine/pseudoephedrine combinations — there is no ester or ether clause, unlike Lists I and
                II. Ethylphenidate is the ethyl ester where methylphenidate is the methyl ester of the same acid, so if it
                isn't listed by name it wouldn't be pulled in by List III's notes. As for the class annex, class 9 targets
                the diphenylmethylpiperidine skeleton — that's the pipradrol/2-DPMP family, separately listed — not the
                2-phenyl-2-(piperidin-2-yl)acetate skeleton. Class 2 is arguable: ethylphenidate is commonly described as
                both a substituted phenethylamine and a substituted phenidate, and a Georgian expert examination could go
                either way on whether the constrained ring nitrogen counts.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Propylhexedrine, searched harder.
                </Word> Georgian transliterations, mis.ge, vidal.ge, matsne, the pharmacy chains — nothing. No registration,
                no listing, no mention in the compiled schedules I could read. Internationally it remains UN-unscheduled:
                OTC in the US, pharmacy-only in the UK, prescription in Germany and Australia, unscheduled in Canada. On the
                class annexes my reading is that it falls outside all nine — it's a cycloalkylamine with a saturated
                cyclohexyl ring, so no phenethylamine core, and arylcyclohexylamine means the aryl and cyclohexyl share the
                amine-bearing carbon, which isn't its structure. But it is a structural analog of methamphetamine, which is
                precisely the argument an expert examination would run at, and being unregistered here it gets no
                pharmaceutical carve-out under Art. 2(2)(a). Practically it lands in the unregistered-medicine bucket for
                parcels regardless of scheduling.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T11:17:09.853768Z"
        >
            <Origin>019fad98-8541-786f-aff0-b3c745453d7e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Interesting. Thank you. Methylphenidate is list iii but virtually unprescribed like adderall right?
                Cyclohexedrine apunds like it is simply not present in the country. Always interesting to discover the
                different quirks of pharmacology in different countries.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T11:19:06.446219Z"
        >
            <Origin>019fad98-8549-7b9c-af40-f729bc491ebf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “მეთილფენიდატი რიტალინი კონცერტა საქართველო რეგისტრირებული აფთიაქი”</Action>
            <Action>
                Searched past conversations for “Adderall methylphenidate ADHD stimulant Georgia availability prescription”
            </Action>
            <Paragraph>
                One correction I owe you: methylphenidate is List II, not List III. I misfiled it. It's entry 41 of List II
                — restricted narcotic drugs — sitting with amphetamine, dexamphetamine and metamfetamine, not with the
                benzodiazepines and ephedrines over in the psychotropic list.
            </Paragraph>
            <Paragraph>
                That also dissolves the ester argument I built. List II's notes <Word>
                    <Emphasis />
                    do
                </Word> extend to ethers and esters of listed substances; it's List III's notes that don't. So the point was
                resting on the wrong list. Whether ethylphenidate counts as an ester <Word>
                    <Emphasis />
                    of methylphenidate
                </Word> rather than a different ester of the same parent acid is a separate question the text doesn't
                settle. The 2017 UN Schedule II route stands on its own either way.
            </Paragraph>
            <Paragraph>
                On "virtually unprescribed" — it's stronger than that. From the research earlier this month: adhd.ge reports
                that methylphenidate, dexmethylphenidate and dextroamphetamine aren't registered on Georgia's pharmaceutical
                market at all. No doctor can write for them, no pharmacy stocks them, and people who need them buy in Turkey
                or the EU. So the List II classification is nearly beside the point — non-registration is what actually
                closes the door, same mechanism as Adderall. Worth re-verifying if it ever becomes load-bearing, since that
                was a single advocacy-site source.
            </Paragraph>
            <Paragraph>
                Propylhexedrine does look simply absent — no registration, nothing in the schedules I could read, no
                Georgian-language footprint in any language I searched. Which makes sense: it only exists because Benzedrex
                was created as the replacement after amphetamine came out of the original Benzedrine inhalers — a US
                regulatory accident from 1949. Georgian pharmacy inherited the Soviet formulary and never had that branch of
                the tree at all. That last part is my read rather than a sourced claim.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T11:33:43.354282Z"
        >
            <Origin>019fada7-bdac-70ab-aadb-2b6dcdf008a9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Obesin is the usage of propylhexedrin as a weight loss drug in Europe. Does that exist? Perhaps you have
                trouble finding that like you did varenicline
            </Paragraph>
        </Message>
        <Message
            at="2026-07-29T11:35:02.522104Z"
        >
            <Origin>019fada7-bdb3-775d-a7ac-5d1ad726ed5b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Obesin Propylhexedrin Appetitzügler Deutschland Marktrücknahme”</Action>
            <Action>
                Searched the web for “barbexaclone Maliasin levopropylhexedrine Eventin still marketed available 2025”
            </Action>
            <Action>Searched the web for “барбексаклон Малиазин Обезин Грузия аптека препарат”</Action>
            <Paragraph>
                You're right, and it's the same failure mode as Champix — I searched the INN and the current Georgian
                registry, which finds nothing that was withdrawn before those registries existed.
            </Paragraph>
            <Paragraph>
                Obesin was real and it was East German. Fahlberg-List, the Magdeburg firm that was among the DDR's most
                significant chemical and pharmaceutical enterprises, introduced Obesin — active ingredient propylhexedrine —
                as an appetite suppressant in 1957. That corrects what I said last message about Georgia never having had
                that branch of the tree. A 1957 DDR anorectic is a Comecon-market product, which is precisely the
                pharmacopoeia Georgia inherited. Whether it actually circulated in the Georgian SSR I couldn't confirm — but
                the "never" was wrong.
            </Paragraph>
            <Paragraph>
                It also went bad early, in a way that reads familiarly: a 1965 Archives of Toxicology case report on a
                near-fatal poisoning of an almost-3-year-old with Obesin cites Rose's 1958/59 paper on drug addiction
                through misuse of so-called appetite suppressants — Obesin named specifically. Roughly a year after launch.
            </Paragraph>
            <Paragraph>
                Then the molecule splits down its enantiomers. Levopropylhexedrine, the S-enantiomer, was marketed as the
                anorectic Eventin in Germany and patented by Smith Kline &amp; French in 1947, and it's the stimulant half
                of barbexaclone, salted to phenobarbital to offset the sedation. Barbexaclone is the branch that stayed
                alive longest, and it got much closer to you than I implied: it was widely used in Turkey until production
                ended in 2009, which produced a withdrawal crisis with no standardised management protocol — seizure freedom
                fell from 37.7% on the drug to 32.2% after discontinuation. It also had a Russian-language monograph as
                Maliasin, dragées of 25 or 100 mg barbexaclone equivalent to 15 or 60 mg phenobarbital,
                manufacturer-approved in 1996.
            </Paragraph>
            <Paragraph>
                So: present in the Soviet-bloc and Turkish formularies within living memory, gone from both now.
                Fahlberg-List dissolved in 1995, and I found no evidence of Obesin or Eventin currently marketed anywhere —
                absence of evidence, not a confirmed withdrawal. Nothing in Georgia under any of the three trade names, and
                barbexaclone would land in List III via the phenobarbital half regardless. One loose thread I'd flag rather
                than assert: NCATS lists barbexaclone as US Approved Rx in 2022 under NDA215910, which is surprising enough
                that I'd treat it as a possible database artifact until someone checks the FDA record directly.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-30T10:37:59.222670Z"
        >
            <Origin>019fb29a-fe2d-78d2-ab2a-681ea82bd15c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Tell me more about cytisine versus varenicline? Do I consider these more or less the same drug or does one
                have different effects? Varenicline is a pretty simple drug to a smoker because it provides some of the
                stimulation that they’re used to while blocking the effects of nicotine. Does cytisine block as well? What
                dose do I take?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-30T10:39:31.218064Z"
        >
            <Origin>019fb29a-fe2e-7c49-8734-fdcc4a2df5d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “cytisine varenicline intrinsic efficacy α4β2 receptor binding affinity comparison
                partial agonist”
            </Action>
            <Action>
                Searched the web for “cytisine blood-brain barrier penetration half-life pharmacokinetics nicotine
                antagonist blocking”
            </Action>
            <Action>
                Searched the web for “Tabex cytisine 1.5mg dosing schedule days 1-3 6 tablets day 25 day course quit day 5”
            </Action>
            <Paragraph>
                Treat them as same class, not same drug — and the difference that matters to you is pharmacokinetic, not
                mechanistic.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Does it block? Yes, that's its central claim.
                </Word> Cytisine competes with nicotine at the receptor and blocks its effects, so the dual action reduces
                urge-to-smoke by triggering some dopamine release while lessening nicotine's pleasurable effects by
                preventing reward-center activation. Structurally identical logic to varenicline, which produces partial
                agonist activity while preventing nicotine from binding. So your mental model transfers intact.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But there's a real fight over whether enough of it reaches the receptor.
                </Word> Cytisine's half-life is 4–5 hours versus varenicline's 24, its volume of distribution is about
                three-fold smaller, and it crosses the blood-brain barrier less readily. Rollema's 2010 BJP modelling is
                blunt about the consequence: at therapeutic doses varenicline and nicotine, but not cytisine, are predicted
                to extensively desensitize and to a lesser extent activate α4β2 receptors — cytisine's recommended doses,
                despite high in vitro potency, are predicted to give brain concentrations insufficient to affect α4β2 at
                all. Two caveats on that: Rollema was Pfizer, and the NEJM trial group answered that the BBB data are from
                nonhuman species and it isn't clear they generalize to humans. Cytisine then beat placebo in that trial
                anyway.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Expect less of the stimulation you're describing.
                </Word> Varenicline's α4β2 efficacy is around 45% of nicotine's maximum in HEK patch clamp, with 40–60%
                lower efficacy than nicotine at driving dopamine release, and cytisinicline is characterized as structurally
                similar but a less potent partial agonist. Less agonism plus less brain exposure means the "something to do
                instead of nicotine" component is weaker. The trade runs the other way on tolerability — cytisine's
                preliminary edge is on sleep disturbance and emotional reactivity, which is where varenicline's vivid-dream
                and insomnia reputation comes from.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Standard 25-day Tabex schedule
                </Word> — one 100-tablet pack is exactly one course:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Days 1–3: 1 tablet (1.5 mg) every 2 hours through your waking day — 6/day</Line>
                <Line>
                    Days 4–12: every 2.5 hours — 5/day. <Word>
                        <Bold />
                        Quit date is day 5.
                    </Word>
                </Line>
                <Line>Days 13–16: every 3 hours — 4/day</Line>
                <Line>Days 17–20: every 4–5 hours — 3/day</Line>
                <Line>Days 21–25: every 6 hours — 2/day</Line>
            </Paragraph>
            <Paragraph>
                You taper cigarettes across the first three days; if it isn't working, stop and retry after 2–3 months. One
                non-obvious warning worth taking seriously as a smoker: smoking while on it can aggravate nicotine's effects
                to the point of nicotine intoxication — the blockade is partial, and you're stacking agonists.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The thing I'd actually flag: 25 days is probably too short.
                </Word> UK guidance says running it up to 12 weeks is likely more effective and makes it roughly as
                effective as varenicline at equal duration, though that's outside the marketing authorization and the
                correct extended dose hasn't been established. Trial protocols do it by following the 25-day schedule then
                holding 2 tablets/day through week 12. The Italian 40-day version with a slower taper got 50.5% six-month
                cessation versus 55.9% for 12 weeks of varenicline and 51.0% for NRT. That reframes the non-inferiority
                failure I cited earlier — that trial compared 4 weeks of one drug to 12 of the other.
            </Paragraph>
            <Paragraph>
                Standard caveats that come with the label rather than from me: contraindicated in recent MI, unstable
                angina, significant arrhythmia, recent stroke, pregnancy and breastfeeding, and not recommended over 65 or
                with renal or hepatic impairment. Advanced atherosclerosis and uncontrolled hypertension are also listed,
                and reported effects include dyspepsia, nausea, headache, increased appetite, dry mouth, nightmares and
                irritability. Worth a two-minute conversation with whoever prescribes for you before starting, mostly for
                interaction checking — I'm reporting the leaflet, not clearing you for it.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-30T10:43:43.431075Z"
        >
            <Origin>019fb2a0-56e2-73c1-8aad-5aa49ef5891f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ugh, I’ve just been taking varenicline like a medication. It provides me with real long-term support in case
                I have a relapse and it provides me with some stimulation. Cytisine requires constant dosing. I guess
                there’s not much to do about that.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-30T10:44:31.887380Z"
        >
            <Origin>019fb2a0-56e3-75d8-9c2f-b87898ceed84</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Dupons vareniklin Türkiye eczane fiyat 2026 reçete”</Action>
            <Paragraph>There's more to do about it than that — Turkey still has it.</Paragraph>
            <Paragraph>
                Dupons is current, not a legacy listing. Abdi İbrahim makes it, and the 1 mg 56-tablet pack lists at
                3,828.93 TL, with the 109-tablet pack at 7,657.92 TL, sold on beyaz reçete — the ordinary white
                prescription, not a controlled form. The Turkish price list carrying that barcode was refreshed on 13 July
                2026, so it's actively marketed this month. Whatever Pfizer did to Champix globally, the Turkish generic
                route stayed open.
            </Paragraph>
            <Paragraph>
                Which makes this a supply problem rather than a pharmacology problem. Varenicline isn't on any Georgian
                control list — its local registration simply lapsed — so it's an ordinary prescription medicine, and
                personal quantities carried across the Sarp border sit in the same bucket as anything else in that tier. A
                109-tablet pack is a couple of months at maintenance dosing. Worth also asking a Tbilisi pharmacy whether
                they'll special-order it: Georgian pharmacies do source unregistered medicines by request, though I haven't
                verified that anyone will do it for this specific drug.
            </Paragraph>
            <Paragraph>
                One correction to the cytisine picture, for completeness rather than persuasion: the six-times-daily is only
                days 1–3. Maintenance in the extended protocols is two tablets a day. Still a poor fit for what you're
                describing — a 4.8-hour half-life at 2/day leaves real gaps, and long-term relapse cover is exactly where
                varenicline's 24 hours does the work — but it's not a permanent six-a-day regimen.
            </Paragraph>
        </Message>
    </Chapter>
);
