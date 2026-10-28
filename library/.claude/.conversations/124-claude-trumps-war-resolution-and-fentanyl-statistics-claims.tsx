import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--trumps-war-resolution-and-fentanyl-statistics-claims--d6567410/.cover.tsx';
import TheSynopsis from './claude--trumps-war-resolution-and-fentanyl-statistics-claims--d6567410/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's war resolution and fentanyl statistics claims ]]( claude--Trump's war resolution and fentanyl statistics claims--d6567410 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 52 exchanges: <Means>$[[ Trump's war resolution and fentanyl statistics claims ]]( claude--Trump's war resolution and fentanyl statistics claims--d6567410 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
