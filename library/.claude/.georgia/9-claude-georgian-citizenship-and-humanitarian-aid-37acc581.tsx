import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
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
