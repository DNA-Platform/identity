import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--publication--38abba80/.cover.tsx';
import TheSynopsis from './claude--publication--38abba80/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2025</Part>
        <Dated>
            <Date>[8 April 2025](2025-04-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Publication ]]( claude--Publication--38abba80 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 244 exchanges: <Means>$[[ Publication ]]( claude--Publication--38abba80 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
