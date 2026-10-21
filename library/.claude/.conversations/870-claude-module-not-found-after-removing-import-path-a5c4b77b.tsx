import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--module-not-found-after-removing-import-path--a5c4b77b/.cover.tsx';
import TheSynopsis from './claude--module-not-found-after-removing-import-path--a5c4b77b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[2 November 2025](2025-11-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Module not found after removing import path ]]( claude--Module not found after removing import path--a5c4b77b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 48 exchanges: <Means>$[[ Module not found after removing import path ]]( claude--Module not found after removing import path--a5c4b77b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
