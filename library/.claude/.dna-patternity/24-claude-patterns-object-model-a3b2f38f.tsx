import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--patterns-object-model--a3b2f38f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--patterns-object-model--a3b2f38f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Patterns Object Model ]]( claude--Patterns Object Model--a3b2f38f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 August 2025: <Means>$[[ Patterns Object Model ]]( claude--Patterns Object Model--a3b2f38f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
