import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-personal-crisis-and-emotional-breakdown--fb34d38a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-personal-crisis-and-emotional-breakdown--fb34d38a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating personal crisis and emotional breakdown ]]( claude--Translating personal crisis and emotional breakdown--fb34d38a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Translating personal crisis and emotional breakdown ]]( claude--Translating personal crisis and emotional breakdown--fb34d38a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
