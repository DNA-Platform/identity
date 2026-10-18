import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--migrating-domain-email-accounts-across-services--a9870f22/.cover.tsx';
import TheSynopsis from './claude--migrating-domain-email-accounts-across-services--a9870f22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Migrating domain email accounts across services ]]( claude--Migrating domain email accounts across services--a9870f22 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 98 exchanges: <Means>$[[ Migrating domain email accounts across services ]]( claude--Migrating domain email accounts across services--a9870f22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
