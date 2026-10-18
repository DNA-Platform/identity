import { Bold, Chapter, Date, Emphasis, Line, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 March 2026](2026-03-06)</Date>
        </Dated>
        <Title>[[ 6 March 2026 ]]</Title>
        <Message
            at="2026-03-06T16:33:14.183604Z"
        >
            <Origin>019cc3ff-2573-7eca-8b34-ddbfd6ff0e27</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you tell me about the results of this PCR test for Penelope in English cause I can’t read the Georgian
            </Paragraph>
            <Attachment>Uploaded “IMG_3018.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-06T16:33:55.080571Z"
        >
            <Origin>019cc3ff-2574-7d58-b936-06c1416089d2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>This is a big result. Here's what you're looking at:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    LB PCR Feline Diarrhea 8 Panel
                </Word> — Vetlife Animal Hospital, Tbilisi, dated 06.03.2026. Run on a Bionote Vcheck M10 analyzer.
            </Paragraph>
            <Paragraph>
                The Georgian: <Word>
                    <Bold />
                    დადებითი
                </Word> = positive, <Word>
                    <Bold />
                    უარყოფითი
                </Word> = negative.
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Pathogen</Word>
                    <Word>Result</Word>
                    <Word>Ct Value</Word>
                </Line>
                <Line>
                    <Word>Campylobacter spp. (C. coli, C. jejuni)</Word>
                    <Word>POSITIVE</Word>
                    <Word>34.47</Word>
                </Line>
                <Line>
                    <Word>Salmonella spp.</Word>
                    <Word>Negative</Word>
                    <Word>—</Word>
                </Line>
                <Line>
                    <Word>Feline coronavirus</Word>
                    <Word>POSITIVE</Word>
                    <Word>22.07</Word>
                </Line>
                <Line>
                    <Word>Toxoplasma gondii</Word>
                    <Word>Negative</Word>
                    <Word>—</Word>
                </Line>
                <Line>
                    <Word>Tritrichomonas blagburni</Word>
                    <Word>Negative</Word>
                    <Word>—</Word>
                </Line>
                <Line>
                    <Word>Cryptosporidium spp. (C. felis)</Word>
                    <Word>Negative</Word>
                    <Word>—</Word>
                </Line>
                <Line>
                    <Word>Feline parvovirus</Word>
                    <Word>Negative</Word>
                    <Word>—</Word>
                </Line>
                <Line>
                    <Word>Giardia lamblia (Assemblages A, B, F)</Word>
                    <Word>Negative</Word>
                    <Word>—</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    THE HEADLINES
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tritrichomonas blagburni: NEGATIVE.
                </Word> You called it. This is exactly the result your decision tree was built around. The organism is
                either absent or below the detection threshold — which, per your framework, means the clinical problem isn't
                active T. foetus overgrowth. Ronidazole is off the table. The treatment path is ecosystem restoration:
                Enterol, fiber, time, and potentially FMT from Casper.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Giardia: NEGATIVE.
                </Word> The secnidazole worked. That infection is cleared.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now the two you probably weren't expecting:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Feline coronavirus: POSITIVE, Ct 22.07.
                </Word> This is a <Word>
                    <Emphasis />
                    high
                </Word> viral load. Ct is inversely proportional to organism concentration — the lower the Ct, the more
                virus. 22 is a lot of fecal shedding. Feline coronavirus (FCoV) is extremely common — 80-90% of cats in
                multi-cat environments carry it — and in most cats it causes mild or self-limiting enteritis or nothing at
                all. But it <Word>
                    <Emphasis />
                    is
                </Word> an enteric pathogen. It infects the enterocytes of the small intestine and colon. In a cat whose gut
                is already destabilized from months of dual protozoal infection and nitroimidazole damage, active FCoV
                replication could be a significant contributor to ongoing diarrhea that nobody was looking for because
                everyone was focused on the protozoa.
            </Paragraph>
            <Paragraph>
                The critical distinction: FCoV itself is usually benign and self-limiting. The fear with FCoV is mutation to
                FIPV (feline infectious peritonitis virus), but that's a systemic disease with effusions, fevers,
                neurological signs — not what Penelope has. Her ultrasound showed clean liver, spleen, pancreas, no
                effusions. This looks like enteric FCoV doing what it does — causing intestinal inflammation in a gut that
                doesn't have the resilience to shrug it off right now.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Campylobacter: POSITIVE, Ct 34.47.
                </Word> This is a <Word>
                    <Emphasis />
                    very low
                </Word> load. Ct 34.47 is near the detection limit — this is probably commensal-level carriage rather than
                active infection. Many healthy cats carry Campylobacter without disease. I wouldn't treat this unless a vet
                specifically thinks it's contributing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    WHAT THIS CHANGES
                </Word>
            </Paragraph>
            <Paragraph>
                Your microbiome disruption thesis just got stronger, not weaker. Penelope's gut isn't fighting an active T.
                foetus overgrowth. It's a destabilized ecosystem that can't manage organisms it should be able to handle —
                including a coronavirus that most cats shed without symptoms. The Enterol + fiber + time protocol Dr.
                Korytina prescribed is exactly right. The FCoV will likely clear on its own once the gut ecosystem
                stabilizes, because a healthy microbiome provides colonization resistance against viral enteric pathogens
                too.
            </Paragraph>
            <Paragraph>
                The one thing worth discussing with the vet: does the FCoV finding change anything about the treatment plan?
                Probably not — there's no direct antiviral for enteric FCoV, and the treatment is supportive (which is
                already what you're doing). But the vet should know about it, and it might explain why the diarrhea has been
                so persistent even after clearing the protozoa.
            </Paragraph>
        </Message>
    </Chapter>
);
