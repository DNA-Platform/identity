import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 March 2026](2026-03-09)</Date>
        </Dated>
        <Title>[[ 9 March 2026 ]]</Title>
        <Message
            at="2026-03-09T11:31:53.051423Z"
        >
            <Origin>019cd25e-5e68-7165-a4bf-ac247a066322</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is TRON crypto? What problm does it solve? Any fundamental tech required to be invented for it?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-09T11:32:21.958211Z"
        >
            <Origin>019cd25e-5e69-77fd-9033-3699716d8584</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “TRON TRX cryptocurrency 2024 overview technology”</Action>
            <Paragraph>
                Worth noting upfront: TRON (TRX) is a completely different project from TON (The Open Network) — different
                founders, different architecture, different thesis. Given your deep work on TON, the comparison is actually
                instructive.
            </Paragraph>
            <Heading>What is TRON?</Heading>
            <Paragraph>
                TRON is a decentralized blockchain-based operating system developed by the Tron Foundation and launched in
                2017 by Justin Sun. Originally TRX tokens were ERC-20 tokens on Ethereum, but were migrated to their own
                network. The initial vision was to give full ownership rights to digital content creators — enabling them to
                sell work directly to consumers without intermediaries like YouTube, Facebook, or Apple.
            </Paragraph>
            <Paragraph>
                In practice, that original vision didn't stick. The content creator use case didn't gain traction, so TRON
                shifted toward being a general-purpose decentralized application blockchain focused on user experience,
                speed, and scalability.
            </Paragraph>
            <Heading>What Problem Does It Actually Solve?</Heading>
            <Paragraph>Today TRON's real value proposition has converged on two things:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Cheap, fast USDT transfers.
                </Word> Around 50% of all TRON network activity is tied to USDT issued on Tron. Sending Tether on TRON costs
                fractions of a cent vs. dollars on Ethereum. This has made it the dominant rail for stablecoin transfers in
                Southeast Asia and emerging markets.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. High-throughput smart contracts.
                </Word> TRON's Delegated Proof-of-Stake model handles more than 2,000 transactions per second while keeping
                fees close to zero, versus Ethereum's 15–30 TPS with fees that can spike to several dollars.
            </Paragraph>
            <Heading>Core Technology</Heading>
            <Paragraph>TRON didn't invent much — it assembled existing components:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The network uses a Delegated Proof of Stake (DPoS) governance model where 27 elected validators — called
                    Super Representatives — produce blocks. Its resource model uses "bandwidth" and "energy" rather than
                    conventional gas pricing, enabling very low-cost transfers for users who stake TRX.
                </Line>
                <Line>
                    The Tron Virtual Machine (TVM) is compatible with Ethereum, so developers can move dApps to TRON without
                    rewriting them in a new language.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No fundamental new technology was required or invented.
                </Word> TRON is essentially a "better Ethereum" in terms of throughput and fees, achieved by trading
                decentralization for speed (only 27 validators vs. Ethereum's thousands). This is the classic DPoS tradeoff
                pioneered by EOS/BitShares.
            </Paragraph>
            <Heading>The Elephant in the Room</Heading>
            <Paragraph>
                In January 2018, researchers revealed that TRON's whitepaper copied portions from IPFS and Filecoin
                whitepapers without citation, and TRON's codebase was found to contain code copied from other projects. TRON
                has also been described by a 2025 Wall Street Journal article as a channel for over $26 billion in illegal
                crypto activity. The SEC sued Justin Sun in 2023 for selling unregistered securities and alleged wash
                trading to inflate TRX's price. The SEC lawsuit was recently dropped.
            </Paragraph>
            <Heading>TRON vs. TON — The Contrast</Heading>
            <Paragraph>
                This is where it gets interesting for your framework. TRON is essentially the <Word>
                    <Bold />
                    anti-thesis
                </Word> of what makes TON compelling:
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word></Word>
                    <Word>TRON</Word>
                    <Word>TON</Word>
                </Line>
                <Line>
                    <Word>Founder</Word>
                    <Word>Justin Sun (celebrity, marketing-first)</Word>
                    <Word>Pseudonymous/Durov (technical, stealth)</Word>
                </Line>
                <Line>
                    <Word>Original vision</Word>
                    <Word>Content monetization (pivoted)</Word>
                    <Word>Telegram infrastructure (organic utility)</Word>
                </Line>
                <Line>
                    <Word>User base source</Word>
                    <Word>Manufactured / Southeast Asia speculation</Word>
                    <Word>1B+ Telegram users (existing demand)</Word>
                </Line>
                <Line>
                    <Word>Decentralization</Word>
                    <Word>27 validators (highly centralized)</Word>
                    <Word>More distributed</Word>
                </Line>
                <Line>
                    <Word>Innovation</Word>
                    <Word>Assembled existing tech</Word>
                    <Word>Novel sharding architecture</Word>
                </Line>
                <Line>
                    <Word>Regulatory posture</Word>
                    <Word>SEC lawsuit, illicit activity hub</Word>
                    <Word>Building compliance infrastructure</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                TRON achieved scale through cheap USDT transfers — almost accidentally. TON's thesis is structural adoption
                through Telegram. Very different foundations.
            </Paragraph>
        </Message>
    </Chapter>
);
