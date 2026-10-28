import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.cover.tsx';
import TheSynopsis from './claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[14 March 2026](2026-03-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Setting up SSH commits on GitHub for Windows ]]( claude--Setting up SSH commits on GitHub for Windows--45253e06 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Setting up SSH commits on GitHub for Windows ]]( claude--Setting up SSH commits on GitHub for Windows--45253e06 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
