import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.cover.tsx';
import TheSynopsis from '../.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[14 March 2026](2026-03-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Setting up SSH commits on GitHub for Windows ]]( claude--Setting up SSH commits on GitHub for Windows--45253e06 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 March 2026: <Means>$[[ Setting up SSH commits on GitHub for Windows ]]( claude--Setting up SSH commits on GitHub for Windows--45253e06 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
