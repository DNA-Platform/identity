import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump, Rubio, and Venezuela: reconciling perspectives ]]( claude--Trump, Rubio, and Venezuela: reconciling perspectives--53f5d105 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2026: <Means>$[[ Trump, Rubio, and Venezuela: reconciling perspectives ]]( claude--Trump, Rubio, and Venezuela: reconciling perspectives--53f5d105 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
