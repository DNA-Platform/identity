import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--concealing-childrens-location-in-russian-custody-dispute--ee687ce7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--concealing-childrens-location-in-russian-custody-dispute--ee687ce7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Concealing children's location in Russian custody dispute ]]( claude--Concealing children's location in Russian custody dispute--ee687ce7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 January 2026: <Means>$[[ Concealing children's location in Russian custody dispute ]]( claude--Concealing children's location in Russian custody dispute--ee687ce7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
