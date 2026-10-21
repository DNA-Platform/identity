class $Application extends ApplicationItem<Application> {
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
    aATAddItem(sessionIndex: $Num, destinationSequenceID: $Num, destinationIndex: $Num, srcItemIDData: $Str, type: $Str) { return this.$call(o => o.aATAddItem, $ref(sessionIndex), $ref(destinationSequenceID), $ref(destinationIndex), $ref(srcItemIDData), $ref(type)).$eval(); }
    aATClear() { return this.$call(o => o.aATClear).$eval(); }
    aATDuplicateItem(sessionIndex: $Num, item: $Str) { return this.$call(o => o.aATDuplicateItem, $ref(sessionIndex), $ref(item)).$eval(); }
    aATEditItem(sessionIndex: $Num, item: $Str) { return this.$call(o => o.aATEditItem, $ref(sessionIndex), $ref(item)).$eval(); }
    aATErrorsExist() { return this.$call(o => o.aATErrorsExist).$eval(); }
    aATExecuteSession() { this.$call(o => o.aATExecuteSession).$eval(); }
    aATExecuteSessionFromFile(file: $Ref<File>) { this.$call(o => o.aATExecuteSessionFromFile, $ref(file)).$eval(); }
    aATFileRelativeChanged(path: $Str, relative: $Str, newRelative: $Str) { return this.$call(o => o.aATFileRelativeChanged, $ref(path), $ref(relative), $ref(newRelative)).$eval(); }
    // ... continuing with remaining methods using new type aliases

    // Static methods
    static addDocument(startupPreset: $Str, presetSettings?: $Ref<DocumentPreset>, showOptionsDialog?: $Bool) { return $ref(Application).$call(o => o.addDocument, $ref(startupPreset), $ref(presetSettings), $ref(showOptionsDialog)); }
    static addDocumentWithDialogOption(startupPreset: $Str, showOptionsDialog?: $Bool) { return $ref(Application).$call(o => o.addDocumentWithDialogOption, $ref(startupPreset), $ref(showOptionsDialog)); }
}