import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.cover.tsx';
import TheSynopsis from './claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2025</Part>
        <Dated>
            <Date>[7 April 2025](2025-04-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ In-Depth Analysis of Chemical Reactive Programming Framework ]]( claude--In-Depth Analysis of Chemical Reactive Programming Framework--4ef91b65 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ In-Depth Analysis of Chemical Reactive Programming Framework ]]( claude--In-Depth Analysis of Chemical Reactive Programming Framework--4ef91b65 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
