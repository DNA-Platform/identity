import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking RAM and memory on Windows ]]( claude--Checking RAM and memory on Windows--a8cd216e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 January 2026: <Means>$[[ Checking RAM and memory on Windows ]]( claude--Checking RAM and memory on Windows--a8cd216e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
