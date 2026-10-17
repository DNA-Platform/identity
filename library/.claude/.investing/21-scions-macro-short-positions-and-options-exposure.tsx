import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/scions-macro-short-positions-and-options-exposure/.cover.tsx';
import TheSynopsis from '../.conversations/scions-macro-short-positions-and-options-exposure/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Scion's macro short positions and options exposure ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 January 2026: <Means>$[[ Scion's macro short positions and options exposure ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
