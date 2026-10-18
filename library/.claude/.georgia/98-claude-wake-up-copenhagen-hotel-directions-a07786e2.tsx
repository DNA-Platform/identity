import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wake up Copenhagen hotel directions ]]( claude--Wake up Copenhagen hotel directions--a07786e2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 October 2026: <Means>$[[ Wake up Copenhagen hotel directions ]]( claude--Wake up Copenhagen hotel directions--a07786e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
