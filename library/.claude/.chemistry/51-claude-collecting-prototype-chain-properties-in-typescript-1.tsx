import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/.cover.tsx';
import TheSynopsis from '../.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collecting prototype chain properties in TypeScript ]]( claude--Collecting prototype chain properties in TypeScript--148003ca )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 October 2025: <Means>$[[ Collecting prototype chain properties in TypeScript ]]( claude--Collecting prototype chain properties in TypeScript--148003ca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
