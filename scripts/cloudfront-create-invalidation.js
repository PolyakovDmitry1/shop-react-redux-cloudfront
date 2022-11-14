const { spawn, execSync } = require('child_process');
const exec = commands => {
  execSync(commands, { stdio: 'inherit', shell: true });
};
const spawnProcess = commands => {
  spawn(commands, { stdio: 'inherit', shell: true });
};
   const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please, enter your Distribution Id ', (distributionId) => {
  distributionId = distributionId === '' ? 'E1PBKMW1FB5SYC': distributionId
  console.log(`Distribution Id is: ${distributionId}`);
  exec(`aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`);
  rl.close();
});