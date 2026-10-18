import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--reactive-framework-learning-journey--c04cc19b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--reactive-framework-learning-journey--c04cc19b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reactive Framework Learning Journey ]]( claude--Reactive Framework Learning Journey--c04cc19b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 August 2025: <Means>$[[ Reactive Framework Learning Journey ]]( claude--Reactive Framework Learning Journey--c04cc19b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
