import { $Chapter, Author, Cover, Ref, Subject, Title } from '@dna-platform/public';
import { Chrome, Tabs } from '../../../../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>[[ Semantics of Types &amp; More ]] $[ ]( Semantic Reference Theory )</Title>
                <Author>*[[ Author: Doug ]]( My Library Log )</Author>
                <Subject>**[[ Semantic Reference Theory ]]</Subject>
                <Tabs here={"Semantics of Types & More"} about={"[[ Subject ]]( Semantic Reference Theory )"} by={"[[ Author ]]( My Library Log )"} />
            </Cover>
        );
    }
}
