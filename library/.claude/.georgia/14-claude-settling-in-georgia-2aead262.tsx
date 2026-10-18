import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--settling-in-georgia--2aead262/.cover.tsx';
import TheSynopsis from '../.conversations/claude--settling-in-georgia--2aead262/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Settling in Georgia ]]( claude--Settling in Georgia--2aead262 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Settling in Georgia ]]( claude--Settling in Georgia--2aead262 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
