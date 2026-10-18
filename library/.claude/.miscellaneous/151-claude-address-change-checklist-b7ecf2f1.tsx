import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--address-change-checklist--b7ecf2f1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--address-change-checklist--b7ecf2f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[10 May 2026](2026-05-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Address change checklist ]]( claude--Address change checklist--b7ecf2f1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 May 2026: <Means>$[[ Address change checklist ]]( claude--Address change checklist--b7ecf2f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
