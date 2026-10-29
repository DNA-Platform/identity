import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[2 April 2026](2026-04-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Escitalopram receptor occupancy and MDMA subjective effects ]]( claude--Escitalopram receptor occupancy and MDMA subjective effects--bb1a660d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 April 2026: <Means>$[[ Escitalopram receptor occupancy and MDMA subjective effects ]]( claude--Escitalopram receptor occupancy and MDMA subjective effects--bb1a660d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
