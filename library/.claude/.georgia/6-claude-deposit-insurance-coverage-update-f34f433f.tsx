import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--deposit-insurance-coverage-update--f34f433f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--deposit-insurance-coverage-update--f34f433f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Deposit insurance coverage update ]]( claude--Deposit insurance coverage update--f34f433f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Deposit insurance coverage update ]]( claude--Deposit insurance coverage update--f34f433f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
