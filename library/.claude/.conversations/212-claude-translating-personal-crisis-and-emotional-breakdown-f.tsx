import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
