import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--chomskys-linguistics-and-programming-languages--e259647a/.cover.tsx';
import TheSynopsis from './claude--chomskys-linguistics-and-programming-languages--e259647a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[1 November 2024](2024-11-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chomsky's Linguistics and Programming Languages ]]( claude--Chomsky's Linguistics and Programming Languages--e259647a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Chomsky's Linguistics and Programming Languages ]]( claude--Chomsky's Linguistics and Programming Languages--e259647a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
