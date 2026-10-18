import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--exploring-chemistry-ts-framework--814ba67a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--exploring-chemistry-ts-framework--814ba67a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Exploring chemistry.ts framework ]]( claude--Exploring chemistry..ts framework--814ba67a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 October 2025: <Means>$[[ Exploring chemistry.ts framework ]]( claude--Exploring chemistry..ts framework--814ba67a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
