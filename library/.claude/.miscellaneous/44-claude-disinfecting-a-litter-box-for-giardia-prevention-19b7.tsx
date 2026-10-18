import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Disinfecting a litter box for giardia prevention ]]( claude--Disinfecting a litter box for giardia prevention--19b76aeb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 January 2026: <Means>$[[ Disinfecting a litter box for giardia prevention ]]( claude--Disinfecting a litter box for giardia prevention--19b76aeb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
