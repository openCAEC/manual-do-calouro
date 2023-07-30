const fs = require("fs").promises;
const path = require("path");
const brotli = require("brotli");

async function getFiles(dir) {
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    for (const item of items) {
      const res = path.resolve(dir, item.name);
      if (item.isDirectory()) {
        await getFiles(res);
      } else {
        if ([".js", ".css", ".html"].includes(path.extname(item.name))) {
          const originalSize = (await fs.stat(res)).size;
          if (originalSize > 10240) {
            const compressedFilePath = res + ".br";
            await fs.writeFile(
              compressedFilePath,
              await brotli.compress(await fs.readFile(res), {
                mode: 1,
                quality: 11,
              })
            );

            const compressedSize = (await fs.stat(compressedFilePath)).size;

            const minRatio = compressedSize / originalSize;

            if (minRatio > 0.8) {
              await fs.unlink(compressedFilePath);
            } else {
              await fs.unlink(res);
            }
          }
        }
      }
    }
  } catch (err) {
    console.error(`Erro ao listar arquivos do diretório ${dir}: ${err}`);
  }
}

getFiles("./docs");
