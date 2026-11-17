const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🚀 Preparing production bundle for cPanel...')

const rootDir = path.resolve(__dirname, '..')
const standaloneDir = path.join(rootDir, '.next', 'standalone')
const staticDir = path.join(rootDir, '.next', 'static')
const publicDir = path.join(rootDir, 'public')
const zipName = 'deploy.zip'

if (!fs.existsSync(standaloneDir)) {
  console.error('❌ .next/standalone does not exist. Run "next build" first.')
  process.exit(1)
}

// 1. Copy .next/static -> .next/standalone/.next/static
const targetStaticDir = path.join(standaloneDir, '.next', 'static')
fs.cpSync(staticDir, targetStaticDir, { recursive: true })

// 2. Copy public -> .next/standalone/public
const targetPublicDir = path.join(standaloneDir, 'public')
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, targetPublicDir, { recursive: true })
}

// 3. Copy .env if available
const envFile = path.join(rootDir, '.env')
if (fs.existsSync(envFile)) {
  fs.copyFileSync(envFile, path.join(standaloneDir, '.env'))
}

// 4. Create tmp/restart.txt for Passenger
const tmpDir = path.join(standaloneDir, 'tmp')
fs.mkdirSync(tmpDir, { recursive: true })
fs.writeFileSync(path.join(tmpDir, 'restart.txt'), '')

// 5. Prepend TLS bypass to server.js so Next.js Image Optimizer can fetch from c657400.parspack.net
const serverFile = path.join(standaloneDir, 'server.js')
let serverContent = fs.readFileSync(serverFile, 'utf8')

if (!serverContent.includes('NODE_TLS_REJECT_UNAUTHORIZED')) {
  serverContent = "process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';\n" + serverContent
  fs.writeFileSync(serverFile, serverContent, 'utf8')
}

// 6. Zip into deploy.zip
const zipPath = path.join(rootDir, zipName)
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath)
}

try {
  execSync(`cd "${standaloneDir}" && zip -q -r "${zipPath}" .`)
  const stats = fs.statSync(zipPath)
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2)
  console.log(`✅ ${zipName} created successfully (${sizeMB} MB)`)
} catch (err) {
  console.error('❌ Failed to create zip file:', err)
  process.exit(1)
}