import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--pointers-in-c-plus-plus-x-vs-x--6129004d/.cover.tsx';
import TheSynopsis from './claude--pointers-in-c-plus-plus-x-vs-x--6129004d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[28 November 2024](2024-11-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pointers in C++: *x vs **x ]]( claude--Pointers in C++: *x vs **x--6129004d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Pointers in C++: *x vs **x ]]( claude--Pointers in C++: *x vs **x--6129004d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
