import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON and GRAM ecosystem updates ]]( claude--TON and GRAM ecosystem updates--d5d0756e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 July 2026: <Means>$[[ TON and GRAM ecosystem updates ]]( claude--TON and GRAM ecosystem updates--d5d0756e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
