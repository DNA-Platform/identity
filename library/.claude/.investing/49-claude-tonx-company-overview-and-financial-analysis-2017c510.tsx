import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX company overview and financial analysis ]]( claude--TONX company overview and financial analysis--2017c510 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 January 2026: <Means>$[[ TONX company overview and financial analysis ]]( claude--TONX company overview and financial analysis--2017c510 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
