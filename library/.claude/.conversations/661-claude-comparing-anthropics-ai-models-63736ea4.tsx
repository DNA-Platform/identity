import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--comparing-anthropics-ai-models--63736ea4/.cover.tsx';
import TheSynopsis from './claude--comparing-anthropics-ai-models--63736ea4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[17 November 2024](2024-11-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Comparing Anthropic's AI Models ]]( claude--Comparing Anthropic's AI Models--63736ea4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Comparing Anthropic's AI Models ]]( claude--Comparing Anthropic's AI Models--63736ea4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
