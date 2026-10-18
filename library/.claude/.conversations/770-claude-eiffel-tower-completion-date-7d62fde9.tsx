import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eiffel-tower-completion-date--7d62fde9/.cover.tsx';
import TheSynopsis from './claude--eiffel-tower-completion-date--7d62fde9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eiffel Tower completion date ]]( claude--Eiffel Tower completion date--7d62fde9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Eiffel Tower completion date ]]( claude--Eiffel Tower completion date--7d62fde9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
