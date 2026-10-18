import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Task Queue using XMP v3 ]]</Title>
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
    var QUEUE_NAME = "Queue";
    var xmp: any;  // XMPMeta instance
    var cachedFirstTask: string | undefined;
    var isDirty = false;
    
    // Initialize
    function init() {
        setDefaultXMLNamespace(TASKS_NS);
        xmp = new XMPMeta(document.XMPString);
    }

    function ensureQueueExists() {
        try {
            // Only try to create if we can't get the first item
            xmp.getArrayItem(TASKS_NS, QUEUE_NAME, 1);
        } catch (e) {
            xmp.setProperty(TASKS_NS, QUEUE_NAME, null, XMPConst.ARRAY);
        }
    }

    function saveIfNeeded() {
        if (isDirty) {
            document.XMPString = xmp.serialize();
            isDirty = false;
        }
    }

    this.peek = function(): string | undefined {
        if (typeof cachedFirstTask !== 'undefined') {
            return cachedFirstTask;
        }

        try {
            cachedFirstTask = xmp.getArrayItem(TASKS_NS, QUEUE_NAME, 1);
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
            // Direct deletion of first item - no need to shift others
            xmp.deleteArrayItem(TASKS_NS, QUEUE_NAME, 1);
            cachedFirstTask = undefined;
            isDirty = true;
            saveIfNeeded();
            return firstTask;
        } catch (e) {
            return undefined;
        }
    };

    this.enqueue = function(task: string): void {
        try {
            ensureQueueExists();
            xmp.appendArrayItem(TASKS_NS, QUEUE_NAME, task, 0, XMPConst.STRING);
            isDirty = true;
            saveIfNeeded();
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
