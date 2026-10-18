import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--weekly-news-briefing-and-analysis--6fea3059/.cover.tsx';
import TheSynopsis from '../.conversations/claude--weekly-news-briefing-and-analysis--6fea3059/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Weekly news briefing and analysis ]]( claude--Weekly news briefing and analysis--6fea3059 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 April 2026: <Means>$[[ Weekly news briefing and analysis ]]( claude--Weekly news briefing and analysis--6fea3059 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
