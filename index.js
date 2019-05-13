


/*

ouvrir template

pour chaque langue 
    remplacer les element dans le tempalte
    créer template_xx ou xx est la langue

*/

// const fs = require('fs')
// const template = fs.readFile('./index.html', 'utf8', (template)=>{
//     console.log(template);
    
// })
const template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>!!title!!</title>
</head>

<body bgcolor="#000000">
<p align="center"><img src="/www.demandware.com/siteDown.png" alt="Demandware.com will be back soon" width="915" height="460" align="middle" /></p>
<p>!!p!!</p>
</body>
</html>
`
const maintenances = [
    { language: FR, content: { paragraph: `Oupss désolé! Le site est actuellement en cours de maintenance.<br>
Mais ne vous inquiétez pas, nous serons de retour très rapidement.Merci pour votre patience.`, title: `mon title`}},
    { language:  EN, content: { paragraph: `Oupss sorry! We are currently down for maintenance.<br>
But don’t worry, we’ll be back shortly.Thanks for your patience`, title: `mon title`}},
    { language: FR_BE, content: { paragraph: `Oupss désolé! Le site est actuellement en cours de maintenance.<br>
Mais ne vous inquiétez pas, nous serons de retour très rapidement.Merci pour votre patience`, title: `mon title`}},
    { language: NL_BE, content: { paragraph: `Oepss Sorry! De site ondergaat momenteel een onderhoud.<br>
Maar maak je geen zorgen, we komen snel terug.Bedankt voor uw geduld`, title: `mon title`}},
    { language: NL, content: { paragraph: `Oeps… We zijn momenteel offline vanwege onderhoud aan onze website.<br>
We zijn zo snel mogelijk weer online.Bedankt voor je geduld`, title: `mon title`}},
    { language: DE, content: { paragraph: `Entschuldigung! An unserer Website werden derzeit Wartungsarbeiten vorgenommen.<br>
Aber keine Sorge, wir kommen bald wieder.Vielen Dank für Ihre Geduld`, title: `mon title`}},
    { language: AT, content: { paragraph: `Entschuldigung! An unserer Website werden derzeit Wartungsarbeiten vorgenommen.<br>
Aber keine Sorge, wir kommen bald wieder.Vielen Dank für Ihre Geduld`, title: `mon title`}},
    { language: ES, content: { paragraph: `Oupss lo sentimos! Actualmente estamos realizando labores de mantenimiento.<br>
Pero no te preocupes, volveremos en breve.¡Gracias por tu paciencia!`, title: `mon title`}},
    { language: IT, content: { paragraph: `Ops! Il sito è attualmente in manutenzione.<br>
Ma non preoccuparti, torneremo presto!`}}
]

maintenances.forEach(langObj => {
    console.log();
    
});

// // creating archives
// var zip = new AdmZip();

// // add file directly
// var content = "inner content of the file";
// zip.addFile("test.txt", Buffer.alloc(content.length, content), "entry comment goes here");
// // add local file
// zip.addLocalFile("/home/me/some_picture.png");
// // get everything as a buffer
// var willSendthis = zip.toBuffer();
// // or write everything to disk
// zip.writeZip(/*target file name*/"/home/me/files.zip");