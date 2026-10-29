import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--plants-xenon-gas-and-nmda-receptors--72baf528/.cover.tsx';
import TheSynopsis from '../.conversations/claude--plants-xenon-gas-and-nmda-receptors--72baf528/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Plants, xenon gas, and NMDA receptors ]]( claude--Plants, xenon gas, and NMDA receptors--72baf528 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ Plants, xenon gas, and NMDA receptors ]]( claude--Plants, xenon gas, and NMDA receptors--72baf528 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
