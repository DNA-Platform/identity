import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--batumi-summer--35f8b8d3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--batumi-summer--35f8b8d3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batumi Summer ]]( claude--Batumi Summer--35f8b8d3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 June 2026: <Means>$[[ Batumi Summer ]]( claude--Batumi Summer--35f8b8d3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
