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
            ground="#f6f0ea"
            band="#e0c6ad"
            bandInk="#5a3a1e"
            foot="#c89a72"
            footInk="#4a2c12"
            ink="#5a3a1e"
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
            from="2026-03-05T09:32:25.685949Z"
            to="2026-03-05T11:45:31.157492Z"
        />
        <Messages
            shown="23"
            all="23"
        />
        <Title>[[ Automating stock art uploads to Adobe Stock ]]( claude--Automating stock art uploads to Adobe Stock--c5329f22 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ DNA Patternity ]]( claude--DNA Patternity )</Project>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>c5329f22-6c45-4425-ad44-835dd19f8a2e</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
