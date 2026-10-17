import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tonx-company-overview-and-financial-analysis--2017c510/.cover.tsx';
import TheSynopsis from './claude--tonx-company-overview-and-financial-analysis--2017c510/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX company overview and financial analysis ]]( claude--TONX company overview and financial analysis--2017c510 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ TONX company overview and financial analysis ]]( claude--TONX company overview and financial analysis--2017c510 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
