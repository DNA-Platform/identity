import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--neural-encoding-during-hallucinations--1f62d14e/.cover.tsx';
import TheSynopsis from './claude--neural-encoding-during-hallucinations--1f62d14e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[25 September 2026](2026-09-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neural encoding during hallucinations ]]( claude--Neural encoding during hallucinations--1f62d14e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 106 exchanges: <Means>$[[ Neural encoding during hallucinations ]]( claude--Neural encoding during hallucinations--1f62d14e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
