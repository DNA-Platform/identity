import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.russia/.cover.tsx';
import TheSynopsis from './.russia/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[8 October 2026](2026-10-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia ]]( claude--Russia )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Russia ]]( claude--Russia )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
