
export const ckEditorCorrector = (data: string) => {
  const imgRegex = /!\[.*?\]\(.*?\)/g;

  const gridOpeningRegex = /\(g\)/g;
  const divEndingRegex = /\(gce\)/g;

  const colOpeningRegex = /\(c\)\(\d\)/g;

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

  const removePTagWrappingGrid = replacedDataWithImage.replace(/<p><div/g, "<div");

  return fixUnnecessaryPTags(removePTagWrappingGrid);
}

export const ckEditorCorrectorReverse = (data: string) => {
  const imgRegex = /<img.*?\/>/g;

  const gridOpeningRegex = /<div class='grid grid-cols-1 gap-4 md:grid-cols-2'>/g;
  const endingRegex = /<\/div>/g;
  const colOpeningRegex = /<div class="md:col-span-\d col-span-1">/g;

  const replacedDataWithGridOpening = data.replace(gridOpeningRegex, "(g)");
  const replacedDataWithColOpening = replacedDataWithGridOpening.replace(colOpeningRegex, (match) => {
    const spanCol = match.split("md:col-span-")[1].split(" ")[0];
    return `(c)(${spanCol})`;
  });
  const replacedDataWithEnding = replacedDataWithColOpening.replace(endingRegex, "(gce)");

  const replacedDataWithImage = replacedDataWithEnding.replaceAll(imgRegex, (match) => {
    const src = match.split("src=\"")[1].split("\"")[0];
    const alt = match.split("alt=\"")[1].split("\"")[0];
    return `![${alt}](${src})`;
  });

  return replacedDataWithImage;
}

const fixUnnecessaryPTags = (htmlData: string) => {
  let openPCount = 0;

  return htmlData.replace(/<\/?p>/g, (match) => {
    if (match === "<p>") {
      openPCount++; // Increase count for an opening <p>
      return match;
    } else if (match === "</p>") {
      if (openPCount > 0) {
        openPCount--; // Match found, decrease count
        return match;
      } else {
        return ""; // Remove unmatched </p>
      }
    }
    return match;
  });
}
