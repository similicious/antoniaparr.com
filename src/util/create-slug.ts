export function createSlug(title: string): string {
  return (
    title
      // remove leading & trailing whitespace
      .trim()
      // replace umlauts
      .replace(/[Üü]/g, "ue")
      .replace(/[Ää]/g, "ae")
      .replace(/[Öö]/g, "oe")
      // remove special characters
      .replace(/[^A-Za-z0-9 ]/g, "")
      // replace spaces
      .replace(/\s+/g, "-")
      // remove leading & trailing separtors
      .replace(/^-+|-+$/g, "")
      // output lowercase
      .toLowerCase()
  );
}
