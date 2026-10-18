import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--creating-a-project-understanding-plan--f968f7e4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--creating-a-project-understanding-plan--f968f7e4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Creating a project understanding plan ]]( claude--Creating a project understanding plan--f968f7e4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 January 2026: <Means>$[[ Creating a project understanding plan ]]( claude--Creating a project understanding plan--f968f7e4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
