import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--landladys-refund-calculation-audit--313eb25c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--landladys-refund-calculation-audit--313eb25c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Landlady's refund calculation audit ]]( claude--Landlady's refund calculation audit--313eb25c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 April 2026: <Means>$[[ Landlady's refund calculation audit ]]( claude--Landlady's refund calculation audit--313eb25c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
