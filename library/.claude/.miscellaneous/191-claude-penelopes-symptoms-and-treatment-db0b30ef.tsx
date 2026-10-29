import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--penelopes-symptoms-and-treatment--db0b30ef/.cover.tsx';
import TheSynopsis from '../.conversations/claude--penelopes-symptoms-and-treatment--db0b30ef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Penelope's symptoms and treatment ]]( claude--Penelope's symptoms and treatment--db0b30ef )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 October 2026: <Means>$[[ Penelope's symptoms and treatment ]]( claude--Penelope's symptoms and treatment--db0b30ef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
