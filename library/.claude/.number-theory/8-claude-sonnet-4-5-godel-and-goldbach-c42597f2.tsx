import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[12 October 2025](2025-10-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sonnet 4.5: Godel &amp; Goldbach ]]( claude--Sonnet 4..5: Godel &amp; Goldbach--c42597f2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 October 2025: <Means>$[[ Sonnet 4.5: Godel &amp; Goldbach ]]( claude--Sonnet 4..5: Godel &amp; Goldbach--c42597f2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
