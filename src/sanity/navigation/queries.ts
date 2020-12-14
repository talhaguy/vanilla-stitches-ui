const MAIN_MENU_ID = "VS-N-000001";

export const FETCH_NAVIGATION_LINKS_QUERY = `*[_type == "navigation" && id == "${MAIN_MENU_ID}"].navigationMenus[0][]{
  "label": name,
  links[]->{
    "label": name,
    "slug": slug.current,
    "type": _type,
  }
}`;
