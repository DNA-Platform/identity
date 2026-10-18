import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.cover.tsx';
import TheSynopsis from './claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[9 February 2026](2026-02-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Secnidazole for persistent giardia in cats ]]( claude--Secnidazole for persistent giardia in cats--ea3d2c31 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 89 exchanges: <Means>$[[ Secnidazole for persistent giardia in cats ]]( claude--Secnidazole for persistent giardia in cats--ea3d2c31 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
