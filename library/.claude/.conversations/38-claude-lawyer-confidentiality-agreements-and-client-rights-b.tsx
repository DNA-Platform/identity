import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--lawyer-confidentiality-agreements-and-client-rights--b56c62f1/.cover.tsx';
import TheSynopsis from './claude--lawyer-confidentiality-agreements-and-client-rights--b56c62f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[15 January 2026](2026-01-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Lawyer confidentiality agreements and client rights ]]( claude--Lawyer confidentiality agreements and client rights--b56c62f1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Lawyer confidentiality agreements and client rights ]]( claude--Lawyer confidentiality agreements and client rights--b56c62f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
