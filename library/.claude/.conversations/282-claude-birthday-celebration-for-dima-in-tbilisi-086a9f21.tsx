import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.cover.tsx';
import TheSynopsis from './claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[19 March 2026](2026-03-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Birthday celebration for Dima in Tbilisi ]]( claude--Birthday celebration for Dima in Tbilisi--086a9f21 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Birthday celebration for Dima in Tbilisi ]]( claude--Birthday celebration for Dima in Tbilisi--086a9f21 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
