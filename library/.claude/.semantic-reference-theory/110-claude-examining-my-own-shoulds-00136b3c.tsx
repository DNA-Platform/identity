import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--examining-my-own-shoulds--00136b3c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--examining-my-own-shoulds--00136b3c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[14 December 2025](2025-12-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Examining my own shoulds ]]( claude--Examining my own shoulds--00136b3c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 December 2025: <Means>$[[ Examining my own shoulds ]]( claude--Examining my own shoulds--00136b3c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
