import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--deixis-and-determiners-in-english--a53ee22c/.cover.tsx';
import TheSynopsis from './claude--deixis-and-determiners-in-english--a53ee22c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[9 February 2026](2026-02-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Deixis and determiners in English ]]( claude--Deixis and determiners in English--a53ee22c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 50 exchanges: <Means>$[[ Deixis and determiners in English ]]( claude--Deixis and determiners in English--a53ee22c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
