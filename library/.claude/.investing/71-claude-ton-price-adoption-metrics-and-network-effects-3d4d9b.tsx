import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[26 April 2026](2026-04-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON price adoption metrics and network effects ]]( claude--TON price adoption metrics and network effects--3d4d9b62 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 April 2026: <Means>$[[ TON price adoption metrics and network effects ]]( claude--TON price adoption metrics and network effects--3d4d9b62 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
