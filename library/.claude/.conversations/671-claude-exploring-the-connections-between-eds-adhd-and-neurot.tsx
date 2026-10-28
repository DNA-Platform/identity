import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--exploring-the-connections-between-eds-adhd-and-neurotransmit--48dc2d67/.cover.tsx';
import TheSynopsis from './claude--exploring-the-connections-between-eds-adhd-and-neurotransmit--48dc2d67/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[8 November 2024](2024-11-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Exploring the Connections Between EDS, ADHD, and Neurotransmitter Imbalances ]]( claude--Exploring the Connections Between EDS, ADHD, and Neurotransmitter Imbalances--48dc2d67 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Exploring the Connections Between EDS, ADHD, and Neurotransmitter Imbalances ]]( claude--Exploring the Connections Between EDS, ADHD, and Neurotransmitter Imbalances--48dc2d67 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
