import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.cover.tsx';
import TheSynopsis from '../.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Banach-Tarski and the axiom of choice ]]( claude--Banach-Tarski and the axiom of choice--a2285675 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 July 2026: <Means>$[[ Banach-Tarski and the axiom of choice ]]( claude--Banach-Tarski and the axiom of choice--a2285675 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
