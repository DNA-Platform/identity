import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ton-browser-alternatives-and-dark-web-access/.cover.tsx';
import TheSynopsis from '../.conversations/ton-browser-alternatives-and-dark-web-access/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON browser alternatives and dark web access ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 August 2026: <Means>$[[ TON browser alternatives and dark web access ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
