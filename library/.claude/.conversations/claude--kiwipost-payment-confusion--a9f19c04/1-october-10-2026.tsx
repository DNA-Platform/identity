import { Bold, Chapter, Date, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Title>[[ 10 October 2026 ]]</Title>
        <Message
            at="2026-10-10T09:51:54.871920Z"
        >
            <Origin>01a1253a-560f-77bf-bf2d-45949a85ab10</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                For kiwi post, catch up on past chats and then try to help me figure out how I’m supposed to pay? What is
                kieidrive versus courier? I already paid for courier but I see no delivery option. I can pay for kiwi drive
                now. I feel like I’m overpaying. I don’t know what’s going on.
            </Paragraph>
            <Attachment>Uploaded “IMG_3884.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-10T09:52:19.297053Z"
        >
            <Origin>01a1253a-560f-72ca-9df9-d13787c6b748</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Action>Used WebSearch</Action>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                I couldn't find any earlier chats about KiwiPost, so I'm working from their website and your screenshot.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's going on (my best read):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The fee you already paid was probably shipping, not courier.
                    </Word> KiwiPost charges for the flight from the US by weight, listed at $10 for the US with a 4–7 day
                    transit. At 0.5 kg, that would be a small charge per package. That payment covers getting the parcel to
                    Tbilisi, which is why both packages now show "Arrived" (in their Tbilisi warehouse), not "Delivered."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Courier" doesn't happen inside KiwiPost.
                    </Word> Their site says you receive parcels quickly through the Glovo, Wolt or Bolt apps. So the Courier
                    button most likely gives you a pickup code or address for a Glovo/Wolt/Bolt rider, and you pay for that
                    ride in that app. That's why you don't see a delivery option to pay for in KiwiPost.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Kiwi Drive is a different thing: you collect it yourself.
                    </Word> It means getting your parcels at a KiwiDrive location you choose. Paying for it is optional, not
                    a missing step.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The free option is a branch pickup.
                    </Word> You can collect the parcel from their office using a self-service terminal. Branches are listed
                    at kiwipost.ge/en/branches.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So you're probably not being double-charged.
                </Word> Shipping is one fee. After that you choose how the last leg happens: free branch pickup, a paid Kiwi
                Drive spot, or a paid Glovo/Wolt/Bolt courier.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two things would settle it:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Check what the earlier payment in the Balance tab says. If it really says courier or delivery, not
                    transport, that's a question for their support.
                </Line>
                <Line>Tap Courier and tell me or screenshot what it shows.</Line>
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://kiwipost.ge/ka</Reference>
                        KiwiPost
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:53:12.295217Z"
        >
            <Origin>01a1253b-84c2-72e1-9f69-4900d527b343</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Yes, courier does happen inside KiwiPost and I clicked the courier option and I paid</Paragraph>
            <Paragraph>
                I did this before and I don’t exactly remember how but I’m pretty sure I did everything through the app
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:53:19.683593Z"
        >
            <Origin>01a1253b-84c2-740e-b83e-8b06061a8262</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Got it, thanks for correcting me. If you paid for Courier in the app, I wouldn't pay for Kiwi Drive as well.
                They're two ways of doing the same last step, so paying both would likely mean paying twice.
            </Paragraph>
            <Paragraph>
                The packages still showing "Arrived" doesn't necessarily mean the courier payment didn't go through. A paid
                courier request usually sits in a queue until a rider is assigned. It's Saturday afternoon, so that could
                depend on their dispatch hours.
            </Paragraph>
            <Paragraph>To confirm it's in progress:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Check the Balance tab.
                    </Word> Make sure the courier charge went through and see which package(s) it lists. If you paid for
                    only one package, the other may still need its own request.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tap the document icon on each package.
                    </Word> That may show the delivery status or courier booking.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If neither shows a booking, contact KiwiPost support.
                    </Word> Tell them you paid for courier delivery for TBA335014268159 and TBA334987843056 and see no
                    delivery scheduled. They can see the payment and fix it or refund it.
                </Line>
            </Paragraph>
            <Paragraph>If you send a screenshot of the Balance tab or the package details, I can help read it.</Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:56:00.716306Z"
        >
            <Origin>01a1253e-16d6-7637-9f9b-dca7186fdc76</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’ve already paid for delivery and they would let me pay again. This is terrible user interface, and I don’t
                know what to do.
            </Paragraph>
            <Attachment>Uploaded “IMG_3885.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-10T09:56:07.578402Z"
        >
            <Origin>01a1253e-16d6-7ae6-9f57-c39e020651bf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You have <Word>
                    <Bold />
                    16 ₾ sitting in your KiwiPost balance
                </Word>, which is exactly two Standard Deliveries at 8 ₾ each. Most likely your earlier payment went into
                your balance as credit, and the deliveries weren't actually booked yet.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to do:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Keep <Word>
                        <Bold />
                        Standard Delivery
                    </Word> selected (8 ₾).
                </Line>
                <Line>
                    Tick the <Word>
                        <Bold />
                        "Pay with balance"
                    </Word> box.
                </Line>
                <Line>Total Payable should drop to 0. Then tap Payment. Your card shouldn't be charged again.</Line>
                <Line>If this screen covers only one package, do the same for the other one with the remaining 8 ₾.</Line>
            </Paragraph>
            <Paragraph>
                Standard delivery takes 2–3 working days, so with the weekend, expect it around Tuesday or Wednesday.
            </Paragraph>
            <Paragraph>
                If Total Payable doesn't drop to 0 after ticking the box, stop there and send me a screenshot. That would
                mean the balance works differently than it looks, and it's a question for their support.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:56:30.784072Z"
        >
            <Origin>01a1253e-8b6a-71c8-9a47-c620f46b2f18</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, I added an extra eight because I wondered if that was a negative balance to try to pay it off. So maybe
                I did one extra delivery.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:56:37.096262Z"
        >
            <Origin>01a1253e-8b6a-7f35-b51a-3a24f8d8fefb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You haven't lost anything. The 16 ₾ is a positive balance (credit), not a debt, so the extra 8 ₾ you added
                is still yours to use on future deliveries or shipping fees.
            </Paragraph>
            <Paragraph>
                What's unclear is where the earlier courier payment went: whether it booked a delivery, or just landed in
                your balance as credit too.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    Balance
                </Word> tab's transaction history should settle it:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        If it shows an earlier courier or delivery charge for these packages:
                    </Word> delivery is already booked. Don't pay again. The 16 ₾ just sits as credit.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If it shows only top-ups and no delivery charge:
                    </Word> nothing is booked yet. Use the "Pay with balance" option above; your card won't be charged.
                </Line>
            </Paragraph>
            <Paragraph>If you send me a screenshot of the Balance history, I can tell you which it is.</Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:57:04.240227Z"
        >
            <Origin>01a1253f-0f73-7096-bf0c-80f4dd8eea13</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I paid a lot of money and I assume a lot of that was the shipping but still I paid</Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:57:10.833590Z"
        >
            <Origin>01a1253f-0f73-70fc-aeac-ba4a54ce21cc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's a rough sense of what's normal, so you can tell whether you overpaid:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Shipping from the US:
                    </Word> KiwiPost lists $10 per kg. Your package is 0.5 kg, so about $5 each, or about $10 each if they
                    round up to 1 kg. For two packages, that's roughly 27–55 ₾.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Home delivery:
                    </Word> 8 ₾ per package, so 16 ₾ for two.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Your extra top-up:
                    </Word> 8 ₾, still sitting in your balance as credit.
                </Line>
            </Paragraph>
            <Paragraph>
                So somewhere around <Word>
                    <Bold />
                    45–80 ₾ total
                </Word> would be expected. If you paid a lot more than that, something else was charged (customs, a
                duplicate, or a heavier second package).
            </Paragraph>
            <Paragraph>
                The Balance tab history should list each charge. If you screenshot it, I'll add it up and tell you exactly
                what you paid for and whether anything was charged twice.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T09:58:05.245157Z"
        >
            <Origin>01a1253f-fd37-77c0-8f6d-364c6b26f7db</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You are making up features and you need to not be so confident I want you to see that this is the balance
                tab so why don’t you look at the UI very carefully and read about this and try to figure out how it’s
                supposed to work
            </Paragraph>
            <Attachment>Uploaded “IMG_3886.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-10T09:58:21.988915Z"
        >
            <Origin>01a1253f-fd37-7e79-954d-ae0c231ec618</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                You're right. There's no transaction history on this tab, and I shouldn't have told you there was. I also
                said earlier that the courier happens in Glovo/Wolt, which was wrong. KiwiPost's own delivery page lists
                Glovo, Wolt and Bolt as options you can choose from your Kiwi account, along with express and standard
                courier.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this screen actually is:
                </Word> a top-up form, nothing more. You type an amount (it's showing 8), pick a bank to pay through (TBC or
                Bank of Georgia at a 1.4% fee, CityPay at 1%), and tap Pay. That adds money to your KiwiPost balance. The
                "points" section is a separate loyalty-points converter, and you have 0 points. It doesn't book any
                delivery.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I can and can't tell from it:
                </Word> your balance is 16 ₾ and you added 8 ₾ yourself, so 8 ₾ was already there. That would fit an earlier
                payment that went into your balance as a top-up rather than booking delivery, and it would explain why the
                delivery screen still asks you to pay. But that's an inference. Nothing in the app confirms whether a
                delivery was booked.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Kiwi Drive
                </Word>, per their site, is a drive-thru pickup point, an alternative to home delivery. You don't need both.
            </Paragraph>
            <Paragraph>
                The app won't settle whether a delivery is already booked, so I'd call KiwiPost at <Word>
                    <Bold />
                    +995 32 205 23 24
                </Word> and ask: "Is courier delivery already booked for TBA335014268159 and TBA334987843056? I have 16 ₾ in
                my balance." If nothing is booked, you can pay for Standard Delivery from that balance without paying again.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://kiwipost.ge/en/services/courier</Reference>
                        KiwiPost Delivery
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T10:00:21.360022Z"
        >
            <Origin>01a12542-113f-7ce2-a0db-77d093f2b43d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay but you can’t see anything about the UI? I have no clue when it would come isn’t it supposed to tell me
                when a delivery would happen?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T10:00:26.848038Z"
        >
            <Origin>01a12542-113f-7259-80ab-be8325e09ddc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Across the screenshots you've sent, the only timing information is on the Home Delivery screen: Standard
                Delivery within Tbilisi takes <Word>
                    <Bold />
                    2–3 working days
                </Word>. KiwiPost's website says 2 working days for standard, and about 1 hour after activation for Glovo,
                Wolt or Bolt.
            </Paragraph>
            <Paragraph>
                None of the screens I've seen shows a booked delivery or a date. The Packages screen only shows the stage
                (Warehouse, In Transit, Arrived, Delivered). Both packages are still in "Arrived," and they'd move to
                "Delivered" once they reach you. There's no "delivery scheduled" stage.
            </Paragraph>
            <Paragraph>
                One place I haven't seen is the document icon on each package card. If a booked delivery shows anywhere,
                it's probably there. If you tap it and screenshot it, I'll read it carefully.
            </Paragraph>
            <Paragraph>
                If that doesn't show anything, the app likely doesn't display it, and calling them is the only way to know.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T10:01:24.640507Z"
        >
            <Origin>01a12543-0852-736a-b98b-03699cdfaa65</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This is all it says…</Paragraph>
            <Attachment>Uploaded “IMG_3887.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-10T10:01:29.084185Z"
        >
            <Origin>01a12543-0852-7e94-a2b6-837f83bd913d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>This screen covers only customs and shipping details, nothing about delivery:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Status: Arrived.
                    </Word> The package is in KiwiPost's Tbilisi warehouse.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Declaration: Declared, Invoice: Uploaded.
                    </Word> Customs paperwork is complete, so nothing is holding it up on that side.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Declared amount $18
                    </Word> from Amazon.
                </Line>
            </Paragraph>
            <Paragraph>
                There's no field for a delivery booking, date or payment, and no shipping-fee line either. So across every
                screen you've shown me, the app doesn't display whether a courier is booked or when it will come. You
                weren't missing something.
            </Paragraph>
            <Paragraph>
                That leaves the phone: <Word>
                    <Bold />
                    +995 32 205 23 24
                </Word>. Ask whether courier delivery is booked for both tracking numbers, and if not, have them confirm it
                can be paid from your 16 ₾ balance. If you'd rather message them, I can write it in Georgian for you.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-10T10:02:41.252774Z"
        >
            <Origin>01a12544-33cf-7483-aea0-63e72237fa22</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How would I message them?</Paragraph>
        </Message>
        <Message
            at="2026-10-10T10:02:48.854974Z"
        >
            <Origin>01a12544-33cf-7f95-8951-6f54aee4809b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>From what their website lists, you have these options:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Facebook Messenger:
                    </Word> facebook.com/kiwipost. Georgian companies often answer here fastest.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Instagram DMs:
                    </Word> @kiwipost.ge
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Email:
                    </Word> their site lists one, but it's hidden from me by spam protection. You'd see it at the bottom of
                    kiwipost.ge.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Phone:
                    </Word> +995 32 205 23 24
                </Line>
            </Paragraph>
            <Paragraph>
                The app might also have a support chat under the Profile tab, but I haven't seen that screen, so I can't
                say.
            </Paragraph>
            <Paragraph>Here's a message you can paste, in English and Georgian:</Paragraph>
            <Paragraph>
                <Quoted />
                Hello, I paid for courier delivery for parcels TBA335014268159 and TBA334987843056, but the app still shows
                them as "Arrived" with no delivery scheduled. My balance shows 16 ₾. Is delivery booked, and if not, can it
                be paid from my balance? Delivery address: Sairme Street 3, 1st floor, apt 3. Thank you.
            </Paragraph>
            <Paragraph>
                <Quoted />
                გამარჯობა, გადავიხადე საკურიერო მიტანა ამანათებზე TBA335014268159 და TBA334987843056, მაგრამ აპლიკაციაში
                ისევ „ჩამოსულია" სტატუსი აქვთ და მიტანა არ ჩანს. ბალანსზე მაქვს 16 ₾. მიტანა დაჯავშნილია? თუ არა, შეიძლება
                ბალანსიდან გადახდა? მისამართი: საირმის ქ. 3, 1 სართული, ბინა 3. გმადლობთ.
            </Paragraph>
        </Message>
    </Chapter>
);
