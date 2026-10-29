import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian Citizenship &amp; Humanitarian Aid ]]( claude--Georgian Citizenship &amp; Humanitarian Aid--37acc581 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Georgian Citizenship &amp; Humanitarian Aid ]]( claude--Georgian Citizenship &amp; Humanitarian Aid--37acc581 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
