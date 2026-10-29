import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--shutterstock-description-character-limit-changes--9997e2f6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--shutterstock-description-character-limit-changes--9997e2f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[8 March 2026](2026-03-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Shutterstock description character limit changes ]]( claude--Shutterstock description character limit changes--9997e2f6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 March 2026: <Means>$[[ Shutterstock description character limit changes ]]( claude--Shutterstock description character limit changes--9997e2f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
