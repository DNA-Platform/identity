import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/.cover.tsx';
import TheSynopsis from '../.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ US Visa Mastercard with Wildberries Georgia ]]( claude--US Visa Mastercard with Wildberries Georgia--5ea43231 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ US Visa Mastercard with Wildberries Georgia ]]( claude--US Visa Mastercard with Wildberries Georgia--5ea43231 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
