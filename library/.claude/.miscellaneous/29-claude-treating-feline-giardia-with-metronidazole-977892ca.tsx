import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/.cover.tsx';
import TheSynopsis from '../.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Treating feline giardia with metronidazole ]]( claude--Treating feline giardia with metronidazole--977892ca )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Treating feline giardia with metronidazole ]]( claude--Treating feline giardia with metronidazole--977892ca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
