import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--react-and-typescript-curriculum-design--6112f522/.cover.tsx';
import TheSynopsis from '../.conversations/claude--react-and-typescript-curriculum-design--6112f522/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
