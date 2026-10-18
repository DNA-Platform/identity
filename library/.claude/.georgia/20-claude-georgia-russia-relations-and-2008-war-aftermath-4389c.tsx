import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia-Russia relations and 2008 war aftermath ]]( claude--Georgia-Russia relations and 2008 war aftermath--4389cf3b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 January 2026: <Means>$[[ Georgia-Russia relations and 2008 war aftermath ]]( claude--Georgia-Russia relations and 2008 war aftermath--4389cf3b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
