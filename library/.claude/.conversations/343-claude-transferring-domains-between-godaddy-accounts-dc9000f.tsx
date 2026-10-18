import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--transferring-domains-between-godaddy-accounts--dc9000ff/.cover.tsx';
import TheSynopsis from './claude--transferring-domains-between-godaddy-accounts--dc9000ff/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Transferring domains between GoDaddy accounts ]]( claude--Transferring domains between GoDaddy accounts--dc9000ff )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Transferring domains between GoDaddy accounts ]]( claude--Transferring domains between GoDaddy accounts--dc9000ff )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
