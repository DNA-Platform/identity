import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--write-it-in-a-new-editable-document--3762e1b9/.cover.tsx';
import TheSynopsis from './claude--write-it-in-a-new-editable-document--3762e1b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[14 September 2025](2025-09-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Write it in a new editable document. ]]( claude--Write it in a new editable document..--3762e1b9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Write it in a new editable document. ]]( claude--Write it in a new editable document..--3762e1b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
