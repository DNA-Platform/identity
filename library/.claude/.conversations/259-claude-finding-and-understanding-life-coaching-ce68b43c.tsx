import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--finding-and-understanding-life-coaching--ce68b43c/.cover.tsx';
import TheSynopsis from './claude--finding-and-understanding-life-coaching--ce68b43c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[11 February 2026](2026-02-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding and understanding life coaching ]]( claude--Finding and understanding life coaching--ce68b43c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Finding and understanding life coaching ]]( claude--Finding and understanding life coaching--ce68b43c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
