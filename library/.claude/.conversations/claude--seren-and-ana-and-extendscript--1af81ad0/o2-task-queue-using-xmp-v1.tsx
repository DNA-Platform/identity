import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Task Queue using XMP v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`interface Document {
    XMPString: string;
}

declare var XMPMeta: any;
declare var XMPConst: any;
declare function setDefaultXMLNamespace(ns: string): void;

class TaskQueue {
    private document: Document;
    private xmp: any;  // XMPMeta instance
    private ns: string = "http://ns.adobe.com/xap/1.0/";
    private cachedFirstTask?: string;
    
    constructor(document: Document) {
        this.document = document;
        setDefaultXMLNamespace(this.ns);
        this.xmp = new XMPMeta(document.XMPString);
    }

    private getArrayLength(): number {
        try {
            return this.xmp.countArrayItems(this.ns, "TaskQueue") || 0;
        } catch (e) {
            return 0;
        }
    }

    peek(): string | undefined {
        if (this.cachedFirstTask !== undefined) {
            return this.cachedFirstTask;
        }

        const count = this.getArrayLength();
        if (count === 0) return undefined;

        try {
            this.cachedFirstTask = this.xmp.getArrayItem(this.ns, "TaskQueue", 1);
            return this.cachedFirstTask;
        } catch (e) {
            return undefined;
        }
    }

    dequeue(): string | undefined {
        const firstTask = this.peek();
        if (!firstTask) return undefined;

        // Remove first item and shift array
        try {
            const count = this.getArrayLength();
            for (let i = 1; i < count; i++) {
                const nextItem = this.xmp.getArrayItem(this.ns, "TaskQueue", i + 1);
                this.xmp.setArrayItem(this.ns, "TaskQueue", i, nextItem);
            }
            this.xmp.deleteArrayItem(this.ns, "TaskQueue", count);
            
            // Update document's XMP
            this.document.XMPString = this.xmp.serialize();
            
            // Clear cache since we modified the queue
            this.cachedFirstTask = undefined;
            
            return firstTask;
        } catch (e) {
            return undefined;
        }
    }

    enqueue(task: string): void {
        try {
            const count = this.getArrayLength();
            
            // If array doesn't exist, create it
            if (count === 0) {
                this.xmp.setProperty(this.ns, "TaskQueue", null, XMPConst.ARRAY);
            }
            
            // Add new task at the end
            this.xmp.appendArrayItem(this.ns, "TaskQueue", task, 0, XMPConst.STRING);
            
            // Update document's XMP
            this.document.XMPString = this.xmp.serialize();
        } catch (e) {
            throw new Error("Failed to enqueue task: " + e.message);
        }
    }
}
`}
        </CodeBox>
    </Chapter>
);
