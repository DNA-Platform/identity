import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/spacex-ipo-analysis-and-market-reaction/.cover.tsx';
import TheSynopsis from '../.conversations/spacex-ipo-analysis-and-market-reaction/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SpaceX IPO analysis and market reaction ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 June 2026: <Means>$[[ SpaceX IPO analysis and market reaction ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
