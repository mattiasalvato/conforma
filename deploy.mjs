import FtpDeploy from "ftp-deploy";

const ftpDeploy = new FtpDeploy();

const config = {
  user: "4062365@aruba.it",
  password: "Welaten2026##",
  host: "ftp.conformagroup.it",
  port: 21,
  localRoot: "./dist",
  remoteRoot: "/conformagroup.it/", // Se la cartella si chiama conformagroup.it
  // remoteRoot: "/www.conformagroup.it/", // Usa questo se vedi il prefisso www
  include: ["*", "**/*"],
  deleteRemote: false,
  forcePasv: true
};

console.log("Connessione e caricamento in corso su Aruba...");

ftpDeploy.on("uploading", function (data) {
  console.log(`Caricamento [${data.transferredFileCount}/${data.totalFilesCount}]: ${data.filename}`);
});

ftpDeploy
  .deploy(config)
  .then(() => console.log("✅ Deploy completato con successo!"))
  .catch((err) => console.error("❌ Errore durante il deploy:", err));