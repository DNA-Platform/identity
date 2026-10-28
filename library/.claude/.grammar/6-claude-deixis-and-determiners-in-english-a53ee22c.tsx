import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--deixis-and-determiners-in-english--a53ee22c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--deixis-and-determiners-in-english--a53ee22c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[9 February 2026](2026-02-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Deixis and determiners in English ]]( claude--Deixis and determiners in English--a53ee22c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 February 2026: <Means>$[[ Deixis and determiners in English ]]( claude--Deixis and determiners in English--a53ee22c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
