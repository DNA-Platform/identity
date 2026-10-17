import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 May 2026](2026-05-11)</Date>
        </Dated>
        <Title>[[ 11 May 2026 ]]</Title>
        <Message
            at="2026-05-11T20:31:39.234292Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>https://ton-blockchain.github.io/acton/</Paragraph>
            <Paragraph>
                Talk to me. Can you read that? A CLI as a tech stack so that AI like you (your code version) can learn.
                Cool? Futuristic to make a tech stack natively AI consumable?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-11T20:32:24.897352Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://ton-blockchain.github.io/acton/</Action>
            <Paragraph>
                The page itself is sparse — it's the launch teaser ("Launching on May 11"), which would have been yesterday.
                Let me dig for actual substance on what Acton is, because the meta-description is the only real signal on
                the page itself.
            </Paragraph>
            <Action>Searched the web for “TON Acton toolkit smart contract development launch”</Action>
            <Paragraph>
                Read it — though the live page itself is just the launch teaser. The substance is in the GitHub repo and the
                docs.
            </Paragraph>
            <Paragraph>
                What Acton actually is: an all-in-one Rust CLI for TON smart contract development. Single binary handles
                scaffolding, build, test (with fork mode, gas snapshots, coverage, mutation testing, fuzzing), debug,
                deploy, verify, lint, format, plus low-level VM tooling. Tolk-first workflow, auto-generates TypeScript
                wrappers from the ABI, includes a <Word>
                    <Verbatim />
                    func2tolk
                </Word> converter for migrating legacy FunC. Released yesterday. The mental model is
                Foundry-or-Cargo-for-TON, replacing the fragmented Blueprint-and-npm-scripts world.
            </Paragraph>
            <Paragraph>
                On your framing — yes, you're seeing something the official positioning doesn't lead with but which is
                structurally true. A unified Rust CLI is inherently more agent-consumable than the
                IDE-plugin-and-orchestrate-five-tools world it replaces: deterministic text output, stable exit codes,
                scriptable everything, one binary to learn. The piece that really matters for AI-native consumption isn't
                just "it's a CLI" — it's the <Word>
                    <Bold />
                    typed boundary
                </Word>: Tolk → ABI → auto-generated TypeScript wrappers → structured test output (gas snapshots, coverage
                as data, traces as JSON). That's a closed-loop typed pipeline an agent can drive end-to-end. Claude Code can
                ship a TON contract through Acton far more reliably than through any GUI workflow.
            </Paragraph>
            <Paragraph>
                One caveat worth holding: CryptoBriefing is framing Acton as "AI-powered, turning smart contracts into
                autonomous robots." That's media spin — the GitHub README makes no such claim, and "robot" doesn't appear in
                the actual docs. The AI-consumability is <Word>
                    <Bold />
                    structural
                </Word> (CLI architecture + typed wrappers + Rust speed), not a marketed feature. Which is, if anything, the
                stronger version of your thesis: the right substrate doesn't need to advertise itself as AI-ready, it just
                is.
            </Paragraph>
        </Message>
    </Chapter>
);
