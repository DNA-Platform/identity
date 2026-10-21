import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--creating-a-project-understanding-plan--f968f7e4/.cover.tsx';
import TheSynopsis from './claude--creating-a-project-understanding-plan--f968f7e4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[15 January 2026](2026-01-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Creating a project understanding plan ]]( claude--Creating a project understanding plan--f968f7e4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Creating a project understanding plan ]]( claude--Creating a project understanding plan--f968f7e4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
