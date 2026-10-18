import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.the-hard-problem/.cover.tsx';
import TheSynopsis from './.the-hard-problem/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Hard Problem ]]( claude--The Hard Problem )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ The Hard Problem ]]( claude--The Hard Problem )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
