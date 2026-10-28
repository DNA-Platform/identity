import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--setting-up-miwifi-ac1200-range-extender--f09faba4/.cover.tsx';
import TheSynopsis from './claude--setting-up-miwifi-ac1200-range-extender--f09faba4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Setting up Miwifi AC1200 range extender ]]( claude--Setting up Miwifi AC1200 range extender--f09faba4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Setting up Miwifi AC1200 range extender ]]( claude--Setting up Miwifi AC1200 range extender--f09faba4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
