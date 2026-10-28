import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--claudes-reflection-on-article--de72cc04/.cover.tsx';
import TheSynopsis from './claude--claudes-reflection-on-article--de72cc04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[8 July 2026](2026-07-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude's reflection on article ]]( claude--Claude's reflection on article--de72cc04 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Claude's reflection on article ]]( claude--Claude's reflection on article--de72cc04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
