import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--monad-l1-security-model-and-consensus-mechanism--35932016/.cover.tsx';
import TheSynopsis from './claude--monad-l1-security-model-and-consensus-mechanism--35932016/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[21 February 2026](2026-02-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad L1 security model and consensus mechanism ]]( claude--Monad L1 security model and consensus mechanism--35932016 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 97 exchanges: <Means>$[[ Monad L1 security model and consensus mechanism ]]( claude--Monad L1 security model and consensus mechanism--35932016 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
