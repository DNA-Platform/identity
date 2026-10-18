import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--setting-up-ssh-keys-for-github-on-windows--5305e691/.cover.tsx';
import TheSynopsis from '../.conversations/claude--setting-up-ssh-keys-for-github-on-windows--5305e691/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[13 February 2026](2026-02-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Setting up SSH keys for GitHub on Windows ]]( claude--Setting up SSH keys for GitHub on Windows--5305e691 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 February 2026: <Means>$[[ Setting up SSH keys for GitHub on Windows ]]( claude--Setting up SSH keys for GitHub on Windows--5305e691 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
