import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-consensus-mechanism-competition--b4dbad61/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-consensus-mechanism-competition--b4dbad61/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[15 May 2026](2026-05-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON consensus mechanism competition ]]( claude--TON consensus mechanism competition--b4dbad61 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 May 2026: <Means>$[[ TON consensus mechanism competition ]]( claude--TON consensus mechanism competition--b4dbad61 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
