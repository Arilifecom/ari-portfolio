import { load } from "cheerio";
import hljs from "highlight.js";

const formatRichText = (richText) => {
  const $ = load(richText);

  const highlight = (text, lang) => {
    if (!lang) return hljs.highlightAuto(text);
    try {
      return hljs.highlight(text, { language: lang.replace(/^language-/, "") });
    } catch (e) {
      return hljs.highlightAuto(text);
    }
  };

  $("pre code").each((_, elm) => {
    const lang = $(elm).attr("class");
    const res = highlight($(elm).text(), lang);
    $(elm).html(res.value);
    $(elm).addClass("hljs");
  });

  //<table>を <div>でラップし、table-wrapのクラス名を付与
  $("table").each((_, elm) => {
    const tableHtml = $.html(elm);
    const wrapper = $('<div class="table-wrap"></div>');
    wrapper.html(tableHtml);
    $(elm).replaceWith(wrapper);
  });

  return $.html();
};

export default formatRichText;
