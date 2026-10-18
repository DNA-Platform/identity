import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--okay-custody-court-is-happenin--88a184db/.cover.tsx';
import TheSynopsis from '../.conversations/claude--okay-custody-court-is-happenin--88a184db/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[24 January 2026](2026-01-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Okay custody court is happenin… ]]( claude--Okay custody court is happenin…--88a184db )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 January 2026: <Means>$[[ Okay custody court is happenin… ]]( claude--Okay custody court is happenin…--88a184db )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
