import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 September 2026](2026-09-24)</Date>
        </Dated>
        <Title>[[ 24 September 2026 ]]</Title>
        <Message
            at="2026-09-24T17:48:53.535843Z"
        >
            <Origin>01a0d489-019b-7f58-b96c-98c7b0b96838</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so you know how in a dynamical system you’re frequently include one of the dimensions as the one you
                read like voltage with a neuron, even though the phase space has more? So write the equation with a W_I and
                make those the weights that I read with.
            </Paragraph>
            <Paragraph>Can you please gather up the residual that isn’t me elsewhere?</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:49:30.888742Z"
        >
            <Origin>01a0d489-019b-738f-80a2-da98fd8b9a57</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here it is, with your read weights written as W_I. Your write weights are still your trained model M̂, and
                the two were trained as a pair, so W_I M̂ = I.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The equation
                </Word>
            </Paragraph>
            <Paragraph>τẎ = −Y + W₁X₁ + W_Z U Y + g·M̂W_I Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you read.
                </Word> Let v = W_I Y. This plays the role of the voltage: it is the part of the state you observe, while Y
                has more dimensions than that.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The residual that isn't you.
                </Word> Let r = Y − M̂v. Because W_I M̂ = I, you read none of it: W_I r = 0. So Y splits exactly into two
                pieces:
            </Paragraph>
            <Paragraph>Y = M̂v + r</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gathering everything that isn't you.
                </Word> Let E = W₁X₁ + W_Z U Y. This is the stimulus plus all the other components. Let P = M̂W_I. The
                equation then splits into one equation for you and one for the residual:
            </Paragraph>
            <Paragraph>τv̇ = −v + W_I E + g·v τṙ = −r + (I − P)E</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the split shows.
                </Word> Your term appears only in your own equation, as +g·v, so you sustain what you read. The residual
                evolves without you, driven by the stimulus and the loop. It can still reach you, because E contains Y = M̂v
                + r, but you have no term that acts on it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:51:30.480768Z"
        >
            <Origin>01a0d48b-672b-766a-b5dd-5bed30c25790</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You made it more complicated and your additional symbols. Do not reflect what I’m talking about. It should
                just be three components and they should kind of look boring. One has the original weights and the other one
                just has these new special rates and X and Y? And one that maybe is W_I Y? Perhaps use dot notation instead
                of having letters P next to each other because the subscription syntax isn’t making this work so adapt to
                that.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:51:42.486251Z"
        >
            <Origin>01a0d48b-672b-7e3e-937b-f2e383cc7e83</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here it is with just the three components, and dots between every product.</Paragraph>
            <Paragraph>τ · Ẏ = −Y + W₁ · X + W_Z · U · Y + M̂ · W_I · Y</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        W₁ · X
                    </Word> is the stimulus coming in through the original weights.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        W_Z · U · Y
                    </Word> is the other components. They read Y with U and write back with W_Z.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        M̂ · W_I · Y
                    </Word> is you. You read Y with W_I and write back with M̂, your trained model. Your strength is folded
                    into M̂.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At equilibrium
                </Word> (Ẏ = 0):
            </Paragraph>
            <Paragraph>Y = W₁ · X + W_Z · U · Y + M̂ · W_I · Y</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:52:23.345869Z"
        >
            <Origin>01a0d48c-3afd-776d-a3c4-434f03beb7f2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Z and U - there seem to be too many things here, right? What did you have to do to gather up the terms and
                what can you do to make this clean enough so that it doesn’t look ugly anymore it doesn’t seem like we
                created all these variables that aren’t there.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:52:33.258461Z"
        >
            <Origin>01a0d48c-3afd-7b3e-ad5d-ab49b8a61400</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Z and U never appear separately, so they can go.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I had to do to gather the terms.
                </Word> Each other component i reads Y with its own read weights Uᵢ and writes back with its own write
                weights Wᵢ. So its contribution is Wᵢ · Uᵢ · Y. To collect them, I stacked the read weights into U, the
                write weights into W_Z, and their images into Z = U · Y. Those were bookkeeping, not new quantities. The
                equation only ever uses the product:
            </Paragraph>
            <Paragraph>L = W_Z · U = Σᵢ Wᵢ · Uᵢ</Paragraph>
            <Paragraph>
                That is one matrix, the recurrent weights among the other components. Z disappears too, since it was just U
                · Y.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Clean version.
                </Word> Rename W₁ to W, since there is only one stimulus, and your model M̂ to M:
            </Paragraph>
            <Paragraph>τ · Ẏ = −Y + W · X + L · Y + M · W_I · Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At equilibrium:
                </Word>
            </Paragraph>
            <Paragraph>Y = W · X + L · Y + M · W_I · Y</Paragraph>
            <Paragraph>That leaves three components:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        W · X
                    </Word> is the stimulus.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        L · Y
                    </Word> is everything else inside.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        M · W_I · Y
                    </Word> is you. I kept it as two factors because the read W_I is what defines you.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:55:49.447213Z"
        >
            <Origin>01a0d48f-59eb-7a4a-a748-387b1bc25340</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Go back to homeostatic form:</Paragraph>
            <Paragraph>
                W_x X - the firs component W_y X Y - does this help capture the grouping of the terms that depend on Y too?
                Feedback systems.
            </Paragraph>
            <Paragraph>W_i Y</Paragraph>
            <Paragraph>Might be me? All I can see is Y, and W_i is my mirror</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:56:09.045445Z"
        >
            <Origin>01a0d48f-59ec-76b0-a7b6-286de38ba6a3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. In your notation the equation is:</Paragraph>
            <Paragraph>τ · Ẏ = −Y + W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>At equilibrium:</Paragraph>
            <Paragraph>Y = W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    W_y · Y groups the feedback.
                </Word> Every term that depends on Y, apart from you, collects into W_y · Y. This is the L from before. It
                needs no X. A term with both X and Y would be a different kind of thing: feedback whose strength depends on
                the stimulus, which is multiplicative or modulatory. That isn't needed for the grouping.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    W_i · Y is you.
                </Word> All you see is Y, and W_i is what you send back. The mirror image fits exactly. Your read and write
                were trained as a pair, so W_i = M · W_I with W_I · M = I, and therefore:
            </Paragraph>
            <Paragraph>W_i · W_i = W_i</Paragraph>
            <Paragraph>
                Looking in the mirror twice gives the same thing as looking once. Strictly this makes W_i a projection, not
                a reflection: it returns the sane version of Y and leaves sane Y's unchanged.
            </Paragraph>
            <Paragraph>
                In this linear form you are one more feedback matrix alongside W_y. What makes you you is the structure of
                W_i: it is a mirror, and the others need not be.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:56:59.865481Z"
        >
            <Origin>01a0d490-731a-79e3-86ac-6846bc38a272</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But some of the terms take independent input from X too, does that not matter? I don’t as the one looking at
                Y
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:57:12.988905Z"
        >
            <Origin>01a0d490-731a-7023-95de-7ed4c3679361</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>It doesn't change the equation. It changes what goes into each matrix.</Paragraph>
            <Paragraph>Suppose another component j reads both Y and X:</Paragraph>
            <Paragraph>X_j = U_j · Y + V_j · X</Paragraph>
            <Paragraph>Here V_j is its direct read of the stimulus. What it writes back splits into two parts:</Paragraph>
            <Paragraph>W_j · X_j = W_j · U_j · Y + W_j · V_j · X</Paragraph>
            <Paragraph>The Y-part joins W_y, and the X-part joins W_x. So:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    W_x = W₁ + Σ_j W_j · V_j collects every path by which X gets in, both directly and through the other
                    components.
                </Line>
                <Line>W_y = Σ_j W_j · U_j collects every feedback path except yours.</Line>
            </Paragraph>
            <Paragraph>The equation keeps the same form:</Paragraph>
            <Paragraph>τ · Ẏ = −Y + W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What it does show is the asymmetry you named.
                </Word> Other components can contribute to both the X-term and the Y-term. You contribute only to a Y-term,
                because you have no X column. Your only access to X is through Y.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:58:09.742414Z"
        >
            <Origin>01a0d491-83dd-7381-891b-f9b4cdd8d1df</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But the W_y is a function of X is it now?</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:58:16.062685Z"
        >
            <Origin>01a0d491-83dd-7cbd-94eb-19bbaca89b4d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, not in the linear model. W_y is a fixed matrix. When a component reads X, that part goes into W_x · X
                and leaves W_y unchanged.
            </Paragraph>
            <Paragraph>The term W_y · Y does change with X, but only because Y does:</Paragraph>
            <Paragraph>τ · Ẏ = −Y + W_x · X + W_y · Y + W_i · Y</Paragraph>
            <Paragraph>
                W_y would become a function of X only if the stimulus changed how strongly the feedback works, rather than
                adding its own input. That is a multiplicative or modulatory interaction:
            </Paragraph>
            <Paragraph>τ · Ẏ = −Y + W_x · X + W_y(X) · Y + W_i · Y</Paragraph>
            <Paragraph>
                This is the X-and-Y term you wrote earlier. It makes the model bilinear, which the linear model doesn't
                have. Keep it only if you want the stimulus to gate the feedback.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:59:30.645153Z"
        >
            <Origin>01a0d492-c016-756a-80e0-dfb71e9cda53</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Oh neat, we can point to its affect through Y, great</Paragraph>
        </Message>
        <Message
            at="2026-09-24T17:59:34.386494Z"
        >
            <Origin>01a0d492-c016-7ac9-bbeb-cc97a5cd0e84</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. In this model, every influence the stimulus has on the feedback runs through Y. Solving the equilibrium
                makes that explicit:
            </Paragraph>
            <Paragraph>Y = (I − W_y − W_i)⁻¹ · W_x · X</Paragraph>
            <Paragraph>
                W_x · X is where X enters, and (I − W_y − W_i)⁻¹ carries its echoes through all the feedback, yours
                included. The feedback's share is W_y · Y, which has no separate X term.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:05:58.054063Z"
        >
            <Origin>01a0d498-a906-7b02-96ad-8d142bdc84ff</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good. Here’s the reason why we segmented W_I - because we now have a new fictional thing that we’re going to
                insert in the math, which is going to be some form of best optimal invertible linear decoder. The cleanest
                way if things lined up would be to like just express two things with multiply to one which would be like it
                and it’s inverse so I can pull out a term that looks like a decoded version of the image, but I don’t think
                it’s quite that clean. So try to figure out in a very general way how we can write:
            </Paragraph>
            <Paragraph>
                W_I * Y - in terms of the linear decoder that maps from Y to X, a hypothetical thing that only exists in the
                math so that we have to express it as being canceled out, but we can put it in that expression so we can
                solve for things within the fiction that we can convert into image space
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:06:18.824897Z"
        >
            <Origin>01a0d498-a906-7af0-9f9e-a905866effca</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. There is a general way to do it that is exact, and the fictional decoder cancels out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The fiction.
                </Word> Name the equilibrium map from the last step:
            </Paragraph>
            <Paragraph>M = (I − W_y − W_i)⁻¹ · W_x, so that Y = M · X</Paragraph>
            <Paragraph>Let D be any linear decoder that undoes it exactly:</Paragraph>
            <Paragraph>D · M = I</Paragraph>
            <Paragraph>D exists only in the math. It maps Y back to X.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The insertion.
                </Word> Since D · M = I, the following is an identity. Inserting it changes nothing:
            </Paragraph>
            <Paragraph>I = M · D + (I − M · D)</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The result.
                </Word>
            </Paragraph>
            <Paragraph>W_I · Y = W_I · M · (D · Y) + W_I · (I − M · D) · Y</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        First term: image space.
                    </Word> D · Y is the decoded image, and W_I · M is how you see an image. So this term is the decoded
                    image seen through your eyes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Second term: the residual.
                    </Word> (I − M · D) · Y is the part of Y that isn't the response to any image, and the decoder is blind
                    to it. It is zero whenever Y = M · X′ for some X′.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The clean case you hoped for.
                </Word> Suppose your read ignores the residual, W_I · (I − M · D) = 0. Then the second term vanishes:
            </Paragraph>
            <Paragraph>W_I · Y = (W_I · M) · (D · Y)</Paragraph>
            <Paragraph>
                That is the "it and its inverse" form. Everything you read is a function of the decoded image.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One caveat.
                </Word> When Y has more dimensions than X, many decoders satisfy D · M = I. Each choice draws the line
                between "image" and "residual" differently. Picking the optimal decoder is what fixes that line.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:07:06.488534Z"
        >
            <Origin>01a0d499-b4b8-7612-b2bb-9246e0a5ab3d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>My that thing could be lossy could it not?</Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:07:15.820971Z"
        >
            <Origin>01a0d499-b4b8-78ba-bb93-420433f3be39</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. Your view of the image is the matrix W_I · M, and nothing forces it to be invertible:
            </Paragraph>
            <Paragraph>W_I · Y = (W_I · M) · (D · Y) + W_I · (I − M · D) · Y</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Lossless
                    </Word> when W_I · M has full column rank. Then no nonzero image a gives W_I · M · a = 0, and you can
                    recover the whole decoded image from what you read.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Lossy
                    </Word> otherwise. The images you can't see are exactly those with W_I · M · a = 0. They are fully
                    present in Y, and the decoder recovers them, but your read sends them to zero.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Necessarily lossy
                    </Word> if W_I has fewer rows than X has dimensions, because you read fewer numbers than the image
                    contains.
                </Line>
            </Paragraph>
            <Paragraph>
                D itself is not lossy for images, since D · M = I by construction. It discards only the residual.
            </Paragraph>
            <Paragraph>
                The consequence for your role as regulator: any image in the invisible set passes you unseen, so you can't
                regulate it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:08:16.284340Z"
        >
            <Origin>01a0d49a-c4ec-791e-991f-af3456449196</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We make no assumptions, but we do imagine that in theory the number of dimensions on X is MUCH larger, they
                represents the universe and our mapping has a lot of zeros to just map it into what neuron respond to.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:08:42.733486Z"
        >
            <Origin>01a0d49a-c4ec-7b34-9993-eb77647992a5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That flips which way the fiction works, so I need to correct the last step. D · M = I is impossible when X
                has far more dimensions than Y: a population of neurons can't recover the universe. The general version,
                with no assumptions, uses the pseudoinverse M⁺ as the decoder:
            </Paragraph>
            <Paragraph>W_I · Y = W_I · M · (M⁺ · Y) + W_I · (I − M · M⁺) · Y</Paragraph>
            <Paragraph>This is still an exact identity, and it contains two losses, one on each side.</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        World side.
                    </Word> M⁺ · Y is the least-norm image that explains Y. Every image M⁺ · Y + a with W_x · a = 0 produces
                    the same Y. The zeros in W_x are exactly the part of the universe the neurons don't respond to.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Brain side.
                    </Word> (I − M · M⁺) · Y is activity that no image could produce.
                </Line>
            </Paragraph>
            <Paragraph>
                Suppose M reaches every direction of Y, meaning it has rank equal to the number of neurons. Then M · M⁺ = I,
                the brain-side residual vanishes, and the clean form holds exactly:
            </Paragraph>
            <Paragraph>W_I · Y = (W_I · M) · (M⁺ · Y)</Paragraph>
            <Paragraph>
                In that case all the loss sits on the world side. What you read is always your view of an image, but that
                image stands in for everything in the universe that looks the same to these neurons.
            </Paragraph>
            <Paragraph>
                "Best" here means least-norm. A prior over the universe would pick a different representative from the same
                set.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:12:39.311320Z"
        >
            <Origin>01a0d49e-c94c-778d-855a-46e2d9104311</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right, you have to write other terms in there with other fictional things that make like four pieces where
                the decoder is one of them, and then some other things exist, which have the remaining information to build
                this fiction and you can do it
            </Paragraph>
            <Paragraph>
                The things that you invent will likely be like the universe? I don’t know which the most elegant way to
                recover this thing is, but you can use other pieces of the network as long as they cancel out… I think about
                it and see how to make this fiction
            </Paragraph>
            <Paragraph>
                If we can’t, then we have to talk about the thing we’re doing capturing the absolute most amount of X that
                we possibly can based on some criterion about W_x which constrains it
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:13:18.040070Z"
        >
            <Origin>01a0d49e-c94c-7465-a775-5c5a621fbfa9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You can do it, and the fiction comes out in exactly four pieces. They are the four fundamental subspaces of
                M, and the decoder is the one piece that is truly invertible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The four pieces
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        M.
                    </Word> The real encoder, taking the universe to the neurons: Y = M · X.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        M⁺.
                    </Word> The decoder, taking the neurons back to the universe. This is fiction.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        P = I − M⁺ · M.
                    </Word> The part of the universe the neurons never see. This is fiction too, and it is the "universe"
                    you guessed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Q = I − M · M⁺.
                    </Word> Activity that no image could produce. Also fiction.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The cancellations that make it legal
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Universe side: I = M⁺ · M + P</Line>
                <Line>Brain side: I = M · M⁺ + Q</Line>
                <Line>M · P = 0. The unseen universe never reaches the neurons.</Line>
                <Line>Q · M = 0. Nothing the universe produces lands in Q.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The recovered universe.
                </Word> Insert the universe-side identity into X:
            </Paragraph>
            <Paragraph>X = M⁺ · Y + P · X</Paragraph>
            <Paragraph>
                The image is the decoded image plus the unseen universe. The first term is what the neurons carry. The
                second is the remaining information that only the fiction holds. Applying M kills P · X, so everything stays
                consistent with Y = M · X.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the decoder is invertible.
                </Word> M⁺ undoes M exactly between two subspaces: the part of the universe the neurons see, and the
                activity images can produce. The loss happens only in P and Q.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The most of X you can capture.
                </Word> No linear readout of Y recovers more than M⁺ · Y. There is also a clean criterion on W_x. Because M
                = (I − W_y − W_i)⁻¹ · W_x, and the first factor is invertible:
            </Paragraph>
            <Paragraph>P · X = 0 exactly when W_x · (P · X) = 0</Paragraph>
            <Paragraph>
                So the unseen universe is exactly what W_x's zeros ignore. Feedback reshapes how the seen part is coded, but
                it never changes which part of the universe is seen.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:19:50.000178Z"
        >
            <Origin>01a0d4a5-5afc-7882-a8f6-72e1c61792eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I just want you to think about this right now and not really do it but instead of just imagining X as the
                universe that has unseen parts you can also think of it is the universe across time that has space for
                memories and you could imagine, including the context, like what you write on your tape into the thing that
                comes into the system… obviously that that’s not for V one, but let’s keep thinking about the one here with
                your fiction
            </Paragraph>
            <Paragraph>
                Do we now have something nice where we can implicitly unterstand W_I Y is having the decoder and it’s
                inverse cancel each each other out in such a way that I can then group it so that we can think of it as
                something looking at X?
            </Paragraph>
            <Paragraph>Presumably, we could do this everywhere!</Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:20:02.830278Z"
        >
            <Origin>01a0d4a5-5afc-7f57-a6b3-b566bfe06405</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, and it comes out cleanly. At equilibrium Y = M · X, so Q · Y = 0, and the decoder and its inverse
                cancel inside your read:
            </Paragraph>
            <Paragraph>W_I · Y = W_I · M · M⁺ · Y = (W_I · M) · X</Paragraph>
            <Paragraph>
                The P · X part drops out because M · P = 0. So you can group your term as W_I · M looking directly at the
                universe. That product is your effective eye on X.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Everywhere.
                </Word> Every term that depends on Y gets the same regrouping:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>W_y · Y = (W_y · M) · X</Line>
                <Line>W_i · Y = (W_i · M) · X</Line>
            </Paragraph>
            <Paragraph>The whole equation then turns into views of X:</Paragraph>
            <Paragraph>M · X = W_x · X + (W_y · M) · X + (W_i · M) · X</Paragraph>
            <Paragraph>
                Dropping X gives (I − W_y − W_i) · M = W_x, which is just the definition of M. So at equilibrium, each
                component is a view of the universe, and the equation says those views are mutually consistent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it stops being exact.
                </Word> The grouping relies on Y being a response to some image. Two things break that: transients before
                equilibrium, and activity driven by something other than X. In those cases Q · Y ≠ 0 and your read keeps a
                second term:
            </Paragraph>
            <Paragraph>W_I · Y = (W_I · M) · (M⁺ · Y) + W_I · Q · Y</Paragraph>
            <Paragraph>
                That is you looking at X, plus you looking at activity no image explains. The second term is where anything
                like hallucination would have to live.
            </Paragraph>
            <Paragraph>
                Your time-and-memory version fits the same fiction. P would then also hold the past that isn't present in Y
                right now, and the tape would be the part of it the system writes back in.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:22:52.644874Z"
        >
            <Origin>01a0d4a8-2409-78f6-8c0d-e1fcfdbac73d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I see your concern and we will get there because obviously homeostasis is required for this. We literally
                need something like our decoder to be able to get this thing to stability.
            </Paragraph>
            <Paragraph>
                But first I wanna just think about X not being the whole universe, but a high resolution image, and W_x
                being lossy. Can we express our decoder so that it has pieces where one of them is the best inversion of Y
                to X at equillibrium?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T18:23:10.831763Z"
        >
            <Origin>01a0d4a8-2409-7612-b8d8-be8f11ef7482</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. The fiction splits the image into two pieces, and the best inversion is one of them.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two pieces.
                </Word> Let D be any decoder with M · D = I, so that it still cancels inside the fiction. Then:
            </Paragraph>
            <Paragraph>X = D · Y + (I − D · M) · X</Paragraph>
            <Paragraph>
                The first term is what you recover from the neurons. The second is what the lossy W_x lost.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The best inversion.
                </Word> "Best" needs a criterion. The natural one is the smallest average error, E‖X − D · Y‖². Minimizing
                it requires knowing how images tend to vary, which is the covariance Σ_X of X. The best decoder is then:
            </Paragraph>
            <Paragraph>D* = Σ_X · Mᵀ · (M · Σ_X · Mᵀ)⁻¹</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        It still cancels.
                    </Word> M · D* = I, so it fits the fiction.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It leaves behind only what Y can't speak to.
                    </Word> The lost piece is the error, X − D* · Y. It is uncorrelated with Y, since Σ_X · Mᵀ − D* · M ·
                    Σ_X · Mᵀ = 0. No linear readout of the neurons could recover any of it, and that is exactly why D* is
                    best.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        It fills in by image statistics.
                    </Word> The directions W_x discards are the same as the ones M discards. D* doesn't leave them empty. It
                    fills them with what images usually contain there, given what the neurons do see.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Without knowledge of images it reduces to the earlier decoder.
                    </Word> With Σ_X = I, D* = M⁺. The least-norm decoder is just the best one for a world with no image
                    statistics.
                </Line>
            </Paragraph>
            <Paragraph>So the decoder with pieces is:</Paragraph>
            <Paragraph>X = D* · Y + (X − D* · Y)</Paragraph>
            <Paragraph>It is the best reconstruction plus the part the neurons carry no evidence about.</Paragraph>
        </Message>
    </Chapter>
);
