import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/.cover.tsx';
import TheSynopsis from './claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Custody changes and appeal procedures in Russian law ]]( claude--Custody changes and appeal procedures in Russian law--9588c3ce )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Custody changes and appeal procedures in Russian law ]]( claude--Custody changes and appeal procedures in Russian law--9588c3ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
