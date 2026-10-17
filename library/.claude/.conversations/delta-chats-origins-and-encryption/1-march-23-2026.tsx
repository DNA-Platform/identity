import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Title>[[ 23 March 2026 ]]</Title>
        <Message
            at="2026-03-23T21:10:09.122567Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Who invented delta chat. Where does its encryption come from</Paragraph>
        </Message>
        <Message
            at="2026-03-23T21:10:30.073816Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Delta Chat inventor history encryption”</Action>
            <Action>Searched the web for “Delta Chat founder Björn Petersen Merlinux origin story”</Action>
            <Paragraph>Delta Chat has an interesting origin story with two key figures.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Origin
                </Word>
            </Paragraph>
            <Paragraph>
                Delta Chat was developed in 2017 by Björn Petersen, who wanted to build a secure communication tool for his
                13-year-old daughter as an alternative to WhatsApp, Telegram, etc. He used the email ecosystem as the
                foundation for an end-to-end encrypted, decentralized, server-independent messaging app. The Android version
                originated as a fork of Telegram in 2016, and later in 2019 switched to being based on Signal's UI.
            </Paragraph>
            <Paragraph>
                The organizational home is <Word>
                    <Bold />
                    Merlinux GmbH
                </Word>, based in Freiburg, Germany. Holger Krekel is the Founder and Managing Director of Merlinux, the
                limited company that channels funding to contributors. So Petersen built it; Krekel steers the organization.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Encryption
                </Word>
            </Paragraph>
            <Paragraph>Delta Chat's encryption stack has three layers:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        OpenPGP
                    </Word> — Delta Chat uses the decades-old, proven OpenPGP standard for end-to-end encryption. When
                    linking an email account, it automatically generates key pairs during initial setup and allows import of
                    existing keys.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Autocrypt
                    </Word> — Delta Chat implements the Autocrypt standard, which automates key exchange by embedding public
                    keys in message headers, so encryption activates without user intervention after the first message
                    exchange.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        SecureJoin
                    </Word> — Delta Chat released its "guaranteed end-to-end encryption" in November 2023 based on the
                    SecureJoin protocol, which was subsequently subjected to a cryptographic security analysis by the
                    Applied Cryptography Group at ETH Zurich, resulting in 20 identified issues being fixed.
                </Line>
            </Paragraph>
            <Paragraph>
                One notable limitation: OpenPGP does not support Perfect Forward Secrecy, meaning that if keys are
                compromised, past messages could theoretically be decrypted. This is a fundamental tradeoff compared to
                Signal's protocol.
            </Paragraph>
            <Paragraph>
                The architecture is structurally interesting from your perspective — when Roskomnadzor requested user data
                and decryption keys in 2024, Delta Chat's response was that it simply has no central registry of email
                addresses, messages, or decryption keys, since users choose their own email providers independently. The
                censorship-resistance is baked into the architecture, not just claimed.
            </Paragraph>
        </Message>
    </Chapter>
);
