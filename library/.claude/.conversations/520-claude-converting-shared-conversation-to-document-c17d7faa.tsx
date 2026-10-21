import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--converting-shared-conversation-to-document--c17d7faa/.cover.tsx';
import TheSynopsis from './claude--converting-shared-conversation-to-document--c17d7faa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Converting shared conversation to document ]]( claude--Converting shared conversation to document--c17d7faa )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Converting shared conversation to document ]]( claude--Converting shared conversation to document--c17d7faa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
