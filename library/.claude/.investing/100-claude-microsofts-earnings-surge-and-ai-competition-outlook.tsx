import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/.cover.tsx';
import TheSynopsis from '../.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[30 July 2026](2026-07-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Microsoft's earnings surge and AI competition outlook ]]( claude--Microsoft's earnings surge and AI competition outlook--a2758d30 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 July 2026: <Means>$[[ Microsoft's earnings surge and AI competition outlook ]]( claude--Microsoft's earnings surge and AI competition outlook--a2758d30 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
