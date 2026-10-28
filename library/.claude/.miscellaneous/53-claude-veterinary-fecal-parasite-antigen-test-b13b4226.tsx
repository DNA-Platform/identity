import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--veterinary-fecal-parasite-antigen-test--b13b4226/.cover.tsx';
import TheSynopsis from '../.conversations/claude--veterinary-fecal-parasite-antigen-test--b13b4226/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Veterinary fecal parasite antigen test ]]( claude--Veterinary fecal parasite antigen test--b13b4226 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2026: <Means>$[[ Veterinary fecal parasite antigen test ]]( claude--Veterinary fecal parasite antigen test--b13b4226 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
