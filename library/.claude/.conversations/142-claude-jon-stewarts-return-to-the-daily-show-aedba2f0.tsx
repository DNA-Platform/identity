import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.cover.tsx';
import TheSynopsis from './claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[2 May 2026](2026-05-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Jon Stewart's return to the daily show ]]( claude--Jon Stewart's return to the daily show--aedba2f0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Jon Stewart's return to the daily show ]]( claude--Jon Stewart's return to the daily show--aedba2f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
