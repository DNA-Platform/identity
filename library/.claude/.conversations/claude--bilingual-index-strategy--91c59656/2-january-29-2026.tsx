import { Append, Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Title>[[ 29 January 2026 ]]</Title>
        <Message
            at="2026-01-29T09:01:47.163665Z"
        >
            <Origin>019c08fc-bcf1-7605-a7c8-b9bfc05578cd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay I need a message in English to the lawyers. It is for my therapist. She is a licensed LCSW, and she was
                asked to submit a document into Russian court. She is worried about malpractice in Russia. She mentioned
                something about submitting in a coaching capacity, but then there are things she can and can't say.
                Background research for the note - what is she referring to? Can you look it up? A US therapist getting sued
                for malpractice in Russia? Can that happen? There is an angry ex-husband and this document will contain
                allegations of rape and violence
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:02:32.280978Z"
        >
            <Origin>019c08fc-bcf1-7605-a7c8-b9c0ef848da8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me research this.</Paragraph>
            <Action>Searched the web for “US therapist malpractice liability foreign court testimony jurisdiction”</Action>
            <Action>
                Searched the web for “therapist coaching capacity vs clinical testimony court difference liability”
            </Action>
            <Action>
                Searched the web for “Russia jurisdiction over foreign professionals court testimony malpractice”
            </Action>
            <Paragraph>Now I have enough to give you the breakdown.</Paragraph>
            <Heading>WHAT YOUR THERAPIST IS WORRIED ABOUT</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Can she be sued for malpractice in Russia?
                </Word>
            </Paragraph>
            <Paragraph>
                Practically speaking: <Word>
                    <Bold />
                    No.
                </Word> Russian courts can only claim jurisdiction over a foreign professional if they have assets in Russia
                OR are actively targeting Russian consumers (like a Russian-language website with prices in rubles). A
                US-based LCSW with no Russian presence has essentially zero enforceable liability. Even if Russia issued
                some judgment against her, US courts wouldn't enforce it - there's no treaty between US and Russia for
                enforcement of civil judgments.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What she's actually worried about (the "coaching capacity" distinction):
                </Word>
            </Paragraph>
            <Paragraph>
                As Ana's <Word>
                    <Bold />
                    treating therapist
                </Word>, she can only submit a document as a <Word>
                    <Bold />
                    fact witness
                </Word> - meaning she can state:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>What Ana reported to her</Line>
                <Line>Clinical observations from sessions</Line>
                <Line>Diagnosis and treatment provided</Line>
                <Line>Ana's response to treatment</Line>
            </Paragraph>
            <Paragraph>
                She <Word>
                    <Bold />
                    cannot
                </Word> offer forensic opinions like "Maxim is an unfit parent" or "the children should live with Ana" -
                that would require a <Word>
                    <Bold />
                    forensic evaluation
                </Word> role, which creates ethical dual-role conflicts with being the treating therapist.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Her real risks are from her US licensing board
                </Word>, not Russia:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>If she makes claims beyond her clinical observations</Line>
                <Line>If her written statements don't match her session notes</Line>
                <Line>If she acts as an expert witness when she's only qualified as a fact witness</Line>
            </Paragraph>
            <Heading>DRAFT MESSAGE TO LAWYERS</Heading>
            <Paragraph>
                My therapist &#91;name&#93;, a licensed clinical social worker (LCSW) in the United States, has agreed to
                provide a supporting document for the court. However, she has some concerns about the scope of what she can
                write.
            </Paragraph>
            <Paragraph>As my treating therapist, she can ethically provide:</Paragraph>
            <Paragraph>
                <List />
                <Line>The period during which she has been treating me</Line>
                <Line>The reason I sought treatment and my initial presenting concerns</Line>
                <Line>Her clinical observations about my condition at the start of treatment</Line>
                <Line>Her assessment of my current condition and progress</Line>
                <Line>Facts I reported to her during sessions (including incidents of violence)</Line>
            </Paragraph>
            <Paragraph>She cannot ethically provide:</Paragraph>
            <Paragraph>
                <List />
                <Line>Opinions about Maxim's fitness as a parent (she has not evaluated him)</Line>
                <Line>Forensic conclusions about custody (she is a treating therapist, not a forensic evaluator)</Line>
                <Line>Statements that go beyond what is documented in her clinical records</Line>
            </Paragraph>
            <Paragraph>
                She asked about malpractice liability in Russia. Based on my research, a US-based therapist with no assets
                or business activity in Russia faces no realistic enforcement risk from Russian courts. Her actual concern
                is staying within her ethical scope under US licensing standards.
            </Paragraph>
            <Paragraph>
                Can you confirm what specific information you need from her, so she can provide a document that is both
                useful to the court and within her professional boundaries?
            </Paragraph>
            <Paragraph>Does this work?</Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:06:37.557093Z"
        >
            <Origin>019c0901-2b22-76ec-958b-db6c85a58bbd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I need you to share your malpractice concerns with citations. I want to send this to my therapist too. So
                please give me that but it needs written hyperlinks so they survive copy and paste. So just provide
                information about malpractice, and for submitting in either capacity and what can and can't be said. Do as
                much research as you can. This is an American seeing a Russian client remotely and the document is for
                Russian law and contains serious criminal allegations about the defendant, as Ana confided in her.
            </Paragraph>
            <Paragraph>
                Ana is not a US-based Telehealth client. Ana is Russian-based. Her home is in the Lenningrad region. So this
                is a Russian getting therapy from an American therapist
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:07:57.084795Z"
        >
            <Origin>019c0901-2b22-76ec-958b-db6dd362a4da</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me do more thorough research on this specific situation - a US therapist treating a Russian-resident
                client remotely.
            </Paragraph>
            <Action>
                Searched the web for “US therapist treating international client abroad telehealth malpractice liability
                jurisdiction”
            </Action>
            <Action>
                Searched the web for “treating therapist fact witness court testimony what can say limitations ethical”
            </Action>
            <Action>
                Searched the web for “therapist liability defamation statements about third party abuser court document”
            </Action>
            <Action>
                Searched the web for “judicial privilege absolute privilege statements court documents protection
                defamation”
            </Action>
            <Action>Searched the web for “NASW LCSW ethics testimony court custody document international client”</Action>
            <Paragraph>Now I have enough information. Let me compile this for your therapist.</Paragraph>
            <Heading>
                MALPRACTICE &amp; LIABILITY CONCERNS FOR US THERAPIST PROVIDING COURT DOCUMENT IN RUSSIAN CUSTODY CASE
            </Heading>
            <Heading>1. JURISDICTIONAL LIABILITY: CAN RUSSIA SUE A US THERAPIST?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Short answer: Highly unlikely to succeed, but not impossible to attempt.
                </Word>
            </Paragraph>
            <Paragraph>Russian courts can claim jurisdiction over foreign professionals only if:</Paragraph>
            <Paragraph>
                <List />
                <Line>The professional has assets located in Russia, OR</Line>
                <Line>
                    The professional is "directing activities" at Russian consumers (e.g., Russian-language website with
                    prices in rubles)
                </Line>
            </Paragraph>
            <Paragraph>Source: https://academic.oup.com/grurint/article-abstract/71/11/1118/6614250</Paragraph>
            <Paragraph>
                However, because Ana is physically located in Russia (Leningrad region), Russian law technically applies to
                where the client receives services. This creates a gray area.
            </Paragraph>
            <Paragraph>
                Source:
                https://www.katlove.com/can-an-american-therapist-do-therapy-with-american-expats-living-abroad-or-citizens-of-other-countries
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Critical point:
                </Word> Even if a Russian court issued a judgment against a US-based therapist, US courts would almost
                certainly not enforce it. There is no treaty between the US and Russia for mutual enforcement of civil
                judgments.
            </Paragraph>
            <Heading>2. US MALPRACTICE INSURANCE COVERAGE</Heading>
            <Paragraph>
                Most US malpractice policies cover work if a client sues in a US jurisdiction. They typically do NOT cover
                if a client sues from a foreign jurisdiction.
            </Paragraph>
            <Paragraph>Source: https://ethicsdemystified.com/can-i-provide-telemental-health-in-other-countries/</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Action item:
                </Word> The therapist should contact her malpractice carrier directly and confirm whether international
                telehealth practice is covered, and specifically whether submitting a document to a foreign court is
                covered.
            </Paragraph>
            <Heading>3. THE "COACHING" VS. "CLINICAL" CAPACITY DISTINCTION</Heading>
            <Paragraph>
                When she mentioned submitting in a "coaching capacity," she is likely referring to the distinction between:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    FACT WITNESS (Treating Therapist):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Can testify about what the client reported</Line>
                <Line>Can describe clinical observations from sessions</Line>
                <Line>Can state diagnosis and treatment provided</Line>
                <Line>Can describe client's response to treatment</Line>
                <Line>CANNOT offer forensic opinions about custody, parenting fitness, or the other party</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    EXPERT WITNESS (Forensic Evaluator):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Hired specifically to evaluate and opine on legal questions</Line>
                <Line>Can offer opinions on custody, fitness, etc.</Line>
                <Line>Requires comprehensive assessment of ALL parties</Line>
            </Paragraph>
            <Paragraph>
                Source:
                https://memphisdivorce.com/dual-roles-in-custody-litigation-ethical-conflicts-with-therapeutic-and-forensic-roles/
            </Paragraph>
            <Paragraph>
                Source:
                https://www.psychologytoday.com/us/blog/progress-notes/202011/9-tips-for-psychotherapists-providing-court-testimony
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The ethical problem:
                </Word> A treating therapist CANNOT ethically serve as both therapist AND forensic expert in the same case.
                This creates a "dual role" conflict.
            </Paragraph>
            <Paragraph>Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7683260/</Paragraph>
            <Heading>4. WHAT A TREATING THERAPIST CAN AND CANNOT SAY</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    CAN SAY (as fact witness):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Patient's history as reported by the patient directly, without interpretation</Line>
                <Line>Clinical diagnosis following study of patient's symptoms, signs, and findings</Line>
                <Line>Care and type of treatment provided</Line>
                <Line>Patient's response or reaction to care and treatment</Line>
                <Line>Dates and duration of treatment</Line>
                <Line>Clinical observations made during sessions</Line>
            </Paragraph>
            <Paragraph>
                Source:
                https://memphisdivorce.com/dual-roles-in-custody-litigation-ethical-conflicts-with-therapeutic-and-forensic-roles/
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    CANNOT SAY (without becoming expert witness):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Opinions about the other parent's fitness</Line>
                <Line>Recommendations about custody or placement</Line>
                <Line>Conclusions about what happened outside of sessions (can only report what client reported)</Line>
                <Line>Forensic conclusions about the "best interests of the child"</Line>
                <Line>Clinical speculation about what may have happened or could happen in the future</Line>
            </Paragraph>
            <Paragraph>
                Source:
                https://www.myfamilylawyer.net/blog/2014/03/tips-for-testifying-lesson-5-lay-testimony-expert-testimony-and-the-mental-health-professional/
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key guidance from Ohio Administrative Code (representative of US standards):
                </Word> "Licensees asked by a judge to make a recommendation in a custody, visitation and/or guardianship
                hearing, not hired by the court to do so, shall cite their role as a client's therapist and note that any
                testimony would be an ethics violation of their license and they can only testify to facts that they know."
            </Paragraph>
            <Paragraph>Source: https://codes.ohio.gov/ohio-administrative-code/rule-4757-6-01</Paragraph>
            <Heading>5. ALLEGATIONS ABOUT THE DEFENDANT (MAXIM)</Heading>
            <Paragraph>This is where the therapist's concern is most valid.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The issue:
                </Word> Ana confided allegations of rape and violence. The therapist can report that Ana disclosed these
                allegations. The therapist CANNOT assert that these events occurred as fact, because she did not witness
                them and has not evaluated the accused.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Defamation risk:
                </Word> In the US, statements made in judicial proceedings generally receive "absolute privilege" or
                "qualified privilege" - meaning they cannot be the basis for a defamation lawsuit, even if false.
            </Paragraph>
            <Paragraph>Source: https://www.law.cornell.edu/wex/absolute_privilege</Paragraph>
            <Paragraph>Source: https://www.nolo.com/legal-encyclopedia/privileges-defenses-defamation-cases.html</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    However:
                </Word> This privilege typically applies to parties, witnesses, and attorneys in the proceeding. Whether it
                extends to a US therapist submitting a document to a Russian court is legally untested territory.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Safe language approach:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"Client reported that..." ✓</Line>
                <Line>"Client disclosed experiencing..." ✓</Line>
                <Line>"Client presented with symptoms consistent with trauma, including..." ✓</Line>
                <Line>"&#91;Defendant&#93; raped &#91;client&#93;" ✗ (asserts fact therapist did not witness)</Line>
                <Line>"&#91;Defendant&#93; is violent" ✗ (asserts fact about person therapist has not evaluated)</Line>
            </Paragraph>
            <Paragraph>Source: https://www.psychiatrictimes.com/view/legal-duty-therapists-third-parties</Paragraph>
            <Heading>6. NASW CODE OF ETHICS CONSIDERATIONS</Heading>
            <Paragraph>The NASW Code of Ethics (which governs LCSWs) states:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Social workers should comply with laws of both the jurisdiction where the client is located AND where
                    the social worker is located
                </Line>
                <Line>All ethical standards apply to interactions via technology</Line>
                <Line>Social workers should base conclusions on appropriate data and avoid inaccuracies</Line>
                <Line>Social workers' primary responsibility is to promote the well-being of clients</Line>
            </Paragraph>
            <Paragraph>Source: https://www.socialworkers.org/About/Ethics/Code-of-Ethics/Code-of-Ethics-English</Paragraph>
            <Paragraph>Source: https://socialwork.sdsu.edu/~resources/files/nasw-code-of-ethics2017.pdf</Paragraph>
            <Heading>7. RECOMMENDED APPROACH FOR THE DOCUMENT</Heading>
            <Paragraph>
                The therapist should frame the document as a <Word>
                    <Bold />
                    clinical treatment summary
                </Word> rather than a forensic evaluation. Structure:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Therapist credentials and relationship to client
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Period of treatment
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reason client sought treatment / presenting concerns
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Client's reported history
                    </Word> (using "client reported..." language)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Clinical observations and diagnosis
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Treatment provided
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Client's progress and current clinical status
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Avoid:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Conclusions about the defendant's character or fitness</Line>
                <Line>Recommendations about custody</Line>
                <Line>Assertions of fact about events the therapist did not witness</Line>
                <Line>Forensic opinions</Line>
            </Paragraph>
            <Heading>8. ADDITIONAL RESOURCES</Heading>
            <Paragraph>
                <List />
                <Line>
                    American Counseling Association guidance on dual roles:
                    https://www.counseling.org/docs/default-source/risk-management/ct-risk-management-november-2017.pdf
                </Line>
                <Line>
                    APA guidance on fact vs. expert witness:
                    https://www.apaservices.org/practice/business/legal/professional/qa
                </Line>
                <Line>
                    Ethical considerations for court-involved therapists:
                    https://drlarryfriedberg.net/the-court-involved-therapist-ethical-dilemmas-and-pitfalls/
                </Line>
                <Line>
                    Psychology Today tips for therapist testimony:
                    https://www.psychologytoday.com/us/blog/progress-notes/202011/9-tips-for-psychotherapists-providing-court-testimony
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line:
                </Word> The therapist's concerns are reasonable. Her safest path is to provide a factual treatment summary
                documenting what Ana reported and the clinical treatment provided, while avoiding forensic conclusions about
                the defendant or custody recommendations. She should contact her malpractice insurer to confirm coverage and
                may want to consult with a healthcare attorney familiar with international practice.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:12:37.278456Z"
        >
            <Origin>019c0906-a84b-7192-aa50-3516f9714fa1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay answer this briefly, because I want to send to the therapist without writing a book. In your
                recommended write-up, can she still express, through what Ana disclosed to her, the allegations of violence?
                The point of this is to have her provide corroborating evidence that this was reported to a professional.
                That's the point. Our lawyers don't expect her to convict anyone. They used these questions as a guide:
            </Paragraph>
            <Paragraph>
                · What prompted the client to seek therapy? · How did the therapist assess the client’s emotional and
                psychological state at the beginning of treatment? · Were any specific symptoms identified (e.g., stress,
                anxiety, sleep disturbances, behavioral changes)? · How does the therapist evaluate the client’s current
                psychological and emotional state? · Has any progress or change been observed? If so, in which areas? · Are
                there any ongoing concerns or recommendations for further support? · A brief explanation of how the family
                situation has affected the client’s condition.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:12:49.088513Z"
        >
            <Origin>019c0906-a84b-7192-aa50-35174a5ca506</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, absolutely.
                </Word>
            </Paragraph>
            <Paragraph>
                She can write exactly what Ana disclosed to her - that's the entire point of a fact witness. She just uses
                "client reported" language:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"Client reported experiencing physical violence from her partner"</Line>
                <Line>"Client disclosed incidents of &#91;specific allegations&#93; during sessions"</Line>
                <Line>"Client presented with symptoms consistent with trauma following reported domestic violence"</Line>
            </Paragraph>
            <Paragraph>
                This is not the therapist asserting these things happened - it's the therapist documenting what the client
                disclosed during treatment. That's completely within her scope and is exactly what your lawyers are asking
                for.
            </Paragraph>
            <Paragraph>
                The questions your lawyers provided are perfect - they're asking for a treatment summary, not a forensic
                evaluation. Every single question is something she can answer as a treating therapist:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Why client sought therapy ✓</Line>
                <Line>Initial assessment ✓</Line>
                <Line>Symptoms identified ✓</Line>
                <Line>Current state ✓</Line>
                <Line>Progress observed ✓</Line>
                <Line>Ongoing concerns ✓</Line>
                <Line>How family situation affected client ✓</Line>
            </Paragraph>
            <Paragraph>
                None of these require her to make claims about Maxim that she can't support. She's documenting Ana's
                treatment, not evaluating him.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:13:20.144115Z"
        >
            <Origin>019c0907-4fc6-7032-b67d-879c29cd3b9a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                And why exactly is this the safest option? From a legal perspective, with citations, briefly give your
                argument for that please
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:13:30.203211Z"
        >
            <Origin>019c0907-4fc6-7032-b67d-879d446eaa66</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Why "client reported" language is safest:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        It's within her ethical scope.
                    </Word> A treating therapist can testify about "patient's history as reported by the patient directly
                    and without interpretation" - this is explicitly permitted for fact witnesses.
                </Line>
            </Paragraph>
            <Paragraph>
                Source:
                https://memphisdivorce.com/dual-roles-in-custody-litigation-ethical-conflicts-with-therapeutic-and-forensic-roles/
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        It's not defamation.
                    </Word> Reporting what someone told you is not asserting it as fact. The therapist isn't claiming Maxim
                    did anything - she's documenting what her client disclosed during clinical treatment. Truth is an
                    absolute defense, and it IS true that Ana reported these things.
                </Line>
            </Paragraph>
            <Paragraph>Source: https://www.nolo.com/legal-encyclopedia/privileges-defenses-defamation-cases.html</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        It avoids the dual-role violation.
                    </Word> Therapists who make forensic conclusions about parties they haven't evaluated risk ethics
                    complaints and malpractice claims. Staying in the "fact witness" lane avoids this entirely.
                </Line>
            </Paragraph>
            <Paragraph>Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7683260/</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Judicial privilege likely applies.
                    </Word> Statements made by witnesses in judicial proceedings are generally absolutely privileged against
                    defamation claims - even if false, even if malicious.
                </Line>
            </Paragraph>
            <Paragraph>Source: https://www.law.cornell.edu/wex/absolute_privilege</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    In short:
                </Word> She's not saying "Maxim is a rapist." She's saying "My client reported experiencing rape." One is a
                factual claim she can't prove. The other is documentation of clinical disclosure - which is literally her
                job.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:16:23.277930Z"
        >
            <Origin>019c090a-1ac9-7658-bd8f-4c5e9516fa29</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Briefly, what is the likelihood that she gets sued for malpractice, and what are the different cases that
                she can submit as? Do you have precedent for legal issues? Give citations. Rule out expert witness. Can she
                submit as a coach and still provide a fact-based report?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:16:36.654912Z"
        >
            <Origin>019c090a-1ac9-7658-bd8f-4c5ff147c1f9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Likelihood of malpractice:
                </Word>
            </Paragraph>
            <Paragraph>Extremely low. For malpractice to succeed, someone would need to:</Paragraph>
            <Paragraph>
                <List />
                <Line>Sue her in a US court (Maxim would need US jurisdiction over her)</Line>
                <Line>Prove she breached the standard of care</Line>
                <Line>Prove damages resulted from that breach</Line>
            </Paragraph>
            <Paragraph>
                A Russian party suing a US therapist with no Russian assets or business presence faces near-impossible
                jurisdictional hurdles. US courts won't enforce Russian judgments. Her real risk is a licensing board
                complaint, which is mitigated by staying within fact witness scope.
            </Paragraph>
            <Paragraph>Source: https://www.gilmanbedigian.com/can-i-sue-for-international-medical-malpractice/</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Capacities she can submit as:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Fact Witness / Treating Therapist
                    </Word> - Documents what client reported, clinical observations, diagnosis, treatment. This is the
                    standard and safest option.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Coach
                    </Word> - No. "Coaching" is a legally distinct practice that explicitly excludes diagnosis, treatment,
                    and clinical assessment. If she's been providing therapy, she cannot retroactively reframe it as
                    coaching to avoid liability - that actually creates MORE risk.
                </Line>
            </Paragraph>
            <Paragraph>
                Source: https://theinsurancemaze.com/coaching/ Source:
                https://www.psychotherapynotes.com/therapy-and-coaching-differences/
            </Paragraph>
            <Paragraph>
                "You can't just keep doing therapy with a client and rebrand it as coaching in an attempt to bypass state
                licensing laws."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Precedent:
                </Word>
            </Paragraph>
            <Paragraph>
                Successful defamation suits against therapists for statements in court documents are "exceptionally rare"
                because of judicial privilege protections.
            </Paragraph>
            <Paragraph>
                Source:
                https://www.psychologytoday.com/us/blog/agens-scientiam/202412/can-clients-upset-with-evaluations-sue-for-defamation
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line:
                </Word> She submits as treating therapist / fact witness. Not coach. Not expert. That's the lane.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:33:36.427703Z"
        >
            <Origin>019c0919-de79-7315-b2be-a7bae120b79a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay let's write a letter to the legal team. It can start like this verbatim:</Paragraph>
            <Paragraph>Hi Team,</Paragraph>
            <Paragraph>
                Ana spoke to Megan, her therapist, who is also part of my network: I referred her. She has concerns about...
            </Paragraph>
            <Paragraph>Thank you, Doug</Paragraph>
            <Paragraph>
                Can you fill in the rest of that email with a professionally worded message? Also say that we know we need
                the report ASAP, so if there's any way we can get Megan a message addressing her concerns today, we would
                appreciate it
            </Paragraph>
            <Paragraph>
                Also add this link:
                https://docs.google.com/document/d/1lHHs7iGWYpiNrZOHsV8eEOgvgo43DhHSGVGqUMy08Ns/edit?tab=t.0#heading=h.vu0x7tix7elw
            </Paragraph>
            <Paragraph>
                It contains the attached into. You can say it is some info that I had AI generate to help catch me up.
                Perhaps they can speak to its accuracy
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-01-29T09:33:49.987441Z"
        >
            <Origin>019c0919-de79-7315-b2be-a7bbe4be6cc7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Hi Team,</Paragraph>
            <Paragraph>
                Ana spoke to Megan, her therapist, who is also part of my network: I referred her. She has concerns about
                submitting a document to a Russian court, specifically around malpractice liability and what she can
                ethically include given her role as a treating therapist rather than a forensic evaluator.
            </Paragraph>
            <Paragraph>
                From our research, it appears the safest path is for her to submit as a <Word>
                    <Bold />
                    fact witness / treating therapist
                </Word>, using language like "client reported" or "client disclosed" when documenting Ana's allegations.
                This allows her to include the substance of what Ana shared - including the violence - without asserting
                facts she didn't witness. This approach stays within her ethical scope under NASW guidelines and avoids
                dual-role conflicts.
            </Paragraph>
            <Paragraph>
                The questions you provided are well-suited for this format. She can answer all of them as a treating
                therapist.
            </Paragraph>
            <Paragraph>
                I've compiled some background research here:
                https://docs.google.com/document/d/1lHHs7iGWYpiNrZOHsV8eEOqvgo43DhHSGVGqUMy08Ns/edit?tab=t.0#heading=h.vu0x7tix7elw
            </Paragraph>
            <Paragraph>
                This is AI-generated research I used to get up to speed on the issues. Perhaps you can speak to its accuracy
                or add any clarifications from your experience with similar situations.
            </Paragraph>
            <Paragraph>
                We know we need this report as soon as possible. If there's any way we can get Megan a message addressing
                her concerns today, we would greatly appreciate it.
            </Paragraph>
            <Paragraph>Thank you, Doug</Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:34:47.143570Z"
        >
            <Origin>019c091a-f323-7698-9a6b-754ead2dfad1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No that's wrong. Megan might not do it. Your letter doesn't emphasize that. She needs to fel safe. Your not
                getting them to write her a letter that will help her understand potential legal ramifications and what she
                needs to know
            </Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:34:56.501572Z"
        >
            <Origin>019c091a-f323-7698-9a6b-754ff89d3671</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Hi Team,</Paragraph>
            <Paragraph>
                Ana spoke to Megan, her therapist, who is also part of my network: I referred her. She has concerns about
                submitting a document to a Russian court and is worried about potential malpractice liability. She mentioned
                possibly submitting in a "coaching capacity" to limit her exposure, which suggests she's uncertain about
                what she can safely say and in what role.
            </Paragraph>
            <Paragraph>
                Right now, she may not agree to provide the document at all unless her concerns are addressed.
            </Paragraph>
            <Paragraph>
                I've put together some AI-generated research on the legal and ethical considerations for US therapists
                submitting documents to foreign courts:
                https://docs.google.com/document/d/1lHHs7iGWYpiNrZOHsV8eEOqvgo43DhHSGVGqUMy08Ns/edit?tab=t.0#heading=h.vu0x7tix7elw
            </Paragraph>
            <Paragraph>
                Could you review this for accuracy and, if appropriate, send Megan a message that addresses her concerns
                directly? She needs to understand the potential legal ramifications, what role she would be submitting
                under, and what she can and cannot include. If she understands the boundaries and feels protected, I believe
                she will help.
            </Paragraph>
            <Paragraph>
                We know we need this report as soon as possible, so if there's any way to get her that message today, we
                would greatly appreciate it.
            </Paragraph>
            <Paragraph>Thank you, Doug</Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:54:00.852945Z"
        >
            <Origin>019c092c-8db9-7276-9bde-2d0970a1b28d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to Russian, then write one document that has English first and then Russian:</Paragraph>
            <Paragraph>Hi Team,</Paragraph>
            <Paragraph>
                Ana spoke to Megan, her therapist, who is also part of my network: I referred her. She has concerns about
                submitting a document to a Russian court and is worried about potential malpractice liability. She mentioned
                possibly submitting in a "coaching capacity" to limit her exposure, which suggests she's uncertain about
                what she can safely say and in what role.
            </Paragraph>
            <Paragraph>
                She very much wants to help Ana. But as it stands, she may not agree to provide the document at all unless
                her concerns are addressed, which are mostly concerned with malpractice. It would appear that she could use
                a legal opinion from the team that is requesting this document from her. Would it be possible for you to
                give her your perspective?
            </Paragraph>
            <Paragraph>
                I've put together some notes on the legal and ethical considerations for US therapists submitting documents
                to foreign courts for my own benefit. I sent it to Megan as well:
                https://docs.google.com/document/d/1lHHs7iGWYpiNrZOHsV8eEOqvgo43DhHSGVGqUMy08Ns/edit?tab=t.0#heading=h.vu0x7tix7elw
            </Paragraph>
            <Paragraph>
                Could you review this for accuracy and, if appropriate, send Megan a message that addresses her concerns
                directly? She needs to understand the potential legal ramifications, what role she would be submitting
                under, what she can and cannot include, and what would be most useful for Ana's case. If she understands the
                boundaries and feels protected, I believe she will help. Her full name is Megan Conti. She is a licensed
                clinical social worker (LCSW) and she has her doctorate in social work. She also serves as the department
                chair at a college on Long Island, so her formal title would be "Dr. Conti", though it should be noted that
                her doctorate is not a medical degree.
            </Paragraph>
            <Paragraph>
                We know we need this report as soon as possible, so if there's any way to get her that message today, we
                would greatly appreciate it. She would probably also benefit from having a deadline. I know you need this
                document ASAP for court next week.
            </Paragraph>
            <Paragraph>Thank you, Doug</Paragraph>
        </Message>
        <Message
            at="2026-01-29T09:54:18.335159Z"
        >
            <Origin>019c092c-8db9-7276-9bde-2d0a9863be24</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Hi Team,</Paragraph>
            <Paragraph>
                Ana spoke to Megan, her therapist, who is also part of my network: I referred her. She has concerns about
                submitting a document to a Russian court and is worried about potential malpractice liability. She mentioned
                possibly submitting in a "coaching capacity" to limit her exposure, which suggests she's uncertain about
                what she can safely say and in what role.
            </Paragraph>
            <Paragraph>
                She very much wants to help Ana. But as it stands, she may not agree to provide the document at all unless
                her concerns are addressed, which are mostly concerned with malpractice. It would appear that she could use
                a legal opinion from the team that is requesting this document from her. Would it be possible for you to
                give her your perspective?
            </Paragraph>
            <Paragraph>
                I've put together some notes on the legal and ethical considerations for US therapists submitting documents
                to foreign courts for my own benefit. I sent it to Megan as well:
                https://docs.google.com/document/d/1lHHs7iGWYpiNrZOHsV8eEOqvgo43DhHSGVGqUMy08Ns/edit?tab=t.0#heading=h.vu0x7tix7elw
            </Paragraph>
            <Paragraph>
                Could you review this for accuracy and, if appropriate, send Megan a message that addresses her concerns
                directly? She needs to understand the potential legal ramifications, what role she would be submitting
                under, what she can and cannot include, and what would be most useful for Ana's case. If she understands the
                boundaries and feels protected, I believe she will help. Her full name is Megan Conti. She is a licensed
                clinical social worker (LCSW) and she has her doctorate in social work. She also serves as the department
                chair at a college on Long Island, so her formal title would be "Dr. Conti", though it should be noted that
                her doctorate is not a medical degree.
            </Paragraph>
            <Paragraph>
                We know we need this report as soon as possible, so if there's any way to get her that message today, we
                would greatly appreciate it. She would probably also benefit from having a deadline. I know you need this
                document ASAP for court next week.
            </Paragraph>
            <Paragraph>Thank you, Doug</Paragraph>
            <Paragraph>Здравствуйте,</Paragraph>
            <Paragraph>
                Ана поговорила с Меган, своим психотерапевтом, которая также входит в мой круг знакомых: я её
                порекомендовал. У неё есть опасения по поводу подачи документа в российский суд, и она беспокоится о
                возможной ответственности за профессиональную халатность. Она упомянула возможность подачи документа в
                качестве «коуча», чтобы ограничить свою ответственность, что говорит о том, что она не уверена, что она
                может безопасно написать и в какой роли.
            </Paragraph>
            <Paragraph>
                Она очень хочет помочь Ане. Но на данный момент она может вообще не согласиться предоставить документ, если
                её опасения не будут развеяны, а они в основном связаны с профессиональной ответственностью. Похоже, ей было
                бы полезно получить юридическое мнение от команды, которая запрашивает у неё этот документ. Могли бы вы
                поделиться с ней своей точкой зрения?
            </Paragraph>
            <Paragraph>
                Я составил некоторые заметки о юридических и этических аспектах для американских психотерапевтов, подающих
                документы в иностранные суды, для собственного понимания. Я также отправил их Меган:
                https://docs.google.com/document/d/1lHHs7iGWYpiNrZOHsV8eEOqvgo43DhHSGVGqUMy08Ns/edit?tab=t.0#heading=h.vu0x7tix7elw
            </Paragraph>
            <Paragraph>
                Могли бы вы проверить это на точность и, если уместно, отправить Меган сообщение, которое напрямую ответит
                на её вопросы? Ей нужно понять возможные юридические последствия, в какой роли она будет подавать документ,
                что она может и не может включить, и что было бы наиболее полезно для дела Ани. Если она поймёт границы и
                почувствует себя защищённой, я уверен, что она поможет. Её полное имя — Меган Конти. Она лицензированный
                клинический социальный работник (LCSW) и имеет докторскую степень по социальной работе. Она также является
                заведующей кафедрой в колледже на Лонг-Айленде, поэтому её официальное обращение — «доктор Конти», хотя
                следует отметить, что её докторская степень не является медицинской.
            </Paragraph>
            <Paragraph>
                Мы знаем, что этот отчёт нужен как можно скорее, поэтому если есть возможность отправить ей это сообщение
                сегодня, мы будем очень признательны. Ей, вероятно, также было бы полезно знать крайний срок. Я знаю, что
                этот документ нужен вам срочно к суду на следующей неделе.
            </Paragraph>
            <Paragraph>Спасибо, Дуг</Paragraph>
        </Message>
        <Message
            at="2026-01-29T10:37:21.779154Z"
        >
            <Origin>019c0954-3db3-76e7-9ecf-111ecffcdb8f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Isi t possible to set the desktop version of Telegram to always show the date?&gt;</Paragraph>
        </Message>
        <Message
            at="2026-01-29T10:38:10.621298Z"
        >
            <Origin>019c0954-3db3-76e7-9ecf-111f234520b8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, Telegram desktop doesn't have a setting to always display the date on every message. By default it
                shows:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Date separators between messages from different days</Line>
                <Line>Timestamps when you hover over individual messages</Line>
            </Paragraph>
            <Paragraph>
                There's no built-in option to change this behavior. It's been a feature request from users for years, but
                Telegram hasn't implemented it.
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);
