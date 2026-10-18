import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--checking-business-name-availability-for-georgia-entrepreneur--ec631ac7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--checking-business-name-availability-for-georgia-entrepreneur--ec631ac7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking business name availability for Georgia entrepreneurs ]]( claude--Checking business name availability for Georgia entrepreneurs--ec631ac7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Checking business name availability for Georgia entrepreneurs ]]( claude--Checking business name availability for Georgia entrepreneurs--ec631ac7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
