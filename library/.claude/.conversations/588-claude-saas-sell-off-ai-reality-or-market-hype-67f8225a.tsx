import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--saas-sell-off-ai-reality-or-market-hype--67f8225a/.cover.tsx';
import TheSynopsis from './claude--saas-sell-off-ai-reality-or-market-hype--67f8225a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[4 February 2026](2026-02-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SaaS sell-off: AI reality or market hype ]]( claude--SaaS sell-off: AI reality or market hype--67f8225a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ SaaS sell-off: AI reality or market hype ]]( claude--SaaS sell-off: AI reality or market hype--67f8225a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
