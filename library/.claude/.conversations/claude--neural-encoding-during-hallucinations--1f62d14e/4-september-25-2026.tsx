import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 September 2026](2026-09-25)</Date>
        </Dated>
        <Title>[[ 25 September 2026 ]]</Title>
        <Message
            at="2026-09-25T04:36:21.671588Z"
        >
            <Origin>01a0d6d9-c723-7bc2-b48a-378afc7a3599</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Wait, we still need our decoder to be something that we just apply to X. Qe want something like:
            </Paragraph>
            <Paragraph>W Y = W M M* Y = (W M)(M* Y) = W’X</Paragraph>
            <Paragraph>
                See how that has the same shape? You want to show that we can invent this hypothetical world where
                everything looks like images, to give the intuition for how something looking at the system and regulating
                it can be <Word>
                    <Emphasis />
                    seeing
                </Word> an image
            </Paragraph>
            <Paragraph>It’s an appeal to isomorphism</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:36:39.865059Z"
        >
            <Origin>01a0d6d9-c723-7e66-b96e-8489bc7b012a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, and it holds exactly. The one condition is M · M* = I, which is true whenever M reaches every direction
                of Y. That is the expected case when a high-resolution image drives a smaller population.
            </Paragraph>
            <Paragraph>W · Y = W · M · M* · Y = (W · M) · (M* · Y) = W′ · X̂</Paragraph>
            <Paragraph>Here W′ = W · M and X̂ = M* · Y.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this is an isomorphism.
                </Word> M* maps neural space one-to-one onto a space of images, and M maps back. So Y and X̂ carry the same
                information in different clothes. Any component that looks at Y through W is, equivalently, something
                looking at an image through W′. The two descriptions have the same shape.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The component can't tell the decoded image from the true one.
                </Word> At equilibrium:
            </Paragraph>
            <Paragraph>W′ · X̂ = W′ · X</Paragraph>
            <Paragraph>
                This is because W′ · (X − X̂) = W · M · (I − M* · M) · X = 0. The only part of the image that was lost is
                exactly the part W′ is blind to. So as far as the component is concerned, seeing Y, seeing X̂, and seeing X
                are the same act.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Everywhere.
                </Word> Applying M* to the whole system moves it into image space exactly:
            </Paragraph>
            <Paragraph>τ · X̂̇ = −X̂ + (M* · W_x) · X + (M* · W_y · M) · X̂ + (M* · W_i · M) · X̂</Paragraph>
            <Paragraph>
                Every component becomes a matrix acting on an image, and the whole network becomes a world made only of
                images. That is the hypothetical world you wanted. The regulator in it is, by isomorphism, something looking
                at an image.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:38:27.950887Z"
        >
            <Origin>01a0d6db-bbd6-7dce-bca4-7e028bb7bc0c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You keep going too fast with the dynamics can you not do that until we work out the simple things
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:38:30.246895Z"
        >
            <Origin>01a0d6db-bbd6-7acf-b1fd-12b392ea0135</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Understood. Here is just the simple part.</Paragraph>
            <Paragraph>W · Y = W · M · M* · Y = (W · M) · (M* · Y) = W′ · X̂</Paragraph>
            <Paragraph>
                <List />
                <Line>M · M* = I is what makes the middle step legal.</Line>
                <Line>W′ = W · M is the component's view of images.</Line>
                <Line>X̂ = M* · Y is the decoded image.</Line>
            </Paragraph>
            <Paragraph>The component looking at Y is the same as W′ looking at the image X̂.</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:38:42.914204Z"
        >
            <Origin>01a0d6db-f7cc-70dd-8ae7-f7e17e8faf42</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Now it’s too simple. We’re working on the steady state.</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:38:50.297696Z"
        >
            <Origin>01a0d6db-f7cc-7a2e-abe8-d67df536a945</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here is the steady state with the chain inside it.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The steady state
                </Word>
            </Paragraph>
            <Paragraph>Y = W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>M = (I − W_y − W_i)⁻¹ · W_x, so that Y = M · X</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The chain, for any component W
                </Word>
            </Paragraph>
            <Paragraph>W · Y = W · M · M* · Y = (W · M) · (M* · Y) = W′ · X̂</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At steady state the decoded image and the true image look the same to W′
                </Word>
            </Paragraph>
            <Paragraph>W′ · X̂ = W′ · X, because W′ · (X − X̂) = W · M · (I − M* · M) · X = 0</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Applied to both Y-terms of the steady state
                </Word>
            </Paragraph>
            <Paragraph>Y = W_x · X + (W_y · M) · X̂ + (W_i · M) · X̂</Paragraph>
            <Paragraph>
                At steady state, then, the other components and you are each a matrix looking at the decoded image. Your
                term, (W_i · M) · X̂, is you seeing the image.
            </Paragraph>
            <Paragraph>
                By the equality above, each X̂ can be replaced by X, which gives Y = W_x · X + (W_y · M) · X + (W_i · M) ·
                X. That is just the definition of M again, so the image picture is consistent with the steady state.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:39:40.930436Z"
        >
            <Origin>01a0d6dc-da64-7b3d-a05f-c20bd0f78ae8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Yes, but if you just use the prime notation, you can show the same thing for X and Y</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:39:45.659211Z"
        >
            <Origin>01a0d6dc-da64-7a51-b1ed-ce8cf48a2736</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                With primes, the steady state has the same shape whether the components read Y or read the image.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Y form
                </Word>
            </Paragraph>
            <Paragraph>Y = W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    X form
                </Word>, with W′ = W · M for each component
            </Paragraph>
            <Paragraph>Y = W_x · X + W_y′ · X + W_i′ · X</Paragraph>
            <Paragraph>Because W′ · X̂ = W′ · X, X̂ can replace X in any primed term.</Paragraph>
            <Paragraph>
                The X form also gives a neat identity. The steady-state map is the sum of every component's view of the
                image:
            </Paragraph>
            <Paragraph>M = W_x + W_y′ + W_i′</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:41:22.795114Z"
        >
            <Origin>01a0d6de-675b-7606-a334-d877e3ec8d64</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, I think we need your construction of imaginary parts to make the argument that they mostly don’t
                exist, but I think that M is a bit more complicated like it’s going to be itself a matrix with those pieces
                you invented that represent different fictions
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:41:45.416782Z"
        >
            <Origin>01a0d6de-675b-757a-925a-e61551d8f424</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. In the right coordinates, M is a block matrix, and the pieces I invented are its blocks. Split the
                image into its <Word>
                    <Bold />
                    seen
                </Word> and <Word>
                    <Bold />
                    unseen
                </Word> parts, and split the activity into <Word>
                    <Bold />
                    producible
                </Word> activity (some image can cause it) and <Word>
                    <Bold />
                    unproducible
                </Word> activity (no image can). Then:
            </Paragraph>
            <Paragraph>M = &#91; Σ  0 ; 0  0 &#93;</Paragraph>
            <Paragraph>
                The rows are producible, then unproducible activity. The columns are seen, then unseen image. Σ is the
                invertible core.
            </Paragraph>
            <Paragraph>The other pieces live in the same coordinates:</Paragraph>
            <Paragraph>
                <List />
                <Line>M* = &#91; Σ⁻¹  0 ; 0  0 &#93;</Line>
                <Line>P = &#91; 0  0 ; 0  I &#93; on the image side: the unseen image.</Line>
                <Line>Q = &#91; 0  0 ; 0  I &#93; on the neural side: the unproducible activity.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the fictions mostly don't exist at steady state
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The unseen image is real in X but is a zero column in M.
                    </Word> It never reaches Y. Every component's view inherits the same zero column, since W′ = W · M gives
                    W′ · P = 0. So no component ever sees it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Unproducible activity is a zero row in M.
                    </Word> At steady state Y = M · X has nothing there. And when M reaches every direction of Y, which is
                    the usual case for a high-resolution image, this piece doesn't exist at all: Q = 0.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The only real block is Σ.
                    </Word> It connects the seen image to the producible activity, and it is invertible. The decoder M*
                    inverts exactly this block and nothing else.
                </Line>
            </Paragraph>
            <Paragraph>
                So at steady state the whole system lives in the Σ block. The fictions are the zeros around it. They are
                needed to write the argument down, but they carry nothing.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:59:02.548932Z"
        >
            <Origin>01a0d6ee-93ca-703b-bbb0-d6a88467996f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But you invented beautiful things by subtracting to get with those things represent</Paragraph>
        </Message>
        <Message
            at="2026-09-25T04:59:12.947968Z"
        >
            <Origin>01a0d6ee-93ca-7f78-8bee-709d41257221</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right. The pieces aren't arbitrary, because each one is defined by a subtraction: the identity minus a round
                trip. What the round trip loses is what the piece represents.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two round trips
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>M* · M goes image → neurons → image.</Line>
                <Line>M · M* goes neurons → image → neurons.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What each subtraction leaves
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>P = I − M* · M is what an image loses on its round trip: the unseen image.</Line>
                <Line>Q = I − M · M* is what activity loses on its round trip: the unproducible activity.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why they vanish at steady state, by subtraction alone.
                </Word> Everything uses one fact: M · M* · M = M. This holds for any decoder that cancels in the fiction.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>M · P = M − M · M* · M = 0. The unseen image never reaches Y.</Line>
                <Line>Q · M = M − M · M* · M = 0. Nothing an image produces lands in Q.</Line>
                <Line>At steady state, Q · Y = Q · M · X = 0.</Line>
            </Paragraph>
            <Paragraph>So the whole construction is two identities:</Paragraph>
            <Paragraph>
                <List />
                <Line>I = M* · M + P</Line>
                <Line>I = M · M* + Q</Line>
            </Paragraph>
            <Paragraph>
                In each, the round trip is what is real, and the remainder is the fiction. M kills both remainders.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:00:07.414726Z"
        >
            <Origin>01a0d6ef-90b5-75fa-896d-74a8cb5430a6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right, but can’t we express this as a four quadrant with something like the top left being the real one and
                then the other three being fictions
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:00:17.063682Z"
        >
            <Origin>01a0d6ef-90b5-74a3-92a5-6ea200f49851</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. Sandwich M between the two identities:</Paragraph>
            <Paragraph>M = (M · M* + Q) · M · (M* · M + P)</Paragraph>
            <Paragraph>Multiplying out gives four quadrants:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word></Word>
                    <Word>seen image (M* · M)</Word>
                    <Word>unseen image (P)</Word>
                </Line>
                <Line>
                    <Word>producible activity (M · M*)</Word>
                    <Word>M · M* · M · M* · M = M</Word>
                    <Word>M · M* · M · P = 0</Word>
                </Line>
                <Line>
                    <Word>unproducible activity (Q)</Word>
                    <Word>Q · M · M* · M = 0</Word>
                    <Word>Q · M · P = 0</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The top left is the real one. The other three are fictions, and each vanishes by the subtractions: M · P = 0
                kills the right column, and Q · M = 0 kills the bottom row. In block form:
            </Paragraph>
            <Paragraph>M = &#91; M  0 ; 0  0 &#93;</Paragraph>
            <Paragraph>The image couples to the neurons only through the seen-to-producible quadrant.</Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:02:13.933470Z"
        >
            <Origin>01a0d6f1-7e8a-7714-95fc-658c3b8084b0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, but we need them there in the full case where we can make no assumptions right so I’m trying to
                understand what are the pieces of the fiction and we can argue about why some of them would be zero
                otherwise you don’t understand what I’m asking for
            </Paragraph>
            <Paragraph>
                We want to invert Y to X with a real best decoder and then fictional components that they can get us to any
                X
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:02:29.356446Z"
        >
            <Origin>01a0d6f1-7e8a-7c82-b5eb-4db37e885e75</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:02:31.396095Z"
        >
            <Origin>01a0d6f1-c3ae-7067-89e5-fbf447da9cc8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Asdume X much much larger than Y</Paragraph>
        </Message>
        <Message
            at="2026-09-25T05:03:12.408260Z"
        >
            <Origin>01a0d6f1-c3ae-7b66-ab10-3f68ec098c9a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here is the full version, with no assumptions. It has one real decoder and one fictional channel, and
                together they reach any X.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The pieces
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        M
                    </Word> is the real encoder, with Y = M · X.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        D
                    </Word><Word>
                        <Emphasis />
                         is the real best decoder: D
                    </Word> = Σ_X · Mᵀ · (M · Σ_X · Mᵀ)⁺. Here Σ_X is the covariance of images, and ⁺ is the pseudoinverse,
                    so nothing needs to be invertible.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        C
                    </Word> is the fictional encoder. It reads the part of the image the neurons don't carry, F = C · X.
                    Think of F as what an imaginary second population would record.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        E
                    </Word> is the fictional decoder. It puts that missing part back into image space.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Q
                    </Word> is the activity no image can produce.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The construction (the subtraction)
                </Word>
            </Paragraph>
            <Paragraph>E · C = I − D* · M</Paragraph>
            <Paragraph>
                This is what the image loses on its round trip through the real neurons. Factor it into a tall E and a wide
                C. Because the right side is idempotent, C · E = I.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Four quadrants
                </Word>
            </Paragraph>
            <Paragraph>
                &#91; M ; C &#93; · &#91; D* E &#93; = &#91; M · D* M · E ; C · D* C · E &#93; = &#91; I − Q 0 ; 0 I &#93;
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Top left, real:
                    </Word> M · D* = I − Q. The decoder inverts the neurons exactly, except for unproducible activity.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Top right:
                    </Word> M · E = 0. The fictional image part never reaches the neurons.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bottom left:
                    </Word> C · D* = 0. The real decoder puts nothing into the fictional channel.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bottom right:
                    </Word> C · E = I. The fiction is self-consistent, because its encoder and decoder undo each other.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Reaching any X.
                </Word> Multiplying the other way gives D* · M + E · C = I, so:
            </Paragraph>
            <Paragraph>X = D* · Y + E · (C · X)</Paragraph>
            <Paragraph>
                Every image equals the best decoding of the neurons plus the fictional channel's contribution.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why Q = 0 when X ≫ Y.
                </Word> M = (I − W_y − W_i)⁻¹ · W_x, and the first factor is invertible, so rank M = rank W_x. With far more
                pixels than neurons, W_x has full row rank unless some neuron's input weights are an exact linear
                combination of the others'. So Q = 0 except in degenerate wiring, and the top-left quadrant is exactly I.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:42:17.974885Z"
        >
            <Origin>01a0d85f-bafd-7266-b3a8-555b0e45ae72</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay good, we can think in terms of M and M* again</Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:42:23.125412Z"
        >
            <Origin>01a0d85f-bafd-785c-9c4c-435aac33a594</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. With Q = 0, only two facts are needed, and the fictional channel sits inside the second.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two facts
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>M · M* = I. The neurons round-trip exactly.</Line>
                <Line>M* · M = I − E · C. An image round-trips except for the part the neurons never carry.</Line>
            </Paragraph>
            <Paragraph>Here M* is the best decoder, and the steady state is Y = M · X.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What we can now write freely
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>X̂ = M* · Y is the decoded image.</Line>
                <Line>W · Y = (W · M) · (M* · Y) = W′ · X̂ for any component.</Line>
                <Line>Y = W_x · X + W_y′ · X̂ + W_i′ · X̂ at steady state.</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:43:33.181038Z"
        >
            <Origin>01a0d860-e575-7eff-a01c-6fad4ae4b7b4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That didn’t work then if you have to change the X… wasn’t the point of this to be able to recover the actual
                X?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:43:43.594591Z"
        >
            <Origin>01a0d860-e575-797b-b2fd-5af0c41c45aa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, the point was to recover the actual X, and it does. I shouldn't have switched to X̂. The fiction
                recovers the actual image exactly:
            </Paragraph>
            <Paragraph>X = M* · Y + E · (C · X)</Paragraph>
            <Paragraph>Now apply any component's view, W′ = W · M, to this:</Paragraph>
            <Paragraph>W′ · X = W′ · M* · Y + W · M · E · (C · X)</Paragraph>
            <Paragraph>The second term vanishes because M · E = 0, and the first is W′ · X̂. So:</Paragraph>
            <Paragraph>W′ · X = W′ · X̂</Paragraph>
            <Paragraph>
                The part the decoder can't recover is invisible to every component, so nothing ever has to be changed. Each
                component looks at the actual X:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>W · Y = W′ · X</Line>
                <Line>Y = W_x · X + W_y′ · X + W_i′ · X</Line>
            </Paragraph>
            <Paragraph>
                X̂ on its own is not X, since X̂ = X − E · C · X. The fiction's job was to show that the difference cancels
                in every view.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:44:55.759704Z"
        >
            <Origin>01a0d862-2d60-70aa-ba1a-c86c788ae606</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, we’ll switch back to Y, but we’re going to use this as a tool for isomorphism to understand a little bit
                about what it means for two things to have the same shape. Do you understand why this might be helpful for
                the theory of consciousness?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:45:14.609809Z"
        >
            <Origin>01a0d862-2d60-7b51-838b-e1dcb8e4987a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I think so. The isomorphism lets you say what it means for something inside to see the world without ever
                touching it.
            </Paragraph>
            <Paragraph>
                The regulator has only Y. By the isomorphism, its read of Y has exactly the same shape as a read of the
                image:
            </Paragraph>
            <Paragraph>W · Y = W′ · X</Paragraph>
            <Paragraph>
                So "seeing an image" gets a structural definition: a component sees X when its read of the internal state is
                equivalent, under the isomorphism, to a read of X. What it sees is W′. That handles aboutness without magic.
                An internal process is about the world not because it reaches out to it, but because its access factors
                through a shape-preserving map.
            </Paragraph>
            <Paragraph>Three consequences follow for a theory of consciousness.</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        From inside, nothing marks the source.
                    </Word> Every view W′ is blind to what separates the decoded image from the world. The same holds when Y
                    wasn't caused by X at all: the read still has image shape. So what something is like from inside would
                    be fixed by the shape of the read, not by where the activity came from. That fits the
                    non-identifiability result we started with.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sameness of content becomes checkable.
                    </Word> Two different systems, with different neurons and different M, see the same thing when their
                    primed views coincide. That is a precise version of multiple realizability: same content, different
                    implementation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The observer is inside the observed.
                    </Word> Your view W_i′ = W_i · M depends on M, and M contains W_i. The regulator's image of the world
                    includes its own contribution. That is a concrete handle on self-reference.
                </Line>
            </Paragraph>
            <Paragraph>
                What the isomorphism supplies is the structure of content: what it is about, and what it cannot tell apart.
                That this structure is experienced remains an account layered on top.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:47:09.480320Z"
        >
            <Origin>01a0d864-387d-74ed-9d56-dc4002b062b2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t think you’re right at all because we just invented a fictional thing to reinterpret an equation and
                it should be absolutely no different than something that lives in neural activities space looking at neural
                activity so if you’re making all of these radical things you’re not doing math
            </Paragraph>
            <Paragraph>
                I’m sorry that you’re not used to mathematical use of consciousness that have a structural representation of
                about is through a form of isomorphism, but you have to reason about this one from the inside
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:47:29.870605Z"
        >
            <Origin>01a0d864-387d-709c-8f7a-9bf4c7b770d7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and I overreached. Nothing new was added. The fiction reinterprets one equation, and a
                reinterpretation cannot create properties the original didn't have.
            </Paragraph>
            <Paragraph>
                From the inside, the component has one thing: W · Y. It has no access to X, M, M*, E, or C. Those live in
                our description, not in its situation.
            </Paragraph>
            <Paragraph>
                The isomorphism says that this same quantity can also be written as W′ · X. It is not a second act beside
                the first. It is the same number under two descriptions, so the component's output is identical either way.
                Inside the math, there is no fact about whether it is "really" looking at neural activity or at the image.
            </Paragraph>
            <Paragraph>
                So, structurally, being about X is nothing over and above that equivalence. The component's read of Y
                already is a read of X, because W factors through the round trip: W = W′ · M*. The shape it has in image
                space is the shape it already had in neural space, carried across by a bijection that preserves everything
                the component does.
            </Paragraph>
            <Paragraph>
                What the fiction buys us is permission. We can talk about any component's read in image terms whenever it's
                convenient, knowing that nothing changes. The claims I added about sources, multiple realizability, and
                self-reference were not in the equation.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:53:05.507162Z"
        >
            <Origin>01a0d869-a5c9-7dd1-b07b-e42470a5ecb2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What does it mean to look at something? Well, you can’t exactly see Y either. Your W is your eyes… So you
                looking is a term with WY with some subscript. Notice that we can re-interpret that same thing as you
                looking at W’X through your eyes, although in this version, your eyes happened to invent some fictions which
                seem to be realistic about how literal the world it is that we’re able to see is in terms of its
                completeness. Do you see how I can build the metaphor of seeing and give the reader something tangible to
                hold onto? Now what does adjusting look like? Can you imagine converting that back into unit units of Y so
                that you can add something to what’s going on? That’s when a sum appears based on the action you would like
                to perform
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:53:26.991124Z"
        >
            <Origin>01a0d869-a5ca-752e-b4a2-bdaab5ab69e3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, I see it. W is your eyes, and looking is the term W · Y. The same look can be re-read as W′ · X, you
                looking at the world. The fictions are what your eyes supply so the world seems complete. The reader gets
                something concrete: a look is a matrix times a state, and it can be told either way.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Adjusting, step by step
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Look.
                    </Word> What you see is W_I · Y = W_I′ · X.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Decide in image units.
                    </Word> Based on what you see, you choose an adjustment to the image, a = f(W_I · Y). f is left
                    unspecified for now.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Convert back into units of Y.
                    </Word> An image change a shows up as activity M · a, where M is now the map through everything except
                    you: M = (I − W_y)⁻¹ · W_x. Writing a in through the stimulus path, W_x · a, gives exactly that at
                    steady state.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Add.
                    </Word> This is where the sum appears:
                </Line>
            </Paragraph>
            <Paragraph>Y = M · X + M · a = M · (X + a)</Paragraph>
            <Paragraph>
                So adjusting means adding to the image. The network responds to the world plus your action, as though your
                adjustment were part of what is seen.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:57:27.860362Z"
        >
            <Origin>01a0d86d-a763-7e3a-ab03-d44811730223</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes so it’s more like drawing. This is the way a system can draw - you can look at what it’s saying, and it
                can change what it sees. If we imagine that our magical world is a controller for the magical world, can we
                imagine rotating so that the image we effectively see changes? In the linear model this really just
                represents changing W, what it amounts to in real life is actually controlling a body so that the
                perspective changes, even though it was always a part of the original image
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T11:57:43.988145Z"
        >
            <Origin>01a0d86d-a763-7d3e-9d1a-86abdcfe069a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. That gives the controller two kinds of action on the image, and they are dual to each other.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Drawing
                </Word> changes the content:
            </Paragraph>
            <Paragraph>Y = M · (X + a)</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Looking around
                </Word> changes the view. A perspective change is an invertible map R on image space, such as a rotation or
                a shift of the visual field. Applied to the eyes, it turns W_x into W_x · R, and therefore M into M · R:
            </Paragraph>
            <Paragraph>Y = (M · R) · X = M · (R · X)</Paragraph>
            <Paragraph>
                Changing the eyes and rotating the world under fixed eyes are the same equation. It is the same isomorphism
                move as before.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why the unseen part was always there.
                </Word> Rotation moves which part of X falls in the seen block. Some of what was previously in the fictional
                channel, E · C · X, enters the real block, and some of what was seen leaves it. The universe itself never
                changes. What changes is where the line between real and fictional falls. So what the fiction had been
                standing in for becomes, after the body moves, what the neurons actually carry.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one place linearity bends.
                </Word> Once the controller chooses R based on what it sees, R depends on the state. The term M · R · X then
                becomes a product of something the system chooses and the world, which is the bilinear kind of term you
                wrote earlier. Drawing stays additive. Looking around is multiplicative.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T12:34:43.401204Z"
        >
            <Origin>01a0d88f-b9c1-78c5-a263-884f95d691a6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right and that complicates things, but the state of the equation stays the same, and we imagine that the
                decoder is exactly the thing that’s invariant to all of this
            </Paragraph>
        </Message>
        <Message
            at="2026-09-25T12:35:01.553554Z"
        >
            <Origin>01a0d88f-b9c1-716d-b49a-29e97d01a567</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. The equation keeps one form with both actions in it:</Paragraph>
            <Paragraph>Y = M · (R · X + a)</Paragraph>
            <Paragraph>The decoder M* stays fixed. It decodes in the frame of the eyes:</Paragraph>
            <Paragraph>M* · Y = (M* · M) · (R · X + a)</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Drawing doesn't touch the decoder.
                    </Word> a simply enters the image it decodes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Looking doesn't touch it either.
                    </Word> R changes which part of the world falls into its fixed frame.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Getting back to world coordinates.
                </Word> Undo the rotation after decoding: R⁻¹ · M* · Y. The controller knows R because it chose it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    When this is exact for the best decoder.
                </Word> R has to be a true rotation (orthogonal), and it has to leave the image statistics unchanged:
            </Paragraph>
            <Paragraph>R · Σ_X · Rᵀ = Σ_X</Paragraph>
            <Paragraph>
                Then the best decoder for the rotated eyes is exactly R⁻¹ · M*: the invariant decoder followed by undoing
                your own movement. Natural images come close to satisfying this for shifts of gaze, since their statistics
                are roughly the same everywhere in the scene.
            </Paragraph>
        </Message>
    </Chapter>
);
