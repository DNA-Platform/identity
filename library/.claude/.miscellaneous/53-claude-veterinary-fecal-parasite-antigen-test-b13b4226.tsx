import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--veterinary-fecal-parasite-antigen-test--b13b4226/.cover.tsx';
import TheSynopsis from '../.conversations/claude--veterinary-fecal-parasite-antigen-test--b13b4226/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Veterinary fecal parasite antigen test ]]( claude--Veterinary fecal parasite antigen test--b13b4226 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2026: <Means>$[[ Veterinary fecal parasite antigen test ]]( claude--Veterinary fecal parasite antigen test--b13b4226 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
