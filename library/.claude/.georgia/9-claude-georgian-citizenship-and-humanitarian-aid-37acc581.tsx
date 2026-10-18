import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian Citizenship &amp; Humanitarian Aid ]]( claude--Georgian Citizenship &amp; Humanitarian Aid--37acc581 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Georgian Citizenship &amp; Humanitarian Aid ]]( claude--Georgian Citizenship &amp; Humanitarian Aid--37acc581 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
