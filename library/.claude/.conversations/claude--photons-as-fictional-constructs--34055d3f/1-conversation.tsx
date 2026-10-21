import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-09-29T10:41:51.641856Z"
        >
            <Origin>3fea1114-f3ff-4d02-b835-aae071e051f1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I want to understand was it Feynmann and Wheelers explorations into how photons might be fictional due to
                their unique properties like considering all paths and proagating backward in time according to Maxwell's
                equations, and why that line of thought was abandoned
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T10:42:09.144900Z"
        >
            <Origin>1c7b6a9c-79b0-4475-aa24-6b09d0faa64d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that's Wheeler–Feynman <Word>
                    <Bold />
                    absorber theory
                </Word> (1945, 1949). One refinement to the framing: their aim wasn't that photons are fictional as quanta.
                They wanted to eliminate the electromagnetic field as an independent entity with its own degrees of freedom.
                The "all paths" element came later and separately, in Feynman's path integral, though it grew out of the
                same program.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The idea
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Direct action at a distance.
                    </Word> Following Schwarzschild, Tetrode and Fokker, charges interact directly along light cones. There
                    is no field carrying energy through empty space, so a "photon" is just the bookkeeping of an interaction
                    between an emitter and an absorber.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Time-symmetric radiation.
                    </Word> Maxwell's equations admit both retarded (forward-in-time) and advanced (backward-in-time)
                    solutions. Wheeler and Feynman took each charge's influence as half retarded plus half advanced.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The absorber condition.
                    </Word> If the universe perfectly absorbs all radiation in the future, the absorbers' advanced responses
                    combine with the source's own field. The result is exactly the observed pure-retarded radiation plus the
                    Abraham–Lorentz radiation-reaction force.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No self-interaction.
                    </Word> A charge doesn't act on itself. That removes the infinite self-energy of the point electron,
                    which was Feynman's original motivation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Offshoots.
                    </Word> Wheeler's "one-electron universe" remark, that positrons are electrons running backward in time,
                    fed into Feynman's positron theory and diagrams.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it was abandoned
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Quantization broke the key assumption.
                    </Word> Feynman spent years trying to quantize the direct-action theory, and that effort produced the
                    path integral. But when QED was being checked against the Lamb shift and vacuum polarization, closed
                    loops were essential. A charge's interaction with itself, including virtual pair creation, turned out to
                    be physically necessary. Feynman said in his Nobel lecture that he eventually had to give up the premise
                    that the electron doesn't act on itself.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Field QED worked and was simpler.
                    </Word> Once renormalization tamed the infinities, the field picture gave the same classical results
                    with less machinery. The absorber picture offered no new predictions to justify its cost.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The absorber condition is cosmological.
                    </Word> It requires the future universe to be a complete absorber. This makes the arrow of radiation
                    depend on cosmology, and the condition isn't obviously satisfied in an expanding universe.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Afterlife
                </Word>
            </Paragraph>
            <Paragraph>
                It wasn't refuted so much as left behind. Hoyle and Narlikar carried it into cosmology in the 1960s and 70s,
                and Paul Davies built a quantum absorber version in the 1970s that recovered more of QED. Cramer's
                transactional interpretation of quantum mechanics (1986) revived the advanced wave "handshake" directly. It
                is also a recurring reference point in discussions of retrocausality and the thermodynamic versus radiative
                arrow of time.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T10:43:37.445405Z"
        >
            <Origin>0534c734-108f-4468-a763-2db3ad51bbf6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, bookkeeping. Bookkeeping is fictional and representational. Were one to find an imbalance in one's
                budget, what we wrote down to determine it is not a part of the actual account of why transactions don't
                align. Rewrite your response bearing that in mind
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T10:43:51.320761Z"
        >
            <Origin>a6e80aef-e88a-459a-b767-c3c6ee70ad05</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and that makes "fictional" the correct word for what they proposed. Here is the account
                rewritten in those terms.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The idea
                </Word>
            </Paragraph>
            <Paragraph>
                Wheeler–Feynman absorber theory (1945, 1949) treats the electromagnetic field, and so the photon, as a
                ledger rather than a participant. The real events are direct interactions between charges along light cones,
                following Schwarzschild, Tetrode and Fokker. The field is what we write down to keep track of those
                interactions. It has no degrees of freedom of its own, just as a budget entry has no independent existence
                apart from the transactions it records.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Time-symmetric entries.
                    </Word> Maxwell's equations admit both retarded and advanced solutions. Each charge's influence is
                    recorded as half of each, so the ledger itself has no preferred direction.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The absorber condition.
                    </Word> If the future universe absorbs all radiation, the absorbers' advanced responses combine with the
                    source's own. What appears on the books is pure retarded radiation plus the Abraham–Lorentz
                    radiation-reaction force, even though no field was doing anything.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No self-interaction.
                    </Word> A charge can't transact with itself, so there is no entry for that. This removes the infinite
                    self-energy of the point electron, which was Feynman's original motivation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Offshoots.
                    </Word> Wheeler's "one-electron universe," with positrons as electrons running backward in time, fed
                    into Feynman's positron theory and diagrams. The path integral grew out of his attempt to quantize this
                    picture.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it was abandoned
                </Word>
            </Paragraph>
            <Paragraph>
                In your terms: the books stopped balancing without entries that corresponded to no transaction between two
                charges.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Quantization needed self-entries.
                    </Word> In quantizing the theory, the Lamb shift and vacuum polarization required closed loops: a charge
                    interacting with itself, including virtual pair creation. The direct-action ledger has no line for
                    these, and they were measured. Feynman said in his Nobel lecture that he had to give up the premise that
                    the electron doesn't act on itself.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The field ledger was cheaper to keep.
                    </Word> Once renormalization handled the infinities, treating the field as real gave the same classical
                    results with less machinery. The fictional-ledger view offered no new predictions to justify its cost.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Balancing depended on the whole universe's books.
                    </Word> The absorber condition requires the future universe to absorb everything. So the direction of
                    radiation hinges on cosmology, and that condition isn't clearly met in an expanding universe.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Afterlife
                </Word>
            </Paragraph>
            <Paragraph>
                It was set aside rather than refuted. Hoyle and Narlikar pursued it cosmologically, and Davies built a
                quantum absorber version in the 1970s that recovered more of QED, including some of the self-interaction
                entries. Cramer's transactional interpretation (1986) revived the idea most directly. There, the
                advanced/retarded "handshake" between emitter and absorber is the real transaction, and the wave is its
                record.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T10:50:52.231273Z"
        >
            <Origin>760bdbb3-d927-4bf7-bb09-7148d31e3eeb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                A charge interacting with itself shouldn't, in theory, discredit the idea that these things represent action
                at a distance. Why can't everything be virtualized except the idea that light wouldn't have radiated if
                there was no action at a distance? Why wouldn't the yardstick be how much mass we observe relatie to what we
                expect, especially at the edge of galaxies where emission absorption pairs would be more sparse
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T10:51:14.856953Z"
        >
            <Origin>3f105fe1-2244-4c18-b9f5-4559b4a3a55a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that self-interaction doesn't refute direct action. Davies (1971–72) showed you can write a
                quantum absorber theory in which the self-energy and vacuum polarization terms are generated as direct
                interactions with the rest of the universe's charges. That is essentially the virtualization you're
                describing. Those terms don't need a real field; they need an absorbing universe. So the theory was
                abandoned on economy, not falsification, and the surviving core is exactly what you name: no absorber, no
                radiation.
            </Paragraph>
            <Paragraph>
                That core has been tested once, directly. Partridge (1973, <Word>
                    <Emphasis />
                    Nature
                </Word>) compared the power drawn by a microwave emitter aimed at the open sky with the same emitter aimed
                at a local absorbing load. He found no difference to high precision. The usual reading is that the universe
                is already a sufficient absorber in every direction, so the result constrains the idea without killing it.
            </Paragraph>
            <Paragraph>
                On your yardstick, I think the mechanism is coherent. If emission is suppressed where absorption is
                incomplete, luminous-mass estimates come out low, and dynamical mass would exceed luminous mass. That is the
                direction of the rotation-curve problem.
            </Paragraph>
            <Paragraph>
                The one real obstacle is where the absorbers are. In Wheeler–Feynman, absorption happens along the emitter's
                entire future light cone, out to cosmological distances, not in its neighborhood. Light leaving a galaxy's
                edge faces nearly the same absorbing universe as light leaving its center. So local sparsity at the edge
                wouldn't change the emission rate unless the theory is extended beyond electromagnetism.
            </Paragraph>
            <Paragraph>
                That extension has been made. Hoyle and Narlikar (1964) built a direct-action theory of gravity in which a
                particle's inertial mass arises from its interaction with all other matter in the universe, a Machian
                version of the same program. That's the closest precedent to the question you're asking: mass itself as an
                absorber-dependent quantity, not just luminosity. Separately, McCulloch's "quantized inertia" claims to fit
                galaxy rotation curves through a horizon-dependent inertia effect. It's outside the mainstream, but it's
                structurally the same move you're describing.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T10:56:57.965178Z"
        >
            <Origin>f8097dad-b141-4d26-be81-08521b4f80ba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The power draw by an emitter aimed at the open sky versus local absorbing load. Did this have a calculation
                to decide what percentage of photons would be different? I would also need to think about what reading power
                means in this context... What is drawing power? Might power be constant and the properties of light
                different? Might we just be in a place where the probability of interaction is nearly 1?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T10:57:25.632574Z"
        >
            <Origin>8e35218a-70ae-416e-9c3b-24b7152f9582</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                The quantity measured was the <Word>
                    <Bold />
                    power input to the microwave source
                </Word>. That input power stayed constant to 1 part in 10⁸ as the source alternately radiated into free
                space and into a local absorber.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What "drawing power" means here
                </Word>
            </Paragraph>
            <Paragraph>
                An emitter does work against its radiation resistance: the reaction force that pushes back on accelerating
                charges as they radiate. In Wheeler–Feynman that reaction is not self-generated. It is the absorbers'
                advanced response arriving back at the emitter. So the prediction is that if part of the output is never
                absorbed, the emitter feels less reaction and needs less power to drive it. That is why input power, rather
                than anything about the emitted light, was the observable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Was there a calculated expectation?
                </Word>
            </Paragraph>
            <Paragraph>
                Partridge wrote the free-space power as the absorbed-load power reduced by a small number δ, and the aim was
                to put an upper limit on δ. In the theory, δ is simply the fraction of emitted radiation that goes
                unabsorbed along the future light cone. There was no fixed predicted percentage. The expected δ depends on
                how opaque the future universe is at 3 cm, which depends on cosmology. That is why the paper frames the null
                result as setting constraints on possible future properties of the Universe, rather than as a test with a
                definite target.
            </Paragraph>
            <Paragraph>Two setup details bear on your earlier idea about sparse absorbers:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The local absorber was placed about 20 wavelengths away to avoid confusion from reflected power, and
                    microwaves were chosen so the free-space beam would escape the atmosphere and travel cosmological
                    distances.
                </Line>
                <Line>
                    The free-space direction was perpendicular to the galactic plane, presumably a low-absorption direction.
                    So he deliberately aimed where absorbers should be sparsest.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Might power be constant and the light's properties different?
                </Word>
            </Paragraph>
            <Paragraph>
                The experiment can't rule that out. It only measured the emitter's input and characterized nothing about the
                outgoing radiation. Within Wheeler–Feynman, constant power implies complete absorption, because the reaction
                is the absorber response. But an account in which the source's work is fixed and the difference shows up
                elsewhere is untouched by this measurement.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Is the probability of interaction just close to 1?
                </Word>
            </Paragraph>
            <Paragraph>
                That is the standard reading of the null result: the future universe is effectively opaque in every
                direction, so free space and the local load look the same to the emitter. Whether that holds depends on the
                universe's future (expansion, what eventually absorbs long-wavelength radiation). Hoyle–Narlikar and others
                worked on cosmologies with the right boundary conditions.
            </Paragraph>
            <Paragraph>
                Heron and Pegg later proposed a version with a time-varying absorber, estimated to reach 1 part in 10¹², but
                it was announced and then abandoned. Cramer has also written up claims of direction-dependent advanced-wave
                signals. In that account the amplitude dropped by up to 50% when the antenna axis pointed at the galactic
                center, where more absorption is expected. I haven't traced which experiment that comes from or how well it
                has held up.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.nature.com/articles/244263a0</Reference>
                        Partridge 1973, Nature
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.npl.washington.edu/av/altvw219.html</Reference>
                        Cramer, "Advanced Waves Detected"
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://arxiv.org/pdf/0808.0767</Reference>
                        On Time 5b: Electromagnetic Time (arXiv 0808.0767)
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T11:01:05.450034Z"
        >
            <Origin>5234620e-7adc-4347-ba47-375267e99693</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What if dark matter absorbs, and it is only at the edge of that where an emission might not happen? That
                dark matter and unknown absorbers become entangled as uncertainty
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T11:01:24.691757Z"
        >
            <Origin>48659295-d5f3-461a-9cc0-0ed411bb4f18</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That fits together more tightly than it first looks, and it connects to your earlier point about location.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    It explains the Partridge null.
                </Word> Every direction from Earth, including the path perpendicular to the galactic plane, runs through the
                Milky Way's dark halo. If the halo supplies the absorbers, then the probability of interaction being nearly
                1 isn't a fact about the whole future universe. It's a fact about sitting inside a halo. That swaps
                Wheeler–Feynman's cosmological boundary condition for a local, structural one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    It gives the halo edge a role.
                </Word> Past the absorber boundary, emission lacks a completing partner and is suppressed. So luminous
                matter near the halo edge would be systematically under-counted, which is the same direction as the
                rotation-curve discrepancy. Dark matter stays in the account, but it gets an electromagnetic role instead of
                a purely gravitational one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Entangled as uncertainty" has a natural home in Cramer's transactional interpretation.
                </Word> There, the Born probability is the weight of an emitter–absorber handshake. Which absorber completes
                the transaction is exactly what quantum uncertainty is about. In your account, the missing mass and the
                missing absorbers would be one unknown seen two ways: gravitationally as mass, and radiatively as the
                probability of a handshake completing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one constraint that bears on it directly.
                </Word> Light passing through halos, whether from background galaxies behind lensing clusters or the CMB,
                arrives without detectable dimming. So if dark matter absorbs, it can't extinguish the light it absorbs the
                way ordinary absorbers do. In Wheeler–Feynman, absorption and extinction are the same event, so this would
                have to be a new kind of absorber: one that completes the transaction without removing the wave. That is an
                extension of the theory, not a contradiction of it, but it is the place the account has to do new work.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T11:18:01.030333Z"
        >
            <Origin>df7996af-4479-481f-89aa-53eb7978c7db</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Dimming with respect to a model right? We can't measure other than from the outside</Paragraph>
        </Message>
        <Message
            at="2026-09-29T11:18:12.426519Z"
        >
            <Origin>63405d18-111a-4258-b78b-91046d8d04d3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. Dimming is always a comparison: observed flux against what a source model says the source emitted. And
                every observation we make originates inside our own halo, so there's no outside vantage from which to check
                the baseline. A uniform absorber effect that we're all embedded in would be absorbed into the calibration
                and never show up as dimming.
            </Paragraph>
            <Paragraph>
                The closest thing to a model-light check is a <Word>
                    <Bold />
                    differential
                </Word> comparison: the same source seen along two paths.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Multiply-imaged lensed quasars.
                    </Word> One source appears several times, each image having travelled a different route through the lens
                    galaxy's halo. The images' flux ratios do show anomalies. They are standardly attributed to dark
                    substructure and microlensing via magnification, which still requires a lens model to separate from any
                    absorption. So even this only narrows the model dependence rather than removing it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The CMB spectrum.
                    </Word> It matches a blackbody extremely closely, and absorption generally leaves spectral fingerprints.
                    But "it should be a blackbody" is itself the model, and a grey, frequency-independent effect would pass
                    unnoticed.
                </Line>
            </Paragraph>
            <Paragraph>
                So in your account, what the observations actually constrain is non-uniform, path-dependent, or chromatic
                absorption. A handshake-completing absorber that is uniform across our vantage point sits in the part of the
                question that inside-only measurement can't reach.
            </Paragraph>
        </Message>
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
