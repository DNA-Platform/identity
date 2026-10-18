import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-turkish-message-excerpt--e6577dc1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-turkish-message-excerpt--e6577dc1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating Turkish message excerpt ]]( claude--Translating Turkish message excerpt--e6577dc1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Translating Turkish message excerpt ]]( claude--Translating Turkish message excerpt--e6577dc1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
