import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--react-and-typescript-curriculum-design--6112f522/.cover.tsx';
import TheSynopsis from '../.conversations/claude--react-and-typescript-curriculum-design--6112f522/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ React and TypeScript curriculum design ]]( claude--React and TypeScript curriculum design--6112f522 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 September 2025: <Means>$[[ React and TypeScript curriculum design ]]( claude--React and TypeScript curriculum design--6112f522 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
