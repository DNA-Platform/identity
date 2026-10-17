import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--spacex-ipo-analysis-and-market-reaction--7fa923e8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--spacex-ipo-analysis-and-market-reaction--7fa923e8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SpaceX IPO analysis and market reaction ]]( claude--SpaceX IPO analysis and market reaction--7fa923e8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 June 2026: <Means>$[[ SpaceX IPO analysis and market reaction ]]( claude--SpaceX IPO analysis and market reaction--7fa923e8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
