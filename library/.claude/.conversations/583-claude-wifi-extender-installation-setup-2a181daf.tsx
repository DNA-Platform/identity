import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--wifi-extender-installation-setup--2a181daf/.cover.tsx';
import TheSynopsis from './claude--wifi-extender-installation-setup--2a181daf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ WiFi extender installation setup ]]( claude--WiFi extender installation setup--2a181daf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ WiFi extender installation setup ]]( claude--WiFi extender installation setup--2a181daf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
