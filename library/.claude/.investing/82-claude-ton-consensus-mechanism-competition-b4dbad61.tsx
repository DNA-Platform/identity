import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-consensus-mechanism-competition--b4dbad61/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-consensus-mechanism-competition--b4dbad61/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON consensus mechanism competition ]]( claude--TON consensus mechanism competition--b4dbad61 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 May 2026: <Means>$[[ TON consensus mechanism competition ]]( claude--TON consensus mechanism competition--b4dbad61 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
