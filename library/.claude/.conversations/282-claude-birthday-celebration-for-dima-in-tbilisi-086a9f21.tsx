import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.cover.tsx';
import TheSynopsis from './claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[19 March 2026](2026-03-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Birthday celebration for Dima in Tbilisi ]]( claude--Birthday celebration for Dima in Tbilisi--086a9f21 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Birthday celebration for Dima in Tbilisi ]]( claude--Birthday celebration for Dima in Tbilisi--086a9f21 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
