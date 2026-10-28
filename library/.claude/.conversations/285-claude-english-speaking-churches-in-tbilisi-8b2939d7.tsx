import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--english-speaking-churches-in-tbilisi--8b2939d7/.cover.tsx';
import TheSynopsis from './claude--english-speaking-churches-in-tbilisi--8b2939d7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[2 April 2026](2026-04-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English-speaking churches in Tbilisi ]]( claude--English-speaking churches in Tbilisi--8b2939d7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ English-speaking churches in Tbilisi ]]( claude--English-speaking churches in Tbilisi--8b2939d7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
