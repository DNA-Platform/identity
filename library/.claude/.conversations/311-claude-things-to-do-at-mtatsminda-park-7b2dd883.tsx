import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--things-to-do-at-mtatsminda-park--7b2dd883/.cover.tsx';
import TheSynopsis from './claude--things-to-do-at-mtatsminda-park--7b2dd883/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[18 April 2026](2026-04-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Things to do at Mtatsminda Park ]]( claude--Things to do at Mtatsminda Park--7b2dd883 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Things to do at Mtatsminda Park ]]( claude--Things to do at Mtatsminda Park--7b2dd883 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
