import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-the-dunning-kruger-effect--4f712a68/.cover.tsx';
import TheSynopsis from './claude--understanding-the-dunning-kruger-effect--4f712a68/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[6 November 2024](2024-11-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding the Dunning-Kruger Effect ]]( claude--Understanding the Dunning-Kruger Effect--4f712a68 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Understanding the Dunning-Kruger Effect ]]( claude--Understanding the Dunning-Kruger Effect--4f712a68 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
