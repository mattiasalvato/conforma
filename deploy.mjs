import * as ftp from 'basic-ftp';

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true; // Mostra lo stato e il trasferimento file nel terminale

  try {
    console.log("Connessione al server Aruba...");
    await client.access({
      host: "ftp.conformagroup.it",
      user: "4062365@aruba.it",
      password: "Welaten2026##",
      secure: false
    });

    console.log("Connesso! Caricamento dei file da ./dist nella root...");
    
    // Carica direttamente nella root corrente visualizzata dal server ("/")
    await client.uploadFromDir("dist", "/");

    console.log("✅ Deploy completato con successo!");
  } catch (err) {
    console.error("❌ Errore durante il deploy:", err);
  } finally {
    client.close();
  }
}

deploy();