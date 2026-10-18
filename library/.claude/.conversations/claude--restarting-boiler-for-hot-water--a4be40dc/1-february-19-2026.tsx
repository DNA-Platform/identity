import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[19 February 2026](2026-02-19)</Date>
        </Dated>
        <Title>[[ 19 February 2026 ]]</Title>
        <Message
            at="2026-02-19T16:55:10.509986Z"
        >
            <Origin>019c76d3-a3a0-73ee-afe6-185983e0f773</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Give me steps in English for how to restart this boiler because we need to to get hot water working
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-19T16:55:27.402893Z"
        >
            <Origin>019c76d3-a3a0-7c43-bdbf-37a881f47c1e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>Restarting Your Airfel Digifix Duo</Heading>
            <Paragraph>Here's what to do based on what I can see on the panel:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Check if it's in error/lockout mode.
                </Word> The red light between the display and the dials — if it's solid or flashing, the boiler has locked
                out and needs a reset.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Reset the boiler.
                </Word> There should be a small <Word>
                    <Bold />
                    reset button
                </Word> right next to or behind that red indicator light (often labeled "R"). Press and hold it for about
                3–5 seconds, then release. The display should flash or change as it restarts the ignition sequence.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Check the right dial (hot water, marked with the tap/faucet icon).
                </Word> Make sure it's turned up from "min" toward "max" — if it's set to off or minimum, you won't get hot
                water even if the boiler is running.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Check the left dial (heating, marked with the radiator icon).
                </Word> This controls central heating. Set it as needed, but for hot water specifically the right dial
                matters most.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Wait 30–60 seconds.
                </Word> After resetting, the boiler should attempt to fire. You should hear the ignition click and the fan
                start. The display temperature should begin climbing when you open a hot water tap.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If it locks out again after reset:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Check water pressure
                    </Word> — look at the pressure gauge (usually on the bottom of the unit or on the pipes below). It
                    should read between 1.0–1.5 bar. If it's below 1.0, you'll need to use the filling loop (the valve
                    assembly on the pipes underneath) to re-pressurize.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Check the gas supply
                    </Word> — make sure the yellow gas line valve below is open.
                </Line>
                <Line>
                    If it locks out repeatedly, you'll need a technician — it could be a flame sensor, ignition, or gas
                    valve issue.
                </Line>
            </Paragraph>
            <Paragraph>Want help identifying the filling loop on the pipes at the bottom to check pressure?</Paragraph>
        </Message>
        <Message
            at="2026-02-19T16:57:38.071685Z"
        >
            <Origin>019c76d5-e3b6-7b6b-aea2-fcf242da01ce</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I held the red button, but there’s still this little flashing wrench. I didn’t hear anything but a faint
                click that could’ve been an ignition trying. I’m still in the 30 to 60 period of time but it’s about to end
                and the little wrench is still flashing. I don’t think anything is happening.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-19T16:57:49.634832Z"
        >
            <Origin>019c76d5-e3b6-74e3-90ae-a496cc10079c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The flashing wrench is a fault indicator — the boiler is locked out on an error and the reset didn't clear
                it. That single click you heard was likely a failed ignition attempt.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Next steps to try:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Check the error code.
                </Word> The display showing "23" (or whatever number is there now) — that's likely a fault code, not a
                temperature. Can you tell me what number is currently showing on the display? That will tell us exactly
                what's wrong.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Check gas supply.
                </Word> Look at the yellow gas pipe underneath. Follow it down — there should be a valve handle (lever or
                small tap). Make sure it's fully open (typically parallel to the pipe = open, perpendicular = closed). If
                someone shut off gas, nothing will ignite.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Check water pressure.
                </Word> Look at the pipes underneath or on the underside of the unit for a small round pressure gauge. If
                pressure has dropped below ~0.5 bar, the boiler won't fire. What does it read?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Try a full power cycle.
                </Word> Turn both dials all the way to "off" (counterclockwise), then unplug the boiler from the wall (or
                switch off its dedicated electrical switch/breaker) for a full 60 seconds. Plug it back in, turn the dials
                back up, and try the reset button again.
            </Paragraph>
            <Paragraph>
                The error code number on the display is the most useful thing right now — can you read what it says?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-19T16:58:31.159699Z"
        >
            <Origin>019c76d6-b0df-7de1-9476-ce714285bd93</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It is 23 as you see, and when I clicked the red button, I see LP whatever that means. The water pressure is
                fine, but the wrench is still flashing.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-19T16:58:50.869101Z"
        >
            <Origin>019c76d6-b0df-7648-be54-30f14e420e55</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me look up what error code 23 and "LP" mean for this specific model.</Paragraph>
            <Action>Searched the web for “Airfel Digifix Duo error code 23 LP”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    LP = Low Pressure.
                </Word> Despite the water from taps seeming fine, this is about the <Word>
                    <Bold />
                    closed heating circuit pressure
                </Word> inside the boiler — not your mains water supply. The boiler is refusing to fire because its internal
                system pressure has dropped below 1 bar.
            </Paragraph>
            <Paragraph>Here's what to do:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Find the blue filling valve.
                </Word> On your Digifix Duo, it's located on the <Word>
                    <Bold />
                    bottom right
                </Word> of the boiler, among those pipes you can see in the photo. Look for a small blue tap/valve.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Open it slowly.
                </Word> Turn the blue valve <Word>
                    <Bold />
                    to the left
                </Word> (counterclockwise). You should hear water flowing into the system.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Watch the pressure gauge.
                </Word> There should be a small pressure gauge on the <Word>
                    <Bold />
                    bottom left
                </Word> of the unit. Keep filling until it reads <Word>
                    <Bold />
                    1.5 bar
                </Word>, then <Word>
                    <Bold />
                    immediately close the valve
                </Word> by turning it back to the right. Don't overfill — going above 2 bar can trigger the pressure relief
                valve.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. The LP error should clear automatically
                </Word> once pressure reaches the right level. If the wrench icon persists after pressure is at 1.5, press
                the reset button (R) once more.
            </Paragraph>
            <Paragraph>The boiler should then fire up and you'll have hot water.</Paragraph>
            <Paragraph>
                One thing to keep in mind: if you find yourself needing to re-pressurize frequently (every few days/weeks),
                there's likely a slow leak somewhere in the system — a radiator valve, a pipe joint, or the boiler's
                expansion tank could be the culprit. But for now, topping up the pressure should get you running.
            </Paragraph>
        </Message>
    </Chapter>
);
