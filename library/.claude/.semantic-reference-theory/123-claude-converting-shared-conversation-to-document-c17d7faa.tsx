import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--converting-shared-conversation-to-document--c17d7faa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--converting-shared-conversation-to-document--c17d7faa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Converting shared conversation to document ]]( claude--Converting shared conversation to document--c17d7faa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Converting shared conversation to document ]]( claude--Converting shared conversation to document--c17d7faa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
