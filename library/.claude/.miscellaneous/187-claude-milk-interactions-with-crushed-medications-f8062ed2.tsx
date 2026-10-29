import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
