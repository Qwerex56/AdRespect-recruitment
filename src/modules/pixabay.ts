const getPixabayImages = async (
  options: {
    fetchKey: string,
    searchFor: string | undefined,
    minWidth: number | undefined,
    minHeight: number | undefined
}) => {
  let fetchUrl = 'https://pixabay.com/api/?'.concat('key=', options.fetchKey);

  if (options.searchFor !== undefined) {
    fetchUrl = fetchUrl.concat('&q=', options.searchFor);
  }
  if (options.minWidth !== undefined) {
    fetchUrl = fetchUrl.concat('&min_width=', options.minWidth.toString());
  }
  if (options.minHeight !== undefined) {
    fetchUrl = fetchUrl.concat('&min_height=', options.minHeight.toString());
  }

  fetchUrl = fetchUrl.concat('&image_type=photo');

  const response = await fetch(fetchUrl);
  const jsonData = await response.json();

  const images: string[] = [];

  for (let img = 0; img < 20; img++) {
    images.push(jsonData.hits[img].previewURL);
  }

  return images;
}

export default getPixabayImages;