import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--banach-tarski-and-the-axiom-of-choice--a2285675/.cover.tsx';
import TheSynopsis from './claude--banach-tarski-and-the-axiom-of-choice--a2285675/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[16 July 2026](2026-07-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Banach-Tarski and the axiom of choice ]]( claude--Banach-Tarski and the axiom of choice--a2285675 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 386 exchanges: <Means>$[[ Banach-Tarski and the axiom of choice ]]( claude--Banach-Tarski and the axiom of choice--a2285675 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
