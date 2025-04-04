import { exec as execCb } from 'child_process'

export default function exec(cmd, opts = {}) {
  return new Promise((resolve, reject) => {
    execCb(cmd, opts, (err, stdout, stderr) => {
      if (err) return reject(err)
      resolve(stdout)
    })
  })
}