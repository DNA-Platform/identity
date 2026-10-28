import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/.cover.tsx';
import TheSynopsis from './claude--alpha-methyl-tryptamine-pharmacology-and-serotonin-mechanism--2188998f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[20 April 2026](2026-04-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alpha methyl tryptamine pharmacology and serotonin mechanisms ]]( claude--Alpha methyl tryptamine pharmacology and serotonin mechanisms--2188998f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Alpha methyl tryptamine pharmacology and serotonin mechanisms ]]( claude--Alpha methyl tryptamine pharmacology and serotonin mechanisms--2188998f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
