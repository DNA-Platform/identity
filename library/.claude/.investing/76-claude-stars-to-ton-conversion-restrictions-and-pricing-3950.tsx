import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stars to TON conversion restrictions and pricing ]]( claude--Stars to TON conversion restrictions and pricing--3950d95e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Stars to TON conversion restrictions and pricing ]]( claude--Stars to TON conversion restrictions and pricing--3950d95e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
