# Blank Page Prototyping ✨

### Figma, but IRL. Just take a picture of your page and it magically generates a website based on it, with AI.

## Features

- Connect to your phone or webcam.
- Take picture and upload it to OpenAI GPT4o.
- Generate a simple HTML website based on the content.

## How it works

1. The home page opens your camera (the back camera on a phone) with `getUserMedia`.
2. You take a picture of a page you drew or printed.
3. The image is sent as base64 to `pages/api/generate-html.js`, which asks `gpt-4o` to turn it into HTML.
4. The returned HTML is shown as the generated website.

## Preview

![Preview](https://i.imgur.com/QnLFiVf.png)
![Preview](https://i.imgur.com/E4rzDwa.png)
![Preview](https://i.imgur.com/odLRLib.png)
![Preview](https://i.imgur.com/b9EvmFK.png)

## Installation

Needs Node.js 22+ and an OpenAI API key.

```bash
git clone https://github.com/aaronjmars/blank-page-prototyping.git
cd blank-page-prototyping
npm install
cp .env.example .env.local   # then set OPENAI_API_KEY
npm run dev
```

Open http://localhost:3000. The dev server listens on all interfaces (`-H 0.0.0.0`), so other devices on your network can reach it too. Browsers only allow camera access on `localhost` or HTTPS, so for a phone you need an HTTPS tunnel or deploy.

### Config

- `OPENAI_API_KEY`: OpenAI key used by the API route.

To change how pages are generated, edit the prompt or `max_tokens` in `pages/api/generate-html.js`.

## Contribution

_Contributions are welcome!_
If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.

---

Built by [Aaron Elijah Mars](https://aaronjmars.com), founder of Aeon and MiroShark · [@aaronjmars](https://github.com/aaronjmars)
