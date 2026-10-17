import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-analysis--67a776fe/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-analysis--67a776fe/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[5 October 2025](2025-10-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory analysis ]]( claude--Semantic reference theory analysis--67a776fe )</Title>
        <Paragraph>
            <Caption />
            A conversation, 72 exchanges: <Means>$[[ Semantic reference theory analysis ]]( claude--Semantic reference theory analysis--67a776fe )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
