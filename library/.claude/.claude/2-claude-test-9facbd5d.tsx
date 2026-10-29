import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--test--9facbd5d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--test--9facbd5d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Test ]]( claude--Test--9facbd5d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 June 2026: <Means>$[[ Test ]]( claude--Test--9facbd5d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
