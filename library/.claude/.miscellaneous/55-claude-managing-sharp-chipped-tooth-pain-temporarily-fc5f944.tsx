import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--managing-sharp-chipped-tooth-pain-temporarily--fc5f944d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--managing-sharp-chipped-tooth-pain-temporarily--fc5f944d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Managing sharp chipped tooth pain temporarily ]]( claude--Managing sharp chipped tooth pain temporarily--fc5f944d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 January 2026: <Means>$[[ Managing sharp chipped tooth pain temporarily ]]( claude--Managing sharp chipped tooth pain temporarily--fc5f944d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
