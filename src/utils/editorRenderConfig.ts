export const editorRenderConfig = {
  delimiter: {
    className: "border border-2 w-16 mx-auto"
  },
  embed: {
    className: "border-0"
  },
  header: {
    className: "font-bold mb-2"
  },
  image: {
    className: "w-full max-w-screen-md",
    actionsClassNames: {
      stretched: "w-full h-80 object-cover",
      withBorder: "border border-2",
      withBackground: "p-2",
    }
  },
  list: {
    className: "list-inside mb-4 gap-2 flex flex-col"
  },
  paragraph: {
    className: "text-opacity-75 mb-4 text-justify",
  },
  quote: {
    className: "py-3 italic font-serif"
  },
  table: {
    className: "w-full blog-table mb-4",
    actionsClassNames: {
      table: "w-full"
    }
  },
}