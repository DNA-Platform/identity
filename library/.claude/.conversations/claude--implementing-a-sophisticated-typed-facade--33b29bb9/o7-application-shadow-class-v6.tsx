import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Application Shadow Class v6 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $Application extends ApplicationItem<Application> {
    // Existing implementation
    document(): $Document { return this.activeDocument(); }
    documents(): $Documents { return $docref(this.$get(o => o.documents), this.typename(), this.document()); }
    activeDocument(): $Document { return $docref(this.$get(o => o.activeDocument), this.typename(), this.document()); }

    // Read-only properties
    PDFPresetsList() { return this.$get<string[]>(o => o.PDFPresetsList); }
    PPDFileList() { return this.$get<PPDFile[]>(o => o.PPDFileList); }
    browserAvailable() { return this.$get<boolean>(o => o.browserAvailable); }
    buildNumber() { return this.$get<string>(o => o.buildNumber); }
    colorSettingsList() { return this.$get<File[]>(o => o.colorSettingsList); }
    defaultColorSettings() { return this.$get<File>(o => o.defaultColorSettings); }
    flattenerPresetsList() { return this.$get<string[]>(o => o.flattenerPresetsList); }
    freeMemory() { return this.$get<number>(o => o.freeMemory); }
    locale() { return this.$get<string>(o => o.locale); }
    name() { return this.$get<string>(o => o.name); }
    path() { return this.$get<File>(o => o.path); }
    preferences() { return this.$get<Preferences>(o => o.preferences); }
    printPresetsList() { return this.$get<string[]>(o => o.printPresetsList); }
    printerList() { return this.$get<Printer[]>(o => o.printerList); }
    scriptingVersion() { return this.$get<string>(o => o.scriptingVersion); }
    startupPresetsList() { return this.$get<string[]>(o => o.startupPresetsList); }
    textFonts() { return this.$get<TextFonts>(o => o.textFonts); }
    tracingPresetsList() { return this.$get<string[]>(o => o.tracingPresetsList); }
    userAdobeID() { return this.$get<string>(o => o.userAdobeID); }
    userGUID() { return this.$get<string>(o => o.userGUID); }
    version() { return this.$get<string>(o => o.version); }
    visible() { return this.$get<boolean>(o => o.visible); }

    // Read-write properties
    coordinateSystem(newValue?: $Ref<CoordinateSystem>) { return this.$get<CoordinateSystem>(o => o.coordinateSystem, $ref(newValue)); }
    pasteRemembersLayers(newValue?: $Bool) { return this.$get<boolean>(o => o.pasteRemembersLayers, $ref(newValue)); }
    selection(newValue?: $Any) { return this.$get<any>(o => o.selection, $ref(newValue)); }
    userInteractionLevel(newValue?: $Ref<UserInteractionLevel>) { return this.$get<UserInteractionLevel>(o => o.userInteractionLevel, $ref(newValue)); }

    constructor() {
        super("app", "Application", undefined as any);
        if ($app) throw new Error("Application reference already defined");
    }

    // Methods
    aATAddItem(sessionIndex: $Num, destinationSequenceID: $Num, destinationIndex: $Num, srcItemIDData: $Str, type: $Str) { return this.$call(o => o.aATAddItem, $ref(sessionIndex), $ref(destinationSequenceID), $ref(destinationIndex), $str(srcItemIDData), $str(type)).$eval(); }
    aATClear() { return this.$call(o => o.aATClear).$eval(); }
    aATDuplicateItem(sessionIndex: $Num, item: $Str) { return this.$call(o => o.aATDuplicateItem, $ref(sessionIndex), $str(item)).$eval(); }
    aATEditItem(sessionIndex: $Num, item: $Str) { return this.$call(o => o.aATEditItem, $ref(sessionIndex), $str(item)).$eval(); }
    aATErrorsExist() { return this.$call(o => o.aATErrorsExist).$eval(); }
    aATExecuteSession() { this.$call(o => o.aATExecuteSession).$eval(); }
    aATExecuteSessionFromFile(file: $Ref<File>) { this.$call(o => o.aATExecuteSessionFromFile, $ref(file)).$eval(); }
    aATFileRelativeChanged(path: $Str, relative: $Str, newRelative: $Str) { return this.$call(o => o.aATFileRelativeChanged, $str(path), $str(relative), $str(newRelative)).$eval(); }
    aATGetEditorDialogFile() { return this.$call(o => o.aATGetEditorDialogFile).$eval(); }
    aATGetErrorDialogFile() { return this.$call(o => o.aATGetErrorDialogFile).$eval(); }
    aATGetListOfRelativePaths() { return this.$call(o => o.aATGetListOfRelativePaths).$eval(); }
    aATGetSession() { return this.$call(o => o.aATGetSession).$eval(); }
    aATLoadLibExtension() { return this.$call(o => o.aATLoadLibExtension).$eval(); }
    aATLoadModel() { return this.$call(o => o.aATLoadModel).$eval(); }
    aATLoadSessionFile() { return this.$call(o => o.aATLoadSessionFile).$eval(); }
    aATLoadUIExtension() { return this.$call(o => o.aATLoadUIExtension).$eval(); }
    aATMoveItem(sessionIndex: $Num, moveThisID: $Str, newSessionIndex: $Num, destinationSequenceID: $Str, destinationIndex: $Num) { return this.$call(o => o.aATMoveItem, $ref(sessionIndex), $str(moveThisID), $ref(newSessionIndex), $str(destinationSequenceID), $ref(destinationIndex)).$eval(); }
    aATRemoveItem(sessionIndex: $Num, item: $Str) { return this.$call(o => o.aATRemoveItem, $ref(sessionIndex), $str(item)).$eval(); }
    aATReplaceItem(sessionIndex: $Num, replaceThisID: $Num, srcItemIDData: $Str, type: $Str) { return this.$call(o => o.aATReplaceItem, $ref(sessionIndex), $ref(replaceThisID), $str(srcItemIDData), $str(type)).$eval(); }
    aATSaveAsSession() { return this.$call(o => o.aATSaveAsSession).$eval(); }
    aATSaveSession() { return this.$call(o => o.aATSaveSession).$eval(); }
    applyDataToItem(sessionIndex: $Num, item: $Str, data: $Str) { return this.$call(o => o.applyDataToItem, $ref(sessionIndex), $str(item), $str(data)).$eval(); }
    applySingleDataPointToItem(sessionIndex: $Num, item: $Str, dataID: $Str, data: $Str) { return this.$call(o => o.applySingleDataPointToItem, $ref(sessionIndex), $str(item), $str(dataID), $str(data)).$eval(); }
    beep() { this.$call(o => o.beep).$eval(); }
    beginSyncSettingsAutomationTest() { return this.$call(o => o.beginSyncSettingsAutomationTest).$eval(); }
    beginTypekitFontAutomationTest() { return this.$call(o => o.beginTypekitFontAutomationTest).$eval(); }
    concatenateMatrix(matrix: $Ref<Matrix>, secondMatrix: $Ref<Matrix>) { return this.$call(o => o.concatenateMatrix, $ref(matrix), $ref(secondMatrix)).$eval(); }
    concatenateRotationMatrix(matrix: $Ref<Matrix>, angle: $Num) { return this.$call(o => o.concatenateRotationMatrix, $ref(matrix), $ref(angle)).$eval(); }
    concatenateScaleMatrix(matrix: $Ref<Matrix>, scaleX?: $Num, scaleY?: $Num) { return this.$call(o => o.concatenateScaleMatrix, $ref(matrix), $ref(scaleX), $ref(scaleY)).$eval(); }
    concatenateTranslationMatrix(matrix: $Ref<Matrix>, deltaX?: $Num, deltaY?: $Num) { return this.$call(o => o.concatenateTranslationMatrix, $ref(matrix), $ref(deltaX), $ref(deltaY)).$eval(); }
    convertSampleColor(sourceColorSpace: $Ref<ImageColorSpace>, sourceColor: $Arr<number>, destColorSpace: $Ref<ImageColorSpace>, colorConvertPurpose: $Ref<ColorConvertPurpose>, sourceHasAlpha?: $Bool, destHasAlpha?: $Bool) { return this.$call(o => o.convertSampleColor, $ref(sourceColorSpace), $ref(sourceColor), $ref(destColorSpace), $ref(colorConvertPurpose), $ref(sourceHasAlpha), $ref(destHasAlpha)).$eval(); }
    copy() { this.$call(o => o.copy).$eval(); }
    cut() { this.$call(o => o.cut).$eval(); }
    deleteWorkspace(workspaceName: $Str) { return this.$call(o => o.deleteWorkspace, $str(workspaceName)).$eval(); }
    doScript(action: $Str, from: $Str, dialogs?: $Bool) { this.$call(o => o.doScript, $str(action), $str(from), $ref(dialogs)).$eval(); }
    dumpPGFFile(file: $Ref<File>, documentColorSpace?: $Ref<DocumentColorSpace>, pGFFile?: $Ref<File>) { return this.$call(o => o.dumpPGFFile, $ref(file), $ref(documentColorSpace), $ref(pGFFile)).$eval(); }
    executeMenuCommand(menuCommandString: $Str) { this.$call(o => o.executeMenuCommand, $str(menuCommandString)).$eval(); }
    getCCXUserJSONData(mode?: $Str) { return this.$call(o => o.getCCXUserJSONData, $str(mode)).$eval(); }
    getExecutionOutput() { return this.$call(o => o.getExecutionOutput).$eval(); }
    getHelloJSONData() { return this.$call(o => o.getHelloJSONData).$eval(); }
    getIdentityMatrix() { return this.$call(o => o.getIdentityMatrix).$eval(); }
    getPPDFileInfo(name: $Str) { return this.$call(o => o.getPPDFileInfo, $str(name)).$eval(); }
    getPresetFileOfType(presetType: $Ref<DocumentPresetType>) { return this.$call(o => o.getPresetFileOfType, $ref(presetType)).$eval(); }
    getPresetSettings(preset: $Str) { return this.$call(o => o.getPresetSettings, $str(preset)).$eval(); }
    getRotationMatrix(angle?: $Num) { return this.$call(o => o.getRotationMatrix, $ref(angle)).$eval(); }
    getScaleMatrix(scaleX?: $Num, scaleY?: $Num) { return this.$call(o => o.getScaleMatrix, $ref(scaleX), $ref(scaleY)).$eval(); }
    getScriptableHelpGroup() { return this.$call(o => o.getScriptableHelpGroup).$eval(); }
    getTranslationMatrix(deltaX?: $Num, deltaY?: $Num) { return this.$call(o => o.getTranslationMatrix, $ref(deltaX), $ref(deltaY)).$eval(); }
    getVersionString() { return this.$call(o => o.getVersionString).$eval(); }
    invertMatrix(matrix: $Ref<Matrix>) { return this.$call(o => o.invertMatrix, $ref(matrix)).$eval(); }
    isEqualMatrix(matrix: $Ref<Matrix>, secondMatrix: $Ref<Matrix>) { return this.$call(o => o.isEqualMatrix, $ref(matrix), $ref(secondMatrix)).$eval(); }
    isFillActive() { return this.$call(o => o.isFillActive).$eval(); }
    isSingularMatrix(matrix: $Ref<Matrix>) { return this.$call(o => o.isSingularMatrix, $ref(matrix)).$eval(); }
    isStrokeActive() { return this.$call(o => o.isStrokeActive).$eval(); }
    isTouchWorkspace() { return this.$call(o => o.isTouchWorkspace).$eval(); }
    isUserSharingAppUsageData() { return this.$call(o => o.isUserSharingAppUsageData).$eval(); }
    launchExtension(extensionID: $Str) { return this.$call(o => o.launchExtension, $str(extensionID)).$eval(); }
    loadAction(actionFilePath: $Ref<File>) { this.$call(o => o.loadAction, $ref(actionFilePath)).$eval(); }
    loadColorSettings(fileSpec: $Ref<File>) { this.$call(o => o.loadColorSettings, $ref(fileSpec)).$eval(); }
    open(file: $Ref<File>, documentColorSpace?: $Ref<DocumentColorSpace>, options?: $Any) { return this.$call(o => o.open, $ref(file), $ref(documentColorSpace), $ref(options)).$eval(); }
    openCloudLibraryAssetForEditing(assetURL: $Ref<File>, thumbnailURL: $Ref<File>, options?: $Any) { return this.$call(o => o.openCloudLibraryAssetForEditing, $ref(assetURL), $ref(thumbnailURL), $ref(options)).$eval(); }
    paste() { this.$call(o => o.paste).$eval(); }
    quit() { this.$call(o => o.quit).$eval(); }
    redo() { this.$call(o => o.redo).$eval(); }
    redraw() { this.$call(o => o.redraw).$eval(); }
    reflectCSAW(outputFolder: $Ref<File>) { this.$call(o => o.reflectCSAW, $ref(outputFolder)).$eval(); }
    resetWorkspace() { return this.$call(o => o.resetWorkspace).$eval(); }
    runAPITest(testName: $Str) { this.$call(o => o.runAPITest, $str(testName)).$eval(); }
    saveWorkspace(workspaceName: $Str) { return this.$call(o => o.saveWorkspace, $str(workspaceName)).$eval(); }
    sendScriptMessage(pluginName: $Str, messageSelector: $Str, inputString: $Str) { return this.$call(o => o.sendScriptMessage, $str(pluginName), $str(messageSelector), $str(inputString)).$eval(); }
    setThumbnailOptionsForCloudLibrary(options: $Any) { this.$call(o => o.setThumbnailOptionsForCloudLibrary, $ref(options)).$eval(); }
    showColorPicker(color: $Ref<Color>) { return this.$call(o => o.showColorPicker, $ref(color)).$eval(); }
    showPresets(fileSpec: $Ref<File>) { return this.$call(o => o.showPresets, $ref(fileSpec)).$eval(); }
    switchWorkspace(workspaceName: $Str) { return this.$call(o => o.switchWorkspace, $str(workspaceName)).$eval(); }
    translatePlaceholderText(text: $Str) { return this.$call(o => o.translatePlaceholderText, $str(text)).$eval(); }
    translateString(key: $Str, source: $Str) { return this.$call(o => o.translateString, $str(key), $str(source)).$eval(); }
    undo() { this.$call(o => o.undo).$eval(); }
    unloadAction(setName: $Str, actionName: $Str) { this.$call(o => o.unloadAction, $str(setName), $str(actionName)).$eval(); }

    // Static methods
    static addDocument(startupPreset: $Str, presetSettings?: $Ref<DocumentPreset>, showOptionsDialog?: $Bool) { return $ref(Application).$call(o => o.addDocument, $str(startupPreset), $ref(presetSettings), $ref(showOptionsDialog)); }
    static addDocumentWithDialogOption(startupPreset: $Str, showOptionsDialog?: $Bool) { return $ref(Application).$call(o => o.addDocumentWithDialogOption, $str(startupPreset), $ref(showOptionsDialog)); }
}`}
        </CodeBox>
    </Chapter>
);
