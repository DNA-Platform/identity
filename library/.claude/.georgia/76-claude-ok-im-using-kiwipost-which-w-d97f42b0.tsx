import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ok-im-using-kiwipost-which-w--d97f42b0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ok-im-using-kiwipost-which-w--d97f42b0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[15 July 2026](2026-07-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ OK, I’m using KiwiPost which w… ]]( claude--OK, I’m using KiwiPost which w…--d97f42b0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 July 2026: <Means>$[[ OK, I’m using KiwiPost which w… ]]( claude--OK, I’m using KiwiPost which w…--d97f42b0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
