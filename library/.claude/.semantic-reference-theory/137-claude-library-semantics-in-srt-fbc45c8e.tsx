import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--library-semantics-in-srt--fbc45c8e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--library-semantics-in-srt--fbc45c8e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[26 June 2026](2026-06-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Library semantics in SRT ]]( claude--Library semantics in SRT--fbc45c8e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 June 2026: <Means>$[[ Library semantics in SRT ]]( claude--Library semantics in SRT--fbc45c8e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
