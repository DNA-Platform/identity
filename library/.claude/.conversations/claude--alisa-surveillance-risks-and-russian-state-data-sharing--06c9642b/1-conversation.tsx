import { Bold, Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-18T07:16:45.795519Z"
        >
            <Origin>019c6f9b-b401-7bfa-8211-2bc481d80143</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Alisa is an echo competitor. I think yandex makes it. Ana’s is relatively old. Whats the chance - in the
                context of the surveillance capabilities of Max the state controlled telegram replacement - that alisa is
                using surveillance techniques and shares. It’s information with the Russian government.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:17:30.683344Z"
        >
            <Origin>019c6f9b-b401-7354-907a-59bed5b8a6b1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a highly relevant operational security question given Ana's situation. Let me pull current
                information on Yandex's Alisa and its relationship to Russian state surveillance.
            </Paragraph>
            <Action>Searched the web for “Yandex Alisa voice assistant Russian government surveillance FSB”</Action>
            <Action>Searched the web for “Yandex 2024 sale Russian investors state control data sharing”</Action>
            <Paragraph>
                Doug, this is an extremely important OPSEC question, and the evidence is strikingly direct. Here's the
                assessment:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The short answer: near-certainty of surveillance capability, high probability of active data sharing.
                </Word>
            </Paragraph>
            <Paragraph>
                The timing on this is remarkable. As of August 2025, the FSB formally demanded 24/7 round-the-clock remote
                access to Yandex's smart home system and Alisa voice assistant. A Moscow court fined Yandex 10,000 rubles
                for refusing to comply. That fine is laughably small — about $1,200 — which tells you something about how
                this game works. An information security specialist noted it was cheaper for companies to pay relatively
                small fines than share user data with government agencies.
            </Paragraph>
            <Paragraph>But here's the structural reality that matters for Ana's situation:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Post-2024 ownership means the game has changed.
                </Word> In July 2024, the Yandex split was finalized, with a Russian consortium of investors buying the bulk
                of the business — ending all foreign ownership and potentially tightening the Kremlin's control of the
                internet space in Russia. The Dutch parent (now Nebius Group) is completely out. The Russian operations are
                now under IJSC Yandex, an international joint-stock company incorporated in Russia and legally headquartered
                in Kaliningrad. The buyers include a fund ultimately owned by Lukoil and a former Gazprom executive — this
                is fully regime-adjacent capital now.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The data sharing trajectory is one-directional.
                </Word> In the first half of 2024 alone, Yandex received 36,540 requests from the Russian government to
                disclose user data — a 12% increase from the prior year. And that's the <Word>
                    <Emphasis />
                    disclosed
                </Word> number. In August 2024, Yandex was accused of collaborating with the FSB to direct users to fake
                websites for the Freedom of Russia Legion and Russian Volunteer Corps — honeypot operations to collect data
                on Russians sympathetic to Ukraine.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Alisa-specific risk assessment:
                </Word>
            </Paragraph>
            <Paragraph>
                Yandex claims Alisa only transmits voice data when activated by the wake word. Testing by the internet
                freedom project Roskomsvoboda in 2019 supported this claim. But that was 2019, under different ownership,
                before the FSB demand for 24/7 access. The relevant question isn't whether Yandex <Word>
                    <Emphasis />
                    voluntarily
                </Word> designed Alisa for surveillance — it's whether the FSB can compel access under SORM (Russia's lawful
                intercept framework) and the Yarovaya laws, which require telecom and internet companies to store
                communications and hand them over to security services.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For Ana's situation specifically, the threat model looks like this:
                </Word>
            </Paragraph>
            <Paragraph>
                If Maxim has an Alisa device or any Yandex smart home products, and his account is linked to the children or
                to Ana's old accounts, the FSB has either current access or a legal framework to compel access at any time.
                Given that this is a domestic case rather than a national security matter, the question is whether Maxim has
                connections that could trigger FSB interest in locating Ana — or whether the information is accessible
                through lower-level law enforcement channels that routinely use Yandex data.
            </Paragraph>
            <Paragraph>
                The broader Yandex ecosystem concern is potentially more important than Alisa alone: Yandex Maps, Yandex
                Navigator, Yandex Mail, Yandex Browser — any of these tied to Ana's old identity or still-active accounts
                could expose location data. If she ever logged into any Yandex service from Georgia, that's a potential data
                point.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line for operational security:
                </Word> Treat all Yandex products — Alisa, search, maps, mail, browser, everything — as fully compromised by
                Russian state surveillance. This isn't paranoia; the FSB is <Word>
                    <Emphasis />
                    openly demanding
                </Word> 24/7 access through court filings, and the post-2024 ownership structure removes the last
                institutional resistance to compliance. The question isn't whether Alisa <Word>
                    <Emphasis />
                    can
                </Word> share with the Russian government. It's whether there's any meaningful barrier left preventing it.
                The answer is: effectively none.
            </Paragraph>
            <Paragraph>
                Does Ana or the children have any residual connections to Yandex services that need to be audited?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:20:00.979070Z"
        >
            <Origin>019c6f9e-aee6-78cd-8e18-92b2bfe2af06</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The specific details of the case don’t matter we just don’t want a device that’s listening, right? We don’t
                want a device that knows we’re here and that we have the ability to leak location into the Russian court
                system at all. No amount of surveillance is tolerated so what date would she have bought this on for it to
                be safe versus not? It sounds like it’s not safe from a data perspective anyway but is this thing possibly
                just listening?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:20:18.378914Z"
        >
            <Origin>019c6f9e-aee6-7426-89fb-4e994543b25c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>There's no safe purchase date. The question is moot because of how these devices work.</Paragraph>
            <Paragraph>
                Every smart speaker — Alisa, Alexa, Google Home, all of them — is by definition always listening for its
                wake word. The processing question is where that listening happens and what gets transmitted. But the
                critical point for your situation is that <Word>
                    <Bold />
                    these devices receive firmware updates over the network
                </Word>. Yandex can change what the device does, what it records, and what it transmits at any time,
                silently, regardless of when it was purchased. The device she bought three years ago is not running the
                software it shipped with.
            </Paragraph>
            <Paragraph>
                So even if the 2019 Roskomsvoboda testing was accurate at the time — only transmitting after wake word
                activation — that tells you nothing about what the device is doing today. After the 2024 ownership transfer
                to regime-adjacent Russian investors, and especially after the FSB's 2025 court action demanding 24/7
                access, there is no basis for assuming the device behaves the way it once did.
            </Paragraph>
            <Paragraph>
                The practical recommendation is simple: <Word>
                    <Bold />
                    unplug it, don't just turn it off.
                </Word> If it has a battery, remove it. A device with a microphone, an internet connection, and a firmware
                update channel controlled by a company under active FSB pressure to provide round-the-clock access is not a
                device you want in a home whose location must remain undisclosed.
            </Paragraph>
            <Paragraph>
                And audit what Wi-Fi network it was connected to — if it ever connected from her current location, that IP
                address may already be logged on Yandex's servers.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:26:53.521417Z"
        >
            <Origin>019c6fa4-f900-7095-bf94-02c8efac82b8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It seems to need a plug. Is there any chance that it functions without one?</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-18T07:27:20.180226Z"
        >
            <Origin>019c6fa4-f901-781a-8f3e-11bea88cd2d1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a <Word>
                    <Bold />
                    Yandex Station Mini
                </Word> — looks like possibly the kids' edition given the color and stickers. Let me confirm the battery
                question.
            </Paragraph>
            <Action>Searched the web for “Yandex Station Mini battery internal built-in”</Action>
            <Paragraph>
                Good news on this specific point: the Yandex Station Mini is not equipped with a battery — it must be
                constantly connected to the power source. The newer Mini 3 Pro model supports an optional external battery
                accessory, but that's a separate magnetic attachment that would be visibly present. The one in your photo
                doesn't have one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Unplugged = dead.
                </Word> No power, no listening, no Wi-Fi connection, no data transmission. It's a brick right now.
            </Paragraph>
            <Paragraph>
                The remaining concern is what it already transmitted while it was plugged in and connected. If it was ever
                on Ana's current Wi-Fi network, Yandex has logged connection data — IP address, potentially geolocation
                derived from that IP, the Yandex account it was registered to, and whatever voice data was captured during
                use. That historical data is what matters now, and it's already on Yandex servers in Russia.
            </Paragraph>
            <Paragraph>
                Keep it unplugged. Don't plug it in to "check something." And don't factory reset it while connected — that
                would generate another connection event from the current location.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:29:48.691213Z"
        >
            <Origin>019c6fa7-a575-7fbc-a266-f65025dfd833</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Oy well I assume it knows Ana by account right? And she had to connect it to wifi. So data that is
                accessible in Russia connects her to georgia. What is the chance that this makes it into court now? Unlikely
                but her ex-husband knows about the device so there is some possibility that someone somewhere might think to
                check yandex. Still it would have to make it to custody court in some form
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:30:16.691091Z"
        >
            <Origin>019c6fa7-a575-7488-93e7-1064b8d1ba5c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me think through the actual chain of events that would need to happen, because you're right that the
                probability attenuates at each step.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What Yandex likely has:
                </Word> Ana's account, device registration, IP addresses from every connection, and those IPs resolve to
                Georgian ISPs. That's a location confirmation, not just a hint.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The chain to get it into court:
                </Word>
            </Paragraph>
            <Paragraph>
                First, Maxim would need to think of it. You say he knows about the device — so that's not zero. But based on
                what you've described of his cognitive state (substance abuse, self-representing, making tactical errors
                that corroborate Ana's allegations), this doesn't seem like someone executing sophisticated digital forensic
                strategy. This is the weakest link in the chain working in your favor.
            </Paragraph>
            <Paragraph>
                Second, even if he thought of it, he'd need a mechanism. As a private litigant in family court, he can't
                just call Yandex and ask. He could petition the court to request the data under Russian procedural rules —
                judges can issue requests for information from third parties. A family court judge <Word>
                    <Emphasis />
                    could
                </Word> do this, but it would require Maxim to articulate what he's looking for and why. It's not a standard
                move in Russian custody cases.
            </Paragraph>
            <Paragraph>
                Third, there's the FSB backdoor question — could he get someone to pull it informally? This depends entirely
                on his connections. For an ordinary person, no. If he has law enforcement contacts or family with FSB
                adjacency, the data could be obtained outside formal channels and then "laundered" into the proceedings
                through other means.
            </Paragraph>
            <Paragraph>
                Fourth, even if obtained, it would need to be introduced in a procedurally valid way. Informally obtained
                data showing "she's in Georgia" doesn't automatically become a court exhibit. Though in Russian courts,
                judges have wide discretion about what to consider, and once the information is <Word>
                    <Emphasis />
                    known
                </Word> — even informally — it shapes behavior regardless of admissibility.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Realistic probability assessment:
                </Word> I'd put this at low but non-trivial — maybe 5-15% that Yandex data specifically becomes a vector.
                The probability is higher that he already knows or suspects Georgia through other channels (social
                connections, the children mentioning things, financial traces), and lower that Yandex data is the thing that
                gets him there through formal court process.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real risk isn't court admissibility — it's informal knowledge.
                </Word> If Maxim or anyone around him queries Yandex data through any channel, formal or not, and confirms
                Georgia, that information could drive other actions: a formal search request through Russian-Georgian legal
                assistance channels, or worse, informal location efforts. The court filing would be a secondary concern
                compared to the operational security breach itself.
            </Paragraph>
            <Paragraph>
                The damage, to the extent it exists, is already done. The data is on Yandex servers. The question now is
                whether to factor this into your threat model as a known exposure rather than trying to remediate it. Does
                this change anything about the humanitarian status timeline or the information you're prepared to disclose
                at the February hearing?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:31:29.619273Z"
        >
            <Origin>019c6fa9-3105-7513-b51b-da06243912a9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I think I’m worried about him getting it because there’s a possible future reality where Ana refuses to
                share her location and there’s a search for her location. I think we’re early to that concern but it’s a
                potential future.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:31:44.647565Z"
        >
            <Origin>019c6fa9-3105-76d7-9e0b-17330db4f210</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right. And in that scenario the Yandex data isn't evidence in a custody proceeding — it's an investigative
                lead in a search. Different mechanism entirely, and one where formal admissibility doesn't matter at all.
            </Paragraph>
            <Paragraph>
                The good news is that this is several steps down a decision tree that hasn't forked yet. A court would first
                need to order disclosure, Ana would need to refuse, the court would need to escalate to some kind of
                enforcement or search mechanism, and <Word>
                    <Emphasis />
                    then
                </Word> someone would need to think to query Yandex. Each step requires prior steps to go badly.
            </Paragraph>
            <Paragraph>
                But you're right to map it now, because the mitigation is the same regardless of when the risk materializes:
                <Word>
                    <Bold />
                    the data already exists and can't be recalled.
                </Word> So this becomes a known quantity in your threat model — one of several potential channels through
                which Georgian location could be confirmed if someone actively looks. It sits alongside other exposure
                vectors like financial records, phone metadata, school enrollment, whatever digital footprint exists.
            </Paragraph>
            <Paragraph>
                The strategic implication is really about the February hearing posture. If the long-term plan already
                accounts for the possibility that location eventually becomes known — which the humanitarian status
                application itself will make official through Georgian government channels — then the Yandex exposure is
                less of an independent problem and more of a timing risk. You don't want it discovered <Word>
                    <Emphasis />
                    before
                </Word> protections are in place.
            </Paragraph>
            <Paragraph>
                That's the real question this raises: does this device's history compress the timeline on when you need
                Georgian humanitarian protection formalized, or is your existing timeline already accounting for this kind
                of exposure?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:34:26.134715Z"
        >
            <Origin>019c6fab-e17e-71c4-9173-b4e3170d838b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                He has filed a counter claim, looking for a status update from the children, and our lawyers are contesting
                that. And I had the guardianship visit while she was still in Russia and the kids were there and I think our
                lawyers had success getting the guardianship to submit their report even though Maxim called the
                guardianship and put the thought in their head that she is manipulative because she’s not letting him speak
                to the children. He seems to understand that he can talk about domestic violence in court, and that it not
                be a reason why he should be denied speaking rights. But we’re handling the narrative that him speaking to
                the children as bad for them and it is. If the guardianship report is accepted, like I think it will be then
                that of the house us to have the cover of there being no reason to suspect that Ana and the kids are even
                out of Russia, which means the counterclaim to find them might not work and that will steer this case away
                from an international search. But if there comes a point where we need to disclose and we decide not to, I
                think we would get held in contempt of court, and he would have a much easier time compelling the court to
                demand the location of the kids. You can fact check those legal insights because I’m not sure about them.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:35:32.803384Z"
        >
            <Origin>019c6fab-e17e-7d3b-b82e-c0994ebca075</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me check the procedural questions — particularly around contempt and compelled disclosure in Russian
                family courts.
            </Paragraph>
            <Action>
                Searched the web for “российский семейный суд розыск детей неисполнение определения суда раскрытие
                местонахождения”
            </Action>
            <Action>
                Searched the web for “российский суд неисполнение определения суда раскрытие адреса ответчика семейное дело
                штраф последствия”
            </Action>
            <Paragraph>
                Your legal reasoning is largely correct but needs some refinement on the mechanisms. Here's the fact-check:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The guardianship report as cover — correct and strategically important.
                </Word> If the opeka conducted their inspection while Ana was physically present at her registered Russian
                address and the report reflects that, the court record shows the children living in Russia with their
                mother. There's no procedural trigger for anyone to question that unless Maxim affirmatively raises it. Your
                read is right — if his counterclaim to get a "status update" on the children gets rejected, and the
                guardianship report is accepted, the court has no reason to think this is an international case at all. That
                keeps it in a completely different procedural lane.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On "contempt" — the mechanism is different than you're framing it, but the dynamic is correct.
                </Word> Russia doesn't have Anglo-style contempt of court. What it has is a graduated enforcement
                escalation. Under Article 5.35 of the Administrative Code, parents who hide children's location or refuse to
                comply with court orders regarding children face administrative liability — but the fines are trivially
                small. The real escalation mechanism is Article 120 of the Code of Civil Procedure, which provides that when
                the respondent's whereabouts are unknown, the judge is obligated to order a search in cases involving
                alimony claims — and critically, also in cases involving children illegally removed or retained under
                international treaties. The enforcement search for a child is conducted by bailiffs (судебные приставы)
                during enforcement proceedings, but only after other enforcement measures have failed to establish the
                child's location.
            </Paragraph>
            <Paragraph>
                So the sequence you're describing is procedurally accurate even if the terminology differs: court orders
                disclosure → Ana doesn't comply → small administrative fines → court or Maxim petitions for formal search
                (розыск) → bailiffs are authorized to actively locate the children. That's where it gets dangerous because
                the bailiff-conducted search involves investigative measures aimed at establishing the location of the
                child. Once bailiffs are formally tasked with finding the children, they have access to state databases —
                and that's where Yandex data, IP traces, financial records, and everything else becomes actionable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    However — and this is important — the practical reality heavily favors you.
                </Word> In 2020, bailiffs initiated 109,000 search cases total, and only 139 of those were for children.
                Legal experts attribute this to the massive workload of the bailiff service and low prioritization. The
                enforcement apparatus for locating children in custody disputes is, as a practical matter, weak and
                overwhelmed. The absence of effective search mechanisms allows parents to conceal a child's location for
                extended periods. This is a system that struggles to find children <Word>
                    <Emphasis />
                    within Russia
                </Word> — cross-border searches add another layer of difficulty.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your strategic read on the decision tree is sound.
                </Word> The critical fork is whether the court ever has reason to ask where the children are. If the
                guardianship report is accepted and Maxim's counterclaim to locate them fails, you stay upstream of the
                entire enforcement cascade. The court proceeds on the assumption the children are in Russia, Ana
                participates through counsel, and there's no trigger for Article 120 search proceedings.
            </Paragraph>
            <Paragraph>
                The risk scenario you're mapping — where location becomes a live issue and you face the choice of disclosing
                versus formal non-cooperation — is real but several procedural steps away. And the Yandex device data
                becomes relevant only if someone gets deep enough into a formal search to start querying technology
                companies, which is the tail end of an already unlikely sequence.
            </Paragraph>
            <Paragraph>
                One thing worth confirming with your legal team: whether Maxim's counterclaim is framed as a request for
                <Word>
                    <Emphasis />
                    порядок общения
                </Word> (communication/visitation order) versus an actual request to <Word>
                    <Emphasis />
                    establish the children's location
                </Word>. Those are procedurally different, and the first can be contested on best-interest-of-the-child
                grounds without ever touching the location question.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:38:30.989463Z"
        >
            <Origin>019c6faf-9f93-725c-9948-cae88f62afae</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, I heard the technically kidnapping children in Russia is not illegal under Russian law, but it’s
                actually denying the father of the right to communicate. That is the thing that is the problem is that
                correct?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:38:58.765919Z"
        >
            <Origin>019c6faf-9f93-728e-85cb-6868325f87ff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Россия похищение ребенка родителем не уголовное преступление статья 126 исключение”
            </Action>
            <Paragraph>That's correct, and the legal framework is quite clear on this.</Paragraph>
            <Paragraph>
                Under Article 126 of the Criminal Code, a parent retaining their own child without the other parent's
                consent is not recognized as kidnapping, since the child is with their legal representative, who cannot be
                the subject of this crime. The established case law position is explicit: cases where a parent takes their
                own child from the other parent or from persons to whom the child was lawfully entrusted, and retains the
                child without the other parent's consent — if these actions are taken in the child's interests, including
                mistakenly perceived interests — do not constitute the offense under Article 126. Criminal cases on such
                facts are, as a rule, not initiated.
            </Paragraph>
            <Paragraph>
                So there's no criminal exposure for Ana. Police refuse to declare the minor missing, and there is no
                possibility of prosecution under Article 126. A Duma deputy called this gap "interesting" and acknowledged
                the problem — a child is factually taken, but legally everything is in order.
            </Paragraph>
            <Paragraph>
                The actual legal vulnerability is exactly where you identified it — it's administrative, not criminal. Under
                Article 5.35 Part 2 of the Administrative Code, parents face administrative liability for: not transferring
                a child to the other parent when a court order requires it; retaining a child beyond a court-ordered
                visitation period; or taking a child and concealing their location — whether or not a court order exists
                regarding the child's residence.
            </Paragraph>
            <Paragraph>
                That last clause is the one that matters. You don't even need a final custody order for Maxim to invoke it —
                concealing the children's location from the other parent who has equal parental rights is itself the
                administrative violation. The penalties are small (fines), but the real consequence is that it becomes the
                predicate for escalation to formal search proceedings under Articles 65 and 120.
            </Paragraph>
            <Paragraph>
                So the strategic picture is: Ana cannot be charged with kidnapping her own children. But she <Word>
                    <Emphasis />
                    can
                </Word> be found to be denying Maxim his communication rights, and that denial — once formally established —
                is the lever that could trigger a court-ordered search. Which brings us back to why your guardianship report
                strategy is so important: if the court has no reason to believe the children are inaccessible, Maxim's
                communication rights claim has to be litigated on the merits (is contact with him harmful to the children?)
                rather than as a location/access problem. That's the terrain you want to fight on.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:40:59.510567Z"
        >
            <Origin>019c6fb1-e32c-7397-9b0a-1093c87af48a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But of course, allowing for communication is more or less the same as revealing location so if you feel
                unsafe having the father know where you are, then it’s unsafe having him talk to children, and I can see how
                this all funnels into him having the ability to do a search even when he’s dangerous
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T07:41:25.703710Z"
        >
            <Origin>019c6fb1-e32c-79f0-a128-f28736aec96c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right. You've identified the structural catch-22, and it's worth naming it precisely because this is exactly
                the kind of thing that belongs in the humanitarian status documentation.
            </Paragraph>
            <Paragraph>
                The logic is circular by design, even if not by intent: Russian law gives both parents equal communication
                rights. Refusing communication is an administrative violation that can trigger enforcement. But
                communication with a dangerous parent inherently compromises the safety that fleeing was meant to create —
                not just because a child might say "we live near &#91;landmark&#93;" or a video call reveals a Georgian
                street sign, but because <Word>
                    <Emphasis />
                    any
                </Word> communication channel is a metadata channel. A phone number, a call routing path, an IP address, a
                time zone inference from when the child is awake.
            </Paragraph>
            <Paragraph>
                So the parent who fled domestic violence faces a choice the law doesn't acknowledge: comply with
                communication rights and lose the safety that flight provided, or maintain safety and accumulate
                administrative violations that eventually justify a formal search. Either path leads the dangerous parent
                back to the children. The system funnels toward disclosure regardless of which branch you take.
            </Paragraph>
            <Paragraph>
                This is the post-separation coercive control pattern operating through institutional architecture rather
                than through individual action. Maxim doesn't need to be sophisticated. He doesn't need to think about
                Yandex data or IP addresses. He just needs to assert his statutory communication rights, and the legal
                system does the rest. The 2017 decriminalization of domestic violence makes this worse because there's no
                criminal record to counterbalance the communication claim — no conviction that would cause a judge to
                question whether this father's "right to communicate" should be weighed against documented danger.
            </Paragraph>
            <Paragraph>
                This is actually one of your strongest arguments for Georgian humanitarian protection: the Russian legal
                framework <Word>
                    <Emphasis />
                    structurally cannot
                </Word> protect Ana and the children because the mechanism for parental communication and the mechanism for
                locating a fleeing parent are functionally identical. It's not that the Russian court might rule badly —
                it's that the legal architecture itself makes protection impossible even if every individual actor behaves
                properly within their role.
            </Paragraph>
            <Paragraph>
                That belongs in the humanitarian filing as a systemic argument, not just a case-specific one.
            </Paragraph>
        </Message>
    </Chapter>
);
