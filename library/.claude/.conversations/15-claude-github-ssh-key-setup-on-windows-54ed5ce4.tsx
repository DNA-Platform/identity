import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
