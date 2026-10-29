import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[17 January 2026](2026-01-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia-Russia relations and 2008 war aftermath ]]( claude--Georgia-Russia relations and 2008 war aftermath--4389cf3b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 January 2026: <Means>$[[ Georgia-Russia relations and 2008 war aftermath ]]( claude--Georgia-Russia relations and 2008 war aftermath--4389cf3b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
