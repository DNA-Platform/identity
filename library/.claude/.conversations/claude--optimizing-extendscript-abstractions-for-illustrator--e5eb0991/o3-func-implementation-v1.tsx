import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ func-implementation v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}
class $Reference<Type = any> {
    // ... existing code ...

    $func<T = any>(selector: (o: Type) => T): $VariableReference<T> {
        // Parse the function like in $dot to get the operation
        const key = selector.toString();
        const ref = this._properties[key];
        if (ref) return ref as $VariableReference<T>;

        // Extract the operation from the function body
        const path = str(stringJoin(str(key).split(".").skip(1), ".")
            .split(";")
            .first())
            .replaceAll(" ", "")
            .s();

        // Create a new variable to hold the result
        const varName = $Reference.generateUniqueVariableName();
        
        // Create the effect that will execute the function
        const effect = new $Command(\`\${varName} = \${this.address()}.\${path};\`, this);
        
        // Create and return the variable reference for chaining
        return new $VariableReference<T>(varName, effect);
    }
}
`}
        </CodeBox>
    </Chapter>
);
