import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--windows-wi-fi-connection-after-blue-screen-crash--bd351e7f/.cover.tsx';
import TheSynopsis from './claude--windows-wi-fi-connection-after-blue-screen-crash--bd351e7f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Windows Wi-Fi connection after blue screen crash ]]( claude--Windows Wi-Fi connection after blue screen crash--bd351e7f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Windows Wi-Fi connection after blue screen crash ]]( claude--Windows Wi-Fi connection after blue screen crash--bd351e7f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
