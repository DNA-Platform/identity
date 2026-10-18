'use client'
import { $Chemical, If, Do } from '@/chemistry';
import React from 'react';

// Test 1: $If with condition toggle and sync TSX result
export class $IfBasic extends $Chemical {
    showMessage = false;
    messageVersion = 1;
    
    $toggleCondition() {
        this.showMessage = !this.showMessage;
    }
    
    $changeMessage() {
        this.messageVersion++;
    }
    
    $getMessage() {
        return (
            <div style={{ padding: '10px', background: '#e8f5e9', borderRadius: '4px' }}>
                ✅ Message v{this.messageVersion} is showing!
            </div>
        );
    }
    
    view() {
        return (
            <div style={{ padding: '15px', border: '1px solid #4caf50', borderRadius: '8px' }}>
                <h4>Test 1: $If - Basic Condition & TSX Result</h4>
                <div style={{ marginBottom: '10px' }}>
                    Condition: <strong>{this.showMessage ? 'TRUE' : 'FALSE'}</strong>
                </div>
                <If condition={this.showMessage} result={this.$getMessage} />
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button onClick={this.$toggleCondition}>Toggle Condition</button>
                    <button onClick={this.$changeMessage}>Change Message</button>
                </div>
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    ✓ Shows message when condition true<br/>
                    ✓ Hides when condition false<br/>
                    ✓ Updates message when action changes
                </div>
            </div>
        );
    }
}

// Test 2: $Do with changing actions
export class $DoBasic extends $Chemical {
    actionType: 'greeting' | 'time' | 'random' = 'greeting';
    
    $showGreeting() {
        return (
            <div style={{ padding: '10px', background: '#f3e5f5', borderRadius: '4px' }}>
                👋 Hello from Do component!
            </div>
        );
    }
    
    $showTime() {
        return (
            <div style={{ padding: '10px', background: '#fff3e0', borderRadius: '4px' }}>
                🕐 Current time: {new Date().toLocaleTimeString()}
            </div>
        );
    }
    
    $showRandom() {
        return (
            <div style={{ padding: '10px', background: '#e0f2f1', borderRadius: '4px' }}>
                🎲 Random number: {Math.floor(Math.random() * 100)}
            </div>
        );
    }
    
    getCurrentAction() {
        switch(this.actionType) {
            case 'greeting': return this.$showGreeting;
            case 'time': return this.$showTime;
            case 'random': return this.$showRandom;
        }
    }
    
    view() {
        return (
            <div style={{ padding: '15px', border: '1px solid #9c27b0', borderRadius: '8px' }}>
                <h4>Test 2: $Do - Always Executes, Changes with Action</h4>
                <Do result={this.getCurrentAction()} />
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button onClick={() => this.actionType = 'greeting'}>Greeting</button>
                    <button onClick={() => this.actionType = 'time'}>Time</button>
                    <button onClick={() => this.actionType = 'random'}>Random</button>
                </div>
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    Current action: <strong>{this.actionType}</strong><br/>
                    ✓ Always shows result<br/>
                    ✓ Re-executes when action changes
                </div>
            </div>
        );
    }
}

// Test 3: Async actions for both $If and $Do
export class $AsyncActions extends $Chemical {
    loadIf = false;
    doVersion = 1;
    
    async $asyncIfAction() {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return (
            <div style={{ padding: '10px', background: '#e3f2fd', borderRadius: '4px' }}>
                📦 If: Async loaded after 1.5s! Time: {new Date().toLocaleTimeString()}
            </div>
        );
    }
    
    async $asyncDoAction() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return (
            <div style={{ padding: '10px', background: '#fce4ec', borderRadius: '4px' }}>
                🚀 Do: Async v{this.doVersion} loaded after 1s!
            </div>
        );
    }
    
    $toggleIf() {
        this.loadIf = !this.loadIf;
    }
    
    $changeDoVersion() {
        this.doVersion++;
    }
    
    view() {
        return (
            <div style={{ padding: '15px', border: '1px solid #ff9800', borderRadius: '8px' }}>
                <h4>Test 3: Async Actions (Loading States)</h4>
                
                <div style={{ marginBottom: '15px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>If Component (conditional async):</div>
                    <If condition={this.loadIf} result={this.$asyncIfAction} />
                    <button onClick={this.$toggleIf} style={{ marginTop: '5px' }}>
                        {this.loadIf ? 'Hide' : 'Load'} Async Content
                    </button>
                </div>
                
                <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Do Component (always async):</div>
                    <Do result={this.$asyncDoAction} />
                    <button onClick={this.$changeDoVersion} style={{ marginTop: '5px' }}>
                        Reload (v{this.doVersion + 1})
                    </button>
                </div>
                
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    ✓ Shows nothing while loading<br/>
                    ✓ Shows result after promise resolves<br/>
                    ✓ Re-triggers on action change
                </div>
            </div>
        );
    }
}

// Test 4: Arrow Function Error Detection
export class $ArrowFunctionError extends $Chemical {
    errorMessage = '';
    showError = false;
    correctMethod = true;
    
    $validMethod() {
        return (
            <div style={{ padding: '10px', background: '#e8f5e9', borderRadius: '4px' }}>
                ✅ Valid method reference passed
            </div>
        );
    }
    
    $toggleMethod() {
        this.correctMethod = !this.correctMethod;
        this.errorMessage = '';
    }
    
    $showCondition() {
        this.showError = true;
    }
    
    $hideCondition() {
        this.showError = false;
    }
    
    view() {
        // Intentionally create an arrow function to test error
        const invalidAction = () => this.$validMethod();
        
        return (
            <div style={{ padding: '15px', border: '1px solid #f44336', borderRadius: '8px' }}>
                <h4>Test 4: Arrow Function Error Detection</h4>
                
                <div style={{ marginBottom: '15px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        Testing: <strong>{this.correctMethod ? 'Valid Method Reference' : 'Arrow Function (Should Error)'}</strong>
                    </div>
                    
                    {(() => {
                        try {
                            if (this.correctMethod) {
                                return <Do result={this.$validMethod} />;
                            } else {
                                return <Do result={invalidAction} />;
                            }
                        } catch (e: any) {
                            this.errorMessage = e.message;
                            return (
                                <div style={{ padding: '10px', background: '#ffebee', borderRadius: '4px', color: '#d32f2f' }}>
                                    ⚠️ Error caught: {e.message}
                                </div>
                            );
                        }
                    })()}
                    
                    <button onClick={this.$toggleMethod} style={{ marginTop: '10px' }}>
                        Toggle to {this.correctMethod ? 'Arrow Function' : 'Method Reference'}
                    </button>
                </div>
                
                <div>
                    <div style={{ marginBottom: '10px' }}>
                        Testing $If with arrow function:
                    </div>
                    
                    {(() => {
                        try {
                            return <If condition={this.showError} result={() => this.$validMethod()} />;
                        } catch (e: any) {
                            return (
                                <div style={{ padding: '10px', background: '#ffebee', borderRadius: '4px', color: '#d32f2f' }}>
                                    ⚠️ Error caught: {e.message}
                                </div>
                            );
                        }
                    })()}
                    
                    <button onClick={this.$showCondition} style={{ marginTop: '10px' }}>
                        Trigger If Condition
                    </button>
                </div>
                
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    ✓ Throws error for arrow functions<br/>
                    ✓ Works correctly with method references<br/>
                    ✓ Error message guides to correct usage
                </div>
            </div>
        );
    }
}

// Test 5: Void/undefined returning actions
export class $VoidActions extends $Chemical {
    sideEffectCount = 0;
    doEffectCount = 0;
    runSideEffect = false;
    
    $ifSideEffect() {
        this.sideEffectCount++;
        // Returns undefined - side effect only
    }
    
    $doSideEffect() {
        this.doEffectCount++;
        // Returns undefined - side effect only
    }
    
    $toggleCondition() {
        this.runSideEffect = !this.runSideEffect;
    }
    
    $reset() {
        this.sideEffectCount = 0;
        this.doEffectCount = 0;
    }
    
    view() {
        return (
            <div style={{ padding: '15px', border: '1px solid #607d8b', borderRadius: '8px' }}>
                <h4>Test 5: Void/Undefined Returning Actions</h4>
                
                <div style={{ marginBottom: '15px' }}>
                    <div>If side effects run: <strong>{this.sideEffectCount}</strong> times</div>
                    <If condition={this.runSideEffect} result={this.$ifSideEffect} />
                    <button onClick={this.$toggleCondition}>
                        Toggle Condition ({this.runSideEffect ? 'ON' : 'OFF'})
                    </button>
                </div>
                
                <div>
                    <div>Do side effects run: <strong>{this.doEffectCount}</strong> times</div>
                    <Do result={this.$doSideEffect} />
                    <button onClick={this.$reset} style={{ marginLeft: '10px' }}>
                        Reset Counts
                    </button>
                </div>
                
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    ✓ Actions execute even if returning undefined<br/>
                    ✓ Nothing renders (Undefined component)<br/>
                    ✓ Side effects are observable
                </div>
            </div>
        );
    }
}

// Test 5: Weird return types (strings, numbers, objects)
export class $WeirdReturns extends $Chemical {
    returnType: 'string' | 'number' | 'object' | 'boolean' | 'jsx' = 'jsx';
    showWeird = true;
    
    $getString() {
        return "Just a plain string!";
    }
    
    $getNumber() {
        return 42;
    }
    
    $getObject() {
        return { type: 'object', value: 'This is an object', random: Math.random() };
    }
    
    $getBoolean() {
        return true;
    }
    
    $getJSX() {
        return <div style={{ color: '#4caf50' }}>Proper JSX Element</div>;
    }
    
    getCurrentResult() {
        switch(this.returnType) {
            case 'string': return this.$getString;
            case 'number': return this.$getNumber;
            case 'object': return this.$getObject;
            case 'boolean': return this.$getBoolean;
            case 'jsx': return this.$getJSX;
        }
    }
    
    view() {
        return (
            <div style={{ padding: '15px', border: '1px solid #795548', borderRadius: '8px' }}>
                <h4>Test 5: Non-Standard Return Types</h4>
                
                <div style={{ marginBottom: '10px' }}>
                    Return type: <strong>{this.returnType}</strong>
                </div>
                
                <div style={{ padding: '10px', background: '#f5f5f5', borderRadius: '4px', marginBottom: '10px' }}>
                    <div style={{ fontSize: '12px', marginBottom: '5px' }}>If result:</div>
                    <If condition={this.showWeird} result={this.getCurrentResult()} />
                </div>
                
                <div style={{ padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
                    <div style={{ fontSize: '12px', marginBottom: '5px' }}>Do result:</div>
                    <Do result={this.getCurrentResult()} />
                </div>
                
                <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
                    <button onClick={() => this.returnType = 'string'}>String</button>
                    <button onClick={() => this.returnType = 'number'}>Number</button>
                    <button onClick={() => this.returnType = 'object'}>Object</button>
                    <button onClick={() => this.returnType = 'boolean'}>Boolean</button>
                    <button onClick={() => this.returnType = 'jsx'}>JSX</button>
                </div>
                
                <button onClick={() => this.showWeird = !this.showWeird} style={{ marginTop: '5px' }}>
                    Toggle If Condition ({this.showWeird ? 'ON' : 'OFF'})
                </button>
                
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    ⚠️ Strings/numbers render as text nodes<br/>
                    ⚠️ Objects might cause React errors<br/>
                    ✓ JSX renders properly
                </div>
            </div>
        );
    }
}

// Test 6: Chemical returning actions
export class $ChemicalReturns extends $Chemical {
    showNested = false;
    chemicalType: 'button' | 'label' | 'card' = 'button';
    
    $getNestedButton() {
        const button = new $NestedButton();
        button.label = 'Nested Button Component';
        return button;
    }
    
    $getNestedLabel() {
        const label = new $NestedLabel();
        label.text = `Created at ${new Date().toLocaleTimeString()}`;
        return label;
    }
    
    $getNestedCard() {
        const card = new $NestedCard();
        card.title = 'Nested Card';
        card.content = 'This is a Chemical returned by an action!';
        return card;
    }
    
    getCurrentChemical() {
        switch(this.chemicalType) {
            case 'button': return this.$getNestedButton;
            case 'label': return this.$getNestedLabel;
            case 'card': return this.$getNestedCard;
        }
    }
    
    view() {
        return (
            <div style={{ padding: '15px', border: '1px solid #3f51b5', borderRadius: '8px' }}>
                <h4>Test 6: Actions Returning Chemicals</h4>
                
                <div style={{ marginBottom: '10px' }}>
                    Chemical type: <strong>{this.chemicalType}</strong>
                </div>
                
                <div style={{ padding: '10px', background: '#e8eaf6', borderRadius: '4px', minHeight: '60px' }}>
                    <If condition={this.showNested} result={this.getCurrentChemical()} />
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button onClick={() => this.showNested = !this.showNested}>
                        {this.showNested ? 'Hide' : 'Show'} Chemical
                    </button>
                    <button onClick={() => this.chemicalType = 'button'}>Button</button>
                    <button onClick={() => this.chemicalType = 'label'}>Label</button>
                    <button onClick={() => this.chemicalType = 'card'}>Card</button>
                </div>
                
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    ✓ Returns Chemical instances<br/>
                    ✓ Renders their Component automatically<br/>
                    ✓ Changes when action changes
                </div>
            </div>
        );
    }
}

// Helper chemicals for Test 6
class $NestedButton extends $Chemical {
    label = 'Click me!';
    clicks = 0;
    
    $handleClick() {
        this.clicks++;
    }
    
    view() {
        return (
            <button onClick={this.$handleClick} style={{ padding: '8px 16px' }}>
                {this.label} (clicked {this.clicks} times)
            </button>
        );
    }
}

class $NestedLabel extends $Chemical {
    text = 'Label';
    
    view() {
        return <div style={{ padding: '8px', background: '#fff', borderRadius: '4px' }}>{this.text}</div>;
    }
}

class $NestedCard extends $Chemical {
    title = 'Card';
    content = 'Content';
    
    view() {
        return (
            <div style={{ padding: '12px', background: '#fff', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h5 style={{ margin: '0 0 8px 0' }}>{this.title}</h5>
                <div>{this.content}</div>
            </div>
        );
    }
}

// Create component instances
const IfBasic = new $IfBasic().Component;
const DoBasic = new $DoBasic().Component;
const AsyncActions = new $AsyncActions().Component;
const ArrowFunctionError = new $ArrowFunctionError().Component;
const VoidActions = new $VoidActions().Component;
const WeirdReturns = new $WeirdReturns().Component;
const ChemicalReturns = new $ChemicalReturns().Component;

export default function IfDoTests() {
    return (
        <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>$If and $Do Component Tests</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>
                Testing Chemistry's conditional execution components: $If executes based on condition, $Do always executes
            </p>
            
            <div style={{ display: 'grid', gap: '20px' }}>
                <IfBasic />
                <DoBasic />
                <AsyncActions />
                <VoidActions />
                <WeirdReturns />
                <ChemicalReturns />
            </div>
            
            <div style={{ 
                marginTop: '40px', 
                padding: '20px', 
                background: '#f0f8ff', 
                borderRadius: '8px',
                border: '1px solid #2196f3'
            }}>
                <h3>📝 Key Behaviors</h3>
                <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li><strong>$If</strong>: Only executes when condition is true, re-executes when action changes while true</li>
                    <li><strong>$Do</strong>: Always executes, re-executes whenever action reference changes</li>
                    <li>Both handle async actions by showing nothing while loading (Undefined component)</li>
                    <li>Both can return JSX, Chemicals, or undefined (for side effects)</li>
                    <li>Non-React return types (strings, numbers) render as text nodes</li>
                    <li>Chemical returns are automatically converted to their Components</li>
                </ul>
            </div>
        </div>
    );
}