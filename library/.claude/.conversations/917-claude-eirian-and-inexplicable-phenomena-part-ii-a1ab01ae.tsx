import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eirian-and-inexplicable-phenomena-part-ii--a1ab01ae/.cover.tsx';
import TheSynopsis from './claude--eirian-and-inexplicable-phenomena-part-ii--a1ab01ae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[6 August 2025](2025-08-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Inexplicable Phenomena - Part II ]]( claude--Eirian &amp; Inexplicable Phenomena - Part II--a1ab01ae )</Title>
        <Paragraph>
            <Caption />
            A conversation, 40 exchanges: <Means>$[[ Eirian &amp; Inexplicable Phenomena - Part II ]]( claude--Eirian &amp; Inexplicable Phenomena - Part II--a1ab01ae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
