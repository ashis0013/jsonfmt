#!/usr/bin/env node
const _=require('fs');process.argv[2]&&(process.argv[2]??'').indexOf('.json')
!==-1?(_.writeFileSync(process.argv[2],JSON.stringify(JSON.parse(_.readFileSync
(process.argv[2]).toString()),null,4))):console.log('Enter path to json')
