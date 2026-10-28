import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--setting-up-ssh-keys-for-github-on-windows--5305e691/.cover.tsx';
import TheSynopsis from './claude--setting-up-ssh-keys-for-github-on-windows--5305e691/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[13 February 2026](2026-02-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Setting up SSH keys for GitHub on Windows ]]( claude--Setting up SSH keys for GitHub on Windows--5305e691 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Setting up SSH keys for GitHub on Windows ]]( claude--Setting up SSH keys for GitHub on Windows--5305e691 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
