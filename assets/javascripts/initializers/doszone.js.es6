import { withPluginApi } from "discourse/lib/plugin-api";

const prefix = "/uploads/short-url/";
const suffix = ".jsdos";
const slugPrefix = "/t/";

function initializeJsdos(api) {
  api.decorateCooked((elem) => {
    elem.find(".attachment").each(function (i) {
      const location = window.location.href;
      const slugPart = location.substr(location.indexOf(slugPrefix) + slugPrefix.length);
      const slug = slugPart.substr(0, slugPart.indexOf("/"));
      const el = $(this);
      const href = el.attr("href");
      if (href.startsWith(prefix) && href.endsWith(suffix)) {
        const hash = href.substr(prefix.length, href.length - prefix.length - suffix.length);
        const url = encodeURIComponent(slug + "@" + el.text() + ":") + hash;
        el.after($("<strong><a href=\"https://dos.zone/rep/my/" +
                   url + "\">play</a></strong>"));
        el.after("&nbsp;|&nbsp;");
      }
    });
  });
}

export default {
  name: "doszone",

  initialize() {
    withPluginApi("0.8.31", initializeJsdos);
  }
};
