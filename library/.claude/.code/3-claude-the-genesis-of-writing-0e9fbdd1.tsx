import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-genesis-of-writing--0e9fbdd1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-genesis-of-writing--0e9fbdd1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Genesis of Writing ]]( claude--The Genesis of Writing--0e9fbdd1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 September 2026: <Means>$[[ The Genesis of Writing ]]( claude--The Genesis of Writing--0e9fbdd1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
