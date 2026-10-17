import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ton-and-gram-ecosystem-updates/.cover.tsx';
import TheSynopsis from '../.conversations/ton-and-gram-ecosystem-updates/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON and GRAM ecosystem updates ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 July 2026: <Means>$[[ TON and GRAM ecosystem updates ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
