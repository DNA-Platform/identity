import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--axioms-of-first-order-logic--5b073957/.cover.tsx';
import TheSynopsis from './claude--axioms-of-first-order-logic--5b073957/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[17 November 2024](2024-11-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Axioms of First-Order Logic ]]( claude--Axioms of First-Order Logic--5b073957 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 218 exchanges: <Means>$[[ Axioms of First-Order Logic ]]( claude--Axioms of First-Order Logic--5b073957 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
