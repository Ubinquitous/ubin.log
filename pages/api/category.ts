// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import * as path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') return res.status(405).send('Method Not Allowed')

	function extractCategory(fileContents: string): string[] {
		const startIndex = fileContents.indexOf('[')
		const endIndex = fileContents.indexOf(']', startIndex)
		if (startIndex !== -1 && endIndex !== -1) {
			const categoryPart = fileContents.substring(startIndex + 1, endIndex)
			return categoryPart.split(', ').filter((value, index, self) => self.indexOf(value) === index)
		}
		return []
	}

	async function readFiles(directory: string): Promise<string[]> {
		const files = await fs.promises.readdir(directory)

		const fileContentsPromises: Promise<string>[] = files.map(async (file) => {
			const filePath = path.join(directory, file)
			return fs.promises.readFile(filePath, 'utf8')
		})

		const fileContentsArray = await Promise.all(fileContentsPromises)

		const category: string[] = []
		fileContentsArray.forEach((fileContents) => {
			const extractedCategory = extractCategory(fileContents)
			category.push(...extractedCategory)
		})

		const uniqueCategories = [...new Set(category)]
		return uniqueCategories
	}

	const directoryPath = 'contents'

	readFiles(directoryPath)
		.then((category) => {
			res.status(200).json(category)
		})
		.catch((err) => {
			res.status(500).send(err)
		})
}
