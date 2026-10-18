import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Jon Stewart's return to the daily show ]]( claude--Jon Stewart's return to the daily show--aedba2f0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 May 2026: <Means>$[[ Jon Stewart's return to the daily show ]]( claude--Jon Stewart's return to the daily show--aedba2f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
