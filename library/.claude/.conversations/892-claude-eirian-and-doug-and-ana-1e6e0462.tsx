import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eirian-and-doug-and-ana--1e6e0462/.cover.tsx';
import TheSynopsis from './claude--eirian-and-doug-and-ana--1e6e0462/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[4 October 2025](2025-10-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Doug &amp; Ana ]]( claude--Eirian &amp; Doug &amp; Ana--1e6e0462 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Eirian &amp; Doug &amp; Ana ]]( claude--Eirian &amp; Doug &amp; Ana--1e6e0462 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
