import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
