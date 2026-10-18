import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 April 2026](2026-04-07)</Date>
        </Dated>
        <Title>[[ 7 April 2026 ]]</Title>
        <Message
            at="2026-04-07T10:30:14.514913Z"
        >
            <Origin>019d677e-c316-794c-a7b7-69cac7200c9f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is it customary to tip in a salon in the republic of georgia?</Paragraph>
        </Message>
        <Message
            at="2026-04-07T10:30:18.047302Z"
        >
            <Origin>019d677e-c316-7ce1-ac12-d0a14b57a368</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Tipping isn't deeply ingrained in Georgia's service culture the way it is in the US. In salons specifically,
                tips aren't expected, but they are appreciated — especially if you're a regular or happy with the service.
            </Paragraph>
            <Paragraph>
                A small tip of 1–3 GEL for a simple service, or rounding up the bill, is perfectly appropriate and will be
                warmly received. No one will think less of you for not tipping at all.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:18:09.141274Z"
        >
            <Origin>019d68f4-294a-7ded-b187-8ac69d1ccc71</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Why is there a side of the moon that we don’t see? It’s a lunar day the same as a lunar year
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:18:23.801589Z"
        >
            <Origin>019d68f4-294a-7ed1-b1ae-f38995d156e8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Exactly right — and the technical term for this is <Word>
                    <Bold />
                    tidal locking
                </Word>.
            </Paragraph>
            <Paragraph>
                Early in the Moon's history, Earth's gravity exerted tidal forces on the Moon, creating a slight bulge on
                the side facing Earth. That bulge acted like a handle — Earth's gravity pulled on it, creating a torque that
                gradually slowed the Moon's rotation until its rotation period matched its orbital period. Once those two
                periods synchronized, the torque disappeared because the bulge was always pointing at Earth. Stable
                equilibrium.
            </Paragraph>
            <Paragraph>
                The result: one lunar day = one lunar year = ~27.3 Earth days. The same face always points toward us.
            </Paragraph>
            <Paragraph>
                This isn't a coincidence unique to our Moon — it's the expected end state for any moon that's close enough
                to its planet and given enough time. Most large moons in the solar system are tidally locked to their
                planets for the same reason. Earth is actually slowly being tidally locked to the Moon as well (that's why
                days are gradually getting longer), but it'll take far longer than the current age of the universe to
                complete.
            </Paragraph>
            <Paragraph>
                One common misconception worth noting: the "dark side of the Moon" isn't actually dark — it receives just as
                much sunlight as the near side. It's more accurately called the <Word>
                    <Bold />
                    far side
                </Word>. It was completely unknown until the Soviet Luna 3 probe photographed it in 1959.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:19:07.441512Z"
        >
            <Origin>019d68f5-1c91-7bec-9b2d-481050785cbf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Wait, but that must’ve made it very difficult to discover that the moon orbits the Earth right because then
                these two things needed to be true at the same time and that’s weird
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:19:29.704523Z"
        >
            <Origin>019d68f5-1c91-7a74-9676-335f051739ae</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a fun inversion to think about, but it actually goes the other way — the tidal locking doesn't
                obscure the orbit at all. Ancient observers could see the Moon moving across the sky night after night,
                going through phases, causing eclipses. The orbital motion is completely visible. Tidal locking only affects
                rotation, not the orbital path.
            </Paragraph>
            <Paragraph>
                What IS interesting historically is the flip side of your question: for a long time people thought the Moon
                <Word>
                    <Emphasis />
                    didn't rotate at all
                </Word>. If it always shows the same face, the naive interpretation is that it's simply a non-rotating
                object being carried around Earth. The realization that it actually <Word>
                    <Emphasis />
                    does
                </Word> rotate — exactly once per orbit, in an inertial frame — came much later and is genuinely
                counterintuitive. There's a fun bar-bet version of this: most people will insist the Moon doesn't rotate,
                and you can demonstrate they're wrong with a chair and a friend walking around it.
            </Paragraph>
            <Paragraph>So the history is roughly:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ancient
                    </Word>: Moon clearly orbits Earth (visible), and always shows the same face (also visible) — just
                    accepted as facts
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Later
                    </Word>: phases, distance, size all worked out geometrically
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Much later
                    </Word>: tidal locking understood as a <Word>
                        <Emphasis />
                        mechanism
                    </Word> explaining why those two periods match
                </Line>
            </Paragraph>
            <Paragraph>
                The weird coincidence you're sensing was only recognized as needing an explanation once people had enough
                physics to ask the question.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:20:33.290524Z"
        >
            <Origin>019d68f6-6b14-7219-8b57-f36b9b38de1e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, but if it’s rotating around a circular object, you wouldn’t see the same part of it. I wonder if you
                were confusing across and around
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:20:53.104612Z"
        >
            <Origin>019d68f6-6b14-7736-b2f4-3dcb223c0166</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right to push back. I muddled that.</Paragraph>
            <Paragraph>
                The correct logic is actually the opposite of what I implied. If the Moon had <Word>
                    <Emphasis />
                    zero
                </Word> rotation in an inertial frame, then as it orbited Earth, we would see <Word>
                    <Emphasis />
                    all
                </Word> sides of it over the course of a month — because Earth-based observers are on the inside of the
                orbit watching it go around. The fact that we always see the same face is actually <Word>
                    <Emphasis />
                    proof
                </Word> that it's rotating — exactly once per orbit.
            </Paragraph>
            <Paragraph>
                So the bar-bet framing I used is valid, but for the opposite reason than the naive intuition suggests:
                people say "the Moon doesn't rotate" precisely because they see the same face, when in fact that sameness
                <Word>
                    <Emphasis />
                    requires
                </Word> rotation. The confusion is about reference frames — rotating relative to Earth versus rotating
                relative to the stars.
            </Paragraph>
            <Paragraph>
                Which actually reinforces your original instinct: the tidal locking is genuinely weird and the same-face
                observation isn't just an arbitrary fact — it demands an explanation. Ancient astronomers just didn't have
                the mechanics to ask why.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:21:11.046397Z"
        >
            <Origin>019d68f6-fe50-72ca-8818-0ea23bb2c4eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Why don’t you do some early research on what it was like to discover that the moon rotates around the Earth
                and tell me something historical instead of just trying to make something up
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:21:25.426722Z"
        >
            <Origin>019d68f6-fe50-7761-9edc-7e97d8810271</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “history discovery moon orbits Earth ancient astronomy”</Action>
            <Paragraph>
                The honest answer from the sources is that there was no dramatic discovery moment — it was simply always
                obvious. By the time Pythagoras wrote in 600 BC, the ancient Greeks already knew the Moon was spherical and
                revolved around Earth, and they understood how that motion causes the monthly changes in the Moon's
                appearance.
            </Paragraph>
            <Paragraph>
                The reason your original question doesn't quite land historically is that the Moon's orbit wasn't something
                that needed to be deduced — it's directly visible. The Moon visibly moves across the sky from night to night
                and goes through phases on a predictable cycle. The tidal locking (same face always visible) was just an
                accepted naked-eye fact alongside it, not something that complicated the picture, because nobody had the
                physics to ask <Word>
                    <Emphasis />
                    why
                </Word> yet.
            </Paragraph>
            <Paragraph>
                What the Greeks did put serious effort into was <Word>
                    <Emphasis />
                    measurement
                </Word>, not discovery. In 270 BC, Aristarchus used lunar eclipses to measure the relative size of the Moon,
                finding its diameter was about a third of Earth's. And Hipparchus was the first to measure the distance to
                the Moon.
            </Paragraph>
            <Paragraph>
                The harder intellectual problem of the era wasn't "does the Moon orbit Earth" but rather explaining the
                <Word>
                    <Emphasis />
                    planets
                </Word>, which move in complicated, sometimes retrograde paths — that's what drove centuries of epicycle
                theory. The Moon by comparison was the easy, well-behaved object.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:24:59.447974Z"
        >
            <Origin>019d68fa-7281-74fe-9f7e-619d82019fbb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Was it hard that the earth rotates around the sun then? That’s the tricky one?</Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:25:10.767304Z"
        >
            <Origin>019d68fa-7281-7760-86c0-1878c4e64244</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, enormously — and it was controversial for reasons beyond just religion.</Paragraph>
            <Paragraph>
                The core observational problem is that if Earth is moving, you'd expect to see <Word>
                    <Bold />
                    stellar parallax
                </Word> — nearby stars should appear to shift slightly against the background of distant stars as Earth
                moves around the Sun. The Greeks knew to look for this and couldn't find it. Aristarchus proposed
                heliocentrism around 270 BC and was essentially dismissed on exactly these grounds. The counter-argument was
                logically sound: either the stars are so unimaginably far away that the parallax is too small to see, or
                Earth isn't moving. Most Greeks chose the second option, and honestly that was a reasonable inference from
                the evidence available.
            </Paragraph>
            <Paragraph>
                Copernicus revived heliocentrism in 1543, and his model had the advantage of predicting planetary motion
                without the complicated epicycles the geocentric model required. But it took Kepler showing the orbits were
                ellipses, then Galileo's telescopic observations of Venus's phases (which only made sense if Venus orbited
                the Sun), and finally Newton providing a unified gravitational mechanism, before it was really airtight.
            </Paragraph>
            <Paragraph>
                The stellar parallax problem specifically wasn't resolved until 1838, when Friedrich Bessel finally measured
                the parallax of a nearby star — and confirmed that yes, the stars are just absurdly far away.
            </Paragraph>
            <Paragraph>
                So the Greeks who rejected Aristarchus weren't being stupid. They were correctly identifying a prediction of
                heliocentrism that they couldn't verify, and choosing the simpler explanation. They were just wrong about
                the scale of the universe.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:27:15.731615Z"
        >
            <Origin>019d68fc-8fac-7f0a-bdd6-bf2a894fb4d9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Everything is moving relative to something else. Is there a way of looking at everything relativistically,
                imagining the reference frame with the Earth was just simply not moving because there’s not much of a
                difference between not moving and moving into a constant velocity, right? It wouldn’t give you the simplest
                description of what everything else is doing, but is it a coherent one?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-07T17:27:25.712684Z"
        >
            <Origin>019d68fc-8fac-7823-b8c2-8c5744587de2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, completely coherent. This is essentially what General Relativity licenses you to do — any reference
                frame is valid, including an Earth-centered one. There's no privileged "truly stationary" frame in the
                universe.
            </Paragraph>
            <Paragraph>
                The catch is exactly what you flagged: it's not the simplest description. In a geocentric frame, you can
                make everything work, but the math becomes grotesque. The Sun, planets, and distant stars all have to
                execute complicated daily loops around Earth, and you need what are called <Word>
                    <Bold />
                    fictitious forces
                </Word> — the relativistic equivalent of epicycles — to account for the fact that Earth's frame is rotating
                and accelerating. These forces are real within the frame, they just don't have a source object exerting
                them.
            </Paragraph>
            <Paragraph>
                The Newtonian version of this point is that inertial frames (constant velocity, no rotation) are privileged
                in the sense that Newton's laws take their simplest form there. Earth is <Word>
                    <Emphasis />
                    not
                </Word> an inertial frame — it rotates and orbits — so you pay a mathematical price for using it.
            </Paragraph>
            <Paragraph>
                But here's what's genuinely interesting about your question: for a long time "simplest description" was
                doing a lot of unexamined work in the heliocentrism debate. The Copernican system wasn't actually simpler in
                terms of predictive accuracy initially — it still used circles and still needed epicycles. The simplicity
                argument only really won decisively with Kepler's ellipses and Newton's gravity, which made the Sun-centered
                (really center-of-mass-centered) frame the one where a single clean equation explains everything.
            </Paragraph>
            <Paragraph>
                So: coherent yes, but nature seems to have opinions about which frames make her laws look elegant.
            </Paragraph>
        </Message>
    </Chapter>
);
