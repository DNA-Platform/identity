import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/manuel-stotzs-satorica-and-ton-connection/.cover.tsx';
import TheSynopsis from '../.conversations/manuel-stotzs-satorica-and-ton-connection/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Manuel Stotz's Satorica and TON connection ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Manuel Stotz's Satorica and TON connection ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
