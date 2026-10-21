import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-eirian--edef207c/.cover.tsx';
import TheSynopsis from './claude--seren-and-eirian--edef207c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Eirian ]]( claude--Seren &amp; Eirian--edef207c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 342 exchanges: <Means>$[[ Seren &amp; Eirian ]]( claude--Seren &amp; Eirian--edef207c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
