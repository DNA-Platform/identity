import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--coworking-in-tbilisi--1d63b14d/.cover.tsx';
import TheSynopsis from './claude--coworking-in-tbilisi--1d63b14d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[9 May 2026](2026-05-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Coworking in Tbilisi ]]( claude--Coworking in Tbilisi--1d63b14d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Coworking in Tbilisi ]]( claude--Coworking in Tbilisi--1d63b14d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
