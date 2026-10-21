import { Bold, Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-12T18:40:45.304808Z"
        >
            <Origin>019c5327-ddad-77c1-bff0-748bb3f21e7d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are basic telegram gifts on the blockchain?</Paragraph>
        </Message>
        <Message
            at="2026-02-12T18:40:59.746285Z"
        >
            <Origin>019c5327-ddae-72ee-aaa9-9d7992a29a3e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Telegram basic gifts blockchain”</Action>
            <Paragraph>
                No. Regular (basic) gifts are simple virtual items with unlimited supply that have no real value — they
                cannot be traded on the secondary market and have no possibility of being converted into NFTs. They're just
                in-app animations stored on Telegram's servers.
            </Paragraph>
            <Paragraph>
                Only gifts that have been upgraded to "collectibles" become blockchain assets on TON. Upgrading costs a
                small amount of Telegram Stars to cover blockchain fees, and there's a 21-day hold period after receiving a
                gift before it can be upgraded. Once upgraded, the gift gets unique traits (backdrop, symbol, number) and
                lives on-chain as an NFT that can be traded on marketplaces like Fragment or Getgems.
            </Paragraph>
            <Paragraph>
                So the short version: basic gifts = off-chain, collectible/upgraded gifts = on-chain (TON blockchain).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fact 1 (Linguistics):
                </Word> The Hawaiian language has one of the smallest phonemic inventories of any language, with only 8
                consonants and 5 vowels — yet it can express complex abstract concepts through compounding and context.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fact 2 (Physics):
                </Word> Cherenkov radiation — that eerie blue glow seen in nuclear reactor pools — occurs when a charged
                particle travels through water faster than the speed of light <Word>
                    <Emphasis />
                    in that medium
                </Word> (about 75% of light's speed in vacuum), creating an optical "sonic boom."
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T18:43:18.732101Z"
        >
            <Origin>019c532a-3411-7569-9bb2-d2fbb981fbf4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Please, no fact and how do I upgrade one? Can I upgrade it after I have given it?</Paragraph>
        </Message>
        <Message
            at="2026-02-12T18:43:34.648732Z"
        >
            <Origin>019c532a-3411-789b-a3c3-a3d795a3ad79</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Paragraph>Got it, no more facts going forward.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How to upgrade a gift:
                </Word>
            </Paragraph>
            <Paragraph>
                Go to <Word>
                    <Bold />
                    My Profile → Gifts
                </Word>, tap the gift you want to upgrade, and you'll see an "Upgrade" option. Upgrading costs a small
                amount of Telegram Stars to cover blockchain fees. Once upgraded, it gets a randomized unique appearance
                with custom traits (backdrop, symbol, number).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Can you upgrade after giving it?
                </Word>
            </Paragraph>
            <Paragraph>
                No — the upgrade option appears after you <Word>
                    <Emphasis />
                    receive
                </Word> a gift, not after you send one. So the <Word>
                    <Bold />
                    recipient
                </Word> is the one who decides whether to upgrade it to a collectible. That said, when buying a gift for
                someone, you can send it already upgraded so they unwrap a collectible right in the chat. But once you've
                already sent a basic gift, it's in the recipient's hands — they'd need to upgrade it themselves.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-12T18:46:09.822420Z"
        >
            <Origin>019c532c-d09d-7776-aa97-ef82c76efb81</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I don’t see the option to upgrade</Paragraph>
            <Attachment>Uploaded “IMG_2893.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-12T18:46:18.715583Z"
        >
            <Origin>019c532c-d09d-7ec6-8bc1-2e0c49b73bf3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's because this Rose gift appears to be one of the unlimited supply basic gifts — and only <Word>
                    <Bold />
                    limited edition
                </Word> gifts (ones with a finite supply) are eligible for upgrading to collectibles. The Rose at 25 Stars
                is a common gift with unlimited availability, so there's no upgrade path for it.
            </Paragraph>
            <Paragraph>
                If you want a gift that can become a collectible, you'd need to look for gifts marked as "Limited" when
                browsing the gift store — those are the ones with upgrade potential. They're typically more expensive in
                Stars as well.
            </Paragraph>
            <Paragraph>Still a sweet first gift from Ana though. 🌹</Paragraph>
        </Message>
        <Message
            at="2026-02-12T18:49:01.439922Z"
        >
            <Origin>019c532f-6ef0-7138-8435-ceaf09492718</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are these limited?</Paragraph>
            <Attachment>Uploaded “IMG_2894.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-12T18:49:12.313534Z"
        >
            <Origin>019c532f-6ef0-76eb-bd1c-d2d9985892c1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — these are already upgraded collectibles on the resale marketplace. You can tell because they each have
                unique collectible numbers (like #291181), different backdrop colors, model variations, and symbols. The
                header shows "11,481 for resale" for the Desk Calendar collection.
            </Paragraph>
            <Paragraph>
                These range from about 827–835 Stars each. With your balance of 50 Stars you'd need to top up to grab one.
                If you buy one from resale, it's already a collectible — no upgrade step needed.
            </Paragraph>
        </Message>
    </Chapter>
);
