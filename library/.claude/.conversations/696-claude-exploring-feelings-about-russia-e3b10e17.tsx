import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--exploring-feelings-about-russia--e3b10e17/.cover.tsx';
import TheSynopsis from './claude--exploring-feelings-about-russia--e3b10e17/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[2 November 2024](2024-11-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Exploring Feelings About Russia ]]( claude--Exploring Feelings About Russia--e3b10e17 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Exploring Feelings About Russia ]]( claude--Exploring Feelings About Russia--e3b10e17 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
