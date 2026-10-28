import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--formal-system-exploration--1c9b3ac5/.cover.tsx';
import TheSynopsis from './claude--formal-system-exploration--1c9b3ac5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[23 October 2025](2025-10-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formal system exploration ]]( claude--Formal system exploration--1c9b3ac5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Formal system exploration ]]( claude--Formal system exploration--1c9b3ac5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
