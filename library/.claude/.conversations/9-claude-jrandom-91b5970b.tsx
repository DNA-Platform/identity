import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--jrandom--91b5970b/.cover.tsx';
import TheSynopsis from './claude--jrandom--91b5970b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ jrandom ]]( claude--jrandom--91b5970b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ jrandom ]]( claude--jrandom--91b5970b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
