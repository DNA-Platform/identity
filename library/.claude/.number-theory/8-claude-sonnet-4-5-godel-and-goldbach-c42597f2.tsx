import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--sonnet-4-5-godel-and-goldbach--c42597f2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
