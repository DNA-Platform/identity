import { $Chapter, Author, Cover, Ref, Subject, Title } from '@dna-platform/public';
import { Chrome, Tabs } from '../../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>[[ Claude&rsquo;s Library Importer ]] $[ ]( Claude &amp; Our Projects )</Title>
                <Author>*[[ Author: Doug ]]( My Library Log )</Author>
                <Subject>**[[ Claude &amp; Our Projects ]]</Subject>
                <Tabs here={"Claude’s Library Importer"} about={"[[ Subject ]]( Claude & Our Projects )"} by={"[[ Author ]]( My Library Log )"} />
            </Cover>
        );
    }
}
