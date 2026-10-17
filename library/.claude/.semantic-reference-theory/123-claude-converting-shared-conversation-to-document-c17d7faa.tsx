import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--converting-shared-conversation-to-document--c17d7faa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--converting-shared-conversation-to-document--c17d7faa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Converting shared conversation to document ]]( claude--Converting shared conversation to document--c17d7faa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Converting shared conversation to document ]]( claude--Converting shared conversation to document--c17d7faa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
