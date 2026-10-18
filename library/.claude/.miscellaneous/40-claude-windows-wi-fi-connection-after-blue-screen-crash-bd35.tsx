import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--windows-wi-fi-connection-after-blue-screen-crash--bd351e7f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--windows-wi-fi-connection-after-blue-screen-crash--bd351e7f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Windows Wi-Fi connection after blue screen crash ]]( claude--Windows Wi-Fi connection after blue screen crash--bd351e7f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Windows Wi-Fi connection after blue screen crash ]]( claude--Windows Wi-Fi connection after blue screen crash--bd351e7f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
