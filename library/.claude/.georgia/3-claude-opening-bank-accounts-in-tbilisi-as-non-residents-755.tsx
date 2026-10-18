import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Opening bank accounts in Tbilisi as non-residents ]]( claude--Opening bank accounts in Tbilisi as non-residents--755b29bd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Opening bank accounts in Tbilisi as non-residents ]]( claude--Opening bank accounts in Tbilisi as non-residents--755b29bd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
