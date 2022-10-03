const fs = require ('fs');
const { lstat } = require('fs/promises');
const MyPromises = require('fs/promises');


fs.readdir(process.cwd(), async (err, filenames) => {   
   if(err){
      console.log(err);
   }

   const statPromises = filenames.map(filename => {
      return MyPromises.lstat(filename);
   });

   const allStats = await Promise.all(statPromises);
   for(let i=0;  i < allStats.length; i++) {      
      if (allStats[i].isFile()){
         console.log((filenames[i], allStats[i].isFile()));
      }
      else{
         console.log((filenames[i], allStats[i].isFile()));      
      }
   }   
});