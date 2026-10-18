class $$ {
    private static _$$ = $ref($);

    // Read-only properties
    static build() { return this._$$.$get<string>(o => o.build); }
    static buildDate() { return this._$$.$get<Date>(o => o.buildDate); }
    static engineName() { return this._$$.$get<string>(o => o.engineName); }
    static fileName() { return this._$$.$get<string>(o => o.fileName); }
    static global() { return this._$$.$get<any>(o => o.global); }
    static hiresTimer() { return this._$$.$get<number>(o => o.hiresTimer); }
    static includePath() { return this._$$.$get<string>(o => o.includePath); }
    static line() { return this._$$.$get<number>(o => o.line); }
    static os() { return this._$$.$get<string>(o => o.os); }
    static screens() { return this._$$.$get<object[]>(o => o.screens); }
    static stack() { return this._$$.$get<string>(o => o.stack); }
    static version() { return this._$$.$get<string>(o => o.version); }

    // Read-write properties
    static decimalPoint(newValue?: $Str) { return this._$$.$get<string>(o => o.decimalPoint, $str(newValue)); }
    static error(newValue?: $Ref<Error>) { return this._$$.$get<Error>(o => o.error, $ref(newValue)); }
    static flags(newValue?: $Num) { return this._$$.$get<number>(o => o.flags, $ref(newValue)); }
    static level(newValue?: $Num) { return this._$$.$get<number>(o => o.level, $ref(newValue)); }
    static locale(newValue?: $Str) { return this._$$.$get<string>(o => o.locale, $str(newValue)); }
    static localize(newValue?: $Bool) { return this._$$.$get<boolean>(o => o.localize, $ref(newValue)); }
    static memCache(newValue?: $Num) { return this._$$.$get<number>(o => o.memCache, $ref(newValue)); }
    static strict(newValue?: $Any) { return this._$$.$get<any>(o => o.strict, $ref(newValue)); }

    // Methods
    static about() { return this._$$.$call(o => o.about).$eval(); }
    static bp(condition?: $Any) { this._$$.$call(o => o.bp, $ref(condition)).$eval(); }
    static colorPicker(color: $Num) { return this._$$.$call(o => o.colorPicker, $ref(color)).$eval(); }
    static evalFile(file: $Ref<File>, timeout?: $Num) { return this._$$.$call(o => o.evalFile, $ref(file), $ref(timeout)).$eval(); }
    static gc() { this._$$.$call(o => o.gc).$eval(); }
    static getenv(name: $Str) { return this._$$.$call(o => o.getenv, $str(name)).$eval(); }
    static setenv(name: $Str, value: $Str) { this._$$.$call(o => o.setenv, $str(name), $str(value)).$eval(); }
    static sleep(msecs: $Num) { this._$$.$call(o => o.sleep, $ref(msecs)).$eval(); }
    static toString() { return this._$$.$call(o => o.toString).$eval(); }
    static write(text: $Any) { this._$$.$call(o => o.write, $ref(text)).$eval(); }
    static writeln(text: $Any) { this._$$.$call(o => o.writeln, $ref(text)).$eval(); }

    // Reference utilities
    static ref<T = any>(expression: string | $Reference): $Reference<T> { return new $Reference<T>(expression); }
    static str(...parts: ($Reference | $Str | string)[]): $StringLiteralReference { return new $StringLiteralReference($str(...parts)); }
    static arr<T = any>(array: ($Reference | T)[]): $ArrayLiteralReference<T> { return new $ArrayLiteralReference(array); }
    static var<T = any>(name: string): $VariableReference<T> { return new $VariableReference<T>(name); }
    static eval(cmd: $Command | $Reference | string, onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void { $eval(cmd, onComplete, onError); }
    static sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void { $sync(onComplete, onError); }
}