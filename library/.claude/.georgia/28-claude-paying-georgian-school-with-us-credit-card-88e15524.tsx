import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--paying-georgian-school-with-us-credit-card--88e15524/.cover.tsx';
import TheSynopsis from '../.conversations/claude--paying-georgian-school-with-us-credit-card--88e15524/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Paying Georgian school with US credit card ]]( claude--Paying Georgian school with US credit card--88e15524 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 January 2026: <Means>$[[ Paying Georgian school with US credit card ]]( claude--Paying Georgian school with US credit card--88e15524 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
