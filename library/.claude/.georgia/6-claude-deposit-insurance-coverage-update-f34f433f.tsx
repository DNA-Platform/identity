import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--deposit-insurance-coverage-update--f34f433f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--deposit-insurance-coverage-update--f34f433f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Deposit insurance coverage update ]]( claude--Deposit insurance coverage update--f34f433f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Deposit insurance coverage update ]]( claude--Deposit insurance coverage update--f34f433f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
