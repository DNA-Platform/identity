import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--formalism-authorship-and-axiom-analysis--20b704e8/.cover.tsx';
import TheSynopsis from './claude--formalism-authorship-and-axiom-analysis--20b704e8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[4 September 2025](2025-09-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formalism Authorship and Axiom Analysis ]]( claude--Formalism Authorship and Axiom Analysis--20b704e8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Formalism Authorship and Axiom Analysis ]]( claude--Formalism Authorship and Axiom Analysis--20b704e8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
