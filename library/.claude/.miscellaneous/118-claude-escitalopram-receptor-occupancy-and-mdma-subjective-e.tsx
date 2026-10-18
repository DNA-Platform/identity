import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Escitalopram receptor occupancy and MDMA subjective effects ]]( claude--Escitalopram receptor occupancy and MDMA subjective effects--bb1a660d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 April 2026: <Means>$[[ Escitalopram receptor occupancy and MDMA subjective effects ]]( claude--Escitalopram receptor occupancy and MDMA subjective effects--bb1a660d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
