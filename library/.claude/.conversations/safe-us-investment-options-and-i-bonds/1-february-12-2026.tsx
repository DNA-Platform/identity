import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Title>[[ 12 February 2026 ]]</Title>
        <Message
            at="2026-02-12T09:32:02.321618Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What are ways to safely invest money in the US? How about CDs where the money is locked up? Is there some
                special version of something like that that you can get in the United States for relatively cheap each year?
                What are my options here?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:32:25.415607Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Great question. There are several safe, government-backed options in the US, and yes — there's a specific
                instrument that fits your description perfectly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The "special" one: Series I Savings Bonds (I Bonds)
                </Word>
            </Paragraph>
            <Paragraph>This is almost certainly what you're thinking of. Key features:</Paragraph>
            <Paragraph>
                Each person can purchase up to <Word>
                    <Bold />
                    $10,000 per year
                </Word> electronically through TreasuryDirect.gov (plus an additional $5,000 via tax refund in paper form).
                The rate is a composite of a fixed rate plus a variable inflation-adjustment rate that resets every six
                months. Your money is locked up for <Word>
                    <Bold />
                    1 year minimum
                </Word> — you literally cannot redeem them before that. If you redeem before 5 years, you forfeit the last 3
                months of interest. After 5 years, no penalty. They mature at 30 years. They're backed by the full faith and
                credit of the US government, and the interest is exempt from state and local taxes.
            </Paragraph>
            <Paragraph>
                They became extremely popular in 2022 when inflation spiked and the composite rate hit ~9.6%. The rates
                fluctuate, so they're more or less attractive depending on the inflation environment.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Other safe options in the same family:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Treasury Bills, Notes, and Bonds
                </Word> — You can buy these directly through TreasuryDirect or via a brokerage. T-Bills are short-term (4
                weeks to 1 year), Notes are 2–10 years, Bonds are 20–30 years. All pay fixed interest and are backed by the
                US government. These are more liquid than I Bonds.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    TIPS (Treasury Inflation-Protected Securities)
                </Word> — Similar inflation protection to I Bonds but tradeable on secondary markets. The principal adjusts
                with CPI. Available in 5, 10, and 30-year maturities. No annual purchase cap like I Bonds.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    CDs (Certificates of Deposit)
                </Word> — Offered by banks, FDIC-insured up to $250,000 per depositor per institution. You lock money up for
                a set term (3 months to 5 years typically) at a fixed rate. Less flexible than Treasuries, and the interest
                is subject to state tax. Rates vary by bank — online banks and credit unions often offer better rates than
                the big banks.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    High-Yield Savings Accounts
                </Word> — Not locked up at all, but worth mentioning since FDIC-insured accounts at online banks have been
                offering competitive rates recently.
            </Paragraph>
            <Paragraph>
                Given your situation living outside the US, a few things worth noting: TreasuryDirect requires a US address
                and SSN/TIN. I Bonds specifically require you to be a US citizen, resident, or civilian employee of the US
                government. If you're maintaining US tax residency, you should have access to all of these — but the
                logistics of TreasuryDirect from abroad can occasionally be clunky.
            </Paragraph>
            <Paragraph>
                The I Bond is the classic "buy a little each year, it's cheap, it's locked up, and it's safe" instrument. Is
                that what you were thinking of, or were you looking for something with different characteristics?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:35:11.173055Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so what do I get for the Series I Bonds? What kind of rate do I expect? What are the different options
                for different lock up times? Information is not useful to me without potential interest rates. Otherwise
                you’re just using a word.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:35:55.841778Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Fair point — let me get you the actual numbers.</Paragraph>
            <Action>Searched the web for “Series I Bond current rate 2025 2026”</Action>
            <Action>Searched the web for “best CD rates February 2026 1 year 3 year 5 year”</Action>
            <Action>Searched the web for “Treasury bill note bond yields February 2026”</Action>
            <Paragraph>Here's the actual rate landscape right now, so you can compare apples to apples.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Series I Bonds — currently 4.03% annualized
                </Word>
            </Paragraph>
            <Paragraph>
                This breaks down into two components: a <Word>
                    <Bold />
                    0.90% fixed rate
                </Word> (locked for the life of the bond, up to 30 years) plus a <Word>
                    <Bold />
                    3.12% variable inflation rate
                </Word> (resets every 6 months based on CPI). The composite rate of 4.03% applies to bonds purchased
                November 1, 2025 through April 30, 2026. The next rate announcement is May 1, 2026.
            </Paragraph>
            <Paragraph>
                The catch: there's no "term" choice. You buy them and they earn interest for up to 30 years. The lockup is
                binary — you cannot redeem before 12 months, and if you redeem before 5 years, you forfeit the last 3 months
                of interest. So if you buy at 4.03% and cash out after exactly one year, you effectively earn about 3.02%
                after the penalty. After 5 years, no penalty.
            </Paragraph>
            <Paragraph>
                The annual purchase cap is <Word>
                    <Bold />
                    $10,000 per person
                </Word> electronically through TreasuryDirect. Minimum purchase is $25.
            </Paragraph>
            <Paragraph>
                The important nuance: that 0.90% fixed rate is what you're really "locking in" — the inflation component
                will float. In 2022 when inflation spiked, the composite briefly hit 9.62%, but that was mostly the
                inflation component. When inflation falls, so does your composite rate, though it can never go below zero.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    CDs — best rates right now roughly 3.5% to 4.5% depending on term
                </Word>
            </Paragraph>
            <Paragraph>
                Here's where you actually get to choose lockup duration. The best CD rates today are around 4%, with just a
                few above that. Current top-end rates by term:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        3 months:
                    </Word> ~4.1–4.18% (Citibank, OMB Bank)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        6–7 months:
                    </Word> ~4.15–4.50% (Northern Bank Direct, Connexus Credit Union — that 4.50% requires $5,000 minimum)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        1 year:
                    </Word> ~4.0–4.10% (Marcus by Goldman Sachs, E*Trade, Sallie Mae)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        3 years:
                    </Word> ~4.10% (United Fidelity Bank)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        5 years:
                    </Word> ~4.00–4.15% (United Fidelity Bank, Sallie Mae)
                </Line>
            </Paragraph>
            <Paragraph>
                The national average APY for 1-year CDs is only 1.9%, while some top-yielding online banks are offering
                one-year CDs above 4%. So you have to shop around — your local bank branch will offer garbage rates. Online
                banks and credit unions are where the real rates are. All FDIC-insured up to $250K.
            </Paragraph>
            <Paragraph>CDs are fixed rate and fully taxable (federal + state + local). No inflation adjustment.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Treasury Bills, Notes, and Bonds — roughly 3.5% to 4.9% depending on maturity
                </Word>
            </Paragraph>
            <Paragraph>Current yields as of the last few days:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        3-month T-Bill:
                    </Word> ~3.70%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        2-year Note:
                    </Word> ~3.50%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        5-year Note:
                    </Word> ~roughly 3.8–4.0%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        10-year Note:
                    </Word> ~4.14%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        30-year Bond:
                    </Word> ~4.85%
                </Line>
            </Paragraph>
            <Paragraph>
                These are exempt from state and local taxes (same as I Bonds), which makes them more attractive than CDs on
                an after-tax basis depending on your state. You buy them through TreasuryDirect or any brokerage, and
                they're fully liquid — you can sell on the secondary market before maturity (though you take price risk if
                rates have moved).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Series EE Bonds — 2.50% fixed
                </Word>
            </Paragraph>
            <Paragraph>
                Series EE savings bonds issued November 2025 through April 2026 earn a fixed rate of 2.50%. The one
                interesting feature: they're guaranteed to double in value at 20 years, which works out to roughly 3.5%
                annualized if rates stay low. But at 2.50% with a 20-year lockup, this is the least compelling option right
                now unless you're making a very long bet that rates will collapse.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line comparison for you:
                </Word>
            </Paragraph>
            <Paragraph>
                If you want to buy something cheap each year and lock it away, the I Bond at 4.03% (with inflation
                protection) and a $10,000/year cap is the standout. The 0.90% fixed floor means even if inflation goes to
                zero, you're still earning something, and if inflation spikes again you benefit automatically.
            </Paragraph>
            <Paragraph>
                If you want more flexibility on amount and term, CDs at online banks are competitive right now in the 4%
                range, but those rates are fixed and fully taxable. Treasury bills and notes give you similar rates with the
                state tax exemption and full liquidity.
            </Paragraph>
            <Paragraph>
                The Fed funds rate is currently 3.50–3.75% and the market expects further cuts later this year, so these
                rates across the board are likely to trend down. If you want to lock in, sooner is better than later.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:37:25.760167Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I assume you are annualizing everything. Why are the three month bonds giving better return returns than the
                one-year ones
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:37:44.594567Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good catch, and yes everything quoted is annualized.</Paragraph>
            <Paragraph>
                What you're seeing is called an <Word>
                    <Bold />
                    inverted yield curve
                </Word>, and it's one of the most watched signals in finance. Normally you'd expect to get paid more for
                locking your money up longer — that's the intuitive "term premium." But right now the short end is paying
                more than parts of the longer end, and there's a straightforward reason.
            </Paragraph>
            <Paragraph>
                The Fed funds rate is currently 3.50–3.75%. Short-term instruments like 3-month T-Bills track very closely
                to that rate — they're basically lending money to the government for 90 days, and the going price for
                short-term money is set by the Fed. So you get ~3.70% on a 3-month bill, which makes sense.
            </Paragraph>
            <Paragraph>
                But the 2-year note is at ~3.50%, which is actually <Word>
                    <Emphasis />
                    below
                </Word> the current Fed rate. That's because the bond market is pricing in that the Fed will cut rates
                further over the next couple of years. If traders expect the Fed to bring rates down to, say, 3% by 2027,
                then a 2-year note that pays 3.50% for the whole period actually looks fair — you're locking in a rate that
                will be <Word>
                    <Emphasis />
                    above
                </Word> where short-term rates end up.
            </Paragraph>
            <Paragraph>
                The same logic applies to CDs. Banks offering a 3-month CD at 4.1% know you'll be back in 3 months and
                they'll reprice. But a bank offering a 3-year CD at 4.1% is taking the risk that they're paying you more
                than they need to if rates fall — so they're more cautious about offering high long-term rates.
            </Paragraph>
            <Paragraph>
                The 10-year and 30-year yields are higher again (4.14% and 4.85%) because at those horizons you're dealing
                with more uncertainty — inflation risk, fiscal risk, term premium — and investors demand compensation for
                that. So the curve dips in the middle and then rises at the long end.
            </Paragraph>
            <Paragraph>
                This is actually relevant to your timing decision: if the market is right that rates are heading lower,
                locking in a longer-term CD or buying I Bonds now captures today's rates before they fall. If the market is
                wrong and inflation stays sticky, the I Bond is better positioned because its variable component will adjust
                upward.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:39:33.272755Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, if I’m investing in exotic cryptocurrency strategies, I want the rest of my money invested safely. 3
                month CDs seem pretty good. And what I get approximately one percent per 90 days?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:39:44.568338Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yeah, that's roughly right. A 4% annualized rate works out to about 1% per quarter. Slightly less with the
                compounding math (technically about 0.985% per 90 days), but for practical purposes, 1% every 3 months on
                your money is a fair way to think about it.
            </Paragraph>
            <Paragraph>
                And the logic makes sense — you've got your high-conviction, long-horizon position in TONX, and then the
                rest of your capital sitting in something that's government-backed, liquid every 90 days, and earning ~4%.
                If rates drop, you reassess. If something changes with your crypto thesis and you need capital, you're never
                more than 3 months away from your money.
            </Paragraph>
            <Paragraph>
                The one thing to watch: when a 3-month CD matures, most banks auto-renew at whatever their current rate is,
                which could be lower if the Fed has cut. So you'd want to stay on top of the renewal dates and shop around
                each cycle rather than letting it roll passively. A T-Bill ladder (buying new 3-month T-Bills every month or
                every few weeks) accomplishes the same thing and might be slightly more convenient through a brokerage
                account, with the added benefit of the state tax exemption.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:40:46.887778Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does IB do this? And what are my options that vary across lockup, duration risk and reward
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T09:41:17.872705Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Interactive Brokers Treasury bills automatic rollover ladder”</Action>
            <Paragraph>
                Yes, IB lets you buy Treasuries directly, though with some quirks. You can buy T-Bills, Notes, and Bonds on
                the secondary market through TWS, and they have a bond scanner to find them. The practical issue people
                report is that smaller orders (under ~$25K) can have trouble getting fills on individual T-Bills through
                IB's bond platform — it's better suited to larger blocks. For smaller amounts, you'd either need to be
                patient with limit orders or consider an alternative approach.
            </Paragraph>
            <Paragraph>
                Here's the full spectrum of options you could run through IB, ordered from shortest lockup to longest:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No lockup — instant liquidity
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        IB's idle cash interest:
                    </Word> IB pays interest on uninvested cash sitting in your account. Currently that tracks close to the
                    Fed funds rate minus a spread — probably around 3.0–3.3% on balances above $10K. You do nothing and just
                    earn it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Short-term Treasury ETFs (BIL, SGOV, SHV):
                    </Word> These hold baskets of 0–3 month T-Bills. You buy and sell them like stocks. ~3.7% yield, highly
                    liquid, pennies in spread. This is probably the easiest way to get T-Bill exposure through IB without
                    dealing with individual bond fills.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Money market funds:
                    </Word> Fidelity and Vanguard are better for this, but IB gives you access to some.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1–3 month lockup
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Individual 4-week or 13-week T-Bills:
                    </Word> ~3.7% annualized. Buy on secondary market through IB. Sold at a discount, you get par at
                    maturity. State tax exempt. The ~1% per quarter math you mentioned. Minimum increment is $100 face value
                    but practically you want larger sizes for clean fills on IB.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3–12 month lockup
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        6-month T-Bills:
                    </Word> ~3.7–3.8%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        52-week T-Bills:
                    </Word> ~3.6–3.7%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        CDs (brokered, through IB):
                    </Word> IB does offer brokered CDs. Rates similar to what we discussed, 3.5–4.0% range. FDIC insured.
                    Less liquid than T-Bills if you need to sell early.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1–5 year lockup
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        2-year Treasury Notes:
                    </Word> ~3.50%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        5-year Treasury Notes:
                    </Word> ~3.8–4.0%
                </Line>
                <Line>
                    These pay a coupon every 6 months (deposited directly to your IB account), and you can sell them on the
                    secondary market before maturity — but you take price risk if rates have moved.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5–30 year lockup (or tradeable)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        10-year Note:
                    </Word> ~4.14%
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        30-year Bond:
                    </Word> ~4.85%
                </Line>
                <Line>
                    Higher yield but much more price sensitivity. If rates rise 1%, a 30-year bond loses roughly 20% of its
                    market value. You only get your full return if you hold to maturity.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Inflation-protected (separate category)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        I Bonds:
                    </Word> 4.03%, but you can't buy these through IB — TreasuryDirect only, $10K/year cap.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        TIPS ETFs (TIP, SCHP):
                    </Word> Tradeable through IB, but these have duration risk unlike I Bonds.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My practical suggestion for your situation:
                </Word> If you want the simplest version of "park my safe money at ~1% per quarter with minimal hassle,"
                just buy <Word>
                    <Bold />
                    SGOV
                </Word> (iShares 0-3 Month Treasury Bond ETF) through IB. It holds the same T-Bills you'd buy individually,
                trades like a stock, the yield is essentially the same, state tax exempt, and you never have to worry about
                laddering, fills, or rollover dates. You can sell any time during market hours. It's the path of least
                resistance for what you're describing.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T10:27:08.035947Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So IB is making me money right now? I have most of my money there. Are the short term treasuries guaranteed
                3.3 to 3.7 annualized?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T10:27:26.719991Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two separate things here.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    IB cash interest — yes, you're probably already earning something.
                </Word> IB automatically pays interest on idle cash balances. The rate depends on your account type and
                balance size. They pay the benchmark rate (Fed funds) minus a spread. For balances over $10K, you're likely
                getting somewhere around 3.0–3.3%. Below $10K they pay less or nothing. You can check your exact rate in
                your account statements — it shows up as a line item. So yes, money just sitting there is earning, but it's
                not the best rate you could get.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On "guaranteed" — important distinction.
                </Word> T-Bills themselves are guaranteed in the sense that the US government will pay you back at par when
                they mature. If you buy a 3-month T-Bill at a 3.7% annualized discount, you <Word>
                    <Emphasis />
                    will
                </Word> get that return if you hold to maturity. That specific bill's return is locked in at purchase.
            </Paragraph>
            <Paragraph>
                But the rate on the <Word>
                    <Emphasis />
                    next
                </Word> T-Bill you buy is not guaranteed. Three months from now when that bill matures and you go to buy
                another one, the rate could be 3.7%, or 3.0%, or 4.5% — it depends on where the Fed is and what the market
                is doing. The market currently expects rates to drift lower over the next year or two.
            </Paragraph>
            <Paragraph>
                An ETF like SGOV is even less "guaranteed" in that sense — it's constantly rolling into new bills at
                whatever the current rate is, so your yield floats with the market. Right now that float is around 3.7%, but
                it's not locked in.
            </Paragraph>
            <Paragraph>
                So the honest framing is: right now you're earning roughly 3.7% annualized on short-term Treasuries, which
                is about 0.9% per quarter. That's what the market is paying today. It's as safe as anything on earth in
                terms of getting your money back, but the <Word>
                    <Emphasis />
                    rate
                </Word> you earn going forward will move with Fed policy.
            </Paragraph>
            <Paragraph>
                If you want to actually lock in a rate for a longer period, that's where you'd step into a 1-year or 2-year
                Treasury Note or a CD — you sacrifice some yield today (since the curve is inverted) but you get certainty
                about what you'll earn over that whole period regardless of what the Fed does.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T10:31:13.703060Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So you’re guaranteed to get the market rate and that’s a form of guarantee no need to make a complicated
            </Paragraph>
            <Paragraph>
                I feel like these are all very simple options and you’re not giving me a more accurate picture of all of the
                financial instruments available to me to do interesting things. I can absolutely understand ETF. I imagine
                there are a lot of interesting. Trading strategies rolled up in them. What are all the options for financial
                instruments they give different returns?
            </Paragraph>
            <Paragraph>
                And then I also have access to Russian Telegram if I want. If there are any interesting opportunities with
                whatever their virtual stock technology is? I am curious about that. I don’t think exposure to a direct
                cryptocurrency is safe, but maybe its safe to invest in stable things
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T10:32:12.609411Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — I was being overly conservative. You have a quant background, so let me give you the full
                landscape. And let me look into the Telegram side too.
            </Paragraph>
            <Action>Searched the web for “Telegram virtual stocks trading investment features 2025 2026”</Action>
            <Paragraph>Okay, let me give you the full picture on both fronts.</Paragraph>
            <Heading>The complete menu of financial instruments through IB</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Fixed income (what we already covered, but completing the picture):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>T-Bills, Notes, Bonds (3.5–4.85% depending on maturity)</Line>
                <Line>CDs (3.5–4.5%)</Line>
                <Line>I Bonds (4.03%, TreasuryDirect only)</Line>
                <Line>
                    Corporate bonds — investment grade corporates yield more than Treasuries, maybe 5–6% depending on credit
                    quality and duration. High-yield ("junk") bonds push 7–9% but with real default risk.
                </Line>
                <Line>
                    Municipal bonds — lower nominal yield but tax-free, so if you're in a high tax bracket the after-tax
                    yield can beat Treasuries. Less relevant if you're living abroad with complex tax status.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Equity ETFs — this is where it gets interesting:
                </Word>
            </Paragraph>
            <Paragraph>Plain index:</Paragraph>
            <Paragraph>
                <List />
                <Line>S&amp;P 500 (SPY, VOO) — long-run ~10% annualized, with drawdowns of 30–50% periodically</Line>
                <Line>Total market (VTI), international (VXUS), emerging markets (VWO)</Line>
            </Paragraph>
            <Paragraph>Factor/smart beta — these are systematic strategies packaged as ETFs:</Paragraph>
            <Paragraph>
                <List />
                <Line>Value (VTV, VLUE) — buys cheap stocks by P/E, P/B</Line>
                <Line>Momentum (MTUM) — buys recent winners</Line>
                <Line>Low volatility (USMV, SPLV) — buys boring stocks, lower drawdowns</Line>
                <Line>Quality (QUAL) — high ROE, stable earnings</Line>
                <Line>Small cap value (VBR, IJS) — historically the highest-returning equity factor</Line>
            </Paragraph>
            <Paragraph>Income-generating strategies:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Covered call ETFs (XYLD, QYLD, JEPQ) — sell call options on the S&amp;P or Nasdaq, generate 8–12% income
                    but cap your upside. These are popular for "I want yield without bonds."
                </Line>
                <Line>Dividend growth (VIG, SCHD) — 3–4% yield from companies that consistently raise dividends</Line>
                <Line>Preferred stock ETFs (PFF) — 5–7% yield, behaves somewhere between bonds and stocks</Line>
            </Paragraph>
            <Paragraph>Defined outcome / buffered ETFs:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    These are relatively new and fascinating. Companies like Innovator and First Trust offer ETFs that give
                    you S&amp;P 500 exposure with a built-in downside buffer. Example: you get S&amp;P returns up to a cap
                    (say 15%), but the first 10–15% of losses are absorbed by the structure. Resets annually. Trades like a
                    stock. This might actually appeal to you as a way to get equity exposure with defined risk parameters.
                </Line>
            </Paragraph>
            <Paragraph>Leveraged and inverse:</Paragraph>
            <Paragraph>
                <List />
                <Line>2x and 3x leveraged ETFs (TQQQ, UPRO, SSO) — for short-term directional bets, not holding</Line>
                <Line>Inverse ETFs (SH, SQQQ) — profit when market falls</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Commodities:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Gold ETFs (GLD, IAU) — ~$2,900/oz right now, no yield but inflation hedge and crisis hedge</Line>
                <Line>Broad commodity (DJP, GSG)</Line>
                <Line>Oil (USO) — if you have a view on energy</Line>
                <Line>
                    Bitcoin ETFs (IBIT, FBTC) — now available as spot ETFs if you want BTC exposure in a regulated wrapper
                    rather than holding directly. Though you said you don't want direct crypto exposure.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Real assets:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>REITs (VNQ, SCHH) — real estate exposure, 3–5% dividend yields</Line>
                <Line>Infrastructure ETFs (PAVE, IFRA)</Line>
                <Line>Farmland (LAND) — niche but real</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Options strategies through IB:
                </Word> IB has excellent options support. With your quant background you could run things like:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Cash-secured puts on stocks you want to own — collect premium while waiting</Line>
                <Line>Iron condors / strangles on indices — income generation with defined risk</Line>
                <Line>Protective collars on existing positions</Line>
                <Line>Calendar spreads</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alternatives:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Merger arbitrage ETFs (MNA) — 4–6% returns with low correlation to equity markets</Line>
                <Line>Long/short equity ETFs (various hedge fund replication strategies)</Line>
                <Line>
                    Managed futures / trend following (DBMF, CTA, KMLM) — these do well in crisis periods when stocks crash,
                    great diversifier
                </Line>
            </Paragraph>
            <Heading>The Telegram / TON ecosystem angle</Heading>
            <Paragraph>
                This is actually developing fast and directly relevant to your thesis. xStocks launched tokenized equities
                on the TON blockchain in December 2025, enabling Telegram users to buy and trade fully collateralized
                versions of US stocks and ETFs directly through the platform's integrated TON Wallet. This was built by
                Backed Finance, which Kraken agreed to acquire, bringing tokenized products closer to its trading business
                as the exchange prepares for a planned public listing in 2026.
            </Paragraph>
            <Paragraph>
                The Telegram Wallet integration facilitates trading of over 60 tokenized stocks and ETFs, including Apple,
                Tesla, Nvidia, and SPY. So you can buy a tokenized version of the S&amp;P 500 through Telegram's wallet.
            </Paragraph>
            <Paragraph>
                There's also an interesting public equity play: AlphaTON Capital Corp (NASDAQ: ATON) raised $44 million and
                is generating revenue from AI infrastructure supporting Telegram's Cocoon AI network. Though it's trading at
                $0.60 near its 52-week low with a tiny $8.5M market cap and negative EBITDA — very speculative.
            </Paragraph>
            <Paragraph>
                Now, on the "stable things" question within the TON ecosystem — this is where stablecoins come in. USDT on
                TON is already heavily used. If you're holding TON and want to reduce volatility exposure without exiting
                the ecosystem, you can swap into USDT-on-TON and potentially earn yield through DeFi lending or liquidity
                provision. But the counterparty risks there are real and different from the FDIC/Treasury-backed world.
            </Paragraph>
            <Paragraph>
                The tokenized stocks on TON are interesting conceptually — they're "fully collateralized" meaning real
                shares are held by a custodian backing each token — but you're adding layers of counterparty risk (the
                custodian, the smart contract, the regulatory status of tokenized securities in your jurisdiction). For
                someone who already has IB, buying SPY directly through IB is strictly safer than buying tokenized SPY
                through Telegram's wallet. The Telegram version matters for the billion people who <Word>
                    <Emphasis />
                    don't
                </Word> have an IB account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where this gets interesting for your thesis specifically:
                </Word> the fact that Telegram is building tokenized stock and ETF trading into its wallet is exactly the
                kind of utility infrastructure you've been tracking. It validates the "super-app financial platform"
                trajectory. The question is whether you want to <Word>
                    <Emphasis />
                    use
                </Word> these tools or just <Word>
                    <Emphasis />
                    observe
                </Word> them as evidence for your TON investment thesis.
            </Paragraph>
            <Paragraph>
                What's drawing your interest most — the income/yield side, the equity exposure side, or the TON ecosystem
                financial products?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T10:33:30.325239Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                They were giving me intro to ETFs. I’m looking for ETFs that have interesting financial instruments that
                balance risk for safety. I don’t need intro to ETFs. I don’t need SPY. I’m looking for things that have
                interesting mathematical properties for how they give return returns. Like the Tbill etfs - you will
                definitely make money on them, right? They certainly have an interesting return curve. What are other things
                like that? What are interesting investment vehicles from a structural perspective based on what you can do
                with ETFs these days?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T10:34:58.578011Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good — let me focus on the structurally novel stuff. The things where the payoff engineering is genuinely
                interesting.
            </Paragraph>
            <Action>Searched the web for “buffered ETF defined outcome how they work options structure 2025 2026”</Action>
            <Action>Searched the web for “return stacking ETF RSST RSSB leveraged diversification 2025”</Action>
            <Action>Searched the web for “managed futures ETF DBMF KMLM CTA crisis alpha convexity tail risk”</Action>
            <Paragraph>
                Okay, here's what's actually structurally interesting — organized by the <Word>
                    <Emphasis />
                    shape of the return curve
                </Word>, which is what matters.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Buffered / Defined Outcome ETFs — piecewise linear payoff functions
                </Word>
            </Paragraph>
            <Paragraph>
                These are the most mathematically elegant. Under the hood, they're a put-spread collar built from FLEX
                options on SPY or QQQ, packaged as an ETF with a 12-month outcome period.
            </Paragraph>
            <Paragraph>The payoff structure is literally a piecewise linear function with three regimes:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Below buffer:
                    </Word> you absorb losses (e.g., market drops 25%, buffer is 15%, you lose 10%)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Within buffer zone:
                    </Word> your losses are absorbed, you lose nothing
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Above cap:
                    </Word> you're capped, market gains beyond the cap go to zero for you
                </Line>
            </Paragraph>
            <Paragraph>
                So a typical product might be: 0% buffer to -15% (you lose nothing), capped at +15% upside. The cap level is
                set by the options market at inception and depends on volatility and rates. Higher vol = higher caps. Higher
                rates = higher caps (because the risk-free component of the collar is worth more).
            </Paragraph>
            <Paragraph>
                The key insight: the protection range is communicated as two numbers like "5/20" — the first indicates where
                the investor starts losing, the second where the buffer ends and you're exposed again. So a 0/15 product
                absorbs the first 15% of losses entirely. A 5/20 product lets you eat the first 5%, protects the next 15%,
                then you're exposed again below -20%.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tickers:
                </Word> Innovator (BJUL, BAPR, etc. — one per month), First Trust (various), BlackRock iShares (IVVB
                series), PGIM, AllianzIM. There are now 100+ of these.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The structural quirk that matters:
                </Word> if you buy mid-period, your buffer and cap are <Word>
                    <Emphasis />
                    different
                </Word> from the stated values. The options have already moved. Every issuer publishes real-time remaining
                buffer and cap on their website. If you buy a fund with a cap of 8.5% on reset day but it's already risen
                1%, you only have 7.5% of potential upside remaining. This is essentially like buying a structured note at a
                different price than par.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    BlackRock also offers 2x accelerated return ETFs
                </Word> — you get 2x upside participation on the S&amp;P up to a cap, with 1x downside. So if the market
                goes up 5%, you get 10%. If it goes up 15%, you might be capped at 12%. If it drops 10%, you drop 10%. The
                leverage is on the upside only.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Managed Futures / Trend Following — convex crisis alpha
                </Word>
            </Paragraph>
            <Paragraph>
                This is the strategy class with the most interesting <Word>
                    <Emphasis />
                    correlation
                </Word> properties. Managed futures funds go long and short global futures across equities, bonds,
                commodities, and currencies based on trend signals (typically moving average crossovers).
            </Paragraph>
            <Paragraph>
                The mathematical property that makes these special: they exhibit <Word>
                    <Bold />
                    positive convexity
                </Word> — they tend to make the most money during the periods when traditional assets lose the most. In
                2022, when stocks fell ~20% and bonds fell ~13% (the worst year for 60/40 in modern history), KMLM returned
                +25% and DBMF returned +20%. That's the "crisis alpha" phenomenon.
            </Paragraph>
            <Paragraph>
                The mechanism is simple: when markets trend strongly in any direction, trend followers profit. Markets tend
                to trend most violently during crises. The strategy loses money in choppy, mean-reverting markets.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        DBMF
                    </Word> (0.85% fee): replicates the SG CTA Index, which tracks the top 20 managed futures hedge funds.
                    You're basically getting hedge fund exposure in an ETF by reverse-engineering their positions from
                    returns.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        KMLM
                    </Word> (0.90%): pure trend-following index dating back to 1988. Trades 22 futures contracts across
                    commodities, currencies, and bonds. Does NOT trade equity futures, which makes it more diversifying.
                    Runs 200-300% gross exposure.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        CTA
                    </Word> (0.75%): Simplify's version, adds fundamental reversion for commodities and carry for rates on
                    top of trend. Has been the best performer recently.
                </Line>
            </Paragraph>
            <Paragraph>
                The return profile: long-term expected returns are positive (maybe 5-8% annualized historically), with low
                or negative correlation to both stocks and bonds, but with long stretches of flat or negative performance
                between the sharp gains. You need conviction to hold through the boring periods.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Return Stacking — leveraged diversification, not leveraged beta
                </Word>
            </Paragraph>
            <Paragraph>
                This is the newest and most conceptually interesting category. The core idea: RSSB invests 100% into global
                equities and 100% into US Treasury bonds, effectively giving 2:1 leverage on a diversified stock/bond
                portfolio. But unlike TQQQ (3x Nasdaq), the leverage is across <Word>
                    <Emphasis />
                    uncorrelated
                </Word> assets, so the risk is much lower than it appears.
            </Paragraph>
            <Paragraph>
                RSSB packages the core stock/bond base at 100/100, allowing allocators to stack whatever they want on top —
                managed futures, commodities, gold, macro, hedged strategies — so long as the overlay outperforms the
                embedded financing cost.
            </Paragraph>
            <Paragraph>The family:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        RSSB
                    </Word>: $1 → $1 global stocks + $1 Treasury bonds
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        RSST
                    </Word>: $1 → $1 US stocks + $1 managed futures
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        RSBT
                    </Word>: $1 → $1 bonds + $1 managed futures
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        RSSY
                    </Word>: $1 → $1 US stocks + $1 carry strategy (harvest yield spreads across markets)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        RSSX
                    </Word>: $1 → $1 US stocks + $1 gold/bitcoin
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        RSBA
                    </Word>: $1 → $1 Treasuries + $1 merger arbitrage
                </Line>
            </Paragraph>
            <Paragraph>
                The "Quad Core" portfolio someone described — 50% RSSY + 50% RSBT — gives you simultaneous exposure to
                stocks, bonds, trend, and carry, all at 50% notional each, totaling 200% gross with four uncorrelated return
                streams. That's an institutional-grade risk parity portfolio in two ETFs.
            </Paragraph>
            <Paragraph>
                The WisdomTree version: <Word>
                    <Bold />
                    NTSX
                </Word> does 90% US stocks + 60% Treasury futures = 150% notional. Been around since 2018, longer track
                record. Also <Word>
                    <Bold />
                    GDE
                </Word> (90% stocks + 60% gold exposure).
            </Paragraph>
            <Paragraph>
                The embedded cost of this leverage is roughly the T-Bill rate — so right now ~3.7%. The second asset class
                needs to clear that hurdle to add value. Treasuries and managed futures have historically cleared it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Covered Call / Options Income — selling volatility for yield
                </Word>
            </Paragraph>
            <Paragraph>
                These trade upside participation for current income. They own stocks and systematically sell call options
                against them.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        JEPQ
                    </Word> (JPMorgan Nasdaq equity premium income): ~9-11% distribution yield. Owns active stock portfolio,
                    sells OTM call options on the Nasdaq 100. You get income but cap your upside in strong rallies.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        XYLD
                    </Word>: sells calls on S&amp;P 500, ~10% yield.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        QYLD
                    </Word>: sells ATM calls on Nasdaq, ~12% yield but virtually zero price appreciation.
                </Line>
            </Paragraph>
            <Paragraph>
                The structural insight: you're being paid the volatility risk premium. Options are systematically overpriced
                relative to realized volatility (this is well-documented in academic literature). These ETFs harvest that
                premium. The tradeoff is you underperform sharply in strong up-markets. In flat or mildly down markets, the
                option premium cushions you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Merger Arbitrage — market-neutral spread harvesting
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        MNA
                    </Word> (IQ Merger Arbitrage): buys announced acquisition targets, shorts the acquirer or an index.
                    Earns the "deal spread" — the gap between current price and announced acquisition price. Returns are
                    4-6% with very low equity correlation. It's essentially lending money to deal completion timelines.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        RSBA
                    </Word> (return stacked version): $1 Treasuries + $1 merger arb. You get your safe bond yield PLUS the
                    merger arb spread.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6. Long/Short and Anti-Beta — negative correlation by design
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        BTAL
                    </Word> (AGF U.S. Market Neutral Anti-Beta Fund): goes long low-beta stocks, shorts high-beta stocks.
                    This thing has <Word>
                        <Emphasis />
                        negative
                    </Word> expected returns over full cycles (it's slowly bled since inception) but it's strongly
                    negative-correlated with equities. It's pure portfolio insurance. In 2022 it was up ~15% while markets
                    crashed. You hold it specifically as a hedge, accepting the drag.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The map, organized by what you actually care about:
                </Word>
            </Paragraph>
            <Paragraph>
                If you want <Word>
                    <Bold />
                    guaranteed positive nominal returns
                </Word>: T-Bill ETFs (SGOV, BIL) — you will make money, period, as long as short-term rates are positive.
                Currently ~3.7%.
            </Paragraph>
            <Paragraph>
                If you want <Word>
                    <Bold />
                    positive expected returns that go up when everything else goes down
                </Word>: managed futures (DBMF, KMLM, CTA). Positive expectation, negative correlation, but lumpy returns.
            </Paragraph>
            <Paragraph>
                If you want <Word>
                    <Bold />
                    equity-like returns with a defined worst case
                </Word>: buffered ETFs. You know your maximum loss before you buy.
            </Paragraph>
            <Paragraph>
                If you want <Word>
                    <Bold />
                    more return per dollar of capital deployed
                </Word>: return stacking (RSSB, RSST, NTSX). Leverage across uncorrelated assets.
            </Paragraph>
            <Paragraph>
                If you want <Word>
                    <Bold />
                    high current income with reduced upside
                </Word>: covered call ETFs (JEPQ, XYLD). 9-12% yield.
            </Paragraph>
            <Paragraph>
                If you want <Word>
                    <Bold />
                    pure insurance against market crashes
                </Word> (and will accept negative drag): BTAL or tail-risk strategies.
            </Paragraph>
            <Paragraph>
                The really sophisticated play is combining several of these. Something like RSST (stocks + trend) + SGOV
                (safe yield) + a buffered ETF gives you equity exposure with trend-following crisis protection, guaranteed
                yield on the safe portion, and defined downside on the equity portion.
            </Paragraph>
        </Message>
    </Chapter>
);
