import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--reactive-framework-learning-journey--c04cc19b/.cover.tsx';
import TheSynopsis from './claude--reactive-framework-learning-journey--c04cc19b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[25 August 2025](2025-08-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reactive Framework Learning Journey ]]( claude--Reactive Framework Learning Journey--c04cc19b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 122 exchanges: <Means>$[[ Reactive Framework Learning Journey ]]( claude--Reactive Framework Learning Journey--c04cc19b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
