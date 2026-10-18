import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--aladdins-resemblance-to-tom-cruise--da7470c4/.cover.tsx';
import TheSynopsis from './claude--aladdins-resemblance-to-tom-cruise--da7470c4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[9 November 2024](2024-11-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Aladdin's Resemblance to Tom Cruise ]]( claude--Aladdin's Resemblance to Tom Cruise--da7470c4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Aladdin's Resemblance to Tom Cruise ]]( claude--Aladdin's Resemblance to Tom Cruise--da7470c4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
