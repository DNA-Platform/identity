import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--competitive-calibration-and-foundational-innovation--6aff23d6/.cover.tsx';
import TheSynopsis from './claude--competitive-calibration-and-foundational-innovation--6aff23d6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Competitive calibration and foundational innovation ]]( claude--Competitive calibration and foundational innovation--6aff23d6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Competitive calibration and foundational innovation ]]( claude--Competitive calibration and foundational innovation--6aff23d6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
