import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--examining-my-own-shoulds--00136b3c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--examining-my-own-shoulds--00136b3c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[14 December 2025](2025-12-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Examining my own shoulds ]]( claude--Examining my own shoulds--00136b3c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 December 2025: <Means>$[[ Examining my own shoulds ]]( claude--Examining my own shoulds--00136b3c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
