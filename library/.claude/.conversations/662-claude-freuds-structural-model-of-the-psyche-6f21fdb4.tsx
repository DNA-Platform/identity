import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--freuds-structural-model-of-the-psyche--6f21fdb4/.cover.tsx';
import TheSynopsis from './claude--freuds-structural-model-of-the-psyche--6f21fdb4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[17 November 2024](2024-11-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Freud's Structural Model of the Psyche ]]( claude--Freud's Structural Model of the Psyche--6f21fdb4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Freud's Structural Model of the Psyche ]]( claude--Freud's Structural Model of the Psyche--6f21fdb4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
