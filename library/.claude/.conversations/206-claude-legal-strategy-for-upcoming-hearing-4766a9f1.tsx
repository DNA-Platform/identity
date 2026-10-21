import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--legal-strategy-for-upcoming-hearing--4766a9f1/.cover.tsx';
import TheSynopsis from './claude--legal-strategy-for-upcoming-hearing--4766a9f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal strategy for upcoming hearing ]]( claude--Legal strategy for upcoming hearing--4766a9f1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Legal strategy for upcoming hearing ]]( claude--Legal strategy for upcoming hearing--4766a9f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
