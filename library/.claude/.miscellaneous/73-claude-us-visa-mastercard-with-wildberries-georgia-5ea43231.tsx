import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/.cover.tsx';
import TheSynopsis from '../.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ US Visa Mastercard with Wildberries Georgia ]]( claude--US Visa Mastercard with Wildberries Georgia--5ea43231 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ US Visa Mastercard with Wildberries Georgia ]]( claude--US Visa Mastercard with Wildberries Georgia--5ea43231 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
