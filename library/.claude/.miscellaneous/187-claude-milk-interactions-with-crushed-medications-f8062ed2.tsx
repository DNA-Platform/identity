import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[26 July 2026](2026-07-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Milk interactions with crushed medications ]]( claude--Milk interactions with crushed medications--f8062ed2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 July 2026: <Means>$[[ Milk interactions with crushed medications ]]( claude--Milk interactions with crushed medications--f8062ed2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
