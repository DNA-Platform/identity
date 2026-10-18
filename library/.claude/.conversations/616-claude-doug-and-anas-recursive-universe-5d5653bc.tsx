import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--doug-and-anas-recursive-universe--5d5653bc/.cover.tsx';
import TheSynopsis from './claude--doug-and-anas-recursive-universe--5d5653bc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[28 March 2025](2025-03-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Doug &amp; Ana's Recursive Universe ]]( claude--Doug &amp; Ana's Recursive Universe--5d5653bc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 58 exchanges: <Means>$[[ Doug &amp; Ana's Recursive Universe ]]( claude--Doug &amp; Ana's Recursive Universe--5d5653bc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
