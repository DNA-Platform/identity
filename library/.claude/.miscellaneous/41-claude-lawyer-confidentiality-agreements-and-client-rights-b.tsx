import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--lawyer-confidentiality-agreements-and-client-rights--b56c62f1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--lawyer-confidentiality-agreements-and-client-rights--b56c62f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[15 January 2026](2026-01-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Lawyer confidentiality agreements and client rights ]]( claude--Lawyer confidentiality agreements and client rights--b56c62f1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 January 2026: <Means>$[[ Lawyer confidentiality agreements and client rights ]]( claude--Lawyer confidentiality agreements and client rights--b56c62f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
