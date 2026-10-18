import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--anas-batumi-expences--cb0ac65a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--anas-batumi-expences--cb0ac65a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[19 June 2026](2026-06-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana's Batumi Expences ]]( claude--Ana's Batumi Expences--cb0ac65a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 June 2026: <Means>$[[ Ana's Batumi Expences ]]( claude--Ana's Batumi Expences--cb0ac65a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
