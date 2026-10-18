import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--legal-strategy-for-upcoming-hearing--4766a9f1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--legal-strategy-for-upcoming-hearing--4766a9f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal strategy for upcoming hearing ]]( claude--Legal strategy for upcoming hearing--4766a9f1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 January 2026: <Means>$[[ Legal strategy for upcoming hearing ]]( claude--Legal strategy for upcoming hearing--4766a9f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
