import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl--78955886/.cover.tsx';
import TheSynopsis from './claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl--78955886/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[12 March 2026](2026-03-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]( claude--Orchid and Gitcoin: crypto projects solving fundamental problems--78955886 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]( claude--Orchid and Gitcoin: crypto projects solving fundamental problems--78955886 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
