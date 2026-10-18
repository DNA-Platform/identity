import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--masonic-lapel-pin-identification--0d0bf232/.cover.tsx';
import TheSynopsis from '../.conversations/claude--masonic-lapel-pin-identification--0d0bf232/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Masonic lapel pin identification ]]( claude--Masonic lapel pin identification--0d0bf232 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 February 2026: <Means>$[[ Masonic lapel pin identification ]]( claude--Masonic lapel pin identification--0d0bf232 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
