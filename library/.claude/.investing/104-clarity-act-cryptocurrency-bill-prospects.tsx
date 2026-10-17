import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/clarity-act-cryptocurrency-bill-prospects/.cover.tsx';
import TheSynopsis from '../.conversations/clarity-act-cryptocurrency-bill-prospects/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Clarity act cryptocurrency bill prospects ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 September 2026: <Means>$[[ Clarity act cryptocurrency bill prospects ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
