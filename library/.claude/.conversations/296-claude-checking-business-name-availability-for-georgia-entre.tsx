import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--checking-business-name-availability-for-georgia-entrepreneur--ec631ac7/.cover.tsx';
import TheSynopsis from './claude--checking-business-name-availability-for-georgia-entrepreneur--ec631ac7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking business name availability for Georgia entrepreneurs ]]( claude--Checking business name availability for Georgia entrepreneurs--ec631ac7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Checking business name availability for Georgia entrepreneurs ]]( claude--Checking business name availability for Georgia entrepreneurs--ec631ac7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
