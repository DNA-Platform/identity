import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump, Rubio, and Venezuela: reconciling perspectives ]]( claude--Trump, Rubio, and Venezuela: reconciling perspectives--53f5d105 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2026: <Means>$[[ Trump, Rubio, and Venezuela: reconciling perspectives ]]( claude--Trump, Rubio, and Venezuela: reconciling perspectives--53f5d105 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
