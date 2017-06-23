const { spawnSync } = require('child_process')
const { writeFileSync, unlinkSync } = require('fs')

const compileNRun = (file, code) => {
  writeFileSync(`/tmp/${file}.c`,  code)
  let output = ''
  const gcc = spawnSync('gcc', ['-Wall', `/tmp/${file}.c`, '-o', `/tmp/${file}`, '-lm'])
  if (gcc.status == 0) {
    output += gcc.stdout + '\n'
    const compiled = spawnSync(`/tmp/${file}`)
    if (compiled.status == 0) {
      output += compiled.stdout + '\n'
    } else {
      output += compiled.stderr + '\n'
    }
    unlinkSync(`/tmp/${file}`)
  } else {
    output += gcc.stderr + '\n'
  }
  unlinkSync(`/tmp/${file}.c`)
  return output
}

module.exports = { compileNRun }
