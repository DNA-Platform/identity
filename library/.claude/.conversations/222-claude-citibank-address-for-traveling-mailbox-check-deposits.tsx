import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--citibank-address-for-traveling-mailbox-check-deposits--1a3e86c8/.cover.tsx';
import TheSynopsis from './claude--citibank-address-for-traveling-mailbox-check-deposits--1a3e86c8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[13 January 2026](2026-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Citibank address for traveling mailbox check deposits ]]( claude--Citibank address for traveling mailbox check deposits--1a3e86c8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Citibank address for traveling mailbox check deposits ]]( claude--Citibank address for traveling mailbox check deposits--1a3e86c8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
