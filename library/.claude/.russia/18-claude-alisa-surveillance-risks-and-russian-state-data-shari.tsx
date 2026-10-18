import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--alisa-surveillance-risks-and-russian-state-data-sharing--06c9642b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alisa surveillance risks and Russian state data sharing ]]( claude--Alisa surveillance risks and Russian state data sharing--06c9642b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Alisa surveillance risks and Russian state data sharing ]]( claude--Alisa surveillance risks and Russian state data sharing--06c9642b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
