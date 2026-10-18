import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--typescript-testing-framework-review--80a52850/.cover.tsx';
import TheSynopsis from './claude--typescript-testing-framework-review--80a52850/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[22 October 2025](2025-10-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Typescript testing framework review ]]( claude--Typescript testing framework review--80a52850 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Typescript testing framework review ]]( claude--Typescript testing framework review--80a52850 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
