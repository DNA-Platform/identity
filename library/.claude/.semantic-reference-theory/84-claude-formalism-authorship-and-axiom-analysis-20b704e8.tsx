import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[4 September 2025](2025-09-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formalism Authorship and Axiom Analysis ]]( claude--Formalism Authorship and Axiom Analysis--20b704e8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 September 2025: <Means>$[[ Formalism Authorship and Axiom Analysis ]]( claude--Formalism Authorship and Axiom Analysis--20b704e8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
