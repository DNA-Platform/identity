import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/executing-a-40k-position-in-tonx-via-interactive-brokers/.cover.tsx';
import TheSynopsis from '../.conversations/executing-a-40k-position-in-tonx-via-interactive-brokers/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Executing a 40K position in TONX via Interactive Brokers ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Executing a 40K position in TONX via Interactive Brokers ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
