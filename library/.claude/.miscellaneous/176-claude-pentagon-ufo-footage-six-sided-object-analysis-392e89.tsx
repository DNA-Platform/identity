import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pentagon UFO footage six-sided object analysis ]]( claude--Pentagon UFO footage six-sided object analysis--392e897c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 July 2026: <Means>$[[ Pentagon UFO footage six-sided object analysis ]]( claude--Pentagon UFO footage six-sided object analysis--392e897c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
