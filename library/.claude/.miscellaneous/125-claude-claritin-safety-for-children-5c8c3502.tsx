import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claritin-safety-for-children--5c8c3502/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claritin-safety-for-children--5c8c3502/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claritin safety for children ]]( claude--Claritin safety for children--5c8c3502 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 April 2026: <Means>$[[ Claritin safety for children ]]( claude--Claritin safety for children--5c8c3502 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
