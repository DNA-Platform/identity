import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--p-equals-np-arguments-barriers-and-cryptographic-implication--212ee355/.cover.tsx';
import TheSynopsis from './claude--p-equals-np-arguments-barriers-and-cryptographic-implication--212ee355/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ P = NP: arguments, barriers, and cryptographic implications ]]( claude--P = NP: arguments, barriers, and cryptographic implications--212ee355 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ P = NP: arguments, barriers, and cryptographic implications ]]( claude--P = NP: arguments, barriers, and cryptographic implications--212ee355 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
