import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--pavel-durovs-language-abilities--7942d357/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pavel-durovs-language-abilities--7942d357/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pavel Durov's language abilities ]]( claude--Pavel Durov's language abilities--7942d357 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 January 2026: <Means>$[[ Pavel Durov's language abilities ]]( claude--Pavel Durov's language abilities--7942d357 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
