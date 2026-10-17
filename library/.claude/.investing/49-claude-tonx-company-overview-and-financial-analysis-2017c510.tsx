import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX company overview and financial analysis ]]( claude--TONX company overview and financial analysis--2017c510 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 January 2026: <Means>$[[ TONX company overview and financial analysis ]]( claude--TONX company overview and financial analysis--2017c510 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
