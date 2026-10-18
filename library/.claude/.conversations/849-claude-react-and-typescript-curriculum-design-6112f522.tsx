import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--react-and-typescript-curriculum-design--6112f522/.cover.tsx';
import TheSynopsis from './claude--react-and-typescript-curriculum-design--6112f522/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[26 September 2025](2025-09-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ React and TypeScript curriculum design ]]( claude--React and TypeScript curriculum design--6112f522 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 152 exchanges: <Means>$[[ React and TypeScript curriculum design ]]( claude--React and TypeScript curriculum design--6112f522 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
