import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formalism Authorship and Axiom Analysis ]]( claude--Formalism Authorship and Axiom Analysis--20b704e8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 September 2025: <Means>$[[ Formalism Authorship and Axiom Analysis ]]( claude--Formalism Authorship and Axiom Analysis--20b704e8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
