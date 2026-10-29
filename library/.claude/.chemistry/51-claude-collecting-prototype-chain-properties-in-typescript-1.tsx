import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/.cover.tsx';
import TheSynopsis from '../.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[30 October 2025](2025-10-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collecting prototype chain properties in TypeScript ]]( claude--Collecting prototype chain properties in TypeScript--148003ca )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 October 2025: <Means>$[[ Collecting prototype chain properties in TypeScript ]]( claude--Collecting prototype chain properties in TypeScript--148003ca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
