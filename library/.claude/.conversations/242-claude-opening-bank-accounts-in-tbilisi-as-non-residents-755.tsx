import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/.cover.tsx';
import TheSynopsis from './claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Opening bank accounts in Tbilisi as non-residents ]]( claude--Opening bank accounts in Tbilisi as non-residents--755b29bd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Opening bank accounts in Tbilisi as non-residents ]]( claude--Opening bank accounts in Tbilisi as non-residents--755b29bd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
