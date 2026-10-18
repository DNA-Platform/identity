import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--taxes-georgia--e0fde00f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--taxes-georgia--e0fde00f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Taxes Georgia ]]( claude--Taxes Georgia--e0fde00f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 July 2026: <Means>$[[ Taxes Georgia ]]( claude--Taxes Georgia--e0fde00f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
