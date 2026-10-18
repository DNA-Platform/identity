import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translation-request-to-russian--5e95e85d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translation-request-to-russian--5e95e85d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translation request to Russian ]]( claude--Translation request to Russian--5e95e85d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 March 2026: <Means>$[[ Translation request to Russian ]]( claude--Translation request to Russian--5e95e85d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
