import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--psychologist-cost-and-services--097bf0d0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--psychologist-cost-and-services--097bf0d0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[30 September 2026](2026-09-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Psychologist cost and services ]]( claude--Psychologist cost and services--097bf0d0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 September 2026: <Means>$[[ Psychologist cost and services ]]( claude--Psychologist cost and services--097bf0d0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
