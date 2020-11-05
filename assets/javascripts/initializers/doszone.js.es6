import { withPluginApi } from "discourse/lib/plugin-api";

const prefix = "/uploads/short-url/";
const suffix = ".jsdos";

function initializeJsdos(api) {
  api.decorateCooked((elem) => {
    elem.find(".attachment").each(function (i) {
      const el = $(this);
      const href = el.attr("href");
      if (href.startsWith(prefix) && href.endsWith(suffix)) {
        const hash = href.substr(prefix.length, href.length - prefix.length - suffix.length);
        el.after($("<strong><a href=\"https://dos.zone/rep/my/" + hash +
                   "?name=" + encodeURIComponent(el.text()) + "\">play</a></strong>"));
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
