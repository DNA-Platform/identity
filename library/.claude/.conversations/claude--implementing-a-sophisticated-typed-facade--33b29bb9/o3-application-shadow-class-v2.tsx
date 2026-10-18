import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Application Shadow Class v2 ]]</Title>
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
    coordinateSystem(newValue?: CoordinateSystem | Reference<CoordinateSystem>) { return this.$get<CoordinateSystem>(o => o.coordinateSystem, $ref(newValue)); }
    pasteRemembersLayers(newValue?: boolean | Reference<boolean>) { return this.$get<boolean>(o => o.pasteRemembersLayers, $ref(newValue)); }
    selection(newValue?: any | Reference<any>) { return this.$get<any>(o => o.selection, $ref(newValue)); }
    userInteractionLevel(newValue?: UserInteractionLevel | Reference<UserInteractionLevel>) { return this.$get<UserInteractionLevel>(o => o.userInteractionLevel, $ref(newValue)); }

    constructor() {
        super("app", "Application", undefined as any);
        if ($app) throw new Error("Application reference already defined");
    }

    // Methods
    aATAddItem(sessionIndex: number | Reference<number>, destinationSequenceID: number | Reference<number>, destinationIndex: number | Reference<number>, srcItemIDData: string | Reference<string>, type: string | Reference<string>) { return this.$call(o => o.aATAddItem, $ref(sessionIndex), $ref(destinationSequenceID), $ref(destinationIndex), $ref(srcItemIDData), $ref(type)).$eval(); }
    aATClear() { return this.$call(o => o.aATClear).$eval(); }
    aATDuplicateItem(sessionIndex: number | Reference<number>, item: string | Reference<string>) { return this.$call(o => o.aATDuplicateItem, $ref(sessionIndex), $ref(item)).$eval(); }
    aATEditItem(sessionIndex: number | Reference<number>, item: string | Reference<string>) { return this.$call(o => o.aATEditItem, $ref(sessionIndex), $ref(item)).$eval(); }
    aATErrorsExist() { return this.$call(o => o.aATErrorsExist).$eval(); }
    aATExecuteSession() { this.$call(o => o.aATExecuteSession).$eval(); }
    aATExecuteSessionFromFile(file: File | Reference<File>) { this.$call(o => o.aATExecuteSessionFromFile, $ref(file)).$eval(); }
    aATFileRelativeChanged(path: string | Reference<string>, relative: string | Reference<string>, newRelative: string | Reference<string>) { return this.$call(o => o.aATFileRelativeChanged, $ref(path), $ref(relative), $ref(newRelative)).$eval(); }
        aATGetEditorDialogFile() { return this.$call(o => o.aATGetEditorDialogFile).$eval(); }
    aATGetErrorDialogFile() { return this.$call(o => o.aATGetErrorDialogFile).$eval(); }
    aATGetListOfRelativePaths() { return this.$call(o => o.aATGetListOfRelativePaths).$eval(); }
    aATGetSession() { return this.$call(o => o.aATGetSession).$eval(); }
    aATLoadLibExtension() { return this.$call(o => o.aATLoadLibExtension).$eval(); }
    aATLoadModel() { return this.$call(o => o.aATLoadModel).$eval(); }
    aATLoadSessionFile() { return this.$call(o => o.aATLoadSessionFile).$eval(); }
    aATLoadUIExtension() { return this.$call(o => o.aATLoadUIExtension).$eval(); }
    aATMoveItem(sessionIndex: number | Reference<number>, moveThisID: string | Reference<string>, newSessionIndex: number | Reference<number>, destinationSequenceID: string | Reference<string>, destinationIndex: number | Reference<number>) { return this.$call(o => o.aATMoveItem, $ref(sessionIndex), $ref(moveThisID), $ref(newSessionIndex), $ref(destinationSequenceID), $ref(destinationIndex)).$eval(); }
    aATRemoveItem(sessionIndex: number | Reference<number>, item: string | Reference<string>) { return this.$call(o => o.aATRemoveItem, $ref(sessionIndex), $ref(item)).$eval(); }
    aATReplaceItem(sessionIndex: number | Reference<number>, replaceThisID: number | Reference<number>, srcItemIDData: string | Reference<string>, type: string | Reference<string>) { return this.$call(o => o.aATReplaceItem, $ref(sessionIndex), $ref(replaceThisID), $ref(srcItemIDData), $ref(type)).$eval(); }
    aATSaveAsSession() { return this.$call(o => o.aATSaveAsSession).$eval(); }
    aATSaveSession() { return this.$call(o => o.aATSaveSession).$eval(); }
    applyDataToItem(sessionIndex: number | Reference<number>, item: string | Reference<string>, data: string | Reference<string>) { return this.$call(o => o.applyDataToItem, $ref(sessionIndex), $ref(item), $ref(data)).$eval(); }
    applySingleDataPointToItem(sessionIndex: number | Reference<number>, item: string | Reference<string>, dataID: string | Reference<string>, data: string | Reference<string>) { return this.$call(o => o.applySingleDataPointToItem, $ref(sessionIndex), $ref(item), $ref(dataID), $ref(data)).$eval(); }
    beep() { this.$call(o => o.beep).$eval(); }
    beginSyncSettingsAutomationTest() { return this.$call(o => o.beginSyncSettingsAutomationTest).$eval(); }
    beginTypekitFontAutomationTest() { return this.$call(o => o.beginTypekitFontAutomationTest).$eval(); }
    concatenateMatrix(matrix: Matrix | Reference<Matrix>, secondMatrix: Matrix | Reference<Matrix>) { return this.$call(o => o.concatenateMatrix, $ref(matrix), $ref(secondMatrix)).$eval(); }
    concatenateRotationMatrix(matrix: Matrix | Reference<Matrix>, angle: number | Reference<number>) { return this.$call(o => o.concatenateRotationMatrix, $ref(matrix), $ref(angle)).$eval(); }
    concatenateScaleMatrix(matrix: Matrix | Reference<Matrix>, scaleX?: number | Reference<number>, scaleY?: number | Reference<number>) { return this.$call(o => o.concatenateScaleMatrix, $ref(matrix), $ref(scaleX), $ref(scaleY)).$eval(); }
    concatenateTranslationMatrix(matrix: Matrix | Reference<Matrix>, deltaX?: number | Reference<number>, deltaY?: number | Reference<number>) { return this.$call(o => o.concatenateTranslationMatrix, $ref(matrix), $ref(deltaX), $ref(deltaY)).$eval(); }
    convertSampleColor(sourceColorSpace: ImageColorSpace | Reference<ImageColorSpace>, sourceColor: number[] | Reference<number[]>, destColorSpace: ImageColorSpace | Reference<ImageColorSpace>, colorConvertPurpose: ColorConvertPurpose | Reference<ColorConvertPurpose>, sourceHasAlpha?: boolean | Reference<boolean>, destHasAlpha?: boolean | Reference<boolean>) { return this.$call(o => o.convertSampleColor, $ref(sourceColorSpace), $ref(sourceColor), $ref(destColorSpace), $ref(colorConvertPurpose), $ref(sourceHasAlpha), $ref(destHasAlpha)).$eval(); }
    copy() { this.$call(o => o.copy).$eval(); }
    cut() { this.$call(o => o.cut).$eval(); }
    deleteWorkspace(workspaceName: string | Reference<string>) { return this.$call(o => o.deleteWorkspace, $ref(workspaceName)).$eval(); }
    doScript(action: string | Reference<string>, from: string | Reference<string>, dialogs?: boolean | Reference<boolean>) { this.$call(o => o.doScript, $ref(action), $ref(from), $ref(dialogs)).$eval(); }
    dumpPGFFile(file: File | Reference<File>, documentColorSpace?: DocumentColorSpace | Reference<DocumentColorSpace>, pGFFile?: File | Reference<File>) { return this.$call(o => o.dumpPGFFile, $ref(file), $ref(documentColorSpace), $ref(pGFFile)).$eval(); }
    executeMenuCommand(menuCommandString: string | Reference<string>) { this.$call(o => o.executeMenuCommand, $ref(menuCommandString)).$eval(); }
    getCCXUserJSONData(mode?: string | Reference<string>) { return this.$call(o => o.getCCXUserJSONData, $ref(mode)).$eval(); }
    getExecutionOutput() { return this.$call(o => o.getExecutionOutput).$eval(); }
    getHelloJSONData() { return this.$call(o => o.getHelloJSONData).$eval(); }
    getIdentityMatrix() { return this.$call(o => o.getIdentityMatrix).$eval(); }
    getPPDFileInfo(name: string | Reference<string>) { return this.$call(o => o.getPPDFileInfo, $ref(name)).$eval(); }
    getPresetFileOfType(presetType: DocumentPresetType | Reference<DocumentPresetType>) { return this.$call(o => o.getPresetFileOfType, $ref(presetType)).$eval(); }
    getPresetSettings(preset: string | Reference<string>) { return this.$call(o => o.getPresetSettings, $ref(preset)).$eval(); }
    getRotationMatrix(angle?: number | Reference<number>) { return this.$call(o => o.getRotationMatrix, $ref(angle)).$eval(); }
    getScaleMatrix(scaleX?: number | Reference<number>, scaleY?: number | Reference<number>) { return this.$call(o => o.getScaleMatrix, $ref(scaleX), $ref(scaleY)).$eval(); }
    getScriptableHelpGroup() { return this.$call(o => o.getScriptableHelpGroup).$eval(); }
    getTranslationMatrix(deltaX?: number | Reference<number>, deltaY?: number | Reference<number>) { return this.$call(o => o.getTranslationMatrix, $ref(deltaX), $ref(deltaY)).$eval(); }
    getVersionString() { return this.$call(o => o.getVersionString).$eval(); }
    invertMatrix(matrix: Matrix | Reference<Matrix>) { return this.$call(o => o.invertMatrix, $ref(matrix)).$eval(); }
    isEqualMatrix(matrix: Matrix | Reference<Matrix>, secondMatrix: Matrix | Reference<Matrix>) { return this.$call(o => o.isEqualMatrix, $ref(matrix), $ref(secondMatrix)).$eval(); }
    isFillActive() { return this.$call(o => o.isFillActive).$eval(); }
    isSingularMatrix(matrix: Matrix | Reference<Matrix>) { return this.$call(o => o.isSingularMatrix, $ref(matrix)).$eval(); }
    isStrokeActive() { return this.$call(o => o.isStrokeActive).$eval(); }
    isTouchWorkspace() { return this.$call(o => o.isTouchWorkspace).$eval(); }
    isUserSharingAppUsageData() { return this.$call(o => o.isUserSharingAppUsageData).$eval(); }
    launchExtension(extensionID: string | Reference<string>) { return this.$call(o => o.launchExtension, $ref(extensionID)).$eval(); }
    loadAction(actionFilePath: File | Reference<File>) { this.$call(o => o.loadAction, $ref(actionFilePath)).$eval(); }
    loadColorSettings(fileSpec: File | Reference<File>) { this.$call(o => o.loadColorSettings, $ref(fileSpec)).$eval(); }
    open(file: File | Reference<File>, documentColorSpace?: DocumentColorSpace | Reference<DocumentColorSpace>, options?: any | Reference<any>) { return this.$call(o => o.open, $ref(file), $ref(documentColorSpace), $ref(options)).$eval(); }
    openCloudLibraryAssetForEditing(assetURL: File | Reference<File>, thumbnailURL: File | Reference<File>, options?: any | Reference<any>) { return this.$call(o => o.openCloudLibraryAssetForEditing, $ref(assetURL), $ref(thumbnailURL), $ref(options)).$eval(); }
    paste() { this.$call(o => o.paste).$eval(); }
    quit() { this.$call(o => o.quit).$eval(); }
    redo() { this.$call(o => o.redo).$eval(); }
    redraw() { this.$call(o => o.redraw).$eval(); }
    reflectCSAW(outputFolder: File | Reference<File>) { this.$call(o => o.reflectCSAW, $ref(outputFolder)).$eval(); }
    resetWorkspace() { return this.$call(o => o.resetWorkspace).$eval(); }
    runAPITest(testName: string | Reference<string>) { this.$call(o => o.runAPITest, $ref(testName)).$eval(); }
    saveWorkspace(workspaceName: string | Reference<string>) { return this.$call(o => o.saveWorkspace, $ref(workspaceName)).$eval(); }
    sendScriptMessage(pluginName: string | Reference<string>, messageSelector: string | Reference<string>, inputString: string | Reference<string>) { return this.$call(o => o.sendScriptMessage, $ref(pluginName), $ref(messageSelector), $ref(inputString)).$eval(); }
    setThumbnailOptionsForCloudLibrary(options: any | Reference<any>) { this.$call(o => o.setThumbnailOptionsForCloudLibrary, $ref(options)).$eval(); }
    showColorPicker(color: Color | Reference<Color>) { return this.$call(o => o.showColorPicker, $ref(color)).$eval(); }
    showPresets(fileSpec: File | Reference<File>) { return this.$call(o => o.showPresets, $ref(fileSpec)).$eval(); }
    switchWorkspace(workspaceName: string | Reference<string>) { return this.$call(o => o.switchWorkspace, $ref(workspaceName)).$eval(); }
    translatePlaceholderText(text: string | Reference<string>) { return this.$call(o => o.translatePlaceholderText, $ref(text)).$eval(); }
    translateString(key: string | Reference<string>, source: string | Reference<string>) { return this.$call(o => o.translateString, $ref(key), $ref(source)).$eval(); }
    undo() { this.$call(o => o.undo).$eval(); }
    unloadAction(setName: string | Reference<string>, actionName: string | Reference<string>) { this.$call(o => o.unloadAction, $ref(setName), $ref(actionName)).$eval(); }

    // Static properties
    static addDocument(startupPreset: string | Reference<string>, presetSettings?: DocumentPreset | Reference<DocumentPreset>, showOptionsDialog?: boolean | Reference<boolean>) { return $ref(Documents).$get(o => o.addDocument, $ref(startupPreset), $ref(presetSettings), $ref(showOptionsDialog)); }
    static addDocumentWithDialogOption(startupPreset: string | Reference<string>, showOptionsDialog?: boolean | Reference<boolean>) { return $ref(Documents).$get(o => o.addDocumentWithDialogOption, $ref(startupPreset), $ref(showOptionsDialog)); }
}`}
        </CodeBox>
    </Chapter>
);
