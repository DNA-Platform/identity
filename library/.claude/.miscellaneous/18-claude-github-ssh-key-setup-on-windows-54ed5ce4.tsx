import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--github-ssh-key-setup-on-windows--54ed5ce4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--github-ssh-key-setup-on-windows--54ed5ce4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ GitHub SSH Key Setup on Windows ]]( claude--GitHub SSH Key Setup on Windows--54ed5ce4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 June 2025: <Means>$[[ GitHub SSH Key Setup on Windows ]]( claude--GitHub SSH Key Setup on Windows--54ed5ce4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
