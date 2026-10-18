import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alisa surveillance risks and Russian state data sharing ]]( claude--Alisa surveillance risks and Russian state data sharing--06c9642b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Alisa surveillance risks and Russian state data sharing ]]( claude--Alisa surveillance risks and Russian state data sharing--06c9642b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
