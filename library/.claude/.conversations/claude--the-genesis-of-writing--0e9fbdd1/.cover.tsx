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
            from="2026-09-18T17:29:39.878928Z"
            to="2026-09-20T21:40:15.214465Z"
        />
        <Messages
            shown="152"
            all="176"
        />
        <Title>[[ The Genesis of Writing ]]( claude--The Genesis of Writing--0e9fbdd1 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Code ]]( claude--Code )</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>0e9fbdd1-33d4-43ea-9bda-fec220244732</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
