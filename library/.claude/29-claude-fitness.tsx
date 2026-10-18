import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.fitness/.cover.tsx';
import TheSynopsis from './.fitness/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[1 August 2026](2026-08-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fitness ]]( claude--Fitness )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Fitness ]]( claude--Fitness )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
