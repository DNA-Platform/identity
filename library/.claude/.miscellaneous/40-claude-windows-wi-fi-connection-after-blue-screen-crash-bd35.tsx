import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--windows-wi-fi-connection-after-blue-screen-crash--bd351e7f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--windows-wi-fi-connection-after-blue-screen-crash--bd351e7f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Windows Wi-Fi connection after blue screen crash ]]( claude--Windows Wi-Fi connection after blue screen crash--bd351e7f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Windows Wi-Fi connection after blue screen crash ]]( claude--Windows Wi-Fi connection after blue screen crash--bd351e7f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
