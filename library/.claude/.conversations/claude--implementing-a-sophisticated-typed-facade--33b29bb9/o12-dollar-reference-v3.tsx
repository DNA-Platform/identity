import { Chapter, Date, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ dollar-reference v3 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $$ {
    private static _$$ = new $Reference<$>($);

    // Read-only properties remain the same as they were correct
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

    // Read-write properties remain the same as they were correct
    static decimalPoint(newValue?: $Str) { return this._$$.$get<string>(o => o.decimalPoint, $str(newValue)); }
    static error(newValue?: $Ref<Error>) { return this._$$.$get<Error>(o => o.error, $ref(newValue)); }
    static flags(newValue?: $Num) { return this._$$.$get<number>(o => o.flags, $ref(newValue)); }
    static level(newValue?: $Num) { return this._$$.$get<number>(o => o.level, $ref(newValue)); }
    static locale(newValue?: $Str) { return this._$$.$get<string>(o => o.locale, $str(newValue)); }
    static localize(newValue?: $Bool) { return this._$$.$get<boolean>(o => o.localize, $ref(newValue)); }
    static memCache(newValue?: $Num) { return this._$$.$get<number>(o => o.memCache, $ref(newValue)); }
    static strict(newValue?: $Any) { return this._$$.$get<any>(o => o.strict, $ref(newValue)); }

    // Methods - now return the call reference without evaluation
    static about() { return this._$$.$call(o => o.about); }
    static bp(condition?: $Any) { return this._$$.$call(o => o.bp, $ref(condition)); }
    static colorPicker(color: $Num) { return this._$$.$call(o => o.colorPicker, $ref(color)); }
    static evalFile(file: $Ref<File>, timeout?: $Num) { return this._$$.$call(o => o.evalFile, $ref(file), $ref(timeout)); }
    static gc() { return this._$$.$call(o => o.gc); }
    static getenv(name: $Str) { return this._$$.$call(o => o.getenv, $str(name)); }
    static setenv(name: $Str, value: $Str) { return this._$$.$call(o => o.setenv, $str(name), $str(value)); }
    static sleep(msecs: $Num) { return this._$$.$call(o => o.sleep, $ref(msecs)); }
    static toString() { return this._$$.$call(o => o.toString); }
    static write(text: $Any) { return this._$$.$call(o => o.write, $ref(text)); }
    static writeln(text: $Any) { return this._$$.$call(o => o.writeln, $ref(text)); }
}`}
        </CodeBox>
    </Chapter>
);
