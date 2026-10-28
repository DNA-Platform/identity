import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.cover.tsx';
import TheSynopsis from '../.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[24 January 2026](2026-01-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Secnidazole for persistent giardia in cats ]]( claude--Secnidazole for persistent giardia in cats--ea3d2c31 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 January 2026: <Means>$[[ Secnidazole for persistent giardia in cats ]]( claude--Secnidazole for persistent giardia in cats--ea3d2c31 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
