import { parse } from 'node-html-parser';

const response = await fetch("https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge")
const html = await response.text()
const root = parse(html)

let result = ""
root.querySelectorAll("code > div > span > i.char").forEach((el) => {
	result += el.getAttribute("value")
})
console.log(result)