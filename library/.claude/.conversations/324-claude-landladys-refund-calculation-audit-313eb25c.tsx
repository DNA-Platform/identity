import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--landladys-refund-calculation-audit--313eb25c/.cover.tsx';
import TheSynopsis from './claude--landladys-refund-calculation-audit--313eb25c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[27 April 2026](2026-04-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Landlady's refund calculation audit ]]( claude--Landlady's refund calculation audit--313eb25c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Landlady's refund calculation audit ]]( claude--Landlady's refund calculation audit--313eb25c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
