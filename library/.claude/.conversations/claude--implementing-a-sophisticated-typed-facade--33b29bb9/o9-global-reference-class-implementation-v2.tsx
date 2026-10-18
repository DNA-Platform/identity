import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Global Reference Class Implementation v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $$ extends $Reference<$> {
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
