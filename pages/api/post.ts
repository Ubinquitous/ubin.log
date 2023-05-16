// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import * as path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	interface FileData {
		name: string
		contents: string
		category: string[] | null
	}

	if (req.method !== 'GET') return res.status(405).send('Method Not Allowed')

	function readFiles(directory: string): Promise<FileData[]> {
		return new Promise((resolve, reject) => {
			fs.readdir(directory, (err, files) => {
				if (err) return reject(err)

				const fileDataArray: FileData[] = []

				files.forEach((file) => {
					const filePath = path.join(directory, file)
					const contents = fs.readFileSync(filePath, 'utf8')

					const category = contents[0] !== '[' ? null : contents.substring(contents.indexOf('[') + 1, contents.indexOf(']'))

					const fileData: FileData = {
						name: file.replace('.md', ''),
						contents: contents.replace(`[${category}]\n\n`, ''),
						category: contents[0] !== '[' ? null : !!category ? category.split(', ') : null,
					}
					fileDataArray.push(fileData)
				})

				resolve(fileDataArray)
			})
		})
	}

	const directoryPath = 'contents'

	readFiles(directoryPath)
		.then((fileDataArray) => {
			res.status(200).json(fileDataArray)
		})
		.catch((err) => {
			res.status(500).send(err)
		})
}
