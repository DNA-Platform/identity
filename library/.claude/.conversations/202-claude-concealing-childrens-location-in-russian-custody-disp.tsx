import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--concealing-childrens-location-in-russian-custody-dispute--ee687ce7/.cover.tsx';
import TheSynopsis from './claude--concealing-childrens-location-in-russian-custody-dispute--ee687ce7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[19 January 2026](2026-01-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Concealing children's location in Russian custody dispute ]]( claude--Concealing children's location in Russian custody dispute--ee687ce7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Concealing children's location in Russian custody dispute ]]( claude--Concealing children's location in Russian custody dispute--ee687ce7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
