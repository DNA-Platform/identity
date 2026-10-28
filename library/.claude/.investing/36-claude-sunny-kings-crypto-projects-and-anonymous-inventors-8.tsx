import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/.cover.tsx';
import TheSynopsis from '../.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[4 February 2026](2026-02-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sunny King's crypto projects and anonymous inventors ]]( claude--Sunny King's crypto projects and anonymous inventors--83a8ee17 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ Sunny King's crypto projects and anonymous inventors ]]( claude--Sunny King's crypto projects and anonymous inventors--83a8ee17 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
