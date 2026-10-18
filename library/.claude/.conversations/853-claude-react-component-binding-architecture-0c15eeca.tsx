import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--react-component-binding-architecture--0c15eeca/.cover.tsx';
import TheSynopsis from './claude--react-component-binding-architecture--0c15eeca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[18 September 2025](2025-09-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ React Component Binding Architecture ]]( claude--React Component Binding Architecture--0c15eeca )</Title>
        <Paragraph>
            <Caption />
            A conversation, 200 exchanges: <Means>$[[ React Component Binding Architecture ]]( claude--React Component Binding Architecture--0c15eeca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
