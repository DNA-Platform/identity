import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.cover.tsx';
import TheSynopsis from './claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[17 January 2026](2026-01-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia-Russia relations and 2008 war aftermath ]]( claude--Georgia-Russia relations and 2008 war aftermath--4389cf3b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 140 exchanges: <Means>$[[ Georgia-Russia relations and 2008 war aftermath ]]( claude--Georgia-Russia relations and 2008 war aftermath--4389cf3b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
