import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--address-change-checklist--b7ecf2f1/.cover.tsx';
import TheSynopsis from './claude--address-change-checklist--b7ecf2f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[10 May 2026](2026-05-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Address change checklist ]]( claude--Address change checklist--b7ecf2f1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Address change checklist ]]( claude--Address change checklist--b7ecf2f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
