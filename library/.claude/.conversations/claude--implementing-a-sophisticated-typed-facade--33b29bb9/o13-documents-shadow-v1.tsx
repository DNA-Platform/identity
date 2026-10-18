import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ documents-shadow v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`class $Documents extends $ApplicationCollection<Documents, $Document, Document> {
    document(): $Document { return this.app().activeDocument(); }

    // Methods extending base class collection functionality
    add(documentColorSpace?: $Ref<DocumentColorSpace>, width?: $Num, height?: $Num, numArtboards?: $Num, artboardLayout?: $Ref<DocumentArtboardLayout>, artboardSpacing?: $Num, artboardRowsOrCols?: $Num) { return this.$call(o => o.add, $ref(documentColorSpace), $ref(width), $ref(height), $ref(numArtboards), $ref(artboardLayout), $ref(artboardSpacing), $ref(artboardRowsOrCols)); }
    arrange(layoutStyle: $Ref<DocumentLayoutStyle>) { return this.$call(o => o.arrange, $ref(layoutStyle)); }

    // Static methods using the ClassReference pattern
    static addDocument(startupPreset: $Str, presetSettings?: $Ref<DocumentPreset>, showOptionsDialog?: $Bool) { return $ref(Documents).$call(o => o.addDocument, $str(startupPreset), $ref(presetSettings), $ref(showOptionsDialog)); }
    static addDocumentWithDialogOption(startupPreset: $Str, showOptionsDialog?: $Bool) { return $ref(Documents).$call(o => o.addDocumentWithDialogOption, $str(startupPreset), $ref(showOptionsDialog)); }

    constructor() {
        super($app.$get(app => app.documents), "Documents", $app.activeDocument());
    }
}`}
        </CodeBox>
    </Chapter>
);
