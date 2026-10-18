import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Benzodiazepines vs gabaergic anesthetics ]]( claude--Benzodiazepines vs gabaergic anesthetics--db8ba18b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 April 2026: <Means>$[[ Benzodiazepines vs gabaergic anesthetics ]]( claude--Benzodiazepines vs gabaergic anesthetics--db8ba18b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
