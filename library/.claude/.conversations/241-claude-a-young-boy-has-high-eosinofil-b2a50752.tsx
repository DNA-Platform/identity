import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--a-young-boy-has-high-eosinofil--b2a50752/.cover.tsx';
import TheSynopsis from './claude--a-young-boy-has-high-eosinofil--b2a50752/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[24 January 2026](2026-01-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ A young boy has high eosinofil… ]]( claude--A young boy has high eosinofil…--b2a50752 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ A young boy has high eosinofil… ]]( claude--A young boy has high eosinofil…--b2a50752 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
