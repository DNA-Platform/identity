import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--zoom-camera-not-working-on-hp-laptop--89fc29f9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--zoom-camera-not-working-on-hp-laptop--89fc29f9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Zoom camera not working on HP laptop ]]( claude--Zoom camera not working on HP laptop--89fc29f9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 February 2026: <Means>$[[ Zoom camera not working on HP laptop ]]( claude--Zoom camera not working on HP laptop--89fc29f9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
