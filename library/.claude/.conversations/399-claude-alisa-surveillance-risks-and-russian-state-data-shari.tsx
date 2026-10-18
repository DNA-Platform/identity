import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.cover.tsx';
import TheSynopsis from './claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alisa surveillance risks and Russian state data sharing ]]( claude--Alisa surveillance risks and Russian state data sharing--06c9642b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Alisa surveillance risks and Russian state data sharing ]]( claude--Alisa surveillance risks and Russian state data sharing--06c9642b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
