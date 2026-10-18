import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--landladys-refund-calculation-audit--313eb25c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--landladys-refund-calculation-audit--313eb25c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[27 April 2026](2026-04-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Landlady's refund calculation audit ]]( claude--Landlady's refund calculation audit--313eb25c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 April 2026: <Means>$[[ Landlady's refund calculation audit ]]( claude--Landlady's refund calculation audit--313eb25c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
