import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--inheritance-notation-and-syntax-evolution--39fad1f0/.cover.tsx';
import TheSynopsis from './claude--inheritance-notation-and-syntax-evolution--39fad1f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[31 May 2026](2026-05-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Inheritance notation and syntax evolution ]]( claude--Inheritance notation and syntax evolution--39fad1f0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 216 exchanges: <Means>$[[ Inheritance notation and syntax evolution ]]( claude--Inheritance notation and syntax evolution--39fad1f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
