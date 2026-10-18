import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--greeting-claude--cab4e803/.cover.tsx';
import TheSynopsis from '../.conversations/claude--greeting-claude--cab4e803/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Greeting Claude ]]( claude--Greeting Claude--cab4e803 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 June 2026: <Means>$[[ Greeting Claude ]]( claude--Greeting Claude--cab4e803 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
