import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/tonx-news/.cover.tsx';
import TheSynopsis from '../.conversations/tonx-news/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX News ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ TONX News ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
