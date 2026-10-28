import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ton-ai-coding-competition-details--8a65ba52/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-ai-coding-competition-details--8a65ba52/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[20 March 2026](2026-03-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON AI coding competition details ]]( claude--TON AI coding competition details--8a65ba52 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 March 2026: <Means>$[[ TON AI coding competition details ]]( claude--TON AI coding competition details--8a65ba52 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
