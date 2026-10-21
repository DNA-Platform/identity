import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--srt-canonical-representation-and-first-order-logic--1e52a713/.cover.tsx';
import TheSynopsis from './claude--srt-canonical-representation-and-first-order-logic--1e52a713/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[6 May 2026](2026-05-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT canonical representation and first-order logic ]]( claude--SRT canonical representation and first-order logic--1e52a713 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 110 exchanges: <Means>$[[ SRT canonical representation and first-order logic ]]( claude--SRT canonical representation and first-order logic--1e52a713 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
