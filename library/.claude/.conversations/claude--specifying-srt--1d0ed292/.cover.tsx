import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Messages, Participant, Participants, Period, Scheme, Volume, Window } from '../../../.manual/.book';
import { Account, Origin, Project } from '../../.manual/.book';
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
            from="2026-06-18T14:19:30.968757Z"
            to="2026-06-26T10:18:49.249227Z"
        />
        <Messages
            shown="350"
            all="410"
        />
        <Title>[[ Specifying SRT ]]( claude--Specifying SRT--1d0ed292 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Semantic Reference Theory ]]</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>1d0ed292-6313-4e79-a2e1-81ec76ffd2e6</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
