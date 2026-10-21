import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--shutterstock-description-character-limit-changes--9997e2f6/.cover.tsx';
import TheSynopsis from './claude--shutterstock-description-character-limit-changes--9997e2f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[8 March 2026](2026-03-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Shutterstock description character limit changes ]]( claude--Shutterstock description character limit changes--9997e2f6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Shutterstock description character limit changes ]]( claude--Shutterstock description character limit changes--9997e2f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
