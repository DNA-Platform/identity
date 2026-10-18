import { Append, Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 November 2024](2024-11-21)</Date>
        </Dated>
        <Title>[[ 21 November 2024 ]]</Title>
        <Message
            at="2024-11-21T23:13:59.460395Z"
        >
            <Origin>079b68ac-7721-4d82-a967-72091748250c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We were in the middle of this and getting down those functions at the end. I was just suggesting you use
                evaluateNegativeIndex(index)+1 for negative indices so the insert and transfer map -1 to inserting at the
                end:
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-21T23:13:59.460395Z"
        >
            <Origin>3e7af3d6-11f3-4a4e-a846-14ced9a1d597</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah yes, let me write those array extension methods using evaluateNegativeIndex and the insight about using
                splice for end insertion:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}(Array as any)["__proto__"].insert = function(index: number, item: any): void {
    var self = this as Array<any>;
    var insertAt = evaluateNegativeIndex(index, self.length + 1);
    self.splice(insertAt, 0, item);
};

(Array as any)["__proto__"].insertMany = function(index: number, items: any[]): void {
    var self = this as Array<any>;
    var insertAt = evaluateNegativeIndex(index, self.length + 1);
    // ES5 compatible multiple argument splice
    var args = [insertAt, 0].concat(items);
    self.splice.apply(self, args);
};

(Array as any)["__proto__"].transfer = function(item: any, index: number): void {
    var self = this as Array<any>;
    var currentIndex = self.indexOf(item);
    if (currentIndex !== -1) {
        self.splice(currentIndex, 1);
    }
    self.insert(index, item);
};

(Array as any)["__proto__"].transferMany = function(items: any[], index: number): void {
    var self = this as Array<any>;
    for (var i = 0; i < items.length; i++) {
        var currentIndex = self.indexOf(items[i]);
        if (currentIndex !== -1) {
            self.splice(currentIndex, 1);
        }
    }
    self.insertMany(index, items);
};`}
            </CodeBox>
            <Paragraph>This way:</Paragraph>
            <Paragraph>
                <List />
                <Line>evaluateNegativeIndex handles all the index logic consistently</Line>
                <Line>-1 maps to length (end of array) via evaluateNegativeIndex</Line>
                <Line>Other negative indices get "insert after" semantics via evaluateNegativeIndex</Line>
                <Line>splice is used uniformly including for end insertion</Line>
                <Line>The ES5-compatible .apply pattern is used for insertMany's variable arguments</Line>
            </Paragraph>
            <Paragraph>Is this more what you were looking for?</Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
    </Chapter>
);
