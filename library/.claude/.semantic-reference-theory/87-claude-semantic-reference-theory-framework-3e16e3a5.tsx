import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-framework--3e16e3a5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-framework--3e16e3a5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[28 August 2025](2025-08-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Framework ]]( claude--Semantic Reference Theory Framework--3e16e3a5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 August 2025: <Means>$[[ Semantic Reference Theory Framework ]]( claude--Semantic Reference Theory Framework--3e16e3a5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
