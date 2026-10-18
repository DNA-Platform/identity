import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--lawyer-confidentiality-agreements-and-client-rights--b56c62f1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--lawyer-confidentiality-agreements-and-client-rights--b56c62f1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Lawyer confidentiality agreements and client rights ]]( claude--Lawyer confidentiality agreements and client rights--b56c62f1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 January 2026: <Means>$[[ Lawyer confidentiality agreements and client rights ]]( claude--Lawyer confidentiality agreements and client rights--b56c62f1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
