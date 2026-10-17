import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/.cover.tsx';
import TheSynopsis from './claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stars to TON conversion restrictions and pricing ]]( claude--Stars to TON conversion restrictions and pricing--3950d95e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Stars to TON conversion restrictions and pricing ]]( claude--Stars to TON conversion restrictions and pricing--3950d95e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
