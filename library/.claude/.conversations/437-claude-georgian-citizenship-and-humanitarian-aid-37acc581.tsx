import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgian-citizenship-and-humanitarian-aid--37acc581/.cover.tsx';
import TheSynopsis from './claude--georgian-citizenship-and-humanitarian-aid--37acc581/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian Citizenship &amp; Humanitarian Aid ]]( claude--Georgian Citizenship &amp; Humanitarian Aid--37acc581 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Georgian Citizenship &amp; Humanitarian Aid ]]( claude--Georgian Citizenship &amp; Humanitarian Aid--37acc581 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
