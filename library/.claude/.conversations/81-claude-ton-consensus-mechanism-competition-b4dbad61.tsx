import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ton-consensus-mechanism-competition--b4dbad61/.cover.tsx';
import TheSynopsis from './claude--ton-consensus-mechanism-competition--b4dbad61/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[16 May 2026](2026-05-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON consensus mechanism competition ]]( claude--TON consensus mechanism competition--b4dbad61 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ TON consensus mechanism competition ]]( claude--TON consensus mechanism competition--b4dbad61 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
