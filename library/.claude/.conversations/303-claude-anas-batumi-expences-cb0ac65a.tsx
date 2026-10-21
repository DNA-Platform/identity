import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--anas-batumi-expences--cb0ac65a/.cover.tsx';
import TheSynopsis from './claude--anas-batumi-expences--cb0ac65a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana's Batumi Expences ]]( claude--Ana's Batumi Expences--cb0ac65a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 138 exchanges: <Means>$[[ Ana's Batumi Expences ]]( claude--Ana's Batumi Expences--cb0ac65a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
