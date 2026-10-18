import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-turkish-message-excerpt--e6577dc1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-turkish-message-excerpt--e6577dc1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating Turkish message excerpt ]]( claude--Translating Turkish message excerpt--e6577dc1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Translating Turkish message excerpt ]]( claude--Translating Turkish message excerpt--e6577dc1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
