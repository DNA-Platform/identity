import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/origins-of-darkweb-operational-security/.cover.tsx';
import TheSynopsis from '../.conversations/origins-of-darkweb-operational-security/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Origins of darkweb operational security ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Origins of darkweb operational security ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
