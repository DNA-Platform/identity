import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--treating-feline-giardia-with-metronidazole--977892ca/.cover.tsx';
import TheSynopsis from './claude--treating-feline-giardia-with-metronidazole--977892ca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Treating feline giardia with metronidazole ]]( claude--Treating feline giardia with metronidazole--977892ca )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Treating feline giardia with metronidazole ]]( claude--Treating feline giardia with metronidazole--977892ca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
