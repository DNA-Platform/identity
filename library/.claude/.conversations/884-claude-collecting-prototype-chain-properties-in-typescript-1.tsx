import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--collecting-prototype-chain-properties-in-typescript--148003ca/.cover.tsx';
import TheSynopsis from './claude--collecting-prototype-chain-properties-in-typescript--148003ca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[30 October 2025](2025-10-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collecting prototype chain properties in TypeScript ]]( claude--Collecting prototype chain properties in TypeScript--148003ca )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Collecting prototype chain properties in TypeScript ]]( claude--Collecting prototype chain properties in TypeScript--148003ca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
