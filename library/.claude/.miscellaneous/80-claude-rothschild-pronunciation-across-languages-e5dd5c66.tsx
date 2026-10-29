import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--rothschild-pronunciation-across-languages--e5dd5c66/.cover.tsx';
import TheSynopsis from '../.conversations/claude--rothschild-pronunciation-across-languages--e5dd5c66/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[6 February 2026](2026-02-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Rothschild pronunciation across languages ]]( claude--Rothschild pronunciation across languages--e5dd5c66 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 February 2026: <Means>$[[ Rothschild pronunciation across languages ]]( claude--Rothschild pronunciation across languages--e5dd5c66 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
