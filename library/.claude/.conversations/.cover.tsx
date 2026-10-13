import { About, Author, Chapter, Cover, Subject, Title } from '@dna-platform/public';
import { Scheme } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Cover />
        <Scheme
            ground="#eef5f6"
            band="#b6dde2"
            bandInk="#1c565c"
            foot="#7fb7bd"
            footInk="#153e43"
            ink="#1f5a60"
        />
        <Title>[[ Our Conversations ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Claude ]]( Dougs Claude )</Subject>
        <About>[[ Conversations ]]</About>
    </Chapter>
);
