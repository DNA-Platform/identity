import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/nikolai-durovs-research-at-steklov-institute/.cover.tsx';
import TheSynopsis from '../.conversations/nikolai-durovs-research-at-steklov-institute/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nikolai Durov's research at Steklov Institute ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Nikolai Durov's research at Steklov Institute ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
