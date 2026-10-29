import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl--78955886/.cover.tsx';
import TheSynopsis from '../.conversations/claude--orchid-and-gitcoin-crypto-projects-solving-fundamental-probl--78955886/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 March 2026](2026-03-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]( claude--Orchid and Gitcoin: crypto projects solving fundamental problems--78955886 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]( claude--Orchid and Gitcoin: crypto projects solving fundamental problems--78955886 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
