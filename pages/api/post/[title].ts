import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import PostType from "@/types/post.type";

export default function handler(req: NextApiRequest, res: NextApiResponse<PostType | string>): void {
  const { title } = req.query;

  if (typeof title === "string") {
    const filename = title + ".md";
    const filePath = path.join(process.cwd(), "contents", filename);

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const response = {
        name: title,
        image: fileContent.substring(fileContent.indexOf("(") + 1, fileContent.indexOf(")")),
        category:
          fileContent[0] !== "["
            ? null
            : fileContent.substring(fileContent.indexOf("[") + 1, fileContent.indexOf("]")).split(", "),
        date: parseInt(fileContent.substring(fileContent.indexOf("{") + 1, fileContent.indexOf("}"))),
        contents: fileContent
          .replace(fileContent.substring(fileContent.indexOf("["), fileContent.indexOf("}") + 1), "")
          .replace(/#/gi, ""),
      };

      res.json(response);
    } else {
      res.status(404).send("File not found");
    }
  } else {
    res.status(400).send("Invalid query parameter");
  }
}
