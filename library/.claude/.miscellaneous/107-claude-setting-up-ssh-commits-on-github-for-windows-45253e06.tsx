import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.cover.tsx';
import TheSynopsis from '../.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Setting up SSH commits on GitHub for Windows ]]( claude--Setting up SSH commits on GitHub for Windows--45253e06 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 March 2026: <Means>$[[ Setting up SSH commits on GitHub for Windows ]]( claude--Setting up SSH commits on GitHub for Windows--45253e06 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
