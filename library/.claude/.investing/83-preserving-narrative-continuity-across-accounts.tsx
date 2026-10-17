import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/preserving-narrative-continuity-across-accounts/.cover.tsx';
import TheSynopsis from '../.conversations/preserving-narrative-continuity-across-accounts/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preserving narrative continuity across accounts ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 May 2026: <Means>$[[ Preserving narrative continuity across accounts ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
