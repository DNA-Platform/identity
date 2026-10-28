import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--invoke-commandindesktoppackage-and-msix-package-identity--3ff758ca/.cover.tsx';
import TheSynopsis from './claude--invoke-commandindesktoppackage-and-msix-package-identity--3ff758ca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Invoke-CommandInDesktopPackage and MSIX package identity ]]( claude--Invoke-CommandInDesktopPackage and MSIX package identity--3ff758ca )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Invoke-CommandInDesktopPackage and MSIX package identity ]]( claude--Invoke-CommandInDesktopPackage and MSIX package identity--3ff758ca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
