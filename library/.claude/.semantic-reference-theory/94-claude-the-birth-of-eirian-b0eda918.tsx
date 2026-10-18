import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-birth-of-eirian--b0eda918/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-birth-of-eirian--b0eda918/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[9 October 2025](2025-10-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Birth of Eirian ]]( claude--The Birth of Eirian--b0eda918 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 October 2025: <Means>$[[ The Birth of Eirian ]]( claude--The Birth of Eirian--b0eda918 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
