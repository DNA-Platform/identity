import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ factory-tests v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $FactoryMethodTests extends TestClass {
    testRef() {
        var ref = $ref("$testApp.name");
        var actual = ref.address();
        var expected = "$testApp.name";
        var m = this.assertEquals(actual, expected, "$ref creates reference from string", false); if (m) throw m;

        var refFromRef = $ref(ref);
        var actual = refFromRef.address();
        var expected = "$testApp.name";
        var m = this.assertEquals(actual, expected, "$ref returns existing reference unchanged", false); if (m) throw m;

        var classRef = $ref(Application);
        var actual = classRef instanceof $ClassReference;
        var m = this.assertEquals(actual, true, "$ref creates class reference for constructor", false); if (m) throw m;

        var arrayRef = $ref([1, 2, 3]);
        var actual = arrayRef instanceof $ArrayLiteralReference;
        var m = this.assertEquals(actual, true, "$ref creates array reference for array", false); if (m) throw m;
    }

    testStr() {
        var ref = $str("test");
        var actual = ref.address();
        var expected = '"test"';
        var m = this.assertEquals(actual, expected, "$str creates string literal reference", false); if (m) throw m;

        var multiRef = $str("hello", "world");
        var actual = multiRef.address();
        var expected = '"hello world"';
        var m = this.assertEquals(actual, expected, "$str joins multiple parts with spaces", false); if (m) throw m;

        var refStr = $str(new $StringLiteralReference("test"));
        var actual = refStr.address();
        var expected = '"test"';
        var m = this.assertEquals(actual, expected, "$str returns existing string literal unchanged", false); if (m) throw m;
    }

    testCmd() {
        var cmd = $cmd("$testApp.x = 5;");
        var actual = cmd.expression();
        var expected = "$testApp.x = 5;";
        var m = this.assertEquals(actual, expected, "$cmd creates command from string", false); if (m) throw m;

        var refCmd = $cmd($ref("$testApp.name"));
        var actual = refCmd.expression();
        var expected = "$testApp.name;";
        var m = this.assertEquals(actual, expected, "$cmd creates command from reference", false); if (m) throw m;

        var cmdFromCmd = $cmd(cmd);
        var actual = cmdFromCmd.expression();
        var expected = "$testApp.x = 5;";
        var m = this.assertEquals(actual, expected, "$cmd returns existing command unchanged", false); if (m) throw m;
    }

    testArr() {
        var ref = $arr([1, "test", true]);
        var actual = ref.address();
        var expected = '[1,"test",true]';
        var m = this.assertEquals(actual, expected, "$arr creates array literal reference", false); if (m) throw m;

        var emptyRef = $arr([]);
        var actual = emptyRef.address();
        var expected = "[]";
        var m = this.assertEquals(actual, expected, "$arr handles empty array", false); if (m) throw m;

        var arrayA = f([1, 2, 3]);
        var refFromA = $arr(arrayA);
        var actual = refFromA.address();
        var expected = "[1,2,3]";
        var m = this.assertEquals(actual, expected, "$arr accepts A<T> input", false); if (m) throw m;
    }
}`}
        </CodeBox>
    </Chapter>
);
