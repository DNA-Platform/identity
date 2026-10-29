import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.cover.tsx';
import TheSynopsis from '../.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[18 April 2026](2026-04-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Things to do at Mtatsminda Park ]]( claude--Things to do at Mtatsminda Park--7b2dd883 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 April 2026: <Means>$[[ Things to do at Mtatsminda Park ]]( claude--Things to do at Mtatsminda Park--7b2dd883 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
