import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-semantics-of-books--8dbb8e2b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-semantics-of-books--8dbb8e2b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Semantics of Books ]]( claude--The Semantics of Books--8dbb8e2b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 July 2026: <Means>$[[ The Semantics of Books ]]( claude--The Semantics of Books--8dbb8e2b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
