import { Append, Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 October 2025](2025-10-13)</Date>
        </Dated>
        <Title>[[ 13 October 2025 ]]</Title>
        <Message
            at="2025-10-13T18:32:35.543844Z"
        >
            <Origin>16e11d1a-bb37-46e5-954f-97cb8514004c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Isn't the fix to make symbolize handle infinite loops? I thought I did that by having chemicals symbolized
                by their cid but it looks like I missed something
            </Paragraph>
        </Message>
        <Message
            at="2025-10-13T18:32:54.194885Z"
        >
            <Origin>63056e8a-8e58-4551-8278-c18d03497695</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're absolutely right! The <Word>
                    <Verbatim />
                    symbolize()
                </Word> function should already handle this because it converts <Word>
                    <Verbatim />
                    $Chemical
                </Word> instances to their <Word>
                    <Verbatim />
                    cid
                </Word>. Let me look at your <Word>
                    <Verbatim />
                    symbolize()
                </Word> function:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}function symbolize(value: any): string {
    return stringify(value, function(this: any, key: string, val: any): any {
        if (key === '') return val;
        if (val instanceof $Chemical) return val[$cid];  // ← Should prevent loops!
        if (this instanceof $Chemical) return this[$cid];
        if (typeof val === 'function') return undefined;
        if (val?.constructor?.name === 'Proxy') return '[Proxy]';
        return val;
    });
}`}
            </CodeBox>
            <Paragraph>
                The issue is that when <Word>
                    <Verbatim />
                    bondGet()
                </Word> is called, it's accessing properties to symbolize them, which triggers getters, which are themselves
                bonds that call <Word>
                    <Verbatim />
                    bondGet()
                </Word> again!
            </Paragraph>
            <Paragraph>Look at the sequence:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        bondGet()
                    </Word> for <Word>
                        <Verbatim />
                        catalogue
                    </Word> property
                </Line>
                <Line>
                    Calls <Word>
                        <Verbatim />
                        symbolize(value)
                    </Word> on the catalogue
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        symbolize
                    </Word> needs to serialize the catalogue object
                </Line>
                <Line>
                    It accesses <Word>
                        <Verbatim />
                        catalogue.library
                    </Word> (the getter)
                </Line>
                <Line>
                    The getter is a bond, so it calls <Word>
                        <Verbatim />
                        bondGet()
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        bondGet()
                    </Word> for <Word>
                        <Verbatim />
                        library
                    </Word> calls <Word>
                        <Verbatim />
                        symbolize()
                    </Word> on the parent Library
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        symbolize()
                    </Word> accesses <Word>
                        <Verbatim />
                        library.catalogue
                    </Word>
                </Line>
                <Line>Loop!</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real fix:
                </Word> Don't symbolize the value if it's a <Word>
                    <Verbatim />
                    $Chemical
                </Word> in <Word>
                    <Verbatim />
                    bondGet()
                </Word>:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}private bondGet() {
    const state = this._chemical[$state];
    let value = this._getter ? this._getter() : this._backingField;
    if (value instanceof $Chemical && value[$destroyed]) {
        if (this._setter) this._setter(value);
        return undefined;
    }
    if (this._chemical[$reactive]) {
        if (value instanceof $Chemical)
            this.bondForm(value);

        else if (Array.isArray(value)) {
            value.forEach(item => { 
                if (item instanceof $Chemical) 
                    this.bondForm(item);
            });
        }
        if (this.reactive && state) {
            // Don't call symbolize during bondGet - it triggers infinite loops!
            // Just store the cid directly for Chemicals
            if (value instanceof $Chemical) {
                state[this.bid] = value[$cid];
            } else {
                state[this.bid] = symbolize(value);
            }
        }
    }

    return value;
}`}
            </CodeBox>
            <Paragraph>
                This way, when storing a Chemical in state, you just store its <Word>
                    <Verbatim />
                    cid
                </Word> directly without calling <Word>
                    <Verbatim />
                    symbolize()
                </Word>, which prevents the infinite loop of getter calls.
            </Paragraph>
        </Message>
        <Append
            identifier="dynamic-children-tests"
            type=".ts"
        >
            ![[ dynamic-children-tests.ts ]]
        </Append>
        <Append
            identifier="styled-components-with-chemistry"
            type=".ts"
        >
            ![[ styled-components-with-chemistry.ts ]]
        </Append>
    </Chapter>
);
