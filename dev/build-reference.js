const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

child_process.execSync("./node_modules/.bin/javadoc -o ./documentation/REFERENCE.json -f json", {
    cwd: path.resolve(__dirname, ".."),
    stdio: [process.stdin, process.stdout, process.stderr]
});

const ref = require(__dirname + "/../documentation/REFERENCE.json");

let md = "";

md += `# The official \`color-manipulator\` API Reference



`;

const ficheros = ref.success;

for (let index_fichero = 0; index_fichero < ficheros.length; index_fichero++) {
    const comentarios = ficheros[index_fichero];
    for (let index_comentario = 0; index_comentario < comentarios.length; index_comentario++) {
        const comentario = comentarios[index_comentario];
        md += "\n\n------\n\n";
        for (let celda in comentario) {
            const valores = comentario[celda];
            if (celda !== "_") {
                md += "- **";
                md += celda;
                md += "**: ";
            }
            if (typeof valores === "string") {
                md += valores.trim();
            } else if (Array.isArray(valores)) {
                for (let index_valor = 0; index_valor < valores.length; index_valor++) {
                    const valor = valores[index_valor];
                    md += valor.trim() + "\n";
                }
            }
        }
    }
}
md += "";

fs.writeFileSync(__dirname + "/../documentation/REFERENCE.md", md, "utf8");