import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--extending-illustrator-extendscript-abstraction--42fc17f5/.cover.tsx';
import TheSynopsis from './claude--extending-illustrator-extendscript-abstraction--42fc17f5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2025</Part>
        <Dated>
            <Date>[12 January 2025](2025-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Extending Illustrator ExtendScript Abstraction ]]( claude--Extending Illustrator ExtendScript Abstraction--42fc17f5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 258 exchanges: <Means>$[[ Extending Illustrator ExtendScript Abstraction ]]( claude--Extending Illustrator ExtendScript Abstraction--42fc17f5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
