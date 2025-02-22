currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:27.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/file1.ts]
const x = 1;
function foo() {
    return "hello";
}

//// [/user/username/projects/myproject/file2.ts]
const y = 2;
function bar() {
    return "world";
}

//// [/user/username/projects/myproject/file3.ts]
const xy = 3;

//// [/user/username/projects/myproject/module.ts]
export const xyz = 4;

//// [/user/username/projects/myproject/tsconfig.json]
{"compileOnSave":true,"compilerOptions":{"declaration":true}}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info 1    [00:00:28.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/file1.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:29.000] Search path: /user/username/projects/myproject
Info 3    [00:00:30.000] For info: /user/username/projects/myproject/file1.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 4    [00:00:31.000] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info 5    [00:00:32.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 6    [00:00:33.000] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/file1.ts",
  "/user/username/projects/myproject/file2.ts",
  "/user/username/projects/myproject/file3.ts",
  "/user/username/projects/myproject/module.ts"
 ],
 "options": {
  "declaration": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 }
}
Info 7    [00:00:34.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 8    [00:00:35.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 9    [00:00:36.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/file2.ts 500 undefined WatchType: Closed Script info
Info 10   [00:00:37.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/file3.ts 500 undefined WatchType: Closed Script info
Info 11   [00:00:38.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/module.ts 500 undefined WatchType: Closed Script info
Info 12   [00:00:39.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 13   [00:00:40.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 14   [00:00:41.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 15   [00:00:42.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 16   [00:00:43.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 17   [00:00:44.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 18   [00:00:45.000] 	Files (5)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/file1.ts SVC-1-0 "const x = 1;\nfunction foo() {\n    return \"hello\";\n}"
	/user/username/projects/myproject/file2.ts Text-1 "const y = 2;\nfunction bar() {\n    return \"world\";\n}"
	/user/username/projects/myproject/file3.ts Text-1 "const xy = 3;"
	/user/username/projects/myproject/module.ts Text-1 "export const xyz = 4;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	file1.ts
	  Matched by default include pattern '**/*'
	file2.ts
	  Matched by default include pattern '**/*'
	file3.ts
	  Matched by default include pattern '**/*'
	module.ts
	  Matched by default include pattern '**/*'

Info 19   [00:00:46.000] -----------------------------------------------
Info 20   [00:00:47.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 20   [00:00:48.000] 	Files (5)

Info 20   [00:00:49.000] -----------------------------------------------
Info 20   [00:00:50.000] Open files: 
Info 20   [00:00:51.000] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info 20   [00:00:52.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 20   [00:00:53.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json: *new*
  {}
/user/username/projects/myproject/file2.ts: *new*
  {}
/user/username/projects/myproject/file3.ts: *new*
  {}
/user/username/projects/myproject/module.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

Before request

Info 21   [00:00:54.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/file2.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info 22   [00:00:55.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/file2.ts 500 undefined WatchType: Closed Script info
Info 23   [00:00:56.000] Search path: /user/username/projects/myproject
Info 24   [00:00:57.000] For info: /user/username/projects/myproject/file2.ts :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 25   [00:00:58.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 25   [00:00:59.000] 	Files (5)

Info 25   [00:01:00.000] -----------------------------------------------
Info 25   [00:01:01.000] Open files: 
Info 25   [00:01:02.000] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info 25   [00:01:03.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 25   [00:01:04.000] 	FileName: /user/username/projects/myproject/file2.ts ProjectRootPath: undefined
Info 25   [00:01:05.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 25   [00:01:06.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/file3.ts:
  {}
/user/username/projects/myproject/module.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/file2.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

Before request

Info 26   [00:01:07.000] request:
    {
      "command": "compileOnSaveAffectedFileList",
      "arguments": {
        "file": "/user/username/projects/myproject/file1.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info 27   [00:01:08.000] Before ensureProjectForOpenFiles:
Info 28   [00:01:09.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 28   [00:01:10.000] 	Files (5)

Info 28   [00:01:11.000] -----------------------------------------------
Info 28   [00:01:12.000] Open files: 
Info 28   [00:01:13.000] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info 28   [00:01:14.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 28   [00:01:15.000] 	FileName: /user/username/projects/myproject/file2.ts ProjectRootPath: undefined
Info 28   [00:01:16.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 28   [00:01:17.000] After ensureProjectForOpenFiles:
Info 29   [00:01:18.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 29   [00:01:19.000] 	Files (5)

Info 29   [00:01:20.000] -----------------------------------------------
Info 29   [00:01:21.000] Open files: 
Info 29   [00:01:22.000] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info 29   [00:01:23.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 29   [00:01:24.000] 	FileName: /user/username/projects/myproject/file2.ts ProjectRootPath: undefined
Info 29   [00:01:25.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 29   [00:01:26.000] response:
    {
      "response": [
        {
          "projectFileName": "/user/username/projects/myproject/tsconfig.json",
          "fileNames": [
            "/user/username/projects/myproject/file1.ts",
            "/user/username/projects/myproject/file2.ts",
            "/user/username/projects/myproject/file3.ts",
            "/user/username/projects/myproject/module.ts"
          ],
          "projectUsesOutFile": false
        }
      ],
      "responseRequired": true
    }
After request

Before request

Info 30   [00:01:27.000] request:
    {
      "command": "compileOnSaveEmitFile",
      "arguments": {
        "file": "/user/username/projects/myproject/file1.ts"
      },
      "seq": 4,
      "type": "request"
    }
Info 31   [00:01:30.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/file1.js :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 32   [00:01:31.000] Project: /user/username/projects/myproject/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/file1.js
Info 33   [00:01:32.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/file1.js :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 34   [00:01:35.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/file1.d.ts :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 35   [00:01:36.000] Project: /user/username/projects/myproject/tsconfig.json Detected output file: /user/username/projects/myproject/file1.d.ts
Info 36   [00:01:37.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/file1.d.ts :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 37   [00:01:38.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request
//// [/user/username/projects/myproject/file1.js]
var x = 1;
function foo() {
    return "hello";
}


//// [/user/username/projects/myproject/file1.d.ts]
declare const x = 1;
declare function foo(): string;



Before request

Info 38   [00:01:39.000] request:
    {
      "command": "compileOnSaveEmitFile",
      "arguments": {
        "file": "/user/username/projects/myproject/file2.ts"
      },
      "seq": 5,
      "type": "request"
    }
Info 39   [00:01:42.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/file2.js :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 40   [00:01:43.000] Project: /user/username/projects/myproject/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/file2.js
Info 41   [00:01:44.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/file2.js :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 42   [00:01:47.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/file2.d.ts :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 43   [00:01:48.000] Project: /user/username/projects/myproject/tsconfig.json Detected output file: /user/username/projects/myproject/file2.d.ts
Info 44   [00:01:49.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/file2.d.ts :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 45   [00:01:50.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request
//// [/user/username/projects/myproject/file2.js]
var y = 2;
function bar() {
    return "world";
}


//// [/user/username/projects/myproject/file2.d.ts]
declare const y = 2;
declare function bar(): string;



Before request

Info 46   [00:01:51.000] request:
    {
      "command": "compileOnSaveEmitFile",
      "arguments": {
        "file": "/user/username/projects/myproject/file3.ts"
      },
      "seq": 6,
      "type": "request"
    }
Info 47   [00:01:54.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/file3.js :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 48   [00:01:55.000] Project: /user/username/projects/myproject/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/file3.js
Info 49   [00:01:56.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/file3.js :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 50   [00:01:59.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/file3.d.ts :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 51   [00:02:00.000] Project: /user/username/projects/myproject/tsconfig.json Detected output file: /user/username/projects/myproject/file3.d.ts
Info 52   [00:02:01.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/file3.d.ts :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 53   [00:02:02.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request
//// [/user/username/projects/myproject/file3.js]
var xy = 3;


//// [/user/username/projects/myproject/file3.d.ts]
declare const xy = 3;



Before request

Info 54   [00:02:03.000] request:
    {
      "command": "compileOnSaveEmitFile",
      "arguments": {
        "file": "/user/username/projects/myproject/module.ts"
      },
      "seq": 7,
      "type": "request"
    }
Info 55   [00:02:06.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/module.js :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 56   [00:02:07.000] Project: /user/username/projects/myproject/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/module.js
Info 57   [00:02:08.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/module.js :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 58   [00:02:11.000] DirectoryWatcher:: Triggered with /user/username/projects/myproject/module.d.ts :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 59   [00:02:12.000] Project: /user/username/projects/myproject/tsconfig.json Detected output file: /user/username/projects/myproject/module.d.ts
Info 60   [00:02:13.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/module.d.ts :: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 61   [00:02:14.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request
//// [/user/username/projects/myproject/module.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyz = void 0;
exports.xyz = 4;


//// [/user/username/projects/myproject/module.d.ts]
export declare const xyz = 4;



Before request

Info 62   [00:02:15.000] request:
    {
      "command": "updateOpen",
      "arguments": {
        "changedFiles": [
          {
            "fileName": "/user/username/projects/myproject/file1.ts",
            "textChanges": [
              {
                "newText": "world",
                "start": {
                  "line": 3,
                  "offset": 13
                },
                "end": {
                  "line": 3,
                  "offset": 18
                }
              }
            ]
          }
        ]
      },
      "seq": 8,
      "type": "request"
    }
Info 63   [00:02:16.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

Before request

Info 64   [00:02:17.000] request:
    {
      "command": "compileOnSaveAffectedFileList",
      "arguments": {
        "file": "/user/username/projects/myproject/file1.ts"
      },
      "seq": 9,
      "type": "request"
    }
Info 65   [00:02:18.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 66   [00:02:19.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 67   [00:02:20.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 68   [00:02:21.000] 	Files (5)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/file1.ts SVC-1-1 "const x = 1;\nfunction foo() {\n    return \"world\";\n}"
	/user/username/projects/myproject/file2.ts Text-1 "const y = 2;\nfunction bar() {\n    return \"world\";\n}"
	/user/username/projects/myproject/file3.ts Text-1 "const xy = 3;"
	/user/username/projects/myproject/module.ts Text-1 "export const xyz = 4;"

Info 69   [00:02:22.000] -----------------------------------------------
Info 70   [00:02:23.000] Before ensureProjectForOpenFiles:
Info 71   [00:02:24.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 71   [00:02:25.000] 	Files (5)

Info 71   [00:02:26.000] -----------------------------------------------
Info 71   [00:02:27.000] Open files: 
Info 71   [00:02:28.000] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info 71   [00:02:29.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 71   [00:02:30.000] 	FileName: /user/username/projects/myproject/file2.ts ProjectRootPath: undefined
Info 71   [00:02:31.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 71   [00:02:32.000] After ensureProjectForOpenFiles:
Info 72   [00:02:33.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 72   [00:02:34.000] 	Files (5)

Info 72   [00:02:35.000] -----------------------------------------------
Info 72   [00:02:36.000] Open files: 
Info 72   [00:02:37.000] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info 72   [00:02:38.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 72   [00:02:39.000] 	FileName: /user/username/projects/myproject/file2.ts ProjectRootPath: undefined
Info 72   [00:02:40.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 72   [00:02:41.000] response:
    {
      "response": [
        {
          "projectFileName": "/user/username/projects/myproject/tsconfig.json",
          "fileNames": [
            "/user/username/projects/myproject/file1.ts"
          ],
          "projectUsesOutFile": false
        }
      ],
      "responseRequired": true
    }
After request

Before request

Info 73   [00:02:42.000] request:
    {
      "command": "compileOnSaveEmitFile",
      "arguments": {
        "file": "/user/username/projects/myproject/file1.ts"
      },
      "seq": 10,
      "type": "request"
    }
Info 74   [00:02:49.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request
//// [/user/username/projects/myproject/file1.js]
var x = 1;
function foo() {
    return "world";
}


//// [/user/username/projects/myproject/file1.d.ts] file written with same contents

Before request

Info 75   [00:02:50.000] request:
    {
      "command": "updateOpen",
      "arguments": {
        "changedFiles": [
          {
            "fileName": "/user/username/projects/myproject/file2.ts",
            "textChanges": [
              {
                "newText": "hello",
                "start": {
                  "line": 3,
                  "offset": 13
                },
                "end": {
                  "line": 3,
                  "offset": 18
                }
              }
            ]
          }
        ]
      },
      "seq": 11,
      "type": "request"
    }
Info 76   [00:02:51.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

Before request

Info 77   [00:02:52.000] request:
    {
      "command": "compileOnSaveAffectedFileList",
      "arguments": {
        "file": "/user/username/projects/myproject/file2.ts"
      },
      "seq": 12,
      "type": "request"
    }
Info 78   [00:02:53.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 79   [00:02:54.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 3 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 80   [00:02:55.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 81   [00:02:56.000] 	Files (5)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/file1.ts SVC-1-1 "const x = 1;\nfunction foo() {\n    return \"world\";\n}"
	/user/username/projects/myproject/file2.ts SVC-2-1 "const y = 2;\nfunction bar() {\n    return \"hello\";\n}"
	/user/username/projects/myproject/file3.ts Text-1 "const xy = 3;"
	/user/username/projects/myproject/module.ts Text-1 "export const xyz = 4;"

Info 82   [00:02:57.000] -----------------------------------------------
Info 83   [00:02:58.000] Before ensureProjectForOpenFiles:
Info 84   [00:02:59.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 84   [00:03:00.000] 	Files (5)

Info 84   [00:03:01.000] -----------------------------------------------
Info 84   [00:03:02.000] Open files: 
Info 84   [00:03:03.000] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info 84   [00:03:04.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 84   [00:03:05.000] 	FileName: /user/username/projects/myproject/file2.ts ProjectRootPath: undefined
Info 84   [00:03:06.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 84   [00:03:07.000] After ensureProjectForOpenFiles:
Info 85   [00:03:08.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 85   [00:03:09.000] 	Files (5)

Info 85   [00:03:10.000] -----------------------------------------------
Info 85   [00:03:11.000] Open files: 
Info 85   [00:03:12.000] 	FileName: /user/username/projects/myproject/file1.ts ProjectRootPath: undefined
Info 85   [00:03:13.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 85   [00:03:14.000] 	FileName: /user/username/projects/myproject/file2.ts ProjectRootPath: undefined
Info 85   [00:03:15.000] 		Projects: /user/username/projects/myproject/tsconfig.json
Info 85   [00:03:16.000] response:
    {
      "response": [
        {
          "projectFileName": "/user/username/projects/myproject/tsconfig.json",
          "fileNames": [
            "/user/username/projects/myproject/file2.ts"
          ],
          "projectUsesOutFile": false
        }
      ],
      "responseRequired": true
    }
After request

Before request

Info 86   [00:03:17.000] request:
    {
      "command": "compileOnSaveEmitFile",
      "arguments": {
        "file": "/user/username/projects/myproject/file2.ts"
      },
      "seq": 13,
      "type": "request"
    }
Info 87   [00:03:24.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request
//// [/user/username/projects/myproject/file2.js]
var y = 2;
function bar() {
    return "hello";
}


//// [/user/username/projects/myproject/file2.d.ts] file written with same contents
