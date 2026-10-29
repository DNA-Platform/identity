import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[2 May 2026](2026-05-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Jon Stewart's return to the daily show ]]( claude--Jon Stewart's return to the daily show--aedba2f0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 May 2026: <Means>$[[ Jon Stewart's return to the daily show ]]( claude--Jon Stewart's return to the daily show--aedba2f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
