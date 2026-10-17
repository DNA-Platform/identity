import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/.cover.tsx';
import TheSynopsis from './claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[30 July 2026](2026-07-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Microsoft's earnings surge and AI competition outlook ]]( claude--Microsoft's earnings surge and AI competition outlook--a2758d30 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Microsoft's earnings surge and AI competition outlook ]]( claude--Microsoft's earnings surge and AI competition outlook--a2758d30 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
