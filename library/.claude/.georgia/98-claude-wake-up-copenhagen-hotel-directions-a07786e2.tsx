import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wake up Copenhagen hotel directions ]]( claude--Wake up Copenhagen hotel directions--a07786e2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 October 2026: <Means>$[[ Wake up Copenhagen hotel directions ]]( claude--Wake up Copenhagen hotel directions--a07786e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
