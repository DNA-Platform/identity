import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--kiwi-post-amazon-invoice--5f432a8f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--kiwi-post-amazon-invoice--5f432a8f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Kiwi post Amazon invoice ]]( claude--Kiwi post Amazon invoice--5f432a8f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 September 2026: <Means>$[[ Kiwi post Amazon invoice ]]( claude--Kiwi post Amazon invoice--5f432a8f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
