import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--discriminated-unions-vs-class-hierarchies-in-typescript--bd2ac0e7/.cover.tsx';
import TheSynopsis from './claude--discriminated-unions-vs-class-hierarchies-in-typescript--bd2ac0e7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Discriminated unions vs class hierarchies in TypeScript ]]( claude--Discriminated unions vs class hierarchies in TypeScript--bd2ac0e7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Discriminated unions vs class hierarchies in TypeScript ]]( claude--Discriminated unions vs class hierarchies in TypeScript--bd2ac0e7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
