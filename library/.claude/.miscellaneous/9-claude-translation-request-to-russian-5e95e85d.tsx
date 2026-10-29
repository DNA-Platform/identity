import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--translation-request-to-russian--5e95e85d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translation-request-to-russian--5e95e85d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[17 March 2026](2026-03-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translation request to Russian ]]( claude--Translation request to Russian--5e95e85d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 March 2026: <Means>$[[ Translation request to Russian ]]( claude--Translation request to Russian--5e95e85d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
