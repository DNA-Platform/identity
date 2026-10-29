import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--georgian-payoneer-help--41ee9869/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-payoneer-help--41ee9869/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian Payoneer Help ]]( claude--Georgian Payoneer Help--41ee9869 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 June 2026: <Means>$[[ Georgian Payoneer Help ]]( claude--Georgian Payoneer Help--41ee9869 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
