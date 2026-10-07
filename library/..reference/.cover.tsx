import { About, Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Scheme, Window } from '../.manual/.book';

export default () => (
    <Chapter>
        <Cover />
        <Scheme
            ground="#eef5f6"
            band="#c3e3e6"
            bandInk="#1c565c"
            foot="#8db9bd"
            footInk="#153e43"
            ink="#1f5a60"
        />
        <Window
            x="-46"
            y="-13"
        />
        <Title>[[ Dougs Library ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Library ]]( The Library )</Subject>
        <About>[[ The Library ]]</About>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
