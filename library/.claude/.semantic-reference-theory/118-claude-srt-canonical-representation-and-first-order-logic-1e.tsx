import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/.cover.tsx';
import TheSynopsis from '../.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT canonical representation and first-order logic ]]( claude--SRT canonical representation and first-order logic--1e52a713 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 April 2026: <Means>$[[ SRT canonical representation and first-order logic ]]( claude--SRT canonical representation and first-order logic--1e52a713 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
