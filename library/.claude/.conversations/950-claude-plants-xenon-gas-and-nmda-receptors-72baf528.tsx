import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--plants-xenon-gas-and-nmda-receptors--72baf528/.cover.tsx';
import TheSynopsis from './claude--plants-xenon-gas-and-nmda-receptors--72baf528/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Plants, xenon gas, and NMDA receptors ]]( claude--Plants, xenon gas, and NMDA receptors--72baf528 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Plants, xenon gas, and NMDA receptors ]]( claude--Plants, xenon gas, and NMDA receptors--72baf528 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
