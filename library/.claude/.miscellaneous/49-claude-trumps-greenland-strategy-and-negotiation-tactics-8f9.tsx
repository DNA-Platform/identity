import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's Greenland strategy and negotiation tactics ]]( claude--Trump's Greenland strategy and negotiation tactics--8f9f43b0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 January 2026: <Means>$[[ Trump's Greenland strategy and negotiation tactics ]]( claude--Trump's Greenland strategy and negotiation tactics--8f9f43b0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
