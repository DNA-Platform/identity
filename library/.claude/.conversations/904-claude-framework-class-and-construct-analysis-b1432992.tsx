import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--framework-class-and-construct-analysis--b1432992/.cover.tsx';
import TheSynopsis from './claude--framework-class-and-construct-analysis--b1432992/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Framework class and construct analysis ]]( claude--Framework class and construct analysis--b1432992 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 84 exchanges: <Means>$[[ Framework class and construct analysis ]]( claude--Framework class and construct analysis--b1432992 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
