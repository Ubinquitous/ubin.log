// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import * as path from "path";
import PostType from "@/types/post.type";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).send("Method Not Allowed");

  function readFiles(directory: string): Promise<PostType[]> {
    return new Promise((resolve, reject) => {
      fs.readdir(directory, (err, files) => {
        if (err) return reject(err);

        const fileDataArray: PostType[] = [];

        files.forEach((file) => {
          const filePath = path.join(directory, file);
          const fileContent = fs.readFileSync(filePath, "utf8");

          const { name, image, category, contents, date } = {
            name: file.replace(".md", ""),
            image: fileContent.substring(fileContent.indexOf("(") + 1, fileContent.indexOf(")")),
            category:
              fileContent[0] !== "["
                ? null
                : fileContent.substring(fileContent.indexOf("[") + 1, fileContent.indexOf("]")).split(", "),
            date: fileContent.substring(fileContent.indexOf("{") + 1, fileContent.indexOf("}")),
            contents: fileContent
              .replace(fileContent.substring(fileContent.indexOf("["), fileContent.indexOf("}") + 1), "")
              .replace(/#/gi, ""),
          };

          const fileData: PostType = {
            name,
            image,
            category,
            contents,
            date: parseInt(date),
          };
          fileDataArray.push(fileData);
        });

        const dataArray = fileDataArray.sort((a: PostType, b: PostType) => a.date - b.date).reverse();

        resolve(dataArray);
      });
    });
  }

  const directoryPath = "contents";

  readFiles(directoryPath)
    .then((fileDataArray) => {
      res.status(200).json(fileDataArray);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
