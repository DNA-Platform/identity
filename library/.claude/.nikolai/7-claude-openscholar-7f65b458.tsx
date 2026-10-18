import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--openscholar--7f65b458/.cover.tsx';
import TheSynopsis from '../.conversations/claude--openscholar--7f65b458/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ OpenScholar ]]( claude--OpenScholar--7f65b458 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ OpenScholar ]]( claude--OpenScholar--7f65b458 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
