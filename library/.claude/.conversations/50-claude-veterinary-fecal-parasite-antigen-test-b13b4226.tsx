import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--veterinary-fecal-parasite-antigen-test--b13b4226/.cover.tsx';
import TheSynopsis from './claude--veterinary-fecal-parasite-antigen-test--b13b4226/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Veterinary fecal parasite antigen test ]]( claude--Veterinary fecal parasite antigen test--b13b4226 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Veterinary fecal parasite antigen test ]]( claude--Veterinary fecal parasite antigen test--b13b4226 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
