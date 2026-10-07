import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { Illustration, Scheme, Window } from './19-the-cover~code.tsx';
import { Cover } from './10-the-manual~faces.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Scheme
            ground="#eef1f2"
            band="#b6c1c6"
            bandInk="#2b363c"
            foot="#d8c48e"
            footInk="#5d4a16"
            ink="#4b3d14"
        />
        <Window
            x="-23"
            y="-50"
        />
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Library ]]( The Library )</Subject>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
