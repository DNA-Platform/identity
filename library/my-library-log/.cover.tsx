import { $Chapter, Author, Cover, Ref, Subject, Title } from '@dna-platform/public';
import { Autobiography, Chrome, Tabs } from '../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>[[ My Library Log ]] $[ ]( Dougs Library )</Title>
                <Author>*[[ Author: Doug ]]( My Library Log )</Author>
                <Subject>**[[ Doug ]]( Dougs Library )</Subject>
                <Autobiography />
                <Tabs here={"My Library Log"} about={"[[ Subject ]]( Dougs Library )"} by={"[[ Author ]]( My Library Log )"} />
            </Cover>
        );
    }
}
