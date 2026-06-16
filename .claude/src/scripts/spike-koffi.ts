// Spike: test koffi FFI calls to user32.dll

import koffi from 'koffi';

const user32 = koffi.load('user32.dll');

// Define RECT struct
const RECT = koffi.struct('RECT', {
  left: 'int32',
  top: 'int32',
  right: 'int32',
  bottom: 'int32',
});

// Define Win32 functions
const FindWindowW = user32.func('void* __stdcall FindWindowW(str16, str16)');
const ShowWindow = user32.func('bool __stdcall ShowWindow(void*, int)');
const SetForegroundWindow = user32.func('bool __stdcall SetForegroundWindow(void*)');
const IsIconic = user32.func('bool __stdcall IsIconic(void*)');
const GetWindowRect = user32.func('bool __stdcall GetWindowRect(void*, _Out_ RECT*)');

// Find Claude window
console.log('Looking for Claude window...');
const hwnd = FindWindowW(null, 'Claude');

if (!hwnd) {
  console.log('Not found. Is Claude running?');
  process.exit(1);
}

console.log('Found Claude window');
console.log('Minimized:', IsIconic(hwnd));

// Get dimensions
const rect = {};
GetWindowRect(hwnd, rect);
console.log('Window rect:', JSON.stringify(rect));

// Maximize
console.log('Maximizing...');
ShowWindow(hwnd, 3);
SetForegroundWindow(hwnd);

console.log('Done. koffi works!');
