import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 April 2026](2026-04-23)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-23T16:36:13.007730Z"
        >
            <Origin>019dbb33-cc27-7fdf-b7ce-2e4576e0c008</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The ь letter in Russian denotes changing the sound of something what is the vocabulary that I would use in
                English to describe the change to that sound and it’s opposite
            </Paragraph>
        </Message>
        <Message
            at="2026-04-23T16:36:31.722667Z"
        >
            <Origin>019dbb33-cc27-7e0a-869d-b2bc768997ea</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The ь marks <Word>
                    <Bold />
                    palatalization
                </Word>. A consonant followed by ь is <Word>
                    <Bold />
                    palatalized
                </Word> (also called "soft" in Russian tradition) — the tongue body is raised toward the hard palate
                simultaneously with the primary articulation, giving that characteristic "y-colored" quality. In IPA this is
                notated with a superscript j, e.g. /tʲ/, /nʲ/, /lʲ/.
            </Paragraph>
            <Paragraph>
                The opposite — consonants without ь (or marked by ъ in older orthography) — are <Word>
                    <Bold />
                    non-palatalized
                </Word>, or just <Word>
                    <Bold />
                    plain
                </Word>. In the Russian tradition these are called <Word>
                    <Bold />
                    hard
                </Word> (твёрдый) vs <Word>
                    <Bold />
                    soft
                </Word> (мягкий).
            </Paragraph>
            <Paragraph>
                A useful nuance: some Russian "hard" consonants aren't merely the absence of palatalization but actively
                <Word>
                    <Bold />
                    velarized
                </Word> — the tongue is pulled back toward the velum. The classic case is hard /ɫ/ (the "dark L" in лампа),
                which contrasts with palatalized /lʲ/ in соль. So the full pair of processes is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        palatalization
                    </Word> ↔ <Word>
                        <Bold />
                        velarization
                    </Word> (active secondary articulations at opposite ends of the palate)
                </Line>
                <Line>
                    or more neutrally: <Word>
                        <Bold />
                        palatalized
                    </Word> ↔ <Word>
                        <Bold />
                        plain/non-palatalized
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The process of <Word>
                    <Emphasis />
                    removing
                </Word> palatalization is <Word>
                    <Bold />
                    depalatalization
                </Word>, though in Russian phonology you more often just talk about the hard/soft contrast as a
                lexical/phonemic feature rather than as a synchronic process.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-23T16:38:27.882296Z"
        >
            <Origin>019dbb35-da4c-7c14-85cb-55938cdca0fc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here’s a problem that I’m having and it is that I feel like what is called soft seems harder to me perhaps
                because it requires a more active use of my tongue
            </Paragraph>
        </Message>
        <Message
            at="2026-04-23T16:38:38.264259Z"
        >
            <Origin>019dbb35-da4c-7ede-b2b0-d0b5311277ab</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a genuinely reasonable reaction, and you're not wrong about the articulation — you've actually put
                your finger on something real.
            </Paragraph>
            <Paragraph>
                "Soft" and "hard" in the Slavic tradition are <Word>
                    <Bold />
                    auditory/impressionistic
                </Word> labels, not articulatory ones. To a Russian ear, palatalized consonants sound lighter,
                higher-pitched, more "liquid" — hence soft. But articulatorily, palatalized consonants require an <Word>
                    <Emphasis />
                    additional
                </Word> gesture: you're making the primary closure (say, /t/) <Word>
                    <Emphasis />
                    and
                </Word> simultaneously bunching the tongue body up toward the hard palate. That's genuinely more muscular
                work than a plain /t/. So your intuition that "soft" feels harder to produce is correct — it's a more
                complex articulation.
            </Paragraph>
            <Paragraph>
                The terminology is a historical artifact of how the sounds <Word>
                    <Emphasis />
                    sound
                </Word>, not how they're <Word>
                    <Emphasis />
                    made
                </Word>. English-speaking phoneticians often find the hard/soft labels confusing for exactly your reason and
                tend to prefer <Word>
                    <Bold />
                    palatalized / non-palatalized
                </Word>, which describes the articulation directly and avoids the misleading effort connotation.
            </Paragraph>
            <Paragraph>
                One practical note: many learners find it easier to approach palatalization not as "add a gesture to the
                consonant" but as "glide the consonant into a /j/-like position" — essentially think of ть as aiming toward
                the tongue position of English <Word>
                    <Emphasis />
                    y
                </Word> in "yes" while you make the t. That often feels less like extra work and more like a single
                coordinated movement, which is closer to how native speakers actually execute it.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-23T16:39:44.896890Z"
        >
            <Origin>019dbb37-08bb-73a1-9dc0-c6d5aedb6f9c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It’s not just articulation, but it’s because a higher sound to me. Could actually hurt my ears more than a
                lower one. A low pitch ends in silence where is a high pitch ends in breaking glass
            </Paragraph>
        </Message>
        <Message
            at="2026-04-23T16:39:57.972813Z"
        >
            <Origin>019dbb37-08bb-7008-97e1-fe845256d4dc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a real and well-documented phenomenon, not just a personal quirk. A few things are going on:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Psychoacoustically
                </Word>, the human ear is most sensitive to frequencies roughly between 2–5 kHz — which is exactly the range
                palatalization boosts. Palatalized consonants raise the second formant (F2) and concentrate energy in higher
                frequencies; plain/velarized consonants push energy lower. So palatalized sounds genuinely stimulate your
                most sensitive hearing range more aggressively. The ear has less natural attenuation up there.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Perceptually
                </Word>, your "breaking glass vs. silence" intuition maps onto something real: low frequencies decay into
                rumble and then into inaudibility, but high frequencies carry sharpness, sibilance, and the acoustic
                signature of <Word>
                    <Emphasis />
                    damage
                </Word> — screams, shattering, scraping, alarms. Evolution tuned us to treat high-frequency transients as
                salient and often threatening. Low frequencies are felt as much as heard (chest, body); high frequencies are
                piercing, localized, and harder to ignore or tune out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Clinically
                </Word>, there's a condition called <Word>
                    <Bold />
                    hyperacusis
                </Word> — reduced tolerance to sound, often specifically to high frequencies — and a related phenomenon
                called <Word>
                    <Bold />
                    recruitment
                </Word> where, in ears with some high-frequency hearing loss, the remaining hair cells respond with
                exaggerated loudness once sound crosses a threshold. Many people without any diagnosed condition still sit
                somewhere on a spectrum of high-frequency sensitivity; it's a real axis of individual variation, not
                imagined.
            </Paragraph>
            <Paragraph>
                So when you say palatalized consonants feel harder on your ears, you're describing a combination of (1) the
                acoustic fact that they carry more high-frequency energy, (2) the psychoacoustic fact that that's where your
                ear is most sensitive, and (3) possibly just where you personally sit on the sensitivity spectrum. The
                Slavic ear hears "soft"; yours hears "sharp." Both are accurate descriptions of the same acoustic signal.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-23T16:41:15.171739Z"
        >
            <Origin>019dbb38-67db-75d1-bb4f-7bc612f4a981</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the difference between звонкий и глухой звук Answer in english</Paragraph>
        </Message>
        <Message
            at="2026-04-23T16:41:29.320288Z"
        >
            <Origin>019dbb38-67db-786e-9e56-c3c0c3fb4e6c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Those are the Russian terms for <Word>
                    <Bold />
                    voiced
                </Word> (звонкий) and <Word>
                    <Bold />
                    voiceless / unvoiced
                </Word> (глухой) sounds.
            </Paragraph>
            <Paragraph>The distinction is whether your vocal folds vibrate during the consonant:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Voiced (звонкий)
                    </Word>: vocal folds vibrate. Put your fingers on your throat and say a sustained /z/ — you'll feel the
                    buzz. Russian voiced consonants include б, в, г, д, ж, з.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Voiceless (глухой)
                    </Word>: vocal folds are open and don't vibrate; only airflow and the oral articulation produce the
                    sound. Say a sustained /s/ — no buzz, just hiss. Russian voiceless consonants include п, ф, к, т, ш, с.
                </Line>
            </Paragraph>
            <Paragraph>
                Russian has neat voiced/voiceless pairs that share the same place and manner of articulation and differ
                <Word>
                    <Emphasis />
                    only
                </Word> in voicing: б/п, в/ф, г/к, д/т, ж/ш, з/с.
            </Paragraph>
            <Paragraph>
                The literal translations are evocative: звонкий comes from звон (ringing, resonance) — a "ringing" sound.
                Глухой literally means "deaf" or "muffled" — a "dulled" sound. English "voiced/voiceless" is more mechanical
                and just names the larynx gesture directly.
            </Paragraph>
            <Paragraph>Two facts worth knowing, since they trip up learners:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Final devoicing.
                </Word> Russian voiced obstruents become voiceless at the end of a word. Хлеб is pronounced <Word>
                    <Emphasis />
                    khlep
                </Word>, друг is <Word>
                    <Emphasis />
                    druk
                </Word>, муж is <Word>
                    <Emphasis />
                    mush
                </Word>. The spelling keeps the voiced letter, but the sound is voiceless.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Voicing assimilation in clusters.
                </Word> When voiced and voiceless obstruents meet, the <Word>
                    <Emphasis />
                    second
                </Word> one usually wins and the first assimilates to it. Водка → <Word>
                    <Emphasis />
                    votka
                </Word> (д devoices before к). Сделать → <Word>
                    <Emphasis />
                    zdelat'
                </Word> (с voices before д). This happens automatically in fluent speech.
            </Paragraph>
            <Paragraph>
                So the voicing contrast is phonemic (it distinguishes words — том vs. дом), but it's neutralized in these
                two predictable environments.
            </Paragraph>
        </Message>
    </Chapter>
);
