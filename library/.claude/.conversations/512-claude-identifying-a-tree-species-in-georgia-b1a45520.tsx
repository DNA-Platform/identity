import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--identifying-a-tree-species-in-georgia--b1a45520/.cover.tsx';
import TheSynopsis from './claude--identifying-a-tree-species-in-georgia--b1a45520/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[29 August 2026](2026-08-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Identifying a tree species in Georgia ]]( claude--Identifying a tree species in Georgia--b1a45520 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Identifying a tree species in Georgia ]]( claude--Identifying a tree species in Georgia--b1a45520 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
