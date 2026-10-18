import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--conversational-russian-immersion-learning--cf8acad4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--conversational-russian-immersion-learning--cf8acad4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Conversational Russian immersion learning ]]( claude--Conversational Russian immersion learning--cf8acad4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 March 2026: <Means>$[[ Conversational Russian immersion learning ]]( claude--Conversational Russian immersion learning--cf8acad4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
