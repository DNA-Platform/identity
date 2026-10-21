import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-21T07:12:18.069445Z"
        >
            <Origin>019ee905-da15-7a7c-a9f8-0a3b0efe95ee</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Research SpaceX's valuation trajectory since its early funding rounds and create an editable artifact (a
                document) summarizing it, with commentary on each major valuation movement.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T07:13:59.654645Z"
        >
            <Origin>019ee905-da15-75af-9e32-72b14502cf3a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll research SpaceX's valuation history across its funding rounds, then build you an editable document.
            </Paragraph>
            <Action>Searched the web for “SpaceX valuation history funding rounds timeline”</Action>
            <Paragraph>
                Let me pin down the early rounds and the recent IPO details, since sources conflict on the latest figures.
            </Paragraph>
            <Action>Searched the web for “SpaceX Series A B C funding rounds 2002 2008 Founders Fund valuation”</Action>
            <Paragraph>
                SpaceX is a private company for most of its history, so its valuations come from funding rounds and
                secondary share sales rather than audited public markets — and the aggregator sources disagree on some
                figures. I've built the document around the more reliable sources (Wikipedia, Sacra) for the spine and
                flagged where numbers conflict. Here it is.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/spacex_valuation_trajectory.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Done — it's an editable markdown document you can revise inline.</Paragraph>
            <Paragraph>A few things worth flagging about what I found, since the data quality genuinely varies:</Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    spine of the trajectory is solid
                </Word> — the priced rounds (2015 Google/Fidelity at ~$12B, 2020 Series J at $46B, 2021 at $74B→$100B, 2022
                Mirae at $127B, 2023 a16z at $137B) are well-documented because real money changed hands at stated prices.
                The <Word>
                    <Bold />
                    2024–2026 marks are shakier
                </Word>: they're secondary and insider sales, not new capital, and several come from investment-marketing
                sites that have a structural bias toward emphasizing upward momentum.
            </Paragraph>
            <Paragraph>
                The single noisiest data point is the <Word>
                    <Bold />
                    June 2026 IPO valuation
                </Word>, where reputable sources split between ~$1.77T (offer-price, per Wikipedia) and ~$2.3T
                (post-trading, per Sacra). I kept both rather than picking one, because the gap is real and reporting is
                still settling.
            </Paragraph>
            <Paragraph>
                The two structural observations I'd draw your attention to: the <Word>
                    <Bold />
                    2023 a16z round was the last primary raise
                </Word> — everything after is repricing of existing shares, which behaves differently from genuine
                fundraising — and the <Word>
                    <Bold />
                    IPO-era disclosures revealed a GAAP net loss (~$4.9B in 2025)
                </Word> despite Starlink being a real profit center, so a meaningful slice of the trillion-plus valuation
                rests on narrative (xAI integration, orbital compute, index-inclusion flows) rather than current earnings.
            </Paragraph>
            <Paragraph>
                If you want, I can add a chart of the trajectory, or dig into the secondary-market mechanics that drove the
                4x run from $210B to $800B in 18 months.
            </Paragraph>
        </Message>
    </Chapter>
);
