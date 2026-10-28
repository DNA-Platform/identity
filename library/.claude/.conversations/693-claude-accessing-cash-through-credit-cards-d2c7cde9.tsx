import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--accessing-cash-through-credit-cards--d2c7cde9/.cover.tsx';
import TheSynopsis from './claude--accessing-cash-through-credit-cards--d2c7cde9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2024</Part>
        <Dated>
            <Date>[22 October 2024](2024-10-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Accessing Cash Through Credit Cards ]]( claude--Accessing Cash Through Credit Cards--d2c7cde9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 44 exchanges: <Means>$[[ Accessing Cash Through Credit Cards ]]( claude--Accessing Cash Through Credit Cards--d2c7cde9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
