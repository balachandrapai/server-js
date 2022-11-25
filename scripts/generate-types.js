const { spawn, exec } = require('child_process');
const path = require('path');

const swaggerPath = path.join(__dirname, '..','openapi.pokemon.yaml');

const generateClient = (file) =>
new Promise((resolve, reject) => {
  console.log(`Generating Client based on ${file}`);

  exec(
    `yarn openapi -i ${file} -o ./packages/server/src/generated/datasources -c axios --useOptions --indent 2`,
    (err, stdout) => {
      if (err) {
        console.error(err);
        reject(err);
      }

      console.log(stdout);
      resolve(stdout);
    },
  );
});


generateClient(swaggerPath);

function generate() {
  const buildSchema = spawn('yarn', ['schema', 'build']);
  buildSchema.stdout.on('data', (data) => console.log(data.toString().trim()));
  buildSchema.on('close', (code) => {
    exec('git add .', (err, out, derr) => {
      if (err) {
        console.log(err);
      }
    });
  });
}

generate();
