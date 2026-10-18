import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--microstock-earnings-analysis-across-platforms--f9da587f/.cover.tsx';
import TheSynopsis from './claude--microstock-earnings-analysis-across-platforms--f9da587f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Microstock earnings analysis across platforms ]]( claude--Microstock earnings analysis across platforms--f9da587f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Microstock earnings analysis across platforms ]]( claude--Microstock earnings analysis across platforms--f9da587f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
