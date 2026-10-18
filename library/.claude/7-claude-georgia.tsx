import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.georgia/.cover.tsx';
import TheSynopsis from './.georgia/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[7 October 2026](2026-10-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia ]]( claude--Georgia )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Georgia ]]( claude--Georgia )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
