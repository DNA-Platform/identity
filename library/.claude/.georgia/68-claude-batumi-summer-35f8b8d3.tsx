import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--batumi-summer--35f8b8d3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--batumi-summer--35f8b8d3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[9 June 2026](2026-06-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batumi Summer ]]( claude--Batumi Summer--35f8b8d3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 June 2026: <Means>$[[ Batumi Summer ]]( claude--Batumi Summer--35f8b8d3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
