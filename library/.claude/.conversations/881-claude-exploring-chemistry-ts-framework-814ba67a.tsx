import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--exploring-chemistry-ts-framework--814ba67a/.cover.tsx';
import TheSynopsis from './claude--exploring-chemistry-ts-framework--814ba67a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[24 October 2025](2025-10-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Exploring chemistry.ts framework ]]( claude--Exploring chemistry..ts framework--814ba67a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 86 exchanges: <Means>$[[ Exploring chemistry.ts framework ]]( claude--Exploring chemistry..ts framework--814ba67a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
