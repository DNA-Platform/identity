import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.cover.tsx';
import TheSynopsis from '../.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[19 March 2026](2026-03-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Birthday celebration for Dima in Tbilisi ]]( claude--Birthday celebration for Dima in Tbilisi--086a9f21 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 March 2026: <Means>$[[ Birthday celebration for Dima in Tbilisi ]]( claude--Birthday celebration for Dima in Tbilisi--086a9f21 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
