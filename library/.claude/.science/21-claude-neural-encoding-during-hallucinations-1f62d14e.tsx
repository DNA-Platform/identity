import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neural encoding during hallucinations ]]( claude--Neural encoding during hallucinations--1f62d14e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 September 2026: <Means>$[[ Neural encoding during hallucinations ]]( claude--Neural encoding during hallucinations--1f62d14e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
