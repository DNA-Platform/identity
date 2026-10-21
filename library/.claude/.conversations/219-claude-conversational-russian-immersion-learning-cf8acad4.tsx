import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--conversational-russian-immersion-learning--cf8acad4/.cover.tsx';
import TheSynopsis from './claude--conversational-russian-immersion-learning--cf8acad4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[6 March 2026](2026-03-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Conversational Russian immersion learning ]]( claude--Conversational Russian immersion learning--cf8acad4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Conversational Russian immersion learning ]]( claude--Conversational Russian immersion learning--cf8acad4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
