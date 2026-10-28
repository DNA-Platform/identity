import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--domi-payment--857c0398/.cover.tsx';
import TheSynopsis from './claude--domi-payment--857c0398/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[15 October 2026](2026-10-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Domi payment ]]( claude--Domi payment--857c0398 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Domi payment ]]( claude--Domi payment--857c0398 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
