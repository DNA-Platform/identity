import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/.cover.tsx';
import TheSynopsis from './claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[5 April 2026](2026-04-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Benzodiazepines vs gabaergic anesthetics ]]( claude--Benzodiazepines vs gabaergic anesthetics--db8ba18b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Benzodiazepines vs gabaergic anesthetics ]]( claude--Benzodiazepines vs gabaergic anesthetics--db8ba18b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
