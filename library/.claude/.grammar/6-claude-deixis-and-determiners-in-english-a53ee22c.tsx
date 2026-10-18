import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--deixis-and-determiners-in-english--a53ee22c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--deixis-and-determiners-in-english--a53ee22c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Deixis and determiners in English ]]( claude--Deixis and determiners in English--a53ee22c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 February 2026: <Means>$[[ Deixis and determiners in English ]]( claude--Deixis and determiners in English--a53ee22c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
