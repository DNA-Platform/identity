import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trumps-war-resolution-and-fentanyl-statistics-claims--d6567410/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-war-resolution-and-fentanyl-statistics-claims--d6567410/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's war resolution and fentanyl statistics claims ]]( claude--Trump's war resolution and fentanyl statistics claims--d6567410 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 April 2026: <Means>$[[ Trump's war resolution and fentanyl statistics claims ]]( claude--Trump's war resolution and fentanyl statistics claims--d6567410 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
