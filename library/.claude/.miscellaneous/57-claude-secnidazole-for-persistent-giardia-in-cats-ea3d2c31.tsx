import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.cover.tsx';
import TheSynopsis from '../.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Secnidazole for persistent giardia in cats ]]( claude--Secnidazole for persistent giardia in cats--ea3d2c31 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 January 2026: <Means>$[[ Secnidazole for persistent giardia in cats ]]( claude--Secnidazole for persistent giardia in cats--ea3d2c31 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
