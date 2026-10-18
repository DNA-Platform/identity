import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-parable-of-the-talents-explained--e8a774f4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-parable-of-the-talents-explained--e8a774f4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The parable of the talents explained ]]( claude--The parable of the talents explained--e8a774f4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ The parable of the talents explained ]]( claude--The parable of the talents explained--e8a774f4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
