import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-27T11:43:03.677559Z"
        >
            <Origin>019e693e-de57-7ff3-9295-e821aa3b22cf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I purchase telegram ideas perhaps in TON that are not tied to a russian number</Paragraph>
        </Message>
        <Message
            at="2026-05-27T11:43:48.155390Z"
        >
            <Origin>019e693e-de5a-7c65-8840-27fa53ae9ea3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Fragment anonymous number +888 Telegram buy TON”</Action>
            <Paragraph>
                Yes — what you're after is a Telegram <Word>
                    <Bold />
                    +888 anonymous number
                </Word>, bought with TON on <Word>
                    <Bold />
                    Fragment
                </Word> (fragment.com, Telegram's official TON marketplace). It's an NFT, not tied to any country's phone
                system at all — so by definition not tied to a Russian number, or any real SIM.
            </Paragraph>
            <Paragraph>How it works:</Paragraph>
            <Paragraph>
                <List />
                <Line>Connect a TON wallet (Tonkeeper or @wallet) to Fragment and buy a +888 number.</Line>
                <Line>
                    In Telegram → Settings → change number, enter the +888 number. When it asks for the OTP, you fetch the
                    login code from Fragment ("Get Login Code") instead of by SMS.
                </Line>
                <Line>You can either spin up a fresh account or move an existing account onto it.</Line>
            </Paragraph>
            <Paragraph>Two things worth knowing before you commit TON to it:</Paragraph>
            <Paragraph>
                The cheap days are over. The original direct-sale price was about 9 TON (~$16), but Telegram ended the
                initial direct issuance run, so buyers now acquire numbers on the secondary market from other holders. A
                late-2025 community snapshot put the floor around $2,500 — these turned into a speculative NFT class, so
                you're paying collector pricing, not utility pricing now.
            </Paragraph>
            <Paragraph>
                It's login-only. These aren't normal phone numbers — they're identifiers used only for Telegram
                login/verification, not for SMS or calls, and not for registering on other apps. So it solves "Telegram
                identity decoupled from a Russian number" but nothing beyond Telegram.
            </Paragraph>
            <Paragraph>
                One caveat for your location: Fragment has been geo-restricted in some locations, so you may need to check
                access from Tbilisi (or route around it).
            </Paragraph>
            <Paragraph>
                If the goal is just a non-Russian Telegram identity rather than an on-chain collectible specifically, a
                cheaper path is registering with a non-Russian SIM or a regular virtual-number service — but if you
                specifically want it in TON and decoupled from any SIM, the +888 route is the real answer. Which goal is it
                — the TON/on-chain part, or just getting off the Russian number?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T12:13:58.201557Z"
        >
            <Origin>019e695b-2b26-7374-9374-97b1baee3d40</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                With a russian phone number that is roaming but it is off. Does the message say the country that the phone
                is in? Ana seems to think this is possible
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T12:15:21.614708Z"
        >
            <Origin>019e695b-2b26-7186-acfa-9fe1da108a8b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Short answer: no — a message itself, whether SMS or Telegram, doesn't display the country the phone is
                physically in. There's no field in the message or its visible details that tells the sender "this phone is
                in Georgia." The only thing always visible is the +7 prefix, but that's the number's nationality, not where
                it currently is.
            </Paragraph>
            <Paragraph>
                Where Ana's intuition is pointing at something real, though: location <Word>
                    <Emphasis />
                    does
                </Word> exist — just at a different layer than the message. When a Russian SIM is powered on and registers
                on a Georgian network to roam, the Russian carrier knows it's currently sitting on a Georgian network —
                that's literally how roaming billing works. Parties with telecom-level access, and some commercial "HLR
                lookup" services, can query that and learn a number is currently roaming in a given country. That's
                invisible to an ordinary person texting her, but it's not nothing.
            </Paragraph>
            <Paragraph>
                The key piece for your scenario: that signal only exists <Word>
                    <Emphasis />
                    while the phone is actively registered on the foreign network
                </Word>. If roaming is off, or the phone is off, the SIM isn't registered abroad — so a live lookup can't
                pin a current foreign location. At most it would show a last-known network or just "unreachable." So
                "roaming off / phone off" removes the live location signal rather than creating one.
            </Paragraph>
            <Paragraph>
                So both things are true at once: the message never names the country, and the number can still leak location
                at the network level — but only when the phone is on and roaming.
            </Paragraph>
            <Paragraph>
                To tell you what actually applies here: is the worry about a <Word>
                    <Bold />
                    Telegram message or an ordinary SMS
                </Word>, and who's the person Ana thinks might be able to see the country? The answer differs depending on
                whether it's another regular user, the carrier, or someone with court/investigative reach.
            </Paragraph>
        </Message>
    </Chapter>
);
