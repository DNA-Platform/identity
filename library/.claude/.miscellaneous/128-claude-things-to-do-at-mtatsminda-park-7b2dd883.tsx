import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.cover.tsx';
import TheSynopsis from '../.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Things to do at Mtatsminda Park ]]( claude--Things to do at Mtatsminda Park--7b2dd883 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 April 2026: <Means>$[[ Things to do at Mtatsminda Park ]]( claude--Things to do at Mtatsminda Park--7b2dd883 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
