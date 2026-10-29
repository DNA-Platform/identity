import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--monad-l1-security-model-and-consensus-mechanism--35932016/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monad-l1-security-model-and-consensus-mechanism--35932016/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad L1 security model and consensus mechanism ]]( claude--Monad L1 security model and consensus mechanism--35932016 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ Monad L1 security model and consensus mechanism ]]( claude--Monad L1 security model and consensus mechanism--35932016 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
