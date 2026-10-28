import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--milk-interactions-with-crushed-medications--f8062ed2/.cover.tsx';
import TheSynopsis from './claude--milk-interactions-with-crushed-medications--f8062ed2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[26 July 2026](2026-07-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Milk interactions with crushed medications ]]( claude--Milk interactions with crushed medications--f8062ed2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Milk interactions with crushed medications ]]( claude--Milk interactions with crushed medications--f8062ed2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
