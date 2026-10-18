import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ taskbar-test-suite-ahk11 v1 ]]</Title>
        <CodeBox
            language="autohotkey"
        >
            {`${''}; Taskbar Test Suite for AutoHotkey 1.1
; Compatibility-focused unit testing for Taskbar library

; Utility function to clone arrays
CloneArray(arr) {
    newArr := []
    for index, value in arr {
        if (IsObject(value)) {
            newArr[index] := CloneArray(value)
        } else {
            newArr[index] := value
        }
    }
    return newArr
}

; Utility Functions for Mock Objects
CreateMockUIAElement(name, isRunning) {
    element := {}
    element.CurrentName := name
    element.CurrentAutomationId := "mock-id-" . name
    element.CurrentClassName := isRunning ? "Running" : ""
    element.CurrentBoundingRectangle := {x: 100, y: 100, width: 40, height: 40}
    
    ; Assign mock interaction methods
    element.Click := Func("SafeMockClick")
    element.RightClick := Func("SafeMockRightClick")
    
    return element
}

; Safe Mock Interaction Functions
SafeMockClick() {
    OutputDebug, Mock Click Performed
    return true
}

SafeMockRightClick() {
    OutputDebug, Mock Right Click Performed
    return true
}

; Mock Collection Helper
MockCollectItems(ByRef called) {
    OutputDebug, Mock CollectItems Called
    called += 1
    return
}

; Taskbar Test Suite
class TaskbarTest extends AutoHotUnitSuite {
    ; Constructor for Basic Validation
    __New() {
        ; Validate critical dependencies
        if (!IsObject(Taskbar)) {
            this.LogCriticalError("Taskbar class is not loaded")
            throw "Dependency Error: Taskbar class not found"
        }
        
        base.__New()
    }
    
    ; Logging Method for Critical Errors
    LogCriticalError(message) {
        OutputDebug, % "CRITICAL TEST ERROR: " . message
        FileAppend, % A_Now . " - " . message . "\`n", taskbar_test_errors.log
    }
    
    ; Setup Method with Error Handling
    beforeEach() {
        ; Robust Taskbar Instance Creation
        this.taskbar := ""
        
        try {
            this.taskbar := new Taskbar()
            
            ; Validate Core Taskbar Properties
            if (!IsObject(this.taskbar) || this.taskbar.taskbarHandle = 0) {
                this.LogCriticalError("Invalid Taskbar Instance")
                throw "Taskbar Initialization Failed"
            }
        } catch e {
            ; Error Handling
            this.LogCriticalError("Initialization Error: " . e)
            this.assert.fail("Taskbar Initialization Failed: " . e)
        }
    }
    
    ; Test Taskbar Initialization Properties
    testTaskbarInitialization() {
        ; Validate Core Taskbar Attributes
        this.assert.notEqual(this.taskbar.taskbarHandle, 0, "Taskbar handle should be found")
        this.assert.notEqual(this.taskbar.position, "", "Position should be detected")
        this.assert.isTrue(this.taskbar.width > 0, "Width should be positive")
        this.assert.isTrue(this.taskbar.height > 0, "Height should be positive")
    }
    
    ; Comprehensive Item Filtering Test
    testItemFiltering() {
        ; Preserve Original Items
        originalItems := CloneArray(this.taskbar.items)
        
        try {
            ; Replace with Mock Test Items
            this.taskbar.items := []
            this.taskbar.items.Push(new TaskbarItem(CreateMockUIAElement("Notepad", true)))
            this.taskbar.items.Push(new TaskbarItem(CreateMockUIAElement("Chrome", true)))
            this.taskbar.items.Push(new TaskbarItem(CreateMockUIAElement("Explorer", false)))
            
            ; Comprehensive Item Search Tests
            this.validateItemSearch()
            this.validateRunningAndPinnedFiltering()
        } catch e {
            this.LogCriticalError("Item Filtering Test Failed: " . e)
            this.assert.fail("Item Filtering Test Error: " . e)
        }
        
        ; Restore Original Items
        this.taskbar.items := originalItems
    }
    
    ; Detailed Item Search Validation
    validateItemSearch() {
        ; Exact and Partial Match Tests
        notepadItem := this.taskbar.FindItem("Notepad")
        this.assert.notEqual(notepadItem, "", "Should find Notepad")
        this.assert.equal(notepadItem.name, "Notepad", "Should have correct name")
        
        nonExistentItem := this.taskbar.FindItem("ThisAppDoesNotExist", true)
        this.assert.equal(nonExistentItem, "", "Non-existent item should return empty string")
        
        chromeItem := this.taskbar.FindItem("Chr", false)
        this.assert.notEqual(chromeItem, "", "Should find Chrome with partial match")
        
        noMatchItem := this.taskbar.FindItem("Chr", true)
        this.assert.equal(noMatchItem, "", "Should not find with exact match")
    }
    
    ; Running and Pinned App Filtering Validation
    validateRunningAndPinnedFiltering() {
        runningApps := this.taskbar.GetRunningApps()
        this.assert.equal(runningApps.Length(), 2, "Should find 2 running apps")
        
        pinnedApps := this.taskbar.GetPinnedApps()
        this.assert.equal(pinnedApps.Length(), 1, "Should find 1 pinned app")
    }
    
    ; Test Items Collection Behavior
    testGetItems() {
        ; Store Original Collection Method
        originalCollectItems := this.taskbar._CollectItems
        collectItemsCalled := 0
        
        try {
            ; Replace Collection Method with Mock
            this.taskbar._CollectItems := Func("MockCollectItems").Bind(collectItemsCalled)
            
            ; Test Refresh Scenarios
            this.validateItemCollectionBehavior(collectItemsCalled)
        } catch e {
            this.LogCriticalError("Get Items Test Failed: " . e)
            this.assert.fail("Get Items Test Error: " . e)
        }
        
        ; Restore Original Collection Method
        this.taskbar._CollectItems := originalCollectItems
    }
    
    ; Validate Item Collection Behavior
    validateItemCollectionBehavior(ByRef collectItemsCalled) {
        ; Test with Empty Items and No Refresh
        if (this.taskbar.items.Length() = 0) {
            this.taskbar.GetItems(false)
            this.assert.equal(collectItemsCalled, 1, "Should call _CollectItems when items is empty")
        }
        
        ; Reset Tracking
        collectItemsCalled := 0
        this.taskbar.items := []
        
        ; Test Forced Refresh
        this.taskbar.GetItems(true)
        this.assert.equal(collectItemsCalled, 1, "Should call _CollectItems when refresh is true")
    }
}

; Register Test Suite
ahu.RegisterSuite(TaskbarTest)
`}
        </CodeBox>
    </Chapter>
);
