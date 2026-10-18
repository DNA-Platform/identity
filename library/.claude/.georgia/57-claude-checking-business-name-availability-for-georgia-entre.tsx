import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--checking-business-name-availability-for-georgia-entrepreneur--ec631ac7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--checking-business-name-availability-for-georgia-entrepreneur--ec631ac7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking business name availability for Georgia entrepreneurs ]]( claude--Checking business name availability for Georgia entrepreneurs--ec631ac7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Checking business name availability for Georgia entrepreneurs ]]( claude--Checking business name availability for Georgia entrepreneurs--ec631ac7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
