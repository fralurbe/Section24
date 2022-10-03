const fs = require ('fs');
const { lstat } = require('fs/promises');

fs.readdir(process.cwd(), async (err, filenames) => {   
   if(err){
      console.log(err);
   }

   const statPromises = filenames.map(filename => {
      return lstat(filename);
   });

   const allStats = await Promise.all(statPromises);
   for(let i=0;  i < allStats.length; i++) {      
      console.log (filenames[i], allStats[i].isFile());
   }   
});