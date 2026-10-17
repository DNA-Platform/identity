import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ternary-operator-semantics-and-variable-equality--e9d7e99f/.cover.tsx';
import TheSynopsis from './claude--ternary-operator-semantics-and-variable-equality--e9d7e99f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[9 December 2025](2025-12-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ternary operator semantics and variable equality ]]( claude--Ternary operator semantics and variable equality--e9d7e99f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 40 exchanges: <Means>$[[ Ternary operator semantics and variable equality ]]( claude--Ternary operator semantics and variable equality--e9d7e99f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
