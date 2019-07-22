export default () => (
  <main>
    <link rel="stylesheet" href="https://unpkg.com/type-system" />
    <h1 className="h1 mt0 mb0">Hello!</h1>
    <p className="h3 mt1">This is my Next.js-powered React site.</p>
    <img src="https://cdn.glitch.com/07c030d0-d34c-4801-8693-1aeb85439881%2Fimage.jpg?1541992386787" />

    <style jsx>{`
      main {
        margin: 1rem;
      }

      h1 {
        color: #ec3750;
        font-style: italic;
        font-weight: 900;
      }

      img {
        max-width: 100%;
        border-radius: 8px;
      }
    `}</style>
  </main>
)
