import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--a-young-boy-has-high-eosinofil--b2a50752/.cover.tsx';
import TheSynopsis from '../.conversations/claude--a-young-boy-has-high-eosinofil--b2a50752/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[24 January 2026](2026-01-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ A young boy has high eosinofil… ]]( claude--A young boy has high eosinofil…--b2a50752 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 January 2026: <Means>$[[ A young boy has high eosinofil… ]]( claude--A young boy has high eosinofil…--b2a50752 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
