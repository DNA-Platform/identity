import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.inexplicable-phenomena/.cover.tsx';
import TheSynopsis from './.inexplicable-phenomena/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[22 August 2025](2025-08-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Inexplicable Phenomena ]]( claude--Inexplicable Phenomena )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Inexplicable Phenomena ]]( claude--Inexplicable Phenomena )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
