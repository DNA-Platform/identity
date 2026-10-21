import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--deposit-insurance-coverage-update--f34f433f/.cover.tsx';
import TheSynopsis from './claude--deposit-insurance-coverage-update--f34f433f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Deposit insurance coverage update ]]( claude--Deposit insurance coverage update--f34f433f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Deposit insurance coverage update ]]( claude--Deposit insurance coverage update--f34f433f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
