import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/.cover.tsx';
import TheSynopsis from './claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[5 August 2026](2026-08-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Old iPhone charger triggering unexpected unlocking ]]( claude--Old iPhone charger triggering unexpected unlocking--ebc10b42 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 19 exchanges: <Means>$[[ Old iPhone charger triggering unexpected unlocking ]]( claude--Old iPhone charger triggering unexpected unlocking--ebc10b42 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
