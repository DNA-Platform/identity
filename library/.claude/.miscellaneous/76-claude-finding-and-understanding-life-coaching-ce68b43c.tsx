import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-and-understanding-life-coaching--ce68b43c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-and-understanding-life-coaching--ce68b43c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding and understanding life coaching ]]( claude--Finding and understanding life coaching--ce68b43c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 February 2026: <Means>$[[ Finding and understanding life coaching ]]( claude--Finding and understanding life coaching--ce68b43c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
