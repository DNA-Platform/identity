import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--buckwheat-serving-size-and-calories--4d68e6aa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--buckwheat-serving-size-and-calories--4d68e6aa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Buckwheat serving size and calories ]]( claude--Buckwheat serving size and calories--4d68e6aa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 August 2026: <Means>$[[ Buckwheat serving size and calories ]]( claude--Buckwheat serving size and calories--4d68e6aa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
