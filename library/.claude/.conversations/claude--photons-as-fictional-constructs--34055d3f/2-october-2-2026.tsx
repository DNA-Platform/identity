import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[2 October 2026](2026-10-02)</Date>
        </Dated>
        <Title>[[ 2 October 2026 ]]</Title>
        <Message
            at="2026-10-02T11:58:17.236368Z"
        >
            <Origin>01a0fc7b-0c6b-7d76-8ac1-f684b825bc61</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’ve been thinking about it for a while and the experiment where they checked power consumption. Can’t the
                power just be left in the mass? What if the power consumption is fixed, but the power remains in the mass
                that should have radiated? You would need to check for minor fluctuations in mass
            </Paragraph>
        </Message>
        <Message
            at="2026-10-02T11:58:34.152519Z"
        >
            <Origin>01a0fc7b-0c6b-76b1-95f6-35e575b9dad7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that's coherent. If the input is fixed and part of the output never completes a transaction,
                conservation says the energy stays in the emitter, and any energy retained in a body is mass. Partridge
                measured only the input side, so an account where the unradiated energy is kept would leave his result
                untouched. It also has a natural Wheeler–Feynman mechanism: without the absorbers' advanced response, the
                emitter feels less radiative damping, so the energy that would have left as radiation stays in the
                oscillating charges.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Scale
                </Word>
            </Paragraph>
            <Paragraph>Retained energy is E = δ·P·t, and the mass change is Δm = E/c².</Paragraph>
            <Paragraph>
                <List />
                <Line>At Partridge's own bound (δ = 10⁻⁸, about 1 W, one day): E ≈ 10⁻³ J, so Δm ≈ 10⁻²⁰ kg.</Line>
                <Line>
                    Even if the mechanism hid a large effect from him (δ = 1%): E ≈ 860 J per day, so Δm ≈ 10⁻¹⁴ kg.
                </Line>
            </Paragraph>
            <Paragraph>
                Both are far below what weighing a macroscopic source can resolve. So the mass is the cleanest place the
                energy would be, but the weakest place to look for it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it would show up first
                </Word>
            </Paragraph>
            <Paragraph>
                Retained energy has to take some form inside the source, and each form is a far more sensitive proxy for the
                mass change:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Heat.
                    </Word> If it thermalizes, 860 J/day is easily detected by calorimetry, and even much smaller fractions
                    are within reach.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Stored oscillation energy.
                    </Word> Before thermalizing, reduced damping means the resonator holds more energy. That shows up as a
                    higher Q, larger field amplitude in the cavity, or a shift in the source's impedance, all measured
                    electrically.
                </Line>
            </Paragraph>
            <Paragraph>
                So the test of your version would be the Partridge setup with the measurement moved: hold the input fixed
                and compare the source's temperature or cavity Q between the free-space and local-absorber conditions. A
                direct mass measurement would only be needed if the energy were stored in some internal form with no thermal
                or electrical signature.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-02T12:00:26.054176Z"
        >
            <Origin>01a0fc7d-0365-7ea9-bd1b-dd5517c68218</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Why does it have to be in one place? Where was it before the photon was released? I would think it would be
                in the system in the form that could have, but didn’t cause an event like that.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-02T12:00:38.955208Z"
        >
            <Origin>01a0fc7d-0365-7bcf-9955-107befb2fa04</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It doesn't. In direct-action electrodynamics there is no field to hold energy in transit, so the energy
                isn't stored at a location. The Fokker action pairs emitter and absorber worldlines, and energy accounting
                is a relation between them, not a quantity sitting somewhere. In your terms, before release the energy is in
                the system as a possibility of an event: the excited configuration that could complete a transaction. If no
                absorber is there to complete it, nothing happens, and the configuration simply persists. That corrects my
                last answer, which assumed the retained energy had to show up as heat or stored oscillation in the source.
            </Paragraph>
            <Paragraph>
                There is a well-established case of exactly this: <Word>
                    <Bold />
                    inhibited spontaneous emission
                </Word>. Kleppner proposed in 1981, and Hulet, Hilfer and Kleppner showed in 1985, that an excited atom
                placed in a cavity with no modes available at its transition frequency doesn't emit. It stays excited far
                longer than its free-space lifetime. The general effect, emission rate set by the environment rather than by
                the atom alone, is the Purcell effect.
            </Paragraph>
            <Paragraph>
                Standard QED describes this as a missing field mode. Absorber theory describes it as a missing completing
                partner. Either way, the energy is "in the system in the form that could have, but didn't" cause the event:
                an unconsummated excited state, with no heat and no localized deposit.
            </Paragraph>
            <Paragraph>
                For the mass question, this means you wouldn't look for a place where the energy collected. The system's
                total (invariant) mass includes it wherever it resides, interaction energy included. So the comparison would
                be between system states, an emitter-plus-environment that completed versus one that didn't, rather than
                weighing the emitter alone.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-02T12:02:38.811424Z"
        >
            <Origin>01a0fc7f-0a04-7d2e-98a2-3e0e301aff74</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Wait, that’s a very interesting experiment with the atom that can’t interact</Paragraph>
        </Message>
        <Message
            at="2026-10-02T12:02:54.934513Z"
        >
            <Origin>01a0fc7f-0a04-7a0e-81b3-1b03229bba56</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                The 1985 experiment is the clean version of what you're describing. Kleppner had proposed in 1981 that
                spontaneous emission could be suppressed, and Hulet, Hilfer and Kleppner demonstrated it in "Inhibited
                Spontaneous Emission by a Rydberg Atom" (<Word>
                    <Emphasis />
                    PRL
                </Word> 55, 2137).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The setup.
                </Word> Highly excited Rydberg atoms, whose transitions are at millimetre wavelengths, flew between two
                parallel conducting plates. When the gap is narrower than half the transition wavelength (λ/2d &gt; 1), the
                plates admit no mode for the emitted radiation. In your terms, there is no partner to complete the event.
                Lifetime was measured by time-of-flight.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The result.
                </Word> Inside the inhibited region, the atom's lifetime was at least 20 times longer than in free space.
                When the gap was widened past the threshold (λ/2d &lt; 1), emission was enhanced instead. The atom stays
                excited and holds its energy simply because the event can't complete.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The framing they drew from it.
                </Word> Haroche and Kleppner wrote that spontaneous emission is a property of the atom-plus-vacuum system,
                not of an isolated atom. Its irreversibility comes from the infinity of vacuum states available to the
                photon, and changing those states inhibits or enhances emission. That is very close to your relational
                account. Their "vacuum states" do the work that absorbers do in Wheeler–Feynman.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it went.
                </Word> The same approach has been extended to circular Rydberg states held in cryogenic traps, which
                prevent spontaneous emission and keep the states stable for minutes. Earlier, Drexhage's work in the 1970s
                had shown fluorescence lifetimes changing with a molecule's distance from a mirror, a softer version of the
                same effect.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://physicstoday.aip.org/features/cavity-quantum-electrodynamics</Reference>
                        Physics Today: Cavity Quantum Electrodynamics (Haroche &amp; Kleppner 1989)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://dspace.mit.edu/bitstream/1721.1/56985/1/RLE_PR_129_22.pdf</Reference>
                        MIT RLE Progress Report 129
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://physicstoday.aip.org/obituaries/daniel-kleppner</Reference>
                        Physics Today: Daniel Kleppner obituary
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://ar5iv.labs.arxiv.org/html/quant-ph/0407202</Reference>
                        Trapping a circular Rydberg atom (arXiv quant-ph/0407202)
                    </Word>
                </Line>
            </Paragraph>
        </Message>
    </Chapter>
);
