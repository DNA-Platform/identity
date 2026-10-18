import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--translating-personal-crisis-and-emotional-breakdown--fb34d38a/.cover.tsx';
import TheSynopsis from './claude--translating-personal-crisis-and-emotional-breakdown--fb34d38a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating personal crisis and emotional breakdown ]]( claude--Translating personal crisis and emotional breakdown--fb34d38a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Translating personal crisis and emotional breakdown ]]( claude--Translating personal crisis and emotional breakdown--fb34d38a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
