import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ documents-shadow v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`class $Documents extends $ApplicationCollection<Documents, $Document, Document> {
    add(documentColorSpace?: $Ref<DocumentColorSpace>, width?: $Num, height?: $Num, numArtboards?: $Num, artboardLayout?: $Ref<DocumentArtboardLayout>, artboardSpacing?: $Num, artboardRowsOrCols?: $Num) { return this._add($ref(documentColorSpace), $ref(width), $ref(height), $ref(numArtboards), $ref(artboardLayout), $ref(artboardSpacing), $ref(artboardRowsOrCols)); }

    constructor() {
        super($app.$get(app => app.documents), "Documents", $app.activeDocument());
    }

    arrange(layoutStyle: $Ref<DocumentLayoutStyle>) { return this.$call(o => o.arrange, $ref(layoutStyle)); }

    static addDocument(startupPreset: $Str, presetSettings?: $Ref<DocumentPreset>, showOptionsDialog?: $Bool) { return $ref(Documents).$call(o => o.addDocument, $str(startupPreset), $ref(presetSettings), $ref(showOptionsDialog)); }
    static addDocumentWithDialogOption(startupPreset: $Str, showOptionsDialog?: $Bool) { return $ref(Documents).$call(o => o.addDocumentWithDialogOption, $str(startupPreset), $ref(showOptionsDialog)); }
}
`}
        </CodeBox>
    </Chapter>
);
