import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Amazon and online shopping options in Tbilisi ]]( claude--Amazon and online shopping options in Tbilisi--8a0dcca4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 February 2026: <Means>$[[ Amazon and online shopping options in Tbilisi ]]( claude--Amazon and online shopping options in Tbilisi--8a0dcca4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
