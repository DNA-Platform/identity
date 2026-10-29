import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--trumps-war-resolution-and-fentanyl-statistics-claims--d6567410/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-war-resolution-and-fentanyl-statistics-claims--d6567410/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's war resolution and fentanyl statistics claims ]]( claude--Trump's war resolution and fentanyl statistics claims--d6567410 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 April 2026: <Means>$[[ Trump's war resolution and fentanyl statistics claims ]]( claude--Trump's war resolution and fentanyl statistics claims--d6567410 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
