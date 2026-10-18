import { Chapter, Date, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ dollar-reference v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $$ extends $Reference<$> {
    // Read-only properties
    build() { return this.$get<string>(o => o.build); }
    buildDate() { return this.$get<Date>(o => o.buildDate); }
    engineName() { return this.$get<string>(o => o.engineName); }
    fileName() { return this.$get<string>(o => o.fileName); }
    global() { return this.$get<any>(o => o.global); }
    hiresTimer() { return this.$get<number>(o => o.hiresTimer); }
    includePath() { return this.$get<string>(o => o.includePath); }
    line() { return this.$get<number>(o => o.line); }
    os() { return this.$get<string>(o => o.os); }
    screens() { return this.$get<object[]>(o => o.screens); }
    stack() { return this.$get<string>(o => o.stack); }
    version() { return this.$get<string>(o => o.version); }

    // Read-write properties
    decimalPoint(newValue?: $Str) { return this.$get<string>(o => o.decimalPoint, $str(newValue)); }
    error(newValue?: $Ref<Error>) { return this.$get<Error>(o => o.error, $ref(newValue)); }
    flags(newValue?: $Num) { return this.$get<number>(o => o.flags, $ref(newValue)); }
    level(newValue?: $Num) { return this.$get<number>(o => o.level, $ref(newValue)); }
    locale(newValue?: $Str) { return this.$get<string>(o => o.locale, $str(newValue)); }
    localize(newValue?: $Bool) { return this.$get<boolean>(o => o.localize, $ref(newValue)); }
    memCache(newValue?: $Num) { return this.$get<number>(o => o.memCache, $ref(newValue)); }
    strict(newValue?: $Any) { return this.$get<any>(o => o.strict, $ref(newValue)); }

    // Methods
    about() { return this.$call(o => o.about).$eval(); }
    bp(condition?: $Any) { this.$call(o => o.bp, $ref(condition)).$eval(); }
    colorPicker(color: $Num) { return this.$call(o => o.colorPicker, $ref(color)).$eval(); }
    evalFile(file: $Ref<File>, timeout?: $Num) { return this.$call(o => o.evalFile, $ref(file), $ref(timeout)).$eval(); }
    gc() { this.$call(o => o.gc).$eval(); }
    getenv(name: $Str) { return this.$call(o => o.getenv, $str(name)).$eval(); }
    setenv(name: $Str, value: $Str) { this.$call(o => o.setenv, $str(name), $str(value)).$eval(); }
    sleep(msecs: $Num) { this.$call(o => o.sleep, $ref(msecs)).$eval(); }
    toString() { return this.$call(o => o.toString).$eval(); }
    write(text: $Any) { this.$call(o => o.write, $ref(text)).$eval(); }
    writeln(text: $Any) { this.$call(o => o.writeln, $ref(text)).$eval(); }

    // Static utilities
    static global<T = any>(): $Reference<T> { return $ref($); }
    static ref<T = any>(expression: string | $Reference): $Reference<T> { return new $Reference<T>(expression); }
    static str(...parts: ($Reference | $Str | string)[]): $StringLiteralReference { return new $StringLiteralReference($str(...parts)); }
    static arr<T = any>(array: ($Reference | T)[]): $ArrayLiteralReference<T> { return new $ArrayLiteralReference(array); }
    static var<T = any>(name: string): $VariableReference<T> { return new $VariableReference<T>(name); }
    static eval(cmd: $Command | $Reference | string, onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void { $eval(cmd, onComplete, onError); }
    static sync(onComplete?: OnCompleteHandler, onError?: OnErrorHandler): void { $sync(onComplete, onError); }
}`}
        </CodeBox>
    </Chapter>
);
