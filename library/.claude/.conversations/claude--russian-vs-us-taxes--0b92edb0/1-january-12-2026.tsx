import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Title>[[ 12 January 2026 ]]</Title>
        <Message
            at="2026-01-12T06:08:29.815832Z"
        >
            <Origin>019bb0d1-fa15-71d4-8913-e8e872aa4217</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                TON and MON - are they illegal to own in the United States? From a tax perspective, with paying for them in
                Russia be easier than in the US? My friend ends up, spending a lot of his time paying taxes on his crypto
                holdings
            </Paragraph>
            <Paragraph>
                TON is the open network, formerly telegram open platform, and MON is Monad, a very nee cryptocurrency
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:08:43.665219Z"
        >
            <Origin>019bb0d1-fa15-71d4-8913-e8e974d543d1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I can address both questions directly.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Legality of Ownership
                </Word>
            </Paragraph>
            <Paragraph>
                Neither TON nor Monad (MON) are illegal to own in the United States. There's no US law prohibiting
                individual ownership of these cryptocurrencies.
            </Paragraph>
            <Paragraph>
                TON has a complicated regulatory history - the SEC blocked Telegram's 2018-2020 token sale (the GRAM
                tokens), but that was about the <Word>
                    <Emphasis />
                    sale
                </Word> being an unregistered securities offering, not about ownership being illegal. The current TON
                network is operated by the independent TON Foundation, and holding Toncoin is perfectly legal.
            </Paragraph>
            <Paragraph>
                Monad is a new Layer 1 blockchain (EVM-compatible, focused on parallel execution for high throughput). Their
                token isn't even fully launched yet - it's still in testnet/pre-mainnet phase. No regulatory action against
                it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tax Treatment: Russia vs US
                </Word>
            </Paragraph>
            <Paragraph>Russia actually has more favorable crypto tax treatment in several ways:</Paragraph>
            <Paragraph>
                <List />
                <Line>Russia taxes crypto gains at 13-15% personal income tax rates (15% above certain thresholds)</Line>
                <Line>
                    The US taxes crypto as property, meaning short-term gains face ordinary income rates up to 37%, and
                    long-term gains face 0-20% depending on bracket
                </Line>
                <Line>
                    The US has extensive reporting requirements - every swap, spend, or conversion is a taxable event
                </Line>
                <Line>Russia's enforcement and reporting infrastructure is less developed</Line>
            </Paragraph>
            <Paragraph>
                However, for a US person, <Word>
                    <Emphasis />
                    where
                </Word> you pay isn't really a choice - US citizens owe taxes on worldwide income regardless of where
                transactions occur. Your friend can't simply "pay in Russia instead" unless they renounce citizenship or
                establish non-resident status through complex structuring.
            </Paragraph>
            <Paragraph>
                The compliance burden your friend experiences is real - US crypto tax reporting is genuinely onerous. That's
                a cost of operating in US jurisdiction, not something geography alone solves.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:16:42.343266Z"
        >
            <Origin>019bb0d9-7e3b-7284-80dd-0ef062ccf70b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No but I have a Russian fiance and she can execute trades. It can be her financial responsibility. So we
                have some flexibility
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:16:53.148467Z"
        >
            <Origin>019bb0d9-7e3b-7284-80dd-0ef142a48067</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I need to be direct with you here, Doug.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you're describing is likely tax evasion, not tax avoidance.
                </Word>
            </Paragraph>
            <Paragraph>If you're a US person and you:</Paragraph>
            <Paragraph>
                <List />
                <Line>Provide the capital</Line>
                <Line>Direct or influence the trading decisions</Line>
                <Line>Benefit from the gains</Line>
            </Paragraph>
            <Paragraph>
                Then those are your gains for US tax purposes, regardless of whose name is on the account. The IRS looks at
                economic substance, not just legal form. Having your fiancée execute trades on your behalf or with your
                money doesn't transfer the tax obligation - it just adds potential charges for structuring and failure to
                report foreign financial accounts (FBAR violations carry penalties up to $100k+ per violation or 50% of
                account value).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The specific risks:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    FBAR reporting is required for any US person with signature authority or financial interest in foreign
                    accounts exceeding $10k
                </Line>
                <Line>FATCA requires foreign institutions to report US persons' accounts</Line>
                <Line>Once you're married, commingled finances become even more scrutinized</Line>
                <Line>
                    Russia and the US don't have a tax treaty that would help here, and current sanctions environment means
                    Russian financial activity by US persons gets extra attention
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What actually works:
                </Word>
            </Paragraph>
            <Paragraph>
                If your friend (or you) wants to reduce crypto tax burden legally, the options are things like: opportunity
                zone investments, tax-loss harvesting, holding periods for long
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:17:11.797154Z"
        >
            <Origin>019bb0d9-f148-75fa-976c-078b88b453d2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Right now we’re not married so it isn’t. And I can give tax free gifts</Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:17:27.466776Z"
        >
            <Origin>019bb0d9-f148-75fa-976c-078c3dd23a88</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that the gift tax annual exclusion exists ($18,000 for 2024, $19,000 for 2025), and gifts to
                non-US persons aren't subject to the same reporting the recipient would face if they were US persons.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But here's where it still gets complicated:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The gift must be complete and unconditional.
                </Word> If you give her $18k, it has to genuinely be <Word>
                    <Emphasis />
                    hers
                </Word> - no understanding that she'll trade it for your benefit, no expectation of return, no directing
                what she does with it. If there's an implicit or explicit arrangement that she's investing on your behalf,
                the IRS can recharacterize this as an agency relationship, and the gains are yours.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step transaction doctrine.
                </Word> If you gift money, she buys crypto, gains accrue, and then wealth flows back to you (through
                marriage, shared expenses, gifts back, etc.), the IRS can collapse these steps and treat it as what it
                substantively is.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Once you're married,
                </Word> the calculus changes significantly. Commingled finances, joint benefit from assets, and spousal
                attribution rules come into play.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The practical reality:
                </Word>
            </Paragraph>
            <Paragraph>
                If she independently decides to invest her own gift money in crypto, and those are genuinely her assets and
                her decisions, that's her business. But if you're architecting a structure specifically to avoid US tax on
                gains you economically benefit from, you're in sketchy territory.
            </Paragraph>
            <Paragraph>
                I'm not a tax attorney - this is genuinely worth a consultation with one who specializes in international
                tax and crypto, because the downside risks (penalties, interest, potential criminal exposure for willful
                evasion) are significant relative to the tax savings.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:18:48.821356Z"
        >
            <Origin>019bb0db-6c3c-749f-a1e8-bc4165f7d768</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right it is. We are partners. She’s not giving it back. Don’t be cynical about love. I trust her. Anyways, I
                just want to learn. And surely we don’t pay double taxes as a couple when married. How do we figure out how
                to pay taxes as a married couple with different citizenship
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:19:00.293724Z"
        >
            <Origin>019bb0db-6c3c-749f-a1e8-bc42007258d0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, I apologize for the cynical framing - that was uncharitable. Partners build wealth together,
                and there's nothing inherently suspicious about that.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The core question: married filing with different citizenships
                </Word>
            </Paragraph>
            <Paragraph>This is actually a well-defined area of tax law, and you have real choices:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: She remains a non-resident alien
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>You file as "Married Filing Separately"</Line>
                <Line>She only owes US tax on US-source income</Line>
                <Line>Her foreign income and foreign asset gains remain outside US tax jurisdiction</Line>
                <Line>Downside: you lose some deductions and pay higher rates than joint filers</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: She elects to be treated as a US resident for tax purposes
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>You can file jointly, getting better rates and deductions</Line>
                <Line>
                    But then her <Word>
                        <Emphasis />
                        worldwide
                    </Word> income becomes US-taxable
                </Line>
                <Line>This is a formal election (Section 6013(g)) and has long-term implications</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 3: She becomes a green card holder or citizen
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Then she's a US person regardless, with worldwide taxation</Line>
                <Line>This happens automatically with residency, not just by choice</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The strategic question for your situation:
                </Word>
            </Paragraph>
            <Paragraph>
                If she has or builds significant crypto holdings in her own name before becoming a US tax resident, those
                assets and their cost basis are established outside the US system. Gains that accrued before she becomes a
                US resident aren't US-taxable. Only gains <Word>
                    <Emphasis />
                    after
                </Word> she becomes a US tax person are.
            </Paragraph>
            <Paragraph>This is legitimate tax planning, not evasion.</Paragraph>
            <Paragraph>
                Want me to search for specifics on the Section 6013(g) election or the residency timing rules?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:26:17.532656Z"
        >
            <Origin>019bb0e2-4517-74c6-90ce-f5141afc2169</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Interesting. So obtaining a green card means she no longer owes taxes to Russia? Because she has kids. To
                move to America means to get everyone in. So getting a green card for her - assuming we’re married - means
                getting a way for my step kids, her kids, to come into the US. So we have to coordinate this well
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:26:28.608491Z"
        >
            <Origin>019bb0e2-4517-74c6-90ce-f51596c86379</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is genuinely complex and worth getting right. Let me clarify the tax piece and then the immigration
                coordination.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tax residency isn't either/or
                </Word>
            </Paragraph>
            <Paragraph>
                Getting a US green card doesn't automatically end her Russian tax obligations. She could become a <Word>
                    <Bold />
                    dual tax resident
                </Word> - owing taxes to both countries.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russia's rules:
                </Word> Russia taxes tax residents on worldwide income. Tax residency is based on physical presence (183+
                days in Russia during a calendar year). So if she gets a green card but spends most of the year in Russia,
                Russia still considers her a tax resident.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The US rules:
                </Word> Green card holders are US tax residents regardless of where they live, taxed on worldwide income.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The risk:
                </Word> Without careful planning around the transition year and physical presence, there's a window where
                both countries claim taxing rights on the same income. The US-Russia tax treaty is limited and currently
                under strain given geopolitical tensions.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The immigration coordination
                </Word>
            </Paragraph>
            <Paragraph>You're right that this needs to be sequenced carefully. If you're married:</Paragraph>
            <Paragraph>
                <List />
                <Line>She can get a green card through marriage (IR1/CR1 visa process)</Line>
                <Line>Her unmarried children under 21 can be included as derivative beneficiaries</Line>
                <Line>The whole family can come together on one petition</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The strategic sequencing question:
                </Word>
            </Paragraph>
            <Paragraph>
                Do you want me to search for current timelines on spousal green card processing with derivatives, and
                separately look into the mechanics of establishing her crypto cost basis before she becomes a US tax person?
                Those two timelines need to align.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:27:40.806994Z"
        >
            <Origin>019bb0e3-8a51-7027-81cc-a519ee6d2718</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Woah I don’t like two countries having a claim to taxes. How to avoid this??</Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:27:52.713588Z"
        >
            <Origin>019bb0e3-8a51-7027-81cc-a51af4be56eb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The good news is this is a solved problem - it just requires intentional planning around the transition.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The core principle: clean break on tax residency
                </Word>
            </Paragraph>
            <Paragraph>
                You want her to stop being a Russian tax resident <Word>
                    <Emphasis />
                    before
                </Word> or <Word>
                    <Emphasis />
                    simultaneously with
                </Word> becoming a US tax resident. Not after.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How Russia determines tax residency:
                </Word>
            </Paragraph>
            <Paragraph>
                It's straightforward - 183+ days of physical presence in Russia within a calendar year. Fall below that, and
                she's not a Russian tax resident for that year. Russia doesn't have citizenship-based taxation like the US
                does.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The clean transition:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Choose a transition year
                    </Word> - ideally a calendar year where she'll spend fewer than 183 days in Russia
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        She leaves Russia before crossing the 183-day threshold
                    </Word> - say, by late June if starting January 1
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Green card is obtained/activated in that same year
                    </Word> - she becomes a US tax resident
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Result:
                    </Word> For that year and going forward, she's only a US tax resident
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What about the kids?
                </Word>
            </Paragraph>
            <Paragraph>
                Same logic applies. If they're minors, their tax residency typically follows hers, and they likely have
                minimal independent income anyway.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The crypto basis question:
                </Word>
            </Paragraph>
            <Paragraph>
                Any crypto she holds <Word>
                    <Emphasis />
                    before
                </Word> becoming a US tax resident has a cost basis established at fair market value on the date she becomes
                a US resident. Pre-residency gains are not US-taxable. This is called the "step-up" for new residents.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you actually need:
                </Word>
            </Paragraph>
            <Paragraph>
                An international tax attorney who can help you map the specific timeline - visa processing, physical
                presence tracking, and asset positioning. This is standard work for them.
            </Paragraph>
            <Paragraph>
                Want me to search for how long the CR1 spousal visa process currently takes? That's your binding constraint
                for timeline planning.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:30:09.585936Z"
        >
            <Origin>019bb0e5-cf83-708c-a275-02beafe215f3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay i get the crypto basis. Now how about the us green card? I am worried that it will be hard to
                coordinate her and her kids
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:30:24.858110Z"
        >
            <Origin>019bb0e5-cf83-708c-a275-02bf7d835ec6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me search for current processing timelines and the mechanics of including her children.
            </Paragraph>
            <Action>Searched the web for “CR1 spousal visa processing time 2024 2025 derivative children”</Action>
            <Paragraph>This is important - I found something you need to know:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The kids cannot be included on your spousal visa petition.
                </Word>
            </Paragraph>
            <Paragraph>
                A child does not receive derivative status in an immediate relative (IR) petition. This is different from
                the family second preference (F2) petition where a child is included in his/her parent's F2 petition.
            </Paragraph>
            <Paragraph>This means you have two options:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: File separate petitions for stepchildren
                </Word>
            </Paragraph>
            <Paragraph>
                Once you're married, you can file separate I-130 petitions for each stepchild. They'd be processed as
                "immediate relatives" (IR-2 category) but on their own timelines. This could mean the family doesn't arrive
                together.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: She gets her green card first, then petitions for the kids
                </Word>
            </Paragraph>
            <Paragraph>
                Once she's a permanent resident, she could potentially petition for unmarried children under 21 - but this
                falls into a different preference category with longer waits and annual caps.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The timeline reality:
                </Word>
            </Paragraph>
            <Paragraph>
                The timeline usually breaks down as follows: USCIS review: 13 to 18 months. NVC review: 2 months. Visa
                issued: in 2 weeks.
            </Paragraph>
            <Paragraph>
                So you're looking at roughly 15-20 months for her, and potentially similar or longer for separate petitions
                for the kids.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The coordination challenge:
                </Word>
            </Paragraph>
            <Paragraph>
                If you want everyone to arrive together (or close together), you'd file the I-130 for her AND separate
                I-130s for each child simultaneously right after marriage. They'd process in parallel but may not align
                perfectly.
            </Paragraph>
            <Paragraph>
                Do you want me to search specifically for stepchild petition requirements and whether filing simultaneously
                helps keep timelines aligned?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:30:49.191031Z"
        >
            <Origin>019bb0e6-6a3e-75ef-b47d-501c1148be82</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>We can’t leave the children</Paragraph>
        </Message>
        <Message
            at="2026-01-12T06:31:06.042755Z"
        >
            <Origin>019bb0e6-6a3e-75ef-b47d-501d5b473518</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Completely understood - the family moves together or not at all. That's the right priority.
            </Paragraph>
            <Paragraph>Let me search for how to coordinate stepchild petitions so everyone can arrive together.</Paragraph>
            <Action>Searched the web for “I-130 stepchild petition simultaneous spouse filing arrive together”</Action>
            <Paragraph>
                Good news - there's a clear path, and the key constraint is timing around the children's ages.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The critical rule:
                </Word>
            </Paragraph>
            <Paragraph>
                A stepchild can be considered an immediate relative, but only if the US citizen's marriage to the child's
                parent occurred before the child's 18th birthday.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So the question is: how old are her children?
                </Word>
            </Paragraph>
            <Paragraph>
                If they're all under 18 when you get married, you can file separate I-130 petitions for your wife AND each
                child simultaneously as "immediate relatives." Immediate relatives have no quota limits and process in
                parallel.
            </Paragraph>
            <Paragraph>
                If you are a U.S. citizen, your spouse and unmarried children under 21 years old will have immigrant visas
                immediately available to them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The filing strategy for keeping everyone together:
                </Word>
            </Paragraph>
            <Paragraph>
                If you are a U.S. Citizen petitioning for your spouse, you must also submit a separate Form I-130 for each
                child. When you submit Form I-130 for each child, you must include a photocopy of your receipt notice for
                the Form I-130 you filed for your spouse.
            </Paragraph>
            <Paragraph>
                So you file for her first, get the receipt, then immediately file for each child referencing that receipt.
                The cases get linked and processed together.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If any child is 18 or older at marriage:
                </Word>
            </Paragraph>
            <Paragraph>
                That child cannot qualify as your stepchild for immigration purposes. They'd need to wait for their mother
                to get a green card, then she petitions for them in a preference category with potential years-long
                backlogs.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line:
                </Word> If you want everyone to arrive together, get married before the oldest child turns 18. What are
                their ages?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:41:53.683595Z"
        >
            <Origin>019bb127-7c5a-769c-bd78-2f80ae92e6d0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, the children are eight and 10 years old. We are normal family with kids. OK so I file I-130 and make
                the two children dependent on the one for their mother, so the US understands that there’s a dependency.
                That triggers, the joint processing as long as it happens fast enough.
            </Paragraph>
            <Paragraph>
                And then what does it take to get them? Are there interviews or background research? What do we need to file
                the form? How long does the process take? Do research because Trump’s America is not the same as other
                America’s, but these are also Russian children. I hate to be cynical, but while Russians are disliked
                geopolitically, they are not brown skinned and ICE isn’t deporting Canadiens
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:42:28.607618Z"
        >
            <Origin>019bb127-7c5a-769c-bd78-2f8174e9dcc2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to think about the current political context. Let me search for what's actually happening with
                Russian immigration cases under the current administration.
            </Paragraph>
            <Action>Searched the web for “Russian immigrant visa processing 2025 Trump administration delays”</Action>
            <Action>Searched the web for “Russia travel ban 2025 Trump 19 countries list”</Action>
            <Paragraph>
                Good news on the travel ban front - let me search for the specific process and requirements for the I-130.
            </Paragraph>
            <Action>Searched the web for “I-130 spouse stepchild requirements documents interview 2025”</Action>
            <Paragraph>Here's the complete picture:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russia is NOT on the travel ban list.
                </Word> The 39 countries with full or partial restrictions are Afghanistan, Burma, Chad, Republic of the
                Congo, Equatorial Guinea, Eritrea, Haiti, Iran, Libya, Somalia, Sudan, Yemen, Burundi, Cuba, Laos, Sierra
                Leone, Togo, Turkmenistan, Venezuela, Burkina Faso, Mali, Niger, South Sudan, Syria, Angola, Antigua and
                Barbuda, Benin, Cote d'Ivoire, Dominica, Gabon, The Gambia, Malawi, Mauritania, Nigeria, Senegal, Tanzania,
                Tonga, Zambia and Zimbabwe.
            </Paragraph>
            <Paragraph>
                Your cynical read is correct - the ban targets predominantly African, Middle Eastern, and Caribbean nations.
                Russia isn't on it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Process - Step by Step:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 1: Get Married (before oldest child turns 18)
                </Word> With kids at 8 and 10, you have plenty of runway.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2: File I-130 Petitions
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>File I-130 for your wife first</Line>
                <Line>
                    When you submit Form I-130 for each child, you must include a photocopy of your receipt notice for the
                    Form I-130 you filed for your spouse.
                </Line>
                <Line>This links the cases together</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 3: Documents Required
                </Word>
            </Paragraph>
            <Paragraph>
                For stepchildren: If your petition is based on a stepparent-stepchild relationship, you must file your
                petition with a copy of the marriage certificate of the stepparent to the child's natural parent showing
                that the marriage occurred before the child turned 18 years of age, copies of documents showing that any
                prior marriages were legally terminated (if applicable), and a copy of the stepchild's birth certificate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 4: USCIS Review (12-18 months currently)
                </Word> Return of Extreme Vetting – Broader background checks, longer inquiries, and additional forms for
                both immigrant and nonimmigrant visas. Applicants should expect to provide more personal, financial, and
                professional documentation than before.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 5: National Visa Center (1-2 months)
                </Word> After USCIS approval, case moves to NVC for document collection and fee payment.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 6: Consular Interview in Russia
                </Word> For stepchildren residing outside the United States, Consular Processing is the required path. This
                means that after the I-130 approval, they must apply for an immigrant visa at a U.S. Embassy or Consulate in
                their home country.
            </Paragraph>
            <Paragraph>
                The interview includes your wife AND the children. They'll need medical exams, and you'll need to show you
                can financially support them (Affidavit of Support - income must be 125% of federal poverty line for
                household size).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 7: Visa Issuance and Travel
                </Word> Once approved, they have 6 months to enter the US.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Realistic Timeline in Trump's America:
                </Word>
            </Paragraph>
            <Paragraph>
                Expect 18-24 months total, possibly longer with "enhanced vetting." Green card processing times increased
                under the Trump administration due to stricter immigration policies and additional vetting. Family-based and
                employment-based green cards faced delays, with processing taking 12–36 months or longer.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key Risk Factors:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Russians may face "increased scrutiny" even without formal ban</Line>
                <Line>Embassy operations in Moscow may be limited given US-Russia tensions</Line>
                <Line>Policy could change mid-process</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom Line:
                </Word> You're in a relatively good position - immediate relative category (no quota), kids well under 18,
                country not on ban list. The main variables are processing delays and embassy capacity in Russia. Want me to
                search for current US Embassy Moscow visa processing status?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:44:13.358771Z"
        >
            <Origin>019bb129-9de4-75dc-8bdd-bffe3297cfc1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We will be living in Georgia. Is there any dependency on Russia then? Are there any situations which can
                expedite this? There is probably a case to be made for refugee status, but I don’t wanna have to pursue
                something like that unless it’s necessary. I can review that briefly if you think it would be helpful.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:44:43.644958Z"
        >
            <Origin>019bb129-9de4-75dc-8bdd-bfff4fe15a01</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Smart move - Georgia (the country) changes the picture significantly. Let me search for how this affects the
                process.
            </Paragraph>
            <Action>Searched the web for “US embassy Tbilisi Georgia immigrant visa processing spousal CR1”</Action>
            <Action>
                Searched the web for “Russian citizens immigrant visa third country processing not Russia embassy”
            </Action>
            <Paragraph>This is critical information. Here's what I found:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgia is a viable option for processing, and potentially better than the alternatives.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Russia Problem:
                </Word> The US Embassy in Moscow no longer offers non-diplomatic visa services due to the Russian government
                prohibiting the Embassy from employing foreign nationals. Due to the suspension of immigrant visa services
                at the U.S. Embassy in Moscow, the U.S. Department of State has designated the U.S. Embassy in Warsaw to
                process immigrant visas for residents of Russia.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But if they're residents of Georgia:
                </Word> Due to the suspension of non-diplomatic visa services at the US Embassy in Moscow, Russian citizens
                must apply at a US embassy or consulate outside of Russia. Common locations include Armenia, Georgia,
                Kazakhstan, and Serbia.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tbilisi processes immigrant visas:
                </Word> U.S. Embassy Tbilisi's immigrant visa unit is now conducting regular immediate relative visas, K
                visa, family preference immigrant visas, employment-based immigrant visas, returning resident SB-1, and
                diversity visa interviews.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key advantages of Georgia:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        They can interview in Tbilisi
                    </Word> - The embassy is fully operational for immigrant visas
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No dependency on Russia
                    </Word> - They don't need to go back to Moscow or deal with Warsaw (which is practically impossible for
                    Russians to access since Poland issues visas to Russian citizens only on a humanitarian basis, making it
                    nearly impossible to book an appointment in Warsaw unless the applicant already lives in the European
                    Union.)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Russians can enter Georgia visa-free
                    </Word> - No visa needed to establish residency there
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Smaller embassy, potentially shorter waits
                    </Word> - The Consular Section conducts immigrant visa interviews once a week only, on Wednesdays -
                    lower volume than Warsaw or Moscow would have been
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What they need for Tbilisi processing:
                </Word>
            </Paragraph>
            <Paragraph>
                They need to demonstrate <Word>
                    <Bold />
                    residence
                </Word> in Georgia. Applicants must be able to demonstrate residence in the country where they are applying,
                if the place of application is based on their residency.
            </Paragraph>
            <Paragraph>
                This means: lease agreement, utility bills, kids enrolled in school, bank accounts - the normal markers of
                actually living there.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On Refugee Status:
                </Word>
            </Paragraph>
            <Paragraph>I wouldn't recommend pursuing it unless truly necessary. The reasons:</Paragraph>
            <Paragraph>
                <List />
                <Line>Refugee/asylum cases are currently frozen: the administration paused all asylum decisions</Line>
                <Line>
                    It would complicate things - you'd be claiming she can't safely return to Russia, which creates other
                    issues
                </Line>
                <Line>The spousal/stepchild route as immediate relatives is actually faster and more reliable</Line>
                <Line>Refugee status would require proving persecution, which is a higher bar</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The expedited processing question:
                </Word>
            </Paragraph>
            <Paragraph>There's no formal expedite for family-based petitions. The only real accelerants are:</Paragraph>
            <Paragraph>
                <List />
                <Line>Filing everything correctly the first time (no RFEs)</Line>
                <Line>Having all documents pre-translated and authenticated</Line>
                <Line>Being ready to move quickly at each stage</Line>
                <Line>Hiring an immigration attorney who knows the Tbilisi embassy</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your timeline advantage:
                </Word>
            </Paragraph>
            <Paragraph>
                If you establish them in Georgia now, get married, and file immediately, you're looking at:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>12-18 months USCIS processing</Line>
                <Line>1-2 months NVC</Line>
                <Line>Interview scheduling in Tbilisi (likely faster than high-volume posts)</Line>
            </Paragraph>
            <Paragraph>
                Total: ~15-24 months, all processed through Georgia with no Russian government involvement.
            </Paragraph>
            <Paragraph>Does this answer your questions about the Georgia angle?</Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:45:47.925522Z"
        >
            <Origin>019bb12b-0f51-74c0-80b1-eaa5fb7cf67e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does it make a difference if we get our Georgia resident visa first before applying? She’s still a Russian
                citizen, but it might make a difference to be a Georgian resident. Not just heard of it all four of us.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:46:00.283071Z"
        >
            <Origin>019bb12b-0f51-74c0-80b1-eaa62ea1bbe8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a smart question - you're thinking about how to present the strongest possible case.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Short answer: Yes, establishing Georgian residency first is strategically better.
                </Word>
            </Paragraph>
            <Paragraph>Here's why:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Residency requirement for third-country processing
                </Word>
            </Paragraph>
            <Paragraph>
                The State Department requires applicants to demonstrate residence in the country where they're interviewing.
                If she's just visiting Georgia, the embassy could refuse to process the case and redirect her to Warsaw
                (which is practically inaccessible for Russians). Having an actual Georgian residence permit removes any
                ambiguity.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. It signals stability and legitimacy
                </Word>
            </Paragraph>
            <Paragraph>
                An immigrant visa officer is assessing the whole picture. A family that has formally relocated to Georgia,
                enrolled kids in school, and established legal residency looks like a stable family unit making a considered
                life decision - not people scrambling at the last minute.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Document collection is easier
                </Word>
            </Paragraph>
            <Paragraph>
                The Tbilisi embassy will want police certificates from the country of current residence. If she's a Georgian
                resident, she gets Georgian police certificates. If she's just visiting, she might still need Russian
                certificates, which are harder to obtain from abroad and could create delays.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. It establishes the "clean break" for tax purposes
                </Word>
            </Paragraph>
            <Paragraph>
                Remember our earlier discussion - she needs to spend fewer than 183 days in Russia to end Russian tax
                residency. Getting Georgian residency and physically relocating there accomplishes this naturally. By the
                time she becomes a US tax resident, she's cleanly no longer a Russian tax resident.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The practical sequence:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>She and kids move to Georgia</Line>
                <Line>Obtain Georgian residence permits (relatively straightforward for Russians)</Line>
                <Line>You get married (in Georgia or elsewhere)</Line>
                <Line>You file I-130s for wife and both children</Line>
                <Line>They interview at Tbilisi embassy as Georgian residents</Line>
                <Line>Family arrives in US together</Line>
            </Paragraph>
            <Paragraph>Want me to search for the Georgian residence permit process for Russian citizens?</Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:48:14.881932Z"
        >
            <Origin>019bb12d-4cd7-7453-b9e5-b768ab4ac304</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, we will do residency soon because I think she found out that being a freelancer can help her get
                residency. We know we want to do it ASAP.. This has become less about taxes and more about moving to the US.
                Haha you were worried about tax evasion, but the reality is that I wasn’t confident that we’d be able to
                even have her be subject to evading US taxes if that makes sense when we started this conversation. I would
                love her to be able to pay you US taxes lawfully. It’s not easy getting a Russian citizen and two children
                into the United States right now.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:48:27.044105Z"
        >
            <Origin>019bb12d-4cd7-7453-b9e5-b769504fa55d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ha - yes, I appreciate the reframe. "Tax evasion" is a luxury problem for people who already have the right
                to be in a jurisdiction. You're working on the much harder prerequisite: getting your family physically into
                the country.
            </Paragraph>
            <Paragraph>
                And you're right that it's not easy. The US has effectively made it impossible for Russians to process visas
                in Russia, the designated alternative (Warsaw) is practically inaccessible, and the current administration
                is adding friction at every step. The fact that you're thinking strategically about Georgia residency,
                timing, and document sequencing is exactly right.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where you actually are:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Kids are 8 and 10 (plenty of time before the 18 cutoff)</Line>
                <Line>She's getting Georgian residency via freelancer status</Line>
                <Line>You'll marry after residency is established</Line>
                <Line>You file I-130 for her, then I-130s for each child with her receipt attached</Line>
                <Line>Family interviews together at Tbilisi</Line>
                <Line>15-24 months later, everyone arrives in the US</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you still need to nail down:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Income documentation for Affidavit of Support (your US income needs to be 125% of poverty line for
                    household of 4)
                </Line>
                <Line>
                    Translation and authentication of Russian birth certificates, any prior marriage/divorce documents
                </Line>
                <Line>Timing the marriage so it happens after Georgian residency is solid but before you want to file</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing I'd flag:
                </Word>
            </Paragraph>
            <Paragraph>
                Given the current political environment and the unpredictability of policy changes, there's an argument for
                moving quickly once the pieces are in place. File as soon as you're married and she has Georgian residency.
                Don't wait for a "better" time - the window could narrow.
            </Paragraph>
            <Paragraph>
                Is there anything else you want to think through on the immigration side, or are you feeling like you have
                the roadmap?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:50:26.236056Z"
        >
            <Origin>019bb12f-4e61-72c3-95e5-1895bba0b3b7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I agree with moving quickly, but what’s the difference between one and two months on a 24 month process? It
                would be interesting to learn if there’s any way to speed it up. Again, there’s a potential refugee
                situation here, but that has to be a very complicated case to make…
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:50:56.898198Z"
        >
            <Origin>019bb12f-4e61-72c3-95e5-1896f2b32cb9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that one or two months on the front end is noise on a 24-month timeline. The question is
                whether there are any levers that actually compress the 24 months itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Levers that could theoretically speed things up:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Expedite requests at USCIS
                </Word> USCIS allows expedite requests for I-130s, but the criteria are narrow:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Severe financial loss to company or person</Line>
                <Line>Humanitarian emergency</Line>
                <Line>Nonprofit whose request is in furtherance of US cultural/social interests</Line>
                <Line>US government interest</Line>
                <Line>USCIS error</Line>
            </Paragraph>
            <Paragraph>
                "My fiancée is Russian and the geopolitical situation is deteriorating" doesn't clearly fit these boxes. But
                if there were a concrete, documentable threat - that's where it gets interesting.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Congressional inquiry
                </Word> Your congressperson's office can make inquiries to USCIS about pending cases. This doesn't formally
                expedite, but it does put eyes on the file and sometimes unsticks things. Worth doing once the case is filed
                and you're past normal processing times.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Mandamus lawsuit
                </Word> If USCIS sits on the case beyond reasonable processing times, you can sue in federal court to compel
                action. This is a real tool - immigration attorneys use it regularly. But it only applies once you're
                already delayed, not to speed up normal processing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Premium processing
                </Word> Doesn't exist for family-based petitions. Only for certain employment-based categories.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the refugee angle:
                </Word>
            </Paragraph>
            <Paragraph>
                Let me search for whether there's actually a viable path there, given the current environment.
            </Paragraph>
            <Action>Searched the web for “Russian citizens refugee asylum United States 2025 political persecution”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    The refugee/asylum route is actively hostile right now. Do not pursue it.
                </Word>
            </Paragraph>
            <Paragraph>The evidence is stark:</Paragraph>
            <Paragraph>
                In the summer of 2025, the U.S. began mass deportations of Russian asylum seekers who had lost their court
                cases.
            </Paragraph>
            <Paragraph>
                It stems from a targeted decision by the Biden administration to more strictly vet the cases of Russians and
                citizens of several other post-Soviet countries. The reason is that border and immigration officers were not
                able to reliably distinguish genuine asylum seekers from Russian spies. I don't think we should expect any
                easing of these measures under a Trump presidency.
            </Paragraph>
            <Paragraph>
                The White House also ordered a pause in decisions on almost all refugee applications processed through
                USCIS, even for those who entered the US legally — the only allowable exception was for white citizens of
                South Africa.
            </Paragraph>
            <Paragraph>
                People with documented political persecution - actual Navalny activists with court records and European
                Court of Human Rights rulings in their favor - are being denied and deported. Leonid Melekhin's application
                was rejected due to a lack of "well-founded fear or clear probability of future persecution," despite him
                having been detained multiple times in Russia for actions including holding a single-person picket to call
                for the release of Alexei Navalny. He was deported back to Russia, where he was promptly arrested for
                "justifying terrorism."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line on refugee/asylum:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>It would require her to be physically present in the US (crossing the border)</Line>
                <Line>Russians are being detained for months in immigration facilities</Line>
                <Line>Grant rates have plummeted</Line>
                <Line>Even successful activists are being denied and deported</Line>
                <Line>It's slower, riskier, and more traumatic than the spousal route</Line>
                <Line>It would separate her from the kids during the process</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The spousal visa remains your best path.
                </Word> It's slower but:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>She stays safely in Georgia with the kids during processing</Line>
                <Line>No detention risk</Line>
                <Line>No deportation risk</Line>
                <Line>Immediate relative status means no quota</Line>
                <Line>Everyone arrives together</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To actually speed things up:
                </Word>
            </Paragraph>
            <Paragraph>The honest answer is there's no reliable accelerant. Your best moves are:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>File perfectly the first time (hire an experienced immigration attorney)</Line>
                <Line>Have all documents translated and apostilled before filing</Line>
                <Line>Respond to any RFEs within days, not weeks</Line>
                <Line>Use a congressional inquiry if processing exceeds posted times</Line>
                <Line>Be ready to interview in Tbilisi the moment they schedule it</Line>
            </Paragraph>
            <Paragraph>The 15-24 months is the timeline. Plan around it rather than trying to beat it.</Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:51:14.786039Z"
        >
            <Origin>019bb130-0c08-70db-a8ae-aebfa4a586fd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Assume you don’t know the story because both humanitarian emergency and not profit who’s request is in
                furtherance of US cultural interest are both on the table so that’s how much you don’t know
            </Paragraph>
        </Message>
        <Message
            at="2026-01-12T07:51:19.514553Z"
        >
            <Origin>019bb130-0c08-70db-a8ae-aec0d6953d43</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Fair point. I don't know the story.</Paragraph>
            <Paragraph>
                If there's a genuine humanitarian emergency - documented threat, medical situation, or something else that
                fits USCIS criteria - that's a legitimate expedite basis.
            </Paragraph>
            <Paragraph>
                And if there's a nonprofit angle where her presence in the US furthers cultural or social interests that
                align with US policy goals, that's also a recognized expedite category.
            </Paragraph>
            <Paragraph>
                I was pattern-matching to "Russian family wants to move to US" without knowing the specifics that might make
                this case exceptional.
            </Paragraph>
            <Paragraph>What's the story?</Paragraph>
        </Message>
    </Chapter>
);
