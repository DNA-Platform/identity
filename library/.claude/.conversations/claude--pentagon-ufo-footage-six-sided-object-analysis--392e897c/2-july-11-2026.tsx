import { Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 July 2026](2026-07-11)</Date>
        </Dated>
        <Title>[[ 11 July 2026 ]]</Title>
        <Message
            at="2026-07-11T05:40:52.197792Z"
        >
            <Origin>019f4fb1-e6b6-7605-8d10-e8c7043461bc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>There’s no actual record of the underlying footage to diff against?</Paragraph>
        </Message>
        <Message
            at="2026-07-11T05:41:05.155754Z"
        >
            <Origin>019f4fb1-e6b9-7c2d-818e-bd37ac7bf9a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Generally no — and this is one of the deepest problems with the whole enterprise. The processing happens in
                real time inside the pod's electronics, upstream of anything that gets recorded. What's stored is the
                processed video stream — essentially the cockpit display feed, complete with symbology — because that's what
                operations needs: mission review, battle damage assessment, legal review of strikes. The raw focal-plane
                readout (pre-AGC, pre-sharpening, pre-de-rotation) typically isn't retained at all. It exists for
                milliseconds as voltages and buffer states and is gone. Bandwidth and storage are part of it, but mostly
                there's just no operational requirement — nobody flying a strike mission needs uncalibrated detector output.
            </Paragraph>
            <Paragraph>
                So the "original" is the artifact. There's no negative to go back to, no RAW file behind the JPEG. The
                enhancement is baked in at capture, which means analysts trying to resolve these cases later are doing
                forensics on an image whose transfer function they can only partially reconstruct — they can reason about
                what AGC and the point spread function <Word>
                    <Emphasis />
                    would
                </Word> do, but they can't invert it, because the operations are lossy and scene-dependent.
            </Paragraph>
            <Paragraph>
                What does exist alongside the video is metadata: the symbology overlay itself (range if there was a laser or
                radar track, slant angles, platform coordinates, sensor mode), plus the platform's own data buses. That's
                often enough to constrain a case — GoFast was resolved using the displayed range and angles to compute the
                object's actual altitude and speed, which turned out to be mundane. Which makes it notable that the public
                releases tend to crop or omit exactly that layer. The one form of ground truth that survives recording is
                the part most consistently stripped before release — justified as protecting sensor capabilities, but it's
                also the difference between a solvable geometry problem and an evocative mystery blob.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T05:43:18.664634Z"
        >
            <Origin>019f4fb4-32a6-7756-89d2-7eac91684238</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah but why can’t they put a separate camera that more or less represents the unprocessed stream
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T05:43:40.208127Z"
        >
            <Origin>019f4fb4-32a9-7f72-a3fc-1d1a77302090</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You could — but the fix isn't a second camera, and the reasons it's not done are instructive.
            </Paragraph>
            <Paragraph>
                A separate camera doesn't solve it because the artifacts live in the shared optics. Diffraction spikes,
                glare, bokeh are produced by the telescope's aperture and focus, so a different camera with its own lens
                sees its own different artifacts of the same point source — you'd have two stylized renderings and still no
                ground truth about shape, because shape was never captured by either. What you'd actually want is to tap the
                <Word>
                    <Emphasis />
                    same
                </Word> focal plane before enhancement: record the digitized detector output post-readout but pre-AGC,
                pre-sharpening. That's technically feasible — it's just a data stream — and it's exactly what science-grade
                sensors do: astronomy instruments and missile-defense tracking sensors record radiometrically calibrated raw
                precisely so you can separate instrument response from target. Also worth knowing: fully "unprocessed" IR is
                nearly unintelligible — a raw FPA frame is a snowstorm of per-pixel gain variation and dead pixels — so the
                meaningful raw is "corrected but not enhanced," which preserves the actual radiometry AGC destroys.
            </Paragraph>
            <Paragraph>
                Why targeting pods don't retain it: no operational need (the pod's job is putting weapons on targets, not
                instrument science), real bandwidth and storage costs multiplied across every sortie for data virtually
                never used, and — probably decisive — classification. Calibrated raw output directly reveals the sensor's
                noise floor, sensitivity, and correction tables, which is capability intelligence of the kind adversaries
                want most. A recorded raw stream is a leak surface. So the enhancement layer functions almost like armor:
                the processed feed is releasable precisely because it obscures what the instrument can really do.
            </Paragraph>
            <Paragraph>
                The interesting coda is that this gap is acknowledged now. AARO's stated position under Kirkpatrick was that
                military sensors are unsuited for UAP resolution for exactly these reasons, and they've fielded
                purpose-built calibrated multi-sensor kits (the Gremlin program) for hotspot deployment. So the honest
                answer to "why can't they" is: they can, they've started to, but on dedicated instruments — the operational
                fleet will keep recording the processed feed, and its footage will keep generating starbursts.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T06:04:14.801745Z"
        >
            <Origin>019f4fc7-51b6-77aa-a156-e4938a59bb99</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Um well I disagree on the semantic grounds of what explained or unidentified means because you can’t just
                change that. If a person that is the only witness to something has only one functional lie and needs very
                serious prescription glasses. Then that thing is more likely to be unexplained. Once recorded you can’t
                shrug off explanation.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T06:04:40.523165Z"
        >
            <Origin>019f4fc7-51b7-7d95-8c5d-97a697a60ba9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're drawing the right cut, and it's the one the label "unresolved" deliberately blurs. There are two
                separate epistemic states: an anomaly, where the data is good and positively resists every known
                explanation; and a data-limited case, where the data is too poor to select among perfectly ordinary
                explanations. The Yellow Sea video is emphatically the second. The recording itself is explained — fully,
                mechanistically: point source, PSF, AGC, six-fold aperture symmetry. What remains open is only the
                attribution of a mundane dot, and a dot at unknown range is unattributable in the same boring way your
                half-blind witness's testimony is. That residual isn't mystery; it's ignorance, and ignorance manufactured
                by the instrument, which we understand completely. Honest labeling would be something like "phenomenology
                explained; source unattributed for lack of data."
            </Paragraph>
            <Paragraph>
                Your witness analogy actually cashes out as a likelihood-ratio point: evidence from a known-bad instrument
                can't raise the probability of exotic hypotheses, because a bad instrument produces the same smear under
                nearly all hypotheses. P(starburst | balloon) ≈ P(starburst | aircraft) ≈ P(starburst | anything bright and
                small). Evidence that fails to discriminate leaves your priors where they were. So "unexplained" in the
                sense that would matter — data that shifts weight toward the exotic — simply isn't present. The Pentagon's
                usage inverts this: it lets the <Word>
                    <Emphasis />
                    weakness
                </Word> of the evidence do rhetorical work that only <Word>
                    <Emphasis />
                    strength
                </Word> of evidence could legitimately do. A blurry photo at Loch Ness isn't evidence of a monster; it's
                evidence of blur.
            </Paragraph>
            <Paragraph>
                And you can't shrug off the part that is explained, agreed — once the phenomenology is nailed down,
                "unidentified" no longer covers the whole case, only the leftover attribution gap. Bundling both under one
                word is where the sleight happens: "we cannot make a definitive determination" is true of essentially every
                distant point of light ever filmed, and dressing that triviality as an open question is how a solved image
                stays a headline.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T06:06:29.444287Z"
        >
            <Origin>019f4fc9-6b02-7fa8-91e2-1f1ca957eb2c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But that’s the point it is still unexplained. Once you have identified that something is there it becomes
                subjective explanation so I see what you’re saying but the answer I think is just that we’re taking pictures
                of things using your system. That sometimes has a very hard time identifying them so then or rather it locks
                them so that I identify something, but it has a hard time saying what it is so the technology is going to
                create more unexplained phenomena.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T06:06:44.978000Z"
        >
            <Origin>019f4fc9-6b04-7760-a82a-b93f50eacd41</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — and that's the structural insight that makes the whole current wave legible. These systems have a
                detection-to-characterization gap: sensitivity has improved much faster than resolving power. A modern
                cooled MWIR tracker can detect and lock a thermal contrast of a fraction of a degree from tens of miles —
                far beyond the range at which it can characterize what it locked. Every improvement in sensitivity widens
                the shell of space in which things are detectable but not resolvable, and everything inside that shell
                becomes, by procedure, a UAP report. The instrument is an unexplained-phenomena generator by geometry.
            </Paragraph>
            <Paragraph>
                Then reporting policy multiplied it. Pre-2019, aircrew mostly didn't file on ambiguous contacts — stigma
                suppressed the paperwork. Post-Nimitz, reporting became mandated and destigmatized, so the same sensor
                output that was previously shrugged off now enters a formal pipeline, gets a case number, and eventually a
                FOIA-able file. Detection up, characterization flat, reporting way up: the catalog grows mechanically, with
                no change whatsoever in what's actually flying. AARO's own resolved-case statistics show the input
                distribution is balloons, drones, birds, satellites, and clutter, which is exactly what you'd predict if the
                growth is instrumental rather than phenomenal.
            </Paragraph>
            <Paragraph>
                And on the semantics, I'll take your refinement: "the recording is explained" was my shorthand, but the
                object genuinely remains unexplained — a real thing was there and no attribution was made, and that's a true
                open question, however mundane its likely answer. The precise statement is that each case carries two
                questions, "why does the image look like this" (answered) and "what was the source" (open), and the honest
                expectation going forward is that the second question will scale with sensor deployment. More pods, more
                drones, more maritime surveillance near contested coastlines means the unexplained residue grows
                indefinitely — not because the sky changed, but because we're interrogating it with instruments built to
                notice everything and identify little.
            </Paragraph>
        </Message>
    </Chapter>
);
