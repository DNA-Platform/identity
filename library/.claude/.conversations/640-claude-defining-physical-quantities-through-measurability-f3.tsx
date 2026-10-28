import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--defining-physical-quantities-through-measurability--f3558a22/.cover.tsx';
import TheSynopsis from './claude--defining-physical-quantities-through-measurability--f3558a22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2025</Part>
        <Dated>
            <Date>[11 January 2025](2025-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Defining Physical Quantities through Measurability ]]( claude--Defining Physical Quantities through Measurability--f3558a22 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Defining Physical Quantities through Measurability ]]( claude--Defining Physical Quantities through Measurability--f3558a22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
