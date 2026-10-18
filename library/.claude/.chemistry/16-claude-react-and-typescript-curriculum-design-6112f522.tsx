import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--react-and-typescript-curriculum-design--6112f522/.cover.tsx';
import TheSynopsis from '../.conversations/claude--react-and-typescript-curriculum-design--6112f522/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[21 September 2025](2025-09-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ React and TypeScript curriculum design ]]( claude--React and TypeScript curriculum design--6112f522 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 September 2025: <Means>$[[ React and TypeScript curriculum design ]]( claude--React and TypeScript curriculum design--6112f522 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
