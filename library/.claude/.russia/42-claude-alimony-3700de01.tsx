import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--alimony--3700de01/.cover.tsx';
import TheSynopsis from '../.conversations/claude--alimony--3700de01/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alimony ]]( claude--Alimony--3700de01 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 July 2026: <Means>$[[ Alimony ]]( claude--Alimony--3700de01 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
