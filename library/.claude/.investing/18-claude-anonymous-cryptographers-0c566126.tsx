import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--anonymous-cryptographers--0c566126/.cover.tsx';
import TheSynopsis from '../.conversations/claude--anonymous-cryptographers--0c566126/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Anonymous Cryptographers ]]( claude--Anonymous Cryptographers--0c566126 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ Anonymous Cryptographers ]]( claude--Anonymous Cryptographers--0c566126 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
