import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgian-llc--71b8ccd3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-llc--71b8ccd3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian LLC ]]( claude--Georgian LLC--71b8ccd3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 May 2026: <Means>$[[ Georgian LLC ]]( claude--Georgian LLC--71b8ccd3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
