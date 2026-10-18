import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-eirian--edef207c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-eirian--edef207c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Eirian ]]( claude--Seren &amp; Eirian--edef207c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2025: <Means>$[[ Seren &amp; Eirian ]]( claude--Seren &amp; Eirian--edef207c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
