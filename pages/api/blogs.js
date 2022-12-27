// All route
/*
1.


*/
import * as fs from 'fs';

export default async function handler(req, res) {
  const data = await fs.promises.readdir("blogsData");

  let allBlogs = [];
  let myFile;

  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    myFile = await fs.promises.readFile(('blogsData/' + item), 'utf-8')

    allBlogs.push(JSON.parse(myFile))

  }
  res.status(200).json(allBlogs);

}





// export default function handler(req, res) {

//   // solution: for all data files => read full directory files
//   fs.readdir('blogdata', (err, data) => {
//     res.status(200).json(data);
//   })
// }



