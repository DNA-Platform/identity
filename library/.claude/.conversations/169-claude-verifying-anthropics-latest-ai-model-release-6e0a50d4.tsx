import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--verifying-anthropics-latest-ai-model-release--6e0a50d4/.cover.tsx';
import TheSynopsis from './claude--verifying-anthropics-latest-ai-model-release--6e0a50d4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[10 June 2026](2026-06-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Verifying Anthropic's latest AI model release ]]( claude--Verifying Anthropic's latest AI model release--6e0a50d4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 52 exchanges: <Means>$[[ Verifying Anthropic's latest AI model release ]]( claude--Verifying Anthropic's latest AI model release--6e0a50d4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
