import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgian-payoneer-help--41ee9869/.cover.tsx';
import TheSynopsis from './claude--georgian-payoneer-help--41ee9869/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[22 September 2026](2026-09-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian Payoneer Help ]]( claude--Georgian Payoneer Help--41ee9869 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 280 exchanges: <Means>$[[ Georgian Payoneer Help ]]( claude--Georgian Payoneer Help--41ee9869 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
