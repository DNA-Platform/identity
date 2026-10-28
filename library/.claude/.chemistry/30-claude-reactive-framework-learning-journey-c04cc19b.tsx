import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--reactive-framework-learning-journey--c04cc19b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--reactive-framework-learning-journey--c04cc19b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[24 August 2025](2025-08-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reactive Framework Learning Journey ]]( claude--Reactive Framework Learning Journey--c04cc19b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 August 2025: <Means>$[[ Reactive Framework Learning Journey ]]( claude--Reactive Framework Learning Journey--c04cc19b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
