import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[10 July 2026](2026-07-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pentagon UFO footage six-sided object analysis ]]( claude--Pentagon UFO footage six-sided object analysis--392e897c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 July 2026: <Means>$[[ Pentagon UFO footage six-sided object analysis ]]( claude--Pentagon UFO footage six-sided object analysis--392e897c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
