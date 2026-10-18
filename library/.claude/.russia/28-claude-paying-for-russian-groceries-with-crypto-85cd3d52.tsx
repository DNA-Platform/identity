import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/.cover.tsx';
import TheSynopsis from '../.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[1 March 2026](2026-03-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Paying for Russian groceries with crypto ]]( claude--Paying for Russian groceries with crypto--85cd3d52 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 March 2026: <Means>$[[ Paying for Russian groceries with crypto ]]( claude--Paying for Russian groceries with crypto--85cd3d52 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
