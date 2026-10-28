import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Scheme, Volume, Window } from '../../../.manual/19-the-cover~code.tsx';
import { Messages, Participant, Participants, Period } from '../../../.manual/29-the-conversation~code.tsx';
import { Account } from '../../.manual/7-the-account~code.tsx';
import { Origin } from '../../.manual/8-the-origin~code.tsx';
import { Project } from '../../.manual/3-the-project~code.tsx';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#efefef"
            band="#c8c8c8"
            bandInk="#333333"
            foot="#9a9a9a"
            footInk="#262626"
            ink="#333333"
        />
        <Window
            x="-32"
            y="-26"
        />
        <Participants>
            <Participant>$[[ Doug ]]( Dougs Story )</Participant>
            <Participant>$[[ Claude ]]( Dougs Claude )</Participant>
        </Participants>
        <Period
            from="2026-07-01T18:33:51.686971Z"
            to="2026-07-02T21:04:12.610103Z"
        />
        <Messages
            shown="60"
            all="84"
        />
        <Title>[[ Semi-synthetic organisms with unnatural base pairs ]]( claude--Semi-synthetic organisms with unnatural base pairs--1f66d32d )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Science ]]( claude--Science )</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>1f66d32d-7a02-4ba5-8859-de141cb9ca44</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
