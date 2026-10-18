import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tipping-customs-at-georgian-salons--309c3406/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tipping-customs-at-georgian-salons--309c3406/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tipping customs at Georgian salons ]]( claude--Tipping customs at Georgian salons--309c3406 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 April 2026: <Means>$[[ Tipping customs at Georgian salons ]]( claude--Tipping customs at Georgian salons--309c3406 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
