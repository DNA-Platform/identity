import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--english-boarding-schools-for-children-in-georgia--50b227a4/.cover.tsx';
import TheSynopsis from './claude--english-boarding-schools-for-children-in-georgia--50b227a4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[21 May 2026](2026-05-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English boarding schools for children in Georgia ]]( claude--English boarding schools for children in Georgia--50b227a4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ English boarding schools for children in Georgia ]]( claude--English boarding schools for children in Georgia--50b227a4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
