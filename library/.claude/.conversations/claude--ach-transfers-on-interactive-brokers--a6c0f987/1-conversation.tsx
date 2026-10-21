import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-04T22:12:55.954862Z"
        >
            <Origin>019df50d-4131-73e7-a76c-ac4434dfd38e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can ai send an ACH from interactive brokers?</Paragraph>
        </Message>
        <Message
            at="2026-05-04T22:13:12.676357Z"
        >
            <Origin>019df50d-4132-7676-8208-e39cf6a0bf6d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Interactive Brokers ACH withdrawal send money”</Action>
            <Paragraph>
                Yes — ACH is supported for both deposits and withdrawals on Interactive Brokers, alongside the SWIFT/wire
                option you've been using. A few specifics worth knowing:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    One free ACH withdrawal per calendar month; after that, USD ACH withdrawals cost $1 each (vs. $10 for
                    additional wires).
                </Line>
                <Line>
                    For funds deposited via ACH, there's a 5 business day hold before they can be withdrawn back to the
                    originating bank — and a 44 business day hold if you want to send them to a different bank account.
                </Line>
                <Line>Daily limits depend on your security method — IB Key authentication allows up to $1M/day.</Line>
                <Line>
                    You first link the bank via Transfer &amp; Pay → Transfer Funds → Link a Bank Account, with verification
                    by either instant credentials login, routing/account entry, or micro-deposits.
                </Line>
            </Paragraph>
            <Paragraph>
                Caveat: ACH is US-domestic USD only, so the receiving bank needs to be a US bank. If you're trying to send
                to a Georgian or other non-US account, that still has to go via SWIFT.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-04T22:16:28.900397Z"
        >
            <Origin>019df510-8241-7519-ad2d-635c53935938</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is it considered a bank because the ACH thing that I read says US Bank only</Paragraph>
        </Message>
        <Message
            at="2026-05-04T22:16:53.477870Z"
        >
            <Origin>019df510-8242-7794-947f-c9aad2387720</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Interactive Brokers ACH routing number broker dealer not bank”</Action>
            <Paragraph>
                Technically IBKR is a broker-dealer, not a bank — but for ACH purposes it doesn't matter, because IBKR plugs
                into the ACH network through partner banks. UMB Bank handles direct deposit routing and Citi handles their
                Virtual Account Number (VAN) routing — both are IBKR's intermediary banks. So from the rails' perspective,
                an ACH from IBKR is really an ACH from UMB or Citi on IBKR's behalf.
            </Paragraph>
            <Paragraph>
                What "US bank only" actually means for ACH is that <Word>
                    <Bold />
                    both ends
                </Word> of the transfer must be US financial institutions with a routing number on the ACH network. That
                includes US banks, US credit unions, and US broker-dealers like IBKR that have a partner bank relationship.
                It excludes non-US banks entirely — the ACH network doesn't reach Credo Bank in Georgia, for instance.
            </Paragraph>
            <Paragraph>
                So the practical translation for your situation: you can ACH from IBKR to any US bank account in your name
                (Citi, Chase, Mercury, etc.), but not directly to your Georgian account. For getting funds to Georgia, SWIFT
                remains the only direct route — which is what your free monthly wire is for.
            </Paragraph>
        </Message>
    </Chapter>
);
