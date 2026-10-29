import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--seren-and-human-errors--fef7fd01/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-human-errors--fef7fd01/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[21 February 2026](2026-02-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Human Errors ]]( claude--Seren &amp; Human Errors--fef7fd01 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 February 2026: <Means>$[[ Seren &amp; Human Errors ]]( claude--Seren &amp; Human Errors--fef7fd01 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
