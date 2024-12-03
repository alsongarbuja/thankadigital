
export const ckEditorCorrector = (data: string) => {
  const imgRegex = /!\[.*?\]\(.*?\)/g;

  const gridOpeningRegex = /\(grid\)/g;
  const divEndingRegex = /\(grid-col-end\)/g;

  const colOpeningRegex = /\(col\)\(\d\)/g;

  const replacedDataWithGridOpening = data.replace(gridOpeningRegex, "<div class='grid grid-cols-1 gap-4 md:grid-cols-2'>");
  const replacedDataWithColOpening = replacedDataWithGridOpening.replace(colOpeningRegex, (match) => {
    const spanCol = match.split(")(")[1].replace(")", "");
    return `<div class="md:col-span-${spanCol} col-span-1">`;
  });
  const replacedDataWithDivClosing = replacedDataWithColOpening.replace(divEndingRegex, "</div>");

  const replacedDataWithImage = replacedDataWithDivClosing.replaceAll(imgRegex, (match) => {
    const [alt, src] = match.split("](");
    return `<img src="${src.replace(")", "")}" alt="${alt.split("![")[1]}" class="object-cover w-full h-auto rounded-md" />`;
  });

  const removePTagWrappingGrid = replacedDataWithImage.replace(/<p><div/g, "<div").replace(/<\/div><\/p>/g, "</div>");

  return removePTagWrappingGrid;
}

export const ckEditorCorrectorReverse = (data: string) => {
  const imgRegex = /<img.*?\/>/g;

  const gridOpeningRegex = /<div class='grid grid-cols-1 gap-4 md:grid-cols-2'>/g;
  const endingRegex = /<\/div>/g;
  const colOpeningRegex = /<div class="md:col-span-\d col-span-1">/g;

  const replacedDataWithGridOpening = data.replace(gridOpeningRegex, "(grid)");
  const replacedDataWithColOpening = replacedDataWithGridOpening.replace(colOpeningRegex, (match) => {
    const spanCol = match.split("md:col-span-")[1].split(" ")[0];
    return `(col)(${spanCol})`;
  });
  const replacedDataWithEnding = replacedDataWithColOpening.replace(endingRegex, "(grid-col-end)");

  const replacedDataWithImage = replacedDataWithEnding.replaceAll(imgRegex, (match) => {
    const src = match.split("src=\"")[1].split("\"")[0];
    const alt = match.split("alt=\"")[1].split("\"")[0];
    return `![${alt}](${src})`;
  });

  const addedPTagToWrapGrid = `<p>${replacedDataWithImage}</p>`;

  return addedPTagToWrapGrid;
}
