// No dependencies or secret interpolation: validate the self-contained client.
const fs=require('node:fs');const html=fs.readFileSync('dist/index.html','utf8');new Function(html.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('PixelPlaza demo validated');
