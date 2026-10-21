import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--anonymous-cryptographers--0c566126/.cover.tsx';
import TheSynopsis from './claude--anonymous-cryptographers--0c566126/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Anonymous Cryptographers ]]( claude--Anonymous Cryptographers--0c566126 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 51 exchanges: <Means>$[[ Anonymous Cryptographers ]]( claude--Anonymous Cryptographers--0c566126 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
