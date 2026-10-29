import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--monad-technology-development-and-viability-assessment--9eb19e42/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monad-technology-development-and-viability-assessment--9eb19e42/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad technology development and viability assessment ]]( claude--Monad technology development and viability assessment--9eb19e42 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ Monad technology development and viability assessment ]]( claude--Monad technology development and viability assessment--9eb19e42 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
