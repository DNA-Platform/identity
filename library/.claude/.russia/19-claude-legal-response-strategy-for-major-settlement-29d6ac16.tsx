import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/.cover.tsx';
import TheSynopsis from '../.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal response strategy for major settlement ]]( claude--Legal response strategy for major settlement--29d6ac16 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ Legal response strategy for major settlement ]]( claude--Legal response strategy for major settlement--29d6ac16 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
