import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--transferring-domains-between-godaddy-accounts--dc9000ff/.cover.tsx';
import TheSynopsis from '../.conversations/claude--transferring-domains-between-godaddy-accounts--dc9000ff/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Transferring domains between GoDaddy accounts ]]( claude--Transferring domains between GoDaddy accounts--dc9000ff )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ Transferring domains between GoDaddy accounts ]]( claude--Transferring domains between GoDaddy accounts--dc9000ff )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
