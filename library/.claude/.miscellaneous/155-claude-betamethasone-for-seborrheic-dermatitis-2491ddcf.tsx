import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[16 May 2026](2026-05-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Betamethasone for seborrheic dermatitis ]]( claude--Betamethasone for seborrheic dermatitis--2491ddcf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 May 2026: <Means>$[[ Betamethasone for seborrheic dermatitis ]]( claude--Betamethasone for seborrheic dermatitis--2491ddcf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
