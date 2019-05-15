const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf');
const wrench = require('wrench');
const AdmZip = require('adm-zip');
const template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Maintenance</title>
    <link rel="stylesheet" href="/www.babyliss.!!xx!!/style.css">
</head>
<body>
    <img src="/www.babyliss.!!xx!!/logo.png" alt="logo">
    <div class="error-background" style="background-image: url('/www.babyliss.!!xx!!/error-men.jpg');">
        <p class="error-text">!!p!!</p>
    </div>
</body>
</html>
`
const maintenances = [
    { language: 'FR', content: { paragraph: `Oupss désolé! Le site est actuellement en cours de maintenance.<br>
Mais ne vous inquiétez pas, nous serons de retour très rapidement.Merci pour votre patience.`, title: `mon title`}},
    { language: 'EN', content: { paragraph: `Oupss sorry! We are currently down for maintenance.<br>
But don’t worry, we’ll be back shortly.Thanks for your patience`, title: `mon title`}},
    { language: 'BE', content: { paragraph: `Oupss désolé! Le site est actuellement en cours de maintenance.<br>
Mais ne vous inquiétez pas, nous serons de retour très rapidement.Merci pour votre patience<br>
<br>
Oepss Sorry! De site ondergaat momenteel een onderhoud.<br>
Maar maak je geen zorgen, we komen snel terug.Bedankt voor uw geduld`, title: `mon title`}},
    { language: 'NL', content: { paragraph: `Oeps… We zijn momenteel offline vanwege onderhoud aan onze website.<br>
We zijn zo snel mogelijk weer online.Bedankt voor je geduld`, title: `mon title`}},
    { language: 'DE', content: { paragraph: `Entschuldigung! An unserer Website werden derzeit Wartungsarbeiten vorgenommen.<br>
Aber keine Sorge, wir kommen bald wieder.Vielen Dank für Ihre Geduld`, title: `mon title`}},
    { language: 'AT', content: { paragraph: `Entschuldigung! An unserer Website werden derzeit Wartungsarbeiten vorgenommen.<br>
Aber keine Sorge, wir kommen bald wieder.Vielen Dank für Ihre Geduld`, title: `mon title`}},
    { language: 'ES', content: { paragraph: `Oupss lo sentimos! Actualmente estamos realizando labores de mantenimiento.<br>
Pero no te preocupes, volveremos en breve.¡Gracias por tu paciencia!`, title: `mon title`}},
    { language: 'IT', content: { paragraph: `Ops! Il sito è attualmente in manutenzione.<br>
Ma non preoccuparti, torneremo presto!`}}
]

rimraf('./generated/*', () => { 
    console.log('./generated is now empty');
    const zip = new AdmZip();
    maintenances.forEach(langObj => {
        wrench.copyDirSyncRecursive(path.join(__dirname, 'www.demandware.com'), `generated/www.babyliss.${langObj.language.toLowerCase()}`);
        const indexFile = template.replace(/\!\!xx\!\!/g, langObj.language.toLowerCase()).replace('!!p!!', langObj.content.paragraph)
        fs.writeFileSync(path.join(__dirname, `generated/www.babyliss.${langObj.language.toLowerCase()}/index.html`), indexFile, 'utf8')
    });
    zip.addLocalFolder(path.join(__dirname, `generated`));
    zip.writeZip(path.join(__dirname, 'generated', "maintpages.zip"));
    console.log(`Your .zip is in ${path.join(__dirname, 'generated')}`);
});
