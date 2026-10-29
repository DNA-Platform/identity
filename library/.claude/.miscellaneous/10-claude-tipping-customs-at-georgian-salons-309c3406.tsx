import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--tipping-customs-at-georgian-salons--309c3406/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tipping-customs-at-georgian-salons--309c3406/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[7 April 2026](2026-04-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tipping customs at Georgian salons ]]( claude--Tipping customs at Georgian salons--309c3406 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 April 2026: <Means>$[[ Tipping customs at Georgian salons ]]( claude--Tipping customs at Georgian salons--309c3406 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
