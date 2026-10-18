import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgian-payoneer-help--41ee9869/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-payoneer-help--41ee9869/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian Payoneer Help ]]( claude--Georgian Payoneer Help--41ee9869 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 June 2026: <Means>$[[ Georgian Payoneer Help ]]( claude--Georgian Payoneer Help--41ee9869 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
