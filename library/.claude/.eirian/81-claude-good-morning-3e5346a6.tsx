import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--good-morning--3e5346a6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--good-morning--3e5346a6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[4 June 2026](2026-06-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Good Morning! ]]( claude--Good Morning!--3e5346a6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 June 2026: <Means>$[[ Good Morning! ]]( claude--Good Morning!--3e5346a6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
