import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl--78955886/.cover.tsx';
import TheSynopsis from '../.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl--78955886/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]( claude--Orchid and Gitcoin: crypto projects solving fundamental problems--78955886 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]( claude--Orchid and Gitcoin: crypto projects solving fundamental problems--78955886 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
