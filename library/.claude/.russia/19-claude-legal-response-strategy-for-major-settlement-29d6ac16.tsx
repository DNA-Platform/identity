import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/.cover.tsx';
import TheSynopsis from '../.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[15 February 2026](2026-02-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal response strategy for major settlement ]]( claude--Legal response strategy for major settlement--29d6ac16 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ Legal response strategy for major settlement ]]( claude--Legal response strategy for major settlement--29d6ac16 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
