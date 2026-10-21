import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--weekly-news-briefing-and-analysis--6fea3059/.cover.tsx';
import TheSynopsis from './claude--weekly-news-briefing-and-analysis--6fea3059/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[19 April 2026](2026-04-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Weekly news briefing and analysis ]]( claude--Weekly news briefing and analysis--6fea3059 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 130 exchanges: <Means>$[[ Weekly news briefing and analysis ]]( claude--Weekly news briefing and analysis--6fea3059 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
