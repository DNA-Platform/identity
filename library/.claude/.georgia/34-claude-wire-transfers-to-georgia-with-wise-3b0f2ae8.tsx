import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[6 February 2026](2026-02-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wire transfers to Georgia with Wise ]]( claude--Wire transfers to Georgia with Wise--3b0f2ae8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 February 2026: <Means>$[[ Wire transfers to Georgia with Wise ]]( claude--Wire transfers to Georgia with Wise--3b0f2ae8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
