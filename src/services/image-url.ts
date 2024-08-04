import noImage from "../assets/react.svg";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage; // handling games with no image on the server
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
