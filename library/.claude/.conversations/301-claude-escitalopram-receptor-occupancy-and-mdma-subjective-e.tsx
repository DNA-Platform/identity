import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.cover.tsx';
import TheSynopsis from './claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[3 April 2026](2026-04-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Escitalopram receptor occupancy and MDMA subjective effects ]]( claude--Escitalopram receptor occupancy and MDMA subjective effects--bb1a660d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Escitalopram receptor occupancy and MDMA subjective effects ]]( claude--Escitalopram receptor occupancy and MDMA subjective effects--bb1a660d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
