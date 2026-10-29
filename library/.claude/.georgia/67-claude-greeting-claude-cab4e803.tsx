import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--greeting-claude--cab4e803/.cover.tsx';
import TheSynopsis from '../.conversations/claude--greeting-claude--cab4e803/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[9 June 2026](2026-06-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Greeting Claude ]]( claude--Greeting Claude--cab4e803 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 June 2026: <Means>$[[ Greeting Claude ]]( claude--Greeting Claude--cab4e803 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
