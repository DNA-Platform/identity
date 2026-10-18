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
        <Title>[[ Science ]]( claude--Science )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Claude ]]( Dougs Claude )</Subject>
        <About>[[ Science ]]( claude--Science )</About>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
