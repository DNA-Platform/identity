import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Task Queue using XMP v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`interface Document {
    XMPString: string;
}

declare var XMPMeta: any;
declare var XMPConst: any;
declare function setDefaultXMLNamespace(ns: string): void;

var TaskQueue = function(document: Document) {
    var self = this;
    var TASKS_NS = "http://ns.adobe.com/tasks/1.0/";
    var xmp: any;  // XMPMeta instance
    var cachedFirstTask: string | undefined;
    
    // Initialize
    function init() {
        setDefaultXMLNamespace(TASKS_NS);
        xmp = new XMPMeta(document.XMPString);
    }

    // Private method to get array size - used internally only when needed
    function getArraySize(): number {
        try {
            return xmp.countArrayItems(TASKS_NS, "Queue") || 0;
        } catch (e) {
            return 0;
        }
    }

    this.peek = function(): string | undefined {
        if (typeof cachedFirstTask !== 'undefined') {
            return cachedFirstTask;
        }

        try {
            cachedFirstTask = xmp.getArrayItem(TASKS_NS, "Queue", 1);
            return cachedFirstTask;
        } catch (e) {
            return undefined;
        }
    };

    this.dequeue = function(): string | undefined {
        var firstTask = self.peek();
        if (!firstTask) {
            return undefined;
        }

        try {
            var count = getArraySize();
            // Shift array elements
            for (var i = 1; i < count; i++) {
                var nextItem = xmp.getArrayItem(TASKS_NS, "Queue", i + 1);
                xmp.setArrayItem(TASKS_NS, "Queue", i, nextItem);
            }
            xmp.deleteArrayItem(TASKS_NS, "Queue", count);
            
            // Update document's XMP
            document.XMPString = xmp.serialize();
            
            // Clear cache since we modified the queue
            cachedFirstTask = undefined;
            
            return firstTask;
        } catch (e) {
            return undefined;
        }
    };

    this.enqueue = function(task: string): void {
        try {
            var count = getArraySize();
            
            // If array doesn't exist, create it
            if (count === 0) {
                xmp.setProperty(TASKS_NS, "Queue", null, XMPConst.ARRAY);
            }
            
            // Add new task at the end
            xmp.appendArrayItem(TASKS_NS, "Queue", task, 0, XMPConst.STRING);
            
            // Update document's XMP
            document.XMPString = xmp.serialize();
        } catch (e) {
            throw new Error("Failed to enqueue task: " + e.message);
        }
    };

    // Initialize on construction
    init();
};
`}
        </CodeBox>
    </Chapter>
);
