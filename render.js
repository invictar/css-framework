const constants = { headings: [1, 2, 3, 4, 5, 6] };

function renderMoustache() {
  const templates = document.querySelectorAll('script[type="x-tmpl-mustache"]');
  [...templates].forEach((element) => {
    const { innerHTML: template } = element;
    const reference = element.getAttribute("data-mustache");
    const html = Mustache.render(template, constants);
    const headings = (document.getElementById(reference).innerHTML = html);
  });
}
