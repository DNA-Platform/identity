import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[20 April 2026](2026-04-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alpha methyl tryptamine pharmacology and serotonin mechanisms ]]( claude--Alpha methyl tryptamine pharmacology and serotonin mechanisms--2188998f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 April 2026: <Means>$[[ Alpha methyl tryptamine pharmacology and serotonin mechanisms ]]( claude--Alpha methyl tryptamine pharmacology and serotonin mechanisms--2188998f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
