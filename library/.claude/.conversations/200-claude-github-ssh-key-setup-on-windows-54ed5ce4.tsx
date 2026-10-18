import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--github-ssh-key-setup-on-windows--54ed5ce4/.cover.tsx';
import TheSynopsis from './claude--github-ssh-key-setup-on-windows--54ed5ce4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2025</Part>
        <Dated>
            <Date>[28 June 2025](2025-06-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ GitHub SSH Key Setup on Windows ]]( claude--GitHub SSH Key Setup on Windows--54ed5ce4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ GitHub SSH Key Setup on Windows ]]( claude--GitHub SSH Key Setup on Windows--54ed5ce4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
