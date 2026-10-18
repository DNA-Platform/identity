import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 April 2026](2026-04-24)</Date>
        </Dated>
        <Title>[[ 24 April 2026 ]]</Title>
        <Message
            at="2026-04-24T13:20:30.041320Z"
        >
            <Origin>019dbfa6-fbcc-7599-964d-7e814b660409</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Do we humans or cats have any part of our micro biome in our stomachs?</Paragraph>
        </Message>
        <Message
            at="2026-04-24T13:20:58.254193Z"
        >
            <Origin>019dbfa6-fbcc-7965-8102-15c7b3a7f1ff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — both have gastric microbiomes. The old "sterile stomach" dogma collapsed with Marshall and Warren's
                <Word>
                    <Emphasis />
                    H. pylori
                </Word> work. Density is low compared to the colon (~10¹–10³ vs 10¹¹–10¹² CFU/mL), but it's a real,
                structured community, not just transient swallowed flora.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Humans:
                </Word> Beyond <Word>
                    <Emphasis />
                    H. pylori
                </Word>, the dominant residents are <Word>
                    <Emphasis />
                    Streptococcus
                </Word>, <Word>
                    <Emphasis />
                    Prevotella
                </Word>, <Word>
                    <Emphasis />
                    Veillonella
                </Word>, <Word>
                    <Emphasis />
                    Rothia
                </Word>, and <Word>
                    <Emphasis />
                    Lactobacillus
                </Word> — a mix of acid-tolerant colonizers and oral-origin taxa that establish some residence along the
                mucus layer.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cats:
                </Word> Arguably a richer gastric Helicobacter ecology than humans. Feline stomachs commonly carry multiple
                non-pylori species — <Word>
                    <Emphasis />
                    H. felis
                </Word>, <Word>
                    <Emphasis />
                    H. heilmannii
                </Word>, <Word>
                    <Emphasis />
                    H. bizzozeronii
                </Word>, <Word>
                    <Emphasis />
                    H. salomonis
                </Word> — often at high prevalence without overt disease, which is a notable contrast to the human <Word>
                    <Emphasis />
                    H. pylori
                </Word> pathogenesis story. You also see the usual acid-tolerant Firmicutes/Bacteroidetes/Proteobacteria
                background.
            </Paragraph>
            <Paragraph>
                Mechanistically, gastric acid is a strong selective filter rather than a sterilizer. Survivors tend to be
                urease-producers (locally neutralize pH), mucus-layer biofilm formers, or bile/acid-tolerant transients
                riding through from the oropharynx.
            </Paragraph>
        </Message>
    </Chapter>
);
