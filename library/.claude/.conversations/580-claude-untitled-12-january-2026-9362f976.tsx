import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-12-january-2026--9362f976/.cover.tsx';
import TheSynopsis from './claude--untitled-12-january-2026--9362f976/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 12 January 2026 ]]( claude--Untitled, 12 January 2026--9362f976 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 1 exchange: <Means>$[[ Untitled, 12 January 2026 ]]( claude--Untitled, 12 January 2026--9362f976 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
