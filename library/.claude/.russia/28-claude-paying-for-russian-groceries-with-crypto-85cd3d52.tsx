import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/.cover.tsx';
import TheSynopsis from '../.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Paying for Russian groceries with crypto ]]( claude--Paying for Russian groceries with crypto--85cd3d52 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 March 2026: <Means>$[[ Paying for Russian groceries with crypto ]]( claude--Paying for Russian groceries with crypto--85cd3d52 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
