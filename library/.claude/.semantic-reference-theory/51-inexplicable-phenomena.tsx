import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/inexplicable-phenomena/.cover.tsx';
import TheSynopsis from '../.conversations/inexplicable-phenomena/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Inexplicable Phenomena ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 July 2026: <Means>$[[ Inexplicable Phenomena ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
