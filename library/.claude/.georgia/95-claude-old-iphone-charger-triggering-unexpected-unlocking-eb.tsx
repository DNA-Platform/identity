import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/.cover.tsx';
import TheSynopsis from '../.conversations/claude--old-iphone-charger-triggering-unexpected-unlocking--ebc10b42/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[5 August 2026](2026-08-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Old iPhone charger triggering unexpected unlocking ]]( claude--Old iPhone charger triggering unexpected unlocking--ebc10b42 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 August 2026: <Means>$[[ Old iPhone charger triggering unexpected unlocking ]]( claude--Old iPhone charger triggering unexpected unlocking--ebc10b42 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
