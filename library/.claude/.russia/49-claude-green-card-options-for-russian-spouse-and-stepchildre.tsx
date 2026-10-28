import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[19 September 2026](2026-09-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Green card options for Russian spouse and stepchildren ]]( claude--Green card options for Russian spouse and stepchildren--0d99232e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 September 2026: <Means>$[[ Green card options for Russian spouse and stepchildren ]]( claude--Green card options for Russian spouse and stepchildren--0d99232e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
