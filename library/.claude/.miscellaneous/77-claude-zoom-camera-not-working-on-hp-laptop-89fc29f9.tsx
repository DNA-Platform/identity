import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--zoom-camera-not-working-on-hp-laptop--89fc29f9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--zoom-camera-not-working-on-hp-laptop--89fc29f9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[11 February 2026](2026-02-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Zoom camera not working on HP laptop ]]( claude--Zoom camera not working on HP laptop--89fc29f9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 February 2026: <Means>$[[ Zoom camera not working on HP laptop ]]( claude--Zoom camera not working on HP laptop--89fc29f9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
