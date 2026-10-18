import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.cover.tsx';
import TheSynopsis from '../.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Birthday celebration for Dima in Tbilisi ]]( claude--Birthday celebration for Dima in Tbilisi--086a9f21 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 March 2026: <Means>$[[ Birthday celebration for Dima in Tbilisi ]]( claude--Birthday celebration for Dima in Tbilisi--086a9f21 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
