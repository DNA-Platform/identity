import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/.cover.tsx';
import TheSynopsis from '../.conversations/claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Custody changes and appeal procedures in Russian law ]]( claude--Custody changes and appeal procedures in Russian law--9588c3ce )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Custody changes and appeal procedures in Russian law ]]( claude--Custody changes and appeal procedures in Russian law--9588c3ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
