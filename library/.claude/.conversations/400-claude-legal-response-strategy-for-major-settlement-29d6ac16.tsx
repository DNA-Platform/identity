import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--legal-response-strategy-for-major-settlement--29d6ac16/.cover.tsx';
import TheSynopsis from './claude--legal-response-strategy-for-major-settlement--29d6ac16/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[16 February 2026](2026-02-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal response strategy for major settlement ]]( claude--Legal response strategy for major settlement--29d6ac16 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 144 exchanges: <Means>$[[ Legal response strategy for major settlement ]]( claude--Legal response strategy for major settlement--29d6ac16 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
