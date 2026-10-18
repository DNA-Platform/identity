import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--paying-georgian-school-with-us-credit-card--88e15524/.cover.tsx';
import TheSynopsis from '../.conversations/claude--paying-georgian-school-with-us-credit-card--88e15524/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Paying Georgian school with US credit card ]]( claude--Paying Georgian school with US credit card--88e15524 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 January 2026: <Means>$[[ Paying Georgian school with US credit card ]]( claude--Paying Georgian school with US credit card--88e15524 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
