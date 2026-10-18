import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/.cover.tsx';
import TheSynopsis from '../.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Treating feline giardia with metronidazole ]]( claude--Treating feline giardia with metronidazole--977892ca )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Treating feline giardia with metronidazole ]]( claude--Treating feline giardia with metronidazole--977892ca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
