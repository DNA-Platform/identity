import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
