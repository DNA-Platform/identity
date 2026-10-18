import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--hp-printer-alignment-troubleshooting-and-setup--3dd9089e/.cover.tsx';
import TheSynopsis from './claude--hp-printer-alignment-troubleshooting-and-setup--3dd9089e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ HP printer alignment troubleshooting and setup ]]( claude--HP printer alignment troubleshooting and setup--3dd9089e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ HP printer alignment troubleshooting and setup ]]( claude--HP printer alignment troubleshooting and setup--3dd9089e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
