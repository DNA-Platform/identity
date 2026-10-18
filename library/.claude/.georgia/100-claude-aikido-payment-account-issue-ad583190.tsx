import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--aikido-payment-account-issue--ad583190/.cover.tsx';
import TheSynopsis from '../.conversations/claude--aikido-payment-account-issue--ad583190/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Aikido payment account issue ]]( claude--Aikido payment account issue--ad583190 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 October 2026: <Means>$[[ Aikido payment account issue ]]( claude--Aikido payment account issue--ad583190 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
