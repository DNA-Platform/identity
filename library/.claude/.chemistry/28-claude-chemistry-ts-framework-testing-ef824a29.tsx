import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--chemistry-ts-framework-testing--ef824a29/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-ts-framework-testing--ef824a29/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[25 August 2025](2025-08-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry.ts Framework Testing ]]( claude--Chemistry..ts Framework Testing--ef824a29 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 August 2025: <Means>$[[ Chemistry.ts Framework Testing ]]( claude--Chemistry..ts Framework Testing--ef824a29 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
