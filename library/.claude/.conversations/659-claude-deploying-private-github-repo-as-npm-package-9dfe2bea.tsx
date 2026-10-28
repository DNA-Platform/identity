import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--deploying-private-github-repo-as-npm-package--9dfe2bea/.cover.tsx';
import TheSynopsis from './claude--deploying-private-github-repo-as-npm-package--9dfe2bea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[20 November 2024](2024-11-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Deploying Private GitHub Repo as NPM Package ]]( claude--Deploying Private GitHub Repo as NPM Package--9dfe2bea )</Title>
        <Paragraph>
            <Caption />
            A conversation, 66 exchanges: <Means>$[[ Deploying Private GitHub Repo as NPM Package ]]( claude--Deploying Private GitHub Repo as NPM Package--9dfe2bea )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
