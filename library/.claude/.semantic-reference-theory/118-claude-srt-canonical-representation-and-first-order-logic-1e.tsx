import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/.cover.tsx';
import TheSynopsis from '../.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[27 April 2026](2026-04-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT canonical representation and first-order logic ]]( claude--SRT canonical representation and first-order logic--1e52a713 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 April 2026: <Means>$[[ SRT canonical representation and first-order logic ]]( claude--SRT canonical representation and first-order logic--1e52a713 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
