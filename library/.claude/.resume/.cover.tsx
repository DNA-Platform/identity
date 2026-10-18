import { About, Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { Cover, Illustration, Scheme, Volume, Window } from '../../.manual/.book';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#f6f3e8"
            band="#e2d6a6"
            bandInk="#5c4d12"
            foot="#c6b46a"
            footInk="#4a3d0c"
            ink="#5c4d12"
        />
        <Window
            x="-32"
            y="-26"
        />
        <Title>[[ Resume ]]( claude--Resume )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Claude ]]( Dougs Claude )</Subject>
        <About>[[ Resume ]]( claude--Resume )</About>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
