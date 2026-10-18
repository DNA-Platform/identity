import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.cover.tsx';
import TheSynopsis from './claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[11 July 2026](2026-07-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pentagon UFO footage six-sided object analysis ]]( claude--Pentagon UFO footage six-sided object analysis--392e897c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Pentagon UFO footage six-sided object analysis ]]( claude--Pentagon UFO footage six-sided object analysis--392e897c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
