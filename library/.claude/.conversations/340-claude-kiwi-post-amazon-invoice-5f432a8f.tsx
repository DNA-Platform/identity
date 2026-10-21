import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--kiwi-post-amazon-invoice--5f432a8f/.cover.tsx';
import TheSynopsis from './claude--kiwi-post-amazon-invoice--5f432a8f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Kiwi post Amazon invoice ]]( claude--Kiwi post Amazon invoice--5f432a8f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Kiwi post Amazon invoice ]]( claude--Kiwi post Amazon invoice--5f432a8f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
