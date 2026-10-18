import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--module-not-found-after-removing-import-path--a5c4b77b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--module-not-found-after-removing-import-path--a5c4b77b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Module not found after removing import path ]]( claude--Module not found after removing import path--a5c4b77b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 November 2025: <Means>$[[ Module not found after removing import path ]]( claude--Module not found after removing import path--a5c4b77b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
