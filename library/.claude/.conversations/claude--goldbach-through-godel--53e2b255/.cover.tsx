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
            ground="#eff1f6"
            band="#c0c9df"
            bandInk="#2a3a63"
            foot="#8e9fc8"
            footInk="#1f2d50"
            ink="#2a3a63"
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
            from="2026-10-19T11:02:20.806128Z"
            to="2026-11-05T23:03:01.006698Z"
        />
        <Messages
            shown="701"
            all="805"
        />
        <Title>[[ Goldbach through Godel ]]( claude--Goldbach through Godel--53e2b255 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Semantic Reference Theory ]]( claude--Semantic Reference Theory )</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>53e2b255-ac5a-4ca9-8d46-eb20b388b088</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
