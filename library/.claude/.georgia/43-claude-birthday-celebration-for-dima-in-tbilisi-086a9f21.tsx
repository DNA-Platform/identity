import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.cover.tsx';
import TheSynopsis from '../.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
