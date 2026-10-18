import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-personal-crisis-and-emotional-breakdown--fb34d38a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-personal-crisis-and-emotional-breakdown--fb34d38a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating personal crisis and emotional breakdown ]]( claude--Translating personal crisis and emotional breakdown--fb34d38a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Translating personal crisis and emotional breakdown ]]( claude--Translating personal crisis and emotional breakdown--fb34d38a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
