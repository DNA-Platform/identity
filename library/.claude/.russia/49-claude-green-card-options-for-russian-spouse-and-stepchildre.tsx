import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Green card options for Russian spouse and stepchildren ]]( claude--Green card options for Russian spouse and stepchildren--0d99232e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 September 2026: <Means>$[[ Green card options for Russian spouse and stepchildren ]]( claude--Green card options for Russian spouse and stepchildren--0d99232e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
