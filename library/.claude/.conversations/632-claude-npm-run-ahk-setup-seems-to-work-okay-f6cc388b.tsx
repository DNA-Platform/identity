import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--npm-run-ahk-setup-seems-to-work-okay--f6cc388b/.cover.tsx';
import TheSynopsis from './claude--npm-run-ahk-setup-seems-to-work-okay--f6cc388b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[13 March 2025](2025-03-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ npm run ahk:setup seems to work okay: ]]( claude--npm run ahk:setup seems to work okay:--f6cc388b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ npm run ahk:setup seems to work okay: ]]( claude--npm run ahk:setup seems to work okay:--f6cc388b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
