export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};


export const NoTranslate = ({ children }) => {
  return <span translate="no">{children}</span>;
};