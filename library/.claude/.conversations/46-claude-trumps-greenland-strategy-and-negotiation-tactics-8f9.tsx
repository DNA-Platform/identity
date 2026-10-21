import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.cover.tsx';
import TheSynopsis from './claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[19 January 2026](2026-01-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's Greenland strategy and negotiation tactics ]]( claude--Trump's Greenland strategy and negotiation tactics--8f9f43b0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Trump's Greenland strategy and negotiation tactics ]]( claude--Trump's Greenland strategy and negotiation tactics--8f9f43b0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
