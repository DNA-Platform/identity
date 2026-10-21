import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--zoom-camera-not-working-on-hp-laptop--89fc29f9/.cover.tsx';
import TheSynopsis from './claude--zoom-camera-not-working-on-hp-laptop--89fc29f9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[11 February 2026](2026-02-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Zoom camera not working on HP laptop ]]( claude--Zoom camera not working on HP laptop--89fc29f9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Zoom camera not working on HP laptop ]]( claude--Zoom camera not working on HP laptop--89fc29f9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
