import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-21-february-2026--de02dabd/.cover.tsx';
import TheSynopsis from './claude--untitled-21-february-2026--de02dabd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[21 February 2026](2026-02-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 21 February 2026 ]]( claude--Untitled, 21 February 2026--de02dabd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 1 exchange: <Means>$[[ Untitled, 21 February 2026 ]]( claude--Untitled, 21 February 2026--de02dabd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
