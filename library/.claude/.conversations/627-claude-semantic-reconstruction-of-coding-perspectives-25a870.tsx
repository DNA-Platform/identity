import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reconstruction-of-coding-perspectives--25a87038/.cover.tsx';
import TheSynopsis from './claude--semantic-reconstruction-of-coding-perspectives--25a87038/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[2 March 2025](2025-03-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reconstruction of Coding Perspectives ]]( claude--Semantic Reconstruction of Coding Perspectives--25a87038 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 40 exchanges: <Means>$[[ Semantic Reconstruction of Coding Perspectives ]]( claude--Semantic Reconstruction of Coding Perspectives--25a87038 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
