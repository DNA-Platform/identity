import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/unifying-srt-axioms-with-symbolization/.cover.tsx';
import TheSynopsis from '../.conversations/unifying-srt-axioms-with-symbolization/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Unifying SRT axioms with symbolization ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 May 2026: <Means>$[[ Unifying SRT axioms with symbolization ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
