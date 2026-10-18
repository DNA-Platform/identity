import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Disinfecting a litter box for giardia prevention ]]( claude--Disinfecting a litter box for giardia prevention--19b76aeb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 January 2026: <Means>$[[ Disinfecting a litter box for giardia prevention ]]( claude--Disinfecting a litter box for giardia prevention--19b76aeb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
