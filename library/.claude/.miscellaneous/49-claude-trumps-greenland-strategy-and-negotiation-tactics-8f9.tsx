import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[19 January 2026](2026-01-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's Greenland strategy and negotiation tactics ]]( claude--Trump's Greenland strategy and negotiation tactics--8f9f43b0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 January 2026: <Means>$[[ Trump's Greenland strategy and negotiation tactics ]]( claude--Trump's Greenland strategy and negotiation tactics--8f9f43b0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
