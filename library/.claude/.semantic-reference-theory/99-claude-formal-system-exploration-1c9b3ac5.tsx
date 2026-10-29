import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--formal-system-exploration--1c9b3ac5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--formal-system-exploration--1c9b3ac5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[23 October 2025](2025-10-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formal system exploration ]]( claude--Formal system exploration--1c9b3ac5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 October 2025: <Means>$[[ Formal system exploration ]]( claude--Formal system exploration--1c9b3ac5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
