import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/.cover.tsx';
import TheSynopsis from '../.conversations/orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
