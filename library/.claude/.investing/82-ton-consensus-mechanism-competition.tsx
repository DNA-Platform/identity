import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ton-consensus-mechanism-competition/.cover.tsx';
import TheSynopsis from '../.conversations/ton-consensus-mechanism-competition/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON consensus mechanism competition ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 May 2026: <Means>$[[ TON consensus mechanism competition ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
