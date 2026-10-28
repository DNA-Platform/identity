import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--citibank-address-for-traveling-mailbox-check-deposits--1a3e86c8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--citibank-address-for-traveling-mailbox-check-deposits--1a3e86c8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[13 January 2026](2026-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Citibank address for traveling mailbox check deposits ]]( claude--Citibank address for traveling mailbox check deposits--1a3e86c8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 January 2026: <Means>$[[ Citibank address for traveling mailbox check deposits ]]( claude--Citibank address for traveling mailbox check deposits--1a3e86c8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
