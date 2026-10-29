import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-custody-and-visitation-enforcement-across-borders--e552fa7d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[25 April 2026](2026-04-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian custody and visitation enforcement across borders ]]( claude--Russian custody and visitation enforcement across borders--e552fa7d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 April 2026: <Means>$[[ Russian custody and visitation enforcement across borders ]]( claude--Russian custody and visitation enforcement across borders--e552fa7d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
