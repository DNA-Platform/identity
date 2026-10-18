import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--translating-turkish-message-excerpt--e6577dc1/.cover.tsx';
import TheSynopsis from './claude--translating-turkish-message-excerpt--e6577dc1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating Turkish message excerpt ]]( claude--Translating Turkish message excerpt--e6577dc1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Translating Turkish message excerpt ]]( claude--Translating Turkish message excerpt--e6577dc1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
