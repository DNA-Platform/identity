import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.cover.tsx';
import TheSynopsis from './claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump, Rubio, and Venezuela: reconciling perspectives ]]( claude--Trump, Rubio, and Venezuela: reconciling perspectives--53f5d105 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Trump, Rubio, and Venezuela: reconciling perspectives ]]( claude--Trump, Rubio, and Venezuela: reconciling perspectives--53f5d105 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
