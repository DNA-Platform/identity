import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--managing-sharp-chipped-tooth-pain-temporarily--fc5f944d/.cover.tsx';
import TheSynopsis from './claude--managing-sharp-chipped-tooth-pain-temporarily--fc5f944d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Managing sharp chipped tooth pain temporarily ]]( claude--Managing sharp chipped tooth pain temporarily--fc5f944d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Managing sharp chipped tooth pain temporarily ]]( claude--Managing sharp chipped tooth pain temporarily--fc5f944d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
