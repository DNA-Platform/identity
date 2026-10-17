import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/.cover.tsx';
import TheSynopsis from '../.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sunny King's crypto projects and anonymous inventors ]]( claude--Sunny King's crypto projects and anonymous inventors--83a8ee17 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ Sunny King's crypto projects and anonymous inventors ]]( claude--Sunny King's crypto projects and anonymous inventors--83a8ee17 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
