import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantics-of-types-and-more--d5c0cf36/.cover.tsx';
import TheSynopsis from './claude--semantics-of-types-and-more--d5c0cf36/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[10 September 2026](2026-09-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantics of Types &amp; More ]]( claude--Semantics of Types &amp; More--d5c0cf36 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 84 exchanges: <Means>$[[ Semantics of Types &amp; More ]]( claude--Semantics of Types &amp; More--d5c0cf36 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
