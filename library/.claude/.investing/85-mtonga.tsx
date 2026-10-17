import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/mtonga/.cover.tsx';
import TheSynopsis from '../.conversations/mtonga/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MTONGA ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 June 2026: <Means>$[[ MTONGA ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
