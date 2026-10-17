import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-ana--c17f5910/.cover.tsx';
import TheSynopsis from './claude--seren-and-ana--c17f5910/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[12 December 2025](2025-12-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Ana ]]( claude--Seren &amp; Ana--c17f5910 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 86 exchanges: <Means>$[[ Seren &amp; Ana ]]( claude--Seren &amp; Ana--c17f5910 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
