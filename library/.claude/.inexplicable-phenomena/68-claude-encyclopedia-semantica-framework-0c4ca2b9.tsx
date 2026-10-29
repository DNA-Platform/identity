import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[22 August 2025](2025-08-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Encyclopedia Semantica Framework ]]( claude--Encyclopedia Semantica Framework--0c4ca2b9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 August 2025: <Means>$[[ Encyclopedia Semantica Framework ]]( claude--Encyclopedia Semantica Framework--0c4ca2b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
